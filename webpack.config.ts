import * as path from 'path';
import * as webpack from 'webpack';

const getSrcPath = (file: string): string => {
  const src = path.resolve(__dirname, 'src');
  return path.posix.join(src.replace(/\\/g, '/'), file);
};

const config: webpack.Configuration = {
  mode: 'production',
  context: __dirname,
  entry: getSrcPath('index.ts'),
};

export default config;
