import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'components/Button';
import { SmallCard } from 'components/SmallCard';
import { projects } from 'data/database';
import Footer from 'components/Footer';
import RecentWork from './HomeScreen/RecentWork';
import WorkToghether from './HomeScreen/WorkToghether';
import BigCard from 'components/BigCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

export const ProjectDetailsScreen = () => {
  const params = useParams();
  const linePath = '/assets/line2.svg';
  const project = projects.find((x) => x.query === params.query);
  const {
    title,
    subtitle,
    textColor,
    bgButton,
    img,
    slogan,
    description,
    resultTitle,
    resultContent,
    services,
    location,
    url,
  } = project;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleChangeSelectedImage = (offset) => {
    const newIndex =
      (selectedImageIndex + offset) % project.imagesBigSlider.length;
    setSelectedImageIndex(
      newIndex === -1 ? project.imagesBigSlider.length - 1 : newIndex,
    );
  };

  console.log('project', project);
  console.log('img', img);

  return (
    <div>
      {/* banner */}
      <div className="relative flex justify-between items-start px-6 py-32 md:px-[100px] lg:px-[250px] md:py-[160px] h-[calc(100vh-var(--navbar-height))]">
        <img
          src={linePath}
          alt="line-path"
          className="hidden md:flex absolute right-0 top-0 w-full -z-10"
        />

        <div>
          <span className="uppercase tracking-[4px] text-xs mb-5 opacity-60 text-gray-700">
            caso de estudio
          </span>
          <div className="-space-y-5 pb-[50px]">
            <h1 className={`${textColor} text-[50px] md:text-[55px] font-bold`}>
              {title}
            </h1>
            <h2 className="text-[50px] md:text-[55px] font-bold">{subtitle}</h2>
          </div>

          <div className="w-48 md:w-56">
            <a href={`https://${url}`} target="_blank" rel="noreferrer">
              <Button rightArrow solid>
                {'Ver website'}
              </Button>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex w-[450px] h-[350px]">
          <img src={img} alt={title} />
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-[100px] space-y-14 md:space-y-0 md:space-x-24 lg:px-[250px] pt-[50px]">
        <div className="w-full md:w-2/3 md:pr-10">
          <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
            caso de estudio
          </span>
          <h3 className="text-3xl font-bold mb-[25px] mt-4">{slogan}</h3>
          <p className="text-[18px] font-light">{description}</p>
        </div>

        <div className="flex w-full md:w-1/3 flex-col justify-start flex-grow space-y-6">
          <div>
            <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
              servicios
            </span>
            <p className="pb-6 pt-1 font-semibold">{services}</p>
            <hr />
          </div>

          <div>
            <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
              ubicación
            </span>
            <p className="pb-6 pt-1 font-semibold">{location}</p>
            <hr />
          </div>

          <div>
            <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
              Sitio web
            </span>
            <a
              className="pt-1 font-semibold block"
              href={`https://${url}`}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="flex overflow-scroll scrollbar-hide py-[100px] md:py-[140px]">
        <div className="flex space-x-10 first-of-type:ml-6 last-of-type:mr-6 md:first-of-type:ml-[140px] md:last-of-type:mr-[40px]">
          {project.imagesSmallSlider.map((image, i) => (
            <SmallCard key={i} imageSrc={image} imageAlt={title} />
          ))}
        </div>
      </div>

      {/* result */}
      <div className="px-6 md:px-[100px] lg:pl-[250px] lg:pr-[140px] pb-[110px]">
        <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-700">
          El resultado
        </span>
        <h3 className="text-3xl font-bold mb-[25px] mt-4">{resultTitle}</h3>
        <p className="text-lg font-light whitespace-pre-line">
          {resultContent}
        </p>
      </div>

      {/* Big card */}
      <div className="flex justify-between items-center h-screen w-full bg-[#f9f9f9] px-[140px]">
        <div
          className={`w-16 h-16 ${bgButton} flex justify-center items-center`}
          onClick={() => handleChangeSelectedImage(-1)}
        >
          <ArrowLeftIcon className="h-5 fill-white" />
        </div>
        <BigCard imageSrc={project.imagesBigSlider[selectedImageIndex]} />
        <div
          className={`w-16 h-16 ${bgButton} flex justify-center items-center`}
          onClick={() => handleChangeSelectedImage(1)}
        >
          <ArrowRightIcon className="h-5 fill-white" />
        </div>
      </div>
      {/* other projects */}
      <div className="pt-[110px]">
        <RecentWork />
      </div>
      {/* Work together */}
      <WorkToghether />
      {/* Footer */}
      <Footer />
    </div>
  );
};
