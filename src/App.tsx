import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Title from "./components/Title";
import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const [content, setContent] = useState("");

  const onChange = (content: string) => {
    setContent(content);
  };

  return (
    <Container maxW="container.xl" p="0">
      <Flex w="full" p="5" justifyContent="space-between" alignItems="center">
        <Title />
        <IconButton
          aria-label="Toggle dark mode"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex minH="100vh" py="10">
        <Box w="full" h="full" p="10">
          <Editor onChange={onChange} />
        </Box>
        <Box w="full" h="full" p="10" bg={bgColor}>
          <Preview content={content} />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
