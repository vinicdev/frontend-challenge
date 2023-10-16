"use client"

import { useProduct } from "@/hooks/useProducts"
import { ProductCard } from "../product-card";
import { ListContainer } from "./style";

export function ProductList() {
    const { data } = useProduct();
    return (
        <ListContainer>
            {data?.map(product => 
                <ProductCard 
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}
                />
            )}
        </ListContainer>
    )
}