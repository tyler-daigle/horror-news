import {
  AppShell,
  Footer,
  Group,
  Header,
  Text,
  MediaQuery,
} from "@mantine/core";
import FancyTitle from "./FancyTitle";
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
              <FancyTitle order={1} color="red.6">
                Site1031
              </FancyTitle>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Text color="cyan.6" size="lg" weight={700}>
                  Your Source For Daily Horror News
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
