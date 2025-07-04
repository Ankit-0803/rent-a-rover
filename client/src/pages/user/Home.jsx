import styles from "../../index";
import Herocar from "../../Assets/images.jpg";
import CarSearch from "./CarSearch";
import { HeroParallax } from "../../components/ui/Paralax";
import { useRef } from "react";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsSweetAlert } from "../../redux/user/userSlice";
import Footers from "../../components/Footer";
import CarSlideshow from "../../components/CarSlideshow";



function Home() {
  const ref = useRef(null);
  const { isSweetAlert } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const sweetalert = () => {
    Swal.fire({
      
      show: true,
      title: "",
      text: "Vehicle Booked Successfully",
      icon: "success",
      showDenyButton: true,
      confirmButtonText: "Go to Home",
      confirmButtonColor:"#22c55e",
      denyButtonColor:'black',
      denyButtonText: `See Orders`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
      else if(result.isDenied){
        navigate('/profile/orders')
      }
    })
    dispatch(setIsSweetAlert(false))
  };

  return (
    <>
      {isSweetAlert && sweetalert()}

      {/* This is div is the container for the dot background */}
     <div className="relative w-full mx-auto sm:max-w-[900px] lg:max-w-[1500px] bg-white min-h-[72vh] md:min-h-[30vh] lg:min-h-[60vh]">

        <div
          className={`px-12 lg:px-28 absolute top-0   z-10 w-full   justify-between items-center flex flex-col  sm:flex-row mt-[50px] md:mt-[170px] gap-10`}
        >
          <div className="">
         {/* <p className="uppercase tracking-widest text-black font-bold text-[10px] md:text-[14px]">
  Premium | Affordable | Reliable
</p> */}
<p className="text-[20px] md:text-[24px] font-semibold italic tracking-wide bg-gradient-to-r from-green-300 via-green-500 to-emerald-600 text-transparent bg-clip-text drop-shadow-sm">
  Plan your trip now with us
</p>





            <h1
              className={` md:${styles.heading2} font-extrabold text-[35px] leading-10 lg:font-bold  mb-6  lg:text-[58px] lg:mb-6`}
            >
              Save <span className="text-green-600 animate-pulse">big</span> with our <br />
              car rental
            </h1>
            <p className={`${styles.paragraph} text-justify text-gray-700 leading-relaxed`}>
             Drive your dream car — unbeatable prices, unlimited mileage, and flexible pickup options, all in one place.
            </p>
            <div className=" mt-10  lg:mt-[40px] flex gap-3">
              <button
                onClick={() => {
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="bg-green-500 hover:bg-green-600 transition text-black text-[12px] md:text-[16px] py-3 px-3 rounded-sm font-semibold  lg:py-3 lg:px-5"
              >
                Book Ride{" "}
                <span className="ml-2">
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              </button>
              <button
                onClick={() => {
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="bg-black text-white rounded-sm text-[12px] md:text-[16px]  px-3 py-2 lg:py-3 lg:px-5"
              >
                Learn More{" "}
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="object-contain hidden sm:block">
           <img
  src={Herocar}
  alt="Hero Car"
  className="rounded-lg shadow-lg w-[450px] md:w-[520px] lg:w-[700px] h-auto object-contain"
/>

            <div className="flex flex-col gap-4 mt-6 text-sm text-gray-700">
  <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-md">
    <i className="bi bi-fuel-pump text-green-500 text-xl"></i>
    <span>Fuel Efficient</span>
  </div>

  <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-md">
    <i className="bi bi-clock-history text-green-500 text-xl"></i>
    <span>24/7 Assistance</span>
  </div>
</div>

          </div>
        </div>

        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      

    {/* CarSlideshow */}
    <div className= "w-full h-16 md:h-24 bg-transparent"/>
    <div className="mt-4 mb-6">
  <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-4">
    Explore Our Featured Fleet
  </h2>
  <CarSlideshow />
</div>

     <div className="px-6 py-10 bg-white text-center overflow-hidden">
  <p className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in-down">
    We are <span className="text-green-600">built for you</span>
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-700 text-sm">
    <div className="bg-white rounded-lg shadow-md p-5 w-[220px] animate-fade-in-up delay-100">
      <i className="bi bi-gem text-green-500 text-2xl mb-2"></i>
      <p className="font-semibold">Premium</p>
      <p className="text-[12px] mt-1">High-quality vehicles & service</p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-5 w-[220px] animate-fade-in-up delay-300">
      <i className="bi bi-cash-coin text-green-500 text-2xl mb-2"></i>
      <p className="font-semibold">Affordable</p>
      <p className="text-[12px] mt-1">Best rates guaranteed every time</p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-5 w-[220px] animate-fade-in-up delay-500">
      <i className="bi bi-shield-check text-green-500 text-2xl mb-2"></i>
      <p className="font-semibold">Reliable</p>
      <p className="text-[12px] mt-1">Always ready, always on time</p>
    </div>
  </div>
</div>

      
      <div ref={ref}>
        <CarSearch />
      </div>

      <HeroParallax />
      <Footers/>
    </>
  );
}

export default Home;
