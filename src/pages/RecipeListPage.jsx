import { useState } from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  const [filteredHits, setFilteredHits] = useState(data.hits);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);

    const filteredHits = data.hits.filter((hits) => {
      const recipeLabel = hits.recipe.label.toLowerCase();
      return recipeLabel.includes(newSearchInput.toLowerCase());
    });
    setFilteredHits(filteredHits);
  };

  return (
    <Box bg="blue.400" w="100%" minH="100vh" p="10px" placeItems={"center"}>
      <Heading color={"white"}>Winc Recipe Checker</Heading>
      <Box p={4} width={"80%"} maxW={"700px"}>
        <Input
          bg={"white"}
          size="lg"
          placeholder="Search recipes"
          value={searchInput}
          onChange={handleChange}
        />
      </Box>
      <Flex
        wrap="wrap"
        direction="row"
        justify="space-evenly"
        p="10px"
        rowGap="20px"
        columnGap="10px"
      >
        {filteredHits.map((hits) => (
          <RecipeCard
            item={hits}
            key={hits.recipe.label}
            clickFn={() => clickFn(hits)}
          />
        ))}
      </Flex>
    </Box>
  );
};
