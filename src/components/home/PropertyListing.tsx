import popular1 from "../../assets/image/popular1.jpg";
import popular2 from "../../assets/image/popular2.jpg";
import popular3 from "../../assets/image/popular3.jpg";
import Button from "../common/Button";
import PropertyCard from "./PropertyCard";
import SwiperComponent from "./SwiperComponent";
import { SwiperSlide } from "swiper/react";

export default function PropertyListing() {
  const properties = [
    {
      id: 1,
      name: "Aliva Priva Jalvin",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: popular1,
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 2,
      name: "Hard Line Orchar",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: popular2,
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 3,
      name: "Alpline Lenevote",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: popular3,
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1a2536] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/image/background.png" alt="Background" />
      </div>

      <div className="max-w-6xl w-full z-10">
        <h2 className="text-white text-3xl font-semibold mb-8">
          Popular Residence
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SwiperComponent>
              {properties.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            type="button"
            text="View All Properties"
            customButtonStyle="!py-3 !px-6 !bg-[#1AA090]"
          />
        </div>
      </div>
    </div>
  );
}
