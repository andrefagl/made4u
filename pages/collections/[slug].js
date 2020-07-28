import { useRouter } from "next/router";
import { wishlist } from "../../mocks";
import { Fragment } from "react";
import cardStyles from "../../styles/Card.module.css";

const { wishlistItems } = wishlist;

const lists = [
    {
        id: 1,
        slug: "country-side-escape",
        name: "Country Side Escape",
        coverImage: wishlistItems[2].alternativeImage,
        description: "My favourite Farfetch floral dresses",
        products: [wishlistItems[1], wishlistItems[2], wishlistItems[5]],
    },
    {
        id: 2,
        slug: "totally-random",
        name: "Totally random",
        coverImage: wishlistItems[9].alternativeImage,
        description: "Some random pieces to buy later",
        products: [],
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className={cardStyles.main}>
            <img src={product.mainImage} />
            <span className={cardStyles.brandName}>{product.brandName}</span>
            <span>{product.productName}</span>
            <div className={cardStyles.priceContainer}>
                <span>{product.priceInformation.formattedPrice}</span>
            </div>

        </div>
    );
};

const Collection = () => {
    const router = useRouter();

    const {
        query: { slug },
    } = router;

    const listDetails = lists.find((list) => list.slug === slug);

    if (!slug || !listDetails) return null;

    return (
        <>
            <h2>{listDetails.name}</h2>
            <div>
                {listDetails.products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
            <h3>Made for you</h3>
        </>
    );
};

export default Collection;
