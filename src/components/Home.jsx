import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { UsersIcon } from "@heroicons/react/24/solid";
import { FeatureCard } from "../widgets/cards/feature-card";
import { TeamCard } from "../widgets/cards/team-card";

import { featuresData, teamData, contactData } from "../data";

const Home = () => {
  return (
    <div>
      <div className="relative flex h-screen content-center items-center justify-center pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://r4.wallpaperflare.com/wallpaper/237/987/615/dog-hd-widescreen-wallpaper-4374adb23bed0567d3ce8f90ca439fc8.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Dependable Mobile Vet Partner.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                To offer a truly mobile veterinary experience for large animals
                and Pets. We care for Dogs, Cats and farm animals (ssuch as
                cows, pigs,goats,sheeps) requiring urgent Veterinary care.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ title, color, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-black",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Compassionate Care for Your Furry Friends: Welcome to Nyari Vet
                – Your Trusted Partner in Pet Health. We provide expert
                veterinary services for dogs, cats, and farm animals, ensuring
                their well-being and happiness.
                <br />
                <br />
                Discover the highest quality care for your beloved companions
                today!
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/02/dog-at-vet-visit.jpeg.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold pt-4 pl-2"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500 pb-4 px-2">
                    Whether you have a beloved dog or cat needing routine
                    check-ups or farm animals like cows, pigs, goats, and sheep
                    requiring urgent veterinary attention, we are here to serve
                    you
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
