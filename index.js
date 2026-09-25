const express = require('express');
const app = express();
__path = process.cwd();
const PORT = process.env.PORT || 3000;

const serverUrls = {
    'server1': 'https://nextymini2-696c21173684.herokuapp.com',
    'server2': 'https://netymini-f940694f63ca.herokuapp.com',
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

// Optional: simple health for this proxy only
app.get('/active', (req, res) => {
    const { server } = req.query;
    if (!server || !serverUrls[server]) {
        return res.json({ error: 'Server not found', count: 0, limit: 50 });
    }
    // Real status comes from Socket.IO on the remote node.
    // We just confirm the mapping exists so UI does not hard-fail.
    res.json({ count: 0, limit: 50, url: serverUrls[server], note: 'status via socket' });
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(__path + '/mini.html');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
