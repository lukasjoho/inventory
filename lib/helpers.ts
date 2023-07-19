export function convertIntToDollar(value: number) {
  if (typeof value !== "number") {
    throw new Error("Input must be a number");
  }
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
}
