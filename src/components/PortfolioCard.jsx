import { Box, Card, Flex, Text } from "@chakra-ui/react";
import BadgeList from "./BadgeList";
import ScrollArea from "./ScrollArea";

// A Portfolio card component
const PortfolioCard = ({
  title,
  subtitle,
  badges = [],
  media,
  description,
  reverseLayout = false,
  aspectRatio = 16 / 9,
  ...props
}) => {
  const MediaSection = (
    <ScrollArea width="65%" height="100%" aspectRatio={aspectRatio}>
      {media}
    </ScrollArea>
  );

  const TextSection = (
    <Flex maxWidth="30%" flexDirection="column">
      <Text
        fontSize={40}
        fontWeight="medium"
        color="primary.500"
        lineHeight={1.2}
      >
        {title}
      </Text>

      {subtitle && (
        <Text fontSize={20} mb={2}>
          {subtitle}
        </Text>
      )}

      {badges && <BadgeList badges={badges} mt={2} />}

      <Box flex="1" mt={4} overflowY="auto" position="relative">
        {description?.map((text, i) => (
          <Text key={i} fontSize={16} mt={i > 0 ? 4 : 0}>
            {text}
          </Text>
        ))}
        <Box
          position="sticky"
          bottom={0}
          left={0}
          width="100%"
          height="50px"
          bgGradient="linear(to-b, rgba(255,255,255,0), rgba(255,255,255,1))"
          pointerEvents="none"
        />
      </Box>
    </Flex>
  );

  return (
    <Card
      borderRadius={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      height={575}
      width="90%"
      variant="outline"
      gap={10}
      p={6}
      {...props}
    >
      {reverseLayout ? (
        <>
          {TextSection}
          {MediaSection}
        </>
      ) : (
        <>
          {MediaSection}
          {TextSection}
        </>
      )}
    </Card>
  );
};

export default PortfolioCard;
