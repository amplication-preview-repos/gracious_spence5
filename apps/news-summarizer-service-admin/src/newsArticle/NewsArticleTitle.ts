import { NewsArticle as TNewsArticle } from "../api/newsArticle/NewsArticle";

export const NEWSARTICLE_TITLE_FIELD = "id";

export const NewsArticleTitle = (record: TNewsArticle): string => {
  return record.id?.toString() || String(record.id);
};
