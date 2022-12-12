export function debounce<T extends Function>(cb: T, wait = 20) {
  let timeoutId: NodeJS.Timeout;

  return function (...args: T extends ((...args: infer P) => any) ? P : never[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb(...args), wait);
  };
}
