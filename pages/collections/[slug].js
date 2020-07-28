import { useRouter } from "next/router";
import { wishlist } from "../../mocks";
import { Fragment } from "react";
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
        <div className="product-card">
            <img src={product.mainImage} />
            <span>{product.productName}</span>
            <span>{product.priceInformation.formattedPrice}</span>
        </div>
    );
}

const Collection = () => {
    const router = useRouter();

    const {
        query: { slug },
    } = router;

    const listDetails = lists.find((list) => list.slug === slug);
    console.log(listDetails);

    return (<Fragment>
        <h2>{listDetails.name}</h2>
        <div>
            {listDetails.products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
        <h3>Made for you</h3>
    </Fragment>);
};

export default Collection;
