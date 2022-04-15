import typescript from '@rollup/plugin-typescript';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
    input: 'Source/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
    },
    plugins: [
        serve(),
        livereload(),
        typescript()
    ],
};
