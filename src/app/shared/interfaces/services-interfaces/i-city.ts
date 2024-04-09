export interface ICity {
  name: string;
  lat: number;
  lon: number
  country: string;
  state: string;
  local_names: {
    [key: string]: string
  }
}
