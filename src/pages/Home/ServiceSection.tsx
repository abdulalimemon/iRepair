import Container from "@/components/layouts/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-center mb-6 lg:mb-10">
          <span className="text-primary">Services</span> that we provide.
        </h1>
        <p className="max-w-[80ch] mx-auto">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 mt-8 gap-[20px]">
        <BatteryReplacement />
        <div className="bg-[url(/src/assets/image/chip.jpg)] h-[415px] rounded-lg col-span-12 md:col-span-5 bg-cover bg-center  bg-no-repeat">
          <div
            className={`flex bg-slate-100 bg-opacity-70 dark:bg-black/80 dark:bg-opacity-60  h-full  rounded-lg`}
          >
            <div className="p-5 lg:p-7">
              <h4 className="text-[20px] font-semibold">Chip Replacement </h4>
              <p className="text-3xl lg:text-[36px] mt-[18%]">
                There is no need to replace the motherboard for a tiny little
                dead chipset.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-gray h-[415px] dark:bg-black/80 rounded-lg col-span-12 md:col-span-7">
          <div className={`flex h-full  rounded-lg`}>
            <div className="p-5 lg:p-7">
              <h4 className="text-[20px] font-semibold">Chip Replacement </h4>
              <p className="text-3xl lg:text-[36px] mt-[18%]">
                There is no need to replace the motherboard for a tiny little
                dead chipset.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 dark:bg-black/80">
          <div
            className={`flex bg-[url(/src/assets/image/harddrivecable.png)] h-full bg-cover md:bg-contain  bg-center md:bg-right bg-no-repeat rounded-lg`}
          >
            <div className="p-5 lg:p-7">
              <h4 className="text-[20px] font-semibold">Storage Replacement</h4>
              <p className="text-3xl lg:text-[36px] mt-[18%]">
                Get rid of your slow HDD, <br />
                upgrade to super fast SSD with ease
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 md:col-span-4 dark:bg-black/80">
          <div className="w-full h-full flex justify-center items-center px-5">
            <h4 className="font-semibold text-5xl md:text-5xl lg:text-[80px] leading-tight">
              Same Day <span className="text-primary">Delivery</span>
            </h4>
          </div>
        </div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 md:col-span-4 dark:bg-black/80">
          <div className="w-full h-full flex justify-center items-center px-5">
            <h4 className="font-semibold text-5xl md:text-5xl lg:text-[80px] leading-tight">
              <span className="text-primary">Free </span>
              Diagno stics
            </h4>
          </div>
        </div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 md:col-span-4 dark:bg-black/80">
          <div className="w-full h-full flex justify-center items-center px-5">
            <h4 className="font-semibold text-5xl md:text-5xl lg:text-[80px] leading-tight">
              Remote <span className="text-primary">Support</span> Service
            </h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
