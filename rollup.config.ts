import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

const plugins = [
    resolve(),
    commonjs(), 
    typescript({
        declaration: false,
    }),
    json(),
    terser()
];

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es'
            }
        ],
        plugins
    },
    {
        input: 'types/index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts()]
    }
];