import car1 from "../Assets/car1.jpg";
import car2 from "../Assets/car2.jpg";
import car3 from "../Assets/car3.jpg";
import car4 from "../Assets/car4.jpg";
import car5 from "../Assets/car5.jpg";
import car6 from "../Assets/car6.jpg";


const carImages = [car1, car2, car3, car4, car5, car6];

function CarSlideshow() {
  const repeatedCars = [...carImages, ...carImages]; // for infinite loop

  
  return (
    <div className="w-full bg-white border-y-4 py-6 overflow-hidden">
      <div className="w-full">
        <div className="flex gap-6 w-fit animate-slide">
          {repeatedCars.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[22%] md:min-w-[23%] lg:min-w-[22%] border border-gray-300 shadow-md rounded-md overflow-hidden"
            >
              <img
                src={img}
                alt={`car-${idx}`}
                className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarSlideshow;
