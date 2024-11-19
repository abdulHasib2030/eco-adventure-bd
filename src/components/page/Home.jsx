import { useLoaderData } from "react-router-dom";
import AdventureExperience from "../AdventrueExperience/AdventureExperience";
import Banner from "../Banner/Banner";
import Gallery from "../Galery/Gallery";

const Home = () => {
    return (
        <div>
            <header>
            <Banner></Banner>
            </header>
            <main>
                <section>
            <AdventureExperience ></AdventureExperience>
                </section>
                <section>
            <Gallery></Gallery>
                </section>

            </main>
        </div>
    );
};

export default Home;