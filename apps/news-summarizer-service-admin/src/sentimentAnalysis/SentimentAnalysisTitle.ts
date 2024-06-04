import { SentimentAnalysis as TSentimentAnalysis } from "../api/sentimentAnalysis/SentimentAnalysis";

export const SENTIMENTANALYSIS_TITLE_FIELD = "id";

export const SentimentAnalysisTitle = (record: TSentimentAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
