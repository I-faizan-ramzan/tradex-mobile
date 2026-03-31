export type Asset = {
  id: string;
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  up: boolean;
  logo: any;

  // chart data
  chart: number[];

  // navigation handler (optional)
  onPress?: () => void;

  // extra (for future scaling)
  marketCap?: string;
  volume?: string;
  sector?: string;
};
