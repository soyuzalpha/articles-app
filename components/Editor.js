import React from "react";
import { Box, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiParagraph,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiListUnordered,
  RiListOrdered,
  RiCodeBoxLine,
  RiDoubleQuotesL,
  RiSeparator,
  RiTextWrap,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
} from "react-icons/ri";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Box>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiBold} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiItalic} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isDisabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiStrikethrough} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        isDisabled={!editor.can().chain().focus().toggleCode().run()}
        isActive={editor.isActive("code") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiCodeSSlashLine} />
      </Button>
      {/* <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button> */}
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiParagraph} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH1} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH2} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH3} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH4} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH5} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiH6} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiListUnordered} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiListOrdered} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiCodeBoxLine} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote") ? "is-active" : ""}
        borderRadius={0}
      >
        <Icon as={RiDoubleQuotesL} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        borderRadius={0}
      >
        <Icon as={RiSeparator} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        borderRadius={0}
      >
        <Icon as={RiTextWrap} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
        borderRadius={0}
      >
        <Icon as={RiArrowGoBackFill} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
        borderRadius={0}
      >
        <Icon as={RiArrowGoForwardFill} />
      </Button>
    </Box>
  );
};

export default ({ description, onChange }) => {
  const color = useColorModeValue("black", "gray.400");

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "content",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    content: description,
  });

  return (
    <Box borderColor={color} borderRadius="lg">
      <Box marginBottom={2} border="2px solid" borderColor={color}>
        <MenuBar editor={editor} />
      </Box>
      <EditorContent editor={editor} onChange={onChange} />
    </Box>
  );
};
