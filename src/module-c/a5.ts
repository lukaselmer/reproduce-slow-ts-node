import { moduleA } from '../module-a/module';

export const A = moduleA + moduleA;

export function example() {
  console.log('It is slow');
}
