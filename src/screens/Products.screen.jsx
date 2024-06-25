import { Image, Stack } from "@chakra-ui/react";
import Product from "../Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";

const ProductsScreen = () => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  console.log(data);

  return (
    <Stack margin={"0 auto"} wrap={"wrap"} direction={"row"} p={"10px"}>
      {data?.map((product) => {
        return (
          <Product
            key={product.id}
            image={
              <Image 
              height={"280px"}
              width={"280px"}
                border={"1px transperant solid"}
                borderRadius={16}
                src={product.image.url}
              />
            }
            title={product.name}
            price={product.price}
          />
        );
      })}
    </Stack>
  );
};

export default ProductsScreen;
