import { moduleC } from '../module-c/module';

export const A = moduleC + moduleC;

export function example() {
  console.log('It is slow');
}
