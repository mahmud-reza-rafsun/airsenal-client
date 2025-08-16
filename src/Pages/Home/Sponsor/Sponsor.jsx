import sponsor from "../../../assets/images/sponsor.png"

const Sponsor = () => {
    return (
        <div className="py-5">
            <div className="text-center">
                <h2 className="text-center font-semibold text-2xl lg:text-3xl">Our <span className="text-indigo-500">Sponsor</span> </h2>
                <p className="max-w-3xl text-sm lg:text-base mx-auto mt-3 lg:mt-5">We are honored to be supported by our valued sponsor, whose commitment and generosity play a vital role in making this initiative possible. Their dedication to empowering communities and supporting innovation reflects their vision of creating a lasting impact. With their partnership</p>
            </div>
            <div className="mt-3">
                <img src={sponsor} alt="" />
            </div>
        </div>
    );
};

export default Sponsor;