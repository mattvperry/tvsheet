import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const preventTreeShakingPlugin = () => {
  return {
    name: 'no-threeshaking',
    resolveId(id, importer) {
      if (!importer) {
        // let's not theeshake entry points, as we're not exporting anything in Apps Script files
        return { id, moduleSideEffects: 'no-treeshake' };
      }
      return null;
    },
  };
};

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/Code.js',
    format: 'cjs',
  },
  treeshake: false,
  plugins: [nodeResolve({ extensions: ['.ts', '.js'] }), typescript()],
};
