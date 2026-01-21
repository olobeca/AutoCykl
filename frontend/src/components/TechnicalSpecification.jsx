import TechnicalSpecificationLine from "./TechnicalSpecificationLine";

function TechnicalSpecification({props}) {
  const specs = props ? [
    { label: "Marka", value: props.brand || "N/A" },
    { label: "Model", value: props.model || "N/A" },
    { label: "Wersja", value: props.version || "N/A" },

    { label: "Rok produkcji", value: props.year || "N/A" },
    { label: "Przebieg", value: props.mileage ? `${props.mileage} km` : "N/A" },
    { label: "Pojemność silnika", value: props.engineCapacity ? `${props.engineCapacity} cm³` : "N/A" },

    { label: "Moc", value: props.power ? `${props.power} KM` : "N/A" },
    { label: "Moment obrotowy", value: props.torque ? `${props.torque} Nm` : "N/A" },
    { label: "Rodzaj paliwa", value: props.fuelType || "N/A" },

    { label: "Skrzynia biegów", value: props.transmission || "N/A" },
    { label: "Napęd", value: "4x4 (xDrive)" },
    { label: "Typ nadwozia", value: props.bodyType || "N/A" },

    { label: "Liczba drzwi", value: props.doors || "N/A" },
    { label: "Liczba miejsc", value: props.seats || "N/A" },
    { label: "Kolor", value: props.color || "N/A" },

    { label: "Kolor wnętrza", value: props.interiorColor || "N/A" },
    { label: "VIN", value: props.vin || "N/A" },
  ] : [
    { label: "Marka", value: "BMW" },
    { label: "Model", value: "Seria 5" },
    { label: "Wersja", value: "520d xDrive M Sport" },

    { label: "Rok produkcji", value: "2023" },
    { label: "Przebieg", value: "25 000 km" },
    { label: "Pojemność silnika", value: "1 995 cm³" },

    { label: "Moc", value: "190 KM (140 kW)" },
    { label: "Moment obrotowy", value: "400 Nm" },
    { label: "Rodzaj paliwa", value: "Diesel" },

    { label: "Skrzynia biegów", value: "Automatyczna 8‑biegowa" },
    { label: "Napęd", value: "4x4 (xDrive)" },
    { label: "Typ nadwozia", value: "Sedan" },

    { label: "Liczba drzwi", value: "4/5" },
    { label: "Liczba miejsc", value: "5" },
    { label: "Kolor", value: "Czarny metalik" },

    { label: "Kolor wnętrza", value: "Czarny" },
    { label: "VIN", value: "WBA5R310***" },
  ];

  return (
    <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4">
      <span className="text-base pb-2 text-gray-700 font-bold">Specyfikacja techniczna</span>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {specs?.map((s, i) => (
          <TechnicalSpecificationLine key={i} props={{ label: s.label, value: s.value }} />
        ))}
      </div>
    </div>
  );
}

export default TechnicalSpecification;