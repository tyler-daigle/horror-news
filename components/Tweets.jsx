import { useState } from "react";
import { Title, SimpleGrid, Collapse, Box, Group } from "@mantine/core";
import Container from "./base/Container";
import FancyTitle from "./base/FancyTitle";
import Image from "next/image";
import tweetSvg from "../public/images/twitter.svg";
export default function Tweets({ tweets }) {
  const [tweetsOpen, setTweetsOpen] = useState(true);

  return (
    <Container>
      <Group>
        <Image src={tweetSvg} alt="Twitter Icon" />
        <FancyTitle
          order={2}
          color="red.6"
          onClick={() => setTweetsOpen(!tweetsOpen)}
          style={{ cursor: "pointer" }}
        >
          Tweets Of The Day
        </FancyTitle>
      </Group>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[8],
          borderRadius: "5px",
        })}
      >
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
      </Box>
    </Container>
  );
}
