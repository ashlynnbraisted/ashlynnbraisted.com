import { Badge, Flex } from "@chakra-ui/react";

const BadgeList = ({ badges }) => {
  return (
    <Flex wrap="wrap">
      {badges.map((badge) => (
        <Badge key={badge} m={1} variant="outline" color="primary.500">
          {badge}
        </Badge>
      ))}
    </Flex>
  );
};
export default BadgeList;
