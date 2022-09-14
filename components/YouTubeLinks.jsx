import { Box, Group, SimpleGrid, Skeleton, Title, Text } from "@mantine/core";
import Container from "./base/Container";
import FancyTitle from "./base/FancyTitle";
import Image from "next/image";
import youtubeSvg from "../public/images/youtube.svg";

export default function YouTubeLinks({ youTubeLinks }) {
  return (
    <Container>
      <Group>
        <Image src={youtubeSvg} alt="YouTube Icon" />
        <FancyTitle order={2} color="red.6">
          YouTube Videos
        </FancyTitle>
      </Group>
      <SimpleGrid mt="lg" cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
        {youTubeLinks.videoId.map((videoId) => (
          <Box
            key={videoId}
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[8],
              borderRadius: "5px",
              padding: "1rem",
            })}
          >
            <Container fluid>
              <iframe
                style={{ width: "100%", aspectRatio: "16/9" }}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Container>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
