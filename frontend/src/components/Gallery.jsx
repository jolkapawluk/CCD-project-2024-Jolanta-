import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

const Gallery = () => {
  const [generatedImages, setGeneratedImages] = useState([]);

  useEffect(() => {
    // Read image URLs from the file
    const imageUrlsFilePath = path.join(__dirname, 'imageUrls.json');
    const imageUrls = fs.existsSync(imageUrlsFilePath)
      ? JSON.parse(fs.readFileSync(imageUrlsFilePath, 'utf-8'))
      : [];

    setGeneratedImages(imageUrls);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      {generatedImages.length === 0 ? (
        <p className="text-center">No generated images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generatedImages.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={imageUrl} alt={`Generated Outfit ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;