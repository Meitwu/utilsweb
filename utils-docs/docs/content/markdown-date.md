# date 函数

对date类型的数据进行操作

## isNormalDate
判断是否为一个正常的日期

```js{4}
  import {isNormalDate} from 'asuns-utils'
  isNormalDate('2024/01/01') //false
```

## parseDate
字符串转换成Date()

## parseDateTime
  时间转成日期

## isDateTimeInRange
  判断时间是否在指定时间范围内

## isDateInRange
   判断日期是否在开始结束日期内

## compareDates
    比较日期
    greater：大于；greaterOrEqual：大于等于；less：小于；lessOrEqual：小于等于
