import Box from "@mui/material/Box";

const HighloghtWord = ({ color = "primary", children, ...props }) => {
  return (
    <Box
      component="span"
      {...props}
      sx={{ color: (theme) => theme.palette[color].main }}
    >
      {children}
    </Box>
  );
};
export default HighloghtWord;
