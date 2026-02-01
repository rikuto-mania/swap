import Header from "@/conponents/header";
import Footer from "@/conponents/footer";

export default function About(){
    return(
        <div>
            <Header />
            <div className="overflow-hidden">
                <div className="bg-main bottom-circle text-white text-center">
                    <p className="text-4xl font-bold pb-8">About Us</p>
                    <p className="text-xl">A high school student-led initiative tackling plastic waste in Japanese</p>
                    <p className="text-xl">supermarkets</p>
                </div>
            </div>
            <p className="text-4xl text-center font-semibold py-20">Our Mission</p>
            <section className="pb-20">
                
            </section>
            
            <Footer />
        </div>
    );
}