import { Title } from "@mantine/core";

const FancyTitle = (props) => (
  <Title
    sx={{ fontFamily: "'Russo One', sans-serif", letterSpacing: ".15rem" }}
    {...props}
  />
);

export default FancyTitle;
