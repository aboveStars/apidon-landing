import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Apidon • Next-G Fan Experience",
    description:
      "The magnificent platform that enables users to connect with their idols, buy and showcase exclusive digital collectibles, while providing a seamless social experience.",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Made with ♥️ in Istanbul.
      </>
    ),
    links: [
      {
        href: "mailto:contact@apidon.com",
        label: "Contact",
      },
      {
        href: "https://www.instagram.com/apidon_com/",
        label: <FaInstagram size="14" />,
      },
      {
        href: "https://www.linkedin.com/company/apidon",
        label: <FaLinkedin size="14" />,
      },
    ],
  },
};

export default siteConfig;
