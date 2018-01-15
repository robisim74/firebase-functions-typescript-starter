/**
 * Add here external dependencies that actually you use.
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
