"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full",
        },
      }),
      Youtube.configure({
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "rounded-lg",
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing your post...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "tiptap focus:outline-none",
      },
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL:");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutubeVideo = useCallback(() => {
    const url = window.prompt("Enter YouTube URL:");
    if (url && editor) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return (
      <div className="border-2 border-[var(--color-light-gray)] rounded-lg p-4 min-h-[300px] bg-white">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="border-2 border-[var(--color-light-gray)] rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-[var(--color-light-gray)] bg-[var(--color-cream)]">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("bold") ? "bg-white shadow-sm" : ""
          }`}
          title="Bold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("italic") ? "bg-white shadow-sm" : ""
          }`}
          title="Italic"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4h4m-2 0v16m-4 0h8" transform="skewX(-10)" />
          </svg>
        </button>

        <div className="w-px bg-[var(--color-light-gray)] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("heading", { level: 2 }) ? "bg-white shadow-sm" : ""
          }`}
          title="Heading 2"
        >
          <span className="font-bold text-sm">H2</span>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("heading", { level: 3 }) ? "bg-white shadow-sm" : ""
          }`}
          title="Heading 3"
        >
          <span className="font-bold text-sm">H3</span>
        </button>

        <div className="w-px bg-[var(--color-light-gray)] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("bulletList") ? "bg-white shadow-sm" : ""
          }`}
          title="Bullet List"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("orderedList") ? "bg-white shadow-sm" : ""
          }`}
          title="Numbered List"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h10M3 8h.01M3 12h.01M3 16h.01" />
          </svg>
        </button>

        <div className="w-px bg-[var(--color-light-gray)] mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-white transition-colors ${
            editor.isActive("blockquote") ? "bg-white shadow-sm" : ""
          }`}
          title="Quote"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        <div className="w-px bg-[var(--color-light-gray)] mx-1" />

        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-white transition-colors"
          title="Add Image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={addYoutubeVideo}
          className="p-2 rounded hover:bg-white transition-colors"
          title="Add YouTube Video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
