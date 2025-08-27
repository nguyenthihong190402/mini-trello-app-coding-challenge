export function isEmail(text: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(text);
}

export function isBlank(text: string): boolean {
  const pattern = /^[\s ]*$/;
  return pattern.test(text);
}
export function isCode(text: string): boolean {
  const pattern = /^[1-9]\d{5}$/;
  return pattern.test(text);
}
