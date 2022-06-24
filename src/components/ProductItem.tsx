import { memo } from "react";

type ProductItemProps = {
    product: {
        id: number;
        price: number;
        title: string
    }
}

function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

// eslint-disable-next-line react/display-name
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});