import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

const Profile = () => {
  const services = [
    {
      title: "Artificial insemination",
      description:
        "Improve heat detection  and insemination success with Nyari Veterinary precise recommendations from our experienced veterinarians.",
      icon: "fas fa-stethoscope",
      image:
        "https://www.shutterstock.com/image-photo/veterinarian-preparing-tools-artificial-insemination-600w-2119590773.jpg", // Add the image file name
    },
    {
      title: "Animal Identification",
      description:
        "For all your visual and electronic animal tagging needs, contact us today!	We offer indelible ear tags that are tamper free, specialize in injectable microchips andare experts in microchipping",
      icon: "fas fa-syringe",
      image: "https://www.animaltracker.co.uk/idcard/images/cat1.jpg",
    },
    {
      title: "Emergency Care",
      description:
        "24/7 emergency care for your pets. Our team is always ready to provide immediate medical attention.",
      icon: "fas fa-ambulance",
      image:
        "https://media.istockphoto.com/id/507583006/photo/cute-border-collie-puppy-with-an-emergency-kit.jpg?s=612x612&w=0&k=20&c=Gw_zgbKXtm_-GlehR-lF0dC1pXTq_fTqC_GH_z2CSII=", // Add the image file name
    },
    {
      title: "Pet Euthanasia",
      description:
        "Safe and comfortable pet boarding services. Your pets will feel at home even when you're away.",
      icon: "fas fa-home",
      image:
        "https://images.ctfassets.net/4dmg3l1sxd6g/4fOY5B8n3w0YmLWfiji8zQ/ee885117bcce4e75b0efeed2c55007ac/VetReal_euthanasia_header.png_-_en", // Add the image file name
    },
  ];
  return (
    <>
      <>
        <section className="relative block h-[50vh]">
          <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1632236542159-809925d85fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center" />
          <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        </section>
        <section className="relative bg-blue-gray-50/50 py-16 px-4">
          <div className="container mx-auto">
            <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                    <div className="relative">
                      <div className="-mt-20 w-40 rounded-full">
                        <Avatar
                          src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                          alt="Profile picture"
                          variant="circular"
                          className="h-full w-full shadow-xl rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-8 text-center">
                  <Typography variant="h2" color="blue-gray" className="mb-2">
                    John Doe
                  </Typography>
                  <div className="mb-16 flex items-center justify-center gap-2">
                    <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                    <Typography className="font-medium text-blue-gray-700">
                      Nairobi, Kenya.
                    </Typography>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                    <Typography className="font-medium text-blue-gray-700">
                      Lead Vet, Nyari Vet Services.
                    </Typography>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                    <Typography className="font-medium text-blue-gray-700">
                      Nairobi University.
                    </Typography>
                  </div>
                </div>

                <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                  <div className="mt-2 flex flex-wrap justify-center">
                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                      <Typography className="mb-8 font-normal text-blue-gray-500">
                        John Doe, our Lead Veterinarian, is a seasoned
                        professional with over two decades of dedicated service
                        in the field of veterinary medicine. He is a beacon of
                        excellence and compassion in the world of animal care.
                        John's profound expertise extends from routine check-ups
                        to intricate surgeries, making him a trusted figure
                        among clients and colleagues alike.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What We Are Best At.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center justify-center mb-4 text-center">
                  <img
                    src={`${service.image}`} // Assuming images are in the "images" folder
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
