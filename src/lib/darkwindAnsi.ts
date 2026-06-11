import type { CSSProperties } from "react";

export type AnsiFragment = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type ColorState =
  | null
  | { type: "standard" | "bright"; index: number }
  | { type: "256"; index: number }
  | { type: "rgb"; r: number; g: number; b: number };

type StyleState = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  doubleUnderline: boolean;
  strikethrough: boolean;
  overline: boolean;
  hidden: boolean;
  inverse: boolean;
  blink: boolean;
  fraktur: boolean;
  fg: ColorState;
  bg: ColorState;
};

const esc = "\x1b";
const fgCodes: Record<string, number> = { K: 30, R: 31, G: 32, Y: 33, B: 34, M: 35, C: 36, W: 37 };
const bgCodes: Record<string, number> = { K: 40, R: 41, G: 42, Y: 43, B: 44, M: 45, C: 46, W: 47 };
const colorNames = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"];
const color256 = (() => {
  const table: string[] = [];
  const std = ["#000000", "#cd0000", "#00cd00", "#cdcd00", "#0000ee", "#cd00cd", "#00cdcd", "#e5e5e5"];
  const bright = ["#7f7f7f", "#ff0000", "#00ff00", "#ffff00", "#5c5cff", "#ff00ff", "#00ffff", "#ffffff"];
  table.push(...std, ...bright);
  const levels = [0, 95, 135, 175, 215, 255];
  for (const r of levels) {
    for (const g of levels) {
      for (const b of levels) {
        table.push(rgbToHex(r, g, b));
      }
    }
  }
  for (let i = 0; i < 24; i += 1) {
    const value = 8 + i * 10;
    table.push(rgbToHex(value, value, value));
  }
  return table;
})();

function initialState(): StyleState {
  return {
    bold: false,
    italic: false,
    underline: false,
    doubleUnderline: false,
    strikethrough: false,
    overline: false,
    hidden: false,
    inverse: false,
    blink: false,
    fraktur: false,
    fg: null,
    bg: null,
  };
}

function resetState(state: StyleState) {
  Object.assign(state, initialState());
}

function compactCodeToAnsi(code: string) {
  if (code === "000") return `${esc}[0m`;
  if (code.length !== 3) return `|${code}`;

  const params: number[] = [];
  const [fg, bg, effect] = code;
  if (effect === "0" || effect === "O") params.push(0);
  if (fg !== "X" && fgCodes[fg] !== undefined) params.push(fgCodes[fg]);
  else if (fg !== "X") return `|${code}`;
  if (bg !== "X" && bgCodes[bg] !== undefined) params.push(bgCodes[bg]);
  else if (bg !== "X") return `|${code}`;

  if (effect === "B") params.push(1);
  else if (effect === "U") params.push(4);
  else if (effect === "K") params.push(5);
  else if (effect !== "0" && effect !== "O") return `|${code}`;

  return params.length ? `${esc}[${params.join(";")}m` : "";
}

