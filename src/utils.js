export const filterProductsByPrice = (products, priceValue) => {
    const [minPrice, maxPrice] = priceValue;
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
