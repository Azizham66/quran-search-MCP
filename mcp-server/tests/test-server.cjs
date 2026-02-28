const { spawn } = require('child_process');
const path = require('path');

// Start the MCP server
const server = spawn('node', [path.join(__dirname, 'dist', 'index.js')], {
  stdio: ['pipe', 'pipe', 'inherit'],
});

// Test requests
const requests = [
  { id: 1, method: 'tools/list', params: {} },
  { id: 2, method: 'tools/call', params: { name: 'search', arguments: { query: 'peace' } } },
  {
    id: 3,
    method: 'tools/call',
    params: { name: 'search', arguments: { query: 'الرحمن', options: { limit: 3 } } },
  },
];

let requestIndex = 0;

function sendNextRequest() {
  if (requestIndex >= requests.length) {
    console.log('\nAll tests completed!');
    server.kill();
    return;
  }

  const request = requests[requestIndex];
  const jsonRequest = JSON.stringify({
    jsonrpc: '2.0',
    ...request,
  });

  console.log(`\n📤 Sending request ${request.id}:`, jsonRequest);
  server.stdin.write(jsonRequest + '\n');
  requestIndex++;
}

// Handle responses
server.stdout.on('data', (data) => {
  const response = data.toString().trim();
  try {
    const parsed = JSON.parse(response);
    console.log('📥 Response:', JSON.stringify(parsed, null, 2));
  } catch (e) {
    console.log('📥 Raw response:', response);
  }

  setTimeout(sendNextRequest, 1000);
});

// Start testing
setTimeout(sendNextRequest, 1000);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.on('close', (code) => {
  console.log(`Server exited with code ${code}`);
});
