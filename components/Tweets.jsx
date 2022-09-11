import { useState } from "react";
import { Title, SimpleGrid, Collapse } from "@mantine/core";
import Container from "./base/Container";
export default function Tweets({ tweets }) {
  const [tweetsOpen, setTweetsOpen] = useState(false);

  return (
    <Container>
      <Title
        order={2}
        color="red"
        onClick={() => setTweetsOpen(!tweetsOpen)}
        style={{ cursor: "pointer" }}
      >
        Tweets Of The Day
      </Title>
      <Collapse in={tweetsOpen} transitionDuration={1000}>
        <SimpleGrid
          spacing="lg"
          mt="lg"
          cols={2}
          breakpoints={[{ maxWidth: 600, cols: 1 }]}
        >
          {tweets.tweetEmbedCode.map((tweetCode) => (
            <div dangerouslySetInnerHTML={{ __html: tweetCode }}></div>
          ))}
        </SimpleGrid>
      </Collapse>
    </Container>
  );
}
