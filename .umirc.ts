import { defineConfig } from 'dumi';

const repo = 'ts-pit';

export default defineConfig({
  title: repo,
  mode: 'site',
  hash: true,
  outputPath: 'dist',
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/qluwlh/ts-pit',
    },
  ],
});
