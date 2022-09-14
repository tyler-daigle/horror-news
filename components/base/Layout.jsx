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

export default function Layout({
  children,
  pageTitle,
  siteName,
  siteHeadline,
}) {
  return (
    <>
      <Head>
        {pageTitle ? <title>{pageTitle}</title> : <title>My App</title>}
      </Head>

      <AppShell
        padding="sm"
        header={
          <Header height={60} p="sm">
            <Group align="center" position="apart">
              <FancyTitle order={1} color="red.6" ml="lg">
                {siteName}
              </FancyTitle>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Text color="cyan.6" size="lg" weight={700} mr="lg">
                  {siteHeadline}
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
