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
import { NewsArticleService } from "../newsArticle.service";
import { NewsArticleCreateInput } from "./NewsArticleCreateInput";
import { NewsArticle } from "./NewsArticle";
import { NewsArticleFindManyArgs } from "./NewsArticleFindManyArgs";
import { NewsArticleWhereUniqueInput } from "./NewsArticleWhereUniqueInput";
import { NewsArticleUpdateInput } from "./NewsArticleUpdateInput";

export class NewsArticleControllerBase {
  constructor(protected readonly service: NewsArticleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NewsArticle })
  async createNewsArticle(
    @common.Body() data: NewsArticleCreateInput
  ): Promise<NewsArticle> {
    return await this.service.createNewsArticle({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [NewsArticle] })
  @ApiNestedQuery(NewsArticleFindManyArgs)
  async newsArticles(@common.Req() request: Request): Promise<NewsArticle[]> {
    const args = plainToClass(NewsArticleFindManyArgs, request.query);
    return this.service.newsArticles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async newsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput
  ): Promise<NewsArticle | null> {
    const result = await this.service.newsArticle({
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
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNewsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput,
    @common.Body() data: NewsArticleUpdateInput
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.updateNewsArticle({
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
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNewsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.deleteNewsArticle({
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