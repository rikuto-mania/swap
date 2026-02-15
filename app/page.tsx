import WedoCard from "@/conponents/wedoCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" bg-main flex flex-row items-center lg:h-[calc(100vh -83px)]">
        <div className="text-center px-4 py-8">
          <p className="text-5xl lg:text-7xl text-white font-light pb-4">SWAP</p>
          <p className="text-2xl lg:text-3xl text-white pb-8">Stop Waste And Plastic</p>
          <p className="text-center text-[14px] lg:text-xl text-white pb-7">SWAP plastic for a better future! Join us in reducing plastic waste in 
            Japanese supermarkets.</p>
            <div className="text-lg flex flex-col lg:flex-row justify-center gap-10">
              <a href="/" className="bg-regentstblue px-8 py-4 rounded-lg"> Join Our Movement</a>
              <a href="/" className="bg-madang px-8 py-4 rounded-lg">Sign Petition</a>
            </div>
        </div>
        <div className="relative overflow-hidden">
          <Image 
              src="/640f3acaa018fdf5091278be_logistikos-skaitmenizavimo-sistema.jpg" 
              alt="hero" 
              width={1500} 
              height={1500} 
              className="object-cover object-center [clip-path:ellipse(80%_100%_at_100%_50%)] hidden md:block h-125 lg:h-full"
            />
        </div>
      </div>


      <section className="flex flex-col md:flex-row justify-around items-center px-4 py-20">
        <div>
          <p className="text-5xl font-semibold text-center pb-8">Our Mission</p>
          <p className="pb-6 whitespace-pre-line">{`
            SWAP (Stop Waste And Plastic) is a student-led initiative dedicated to reducing plastic 
            waste in Japanese supermarkets. 
            We believe that sustainable change starts at the local level, and through
            advocacy, education, and collaboration, we can create a future 
            where unnecessary plastic packaging is replaced with eco-friendly alternatives.
          `}</p>
          <p className="whitespace-pre-line">{`
            Our mission is to work directly with supermarkets, educate our communities about the 
            environmental impact of plastic waste, and build partnerships that lead to practical, 
            sustainable solutions. Together, we can make a difference—one grocery trip at a time.
          `}</p>
        </div>
        <Image
          src="/swap-logo.svg"
          alt= "logo"
          width={360}
          height={360}
        />
      </section>

      <section className="bg-merino px-4 py-16">
        <p className="text-5xl font-bold text-center pb-8">What We Do</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <WedoCard
          advocate
          title="Advocate"
          text="We work with supermarkets and
                businesses to reduce single-use plastic
                packaging and promote sustainable
                alternatives."
          />                 
          <WedoCard 
            educate
            title="Educate"
            text="Through workshops and campaigns, we
                  raise awareness about the environmental
                  impact of plastic waste in our
                  communities."
          />
          <WedoCard 
            collaborate
            title="Collaborate"
            text="We partner with local organizations,
                  schools, and businesses to create
                  practical solutions for reducing plastic
                  waste."
          />
        </div>
      </section>

      <section className="bg-main px-4 py-16 text-center">
        <p className="text-white text-5xl font-bold pb-8">Get Involved</p>
        <p className="text-white text-xl pb-8">Together, we can make a difference. Join our movement to reduce
            plastic waste and create a sustainable future.
        </p>
        <a href="/" className="bg-merino px-4 py-2 text-xl rounded-lg font-semibold">Contact Us</a>
      </section>
    </div>
  );
}
