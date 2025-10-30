import hardwareStoreImg from "../assets/hardware_store.png";
import BillingSystem from "../assets/Billing_System_image.jpg";
import responsiveProject from "../assets/responsive_project.png";
import WanderludtImage from "../assets/Wanderlust_image.jpg";
import WorldAtlas from "../assets/world_atlas_image.png";


const Project = () => {
  const projectData = [
    {
      title: "Hardware Store Inventory Management System",
      description:
        "A web-based application to manage inventory & billing with real-time stock updates using Core PHP and Laravel.",
      image: hardwareStoreImg,
      liveLink: "",
      codeLink: "https://github.com/abhishekguptaji/Gupta_Hardware.git",
    },
    {
      title: "WorldAtlas",
      description:
        "A platform providing unique information about countries worldwide, built with React.js, JavaScript, HTML, and CSS.",
      image: WorldAtlas,
      liveLink: "",
      codeLink: "https://github.com/abhishekguptaji/WorldAtlas.git",
    },
    {
      title: "Wanderlust",
      description:
        "A scalable rental house listing platform built with Node.js, Express.js, MongoDB, HTML, CSS & Bootstrap.",
      image: WanderludtImage,
      liveLink: "",
      codeLink: "https://github.com/abhishekguptaji/wanderlust.git",
    },
    {
      title: "Responsive Page",
      description:
        "A responsive page demonstrating flexible layouts across different screen sizes.",
      image: responsiveProject,
      liveLink: "",
      codeLink: "https://github.com/abhishekguptaji/ResponsiveWebsite.git",
    },
    {
      title: "Multi Vendor E-Commerce Platform",
      description:
        "A local market system for buying and selling items online with multiple vendors.",
      image: "/assets/upcoming.png",
      liveLink: "",
      codeLink:
        "https://github.com/abhishekguptaji/Multi-Vendor-E-Commerce-Platform-.git",
    },
    {
      title: "Billing System",
      description:
        "Features include customer details, itemized billing, cost calculation, bill generation, and print/clear options.",
      image: BillingSystem,
      liveLink: "",
      codeLink: "https://github.com/abhishekguptaji/Billing-System.git",
    },
  ];

  return (
    <section id="project" className="py-10 bg-gray-50 mb-5">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col mb-[10px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover p-2 rounded-t-2xl"
              />
              <div className="flex flex-col flex-grow p-5">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h5>
                <p className="text-gray-600 flex-grow">{project.description}</p>

                <div className="mt-4 flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-all"
                    >
                      LIVE
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-all"
                  >
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
