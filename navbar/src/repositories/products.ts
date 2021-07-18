import BASE_URL from "../config";

type Product = {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
};

const listProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    throw new Error("An error has occurred while fetching products.");
  }
};

export default listProducts;
