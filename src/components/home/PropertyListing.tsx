import Button from "../common/Button";
import Heading from "../common/Heading";
interface Property {
  id: number;
  name: string;
  address: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

function PropertyListing() {
  const properties: Property[] = [
    {
      id: 1,
      name: "Aliva Priva Jalvin",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "..//image/popular1.jpg",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 2,
      name: "Hard Line Orchar",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "..//image/popular2.jpg",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
    {
      id: 3,
      name: "Alpline Lenevote",
      address: "1087 Pin Oak Drive, Clinton, USA",
      image: "..//image/popular3.jpg",
      beds: 4,
      baths: 2,
      sqft: 1203,
    },
  ];

  function PropertyCard({ property }: { property: Property }) {
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
              <img src="../..//favicon/bed.svg" alt="bed" />
              <span className="text-gray-300 text-sm">
                {property.beds} Beds
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img src="../..//favicon/bath.svg" alt="bath" />
              <span className="text-gray-300 text-sm">
                {property.baths} Bath
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img src="../..//favicon/square.svg" alt="square" />
              <span className="text-gray-300 text-sm">
                {property.sqft} sqft.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full bg-[#1a2536] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="container mx-auto sm:px-8 lg:px-16 max-w-6xl w-full z-10">
        <Heading
          level={2}
          text="Popular Residence"
          customHeadingStyle="!text-white !text-3xl !font-semibold !mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
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

export default PropertyListing;