function expandedColorToAnsi(value: string, background: boolean) {
  const color = value.trim().toLowerCase();
  const offset = background ? 10 : 0;
  const brightOffset = background ? 100 : 90;
  const normalOffset = background ? 40 : 30;
  if (!color) return "";
  if (color === "gray" || color === "grey") return `${esc}[${brightOffset}m`;
  if (color.startsWith("bright-")) {
    const index = colorNames.indexOf(color.slice(7));
    return index >= 0 ? `${esc}[${brightOffset + index}m` : "";
  }
  const namedIndex = colorNames.indexOf(color);
  if (namedIndex >= 0) return `${esc}[${normalOffset + namedIndex}m`;

  const ansiMatch = color.match(/^(?:ansi|xterm)-(\d{1,3})$/);
  if (ansiMatch) {
    const index = Number(ansiMatch[1]);
    if (Number.isInteger(index) && index >= 0 && index <= 255) return `${esc}[${background ? 48 : 38};5;${index}m`;
  }

  const hexMatch = color.match(/^#([0-9a-f]{6})$/i);
  if (hexMatch) {
    const r = Number.parseInt(hexMatch[1].slice(0, 2), 16);
    const g = Number.parseInt(hexMatch[1].slice(2, 4), 16);
    const b = Number.parseInt(hexMatch[1].slice(4, 6), 16);
    return `${esc}[${background ? 48 : 38};2;${r};${g};${b}m`;
  }

  return offset ? "" : "";
}

function expandedSpecToAnsi(spec: string) {
  let out = "";
  for (const rawToken of spec.split(",")) {
    const token = rawToken.trim().toLowerCase();
    let value = "";
    if (!token) continue;
    if (token === "reset" || token === "normal") out += `${esc}[0m`;
    else if (token === "bold") out += `${esc}[1m`;
    else if (token === "italic" || token === "italics") out += `${esc}[3m`;
    else if (token === "underline" || token === "underscore") out += `${esc}[4m`;
    else if (token === "blink") out += `${esc}[5m`;
    else if (token === "inverse" || token === "reverse") out += `${esc}[7m`;
    else if (token === "hidden" || token === "conceal" || token === "concealed") out += `${esc}[8m`;
    else if (token === "strikethrough" || token === "strike" || token === "strike-through") out += `${esc}[9m`;
    else if (token === "fraktur") out += `${esc}[20m`;
    else if (token === "double-underline" || token === "double_underline" || token === "doubleunderline") out += `${esc}[21m`;
    else if (token === "overline") out += `${esc}[53m`;
    else if ((value = token.replace(/^fg=|^foreground=/, "")) !== token) out += expandedColorToAnsi(value, false);
    else if ((value = token.replace(/^bg=|^background=/, "")) !== token) out += expandedColorToAnsi(value, true);
    else out += expandedColorToAnsi(token, false);
  }
  return out;
}

export function darkwindMarkupToAnsi(raw: string) {
  const input = String(raw || "");
  let out = "";

  for (let index = 0; index < input.length; index += 1) {
    const current = input[index];
    if (current !== "|") {
      out += current;
      continue;
    }

    if (input[index + 1] === "[") {
      const close = input.indexOf("]", index + 2);
      if (close > index) {
        out += expandedSpecToAnsi(input.slice(index + 2, close));
        index = close;
        continue;
      }
    }

    const code = input.slice(index + 1, index + 4);
    if (code.length === 3) {
      const converted = compactCodeToAnsi(code);
      if (converted !== `|${code}` || code === "000") {
        out += converted;
        index += 3;
        continue;
      }
    }

    out += current;
  }

  return out;
}

export function stripDarkwindColors(raw: string) {
  return String(raw || "")
    .replace(/\x1b\]8;;[^\x07]*\x07/g, "")
    .replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\|\[[^\]]*\]/g, "")
    .replace(/\|[KRGYBMCWXD0][KRGYBMCWXF0][BUK0OT]/g, "")
    .replace(/\|000/g, "");
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function resolveColor(color: ColorState) {
  if (!color) return undefined;
  switch (color.type) {
    case "standard":
      return color256[color.index];
    case "bright":
      return color256[color.index + 8];
    case "256":
      return color256[color.index];
    case "rgb":
      return rgbToHex(color.r, color.g, color.b);
  }
}

function styleKey(state: StyleState) {
  return JSON.stringify(state);
}

function pushFragment(fragments: AnsiFragment[], text: string, state: StyleState) {
  if (!text) return;
  const fragment = stateToFragment(text, state);
  const previous = fragments[fragments.length - 1];
  if (
    previous &&
    previous.className === fragment.className &&
    JSON.stringify(previous.style || {}) === JSON.stringify(fragment.style || {})
  ) {
    previous.text += text;
  } else {
    fragments.push(fragment);
  }
}

