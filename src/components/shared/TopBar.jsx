import { Box } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      component={"nav"}
      className="sticky top-0 z-10 bg-transparent w-full  flex flex-row justify-between lg:justify-center items-center
        max-h-[120px] h-[15vh]
      "
    >
      <div>
        <img
          src={`${import.meta.env.VITE_APP_MEDIA_URL}/clean-base-logo.png`}
          alt="logo"
          loading="lazy"
          className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain"
        />
      </div>
      <div className="max-w-[1200px] h-[64px] px-[32px] lg:px-[64px] flex flex-row justify-around items-center gap-8">
        <a
          className="font-semibold text-sm lg:text-lg cursor-pointer"
          href="#services"
        >
          Servicios
        </a>
        <a
          className="font-semibold text-sm lg:text-lg cursor-pointer"
          href="#history"
        >
          Historia
        </a>
        <a
          className="font-semibold text-sm lg:text-lg cursor-pointer"
          href="#events"
        >
          Eventos
        </a>
      </div>
    </Box>
  );
};

export default TopBar;
