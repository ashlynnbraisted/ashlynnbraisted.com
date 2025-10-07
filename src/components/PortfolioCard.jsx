import { Box, Card, Text } from "@chakra-ui/react";
import BadgeList from "./BadgeList";
import ScrollArea from "./ScrollArea";

const PortfolioCard = ({
  title,
  subtitle,
  badges = [],
  media,
  description,
  reverseLayout = false,
  ...props
}) => {
  const MediaSection = (
    <ScrollArea width="65%" height="100%" aspectRatio={16 / 9}>
      {media}
    </ScrollArea>
  );

  const TextSection = (
    <Box maxWidth="30%" height="100%" display="flex" flexDirection="column">
      <Text fontSize={40} fontWeight="medium" color="primary.500">
        {title}
      </Text>

      {subtitle && (
        <Text fontSize={20} mt={-2}>
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
    </Box>
  );

  return (
    <Card
      borderRadius={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
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
