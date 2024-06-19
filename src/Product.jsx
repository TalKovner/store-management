import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Product = ({ image, title, price }) => {
  return (
    <Card maxW="xs" bg={"transparent"} boxShadow={"none"}>
      <CardBody>
        {image}
        <Stack mt={3} spacing="0">
          <Heading size="md" color={"#673C2D"}>{title}</Heading>
          <Text color="#A69C8F" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Product;

Product.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.element.isRequired,
  price: PropTypes.element.isRequired,
};


