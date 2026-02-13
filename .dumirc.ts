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
    sidebar: {
      '/components': [
        {
          title: '基础组件',
          children: [
            { title: 'Button', link: '/components/Button' },
            { title: 'Icon', link: '/components/Icon' },
            { title: 'Typography', link: '/components/Typography' },
            { title: 'Avatar', link: '/components/Avatar' },
            { title: 'Badge', link: '/components/Badge' },
            { title: 'Divider', link: '/components/Divider' },
            { title: 'Spin', link: '/components/Spin' },
            { title: 'Skeleton', link: '/components/Skeleton' },
          ],
        },
        {
          title: '布局组件',
          children: [
            { title: 'Layout', link: '/components/Layout' },
            { title: 'Grid', link: '/components/Grid' },
            { title: 'Flex', link: '/components/Flex' },
            { title: 'Space', link: '/components/Space' },
            { title: 'Masonry', link: '/components/Masonry' },
            { title: 'Splitter', link: '/components/Splitter' },
          ],
        },
        {
          title: '导航组件',
          children: [
            { title: 'Menu', link: '/components/Menu' },
            { title: 'Tabs', link: '/components/Tabs' },
            { title: 'Breadcrumb', link: '/components/Breadcrumb' },
            { title: 'Pagination', link: '/components/Pagination' },
            { title: 'Steps', link: '/components/Steps' },
            { title: 'Anchor', link: '/components/Anchor' },
            { title: 'Dropdown', link: '/components/Dropdown' },
          ],
        },
        {
          title: '表单组件',
          children: [
            { title: 'Form', link: '/components/Form' },
            { title: 'Input', link: '/components/Input' },
            { title: 'Select', link: '/components/Select' },
            { title: 'Checkbox', link: '/components/Checkbox' },
            { title: 'Radio', link: '/components/Radio' },
            { title: 'Switch', link: '/components/Switch' },
            { title: 'DatePicker', link: '/components/DatePicker' },
            { title: 'TimePicker', link: '/components/TimePicker' },
            { title: 'InputNumber', link: '/components/InputNumber' },
            { title: 'Cascader', link: '/components/Cascader' },
            { title: 'Rate', link: '/components/Rate' },
            { title: 'Slider', link: '/components/Slider' },
            { title: 'ColorPicker', link: '/components/ColorPicker' },
            { title: 'Transfer', link: '/components/Transfer' },
            { title: 'AutoComplete', link: '/components/AutoComplete' },
            { title: 'Mentions', link: '/components/Mentions' },
          ],
        },
        {
          title: '反馈组件',
          children: [
            { title: 'Modal', link: '/components/Modal' },
            { title: 'Drawer', link: '/components/Drawer' },
            { title: 'Message', link: '/components/Message' },
            { title: 'Notification', link: '/components/Notification' },
            { title: 'Popover', link: '/components/Popover' },
            { title: 'Tooltip', link: '/components/Tooltip' },
            { title: 'Alert', link: '/components/Alert' },
            { title: 'Progress', link: '/components/Progress' },
            { title: 'Popconfirm', link: '/components/Popconfirm' },
            { title: 'Tour', link: '/components/Tour' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Table', link: '/components/Table' },
            { title: 'Card', link: '/components/Card' },
            { title: 'Calendar', link: '/components/Calendar' },
            { title: 'Carousel', link: '/components/Carousel' },
            { title: 'Collapse', link: '/components/Collapse' },
            { title: 'Descriptions', link: '/components/Descriptions' },
            { title: 'Empty', link: '/components/Empty' },
            { title: 'Image', link: '/components/Image' },
            { title: 'QRCode', link: '/components/QRCode' },
            { title: 'Segmented', link: '/components/Segmented' },
            { title: 'Statistic', link: '/components/Statistic' },
            { title: 'Tag', link: '/components/Tag' },
            { title: 'Timeline', link: '/components/Timeline' },
            { title: 'Tree', link: '/components/Tree' },
            { title: 'TreeSelect', link: '/components/TreeSelect' },
          ],
        },
        {
          title: '其他组件',
          children: [
            { title: 'Affix', link: '/components/Affix' },
            { title: 'App', link: '/components/App' },
            { title: 'ConfigProvider', link: '/components/ConfigProvider' },
            { title: 'FloatButton', link: '/components/FloatButton' },
            { title: 'Result', link: '/components/Result' },
            { title: 'Watermark', link: '/components/Watermark' },
            { title: 'Upload', link: '/components/Upload' },
          ],
        },
      ],
    },
  },
  resolve: {
    docDirs: ['docs', 'src/components'],
  },
  exportStatic: {
    // htmlSuffix is no longer supported; remove the line to fix the TypeScript error
  },
});
