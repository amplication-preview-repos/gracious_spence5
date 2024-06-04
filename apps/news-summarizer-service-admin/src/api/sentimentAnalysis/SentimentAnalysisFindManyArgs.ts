import { SentimentAnalysisWhereInput } from "./SentimentAnalysisWhereInput";
import { SentimentAnalysisOrderByInput } from "./SentimentAnalysisOrderByInput";

export type SentimentAnalysisFindManyArgs = {
  where?: SentimentAnalysisWhereInput;
  orderBy?: Array<SentimentAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
