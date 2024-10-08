import { Box } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ProductsContainer = () => {
  const products = [
    "https://www.instagram.com/p/C6yv8wlMl66",
    "https://www.instagram.com/p/C5cSaJEsFyC",
    "https://www.instagram.com/p/C7mjnsNPfbS",
    "https://www.instagram.com/p/C23H4uBvL4c",
    "https://www.instagram.com/p/CxgFtCPOwMQ",
    "https://www.instagram.com/p/C-5Lz8pOMNW",
    "https://www.instagram.com/p/CxGxletPhb-",
  ];
  return (
    <Box
      component={"section"}
      id="products"
      className="w-full min-h-[80vh] flex items-center justify-center bg-white py-[60px] "
    >
      <div className="w-full max-w-[1400px]  px-[32px] py-[16px] lg:px-[64px] lg:py-[32px] flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-16">
          <h3 className="text-4xl lg:text-6xl text-center w-full lg:max-w-[700px] font-semibold">
            Nuestros momentos capturados
          </h3>
          <p className="text-md lg:text-lg w-full lg:max-w-[800px] text-justify">
            Descubre nuestra selecci&oacute;n de piezas &uacute;nicas que
            transforman cada ocasi&oacute;n en un recuerdo inolvidable. Desde
            obras de arte vibrantes hasta detalles encantadores de nuestra
            l&iacute;nea de flores y deliciosos snacks, cada producto
            est&aacute; dise&ntilde;ado para a&ntilde;adir un toque especial a
            tus celebraciones. ¡Explora y elige la que cuente tu historia!
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:h-[650px] lg:px-[64px] lg:py-[32px] flex flex-row  gap-8 items-center overflow-auto no-scrollbar">
          {products?.map((product, index) => (
            <motion.div
              className="w-full max-h-full"
              key={index}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <InstagramEmbed url={product} width={320} />
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ProductsContainer;
