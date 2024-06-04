import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SentimentAnalysisService } from "./sentimentAnalysis.service";
import { SentimentAnalysisControllerBase } from "./base/sentimentAnalysis.controller.base";

@swagger.ApiTags("sentimentAnalyses")
@common.Controller("sentimentAnalyses")
export class SentimentAnalysisController extends SentimentAnalysisControllerBase {
  constructor(protected readonly service: SentimentAnalysisService) {
    super(service);
  }
}
