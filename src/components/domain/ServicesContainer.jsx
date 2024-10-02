import { Box } from "@mui/material";

const ServicesContainer = () => {
  return (
    <Box
      component={"section"}
      id="services"
      className="w-full min-h-[300px] flex justify-center bg-white py-[60px]"
    >
      <div className="w-full max-w-[1400px] grid gap-16 lg:gap-8 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <Box className="flex flex-col lg:flex-row justify-center items-center shadow-md lg:shadow-xl h-auto px-6 lg:px-3 py-6 gap-4 rounded-lg">
          <img
            src={`${import.meta.env.VITE_APP_MEDIA_URL}/clean-base-logo.png`}
            loading="lazy"
            alt="Base Logo"
            className="w-[180px] h-[180px]  lg:w-[120px] lg:h-[120px] rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-center lg:text-left">
              Basics
            </h3>
            <p className="text-md">
              ¡Transforma tus regalos! En nuestra línea Basic, encontrarás la
              magia del arte y detalles únicos que cuentan tu historia de forma
              especial.
            </p>
          </div>
        </Box>
        <Box className="flex flex-col lg:flex-row justify-center items-center shadow-md lg:shadow-xl h-auto px-6 lg:px-3 py-6 gap-4 rounded-lg">
          <img
            src={`${import.meta.env.VITE_APP_MEDIA_URL}/light-flowers-logo.png`}
            loading="lazy"
            alt="Flowers Logo"
            className="w-[180px] h-[180px]  lg:w-[120px] lg:h-[120px] "
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-center lg:text-left ">
              Flowers
            </h3>
            <p className="text-md">
              ¡Conéctate con la naturaleza! En Flowers, ofrecemos frescura y
              color que iluminan cualquier ocasión y transmiten emociones con
              elegancia.
            </p>
          </div>
        </Box>
        <Box className="flex flex-col lg:flex-row justify-center items-center shadow-md lg:shadow-xl h-auto px-6 lg:px-3 py-6 gap-4 rounded-lg">
          <img
            src={`${import.meta.env.VITE_APP_MEDIA_URL}/snacks-logo.png`}
            loading="lazy"
            alt="Snacks Logo"
            className="w-[180px] h-[180px]  lg:w-[120px] lg:h-[120px]  rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-center lg:text-left">
              Snacks
            </h3>
            <p className="text-md">
              ¡Dale un toque dulce a tu día! Con nuestra línea Snacks, disfruta
              de momentos de sabor y felicidad que son perfectos para compartir.
            </p>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default ServicesContainer;
