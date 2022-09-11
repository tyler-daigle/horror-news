import { Collapse, Button, Paper, Title } from "@mantine/core";
import Container from "./base/Container";
import { useState } from "react";
export default function Blogs({ blogs }) {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <Container>
      <Paper shadow="sm" p="lg" radius={5}>
        <Title order={2} color="red">
          {blogs.title}
        </Title>

        <p style={{ width: "100%" }}>{blogs.blogSummary}</p>

        <Button onClick={() => setBlogOpen(!blogOpen)} color="gray">
          {blogOpen ? "Read Less" : "Read More"}
        </Button>
      </Paper>

      <Collapse in={blogOpen}>
        <div
          style={{
            width: "100%",
            padding: "0 1rem",
            fontSize: "1.15rem",
          }}
          dangerouslySetInnerHTML={{ __html: blogs.blogContent.html }}
        ></div>
      </Collapse>
    </Container>
  );
}
