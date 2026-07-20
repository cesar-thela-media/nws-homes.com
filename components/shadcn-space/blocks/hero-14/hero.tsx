import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="p-4 pt-0">
      <div className="relative h-[calc(100vh-92px)] w-full flex items-end">
        <video
          src="https://images.shadcnspace.com/assets/hero-img/hero-14-video.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 w-full h-full rounded-3xl pointer-events-none bg-linear-to-t from-gray-950 to-50% to-gray-950/0" />
        <div className="relative z-10 flex flex-col gap-6 items-start justify-start max-w-7xl w-full mx-auto xl:px-16 lg:px-8 px-4 py-6 sm:py-8 md:py-16 text-left">
          <div className="max-w-3xl flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium text-white">
                Advanced healthcare for every stage of life
              </h1>
              <p className="text-base sm:text-lg font-normal text-white/50 max-w-xl">
                Combining clinical excellence with compassionate care, we
                provide tailored medical solutions designed to help you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4">
              <Button className="relative overflow-hidden group px-5 py-2.5 h-auto bg-white border border-white rounded-full text-gray-950 text-sm font-medium cursor-pointer transition-all duration-300 shadow-none">
                <span className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-10 h-10 bg-gray-950 rounded-full scale-0 transition-transform duration-700 ease-in-out group-hover:scale-[18]" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Request an Appointment
                  <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </Button>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 py-2.5 text-white hover:text-white/80"
              >
                <Phone size={16} />
                <span>(512) 203-0405</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
