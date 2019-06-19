export class City {
  name: string;
  location: string;
  temperature: number;
  icon: string;

  constructor(name: string, location: string, temperature: number, icon: string) {
    this.name = name;
    this.location = location;
    this.temperature = temperature;
    this.icon = icon;
  }
}
