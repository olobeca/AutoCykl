import TechnicalSpecificationLine from "./TechnicalSpecificationLine";

function TechnicalSpecification() {
  const specs = [
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
      <span className="text-base pb-2 text-gray-700">Specyfikacja techniczna</span>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {specs.map((s, i) => (
          <TechnicalSpecificationLine key={i} label={s.label} value={s.value} />
        ))}
      </div>
    </div>
  );
}

export default TechnicalSpecification;