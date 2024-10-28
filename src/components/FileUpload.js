import React, { useState } from 'react';

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    handleDrag(e);
    setDragActive(true);
  };

  const handleDragOut = (e) => {
    handleDrag(e);
    setDragActive(false);
  };

  const handleDrop = async (e) => {
    handleDrag(e);
    setDragActive(false);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      await handleUpload(files);
    }
  };

  const handleUpload = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('file', file);
    });

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDragIn}
      onDrop={handleDrop}
      className={`border-2 border-dashed p-4 text-center ${
        dragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
      }`}
    >
      <input
        type="file"
        onChange={(e) => handleUpload(e.target.files)}
        className="hidden" // Hide the default file input
        multiple
      />
      {dragActive ? (
        <p className="text-blue-600">Drop the files here ...</p>
      ) : (
        <p className="text-gray-600">Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );

};

export default FileUpload;