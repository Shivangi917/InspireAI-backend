exports.postQuery = (req, res) => {
    const { query } = req.body;

    if(!query) {
        return res.status(400).json({ error: 'No query provided' });
    }

    console.log('Received query: ', query);
    res.status(200).json({ meesage: 'Query received successfully', receivedQuery: query });
}