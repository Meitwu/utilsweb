<!-- <script setup>
import describe from './describe.vue'
import tags from './tags.vue'
</script> -->

<!-- <ClientOnly>
  <describe />
  <wordcloud/>
</ClientOnly> -->

<!-- ## 🏷️ 标签

<tags :className="'type-it1'" :values="['支持Vue3']" />
<tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
<tags :className="'type-it3'" :tagNameList="['Node']" :values="['支持NodeJs']" /> -->

### 📦 安装

::: code-group

```bash [pnpm]
pnpm add asuns-utils
```

```bash [yarn]
yarn add asuns-utils
```

```bash [npm]
npm install asuns-utils
```

:::

### 📡 `CDN`

::: code-group

```html [jsdelivr]
<!-- 提供包含所有方法的全局变量 AsunsUtils -->
<script src="https://cdn.jsdelivr.net/npm/asuns-utils@1.0.3/dist/index.js"></script>
```

```html [unpkg]
<!-- 提供包含所有方法的全局变量 AsunsUtils -->
<script src="https://unpkg.com/asuns-utils@1.0.3/dist/index.js"></script>
```

:::

### 📚 示例

集成 `react`、`vue`、`html` 使用示例
::: code-group
```ts [react]
import {getQueryParams } from 'asuns-utils'

getQueryParams('https://www.baidu.com?service=asunsutils')
```

```js [vue]
import {getQueryParams } from 'asuns-utils/dist'

getQueryParams('https://www.baidu.com?service=asunsutils')
```

```js [script]
<script src="https://cdn.jsdelivr.net/npm/asuns-utils@1.0.3/dist/index.js"></script>

<script>
  AsunsUtils.isObject([])
</script>
```
:::

### 🤔 常见问题、反馈

问题：如果自己项目中的函数与 `asuns-utils` 内部的函数名称冲突怎么办？  
答：这种问题很常见，可以使用 `ES6` 提供的 `as` 关键字来为导入的函数重命名，如下：

```ts
import { getQueryParams as _getQueryParams } from 'asuns-utils'
// getQueryParams(……);
```

[反馈问题、新增需求](https://github.com/pure-admin/pure-admin-utils-docs/issues/new)

### 🔔 温馨提示

本站大部分图片使用`Github`静态资源。如遇加载空白或加载图片失败时，刷新几次即可
