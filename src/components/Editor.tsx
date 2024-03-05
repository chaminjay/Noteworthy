import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
} from "@blocknote/react";
import { Box, useColorMode } from "@chakra-ui/react";
import "@blocknote/react/style.css";

const darkTheme = {
  ...darkDefaultTheme,
  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: "rgba(255, 255, 255, 0.92)",
      background: "#1A202C",
    },
  },
} satisfies Theme;

const lightTheme = {
  ...lightDefaultTheme,
  colors: {
    ...lightDefaultTheme.colors,
    editor: {
      text: "#1A202C",
      background: "#ffffff",
    },
  },
} satisfies Theme;

const noteworthyTheme = {
  light: lightTheme,
  dark: darkTheme,
};

function Editor({ onChange }: { onChange: (content: string) => void }) {
  const { colorMode } = useColorMode();

  // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  // Renders the editor instance using a React component.
  return (
    <Box w="full" h="full">
      <BlockNoteView
        editor={editor}
        theme={
          colorMode === "dark" ? noteworthyTheme.dark : noteworthyTheme.light
        }
      />
    </Box>
  );
}

export default Editor;
