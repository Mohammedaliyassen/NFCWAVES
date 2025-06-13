import CarouselCard from "./Carousel";
import TopHome from "./TopHome";
import Footer from "./Footer";
import cardNFC from "../imgs/Textlayer.png"
import backCardNFC from "../imgs/بدون عنوان.png"
import './HomePage.css'
import QaComponent from "./QA";
function HomePage() {
    return (
        <>
            <div className="homePage">
                <TopHome src1={cardNFC} src2={backCardNFC} />
                <CarouselCard />
                <QaComponent/>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;