import { ChangeEvent } from "react";

export type DynamicTableProps = {
  userColumns: any;
  userDataSource: any;
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};
