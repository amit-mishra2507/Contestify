import { Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FilterSection = ({
  contests,
  filter,
  initialContests,
  liveFilter,
  onLiveFilter,
}) => {
  const listOfSites = [];

  return (
    <Stack className="filter-flex" flex={"0.5 0.5 0"} flexBasis="37.5%">
      <Flex alignItems={"center"} justifyContent="space-between" mb={"1rem"}>
        <Text className="filter-by-text">Filter by</Text>
        <Link to="/contests" className="reset-button">
          Reset Filters
        </Link>
      </Flex>
      <Stack>
        <h4 className="h4">Hosted By</h4>
        {initialContests.map((contest) => {
          if (!listOfSites.includes(contest.site)) {
            listOfSites.push(contest.site);
            return (
              <Checkbox
                key={initialContests.indexOf(contest)}
                colorScheme={"red"}
                className="check-box"
                size={"lg"}
                onChange={(e) => filter(contest.site, e.target.checked)}
              >
                {contest.site}
              </Checkbox>
            );
          }
        })}
      </Stack>
      <Stack>
        <h4 className="h4">Status</h4>
        <Checkbox
          colorScheme={"red"}
          className="check-box"
          size={"lg"}
          onChange={(e) => onLiveFilter(contests, e.target.checked)}
        >
          Live
        </Checkbox>
        <Checkbox
          colorScheme={"red"}
          className="check-box"
          size={"lg"}
          onChange={(e) => liveFilter(contests, e.target.checked)}
        >
          In 24 hours
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default FilterSection;