function stateToFragment(text: string, state: StyleState): AnsiFragment {
  const classNames: string[] = [];
  const style: CSSProperties = {};
  const fg = state.inverse ? resolveColor(state.bg) || "#0d1117" : resolveColor(state.fg);
  const bg = state.inverse ? resolveColor(state.fg) || "#c9d1d9" : resolveColor(state.bg);

  if (fg) style.color = fg;
  if (bg) style.backgroundColor = bg;
  if (state.bold) classNames.push("ansi-bold");
  if (state.italic) classNames.push("ansi-italic");
  if (state.fraktur) classNames.push("ansi-fraktur");
  if (state.hidden) classNames.push("ansi-hidden");
  if (state.blink) classNames.push("ansi-blink");

  const decoration = [];
  if (state.underline || state.doubleUnderline) decoration.push("underline");
  if (state.strikethrough) decoration.push("line-through");
  if (state.overline) decoration.push("overline");
  if (decoration.length) {
    style.textDecorationLine = decoration.join(" ");
    style.textDecorationStyle = state.doubleUnderline ? "double" : "solid";
    style.textUnderlineOffset = "2px";
  }

  return {
    text,
    className: classNames.length ? classNames.join(" ") : undefined,
    style: Object.keys(style).length ? style : undefined,
  };
}

function applySgr(params: number[], state: StyleState) {
  if (!params.length) params = [0];

  for (let index = 0; index < params.length; index += 1) {
    const code = Number.isFinite(params[index]) ? params[index] : 0;
    if (code === 0) resetState(state);
    else if (code === 1) state.bold = true;
    else if (code === 3) state.italic = true;
    else if (code === 4) {
      state.underline = true;
      state.doubleUnderline = false;
    } else if (code === 5) state.blink = true;
    else if (code === 7) state.inverse = true;
    else if (code === 8) state.hidden = true;
    else if (code === 9) state.strikethrough = true;
    else if (code === 20) state.fraktur = true;
    else if (code === 21) {
      state.underline = true;
      state.doubleUnderline = true;
    } else if (code === 22) state.bold = false;
    else if (code === 23) {
      state.italic = false;
      state.fraktur = false;
    } else if (code === 24) {
      state.underline = false;
      state.doubleUnderline = false;
    } else if (code === 25) state.blink = false;
    else if (code === 27) state.inverse = false;
    else if (code === 28) state.hidden = false;
    else if (code === 29) state.strikethrough = false;
    else if (code === 39) state.fg = null;
    else if (code === 49) state.bg = null;
    else if (code === 53) state.overline = true;
    else if (code === 55) state.overline = false;
    else if (code >= 30 && code <= 37) state.fg = { type: "standard", index: code - 30 };
    else if (code >= 40 && code <= 47) state.bg = { type: "standard", index: code - 40 };
    else if (code >= 90 && code <= 97) state.fg = { type: "bright", index: code - 90 };
    else if (code >= 100 && code <= 107) state.bg = { type: "bright", index: code - 100 };
    else if ((code === 38 || code === 48) && params[index + 1] === 5 && index + 2 < params.length) {
      const color = { type: "256" as const, index: params[index + 2] };
      if (code === 38) state.fg = color;
      else state.bg = color;
      index += 2;
    } else if ((code === 38 || code === 48) && params[index + 1] === 2 && index + 4 < params.length) {
      const [r, g, b] = [params[index + 2], params[index + 3], params[index + 4]];
      if ([r, g, b].every((value) => Number.isInteger(value) && value >= 0 && value <= 255)) {
        const color = { type: "rgb" as const, r, g, b };
        if (code === 38) state.fg = color;
        else state.bg = color;
      }
      index += 4;
    }
  }
}

export function parseAnsiFragments(input: string): AnsiFragment[] {
  const text = String(input || "");
  const fragments: AnsiFragment[] = [];
  const state = initialState();
  let plain = "";
  let lastKey = styleKey(state);

  const flush = () => {
    pushFragment(fragments, plain, state);
    plain = "";
    lastKey = styleKey(state);
  };

  for (let index = 0; index < text.length; index += 1) {
    if (text.charCodeAt(index) !== 0x1b || text[index + 1] !== "[") {
      plain += text[index];
      continue;
    }

    const end = text.indexOf("m", index + 2);
    if (end < 0) {
      plain += text[index];
      continue;
    }

    flush();
    const params = text
      .slice(index + 2, end)
      .split(";")
      .filter((part) => part !== "")
      .map((part) => Number(part));
    applySgr(params, state);
    lastKey = styleKey(state);
    index = end;
  }

  if (plain || lastKey) flush();
  return fragments;
}

export function renderDarkwindFragments(raw: string) {
  return parseAnsiFragments(darkwindMarkupToAnsi(raw));
}
