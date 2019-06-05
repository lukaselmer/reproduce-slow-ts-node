import * as requireDir from 'require-dir';
// import { moduleF } from './src/module-f/module';

console.log('started loading example');
console.time('loading example');
export const example = requireDir('./example', { recurse: true });
console.timeEnd('loading example');
console.log('done loading example');

console.log('---');

console.log('started loading module f');
console.time('loading module f');
export const moduleFRequire = require('./src/module-f/module');
console.timeEnd('loading module f');
console.log('done loading module f');
// export const zzz = moduleF;
// console.log(zzz);
