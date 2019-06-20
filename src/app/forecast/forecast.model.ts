export class Forecast {
  name: string;
  days: any[];

  constructor(name: string, days: any[]) {
    this.name = name;
    this.days = days;
  }
}
