# Select 选择器

选择器组件，用于从多个选项中选择一个或多个值。

## 基本用法

```jsx
export default () => {
  const options = [
    { value: 'option1', label: '选项 1' },
    { value: 'option2', label: '选项 2' },
    { value: 'option3', label: '选项 3' },
    { value: 'option4', label: '选项 4' },
    { value: 'option5', label: '选项 5' },
  ];

  return (
    <div style={{ width: 300 }}>
      <h3>单选模式</h3>
      <Select options={options} placeholder="请选择" />
      
      <h3 style={{ marginTop: 20 }}>多选模式</h3>
      <Select options={options} placeholder="请选择" mode="multiple" />
    </div>
  );
};
```

## 带搜索功能

```jsx
export default () => {
  const options = [
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'guangzhou', label: '广州' },
    { value: 'shenzhen', label: '深圳' },
    { value: 'hangzhou', label: '杭州' },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select 
        options={options} 
        placeholder="请选择城市" 
        showSearch 
      />
    </div>
  );
};
```

## 带清空按钮

```jsx
export default () => {
  const options = [
    { value: 'option1', label: '选项 1' },
    { value: 'option2', label: '选项 2' },
    { value: 'option3', label: '选项 3' },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select 
        options={options} 
        placeholder="请选择" 
        allowClear 
      />
    </div>
  );
};
```

## 不同尺寸

```jsx
export default () => {
  const options = [
    { value: 'option1', label: '选项 1' },
    { value: 'option2', label: '选项 2' },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select 
        options={options} 
        placeholder="小尺寸" 
        size="small" 
      />
      <Select 
        options={options} 
        placeholder="默认尺寸" 
        style={{ marginTop: 10 }} 
      />
      <Select 
        options={options} 
        placeholder="大尺寸" 
        size="large" 
        style={{ marginTop: 10 }} 
      />
    </div>
  );
};
```

## 禁用状态

```jsx
export default () => {
  const options = [
    { value: 'option1', label: '选项 1' },
    { value: 'option2', label: '选项 2' },
    { value: 'option3', label: '选项 3', disabled: true },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select 
        options={options} 
        placeholder="禁用状态" 
        disabled 
      />
      <Select 
        options={options} 
        placeholder="部分选项禁用" 
        style={{ marginTop: 10 }} 
      />
    </div>
  );
};
```

## 自定义过滤方法

```jsx
export default () => {
  const options = [
    { value: '1', label: '张三', age: 20 },
    { value: '2', label: '李四', age: 25 },
    { value: '3', label: '王五', age: 30 },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select 
        options={options} 
        placeholder="按年龄过滤" 
        showSearch 
        filterOption={(inputValue, option) => {
          return option.age.toString().includes(inputValue);
        }} 
      />
    </div>
  );
};
```

## API

### Select

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 选择器大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| value | 选中值 | `string \| number \| (string \| number)[]` | - |
| defaultValue | 默认选中值 | `string \| number \| (string \| number)[]` | `''` |
| onChange | 选中值变化时触发 | `(value: string \| number \| (string \| number)[]) => void` | - |
| onSelect | 选择选项时触发 | `(option: SelectOption, optionList: SelectOption[]) => void` | - |
| onDeselect | 取消选择选项时触发 | `(option: SelectOption, optionList: SelectOption[]) => void` | - |
| placeholder | 占位符 | `string` | `'请选择'` |
| options | 选项列表 | `SelectOption[]` | `[]` |
| mode | 选择模式 | `'single' \| 'multiple'` | `'single'` |
| allowClear | 是否允许清空 | `boolean` | `false` |
| filterOption | 过滤选项方法 | `boolean \| ((inputValue: string, option: SelectOption) => boolean)` | `true` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |

### SelectOption

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `string \| number` | - |
| label | 选项文本 | `React.ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| [key: string] | 自定义属性 | `any` | - |
