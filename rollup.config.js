import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/lib/index.ts',
    output: {
        file: 'build/index.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            main: true,
            browser: true,
        }),
        commonjs(),
        typescript({
            clean: true
        })
    ]
};
