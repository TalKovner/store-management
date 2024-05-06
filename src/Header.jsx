import { Image, Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container height={"100%"} minWidth={"-webkit-fill-available"}>
      <Image src="Frame 2.png" height={"inherit"} objectFit="cover" width={'100%'} borderRadius={"11px"}/>
    </Container>
  );
};
