import { useContext } from "react";
import { Productcontext } from "./main";
import {
  Card,
  Button,
  CardFooter,
  CardBody,
  Heading,
  Stack,
  Image,
  Divider,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { products } = useContext(Productcontext);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Flex
      flex="1"
      gap="4"
      alignItems="center"
      flexWrap="wrap"
      m={2}
      alignSelf="center"
      justifyContent="center"
    >
      {products.map((product, index) => (
        <Card maxW="sm" key={index}>
          <CardBody>
            <Image
              src={product.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>
                {product.description.length > 50
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => handleNavigate(product.id)}
            >
              Know More
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}
