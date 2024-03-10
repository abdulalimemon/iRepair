import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion} from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      ref={componentRef}
      className="bg-light-gray h-[415px] rounded-lg col-span-12 dark:bg-black/80"
      style={style}
    >
      <div
        className={`flex bg-[url(/src/assets/image/trackpad.png)] h-full bg-cover md:bg-contain  bg-center md:bg-right bg-no-repeat rounded-lg`}
      >
        <div className="p-5 lg:p-7">
          <h4 className="text-[20px] font-semibold">Battery Replacement</h4>
          <p className="text-3xl lg:text-[36px] mt-[18%]">
            Get back to 100% battery health. <br /> With 6 month replacement
            warranty.{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BatteryReplacement;
