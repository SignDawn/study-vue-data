export function defineReactive(data: any, key: string, _value: any) {
  Object.defineProperty(data, key, {
    get() {
      console.log(`监听到${key}属性的读取`);
      return _value;
    },
    set(newValue) {
      console.log(`监听到${key}属性的变化`);
      newValue = _value;
    },
  });
}
