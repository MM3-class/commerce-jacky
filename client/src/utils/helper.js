// Format the Rating Star
export const starArray = [...Array(5).keys()].map(i => i + 1);

// Format the Price to dollar
export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price)
}

// Random the products
export const randomProducts = (products) => {
    const tempProducts = [];

    if (products.length > 0) {
        for (let i in products) {
            let randomIndex = Math.floor(Math.random() * products.length);

            while (tempProducts.includes(products[randomIndex])) {
                randomIndex = Math.floor(Math.random() * products.length)
            }
            tempProducts[i] = products[randomIndex]
        }
    }
    return tempProducts
}

// Reverse the images column in product
export const reverseColumn = (select) => {
    return select?.slice().reverse()
}

// Calculate the original price before discounted 
export const calculatePrice = (discountPrice, discountPercentage) => {
    if (typeof discountPrice !== "number" || typeof discountPercentage !== "number") {
        return "Invalid Input, you must be number"
    }

    const originalPrice = discountPrice / (1 - discountPercentage / 100)

    return formatPrice(originalPrice)
}