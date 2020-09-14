export default function currencyFilter(val, currency = "UAH") {
  return new Intl.NumberFormat('ru-RU',{
    style: 'currency',
    currency
  }).format(val)
}