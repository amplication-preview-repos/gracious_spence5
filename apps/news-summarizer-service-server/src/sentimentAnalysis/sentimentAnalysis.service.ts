import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SentimentAnalysisServiceBase } from "./base/sentimentAnalysis.service.base";

@Injectable()
export class SentimentAnalysisService extends SentimentAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
