export function toKebabCase(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}
