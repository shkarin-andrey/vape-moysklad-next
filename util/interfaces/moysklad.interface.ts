export interface IMoySklad {
  id: string;
  name: string;
  salesAmount: number;
  updated: string;
  created: string;
  stateName: string;
  marginMonth0: number;
  marginMonth1: number;
  marginMonth2: number;
  marginMonth3: number;
  marginMonth4: number;
  marginMonth5: number;
  sumMonth0: number;
  sumMonth1: number;
  sumMonth2: number;
  sumMonth3: number;
  sumMonth4: number;
  sumMonth5: number;
}

export interface IMoySkladProps {
  data: IMoySklad[];
  totalSum: number;
}
