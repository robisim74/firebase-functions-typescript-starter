import resolve from 'rollup-plugin-node-resolve';

/**
 * Add here external dependencies that actually you use.
 */
const externals = [
    'cors',
    'firebase-functions',
    'firebase-admin',
];

export default {
    input: 'tmp/index.js',
    external: externals,
    plugins: [resolve()],
    onwarn: () => { return },
    output: {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: false
    }
}
