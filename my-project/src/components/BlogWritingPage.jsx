import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogWritingPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [postContent, setPostContent] = useState('');
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const [emailOnComment, setEmailOnComment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      category,
      postContent,
      saveAsDraft,
      emailOnComment,
    };
    console.log(postData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Write a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the title of your post"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="postContent" className="block text-sm font-medium text-gray-700">Content</label>
            <ReactQuill
              value={postContent}
              onChange={setPostContent}
              placeholder="Write your blog post here..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={saveAsDraft}
                onChange={(e) => setSaveAsDraft(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-700">Save as draft</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={emailOnComment}
                onChange={(e) => setEmailOnComment(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-700">Email me if anyone comments on my post</span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogWritingPage;
