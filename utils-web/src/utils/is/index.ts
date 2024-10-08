// const toString = Object.prototype.toString;

export function getObjectProtoType(value: unknown): string {
  return Object.prototype.toString.call(value);
}

/**
 * 检测对象类型。
 *
 * @param {unknown} val - 输入值。
 * @param {string} type - 类型。
 * @returns {boolean} 返回类型判断。
 */
export function is(val: unknown, type: string): boolean {
  return getObjectProtoType(val) === `[object ${type}]`;
}

/**
 * 属性是否定义
 * 
 * @param {unknown} val - 输入值
 * @returns {boolean}
 */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

/**
 * 属性是否未定义
 * 
 * @param {unknown} val - 输入值
 * @returns {boolean}
 */
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

/**
 * 是否为object类型
 * 
 * @param {any} val - 输入值
 * @returns {boolean}
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

/**
 * object是否有值
 * 
 * @param {any} val - 输入值
 * @returns {boolean}
 */
export function isObjectHasValue(val: any): val is Record<any, any> {
  return isObject(val) && Object.keys(val).length > 0;
}

/**
 * 判断 string array map set object 是否为空
 * 
 * @param {unknown} val 
 * @returns {boolean}
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

/**
 * 是否是日期类型
 * 
 * @param val 
 * @returns 
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/**
 * 是否等于null
 * 
 * @param val 
 * @returns 
 */
export function isNull(val: unknown): val is null {
  return val === null;
}

/**
 * 判断属性是为undefined或者null
 * 
 * @param val 
 * @returns 
 */
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

/**
 * 是否为Number类型
 * 
 * @param val 
 * @returns 
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/**
 * 是否为promise类型
 * 
 * @param val 
 * @returns 
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') || (isObject(val) && isFunction(val.then) && isFunction(val.catch));
}

/**
 * 是否string类型
 * 
 * @param val 
 * @returns 如果值是字符串类型，返回 `true`，否则返回 `false`
 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * 是否为function类型
 * 
 * @param val 
 * @returns 如果值是function，返回 `true`，否则返回 `false`
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

/**
 * 是否为boolean类型
 * 
 * @param val 
 * @returns 如果值是boolean，返回 `true`，否则返回 `false`
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * 是否为正则表达式
 * 
 * @param val 
 * @returns 如果值是正则表达式，返回 `true`，否则返回 `false`
 */
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

/**
 * 是否为数组
 * 
 * @param val 
 * @returns 如果值是数组，返回 `true`，否则返回 `false`
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * 是否为window对象
 * 
 * @param val 
 * @returns 如果值是window对象，返回 `true`，否则返回 `false`
 */
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/**
 * 是否为 Element
 * 
 * @param val 
 * @returns 如果值是Element，返回 `true`，否则返回 `false`
 */
export function isElement(val: unknown): val is Element {
  return typeof val === 'object' && val !== null && 'tagName' in val;
}

/**
 * 是否为map类型
 * 
 * @param val 
 * @returns 如果值是map，返回 `true`，否则返回 `false`
 */
export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

/**
 * 是否为地址
 * 
 * @param val 
 * @returns 如果值是地址，返回 `true`，否则返回 `false`
 */
export function isUrl(path: string): boolean {
  // const reg =
  //   /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  const reg = /^https?:\/\/(([^:/?#]+)(?::([0-9]+))?)(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
  return reg.test(path);
}

/**
 * 是否为邮箱
 * 
 * @param val 
 * @returns 如果值是邮箱，返回 `true`，否则返回 `false`
 */
export function isEmail(email: string): boolean {
  return /^([[a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email);
}

/**
 * 是否为手机号码
 * 
 * @param val 
 * @returns 如果值是手机号码，返回 `true`，否则返回 `false`
 */
export function isMobile(mobile: string): boolean {
  return /^1[0-9]{10}$/.test(mobile);
}

/**
 * 是否为电话号码
 * 
 * @param val 
 * @returns 如果值是电话号码，返回 `true`，否则返回 `false`
 */
export function isPhone(phone: string): boolean {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone);
}

/**
 * 是否为身份证
 * 
 * @param val 
 * @returns 如果值是身份证，返回 `true`，否则返回 `false`
 */
export function isIdCard(cardId: string): { code: 0 | 1001 | 2001 | 3001 | 4001; result: boolean } {
  // 长度不格式不正确
  if (!/(^\d{15]$)|(^\d{17}(\d|X|x)$)/.test(cardId)) {
    return {
      code: 1001,
      result: false,
    };
  }

  // 验证身份证城市
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  if (!city[parseInt(cardId.substring(0, 2)) as keyof typeof city]) {
    return {
      code: 2001,
      result: false,
    };
  }

  // 验证出生日期
  const birthday = `${cardId.substring(6, 10)}/${cardId.substring(10, 12)}/${cardId.substring(12, 14)}`;
  if (isNaN(Date.parse(birthday))) {
    return {
      code: 3001,
      result: false,
    };
  }

  // 号码校验
  let sum = 0;
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const codes = '10X98765432';
  for (let i = 0; i < cardId.length - 1; i++) {
    sum += weights[i] * Number(cardId[i]);
  }
  const last = codes[sum % 11];
  if (cardId[cardId.length - 1] != last) {
    return {
      code: 4001,
      result: false,
    };
  }
  return {
    code: 0,
    result: true,
  };
}


/**
 * 判断是否是微信浏览器
 * 
 * @returns 
 */
export function isWeiXin(): boolean {
  const na = navigator.userAgent.toLowerCase().match(/microMessenger/i);
  if (na) {
    return na[0] == 'micromessenger';
  } else {
    return false;
  }
}

/**
 * 判断是否是qq浏览器
 * 
 * @returns 
 */
export function isQQBrowser(): boolean {
  const na = navigator.userAgent.toLowerCase();
  return !!na.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
}

/**
 * 判断是否为图片
 * 
 * @param fileName 
 * @returns 
 */
export function isImage(fileName: string): boolean {
  return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(fileName);
}

/**
 * 判断是否为word
 * 
 * @param fileName 
 * @returns 
 */
export function isWord(fileName: string): boolean {
  return /\.(doc|docx|docm|dot|dotx|dotm|docb)$/i.test(fileName);
}

/**
 * 判断是否为excel
 * 
 * @param fileName 
 * @returns 
 */
export function isExcel(fileName: string): boolean {
  return /\.(xls|xlsx|xlsm|xlsb|xlt|xltx|xltm|xlam)$/i.test(fileName);
}

/**
 * 判断是否为ppt
 * 
 * @param fileName 
 * @returns 
 */
export function isPowerPoint(fileName: string): boolean {
  return /\.(ppt|pptx|pptm|pot|potx|potm|ppa|ppam|pps|ppsx|ppsm)$/i.test(fileName);
}
