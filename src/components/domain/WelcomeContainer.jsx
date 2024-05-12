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
        background: (theme) =>
          `linear-gradient(${theme.palette.neutral5.main} 0%, ${theme.palette.neutral10.main} 40%, ${theme.palette.primary.main} 100%)`,
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-10 lg:gap-6 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] ">
        <Box className=" h-full flex items-center flex-col gap-2 justify-evenly lg:justify-center lg:gap-8">
          <h1 className="text-3xl lg:text-6xl text-left">
            ¡Hola, soy Ale y bienvenido a{" "}
            <HighlightWord className="font-semibold">Ale Art</HighlightWord>,
            donde el tiempo se transforma en regalos inolvidables!
          </h1>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleGoToStore}
          >
            ¡Ir a la tienda!
          </Button>
        </Box>
        <Box className="min-w-[250px] max-w-[250px] lg:min-w-[400px] lg:max-w-[400px] h-full flex items-center">
          <img
            src="/images/ale-welcome.webp"
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-contain"
            alt="woman with a computer"
          />
        </Box>
      </div>
    </Box>
  );
};

export default WelcomeContainer;
