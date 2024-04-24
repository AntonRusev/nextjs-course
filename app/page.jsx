import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

export default async function Home() {
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};