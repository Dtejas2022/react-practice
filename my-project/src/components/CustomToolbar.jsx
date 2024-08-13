import React from 'react';
import { MdEditor } from 'react-markdown-editor-lite';

const CustomToolbar = ({ editor }) => {
  const handleMathButtonClick = () => {
    // Insert a sample LaTeX equation at the current cursor position
    editor.insertText('$$\\frac{a}{b}$$');
  };

  return (
    <div className="toolbar">
      <button
        type="button"
        title="Insert Math Equation"
        onClick={handleMathButtonClick}
      >
        fx
      </button>
      {/* Add other default toolbar buttons here if needed */}
    </div>
  );
};

export default CustomToolbar;
