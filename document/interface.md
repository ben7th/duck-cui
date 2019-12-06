# interface 接口定义

## AppendAble

定义：可以添加到 cui 的可滚动部分，随可滚动部分滚动。  
例如：对话节点，图片节点，等等。

伪代码：

```ts
interface AppendAble {
  static name: string; // 类型名称
  static component: React.Component; // 对应组件实现
}
```

## SayAble

定义：SayAble 是 ApeendAble 的子类，相比之下多出了头像

## CoverAble

定义：可以添加到 cui 的某个位置上，以逐层覆盖的方式展示，不随可滚动部分滚动。  
例如：文本输入，下方浮动选项，拨轮输入，图片预览，等等。  
