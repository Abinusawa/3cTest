import { partners } from "@utils/index";

const PartnersSection: React.FC = () => {
  return (
    <section
      id="partners"
      className="w-full h-fit pt-8 pb-12 md:pt-12 md:pb-16 "
    >
      <div className="max-w-7xl mx-auto w-full h-fit px-5  md:px-8 ">
        <h2 className="mb-4  text-3xl font-bold text-gray-800">
              Our Partners
        </h2>
        
        <div className="w-[50px] border border-gray-200" />
        <br />
        <div className="container-none ">
          <div className="max-w-xl w-full flex-wrap flex gap-8 md:gap-5">
            {partners.map((partner) => (
              <img
                draggable="false"
                src={partner.image}
                alt={partner.name}
                className="h-8 w-auto object-cover"
              />
            ))}
          </div>
          <br />
          
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
