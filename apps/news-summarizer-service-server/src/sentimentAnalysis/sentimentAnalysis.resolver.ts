import * as graphql from "@nestjs/graphql";
import { SentimentAnalysisResolverBase } from "./base/sentimentAnalysis.resolver.base";
import { SentimentAnalysis } from "./base/SentimentAnalysis";
import { SentimentAnalysisService } from "./sentimentAnalysis.service";

@graphql.Resolver(() => SentimentAnalysis)
export class SentimentAnalysisResolver extends SentimentAnalysisResolverBase {
  constructor(protected readonly service: SentimentAnalysisService) {
    super(service);
  }
}
