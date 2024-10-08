import { Box } from "@mui/material";
import HighlightWord from "#/components/shared/HighlightWord";
import Lottie from "lottie-react";
import coupleAnimation from "#/assets/animations/couple.json";
import birthdayAnimation from "#/assets/animations/birthday.json";
import deathAnimation from "#/assets/animations/death.json";
import moreAnimation from "#/assets/animations/more.json";

const EventsContainer = () => {
  return (
    <Box
      component={"section"}
      id="events"
      className="w-full min-h-[90vh] flex justify-center bg-white"
    >
      <div
        id="products-container"
        className="w-full flex justify-center py-[100px]"
      >
        <div className="w-full max-w-[1400px] px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] flex flex-col gap-8 items-center">
          <h3 className="text-4xl lg:text-6xl text-center max-w-[700px] font-semibold">
            Tu mejor aliado en tus momentos especiales.
          </h3>
          <p className="text-md lg:text-lg max-w-[800px] text-justify">
            En Ale Art, entendemos que cada evento es único y especial. Por eso,
            ofrecemos una variedad de productos diseñados para acompañarte en
            las distintas etapas de la vida. Desde celebraciones de amor hasta
            momentos de despedida, estamos aquí para ayudarte a crear
            experiencias memorables. Explora nuestros círculos de eventos y
            descubre cómo podemos contribuir a tu ocasión:
          </p>
          <div className="w-full max-w-[1400px] grid gap-8 lg:gap-4 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            <div className="flex flex-col justify-around items-center gap-2">
              <Lottie
                animationData={coupleAnimation}
                loop={true}
                className="h-[100px]"
              />
              <h5 className="text-md font-semibold">Aniversarios</h5>
            </div>
            <div className="flex flex-col justify-around items-center gap-2">
              <Lottie
                animationData={birthdayAnimation}
                loop={true}
                className="h-[100px]"
              />
              <h5 className="text-md font-semibold">Cumplea&ntilde;os</h5>
            </div>
            <div className="flex flex-col justify-around items-center gap-2">
              <Lottie
                animationData={deathAnimation}
                loop={true}
                className="h-[100px]"
              />
              <h5 className="text-md font-semibold">Funerales</h5>
            </div>
            <div className="flex flex-col justify-around items-center gap-2">
              <Lottie
                animationData={moreAnimation}
                loop={true}
                className="h-[100px]"
              />
              <h5 className="text-md font-semibold">¡Y muchos m&aacute;s!</h5>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default EventsContainer;
