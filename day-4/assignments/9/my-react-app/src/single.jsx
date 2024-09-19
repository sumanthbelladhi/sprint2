import { useEffect, useState } from "react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "./App";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      axios.get(`${URL}/${productId}`).then((data) => {
        setProduct(data?.data);
      });
    }
  }, [productId]);

  if (!product?.title) {
    return <>No Product found with this id</>;
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "50%", sm: "200px" }}
        width="50%"
        src={product.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{product.title}</Heading>

          <Text py="2">{product.description}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default SingleProduct;
