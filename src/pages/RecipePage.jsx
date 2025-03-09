import {
  Center,
  Button,
  Heading,
  Image,
  Text,
  Flex,
  Box,
  Tag,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center bg="blue.500" minH={"100vh"}>
      <Flex
        direction={"column"}
        w={{ sm: "100%", md: "70%" }}
        minH={"100vh"}
        bg={"white"}
        alignSelf={"start"}
      >
        <Flex>
          <Button
            colorScheme="blue"
            variant={"ghost"}
            alignSelf={"center"}
            onClick={() => clickFn(null)}
          >
            &lt;
          </Button>
          <Spacer />
          <Image src="src\assets\react.svg" p={1} h={"50px"}></Image>
          <Spacer />
        </Flex>
        <Image
          src={recipe.recipe.image}
          objectFit={"cover"}
          w={"100%"}
          h={"300px"}
          mb="4"
        ></Image>
        <Flex justifyContent={"space-between"} wrap={"wrap"}>
          <Flex direction={"column"} p={4}>
            <Text
              textTransform="uppercase"
              color="gray.500"
              fontWeight="semibold"
              fontSize={"sm"}
            >
              {recipe.recipe.mealType}
            </Text>
            <Heading fontSize={"2xl"}>{recipe.recipe.label}</Heading>
            {recipe.recipe.totalTime > 0 && (
              <HStack>
                <Text>Total Cooking time:</Text>
                <Text fontWeight="semibold">
                  {recipe.recipe.totalTime} Minutes
                </Text>
              </HStack>
            )}
            <HStack>
              <Text>Servings:</Text>
              <Text fontWeight="semibold">{recipe.recipe.yield}</Text>
            </HStack>
            <Text fontWeight="bold" fontSize={"xl"}>
              Ingredients:
            </Text>
            <Box>
              {recipe.recipe.ingredientLines.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </Box>
          </Flex>

          {/* v Right side of the recipe page v */}

          <Flex maxW={"700px"} p={4} direction={"column"}>
            <Text>Health labels:</Text>
            <Flex wrap={"wrap"} w={"100%"}>
              {recipe.recipe.healthLabels.map((healthLabels) => (
                <Tag
                  key={healthLabels}
                  fontWeight={"bold"}
                  mr={2}
                  mb={2}
                  textTransform={"uppercase"}
                  colorScheme="purple"
                >
                  {healthLabels}
                </Tag>
              ))}
            </Flex>

            <Text>Diet:</Text>
            <Box>
              {recipe.recipe.dietLabels.map((dietLabels) => (
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
            <Text>Cautions:</Text>
            <Box>
              {recipe.recipe.cautions.map((caution) => (
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
            </Box>

            <Text fontWeight={"bold"}>Total nutrients:</Text>
            <Flex wrap={"wrap"}>
              <VStack p={2} align={"left"}>
                <Text>{Math.round(recipe.recipe.calories)}</Text>
                <Text>Calories</Text>
              </VStack>

              <VStack p={2} align={"left"}>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                  &nbsp;
                  {recipe.recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text>{recipe.recipe.totalNutrients.CHOCDF.label}</Text>
              </VStack>

              <VStack p={2} align={"left"}>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}
                  &nbsp;
                  {recipe.recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text>{recipe.recipe.totalNutrients.PROCNT.label}</Text>
              </VStack>

              <VStack p={2} align={"left"}>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}
                  &nbsp;
                  {recipe.recipe.totalNutrients.FAT.unit}
                </Text>
                <Text>{recipe.recipe.totalNutrients.FAT.label}</Text>
              </VStack>

              <VStack p={2} align={"left"}>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}
                  &nbsp;
                  {recipe.recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text>{recipe.recipe.totalNutrients.CHOLE.label}</Text>
              </VStack>

              <VStack p={2} align={"left"}>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.NA.quantity)}
                  &nbsp;
                  {recipe.recipe.totalNutrients.NA.unit}
                </Text>
                <Text>{recipe.recipe.totalNutrients.NA.label}</Text>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
