@echo off
echo Testing MCP Server...
echo.

echo 1. Testing tools/list:
echo {"jsonrpc": "2.0", "method": "tools/list", "params": {}, "id": 1} | node mcp-server/dist/index.js
echo.

echo 2. Testing search for "peace":
echo {"jsonrpc": "2.0", "method": "tools/call", "params": {"name": "search", "arguments": {"query": "peace"}}, "id": 2} | node mcp-server/dist/index.js
echo.

echo 3. Testing search for "الرحمن" with limit:
echo {"jsonrpc": "2.0", "method": "tools/call", "params": {"name": "search", "arguments": {"query": "الرحمن", "options": {"limit": 3}}}, "id": 3} | node mcp-server/dist/index.js
echo.

echo Tests completed!
pause
