import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import * as React from "react";

import { Br } from "@saas-ui/react";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import { Pricing } from "components/pricing/pricing";
import { FiArrowRight, FiUsers } from "react-icons/fi";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import pricing from "data/pricing";
import testimonials from "data/testimonials";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { AiOutlineEye } from "react-icons/ai";
import {
  FaBullhorn,
  FaChartLine,
  FaCog,
  FaHandshake,
  FaLock,
  FaPaintBrush,
  FaRegGem,
  FaShareAlt,
  FaSlidersH,
  FaStar,
  FaStream,
} from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Apidon • Next-G Fan Experience"
        description="The magnificent platform that enables users to connect with their idols, buy and showcase exclusive digital collectibles, while providing a seamless social experience."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" height="100vh" pt={{ base: 24, lg: 60 }} pb={[0, 40]}>
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                The Next Generation
                <Br /> Fan Experience
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                The magnificent platform that enables users to connect with
                their idols, buy and showcase exclusive digital collectibles,
                while providing a seamless social experience.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8} paddingTop={6}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  size="lg"
                  href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL || ""}
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Join Beta on TestFlight!
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/apidon_ss.png"
                  width={600}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  borderRadius={20}
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt={20}
        features={[
          {
            title: "Create",
            icon: FaPaintBrush,
            description:
              "Effortlessly design and sell unique digital collectibles, connecting fans with the things they love.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Showcase",
            icon: AiOutlineEye,
            description:
              "Display your favorite digital items on your public profile and express your loyalty to clubs or celebrities",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Connect",
            icon: FiUsers,
            description:
              "Engage with others through Apidon's social features—follow, like, and share your digital world.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Collect",
            icon: FaRegGem,
            description:
              "Capture exclusive event-based digital memorabilia, showcasing moments that matter to you.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  return (
    <Highlights paddingY={[10, "unset"]}>
      <HighlightsItem colSpan={[1, null, 2]} title="Built-In Social Media">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Discover a new way to connect with your favorite celebrities and
            friends. Apidon unites social interaction and digital collectibles
            in one platform, making it easier than ever to engage, buy, and
            showcase your unique digital items.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Effortless Collecting">
        <Text color="muted" fontSize="lg">
          No need for complicated crypto wallets or technical know-how. Apidon
          simplifies the process, allowing you to purchase, manage, and enjoy
          digital collectibles with just a few taps.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Yunus Korkmaz"
        description="Founder"
        avatar="/static/images/avatar.jpeg"
        gradient={["pink.200", "purple.500"]}
      >
        &quot;At Apidon, our mission is to revolutionize the way people
        experience digital collectibles and fan engagement. As the founder of
        Apidon, I am incredibly proud of what we&apos;ve achieved so far. Our
        platform is designed to make digital ownership accessible, enjoyable,
        and straightforward for everyone.&quot;
      </HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Showcase Your Collection">
        <Text color="muted" fontSize="lg">
          Display your digital collectibles on your profile for the world to
          see. Apidon allows you to express your unique style and support for
          your favorite creators, turning your profile into a dynamic showcase
          of your personal collection.
        </Text>
        <Wrap mt="8">
          {[
            "collectibles",
            "sports",
            "music",
            "movies",
            "loyalty",
            "celebrities",
            "clubs",
            "events",
            "profiles",
            "showcase",
            "digital",
            "fanEngagement",
            "exclusive",
            "memorabilia",
            "inAppPurchases",
            "community",
            "create",
            "follow",
            "share",
            "connect",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      paddingY={[10, "unset"]}
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Effortless <Br /> Fan Engagement
        </Heading>
      }
      description={
        <>
          Connect with your audience effortlessly. Create and showcase exclusive
          digital collectibles without any hassle—let us handle the details so
          you can focus on engaging your fans.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Easy Creation.",
          icon: FaCog,
          description:
            "Launch exclusive collectibles without any complicated setup.",
          variant: "inline",
        },
        {
          title: "Instant Reach.",
          icon: FaBullhorn,
          description: "Connect directly with your fans through our platform.",
          variant: "inline",
        },
        {
          title: "Exclusive Items.",
          icon: FaStar,
          description: "Offer unique, limited-edition content that stands out.",
          variant: "inline",
        },
        {
          title: "Customizable.",
          icon: FaSlidersH,
          description: "Personalize your collectibles to match your brand.",
          variant: "inline",
        },
        {
          title: "Integrated Sharing.",
          icon: FaShareAlt,
          description:
            "Effortlessly share and interact through built-in social features.",
          variant: "inline",
        },
        {
          title: "Managed Security.",
          icon: FaLock,
          description: "We handle all the technical details and security.",
          variant: "inline",
        },
        {
          title: "Fan Connection.",
          icon: FaHandshake,
          description:
            "Engage deeply with your audience through interactive items.",
          variant: "inline",
        },
        {
          title: "Streamlined Process.",
          icon: FaStream,
          description: "Enjoy a seamless experience with no technical hassles.",
          variant: "inline",
        },
        {
          title: "Performance Insights.",
          icon: FaChartLine,
          description: "Get valuable insights on fan engagement success.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      paddingY={[10, "unset"]}
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing paddingY={[10, "unset"]} {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq paddingY={[10, "unset"]} {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "🚀 Apidon Public Beta is Now Live! 🚀",
        description: "Join Now!",
        href: process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL,
        action: false,
      },
    },
  };
}
