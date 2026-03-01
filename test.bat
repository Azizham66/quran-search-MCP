@echo off
echo {"jsonrpc": "2.0", "method": "tools/list", "params": {}, "id": 1} | node mcp-server/dist/index.js | jq 2>nul
echo {"jsonrpc": "2.0", "method": "tools/call", "params": {"name": "search", "arguments": {"query": "peace"}}, "id": 2} | node mcp-server/dist/index.js | jq 2>nul
echo {"jsonrpc": "2.0", "method": "tools/call", "params": {"name": "search", "arguments": {"query": "الرحمن", "options": {"limit": 3}}}, "id": 3} | node mcp-server/dist/index.js | jq 2>nul
pause
