import Container from "@/components/layouts/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-[600px] w-full dark:from-black/10 dark:to-black/20">
      <Container className="h-full">
        <div className="pt-10">hello</div>
        <div className="mt-20 h-full">
          <Carousel className="ml-8 mr-8 gap-1">
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/3">
                <div className="h-[200px] bg-black "></div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        
      </Container>
    </div>
  );
};

export default AboutSection;
