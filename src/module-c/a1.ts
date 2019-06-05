import { moduleB } from '../module-b/module';

export const A = moduleB + moduleB;

export function example() {
  console.log('It is slow');
}
