declare interface AnyObject {
  [key: string]: any;
}

declare interface IListResponse<T> {
  page: number;
  pageSize: number;
  list: T[]
}
