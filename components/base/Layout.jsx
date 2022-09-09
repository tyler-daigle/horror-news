import {
  AppShell,
  Footer,
  Group,
  Header,
  Title,
  Text,
  MediaQuery,
} from "@mantine/core";
import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        {pageTitle ? <title>{pageTitle}</title> : <title>My App</title>}
      </Head>

      <AppShell
        padding="sm"
        header={
          <Header height={60} p="sm">
            <Group position="apart">
              <Title order={1} color="red">
                Site1031
              </Title>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta, nisi!
                </Text>
              </MediaQuery>
            </Group>
          </Header>
        }
      >
        <main>{children}</main>
      </AppShell>
    </>
  );
}
