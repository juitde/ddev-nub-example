// Laeuft ueber "ddev nub run test" -- nub fuehrt diese Datei per Datei-Runner
// direkt aus, ganz ohne separaten Kompilierschritt und ohne Test-Framework.
import assert from 'node:assert/strict';
import { Greeting } from '../src/demo.ts';

const greeter = new Greeting.Greeter('nub');

assert.equal(greeter.greet(Greeting.TimeOfDay.Morning), 'Guten Morgen, nub!');
assert.equal(greeter.greet(Greeting.TimeOfDay.Evening), 'Guten Abend, nub!');

console.log('demo.test.ts: alle Assertions erfolgreich');
