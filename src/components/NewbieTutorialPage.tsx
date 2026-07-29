import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Copy,
  ExternalLink,
  Flag,
  Info,
  Monitor,
  RotateCcw,
  ScrollText,
  Sparkles,
  Terminal,
} from "lucide-react";
import { imagePath } from "../data/darkwindSnapshot";
import { newbieTutorial, type TutorialStage } from "../data/newbieTutorial";

type NewbieTutorialPageProps = {
  openHelpDoc: (docId: string) => void;
};

type StoredProgress = {
  version: 1;
  completed: string[];
};

const PROGRESS_VERSION = 1 as const;
const PROGRESS_STORAGE_KEY = "darkwind:newbie-tutorial-progress:v1";

const primaryAction =
  "inline-flex items-center justify-center gap-2 rounded border border-[#d6a94b] bg-[#d6a94b] px-5 py-3 font-semibold text-[#18100a] transition hover:border-[#f1c965] hover:bg-[#f1c965] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1c965] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090b]";

const secondaryAction =
  "inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-black/35 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-[#d6a94b]/55 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090b]";

function copyAsArray(value: string | readonly string[]): readonly string[] {
  return typeof value === "string" ? [value] : value;
}

function HelpDocLink({
  children,
  className,
  docId,
  openHelpDoc,
}: {
  children: ReactNode;
  className: string;
  docId: string;
  openHelpDoc: (docId: string) => void;
}) {
  return (
    <a
      href={`/help?doc=${encodeURIComponent(docId)}`}
      onClick={(event) => {
        event.preventDefault();
        openHelpDoc(docId);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

function readStoredProgress(validStageIds: ReadonlySet<string>) {
  if (typeof window === "undefined") return new Set<string>();

  try {
    const rawProgress = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!rawProgress) return new Set<string>();

    const parsed = JSON.parse(rawProgress) as Partial<StoredProgress>;
    if (parsed.version !== PROGRESS_VERSION || !Array.isArray(parsed.completed)) {
      return new Set<string>();
    }

    return new Set(parsed.completed.filter((stageId) => validStageIds.has(stageId)));
  } catch {
    return new Set<string>();
  }
}

function StageAnchor({
  active,
  children,
  className,
  stageId,
  onNavigate,
}: {
  active?: boolean;
  children: ReactNode;
  className: string;
  stageId: string;
  onNavigate?: (stageId: string) => void;
}) {
  return (
    <a
      href={`#${stageId}`}
      aria-current={active ? "step" : undefined}
      onClick={() => onNavigate?.(stageId)}
      className={className}
    >
      {children}
    </a>
  );
}

export default function NewbieTutorialPage({ openHelpDoc }: NewbieTutorialPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const stageIds = useMemo(
    () => new Set(newbieTutorial.stages.map((stage) => stage.id)),
    [],
  );
  const [activeStageId, setActiveStageId] = useState(newbieTutorial.stages[0]?.id ?? "");
  const [completedStages, setCompletedStages] = useState<Set<string>>(() => new Set());
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [copyAnnouncement, setCopyAnnouncement] = useState("");
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    setCompletedStages(readStoredProgress(stageIds));
    setProgressLoaded(true);
  }, [stageIds]);

  useEffect(() => {
    if (!progressLoaded || typeof window === "undefined") return;

    const progress: StoredProgress = {
      version: PROGRESS_VERSION,
      completed: [...completedStages],
    };

    try {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // The tutorial remains fully usable when storage is unavailable.
    }
  }, [completedStages, progressLoaded]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleStage = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleStage?.target.id) setActiveStageId(visibleStage.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.08, 0.25, 0.5] },
    );

    newbieTutorial.stages.forEach((stage) => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    },
    [],
  );

  const completedCount = completedStages.size;
  const completionPercent = newbieTutorial.stages.length
    ? Math.round((completedCount / newbieTutorial.stages.length) * 100)
    : 0;
  const stageThree = newbieTutorial.stages.find((stage) => stage.number === 3);

  const toggleStageCompletion = (stageId: string) => {
    setCompletedStages((current) => {
      const updated = new Set(current);
      if (updated.has(stageId)) updated.delete(stageId);
      else updated.add(stageId);
      return updated;
    });
  };

  const resetProgress = () => {
    setCompletedStages(new Set());
  };

  const selectStage = (stageId: string) => {
    setActiveStageId(stageId);
  };

  const selectMobileStage = (stageId: string) => {
    setActiveStageId(stageId);
    const stage = document.getElementById(stageId);
    stage?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(window.history.state, "", `#${stageId}`);
  };

  const copyCommand = async (stage: TutorialStage, command: string) => {
    const copyKey = `${stage.id}:${command}`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = command;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!copied) throw new Error("Copy command was unavailable");
      }

      setCopiedCommand(copyKey);
      setCopyAnnouncement(`Copied command: ${command}`);
    } catch {
      setCopiedCommand(null);
      setCopyAnnouncement(`Could not copy ${command}. Select the command text to copy it manually.`);
    }

    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => {
      setCopiedCommand(null);
      setCopyAnnouncement("");
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#07090b] text-[#f0eadb]">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          html:focus-within { scroll-behavior: auto; }
        }
      `}</style>
      <span className="sr-only" role="status" aria-live="polite">
        {copyAnnouncement}
      </span>

      <section className="relative isolate min-h-[72vh] overflow-hidden border-b border-white/10">
        <img
          src={imagePath("hero-castle-gate")}
          alt="The torchlit castle gate leading into DarkWind"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#050607] via-[#050607]/90 to-[#050607]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07090b] via-transparent to-[#050607]/30" />

        <div className="mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded border border-[#d6a94b]/35 bg-black/50 px-3 py-2 font-rune text-xs uppercase tracking-[0.18em] text-[#e4bf70] backdrop-blur">
              <ScrollText className="h-4 w-4" aria-hidden="true" />
              New player field guide
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {newbieTutorial.title}
            </h1>
            {copyAsArray(newbieTutorial.intro).map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-3xl text-lg leading-8 text-[#e2dccb] sm:text-xl">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {newbieTutorial.stages[0] ? (
                <StageAnchor
                  stageId={newbieTutorial.stages[0].id}
                  onNavigate={selectStage}
                  className={primaryAction}
                >
                  Begin the guide
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </StageAnchor>
              ) : null}
              <a href="https://play.darkwind.ai/" className={secondaryAction}>
                <Monitor className="h-5 w-5 text-[#d6a94b]" aria-hidden="true" />
                Open Darkflow
                <ExternalLink className="h-4 w-4 opacity-70" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-rune text-xs uppercase tracking-wider text-[#bdb4a4]">
              <span className="inline-flex items-center gap-2">
                <Flag className="h-4 w-4 text-[#d6a94b]" aria-hidden="true" />
                {newbieTutorial.stages.length} stages
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8fc89c]" aria-hidden="true" />
                Progress is optional
              </span>
              <HelpDocLink
                docId={newbieTutorial.guideDocId}
                openHelpDoc={openHelpDoc}
                className="inline-flex items-center gap-2 text-[#e1bc6e] underline decoration-[#d6a94b]/35 underline-offset-4 transition hover:text-[#f1c965] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Read the original help guide
              </HelpDocLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grain border-b border-white/10 py-10 sm:py-14" aria-labelledby="before-you-begin">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
            className="panel p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 text-[#d6a94b]">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <span className="font-rune text-xs uppercase tracking-[0.2em]">Before you begin</span>
            </div>
            <h2 id="before-you-begin" className="mt-4 font-display text-3xl text-white">
              The guide is a compass, not a checklist.
            </h2>
            {copyAsArray(newbieTutorial.guidance).map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-7 text-[#cfc6b4] sm:text-lg sm:leading-8">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.aside
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="relative overflow-hidden rounded border border-[#77a9c6]/25 bg-[#0a151c] p-6 sm:p-8"
            aria-label="How the in-game tutorial relates to this guide"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#77a9c6]/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-[#77a9c6]/35 bg-[#77a9c6]/10">
                <Info className="h-5 w-5 text-[#9fc9df]" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-2xl text-white">In-game handoff</h2>
              <p className="mt-3 leading-7 text-[#c7d4da]">
                The live in-game tutorial teaches the foundations covered by Stages 1–2, then points new
                adventurers toward Stage 3. This web guide continues the journey from there.
              </p>
              {stageThree ? (
                <StageAnchor
                  stageId={stageThree.id}
                  onNavigate={selectStage}
                  className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-[#b8def2] underline decoration-[#77a9c6]/45 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fc9df]"
                >
                  Jump to Stage 3
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </StageAnchor>
              ) : null}
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        className="bg-[#080b0f] py-12 sm:py-16"
        id="tutorial-journey"
        aria-labelledby="tutorial-journey-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-rune text-xs uppercase tracking-[0.2em] text-[#d6a94b]">Your journey</div>
              <h2 id="tutorial-journey-heading" className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Eight stages through DarkWind
              </h2>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-between font-rune text-xs uppercase tracking-wider text-[#b8af9f]">
                <span>{completedCount} marked complete</span>
                <span>{completionPercent}%</span>
              </div>
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-label="Tutorial progress"
                aria-valuemin={0}
                aria-valuemax={newbieTutorial.stages.length}
                aria-valuenow={completedCount}
              >
                <div
                  className="h-full rounded-full bg-[#d6a94b] transition-[width] duration-300 motion-reduce:transition-none"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[#aaa294]">
                Checkmarks are saved only in this browser. They do not read or change your DarkWind character.
              </p>
            </div>
          </div>

          <div className="sticky top-[64px] z-30 -mx-4 mb-7 border-y border-white/10 bg-[#080b0f]/95 px-4 py-3 backdrop-blur lg:hidden">
            <label htmlFor="tutorial-stage-select" className="mb-1.5 block font-rune text-[0.68rem] uppercase tracking-wider text-[#aaa294]">
              Current chapter
            </label>
            <select
              id="tutorial-stage-select"
              value={activeStageId}
              onChange={(event) => selectMobileStage(event.target.value)}
              className="w-full rounded border border-[#d6a94b]/30 bg-[#10151a] px-3 py-2.5 font-display text-sm text-white outline-none transition focus:border-[#d6a94b] focus:ring-2 focus:ring-[#d6a94b]/35"
            >
              {newbieTutorial.stages.map((stage) => (
                <option key={stage.id} value={stage.id}>
                  Stage {stage.number}: {stage.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] xl:gap-12">
            <aside className="sticky top-24 hidden lg:block" aria-label="Tutorial navigation and progress">
              <nav className="panel overflow-hidden" aria-label="Tutorial chapters">
                <div className="border-b border-white/10 px-5 py-4">
                  <div className="font-rune text-[0.68rem] uppercase tracking-[0.18em] text-[#aaa294]">
                    Chapter index
                  </div>
                </div>
                <ol className="divide-y divide-white/[0.07]">
                  {newbieTutorial.stages.map((stage) => {
                    const active = activeStageId === stage.id;
                    const complete = completedStages.has(stage.id);

                    return (
                      <li key={stage.id}>
                        <StageAnchor
                          stageId={stage.id}
                          active={active}
                          onNavigate={selectStage}
                          className={`group grid grid-cols-[1.6rem_1fr] gap-3 px-5 py-3.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d6a94b] ${
                            active ? "bg-[#d6a94b]/10" : "hover:bg-white/[0.04]"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                              complete
                                ? "border-[#8fc89c]/50 bg-[#8fc89c]/15 text-[#9ad4a7]"
                                : active
                                  ? "border-[#d6a94b] text-[#d6a94b]"
                                  : "border-white/20 text-[#817b70]"
                            }`}
                          >
                            {complete ? (
                              <Check className="h-3 w-3" aria-hidden="true" />
                            ) : (
                              <span className="font-rune text-[0.6rem]">{stage.number}</span>
                            )}
                          </span>
                          <span>
                            <span className={`block font-display text-sm ${active ? "text-white" : "text-[#d1c9ba] group-hover:text-white"}`}>
                              {stage.title}
                            </span>
                            {stage.levelRange ? (
                              <span className="mt-1 block font-rune text-[0.62rem] uppercase tracking-wider text-[#8f887d]">
                                {stage.levelRange}
                              </span>
                            ) : null}
                          </span>
                        </StageAnchor>
                      </li>
                    );
                  })}
                </ol>
                <div className="border-t border-white/10 p-4">
                  <button
                    type="button"
                    onClick={resetProgress}
                    disabled={completedCount === 0}
                    className="inline-flex w-full items-center justify-center gap-2 rounded border border-white/10 px-3 py-2 text-sm text-[#b9b1a3] transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Reset checkmarks
                  </button>
                </div>
              </nav>
            </aside>

            <ol className="min-w-0 space-y-8" aria-label="New player tutorial stages">
              {newbieTutorial.stages.map((stage, index) => {
                const previousStage = newbieTutorial.stages[index - 1];
                const nextStage = stage.nextId
                  ? newbieTutorial.stages.find((candidate) => candidate.id === stage.nextId)
                  : undefined;
                const complete = completedStages.has(stage.id);

                return (
                  <li key={stage.id}>
                    <motion.section
                      id={stage.id}
                      aria-labelledby={`${stage.id}-title`}
                      className="panel scroll-mt-36 overflow-hidden lg:scroll-mt-28"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.48, ease: "easeOut" }}
                    >
                      <header className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(214,169,75,0.12),transparent_20rem)] px-5 py-6 sm:px-8 sm:py-8">
                        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[#d6a94b]/40 bg-[#d6a94b]/10 font-rune text-xl text-[#e4ba64] sm:h-14 sm:w-14 sm:text-2xl">
                              {String(stage.number).padStart(2, "0")}
                            </div>
                            <div className="min-w-0">
                              <div className="font-rune text-[0.68rem] uppercase tracking-[0.2em] text-[#d6a94b]">
                                Stage {stage.number}
                                {stage.levelRange ? ` · ${stage.levelRange}` : ""}
                              </div>
                              <h3 id={`${stage.id}-title`} className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
                                {stage.title}
                              </h3>
                            </div>
                          </div>
                          <button
                            type="button"
                            aria-pressed={complete}
                            aria-label={`${complete ? "Remove completion mark from" : "Mark complete"}: Stage ${stage.number}, ${stage.title}`}
                            onClick={() => toggleStageCompletion(stage.id)}
                            className={`inline-flex shrink-0 items-center justify-center gap-2 self-start rounded border px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b] ${
                              complete
                                ? "border-[#8fc89c]/45 bg-[#8fc89c]/10 text-[#a4dcaf] hover:bg-[#8fc89c]/15"
                                : "border-white/15 bg-black/20 text-[#c9c1b2] hover:border-[#d6a94b]/45 hover:text-white"
                            }`}
                          >
                            {complete ? (
                              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <Circle className="h-4 w-4" aria-hidden="true" />
                            )}
                            {complete ? "Completed" : "Mark complete"}
                          </button>
                        </div>
                      </header>

                      <div className="px-5 py-6 sm:px-8 sm:py-8">
                        <div className="space-y-4 text-base leading-7 text-[#d2c9b8] sm:text-lg sm:leading-8">
                          {stage.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        {stage.commands.length ? (
                          <div className="mt-8 rounded border border-white/10 bg-black/35 p-4 sm:p-5">
                            <div className="flex items-center gap-2">
                              <Terminal className="h-4 w-4 text-[#d6a94b]" aria-hidden="true" />
                              <h4 className="font-rune text-xs uppercase tracking-[0.18em] text-[#c9c0b0]">
                                Commands to try
                              </h4>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {stage.commands.map((command) => {
                                const copyKey = `${stage.id}:${command}`;
                                const copied = copiedCommand === copyKey;

                                return (
                                  <button
                                    key={command}
                                    type="button"
                                    onClick={() => void copyCommand(stage, command)}
                                    aria-label={`Copy command: ${command}`}
                                    className={`group inline-flex max-w-full items-center gap-2 rounded border px-3 py-2 font-rune text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b] ${
                                      copied
                                        ? "border-[#8fc89c]/50 bg-[#8fc89c]/10 text-[#a8dfb3]"
                                        : "border-[#d6a94b]/25 bg-[#d6a94b]/[0.06] text-[#efd28f] hover:border-[#d6a94b]/55 hover:bg-[#d6a94b]/10"
                                    }`}
                                  >
                                    <span className="truncate">{command}</span>
                                    {copied ? (
                                      <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                    ) : (
                                      <Copy className="h-3.5 w-3.5 shrink-0 opacity-65 transition group-hover:opacity-100" aria-hidden="true" />
                                    )}
                                    <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
                                  </button>
                                );
                              })}
                            </div>
                            <p className="mt-3 text-xs leading-5 text-[#8f887d]">
                              Select a command to copy it, then paste it into your DarkWind client.
                            </p>
                          </div>
                        ) : null}

                        {stage.relatedTopics.length ? (
                          <div className="mt-8 border-t border-white/10 pt-6">
                            <h4 className="font-rune text-xs uppercase tracking-[0.18em] text-[#aaa294]">
                              Continue reading
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {stage.relatedTopics.map((relatedTopic) => (
                                <HelpDocLink
                                  key={`${stage.id}:${relatedTopic.docId}`}
                                  docId={relatedTopic.docId}
                                  openHelpDoc={openHelpDoc}
                                  className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#d8cfbd] transition hover:border-[#d6a94b]/40 hover:bg-[#d6a94b]/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b]"
                                >
                                  <BookOpen className="h-4 w-4 text-[#d6a94b]" aria-hidden="true" />
                                  <span>{relatedTopic.topic}</span>
                                  {relatedTopic.command ? (
                                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-rune text-[0.68rem] text-[#aaa294]">
                                      {relatedTopic.command}
                                    </code>
                                  ) : null}
                                </HelpDocLink>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <footer className="border-t border-white/10 bg-black/20 px-5 py-5 sm:px-8">
                        <div className="flex flex-col gap-5">
                          <HelpDocLink
                            docId={stage.sourceDocId}
                            openHelpDoc={openHelpDoc}
                            className="inline-flex w-fit items-center gap-2 rounded text-xs text-[#9f9789] underline decoration-white/20 underline-offset-4 transition hover:text-[#e3bf73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b]"
                          >
                            <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
                            Read the original Stage {stage.number} help document
                          </HelpDocLink>

                          <nav
                            className="grid gap-3 sm:grid-cols-2"
                            aria-label={`Stage ${stage.number} navigation`}
                          >
                            {previousStage ? (
                              <StageAnchor
                                stageId={previousStage.id}
                                onNavigate={selectStage}
                                className="group flex items-center gap-3 rounded border border-white/10 px-4 py-3 text-left transition hover:border-white/25 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b]"
                              >
                                <ArrowLeft className="h-4 w-4 shrink-0 text-[#d6a94b]" aria-hidden="true" />
                                <span>
                                  <span className="block font-rune text-[0.62rem] uppercase tracking-wider text-[#8f887d]">
                                    Previous
                                  </span>
                                  <span className="mt-0.5 block font-display text-sm text-[#d8d0c2] group-hover:text-white">
                                    {previousStage.title}
                                  </span>
                                </span>
                              </StageAnchor>
                            ) : (
                              <span className="hidden sm:block" />
                            )}

                            {nextStage ? (
                              <StageAnchor
                                stageId={nextStage.id}
                                onNavigate={selectStage}
                                className="group flex items-center justify-between gap-3 rounded border border-[#d6a94b]/25 bg-[#d6a94b]/[0.04] px-4 py-3 text-left transition hover:border-[#d6a94b]/50 hover:bg-[#d6a94b]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b]"
                              >
                                <span>
                                  <span className="block font-rune text-[0.62rem] uppercase tracking-wider text-[#b49556]">
                                    Next stage
                                  </span>
                                  <span className="mt-0.5 block font-display text-sm text-[#e1d8c8] group-hover:text-white">
                                    {nextStage.title}
                                  </span>
                                </span>
                                <ArrowRight className="h-4 w-4 shrink-0 text-[#d6a94b]" aria-hidden="true" />
                              </StageAnchor>
                            ) : (
                              <a
                                href="https://play.darkwind.ai/"
                                className="group flex items-center justify-between gap-3 rounded border border-[#8fc89c]/30 bg-[#8fc89c]/[0.05] px-4 py-3 text-left transition hover:border-[#8fc89c]/55 hover:bg-[#8fc89c]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc89c]"
                              >
                                <span>
                                  <span className="block font-rune text-[0.62rem] uppercase tracking-wider text-[#7caf88]">
                                    The road continues
                                  </span>
                                  <span className="mt-0.5 block font-display text-sm text-[#dce7dc] group-hover:text-white">
                                    Enter DarkWind
                                  </span>
                                </span>
                                <ChevronRight className="h-4 w-4 shrink-0 text-[#8fc89c]" aria-hidden="true" />
                              </a>
                            )}
                          </nav>
                        </div>
                      </footer>
                    </motion.section>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-8 flex justify-center lg:hidden">
            <button
              type="button"
              onClick={resetProgress}
              disabled={completedCount === 0}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/15 px-4 py-2.5 text-sm text-[#b9b1a3] transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a94b] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset browser checkmarks
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
