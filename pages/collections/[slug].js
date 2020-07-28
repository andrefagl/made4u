import { useRouter } from "next/router";
import { wishlist } from "../../mocks";
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

const Collection = () => {
    const router = useRouter();

    const {
        query: { slug },
    } = router;

    const listDetails = lists.find((list) => list.slug === slug);
    console.log(listDetails);

    return <div>Collection</div>;
};

export default Collection;
