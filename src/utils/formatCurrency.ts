export function formatCurrency(value: number) {
  return String(value).padEnd(4, '0').replace('.', ',')
}
