import { Box, Button } from "@mui/material";
import HighlightWord from "#/components/shared/HighlightWord";

const WelcomeContainer = () => {
  const handleGoToStore = () => {
    window.open("http://store.aleartsv.com", "_self");
  };

  return (
    <Box
      component={"section"}
      id="welcome"
      className="w-full h-dvh flex justify-center"
      sx={{
        backgroundColor: (theme) => theme.palette.neutral5.main
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-2 lg:gap-12 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] ">
        <Box className="h-full flex items-center flex-col gap-4 justify-center lg:justify-center lg:gap-8">
          <h1 className="text-3xl lg:text-5xl text-left">
            ¡Bienvenido a {' '}
              <HighlightWord className="font-semibold">
                Ale Art
              </HighlightWord>
            , donde los momentos se convierten en obras maestras!
          </h1>
          <h2 className="text-sm lg:text-xl text-left">
              Celebra la belleza de la vida con nuestras <HighlightWord>creaciones artísticas</HighlightWord> que inspiran y cautivan.
            Explora nuestra tienda en línea y encuentra la pieza perfecta para conmemorar tus momentos más preciados.
          </h2>
          {/*<h1 className="text-3xl lg:text-6xl text-left">*/}
          {/*  ¡Hola, soy Ale y bienvenido a{" "}*/}
          {/*  <HighlightWord className="font-semibold">Ale Art</HighlightWord>,*/}
          {/*  donde el tiempo se transforma en regalos inolvidables!*/}
          {/*</h1>*/}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleGoToStore}
          >
            ¡Ir a la tienda!
          </Button>
        </Box>
        <Box className="min-w-[200px] max-w-full lg:min-w-[400px] lg:max-w-[400px] min-h-[250px] lg:min-h-[500px] flex items-center flex-row lg:flex-row">
          <img
            src="/images/ale-art-logo.webp"
            className="w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] object-contain"
            alt="logo principal"
          />
          <img
            src="/images/ale-art-flowers-logo.webp"
            className="w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] object-contain"
            alt="logo-flores"
            />
        </Box>
      </div>
    </Box>
  );
};

export default WelcomeContainer;
