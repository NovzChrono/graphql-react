import { useQuery, gql } from "@apollo/client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export default function List() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

  if (error) return <div>Quelque chose s&apos;est... </div>;
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <div>
        {data.characters.results.map((character) => {
          <Card maxW="sm">
            <CardBody>
              <Image
                src={character.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>;
        })}
      </div>
    </>
  );
}
