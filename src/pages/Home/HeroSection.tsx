import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import mackbook from "@/assets/image/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center">
      <div className="mt-20 lg:mt-0 w-full mx-auto">
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-xl text-gray mt-10 mb-5 max-w-[50ch]">
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds of{" "}
          <span className="text-black font-semibold">Macbook repairs</span> and
          diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="mt-10 lg:mt-0 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[30deg] h-[95%] object-contain"
          src={mackbook}
          alt="MackBook"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
