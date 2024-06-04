/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SentimentAnalysis } from "./SentimentAnalysis";
import { SentimentAnalysisCountArgs } from "./SentimentAnalysisCountArgs";
import { SentimentAnalysisFindManyArgs } from "./SentimentAnalysisFindManyArgs";
import { SentimentAnalysisFindUniqueArgs } from "./SentimentAnalysisFindUniqueArgs";
import { DeleteSentimentAnalysisArgs } from "./DeleteSentimentAnalysisArgs";
import { SentimentAnalysisService } from "../sentimentAnalysis.service";
@graphql.Resolver(() => SentimentAnalysis)
export class SentimentAnalysisResolverBase {
  constructor(protected readonly service: SentimentAnalysisService) {}

  async _sentimentAnalysesMeta(
    @graphql.Args() args: SentimentAnalysisCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SentimentAnalysis])
  async sentimentAnalyses(
    @graphql.Args() args: SentimentAnalysisFindManyArgs
  ): Promise<SentimentAnalysis[]> {
    return this.service.sentimentAnalyses(args);
  }

  @graphql.Query(() => SentimentAnalysis, { nullable: true })
  async sentimentAnalysis(
    @graphql.Args() args: SentimentAnalysisFindUniqueArgs
  ): Promise<SentimentAnalysis | null> {
    const result = await this.service.sentimentAnalysis(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SentimentAnalysis)
  async deleteSentimentAnalysis(
    @graphql.Args() args: DeleteSentimentAnalysisArgs
  ): Promise<SentimentAnalysis | null> {
    try {
      return await this.service.deleteSentimentAnalysis(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
