import { Laptop, GenderMale, GenderFemale, HouseHeart, Activity, Basket, Sunglasses, EvFront, Bicycle, Lamp, Stars } from "react-bootstrap-icons";
const categories = [
    {
        "title": "Men",
        "icon": <GenderMale />,
        "path": "/mens-shirts",
        "children": [
            {
                "title": "Men Shirts",
                "path": "/mens-shirts"
            },
            {
                "title": "Men Shoes",
                "path": "/mens-shoes"
            },
            {
                "title": "Men Watches",
                "path": "/mens-watches"
            }
        ]
    },
    {
        "title": "Women",
        "icon": <GenderFemale />,
            "path": "/womens-dresses",
        "children": [
            {
                "title": "Women Dresses",
                "path": "/womens-dresses"
            },
            {
                "title": "Women Shoes",
                "path": "/womens-shoes"
            },
            {
                "title": "Women Watches",
                "path": "/womens-watches"
            },
            {
                "title": "Women Bags",
                "path": "/womens-bags"
            },
            {
                "title": "Women Jewelry",
                "path": "/womens-jewellery"
            }
        ]
    },
    {
        "title": "Electronic",
        "icon": <Laptop />,
        "path": "/smartphones",
        "children": [
            {
                "title": "Smartphones",
                "path": "/smartphones"
            },
            {
                "title": "Laptop",
                "path": "/laptops"
            }
        ]
    },
    {
        "title": "Home & Lifestyle",
        "icon": <HouseHeart />,
        "path": "/home-decoration",
        "children": [
            {
                "title": "Home Decoration",
                "path": "/home-decoration"
            },
            {
                "title": "Furniture",
                "path": "/furniture"
            }
        ]
    },
    {
        "title": "Health & Beauty",
        "icon": <Activity />,
        "path": "/skincare",
        "children": [
            {
                "title": "Fragrances",
                "path": "/fragrances"
            },
            {
                "title": "Skincare",
                "path": "/skincare"
            }
        ]
    },
    {
        "title": "Top Sellers",
        "icon": <Stars />,
        "path": "/tops",
    },
    {
        "title": "Groceries",
        "icon": <Basket />,
        "path": "/groceries"
    },
    {
        "title": "Sunglass",
        "icon": <Sunglasses />,
        "path": "/sunglasses"
    },
    {
        "title": "Automotive",
        "icon": <EvFront />,
        "path": "/automotive"
    },
    {
        "title": "Motorcycle",
        "icon": <Bicycle />,
        "path": "/motorcycle"
    },
    {
        "title": "Lighting",
        "icon": <Lamp />,
        "path": "/lighting"
    }
]
export default categories