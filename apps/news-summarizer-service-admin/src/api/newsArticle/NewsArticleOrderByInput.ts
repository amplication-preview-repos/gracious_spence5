import { SortOrder } from "../../util/SortOrder";

export type NewsArticleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
