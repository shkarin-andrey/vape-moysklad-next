export interface HeadCell {
  disablePadding: boolean;
  id: TMoySklad;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";

export type TMoySklad =
  | "name"
  | "stateName"
  | "sumMonth0"
  | "sumMonth1"
  | "sumMonth2"
  | "sumMonth3"
  | "sumMonth4"
  | "sumMonth5"
  | "marginMonth0";
