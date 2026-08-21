// TypeScript-Features, die Node selbst beim direkten Ausfuehren einer .ts-Datei
// ablehnt (enum, namespace, Parameter Properties) -- nub transpiliert sie im
// Hintergrund und fuehrt die Datei anschliessend auf echtem Node aus.
export namespace Greeting {
  export enum TimeOfDay {
    Morning,
    Evening,
  }

  export class Greeter {
    constructor(private readonly name: string) {}

    greet(time: TimeOfDay): string {
      switch (time) {
        case TimeOfDay.Morning:
          return `Guten Morgen, ${this.name}!`;
        case TimeOfDay.Evening:
          return `Guten Abend, ${this.name}!`;
      }
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const greeter = new Greeting.Greeter('nub');
  console.log(greeter.greet(Greeting.TimeOfDay.Morning));
}
