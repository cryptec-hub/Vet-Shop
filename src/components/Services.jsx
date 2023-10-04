import React from "react";

const VetServices = () => {
  const services = [
    {
      category: "Medical Care and Parasites control",
      items: [
        "❖	Nyari Veterinary offers immediate diagnosis  and treatment.  We can come to you within the same- day",
        "❖	We provide all type of treatment from  IV antibiotics, fluid administration for dehydrated animals etc.",
        "❖	Has your pet died suddenly? We are experts in undertaking postmortem",
        "❖	Are you in need of dehorning in large animals?",
        "❖	Are you  frustrated by parasites such as fleas, ticks, mites,  or even worms ? We are your listening ear",
      ],
    },
    {
      category: "Canine/Dog Vaccinations in Kenya",
      items: [
        "❖	Rabies (Required by the law)",
        "❖	Parvovirus: Severe vomiting, diarrhea, dehydration and sepsis",
        "❖	Distemper: Fatal as it affects respiratory and nervous system",
        "❖	Hepatitis: Severe in acute/chronic liver inflammation",
        "❖	Parainfluenza: Affects respiratory system",
        "❖	Leptospirosis: Urine-infected animal can contaminate water sources and the bacterial infection can lead to kidney and liver failure",
      ],
    },
    {
      category: "Feline/Cats Vaccinations in Kenya",
      items: [
        "❖	Rabies (Required by the law)",
        "❖	Feline Herpesvirus: Can lead to a lifelong infectious respiratory disease",
        "❖	Calicivirus: Characterized by oral and nasal ulcers and respiratory infections",
        "❖	Panleukopenia: Life-threatening blood cell deficiencies. Characterized by vomiting, diarrhea, dehydration, and brain damage to kittens",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Veterinary Services
        </h2>
        {services.map((service, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{service.category}</h3>
            <ul className="list-disc list-inside">
              {service.items.map((item, itemIndex) => (
                <ul key={itemIndex} className="text-lg text-gray-800 mb-2">
                  {item}
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetServices;
