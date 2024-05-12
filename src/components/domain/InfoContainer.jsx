import { Box } from "@mui/material";

const InfoContainer = () => {
  return (
    <Box
      component={"section"}
      id="info"
      className="w-full h-dvh flex justify-center"
      sx={{
        background: (theme) =>
          `linear-gradient(${theme.palette.primary80.main} 0%, ${theme.palette.neutral5.main} 70%)`,
      }}
    ></Box>
  );
};

export default InfoContainer;
