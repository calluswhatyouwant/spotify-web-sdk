import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/lib/index.ts',
    output: {
        file: 'build/index.js',
        format: 'cjs'
    },
    external: ["axios"],
    plugins: [
        resolve({
            main: true,
            browser: false,
        }),
        commonjs(),
        typescript({
            clean: true
        })
    ]
};
