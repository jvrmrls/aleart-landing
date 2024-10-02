import Box from "@mui/material/Box";

const HighlightWord = ({ color = "primary", children, ...props }) => {
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
export default HighlightWord;
