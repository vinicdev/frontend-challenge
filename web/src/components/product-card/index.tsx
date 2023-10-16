import Image from "next/image";
import { Card } from "./style";
import { formatPrice } from "@/utils/format-price";

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

export function ProductCard(props: ProductCardProps) {
    const price = formatPrice(props.price)

    return (
        <Card>
            <img src={props.image} />

            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}