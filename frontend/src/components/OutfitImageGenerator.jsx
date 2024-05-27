import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const OutfitImageGenerator = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
//function for handling the generate button
  const handleGenerateImage = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      //Links frontend with backend (the api endpoint)
      const response = await axios.post('http://localhost:3000/generate-outfit-image', { prompt });
      const newImageUrl = response.data.imageUrl;
  
      console.log(response.data)
  
      onImageGenerated(newImageUrl);
    } catch (error) {
      setError('Failed to generate image');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="prompt" className="block font-bold mb-2">
          Outfit Prompt
        </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter outfit prompt"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleGenerateImage}
        disabled={isLoading}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Generating...' : 'Generate Outfit Image'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

OutfitImageGenerator.propTypes = {
  onImageGenerated: PropTypes.func.isRequired,
};

export default OutfitImageGenerator;