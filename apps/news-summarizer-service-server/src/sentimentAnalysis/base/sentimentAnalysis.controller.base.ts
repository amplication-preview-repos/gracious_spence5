/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SentimentAnalysisService } from "../sentimentAnalysis.service";
import { SentimentAnalysisCreateInput } from "./SentimentAnalysisCreateInput";
import { SentimentAnalysis } from "./SentimentAnalysis";
import { SentimentAnalysisFindManyArgs } from "./SentimentAnalysisFindManyArgs";
import { SentimentAnalysisWhereUniqueInput } from "./SentimentAnalysisWhereUniqueInput";
import { SentimentAnalysisUpdateInput } from "./SentimentAnalysisUpdateInput";

export class SentimentAnalysisControllerBase {
  constructor(protected readonly service: SentimentAnalysisService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SentimentAnalysis })
  async createSentimentAnalysis(
    @common.Body() data: SentimentAnalysisCreateInput
  ): Promise<SentimentAnalysis> {
    return await this.service.createSentimentAnalysis({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SentimentAnalysis] })
  @ApiNestedQuery(SentimentAnalysisFindManyArgs)
  async sentimentAnalyses(
    @common.Req() request: Request
  ): Promise<SentimentAnalysis[]> {
    const args = plainToClass(SentimentAnalysisFindManyArgs, request.query);
    return this.service.sentimentAnalyses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SentimentAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async sentimentAnalysis(
    @common.Param() params: SentimentAnalysisWhereUniqueInput
  ): Promise<SentimentAnalysis | null> {
    const result = await this.service.sentimentAnalysis({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SentimentAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSentimentAnalysis(
    @common.Param() params: SentimentAnalysisWhereUniqueInput,
    @common.Body() data: SentimentAnalysisUpdateInput
  ): Promise<SentimentAnalysis | null> {
    try {
      return await this.service.updateSentimentAnalysis({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SentimentAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSentimentAnalysis(
    @common.Param() params: SentimentAnalysisWhereUniqueInput
  ): Promise<SentimentAnalysis | null> {
    try {
      return await this.service.deleteSentimentAnalysis({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
