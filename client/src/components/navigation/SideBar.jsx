import { useState } from "react";
import {
  AppShell,
  Stack,
  NavLink,
  Paper,
  Avatar,
  Text,
  Anchor,
  Space,
} from "@mantine/core";
import { Exit, Headset, Gear } from "src/icons";
import { SidebarItems } from "src/lib/data";
import { useHover } from "@mantine/hooks";

const SideBar = () => {
  const [active, setActive] = useState(0);
  const { hovered, ref } = useHover();

  return (
    <AppShell.Navbar p="md">
      <Stack>
        <>
          {SidebarItems.map((SidebarItem) => {
            const { label, href, Icon, subLink } = SidebarItem;

            return (
              <NavLink
                c="dark"
                key={label}
                href={href}
                label={label}
                leftSection={<Icon />}
                active={active === label}
                onClick={() => setActive(label)}
              >
                {subLink && (
                  <>
                    {subLink.map((item) => {
                      const { label, href, Icon } = item;

                      return (
                        <NavLink
                          c="dark"
                          key={label}
                          href={href}
                          label={label}
                          leftSection={<Icon />}
                          active={active === label}
                          onClick={() => setActive(label)}
                        />
                      );
                    })}
                  </>
                )}
              </NavLink>
            );
          })}
        </>

        <Space h="lg" />

        <Stack>
          <Paper
            shadow="lg"
            radius="md"
            withBorder
            py="xs"
            ref={ref}
            bg={hovered ? "teal" : ""}
          >
            <Anchor href="/profile" c="dark" underline="never">
              <Avatar
                src="https://i.pinimg.com/564x/bd/48/e2/bd48e2e8011edf036313e8b4d876d864.jpg"
                size={50}
                mx="auto"
              />
              <Text ta="center">Taddy</Text>
            </Anchor>
          </Paper>
          <NavLink
            c="dark"
            href="/"
            label="Support"
            leftSection={<Headset />}
          />
          <NavLink
            c="dark"
            href="/settings"
            label="Settings"
            leftSection={<Gear />}
          />

          <NavLink c="dark" href="/" label="Log Out" rightSection={<Exit />} />
        </Stack>
      </Stack>
    </AppShell.Navbar>
  );
};

export default SideBar;
