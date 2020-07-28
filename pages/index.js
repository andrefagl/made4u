import Head from "next/head";
import styles from "../styles/Home.module.css";
import { wishlists } from "../mocks";
import List from "../Components/List";

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
