import { useLoaderData } from "react-router-dom";
import AdventureExperience from "../AdventureExperience";
import Banner from "../Banner";

const Home = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <header>
            <Banner></Banner>
            </header>
            <AdventureExperience data={loadData}></AdventureExperience>
        </div>
    );
};

export default Home;