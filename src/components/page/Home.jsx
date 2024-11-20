import { useLoaderData } from "react-router-dom";
import AdventureExperience from "../AdventrueExperience/AdventureExperience";
import Banner from "../Banner/Banner";
import Gallery from "../Galery/Gallery";
import BlogPosts from "../BlogPosts";

const Home = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <header>
            <Banner></Banner>
            </header>
            <main>
                <section>
            <AdventureExperience data = {loadData}></AdventureExperience>
                </section>
                <section>
            <Gallery></Gallery>
                </section>
                <section>
                    <BlogPosts></BlogPosts>
                </section>

            </main>
        </div>
    );
};

export default Home;