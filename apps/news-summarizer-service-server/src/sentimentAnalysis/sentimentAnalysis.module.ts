import { Module } from "@nestjs/common";
import { SentimentAnalysisModuleBase } from "./base/sentimentAnalysis.module.base";
import { SentimentAnalysisService } from "./sentimentAnalysis.service";
import { SentimentAnalysisController } from "./sentimentAnalysis.controller";
import { SentimentAnalysisResolver } from "./sentimentAnalysis.resolver";

@Module({
  imports: [SentimentAnalysisModuleBase],
  controllers: [SentimentAnalysisController],
  providers: [SentimentAnalysisService, SentimentAnalysisResolver],
  exports: [SentimentAnalysisService],
})
export class SentimentAnalysisModule {}
