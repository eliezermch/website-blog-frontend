'use client';

import { Button, CardFooter, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';

const Dropzone = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<any>();

  const handleFileSelect = (event: any) => {
    const dropFile = event.target.files?.[0];
    setFile(dropFile.name);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', description);
    formData.append('file', file);

    const response = await fetch('http://127.0.0.1:8000/api/share-blog/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token c12b8f4e7923ace6a2390642d5d7a99b32e8fb3c`,
      },
      body: formData,
    });
    console.log('🚀 ~ handleSubmit ~ response:', response);

    if (response.ok) {
      console.log('Blog shared successfully');
    } else {
      console.error('Failed to share blog');
    }
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Textarea
        id="content"
        name="description"
        minRows={7}
        label={'Description'}
        isRequired
        placeholder="Write your thoughts here..."
        className="min-h-[200px]"
      />

      <>
        <input
          onDrop={(event) => {
            event.preventDefault();
            const dropFile = event.dataTransfer.files[0];
            setFile(dropFile.name);
            console.log('🚀 ~ Dropzone ~ file:', dropFile);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            console.log(event);
          }}
          id="dropzone"
          // label="Image"
          onChange={(event) => {
            handleFileSelect(event);
          }}
          type="file"
          name="file"
          // labelPlacement={'outside'}
          placeholder="Upload your image"
          // errorMessage="Please enter a valid product."
          className="lg:max-w-md rounded-md dropzone text-primary hidden"
        />
        <Button
          color="danger"
          size="sm"
          variant="flat"
          onClick={() => {
            setFile(null);
          }}
        >
          Remove file
        </Button>
      </>

      <CardFooter className="flex justify-end">
        <Button type="submit" color="primary">
          Post
        </Button>
      </CardFooter>
    </form>
  );
};

export default Dropzone;
