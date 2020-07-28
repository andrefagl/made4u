import { useRouter } from "next/router";
import { wishlists, recommendedWishlists, recommendations } from "../../mocks";
import cardStyles from "../../styles/Card.module.css";
import gridStyles from "../../styles/Grid.module.css";
import generalStyles from "../../styles/General.module.css";
import List from "../../Components/List";
import Link from "next/link";
import cx from "classnames";

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

    const listDetails = [...wishlists, ...recommendedWishlists].find(
        (list) => list.slug === slug
    );

    if (!slug || !listDetails) return null;

    return (
        <>
            <h1 className={generalStyles.mainTitle}>{listDetails.name}</h1>
            <Grid>
                {listDetails.products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Grid>
            <h2
                className={generalStyles.subTitle}
                style={{ marginTop: "68px" }}
            >
                Made for you
            </h2>
            {recommendations.map((rec) => (
                <div
                    className={generalStyles.recomendationSection}
                    key={rec.id}
                >
                    <h1 className={generalStyles.recommendationTitle}>
                        {rec.name}
                    </h1>
                    <Grid>
                        {rec.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Grid>
                    <div className={generalStyles.balls}>
                        <span
                            className={cx(
                                generalStyles.ball,
                                generalStyles.active
                            )}
                        ></span>
                        <span className={generalStyles.ball}></span>
                    </div>
                </div>
            ))}
            <h2
                className={generalStyles.subTitle}
                style={{ marginTop: "68px", marginBottom: "30px" }}
            >
                Explore similar collections
            </h2>
            {recommendedWishlists.map((list) => (
                <List key={list.id} data={list} />
            ))}

            <Link href="/">
                <a className={generalStyles.backButton}>Back to collections</a>
            </Link>
        </>
    );
};

export default Collection;
