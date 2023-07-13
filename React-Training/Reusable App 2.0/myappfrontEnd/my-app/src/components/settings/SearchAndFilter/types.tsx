import { ChangeEvent } from 'react';
export type SearchAndFilterProps = {
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}
