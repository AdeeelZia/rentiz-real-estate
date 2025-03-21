import Bed from "../../assets/favicon/bed.svg";
import Bath from "../../assets/favicon/bath.svg";
import Square from "../../assets/favicon/square.svg";
function PropertyCard({ property }: any) {
  return (
    <div className="bg-transparent">
      <div className="overflow-hidden">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          width={460}
          height={353}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-white font-medium text-lg">{property.name}</h3>
        <p className="text-gray-400 text-sm">{property.address}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <img src={Bed} alt="bed" />
            <span className="text-gray-300 text-sm">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={Bath} alt="bath" />
            <span className="text-gray-300 text-sm">{property.baths} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={Square} alt="square" />
            <span className="text-gray-300 text-sm">{property.sqft} sqft.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
