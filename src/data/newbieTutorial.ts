import generatedTutorial from "./newbieTutorial.generated.json";

export interface TutorialHelpTopic {
  topic: string;
  command: string;
  docId: string;
}

export interface TutorialStage {
  id: string;
  number: number;
  title: string;
  levelRange: string | null;
  paragraphs: string[];
  commands: string[];
  relatedTopics: TutorialHelpTopic[];
  sourceDocId: string;
  nextId: string | null;
  keywords: string[];
}

export interface TutorialSource {
  repository: string;
  revision: string;
  dirty: boolean;
  contentHash: string;
  normalRoot: string;
  screenreaderRoot: string;
  files: string[];
}

export interface TutorialData {
  schemaVersion: number;
  source: TutorialSource;
  title: string;
  intro: string[];
  guidance: string[];
  guideDocId: string;
  stages: TutorialStage[];
}

export const newbieTutorial = generatedTutorial as unknown as TutorialData;

export default newbieTutorial;
