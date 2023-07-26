import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Input,
  Stack,
  Flex,
} from "@chakra-ui/react";

import React, { useState } from "react";

const SearchSection = ({ contests }) => {
  const [search, setSearch] = useState("");
  return (
    <Stack className="search-flex" flex={"0.5 0.5 0"} flexBasis="75%">
      <Box display={"flex"} gap="0.5rem" flexDirection={"column"} mb="2rem">
        <h3 className="filter-by-text">Search</h3>
        <Input
          variant={"outline"}
          size="md"
          border={"1px"}
          borderColor="black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Flex flexWrap={"wrap"} gap="2.5em">
        {contests
          .filter((contest) => {
            return search === ""
              ? contest
              : contest.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((contest) => {
            return (
              <Card
                key={contests.indexOf(contest)}
                border="1px black solid"
                flex={"1 1 0"}
                flexBasis="37.5%"
              >
                <CardHeader className="h3">{contest.name}</CardHeader>
                <CardBody>
                  <Stack gap={"0.5rem"} className="card-body">
                    <h3>Hosted by {contest.site}</h3>
                    <Box>
                      <Text>
                        Starts from:
                        <p className="p">{contest.start_time.slice(0, 10)}</p>
                      </Text>
                      <Text>
                        Ends at:
                        <p className="p">{contest.end_time.slice(0, 10)}</p>
                      </Text>
                    </Box>
                    <Text>
                      Duration:
                      <p className="p">
                        {Math.round(contest.duration / 86400)} days
                      </p>
                    </Text>
                    <Text>
                      in 24 hours: <p className="p">{contest.in_24_hours}</p>
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <a className="goto-site" href={contest.url} target="blank">
                    Go to Site
                  </a>
                </CardFooter>
              </Card>
            );
          })}
      </Flex>
    </Stack>
  );
};

export default SearchSection;
