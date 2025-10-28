import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { hero, products } from "../utils/data";

export default function Home() {
  return (
    <>
      <Hero data={hero} />
      <ProductGrid products={products} />
    </>
  );
}
