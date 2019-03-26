import * as requireDir from 'require-dir';

console.log('started loading example');
console.time('loading example');
export const example = requireDir('./example', { recurse: true });
console.timeEnd('loading example');
console.log('done loading example');
