import { Box } from "@mui/material";

const ServicesContainer = () => {
  return (
    <Box
      component={"section"}
      id="services"
      className="w-full h-dvh flex justify-center"
      sx={{
        backgroundColor: (theme) => theme.palette.neutral5.main
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-10 lg:gap-6 px-[32px] py-[16px] lg:px-[64px] lg:py-[32px]">
        <Box>
          <h2 className="text-2xl font-bold">Nuestros Productos</h2>
          <h3 className="text-md">
            Te ofrecemos una amplia variedad de productos personalizados para
            que puedas regalar a tus seres queridos en cualquier ocasión
            especial.
          </h3>
        </Box>
        <Box className="flex-grow">adada</Box>
      </div>
    </Box>
  );
};

export default ServicesContainer;
