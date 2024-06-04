import { Module } from "@nestjs/common";
import { NewsArticleModuleBase } from "./base/newsArticle.module.base";
import { NewsArticleService } from "./newsArticle.service";
import { NewsArticleController } from "./newsArticle.controller";
import { NewsArticleResolver } from "./newsArticle.resolver";

@Module({
  imports: [NewsArticleModuleBase],
  controllers: [NewsArticleController],
  providers: [NewsArticleService, NewsArticleResolver],
  exports: [NewsArticleService],
})
export class NewsArticleModule {}
