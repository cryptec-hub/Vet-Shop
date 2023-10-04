import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

const Profile = () => {
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
                          className="h-full w-full shadow-xl"
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
    </>
  );
};

export default Profile;
