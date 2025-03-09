import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  HStack,
  Tag,
  Flex,
} from "@chakra-ui/react";

export const RecipeCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius={15}
      boxShadow="dark-lg"
      w="20rem"
      h="30rem"
      overflow={"hidden"}
      bgColor={"gray.100"}
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image objectFit="cover" h="33%" src={item.recipe.image} />
      <CardBody>
        <Stack alignItems="center" overflow={"hidden"}>
          <Text
            textTransform="uppercase"
            color="gray.500"
            fontWeight="semibold"
            fontSize={"sm"}
          >
            {item.recipe.mealType}
          </Text>

          <Heading fontSize="xl" textAlign="center">
            {item.recipe.label}
          </Heading>

          <Box>
            {item.recipe.healthLabels.map((healthLabels) => {
              if (healthLabels === "Vegan" || healthLabels === "Vegetarian") {
                return (
                  <Tag
                    key={healthLabels}
                    fontWeight={"bold"}
                    mr={2}
                    textTransform={"uppercase"}
                    colorScheme="purple"
                  >
                    {healthLabels}
                  </Tag>
                );
              }
            })}
          </Box>

          <Box>
            {item.recipe.dietLabels.map((dietLabels) => (
              <Tag
                key={dietLabels}
                fontWeight={"bold"}
                mr={2}
                mb={2}
                colorScheme="green"
                textTransform={"uppercase"}
              >
                {dietLabels}
              </Tag>
            ))}
          </Box>

          <HStack>
            <Text>Dish:</Text>
            <Text fontWeight="bold" textTransform="capitalize">
              {item.recipe.dishType}
            </Text>
          </HStack>

          {item.recipe.cautions.length > 0 && (
            <Flex
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Text>Cautions:</Text>
              <Flex justifyContent={"center"} flexWrap={"wrap"}>
                {item.recipe.cautions.map((caution) => (
                  <Tag
                    key={caution}
                    mr={2}
                    mb={2}
                    colorScheme="red"
                    textTransform={"uppercase"}
                  >
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </Flex>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
