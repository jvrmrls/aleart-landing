import { Box } from "@mui/material";

const InfoContainer = () => {
  return (
    <Box
      component={"section"}
      id="info"
      className="w-full h-dvh flex justify-center"
      sx={{
        backgroundColor: (theme) => theme.palette.neutral5.main
      }}
    ></Box>
  );
};

export default InfoContainer;
