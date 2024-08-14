import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css'; // KaTeX styles
import katex from 'katex';

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue="" onChange={(e) => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option value="" />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-blockquote" />
    <button className="ql-insertMath">fx</button>
  </div>
);

const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertMath: function () {
        const value = prompt("Enter a LaTeX expression:");
        if (value) {
          const range = this.quill.getSelection();
          this.quill.insertText(range.index, `$${value}$`, 'user');
        }
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "formula",
];

function AskQuestionWithMath() {
  const [questionText, setQuestionText] = useState('');
  const [source, setSource] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState(null);
  const [subject, setSubject] = useState('');

  

  const renderMathInContent = (text) => {
    const div = document.createElement('div');
    const parts = text.split('$');

    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        const katexSpan = document.createElement('span');
        try {
          katex.render(part, katexSpan, { throwOnError: false });
          div.appendChild(katexSpan);
        } catch (e) {
          const errorSpan = document.createElement('span');
          errorSpan.innerHTML = part;
          div.appendChild(errorSpan);
        }
      } else {
        const textNode = document.createTextNode(part);
        div.appendChild(textNode);
      }
    });

    return div.innerHTML;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const renderedContent = renderMathInContent(questionText);
    console.log("Source/Book:", source);
    console.log("Subject Category:", subject);
    console.log("Rendered Content:", renderedContent);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source or Book</label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the source or book name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject Category</label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select a subject category</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Literature">Literature</option>
            </select>
          </div>


          <div className="mb-6">
            <label htmlFor="questionText" className="block text-sm font-medium text-gray-700">Question Text</label>
            <CustomToolbar />
            <ReactQuill
              value={questionText}
              onChange={setQuestionText}
              placeholder="Type your question here..."
              modules={modules}
              formats={formats}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ask Question
            </button>
          </div>
        </form>

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: renderMathInContent(questionText) }}
        />
      </div>
    </div>
  );
}

export default AskQuestionWithMath;
