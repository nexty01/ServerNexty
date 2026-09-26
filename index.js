const express = require('express');
const axios = require('axios');
const app = express();
__path = process.cwd();
const PORT = process.env.PORT || 3000;

const serverUrls = {
    'server1': 'https://nextymini2-696c21173684.herokuapp.com',
    'server2': 'https://netymini-f940694f63ca.herokuapp.com',
    'server3': 'https://nextymini3-e7eb827e9176.herokuapp.com',
};

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

// Real active/limit count, fetched live from the actual bot server.
app.get('/active', async (req, res) => {
    const { server } = req.query;
    if (!server || !serverUrls[server]) {
        return res.json({ error: 'Server not found', count: 0, limit: 50 });
    }
    try {
        const { data } = await axios.get(`${serverUrls[server]}/active`, { timeout: 5000 });
        res.json({ count: data.count ?? 0, limit: data.limit ?? 50, url: serverUrls[server] });
    } catch (e) {
        // Node unreachable or still booting — say so instead of faking a 0.
        res.json({ count: 0, limit: 50, url: serverUrls[server], error: 'node unreachable' });
    }
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(__path + '/mini.html');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
