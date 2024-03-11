"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/data";

const ProductList = () => {
    const Products = products.slice(0, 3); // Get first three products

    return (
        <section className="py-32 lg:px-32">
            <header className="mx-auto mb-6 text-center lg:px-20">
                <p className="text-sm font-bold text-blue-800">PRODUCTS</p>
                <h1 className="text-3xl font-bold text-gray-800">
                    Check What we have
                </h1>
            </header>
            <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-2 lg:grid-cols-3">
                {Products.map((product:any) => (
                    <ProductCard
                        key={product.id}
                        title={product.name}
                        price={product.price}
                        img={product.image}
                        category={product.category}
                        id={product.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;

