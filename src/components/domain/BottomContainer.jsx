import Box from "@mui/material/Box";

const BottomContainer = () => {
  return (
    <Box
      className="min-h-[300px] py-[64px] flex flex-col justify-center items-center"
      sx={{
        backgroundColor: "#2d2d2d",
        color: "white",
      }}
    >
      <div className="w-full max-w-[1000px] flex flex-col gap-12 lg:gap-2 lg:flex-row items-center justify-around ">
        <div className="flex flex-col gap-2 max-w-[250px] justify-center items-center">
          <img
            src={`${import.meta.env.VITE_APP_MEDIA_URL}/clean-base-logo.png`}
            alt="aleart-logo"
            className="w-32"
          />

          <p className="text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
          {/* <p className="text-justify text-sm">
            Arte, flores y snacks: deleita tus sentidos y celebra la
            creatividad.
          </p> */}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-sm mt-4">Escr&iacute;benos a </p>
          <a
            href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
            className="text-primary font-semibold"
          >
            {import.meta.env.VITE_APP_EMAIL}
          </a>

          <p className="text-sm">o encuentranos en nuestras redes sociales</p>
          <div className="grid grid-cols-2 gap-4 lg:gap-4">
            <a
              href={`${import.meta.env.VITE_APP_WHATSAPP_URL}`}
              target="_blank"
            >
              <img
                src={`${import.meta.env.VITE_APP_MEDIA_URL}/whatsapp-48.png`}
                className="w-6 lg:w-8"
                alt="WhatsApp"
                loading="lazy"
              />
            </a>
            <a
              href={`${import.meta.env.VITE_APP_INSTAGRAM_URL}`}
              target="_blank"
            >
              <img
                src={`${import.meta.env.VITE_APP_MEDIA_URL}/instagram-48.png`}
                className="w-6 lg:w-8"
                alt="Instagram"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[400px] justify-center items-center">
          <p className="text-sm font-semibold">
            Nuestros horarios de atenci&oacute;n
          </p>
          <p className="text-sm font-light">
            Lunes a viernes de 9:00am a 6:00pm
          </p>
          <p className="text-sm font-light">
            S&aacute;bados de 9:00am a 1:00pm
          </p>
        </div>
      </div>
    </Box>
  );
};

export default BottomContainer;
