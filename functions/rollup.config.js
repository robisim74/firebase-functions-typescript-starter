/**
 * Add here external dependencies that actually you use.
 * 
 * Also, if the dependency uses CommonJS modules,
 * you should also use a plugin like rollup-plugin-commonjs,
 * to explicitly specify unresolvable "named exports".
 */
const externals = [
    'cors',
    'firebase-functions'
];

export default {
    input: 'tmp/index.js',
    external: externals,
    output: {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: false
    }
}
