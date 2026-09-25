<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <title>NEXTY MINI | MAFIA ADEEL</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Rajdhani:wght=500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Share Tech Mono', monospace;
      background: #020202;
      color: #00ff66;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }

    /* ہیکر گرین اور بلیک میٹرکس بیک گراؤنڈ */
    .bg-gradient {
      position: fixed;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 30%, rgba(0, 255, 102, 0.05) 0%, transparent 70%), #040404;
      z-index: 0;
    }

    /* سائبر گلو ایفیکٹ */
    .glow-orb {
      position: fixed;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      filter: blur(150px);
      opacity: 0.12;
      z-index: 1;
      animation: pulseOrbs 7s infinite alternate ease-in-out;
    }

    .orb-1 { top: -150px; left: 50%; transform: translateX(-50%); background: #00ff66; }

    @keyframes pulseOrbs {
      0% { transform: scale(1); opacity: 0.08; }
      100% { transform: scale(1.1); opacity: 0.15; }
    }

    .container {
      position: relative;
      z-index: 10;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 15px;
    }

    /* ماڈرن ہیکر ٹرمینل کارڈ */
    .card {
      width: 100%;
      max-width: 480px;
      background: rgba(5, 5, 5, 0.95);
      border: 1px solid rgba(0, 255, 102, 0.3);
      border-radius: 0px;
      padding: 35px 22px;
      box-shadow: 0 0 30px rgba(0, 255, 102, 0.1), inset 0 0 15px rgba(0, 0, 0, 0.9);
      position: relative;
    }

    .card::before, .card::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-color: #00ff66;
      border-style: solid;
      box-shadow: 0 0 10px rgba(0, 255, 102, 0.5);
    }
    .card::before { top: -3px; left: -3px; border-width: 3px 0 0 3px; }
    .card::after { bottom: -3px; right: -3px; border-width: 0 3px 3px 0; }

    .header {
      text-align: center;
      margin-bottom: 25px;
    }

    .logo-container {
      width: 90px;
      height: 90px;
      margin: 0 auto 15px;
      position: relative;
    }

    .logo-ring {
      position: absolute;
      top: -5px; left: -5px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border: 2px dashed #00ff66;
      border-radius: 50%;
      animation: matrixSpin 4s linear infinite;
    }

    @keyframes matrixSpin { to { transform: rotate(360deg); } }

    .logo {
      width: 100%;
      height: 100%;
      background: #000;
      border: 1px solid #00ff66;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(30%) sepia(20%) hue-rotate(85deg);
    }

    .title {
      font-family: 'Orbitron', sans-serif;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #ffffff;
      text-shadow: 0 0 10px rgba(0, 255, 102, 0.6);
      margin-bottom: 4px;
    }

    .subtitle {
      font-size: 12px;
      color: #00ff66;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0.8;
    }

    .server-info {
      background: rgba(0, 255, 102, 0.02);
      border: 1px solid rgba(0, 255, 102, 0.3);
      padding: 12px 14px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    .server-info:hover {
      background: rgba(0, 255, 102, 0.08);
      border-color: #00ff66;
      box-shadow: 0 0 10px rgba(0, 255, 102, 0.2);
    }

    .server-name {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: #fff;
    }

    .server-stats {
      display: flex;
      gap: 8px;
      font-size: 11px;
      color: #888;
      margin-top: 2px;
    }

    .change-server-btn {
      background: #00ff66;
      color: #000;
      border: none;
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      cursor: pointer;
    }

    .server-selection {
      display: none;
      background: #000;
      border: 1px solid #00ff66;
      padding: 12px;
      margin-bottom: 15px;
    }

    .server-selection.show { display: block; }

    .server-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .server-option {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 255, 102, 0.2);
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .server-option.selected {
      border-color: #00ff66;
      background: rgba(0, 255, 102, 0.1);
    }

    .info-box {
      background: rgba(0, 255, 102, 0.02);
      border-left: 3px solid #00ff66;
      padding: 12px;
      margin-bottom: 15px;
      display: flex;
      gap: 10px;
    }

    .info-box i { color: #00ff66; font-size: 14px; margin-top: 2px; }
    .info-box-text strong { display: block; font-size: 13px; color: #fff; margin-bottom: 2px; }
    .info-box-text p { font-size: 12px; color: #888; line-height: 1.4; }

    .form-group { margin-bottom: 15px; position: relative; }
    .label { display: block; margin-bottom: 6px; font-weight: 600; font-size: 12px; text-transform: uppercase; color: #00ff66; }

    .input {
      width: 100%;
      padding: 12px 14px 12px 38px;
      background: #000000;
      border: 1px solid #00ff66;
      color: #ffffff;
      font-family: 'Share Tech Mono', monospace;
      font-size: 15px;
      font-weight: bold;
      transition: all 0.2s ease;
    }

    .input::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    .input:focus {
      outline: none;
      box-shadow: 0 0 12px rgba(0, 255, 102, 0.3);
    }

    .input-icon { position: absolute; left: 14px; bottom: 14px; color: #00ff66; font-size: 13px; }

    .btn {
      width: 100%;
      padding: 12px;
      border: none;
      font-size: 13px;
      font-weight: 700;
      font-family: 'Orbitron', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .btn-generate {
      background: #00ff66;
      color: #000;
      box-shadow: 0 0 15px rgba(0, 255, 102, 0.2);
    }

    .btn-generate:hover:not(:disabled) {
      background: #ffffff;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    }

    .btn-generate:disabled { opacity: 0.3; cursor: not-allowed; }

    .btn-copy {
      background: transparent;
      color: #00ff66;
      border: 1px solid #00ff66;
      margin-top: 10px;
      display: none;
    }

    .btn-copy:hover { background: rgba(0, 255, 102, 0.05); }

    .code-box {
      background: #000;
      border: 1px solid rgba(0, 255, 102, 0.15);
      padding: 15px;
      text-align: center;
      margin-top: 15px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .code-box.has-code { border-color: #00ff66; background: rgba(0, 255, 102, 0.01); }
    .code-box.has-error { border-color: #ef4444; }
    .code-placeholder { color: rgba(0, 255, 102, 0.4); font-size: 12px; }
    .code-value { font-family: 'Orbitron', monospace; font-size: 20px; font-weight: 700; letter-spacing: 5px; color: #00ff66; text-shadow: 0 0 8px rgba(0, 255, 102, 0.6); }

    .matrix-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 18px;
    }

    .matrix-box {
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(0, 255, 102, 0.25);
      padding: 10px 12px;
      font-size: 11px;
      line-height: 1.6;
      position: relative;
    }

    .matrix-box::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px; width: 5px; height: 5px;
      border-top: 1px solid #00ff66; border-left: 1px solid #00ff66;
    }
    .matrix-box::after {
      content: '';
      position: absolute;
      bottom: -1px; right: -1px; width: 5px; height: 5px;
      border-bottom: 1px solid #00ff66; border-right: 1px solid #00ff66;
    }

    .matrix-title {
      color: #fff;
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-size: 10px;
      border-bottom: 1px solid rgba(0, 255, 102, 0.2);
      padding-bottom: 4px;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .matrix-item {
      display: flex;
      justify-content: space-between;
      color: #888;
    }

    .matrix-item span {
      color: #00ff66;
      font-weight: 600;
    }

    .audio-control {
      position: absolute;
      top: 15px;
      right: 15px;
      background: rgba(0, 255, 102, 0.02);
      border: 1px solid rgba(0, 255, 102, 0.3);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #00ff66;
      font-size: 12px;
      z-index: 100;
    }

    .audio-control:hover { background: rgba(0, 255, 102, 0.1); border-color: #00ff66; }

    .footer { text-align: center; margin-top: 20px; padding-top: 12px; border-top: 1px dashed rgba(0, 255, 102, 0.2); }
    .footer-text { font-size: 11px; color: rgba(0, 255, 102, 0.4); letter-spacing: 1.5px; }

    .toast {
      position: fixed;
      bottom: 20px; left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: #00ff66;
      color: #000;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 12px;
      transition: all 0.3s ease;
      z-index: 1000;
      opacity: 0;
    }

    .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
    .toast.error { background: #ef4444; color: #fff; }
    .loading { display: none; text-align: center; margin: 10px 0; }
    .spinner { width: 28px; height: 28px; border: 2px solid rgba(0, 255, 102, 0.2); border-radius: 50%; border-top-color: #00ff66; animation: matrixSpin 1s linear infinite; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="bg-gradient"></div>
  <div class="glow-orb orb-1"></div>

  <audio id="bgMusic" loop>
    <source src="https://files.catbox.moe/7z1njd.mp4" type="audio/mpeg">
  </audio>

  <div class="container">
    <div class="card">
      <div class="audio-control" id="muteBtn" title="Toggle Music">
        <i class="fas fa-volume-up"></i>
      </div>

      <div class="header">
        <div class="logo-container">
          <div class="logo-ring"></div>
          <div class="logo">
            <img src="https://i.ibb.co/jP4H9Yz3/ERFAN-MD.jpg" alt="NEXTY MINI Logo">
          </div>
        </div>
        <h1 class="title">NEXTY MINI</h1>
        <p class="subtitle">HACKER PAIRING TERMINAL</p>
      </div>

      <div class="server-info" id="serverInfo">
        <div class="server-info-left">
          <i class="fas fa-terminal" style="margin-right: 8px;"></i>
          <span class="server-name" id="currentServerName" style="display:inline;">Select Node</span>
          <div class="server-stats" style="margin-top: 4px;">
            <span id="activeCount">Active: --</span> | 
            <span id="serverLimit">Limit: --/2</span>
          </div>
        </div>
        <button type="button" class="change-server-btn">Select</button>
      </div>

      <div class="server-selection" id="serverSelection">
        <div class="server-grid" id="serverGrid"></div>
      </div>

      <div class="info-box">
        <i class="fas fa-shield-alt"></i>
        <div class="info-box-text">
          <strong>Secure Node Core</strong>
          <p>Establish high-speed connection socket. System patches and session cookies automatically secured.</p>
        </div>
      </div>

      <form id="pairForm">
        <div class="form-group">
          <label class="label">Target Number</label>
          <div style="position: relative;">
            <input 
              type="tel" 
              id="phoneNumber" 
              class="input" 
              placeholder="92317483xxxxx"
              pattern="[0-9]+"
              required
            >
            <i class="fas fa-fingerprint input-icon"></i>
          </div>
        </div>

        <button type="submit" class="btn btn-generate" id="generateBtn" disabled>
          Execute Generation
        </button>

        <div class="loading" id="loading">
          <div class="spinner"></div>
        </div>

        <div class="code-box" id="codeBox">
          <div class="code-placeholder">Awaiting authorization matrix...</div>
        </div>

        <button type="button" class="btn btn-copy" id="copyBtn">
          Copy Pairing Code
        </button>
      </form>

      <div class="matrix-container">
        <div class="matrix-box">
          <div class="matrix-title">Live Statistics</div>
          <div class="matrix-item">Total Users: <span>1,482</span></div>
          <div class="matrix-item">Active Bots: <span>438</span></div>
          <div class="matrix-item">Processed: <span>99.8%</span></div>
          <div class="matrix-item">Uptime: <span>24/7 Live</span></div>
        </div>
        <div class="matrix-box">
          <div class="matrix-title">Network Nodes</div>
          <div class="matrix-item">Latency MS: <span>24 ms</span></div>
          <div class="matrix-item">Server Load: <span>42%</span></div>
          <div class="matrix-item">Encryption: <span>SSL-v3</span></div>
          <div class="matrix-item">Firewall: <span>Bypassed</span></div>
        </div>
      </div>

      <div class="footer">
        <p class="footer-text">© 2026 NEXTY MINI // HACKER EDITION</p>
      </div>
    </div>
  </div>

  <div class="toast" id="toast">
    <span>Success</span>
  </div>

  <script>
    const audio = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');

    function startMusic() {
      audio.play().then(() => {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      }).catch(err => {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      });
    }

    document.addEventListener('click', startMusic, { once: true });
    window.addEventListener('load', startMusic);

    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      if (audio.paused) {
        audio.play();
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      } else {
        audio.pause();
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      }
    });

    const phoneInput = document.getElementById('phoneNumber');
    const generateBtn = document.getElementById('generateBtn');
    const loading = document.getElementById('loading');
    const codeBox = document.getElementById('codeBox');
    const copyBtn = document.getElementById('copyBtn');
    const toast = document.getElementById('toast');
    const form = document.getElementById('pairForm');
    const serverInfo = document.getElementById('serverInfo');
    const serverSelection = document.getElementById('serverSelection');
    const serverGrid = document.getElementById('serverGrid');
    const currentServerName = document.getElementById('currentServerName');
    const activeCount = document.getElementById('activeCount');
    const serverLimit = document.getElementById('serverLimit');

    let currentCode = null;
    let selectedServer = null;

    const allServers = [
      { id: 'server1', name: 'NEXTY SERVER 01' },
      { id: 'server2', name: 'NEXTY SERVER 02' },
    ];

    function showToast(message, isError = false) {
      const toastText = toast.querySelector('span');
      toastText.textContent = message;
      toast.className = `toast ${isError ? 'error' : ''} show`;
      setTimeout(() => { toast.classList.remove('show'); }, 3000);
    }

    function initApp() {
      populateServerGrid(allServers);
      serverInfo.addEventListener('click', showServerSelection);
    }

    function populateServerGrid(servers) {
      serverGrid.innerHTML = '';
      servers.forEach(server => {
        const isSelected = selectedServer === server.id;
        const serverOption = document.createElement('div');
        serverOption.className = `server-option ${isSelected ? 'selected' : ''}`;
        serverOption.dataset.server = server.id;
        serverOption.innerHTML = `
          <div style="font-size:12px; color:#fff;">${server.name}</div>
          <div style="font-size:11px; color:#00ff66;">Inject</div>
        `;
        serverOption.addEventListener('click', () => selectServer(server.id));
        serverGrid.appendChild(serverOption);
      });
    }

    async function selectServer(serverId) {
      selectedServer = serverId;
      const serverNum = serverId.replace('server', '');
      currentServerName.textContent = `Node 0${serverNum}`;
      activeCount.innerHTML = `Syncing...`;
      serverLimit.innerHTML = `Fetch`;
      generateBtn.disabled = true;
      
      await updateServerStatus(serverId);
      hideServerSelection();
    }

    async function updateServerStatus(serverId) {
      try {
        const response = await axios.get('/active', { params: { server: serverId }, timeout: 8000 });
        const serverNum = serverId.replace('server', '');
        currentServerName.textContent = `Node 0${serverNum}`;
        
        if (response.data.error) {
          activeCount.innerHTML = `Status: CRASHED`;
          serverLimit.innerHTML = `Down`;
          generateBtn.disabled = true;
          showErrorInCode(`Node ${serverNum} offline.`);
          showToast(`Node ${serverNum} offline`, true);
        } else {
          const count = response.data.count || 0;
          const limit = response.data.limit || 50;
          if (count >= limit) {
            activeCount.innerHTML = `Status: OVERLOAD`;
            serverLimit.innerHTML = `${count}/${limit}`;
            generateBtn.disabled = true;
            showErrorInCode(`Node ${serverNum} full!`);
            showToast(`Node ${serverNum} is full`, true);
          } else {
            activeCount.innerHTML = `Active: ${count}`;
            serverLimit.innerHTML = `Limit: ${count}/${limit}`;
            generateBtn.disabled = false;
            if (codeBox.classList.contains('has-error')) resetCodeBox();
            showToast(`Node ${serverNum} Ready!`, false);
          }
        }
        populateServerGrid(allServers);
      } catch (error) {
        const serverNum = serverId.replace('server', '');
        currentServerName.textContent = `Node 0${serverNum}`;
        activeCount.innerHTML = `Status: DISCONNECTED`;
        serverLimit.innerHTML = `Down`;
        generateBtn.disabled = true;
        showErrorInCode(`Node ${serverNum} timeout.`);
        showToast(`Node ${serverNum} failure`, true);
        populateServerGrid(allServers);
      }
    }

    function showErrorInCode(message) {
      codeBox.className = 'code-box has-error';
      codeBox.innerHTML = `<div style="color:#ef4444; font-size:12px;">[ERROR] ${message}</div>`;
      copyBtn.style.display = 'none';
      currentCode = null;
    }

    function showCode(code) {
      currentCode = code;
      codeBox.className = 'code-box has-code';
      codeBox.innerHTML = `<div class="code-value">${code}</div>`;
      copyBtn.style.display = 'block';
    }

    function resetCodeBox() {
      codeBox.className = 'code-box';
      codeBox.innerHTML = '<div class="code-placeholder">Awaiting authorization matrix...</div>';
      copyBtn.style.display = 'none';
      currentCode = null;
    }

    function showServerSelection() {
      serverInfo.style.display = 'none';
      serverSelection.style.display = 'block';
      serverSelection.classList.add('show');
      populateServerGrid(allServers);
    }

    function hideServerSelection() {
      serverInfo.style.display = 'flex';
      serverSelection.style.display = 'none';
      serverSelection.classList.remove('show');
    }

    function validatePhone(number) {
      const cleaned = number.replace(/[^\d]/g, '');
      return cleaned.length >= 10 && cleaned.length <= 15;
    }

    async function generatePairCode(e) {
      e.preventDefault();
      if (!selectedServer) {
        showErrorInCode('Select node first');
        showToast('Select node', true);
        showServerSelection();
        return;
      }
      const phoneNumber = phoneInput.value.trim();
      if (!phoneNumber) {
        showErrorInCode('Number required');
        return;
      }
      if (!validatePhone(phoneNumber)) {
        showErrorInCode('Bad format');
        return;
      }
      
      generateBtn.style.display = 'none';
      loading.style.display = 'block';
      resetCodeBox();
      
      try {
        const response = await axios.get('/code', {
          params: { server: selectedServer, number: phoneNumber.replace(/[^\d]/g, '') },
          timeout: 15000
        });
        if (response.data.code) {
          showCode(response.data.code);
          showToast('Injected successfully!');
          await updateServerStatus(selectedServer);
        } else {
          throw new Error(response.data.error || 'Failed');
        }
      } catch (error) {
        let errorMsg = 'Exploit failed.';
        if (error.code === 'ECONNABORTED') errorMsg = 'Timeout.';
        else if (error.response?.data?.error) errorMsg = error.response.data.error;
        showErrorInCode(errorMsg);
        showToast(errorMsg, true);
        await updateServerStatus(selectedServer);
      } finally {
        generateBtn.style.display = 'block';
        loading.style.display = 'none';
      }
    }

    async function copyCode() {
      if (!currentCode) return;
      try {
        await navigator.clipboard.writeText(currentCode);
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = 'COPIED!';
        copyBtn.disabled = true;
        showToast('Code copied!');
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          copyBtn.disabled = false;
        }, 2000);
      } catch (error) {
        showToast('Copy failed', true);
      }
    }

    form.addEventListener('submit', generatePairCode);
    copyBtn.addEventListener('click', copyCode);
    phoneInput.addEventListener('input', (e) => { e.target.value = e.target.value.replace(/[^\d]/g, ''); });
    phoneInput.addEventListener('focus', () => { if (codeBox.classList.contains('has-error')) resetCodeBox(); });

    document.addEventListener('DOMContentLoaded', initApp);
  </script>
</body>
</html>
