import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  external: ['axios', 'child-process-promise', 'promisify-child-process', 'tmp-promise'],
  input: 'src/index.ts',
  plugins: [
    nodeResolve(),
    typescript({
      compilerOptions: {
        removeComments: true,
      }
    }),
    copy({
      targets: [
        { src: 'src/executables/ghostscript/**', dest: 'dist/executables/ghostscript' }
      ]
    }),
  ],
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    }
  ]
};
