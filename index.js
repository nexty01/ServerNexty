// JawadTech

const express = require('express');
const axios = require('axios');
const app = express();
__path = process.cwd();
const PORT = process.env.PORT || 3000;

const serverUrls = {
    'server1': 'https://dkfjf-b6b4d439f807.herokuapp.com',
    'server2': 'https://skdkf-4e567ebf8889.herokuapp.com'
};

// Parse JSON bodies
app.use(express.json());

// Get all servers list
app.get('/servers', (req, res) => {
    const servers = Object.keys(serverUrls).map(key => ({
        id: key,
        name: `Server ${key.replace('server', '')}`,
        url: serverUrls[key]
    }));
    res.json({ servers });
});

// Get server status - direct endpoint like /code
app.get('/active', async (req, res) => {
    try {
        const { server } = req.query;
        
        if (!server) {
            return res.json({ error: 'Server parameter is required' });
        }
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) {
            return res.json({ error: 'Server not found' });
        }
        
        const response = await axios.get(`${serverUrl}/active`, {
            timeout: 5000
        });
        
        res.json({
            count: response.data.count || 0,
            limit: response.data.limit || 50
        });
    } catch (error) {
        res.json({
            count: 0,
            limit: 50,
            error: 'Failed to fetch status'
        });
    }
});

// Generate pair code
app.get('/code', async (req, res) => {
    try {
        const { server, number } = req.query;
        
        if (!server || !number) {
            return res.json({ error: 'Server and number are required' });
        }
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) {
            return res.json({ error: 'Server not found' });
        }
        
        const phoneNumber = number.replace(/[^\d]/g, '');
        if (phoneNumber.length < 10 || phoneNumber.length > 15) {
            return res.json({ error: 'Invalid phone number format' });
        }
        
        const response = await axios.get(`${serverUrl}/code?number=${phoneNumber}`, {
            timeout: 15000
        });
        
        if (response.data && response.data.code) {
            res.json({ code: response.data.code });
        } else {
            res.json({ error: 'No code received' });
        }
    } catch (error) {
        res.json({ error: 'Failed to generate code' });
    }
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__path + '/mini.html');
});

// Start server
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT} `);
});
