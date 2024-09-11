# React

列出常见的React面试题

## 1. js与jsx的区别
      .js是标准的JavaScript文件扩展名，用于存放纯JavaScript代码。  
      .jsx是JavaScript XML的扩展名，专门用于存放包含JSX语法的代码。
```js{4}
//  .jsx语法都会被编译为js文件。.js与.jsx更多的区别是约定俗成的，本质上没有太大区别。
  const element = <h1>Hello, world!</h1>;
  const element = React.createElement('h1', null, 'Hello, world!');
```

## 2. React 18 有哪些更新
  React18 引入了很多新特性跟改进，旨在提高性能并简化开发体验。以下是React 18的一些主要更新以及示例。  
    1.自动批处理（Automatic Batching）   
    将多个状态更新合并为一次渲染，在react18以前只有事件处理程序中处理状态时，react才会将多次更新合并在一起。
      2.

## 3.React的设计思想
    1.组件化。将UI划分成一系列独立、可复用的组件，每个组件都有自己的状态跟逻辑。大大提高
    代码的复用性、可读性和维护性。 
    2.声明式编程。只需关注最终效果，使得代码简洁，更易于理解和预测。 
    3.虚拟DOM。React 引入了虚拟DOM的概念，它是对真实DOM的轻量化表示。当组件的状态变化时，
    React会创建一个新的虚拟DOM
    跟旧的虚拟DOM进行比较，然后只更新实际DOM中发生变化的部分。这种方式可以避免直接操作DOM，
    从而提高性能。  
    4.单向数据流。React采用单向数据流（也称为单向绑定）。父组件可以把属性（props）传递给
    子组件，但是子组件不能修改接收到的props。这种方式保证了数据的流动性和可预测性，也是的
    应用的管理变得更加容易
    5.JSX。React引入了JSX,这是一种JavaSCript和XML的混合语法，使得可以在JavaScript中
    编写类似HTML的标记语法。
    6.钩子（Hooks）

## 4.为什么hooks不能在循环、条件、嵌套语句中使用
    
```js{4}
//  禁止在循环中调用 useState、useEffect、useRef 等 Hooks。
//  可以在循环外部调用 Hooks，然后在循环内部使用它们返回的值或函数。
        if (a === 1) {
        const [state1, setState1] = useState(1);  // 违反规则
        } else {
        const [state2, setState2] = useState(2);  // 违反规则
        }

        if (a === 1) {
        useEffect(() => {
            console.log("Effect for a === 1");
        }, []);  // 违反规则
        } else {
        useEffect(() => {
            console.log("Effect for a !== 1");
        }, []);  // 违反规则
        }
```
