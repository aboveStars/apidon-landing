import { Flex, HTMLChakraProps, Image, Text } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  return (
    <Flex alignItems="center" gap={2} cursor="pointer">
      <Image src="/static/images/apidon_logo.png" aspectRatio={1} width={6} />
      <Text fontWeight={700} fontSize={12}>
        APIDON
      </Text>
    </Flex>
  );
};
