import { Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Layout = ({ header, nav, main, footer }) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"200px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
      pt={'20px'}
      bg={"#F3F4EB"}
    >
      <GridItem pl="2" bg={"#F3F4EB"} area={"header"}>
        {header}
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        {nav}
      </GridItem>
      <GridItem area={"main"}>
        {main}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        {footer}
      </GridItem>
    </Grid>
  );
};

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  nav: PropTypes.element.isRequired,
  main: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
};
