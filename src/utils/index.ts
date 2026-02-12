/**
 * 工具类
 */

// 类型判断
export const isString = (val: any): val is string => {
  return typeof val === 'string';
};

export const isNumber = (val: any): val is number => {
  return typeof val === 'number' && !isNaN(val);
};

export const isBoolean = (val: any): val is boolean => {
  return typeof val === 'boolean';
};

export const isObject = (val: any): val is object => {
  return val !== null && typeof val === 'object';
};

export const isArray = (val: any): val is any[] => {
  return Array.isArray(val);
};

export const isFunction = (val: any): val is (...args: any[]) => any => {
  return typeof val === 'function';
};

export const isUndefined = (val: any): val is undefined => {
  return val === undefined;
};

export const isNull = (val: any): val is null => {
  return val === null;
};

export const isNil = (val: any): val is null | undefined => {
  return isNull(val) || isUndefined(val);
};

// 数组操作
export const arrayEqual = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

export const uniqueArray = <T>(arr: T[]): T[] => {
  const set = new Set<T>(arr);
  const result: T[] = [];
  set.forEach((item) => result.push(item));
  return result;
};

export const flattenArray = <T>(arr: T[][]): T[] => {
  return arr.reduce((prev, curr) => prev.concat(curr), []);
};

// 对象操作
export const objectEqual = (obj1: object, obj2: object): boolean => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) continue;
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false;
    if ((obj1 as any)[key] !== (obj2 as any)[key]) return false;
  }
  return true;
};

export const deepClone = <T>(obj: T): T => {
  if (isNil(obj)) return obj;
  if (isArray(obj)) return obj.map((item) => deepClone(item)) as any;
  if (isObject(obj)) {
    const cloned: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloned[key] = deepClone((obj as any)[key]);
      }
    }
    return cloned;
  }
  return obj;
};

export const mergeObjects = <T extends object>(...objects: Partial<T>[]): T => {
  return Object.assign({}, ...objects) as T;
};

// 字符串操作
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCase = (str: string): string => {
  if (!str) return str;
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};

export const kebabCase = (str: string): string => {
  if (!str) return str;
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

// 日期操作
export const formatDate = (
  date: Date,
  format: string = 'YYYY-MM-DD',
): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

export const parseDate = (dateStr: string): Date => {
  return new Date(dateStr);
};

// 其他工具函数
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const getScrollTop = (): number => {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};

export const getScrollLeft = (): number => {
  return (
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0
  );
};

export const getClientWidth = (): number => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    0
  );
};

export const getClientHeight = (): number => {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0
  );
};

export default {
  // 类型判断
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isUndefined,
  isNull,
  isNil,

  // 数组操作
  arrayEqual,
  uniqueArray,
  flattenArray,

  // 对象操作
  objectEqual,
  deepClone,
  mergeObjects,

  // 字符串操作
  capitalize,
  camelCase,
  kebabCase,

  // 日期操作
  formatDate,
  parseDate,

  // 其他工具函数
  debounce,
  throttle,
  getScrollTop,
  getScrollLeft,
  getClientWidth,
  getClientHeight,
};
