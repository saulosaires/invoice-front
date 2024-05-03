export class Page<Type> {

  content?: Type[] | undefined;
  pageable?: Pageable;
  last: boolean = true;
  totalPages: number = 1;
  totalElements: number = 1;
  size: number = 1;
  number: number = 0;
  first: boolean = true;
  numberOfElements: number = 1;
  empty: boolean = false;
}


export class Pageable {
  pageNumber: number = 0;
  pageSize: number = 1;
  offset: number = 0;
  unpaged: boolean = false;
  paged: boolean = true;
}
