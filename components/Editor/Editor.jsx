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
import './editor.css';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiBold />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiItalic />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${editor.isActive('strike') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiStrikethrough />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${editor.isActive('code') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiCodeSSlashLine />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${editor.isActive('paragraph') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiParagraph />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH1 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH2 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH3 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH4 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH5 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`${editor.isActive('heading', { level: 6 }) ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiH6 />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive('bulletList') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiListUnordered />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${editor.isActive('orderedList') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiListOrdered />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${editor.isActive('codeBlock') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiCodeBoxLine />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${editor.isActive('blockquote') ? 'is-active' : ''} btn-editor`}
      >
        <div className="flex items-center justify-center">
          <RiDoubleQuotesL />
        </div>
      </button>

      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} className="btn-editor">
        <div className="flex items-center justify-center">
          <RiSeparator />
        </div>
      </button>

      <button type="button" onClick={() => editor.chain().focus().setHardBreak().run()} className="btn-editor">
        <div className="flex items-center justify-center">
          <RiTextWrap />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="btn-editor"
      >
        <div className="flex items-center justify-center">
          <RiArrowGoBackFill />
        </div>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="btn-editor"
      >
        <div className="flex items-center justify-center">
          <RiArrowGoForwardFill />
        </div>
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
        <div className="mb-5 mt-2">
          <MenuBar editor={editor} />
        </div>
      )}

      <EditorContent editor={editor} onChange={onChange} className={isParent ? 'with-bg rounded-md' : ''} />
    </div>
  );
};

export default Editor;
