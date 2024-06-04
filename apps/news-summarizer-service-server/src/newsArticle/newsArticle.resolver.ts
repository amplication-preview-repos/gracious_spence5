import * as graphql from "@nestjs/graphql";
import { NewsArticleResolverBase } from "./base/newsArticle.resolver.base";
import { NewsArticle } from "./base/NewsArticle";
import { NewsArticleService } from "./newsArticle.service";

@graphql.Resolver(() => NewsArticle)
export class NewsArticleResolver extends NewsArticleResolverBase {
  constructor(protected readonly service: NewsArticleService) {
    super(service);
  }
}
