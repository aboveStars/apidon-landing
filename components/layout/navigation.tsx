import { HStack } from "@chakra-ui/react";
import * as React from "react";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import ThemeToggle from "./theme-toggle";

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ id, ...props }, i) => {
        return (
          <NavLink
            display={["none", null, "block"]}
            href={`/#${id}`}
            key={i}
            isActive={!!(id && activeId === id)}
            {...props}
          >
            {props.label}
          </NavLink>
        );
      })}

      <ThemeToggle />
    </HStack>
  );
};

export default Navigation;
