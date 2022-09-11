import { Card, Text, Button, Title } from "@mantine/core";
export default function NewsItems({ newsItems }) {
  return (
    <div>
      {newsItems.map((item) => (
        <Card key={item.id} withBorder radius="md">
          <Title order={3} color="gray">
            {newsItems.title}
          </Title>
          <Text size="sm" color="dimmed">
            {item.newsItemSummary}
          </Text>
        </Card>
      ))}
    </div>
  );
}
