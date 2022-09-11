import { Stack, Card, Text, Button, Title, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import newsHeaderImage from "../public/images/news-header.jpg";
import FancyTitle from "./base/FancyTitle";
import Container from "@/components/base/Container";

export default function NewsItems({ newsItems }) {
  return (
    <Container>
      <FancyTitle order={2} color="red.6">
        News Of The Day
      </FancyTitle>
      <SimpleGrid mt="lg" cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
        {newsItems.map((item) => (
          <Card withBorder radius="md" shadow="md" sx={{ width: "100%" }}>
            <Card.Section>
              <Image src={newsHeaderImage} height={300} objectFit="cover" />
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
