import { Group, SimpleGrid, Skeleton, Title, Text } from "@mantine/core";
import Container from "./base/Container";
import FancyTitle from "./base/FancyTitle";

export default function YouTubeLinks({ youTubeLinks }) {
  return (
    <Container>
      <FancyTitle order={2} color="red.6">
        YouTube Videos Of The Day
      </FancyTitle>
      <SimpleGrid mt="lg" cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
        {youTubeLinks.videoId.map((videoId) => (
          <Container fluid>
            <iframe
              style={{ width: "100%", aspectRatio: "16/9" }}
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
        ))}
      </SimpleGrid>
    </Container>
  );
}
