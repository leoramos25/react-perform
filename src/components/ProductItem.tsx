import { memo } from "react";

type ProductItemProps = {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string
    }
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
        </div>
    )
}

// eslint-disable-next-line react/display-name
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});