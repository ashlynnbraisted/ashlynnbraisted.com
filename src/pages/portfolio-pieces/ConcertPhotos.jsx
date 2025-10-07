import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { BsShuffle } from "react-icons/bs";
import concertList from "../../concertList.json";

const humanize = (str = "") =>
  str
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();

function parseFilename(filename) {
  const name = filename.replace(/\.[^/.]+$/, "");
  const cleaned = name.replace(/-?(web)?-?\d+$/i, "");

  let artist = "";
  let venue = "";

  if (cleaned.includes("_")) {
    const [a, v] = cleaned.split("_");
    artist = a;
    venue = v || "";
  } else if (cleaned.includes("-")) {
    const [a, v] = cleaned.split("-");
    artist = a;
    venue = v || "";
  } else {
    artist = cleaned;
    venue = "";
  }

  return {
    src: `/concert/${filename}`,
    artist: humanize(artist),
    venue: humanize(venue),
  };
}

const ConcertPhotos = () => {
  const [photos, setPhotos] = useState(concertList.map(parseFilename));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    onOpen();
  };

  const handleShuffle = () => {
    setPhotos((prev) => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <>
      <Flex>
        <Flex width="10%" alignItems={"flex-start"}>
          <IconButton
            aria-label="Shuffle Photos"
            icon={<BsShuffle />}
            onClick={handleShuffle}
            color="primary.500"
            fontSize={40}
            variant="ghost"
            _hover={{ bg: "white", transform: "scale(1.05)" }}
            position="fixed"
            ml={2}
          />
        </Flex>
        {/* Photo Grid */}
        <div
          style={{
            columnCount: 4,
            columnGap: "1rem",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          {photos.map((p, i) => (
            <Box
              key={i}
              as="figure"
              display="inline-block"
              width="100%"
              margin="0 0 1rem"
              breakInside="avoid"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleClick(p)}
            >
              <Image
                src={p.src}
                alt={p.artist}
                width="100%"
                display="block"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0,0,0,0.5)"
                opacity={0}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                transition="opacity 0.3s"
                _hover={{ opacity: 1 }}
                px={2}
              >
                <Text color="white" fontSize="lg" fontWeight="600">
                  {p.artist}
                </Text>
                {p.venue && (
                  <Text fontSize="sm" color="white">
                    {p.venue}
                  </Text>
                )}
              </Box>
            </Box>
          ))}
        </div>
        <Box width="10%"></Box>
      </Flex>

      {/* Modal for clicked image */}
      {selectedPhoto && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered portal={false}>
          <ModalOverlay bg="white" />
          <ModalContent
            bg="transparent"
            boxShadow="none"
            borderRadius={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="90vw"
            maxHeight="90vh"
          >
            <ModalBody
              p={0}
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.artist}
                maxHeight="80vh"
                maxWidth="80vh"
                objectFit="contain"
                borderRadius={0}
                display="block"
              />
              <ModalCloseButton
                color="white"
                position="absolute"
                top={2}
                right={2}
                zIndex={10}
              />
              <Box textAlign="center" mt={2}>
                <Text fontSize={20} fontWeight="500" color="primary.500">
                  {selectedPhoto.artist}
                </Text>
                {selectedPhoto.venue && (
                  <Text fontSize={16} mt={-1}>
                    {selectedPhoto.venue}
                  </Text>
                )}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ConcertPhotos;
