export const getPageCount = (totalCount: number, limit: number) =>
  limit > 0 ? Math.ceil(totalCount / limit) : 0;
