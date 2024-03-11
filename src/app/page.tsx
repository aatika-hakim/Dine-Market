
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Promotions from "@/components/Promotions";
import ProductList from "@/views/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5">
      <div>
      <Hero />
        <Promotions/>
        <ProductList />
        <Features/>
        <NewsLetter/>
      </div>
    </main>
  );
}
