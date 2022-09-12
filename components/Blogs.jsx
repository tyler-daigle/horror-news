import { Collapse, Button, Paper, Group, Center } from "@mantine/core";
import Container from "./base/Container";
import { useState } from "react";
import FancyTitle from "./base/FancyTitle";
import Image from "next/image";

export default function Blogs({ blogs }) {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <Container>
      <Paper shadow="sm" p="lg" radius={5}>
        <Group position="center">
          {blogs.blogHeaderImage && (
            <Image
              src={blogs.blogHeaderImage.url}
              height={400}
              width={700}
              alt={blogs.headerImageAltText}
              objectFit="contain"
            />
          )}
          <FancyTitle order={2} color="red.6">
            {blogs.title}
          </FancyTitle>
        </Group>

        <p style={{ width: "100%" }}>{blogs.blogSummary}</p>

        <Button
          onClick={() => setBlogOpen(!blogOpen)}
          variant="outline"
          color="red.6"
        >
          {blogOpen ? "Read Less" : "Read More"}
        </Button>
      </Paper>

      <Collapse in={blogOpen}>
        <div
          style={{
            width: "100%",
            padding: "0 1rem",
            fontSize: "1.15rem",
            color: "#E9ECEF",
          }}
          dangerouslySetInnerHTML={{ __html: blogs.blogContent.html }}
        ></div>
      </Collapse>
    </Container>
  );
}
