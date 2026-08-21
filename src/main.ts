import { Greeting } from './demo';

const greeter = new Greeting.Greeter('ddev-nub-example');
const message = greeter.greet(Greeting.TimeOfDay.Morning);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<p>${message}</p>`;
