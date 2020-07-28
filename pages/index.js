import Head from "next/head";
import styles from "../styles/Home.module.css";
import listStyles from "../styles/List.module.css";
import { wishlist } from "../mocks";
import Link from "next/link";

const { wishlistItems } = wishlist;
// Temp Data
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

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.alternativeImage} />
        </div>
    );
};

const List = ({ data }) => {
    const { name, coverImage, description, products, slug } = data;
    const numItems = products.length;
    return (
        <Link href={`/collections/${slug}`}>
            <a>
                <div>
                    <h1 className={listStyles.title}>{name}</h1>
                    <div className={listStyles.card}>
                        <div className={listStyles.cover}>
                            <img src={coverImage} />
                        </div>
                        <div className={listStyles.summary}>
                            <div className={listStyles.description}>
                                {description}
                            </div>
                            <div className={listStyles.items}>
                                {numItems} Items
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default function Home() {
    return (
        <>
            <section className={styles.container}>
                <h1>Collections</h1>
                <div>
                    {lists.map((list) => (
                        <List key={list.id} data={list} />
                    ))}
                </div>

                <div>
                    {wishlistItems.map((product) => (
                        <Card product={product} />
                    ))}
                </div>
            </section>
        </>
    );
}
