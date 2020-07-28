import { useRouter } from "next/router";
import { wishlists } from "../../mocks";
import cardStyles from "../../styles/Card.module.css";
import gridStyles from "../../styles/Grid.module.css";

const Grid = ({ children }) => (
    <div className={gridStyles.main}>{children}</div>
);

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

    const listDetails = wishlists.find((list) => list.slug === slug);

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
