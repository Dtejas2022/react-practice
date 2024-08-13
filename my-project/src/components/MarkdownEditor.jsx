import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';

// Initialize Markdown-It with math support
const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(require('markdown-it-mathjax3'));

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = ({ html, text }) => {
    setMarkdown(text);
  };

  // Custom toolbar configuration with an "fx" button for inserting math equations
  const toolbarConfig = {
    bold: true,
    italic: true,
    heading: true,
    custom: [
      {
        name: 'math',
        icon: 'fx', // "fx" symbol to represent math equations
        title: 'Insert Math Equation',
        action: (editor) => {
          // Insert a sample LaTeX equation at the current cursor position
          editor.insertText('$$\\frac{a}{b}$$');
        }
      }
    ]
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="mb-6">
        <MdEditor
          style={{ height: '500px' }}
          value={markdown}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          config={{
            view: {
              menu: true,
              md: true,
              html: true,
            },
            canView: {
              menu: true,
              md: true,
              html: true,
              both: true,
              fullScreen: true,
              hideMenu: true,
            },
            shortcuts: true,
            toolbar: toolbarConfig, // Apply custom toolbar configuration
          }}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeMathjax]}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
