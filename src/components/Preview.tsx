import { Code, useColorModeValue } from "@chakra-ui/react";

function Preview({ content }: { content: string }) {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const fontColor = useColorModeValue("blue.600", "blue.400");

  return (
    <Code fontSize="xs" w="full" bg={bgColor} color={fontColor}>
      <pre style={{ whiteSpace: "pre-wrap" }}>{content}</pre>
    </Code>
  );
}

export default Preview;
