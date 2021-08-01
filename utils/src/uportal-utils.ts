// Anything exported from this file is importable by other in-browser modules.
export function emitEvent(name: string, data: any): void {
  dispatchEvent(new CustomEvent(name, { detail: data }));
}

export function listenEvent(name: string, callback: any): void {
  window.addEventListener(name, callback);
}
