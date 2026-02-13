import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'brickd',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components',
      },
    ],
  },
  resolve: {
    docDirs: ['src/components'],
  },
  exportStatic: {
    htmlSuffix: true,
  },
});
