import { ProductItem } from "./ProductItem";

type SearchResultProps = {
    totalPrice: number;
    results: Array<{
        id: number,
        price: number,
        priceFormatted: string;
        title: string,
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultProps) {
    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToWishList={onAddToWishList}
                />
            ))}
        </div>
    )
}