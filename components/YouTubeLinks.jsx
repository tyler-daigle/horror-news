import { Group, SimpleGrid, Skeleton, Title, Text } from "@mantine/core";
import Container from "./base/Container";

export default function YouTubeLinks({ youTubeLinks }) {
  return (
    <Container>
      <Title order={2} color="red">
        YouTube Videos Of The Day
      </Title>
      <SimpleGrid mt="lg" cols={3} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
        {youTubeLinks.videoId.map((videoId) => (
          <Skeleton height={200} width="auto" />
        ))}
      </SimpleGrid>
    </Container>
  );
}
