export const createProduct = async (product: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
  return res;
};

export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`, {
    cache: "no-store",
  });
  const products = await res.json();
  return products;
};

export const updateProduct = async (product: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`, {
    method: "PUT",
    body: JSON.stringify(product),
  });
  return res;
};

export const deleteProduct = async (productId: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`, {
    method: "DELETE",
    body: JSON.stringify({
      id: productId,
    }),
  });
  return res;
};

export const createManyProducts = async (products: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`, {
    method: "POST",
    body: products,
  });
  return res;
};
