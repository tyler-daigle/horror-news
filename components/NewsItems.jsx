import { Stack, Card, Text, Button, SimpleGrid, Group } from "@mantine/core";

import Link from "next/link";

import FancyTitle from "./base/FancyTitle";
import Container from "@/components/base/Container";
import Image from "next/image";
import newsSvg from "../public/images/news.svg";
import styles from "@/styles/NewsItems.module.css";

export default function NewsItems({ newsItems }) {
  return (
    <Container>
      <Group>
        <Image src={newsSvg} alt="News Item Icon" />
        <FancyTitle order={2} color="red.6">
          News Of The Day
        </FancyTitle>
      </Group>
      <SimpleGrid mt="lg" cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
        {newsItems.map((item) => (
          <Card
            key={item.id}
            withBorder
            radius="md"
            shadow="md"
            sx={{ width: "100%" }}
          >
            <Card.Section sx={{ position: "relative", height: "120px" }}>
              {item.newsItemImage ? (
                <Image
                  alt="News Item Header Image"
                  src={item.newsItemImage.url}
                  layout="fill"
                  height={150}
                  // style={{
                  //   objectFit: `${
                  //     item.setObjectFitContain ? "contain" : "cover"
                  //   }`,
                  // }}
                  className={styles.newsHeaderImageContain}
                />
              ) : (
                <Image
                  alt="News Item Header Image"
                  src="/images/news-header.jpg"
                  layout="fill"
                  height={150}
                  // style={{ objectFit: "cover" }}
                  className={styles.newsHeaderImageCover}
                />
              )}
            </Card.Section>
            <Stack justify="space-between">
              <FancyTitle order={3} color="cyan.6">
                {item.title}
              </FancyTitle>
              <Text size="sm" color="gray.2">
                {item.newsItemSummary}
              </Text>
              <Link href={item.newsItemUrl} passHref>
                <Button
                  fullWidth
                  variant="outline"
                  component="a"
                  color="cyan.6"
                >
                  Read More
                </Button>
              </Link>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
