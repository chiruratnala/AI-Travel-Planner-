/*
 * This is the code for your secure "middleman" function.
 * Its only job is to receive a request from your frontend,
 * safely add your secret key, and pass the request to Google.
 */

// This uses Node.js 'fetch', which is available in Netlify functions.
exports.handler = async (event) => {
  
  // 1. Get the secret key from Netlify's secure storage.
  // process.env.GEMINI_API_KEY is the variable we will set up in Netlify later.
  const apiKey = process.env.GEMINI_API_KEY;

  // 2. This is the real Google API URL.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  // 3. Get the prompt data that your frontend sent in the 'body' of its request.
  const requestBody = JSON.parse(event.body);

  try {
    // 4. Call the real Google API, safely from the server.
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody), // Pass along the data from the frontend
    });

    // 5. Handle a bad response from Google
    if (!response.ok) {
      const errorBody = await response.json();
      return { 
        statusCode: response.status, 
        body: JSON.stringify(errorBody) 
      };
    }

    // 6. Send the good response from Google back to your frontend.
    const data = await response.json();
    return { 
      statusCode: 200, 
      body: JSON.stringify(data) 
    };

  } catch (error) {
    // 7. Handle any other network errors
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};