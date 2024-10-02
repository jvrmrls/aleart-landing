import { Box, Button } from "@mui/material";
import HighlightWord from "#/components/shared/HighlightWord";
import Lottie from "lottie-react";
import animation from "#/assets/animations/gift-animation.json";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const WelcomeContainer = () => {
  const {
    VITE_APP_STORE_URL,
    VITE_APP_WHATSAPP_URL,
    VITE_APP_HERO_REDIRECTION,
  } = import.meta.env;

  const [heroRedirection] = useState(VITE_APP_HERO_REDIRECTION);

  const handleGoTo = () => {
    const url =
      heroRedirection === "store" ? VITE_APP_STORE_URL : VITE_APP_WHATSAPP_URL;
    window.open(url, "_blank");
  };

  return (
    <Box
      component={"section"}
      id="welcome"
      className="w-full h-[90vh] lg:h-[85vh] flex justify-center"
    >
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-2 lg:gap-12 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] ">
        <Box className="lg:h-full lg:flex-1 flex items-center flex-col gap-8 justify-center lg:justify-center ">
          <h1 className="text-5xl lg:text-7xl text-left font-bold">
            ¡Convierte momentos en obras maestras!
          </h1>
          <h2 className="text-md lg:text-xl text-justify">
            Celebra la belleza de la vida en{" "}
            <HighlightWord className="font-bold">Ale Art</HighlightWord> con
            nuestras{" "}
            <HighlightWord className="font-bold">
              creaciones artísticas
            </HighlightWord>{" "}
            que inspiran y cautivan. Explora{" "}
            {heroRedirection === "store"
              ? "nuestra tienda en línea"
              : "nuestro catálogo"}{" "}
            y encuentra la pieza perfecta para conmemorar tus momentos más
            preciados.
          </h2>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleGoTo}
            startIcon={<ShoppingCartIcon />}
          >
            Ir a {heroRedirection === "store" ? "la tienda" : "WhatsApp"}
          </Button>
        </Box>
        <div className="w-full max-w-[250px] lg:min-w-[300px] lg:w-[25vw] lg:max-w-[350px] flex items-center justify-center">
          <Lottie animationData={animation} />
        </div>
      </div>
    </Box>
  );
};

export default WelcomeContainer;
