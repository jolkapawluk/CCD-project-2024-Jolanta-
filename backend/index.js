import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv'; 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/generate-outfit-image', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const options = {
        method: 'POST',
        url: 'https://api.prodia.com/v1/sd/generate',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-Prodia-Key': process.env.PRODIA_API_KEY, 
        },
        data: {
            model: 'v1-5-pruned-emaonly.safetensors [d7049739]',
            prompt: prompt, 
            negative_prompt: 'badly drawn, blurry', 
            steps: 30,
            cfg_scale: 7,
            seed: -1,
            upscale: false,
            sampler: 'DPM++ 2M Karras',
            width: 512,
            height: 512
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        // Check if the response indicates success before proceeding
        if (response.data && response.data.job) { 
            const jobId = response.data.job;
            const checkJobUrl = `https://api.prodia.com/v1/job/${jobId}`;

            // Polling to get the generated image
            const checkStatus = async () => {
                try {
                    const jobResponse = await axios.get(checkJobUrl, {
                        headers: {
                            'X-Prodia-Key': process.env.PRODIA_API_KEY,
                        }
                    });
                    if (jobResponse.data.status === 'succeeded') {
                        const imageUrl = jobResponse.data.imageUrl;
                        res.status(200).json({ imageUrl });
                    } else if (jobResponse.data.status === 'failed') {
                        res.status(500).json({ error: 'Image generation failed' });
                    } else {
                        setTimeout(checkStatus, 1000); // Check again after 1 second
                    }
                } catch (error) {
                    console.error("Error checking job status:", error);
                    res.status(500).json({ error: 'Failed to generate image' });
                }
            };

            checkStatus(); // Start polling for the image
        } else {
            res.status(500).json({ error: 'Invalid response from Prodia API' });
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            console.error("Error generating image (Invalid Parameters):", error.response.data); // Log the error message
            res.status(400).json({ error: error.response.data }); // Send the error message to the client
        } else {
            console.error("Error generating image:", error);
            res.status(500).json({ error: 'Failed to generate image' });
        }
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    //to show that the server is running
    console.log(`Server is running on port ${PORT}`);
});
