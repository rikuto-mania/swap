export default function Action(){
    return(
        <div>
            <div className="bg-gradient-to-r from-[#058280] via-[#71994E] to-[#0579B0] text-white flex pt-10 xl:pb-10 justify-around flex-col xl:flex-row">
                <div>
                    <p className="text-3xl font-semibold pb-4">action title</p>
                    <p className="text-[18px]">description</p>
                </div>
                <img src={"/swapactions01.png"} alt="" className="object-cover xl:w-[720px] h-[240px] sm:h-[360px] xl:rounded-2xl"/>
            </div>

            {/* このセクションは仮のデータです*/}
            <div className="max-w-4xl mx-auto px-4">
                <section className="py-9">
                    <p className="text-2xl pb-4.5 sm:text-4xl font-bold">About ECC Volunteer Center</p>
                    <p>
                        The ECC Volunteer Center (ECC国際外国語専門学校 ボランティアセンター) is a hub for student-
                        led social action and community service. Located at ECC Kokusai Gaikokugo in Osaka, the center
                        connects students with local and international volunteer opportunities, focusing on environmental
                        sustainability, social justice, and community development.
                    </p>
                    <p>
                        Our partnership with ECC began in January 2024 when we were invited to present our supermarket plastic waste research at their monthly volunteer showcase. The presentation resonated deeply with students, leading to an ongoing collaboration that has significantly expanded SWAP's volunteer base and community reach.
                    </p>
                </section>
                <section className="py-9">
                    <p className="text-2xl pb-4.5 sm:text-4xl font-bold">How to Get Involved</p>
                    <p className="pb-4">1. Join Our Volunteer Program</p>
                    <p className="pb-4">Through ECC, we've created a structured volunteer program that allows students to contribute to SWAP's mission in meaningful ways:</p>
                    <ul>
                        <li>Research Volunteers: Help conduct supermarket surveys, collect packaging data, and analyze
                            consumer behavior patterns
                        </li>
                        <li>
                            Event Coordinators: Assist with planning and executing workshops, awareness campaigns,
                            and community events
                        </li>
                        <li>
                            Creative Team: Contribute to social media content, graphic design, and communication
                            materials
                        </li>
                        <li>Outreach Ambassadors: Represent SWAP at schools, community centers, and public events</li>
                    </ul>
                    <p>Volunteers typically commit 4-8 hours per month, with flexible scheduling to accommodate academic responsibilities. All volunteers receive training, materials, and ongoing support from our team leaders.</p>
                </section>
            </div>
            {/* このセクションは仮のデータです*/}
        </div>
    );
};