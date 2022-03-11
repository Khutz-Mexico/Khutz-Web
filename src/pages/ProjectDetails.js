import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { SmallCard } from '../components/SmallCard';
import { projects } from '../data/database';

export const ProjectDetailsScreen = () => {
  const params = useParams();
  const linePath = '/assets/line.svg';
  const project = projects[params.projectId];
  const {
    title,
    subtitle,
    textColor,
    img,
    slogan,
    description,
    resultTitle,
    resultContent,
    services,
    location,
    url,
  } = project;

  console.log('project', project);
  console.log('img', img);

  return (
    <div>
      <div className="flex justify-between items-start px-10 py-20 md:px-[100px] lg:px-[250px] md:py-[160px] h-[calc(100vh-var(--navbar-height))]">
        <img
          src={linePath}
          alt="line-path"
          className="absolute right-0 top-0 -z-10"
        />

        <div>
          <span className="uppercase tracking-[4px] text-xs mb-5 opacity-60 text-gray-700">
            caso de estudio
          </span>
          <div className="-space-y-5 pb-[50px]">
            <h1 className="text-[55px] font-bold">{title}</h1>
            <h2 className={`${textColor} text-[55px] font-bold`}>{subtitle}</h2>
          </div>

          <div className="w-56">
            <Button rightArrow solid onClick={`https://${url}`}>
              {'Ver website'}
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex w-[450px] h-[350px]">
          <img src={img} alt={title} />
        </div>
      </div>

      <div className="flex justify-betweenpx-10 md:px-[100px] space-x-24 lg:px-[250px] pt-[70px] pb-[140px]">
        <div className="w-2/3 pr-10">
          <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
            caso de estudio
          </span>
          <h3 className="text-3xl font-bold mb-[25px] mt-4">{slogan}</h3>
          <p className="text-[18px] font-light">{description}</p>
        </div>

        <div className="flex w-1/3 flex-col justify-start flex-grow space-y-6">
          <div>
            <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
              servicios
            </span>
            <p className="pb-6 pt-1 font-semibold">{services}</p>
            <hr />
          </div>

          <div>
            <span className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
              ubicacion
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

      <div className="flex overflow-scroll scrollbar-hide pb-[140px]">
        <div className="flex space-x-10 first-of-type:ml-[140px] md:last-of-type:mr-[40px]">
          {projects?.map(({ imagesSmallSlider }) => (
            <SmallCard key={title} images={imagesSmallSlider} />
          ))}
        </div>
      </div>

      <div className="px-10 md:px-[100px] lg:pl-[250px] lg:pr-[140px] pb-[110px]">
        <span className="uppercase tracking-[4px] text-xs mb-5 opacity-60 text-gray-700">
          El resultado
        </span>
        <h3 className="text-3xl font-bold mb-[25px]">{resultTitle}</h3>
        <p className="text-[18px] font-light">{resultContent}</p>
      </div>
    </div>
  );
};
