import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Compass, Copy, Eye, FileText, Search, Terminal } from "lucide-react";
import { imagePath } from "../data/darkwindSnapshot";
import { renderDarkwindFragments, stripDarkwindColors } from "../lib/darkwindAnsi";

type HelpDocMeta = {
  id: string;
  path: string;
  category: string;
  title: string;
  excerpt: string;
  bytes: number;
  lines: number;
};

type HelpCategory = {
  id: string;
  label: string;
  description: string;
  count: number;
};

type HelpIndex = {
  generatedAt: string;
  totalDocs: number;
  categories: HelpCategory[];
  docs: HelpDocMeta[];
};

type SearchDoc = {
  id: string;
  path: string;
  category: string;
  title: string;
  text: string;
};

type SearchIndex = {
  generatedAt: string;
  docs: SearchDoc[];
};

type ViewMode = "terminal" | "plain" | "raw";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

function fileUrl(path: string) {
  return `/help-docs/doc/${path.split("/").map(encodeURIComponent).join("/")}`;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function currentDocParam() {
  return new URLSearchParams(window.location.search).get("doc") || "";
}

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function categoryFallback(category: string) {
  if (category === "_root") return "Root";
  return category;
}

function modeLabel(mode: ViewMode) {
  if (mode === "terminal") return "Terminal";
  if (mode === "plain") return "Plain";
  return "Raw";
}

function TerminalBody({ raw, mode }: { raw: string; mode: ViewMode }) {
  if (mode === "plain") {
    return <>{stripDarkwindColors(raw)}</>;
  }

  if (mode === "raw") {
    return <>{raw}</>;
  }

  const fragments = renderDarkwindFragments(raw);
  return (
    <>
      {fragments.map((fragment, index) => (
        <span key={`${index}-${fragment.text.slice(0, 8)}`} className={fragment.className} style={fragment.style}>
          {fragment.text}
        </span>
      ))}
    </>
  );
}

export default function HelpPage({ openTutorial }: { openTutorial?: () => void }) {
  const [index, setIndex] = useState<HelpIndex | null>(null);
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedDocId, setSelectedDocId] = useState(currentDocParam());
  const [rawDoc, setRawDoc] = useState("");
  const [loadingDoc, setLoadingDoc] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [mode, setMode] = useState<ViewMode>("terminal");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/help-docs/index.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load help index (${response.status})`);
        return response.json() as Promise<HelpIndex>;
      })
      .then((payload) => {
        if (cancelled) return;
        setIndex(payload);
        const requested = currentDocParam();
        const initial = payload.docs.some((doc) => doc.id === requested)
          ? requested
          : payload.docs.find((doc) => doc.id === "helpdir/basics/basics")?.id || payload.docs[0]?.id || "";
        setSelectedDocId(initial);
      })
      .catch((error: Error) => {
        if (!cancelled) setLoadError(error.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const trimmed = normalizeQuery(query);
    if (!trimmed || searchIndex) return;

    let cancelled = false;
    fetch("/help-docs/search-index.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load search index (${response.status})`);
        return response.json() as Promise<SearchIndex>;
      })
      .then((payload) => {
        if (!cancelled) setSearchIndex(payload);
      })
      .catch(() => {
        if (!cancelled) setSearchIndex({ generatedAt: "", docs: [] });
      });
    return () => {
      cancelled = true;
    };
  }, [query, searchIndex]);

  useEffect(() => {
    if (!selectedDocId) return;
    let cancelled = false;
    setLoadingDoc(true);
    setLoadError("");
    fetch(fileUrl(selectedDocId))
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${selectedDocId}`);
        return response.text();
      })
      .then((text) => {
        if (!cancelled) setRawDoc(text);
      })
      .catch((error: Error) => {
        if (!cancelled) {
          setRawDoc("");
          setLoadError(error.message);
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingDoc(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedDocId]);

  const docs = index?.docs || [];
  const categoryMap = useMemo(() => new Map((index?.categories || []).map((entry) => [entry.id, entry])), [index]);
  const selectedDoc = docs.find((doc) => doc.id === selectedDocId) || null;

  const filteredDocs = useMemo(() => {
    const needle = normalizeQuery(query);
    const bodyMatches = new Set<string>();
    if (needle && searchIndex) {
      for (const doc of searchIndex.docs) {
        if (doc.text.toLowerCase().includes(needle)) bodyMatches.add(doc.id);
      }
    }

    return docs
      .filter((doc) => category === "all" || doc.category === category)
      .filter((doc) => {
        if (!needle) return true;
        const haystack = `${doc.title} ${doc.path} ${doc.category} ${doc.excerpt}`.toLowerCase();
        return haystack.includes(needle) || bodyMatches.has(doc.id);
      })
      .slice(0, 500);
  }, [category, docs, query, searchIndex]);

  function selectDoc(docId: string) {
    setSelectedDocId(docId);
    window.history.replaceState({ page: "help" }, "", `/help?doc=${encodeURIComponent(docId)}`);
    setCopied(false);
  }

  async function copyRaw() {
    if (!rawDoc) return;
    await navigator.clipboard.writeText(rawDoc);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <>
      <style>{`
        .help-terminal {
          background: #000;
          color: #c9d1d9;
          font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
          line-height: 1.45;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .ansi-bold { font-weight: 700; }
        .ansi-italic { font-style: italic; }
        .ansi-fraktur {
          font-family: "UnifrakturMaguntia", "UnifrakturCook", "Old English Text MT", "Lucida Blackletter", Georgia, serif;
        }
        .ansi-hidden { visibility: hidden; }
        .ansi-blink { animation: ansi-blink 1s steps(2, start) infinite; }
        @keyframes ansi-blink { 50% { opacity: 0.18; } }
        @media (prefers-reduced-motion: reduce) { .ansi-blink { animation: none; } }
      `}</style>
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 opacity-35">
          <img src={imagePath("lore-founding")} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090b]/78 via-[#07090b]/92 to-[#07090b]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-[#d6a94b]">
              <span className="h-px w-8 bg-[#d6a94b]" />
              Documentation
            </div>
            <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">DarkWind Help Files</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#d8cfbd]">
              Search the copied in-game documentation, guild notes, wizard references, driver manuals, and accessibility help in a terminal-style reader.
            </p>
            <a
              href="/start"
              onClick={(event) => {
                if (!openTutorial) return;
                event.preventDefault();
                openTutorial();
              }}
              className="mt-7 inline-flex items-center gap-2 rounded border border-[#d6a94b]/55 bg-[#d6a94b]/12 px-4 py-3 font-semibold text-[#f0c761] transition hover:border-[#d6a94b] hover:bg-[#d6a94b]/18"
            >
              <Compass className="h-5 w-5" />
              Follow the Newbie Guide
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="grain py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[22rem_1fr] lg:px-8">
          <motion.aside {...fadeUp} className="panel flex max-h-[calc(100vh-7rem)] min-h-[36rem] flex-col overflow-hidden lg:sticky lg:top-24">
            <div className="border-b border-white/10 p-4">
              <label className="flex items-center gap-3 rounded border border-white/10 bg-black/30 px-3 py-2">
                <Search className="h-5 w-5 text-[#d6a94b]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search docs"
                  className="w-full bg-transparent text-white outline-none placeholder:text-[#827b6f]"
                />
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <button
                  onClick={() => setCategory("all")}
                  className={`rounded border px-3 py-2 text-left ${category === "all" ? "border-[#d6a94b] bg-[#d6a94b]/14 text-white" : "border-white/10 bg-white/5 text-[#d7d0be]"}`}
                >
                  All docs
                  <span className="ml-2 text-[#aaa294]">{index?.totalDocs || 0}</span>
                </button>
                {(index?.categories || []).slice(0, 1).map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setCategory(entry.id)}
                    className={`rounded border px-3 py-2 text-left ${category === entry.id ? "border-[#d6a94b] bg-[#d6a94b]/14 text-white" : "border-white/10 bg-white/5 text-[#d7d0be]"}`}
                  >
                    {entry.label}
                    <span className="ml-2 text-[#aaa294]">{entry.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-white/10 p-3">
              <div className="max-h-48 space-y-1 overflow-y-auto pr-1">
                {(index?.categories || []).map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setCategory(entry.id)}
                    title={entry.description}
                    className={`flex w-full items-center justify-between rounded border px-3 py-2 text-left text-sm transition ${
                      category === entry.id
                        ? "border-[#d6a94b] bg-[#d6a94b]/14 text-white"
                        : "border-white/10 bg-black/16 text-[#d7d0be] hover:border-white/25"
                    }`}
                  >
                    <span>{entry.label}</span>
                    <span className="font-rune text-xs text-[#aaa294]">{entry.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-2">
              {!index && !loadError && <div className="p-4 text-sm text-[#aaa294]">Loading help index...</div>}
              {loadError && !index && <div className="p-4 text-sm leading-6 text-[#ffb3ad]">{loadError}</div>}
              {filteredDocs.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => selectDoc(doc.id)}
                  className={`mb-2 w-full rounded border p-3 text-left transition ${
                    selectedDocId === doc.id
                      ? "border-[#d6a94b] bg-[#d6a94b]/14"
                      : "border-white/10 bg-black/18 hover:border-white/25 hover:bg-white/7"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#d6a94b]" />
                    <div className="min-w-0">
                      <div className="truncate font-display text-base text-white">{doc.title}</div>
                      <div className="mt-1 truncate font-rune text-[0.68rem] text-[#8d8577]">{doc.path}</div>
                    </div>
                  </div>
                </button>
              ))}
              {index && !filteredDocs.length && <div className="p-4 text-sm leading-6 text-[#aaa294]">No documents match that filter.</div>}
            </div>
          </motion.aside>

          <motion.article {...fadeUp} className="panel min-w-0 overflow-hidden">
            <div className="border-b border-white/10 p-4 lg:p-5">
              {selectedDoc ? (
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm uppercase text-[#d6a94b]">
                      <BookOpen className="h-4 w-4" />
                      {categoryMap.get(selectedDoc.category)?.label || categoryFallback(selectedDoc.category)}
                    </div>
                    <h2 className="mt-2 font-display text-3xl text-white">{selectedDoc.title}</h2>
                    <div className="mt-2 flex flex-wrap gap-2 font-rune text-xs text-[#aaa294]">
                      <span>{selectedDoc.path}</span>
                      <span>{formatBytes(selectedDoc.bytes)}</span>
                      <span>{selectedDoc.lines} lines</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(["terminal", "plain", "raw"] as ViewMode[]).map((option) => (
                      <button
                        key={option}
                        onClick={() => setMode(option)}
                        className={`inline-flex items-center gap-2 rounded border px-3 py-2 text-sm font-semibold transition ${
                          mode === option
                            ? "border-[#d6a94b] bg-[#d6a94b] text-[#15100a]"
                            : "border-white/12 bg-white/5 text-[#d7d0be] hover:border-white/30"
                        }`}
                      >
                        {option === "terminal" ? <Terminal className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {modeLabel(option)}
                      </button>
                    ))}
                    <button
                      onClick={copyRaw}
                      className="inline-flex items-center gap-2 rounded border border-white/12 bg-white/5 px-3 py-2 text-sm font-semibold text-[#d7d0be] transition hover:border-white/30"
                    >
                      <Copy className="h-4 w-4" />
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-[#aaa294]">Select a document.</div>
              )}
            </div>

            <div className="bg-black/45 p-3 sm:p-5">
              <div className="help-terminal min-h-[34rem] overflow-auto rounded border border-white/10 p-4 text-sm shadow-inner sm:p-5">
                {loadingDoc ? (
                  <span className="text-[#aaa294]">Loading document...</span>
                ) : loadError && selectedDoc ? (
                  <span className="text-[#ffb3ad]">{loadError}</span>
                ) : (
                  <TerminalBody raw={rawDoc} mode={mode} />
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
