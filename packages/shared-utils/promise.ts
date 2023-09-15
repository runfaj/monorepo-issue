export function PromiseDelay(delayMs: number = 1000) {
  return new Promise(resolve => { setTimeout(resolve, delayMs )});
}