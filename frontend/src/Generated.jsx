import { useState } from 'react';
import OutfitImageGenerator from './components/OutfitImageGenerator';


const Generated = () => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

  const handleImageGenerated = (imageUrl) => {
    setGeneratedImageUrl(imageUrl);
  };

  return (
   
   
<div className="container mx-auto py-8">
<div className="bg-zinc-300 rounded-lg shadow-md p-8">
  <h1 className="text-3xl font-bold text-center mb-6">Outfit Image Generator</h1>
  <OutfitImageGenerator onImageGenerated={handleImageGenerated} />
</div>

{generatedImageUrl && (
  <div className="mt-8">
    <h2 className="text-2xl font-bold text-center mb-4">Generated Outfit Image</h2>
    <div className="flex justify-center">
      <img
        src={generatedImageUrl}
        alt="Generated Outfit"
        className="max-w-full rounded-lg shadow-md"
      />
    </div>
  </div>
)}
</div> 
   

  );
};

export default Generated;

