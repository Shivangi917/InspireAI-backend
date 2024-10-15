const preprocessText = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

const analyzeProjectDescription = async (description) => {
    const preprocessedDescription = preprocessText(description);
  
    // Option 1: Use a pre-trained model (pseudo-code)
    // const model = loadModel('path/to/your/model'); // Load your model
    // const features = await model.predict(preprocessedDescription);
  
    // Option 2: Rule-based approach (for simplicity)
    const missingFeatures = [];
    const featureKeywords = {
      "AI": ["machine learning", "artificial intelligence", "deep learning"],
      "UX": ["user interface", "design", "user experience"],
      "APIs": ["REST", "GraphQL", "web services"],
      // Add more categories and their associated keywords
    };
  
    for (const [feature, keywords] of Object.entries(featureKeywords)) {
      const found = keywords.some(keyword => preprocessedDescription.includes(keyword));
      if (!found) {
        missingFeatures.push(feature);
      }
    }
  
    // Generate recommendations based on missing features
    const recommendations = missingFeatures.map(feature => `Consider adding ${feature} to your project.`);
    
    console.log(recommendations);

    return recommendations;
  };
  

exports.postQuery = async (req, res) => {
    const { query } = req.body;

    if(!query) {
        return res.status(400).json({ error: 'No query provided' });
    } 
    const recommendations = await analyzeProjectDescription(query);

    console.log('Received query: ', query);
    res.status(200).json({ meesage: 'Query received successfully', receivedQuery: query });
}