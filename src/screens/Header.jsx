import navBar from '../assets/images/Frame2.png'
import { Image, Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container height={"100%"} minWidth={"-webkit-fill-available"}>
      <Image src={navBar} height={"inherit"} objectFit="cover" width={'100%'} borderRadius={"11px"}/>
    </Container>
  );
};
