import { useState } from "react";
import { Title, SimpleGrid, Collapse } from "@mantine/core";
import Container from "./base/Container";
import FancyTitle from "./base/FancyTitle";

export default function Tweets({ tweets }) {
  const [tweetsOpen, setTweetsOpen] = useState(true);

  return (
    <Container>
      <FancyTitle
        order={2}
        color="red.6"
        onClick={() => setTweetsOpen(!tweetsOpen)}
        style={{ cursor: "pointer" }}
      >
        Tweets Of The Day
      </FancyTitle>
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
