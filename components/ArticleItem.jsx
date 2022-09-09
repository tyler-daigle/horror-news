import styles from "@/styles/ArticleItem.module.css";
import {
  Stack,
  Title,
  Group,
  Accordion,
  MediaQuery,
  Text,
} from "@mantine/core";

export default function ArticleItem({ article }) {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="article">
        <Accordion.Control>
          <Group noWrap={true}>
            <img
              src="https://via.placeholder.com/100"
              height="100"
              width="100"
              alt="placeholder"
            />

            <Stack justify="apart">
              <Title order={2} color="red" size="1.25rem">
                {article.title}
              </Title>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Text size="lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illo? Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Minima?
                </Text>
              </MediaQuery>
            </Stack>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Text size="lg">
            <div
              dangerouslySetInnerHTML={{ __html: article.articleContent.html }}
            ></div>
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
