export default {
  title: "Pricing for every stage",
  description:
    "Pay once and get life-time access to our high quality components.",
  plans: [
    {
      id: "basic",
      title: "Basic",
      description:
        "Start your digital collecting journey and explore Apidon's features.",
      price: "Free",
      features: [
        {
          title: "Endless Inventory",
        },
        {
          title: "Community Hub",
        },
        {
          title: "Instant Gallery",
        },
        {
          title: "5 Collectible Creation Limit",
        },
        {
          title: "10 Stocks Setting Limit",
        },
      ],
      action: {
        label: "Join Beta",
        href: process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL || "",
      },
    },
    {
      id: "creator",
      title: "Creator",
      description:
        "Unleash your creativity and experience Apidon's premium benefits.",
      price: "$30/Month",
      isRecommended: true,
      features: [
        {
          title: "Endless Inventory",
        },
        {
          title: "Community Hub",
        },
        {
          title: "Instant Gallery",
        },
        {
          title: "50 Collectible Creation Limit",
        },
        {
          title: "100 Stocks Setting Limit",
        },
      ],
      action: {
        label: "Join Beta",
        href: process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL || "",
      },
    },
    {
      id: "visionary",
      title: "Visionary",
      description:
        "Enjoy unlimited creativity, exclusive content, and VIP perks of Apidon.",
      price: "$50/Month",
      features: [
        {
          title: "Endless Inventory",
        },
        {
          title: "Community Hub",
        },
        {
          title: "Instant Gallery",
        },
        {
          title: "100 Collectible Creation Limit",
        },
        {
          title: "1000 Stocks Setting Limit",
        },
      ],
      action: {
        label: "Join Beta",
        href: process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL || "",
      },
    },
  ],
};
