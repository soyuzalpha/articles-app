'use client';

import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
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
} from 'react-icons/ri';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold') ? 'is-active' : ''}
      >
        <RiBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic') ? 'is-active' : ''}
      >
        <RiItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isDisabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike') ? 'is-active' : ''}
      >
        <RiStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        isDisabled={!editor.can().chain().focus().toggleCode().run()}
        isActive={editor.isActive('code') ? 'is-active' : ''}
      >
        <RiCodeSSlashLine />
      </button>
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <RiParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <RiH1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <RiH2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <RiH3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <RiH4 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <RiH5 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        <RiH6 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <RiListUnordered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <RiListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <RiCodeBoxLine />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <RiDoubleQuotesL />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <RiSeparator />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <RiTextWrap />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      >
        <RiArrowGoBackFill />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      >
        <RiArrowGoForwardFill />
      </button>
    </div>
  );
};

const Editor = ({ description, onChange, isParent, editable }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'content',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    content: description,
    editable: editable,
  });

  return (
    <div>
      {isParent && (
        <div>
          <MenuBar editor={editor} />
        </div>
      )}

      <EditorContent editor={editor} onChange={onChange} />
    </div>
  );
};

export default Editor;
