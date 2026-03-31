export const formatPrice = (price: number | string) => {
  const numericPrice =
    typeof price === "string" ? parseFloat(price.replace("$", "")) : price;
  return `$${numericPrice.toFixed(2)}`;
};
export const formatPercent = (value: number) => {
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
};
