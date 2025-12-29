import Footer from "@/conponents/footer";
import Header from "@/conponents/header"
import Highlight from "@/conponents/highlight";


//ダミーテストデータ
import highlightData from "../../data/highlight.json";

export default function Progress(){
    return(
        <div>
            <Header />
            <div className="overflow-hidden">
                <div className="bg-main bottom-circle text-white text-center">
                    <p className="text-4xl font-bold pb-8">Our Progress</p>
                    <p className="text-xl">A high school student-led initiative tackling plastic waste in Japanese supermarkets</p>
                </div>
            </div>
            <p className="text-4xl text-center font-semibold py-20">HighRights</p>
            <section className="pb-20">

                {highlightData.map((item,index) =>{
                    const direction = index % 2 === 0 ? "left" : "right";
                    return(
                        <Highlight 
                        key={item.id}
                        direction = {direction}
                        title = {item.title}
                        subTitle = {item.subtitle}
                        description = {item.description}
                        image={item.image}
                    />
                   )})}
            </section>
            <Footer />
        </div>
    );
};