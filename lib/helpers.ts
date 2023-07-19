export function convertIntToDollar(value: number | undefined) {
  if (typeof value !== "number") {
    return null;
  }
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
}
