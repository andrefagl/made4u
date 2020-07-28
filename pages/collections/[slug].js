import { useRouter } from "next/router";
import { wishlist } from "../../mocks";
import { Fragment } from "react";
import cardStyles from "../../styles/Card.module.css";
import gridStyles from "../../styles/Grid.module.css";

const { wishlistItems } = wishlist;

const lists = [
    {
        id: 1,
        slug: "country-side-escape",
        name: "Country Side Escape",
        coverImage: wishlistItems[2].alternativeImage,
        description: "My favourite Farfetch floral dresses",
        products: [
            wishlistItems[1],
            wishlistItems[4],
            wishlistItems[5],
            wishlistItems[8],
            wishlistItems[9],
            wishlistItems[19],
            wishlistItems[21],
            wishlistItems[22],
            wishlistItems[23],
            wishlistItems[24],
        ],
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

const Grid = ({ children }) => (
    <div className={gridStyles.main}>{children}</div>
);

const ProductCard = ({ product }) => {
    return (
        <div className={cardStyles.main}>
            <img src={product.mainImage} />
            <span>{product.productName}</span>
            <span>{product.priceInformation.formattedPrice}</span>
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
            <Grid>
                {listDetails.products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Grid>
            <h3>Made for you</h3>
        </>
    );
};

export default Collection;
