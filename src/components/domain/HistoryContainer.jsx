import { Box } from "@mui/material";
import HighlightWord from "#/components/shared/HighlightWord";

const HistoryContainer = () => {
  return (
    <Box
      component={"section"}
      id="history"
      className="w-full min-h-[75vh] flex justify-center bg-white py-[60px]"
    >
      <div className="w-full max-w-[1200px] px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] flex flex-col gap-8">
        <h3 className="text-3xl lg:text-5xl text-center ">
          ¡Hola! Soy <HighlightWord className="font-bold">Ale</HighlightWord>, y
          esta es mi historia.
        </h3>
        <div className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-around">
          <img
            src={`${import.meta.env.VITE_APP_MEDIA_URL}/me-landing.jpg`}
            loading="lazy"
            alt="us"
            className="w-full max-w-[400px] lg:w-[25vw] lg:max-w-[400px] object-cover rounded-full"
          />
          <p className="text-md lg:text-lg max-w-[500px] text-justify">
            Somos un emprendimiento apasionado que naci&oacute; el 26 de enero
            de 2023, creado por una joven so&ntilde;adora que comenz&oacute;
            pintando cuadros para amigos y familiares. Con el apoyo de mis seres
            queridos y una chispa de creatividad, mi idea ha crecido y
            evolucionado. Hoy, como{" "}
            <HighlightWord className="font-bold">Ale Art</HighlightWord>,
            podemos ofrecer un cat&aacute;logo diverso de arte, flores y snacks,
            siempre con el mismo amor y dedicación que nos inspir&oacute; al
            principio. ¡Ven y s&eacute; parte de nuestra historia, donde cada
            pieza refleja una pasi&oacute;n compartida y el deseo de inspirar
            belleza en tu vida.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default HistoryContainer;
