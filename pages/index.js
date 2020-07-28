import Head from "next/head";
import styles from "../styles/Home.module.css";
import listStyles from "../styles/List.module.css";
import { wishlists } from "../mocks";
import Link from "next/link";

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
                    {wishlists.map((list) => (
                        <List key={list.id} data={list} />
                    ))}
                </div>
            </section>
        </>
    );
}
