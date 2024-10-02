import Box from "@mui/material/Box";
import { div } from "framer-motion/client";
const ContactContainer = () => {
  return (
    <Box
      component={"section"}
      id="contact"
      className="w-full min-h-[50vh] flex flex-col  justify-center items-center bg-white py-[60px]"
    >
      <div className="w-full max-w-[1200px] px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] flex flex-col gap-8 items-center justify-center">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold">
          ¡Ponte en contacto con nosotros!
        </h2>
        <p className="text-md lg:text-lg max-w-[700px] text-justify">
          ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte! Por
          favor, env&iacute;anos un correo electr&oacute;nico a{" "}
          <a
            href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
            className="text-primary font-semibold"
          >
            {import.meta.env.VITE_APP_EMAIL}
          </a>{" "}
          o dir&iacute;gete a cualquiera de nuestras redes sociales
        </p>
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <a href={`${import.meta.env.VITE_APP_WHATSAPP_URL}`} target="_blank">
            <img
              src={`${import.meta.env.VITE_APP_MEDIA_URL}/whatsapp-48.png`}
              className="w-10 lg:w-12"
              alt="WhatsApp"
              loading="lazy"
            />
          </a>
          <a href={`${import.meta.env.VITE_APP_INSTAGRAM_URL}`} target="_blank">
            <img
              src={`${import.meta.env.VITE_APP_MEDIA_URL}/instagram-48.png`}
              className="w-10 lg:w-12"
              alt="Instagram"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default ContactContainer;
