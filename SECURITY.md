# Security Policy

## Supported Versions

Only the latest version of `quran-search-engine-mcp-server` is supported for security updates.

## Reporting a Vulnerability

We take security seriously. If you discover a vulnerability, please do NOT open a public issue. Instead, report it privately:

**Email**: [your-security-email@example.com]

Please include as much detail as possible:

* Description of the vulnerability
* Steps to reproduce the issue
* Potential impact assessment
* Any suggested mitigations (if known)

## Response Time

We aim to respond to security reports within 48 hours and provide a fix within 7 days for critical vulnerabilities.

## Security Best Practices

### For MCP Server Operators

1. **Keep Updated**: Always use the latest version of the MCP server
2. **Network Security**: Run the server in a secure network environment
3. **Input Validation**: The server includes built-in input validation, but monitor for unusual request patterns
4. **Resource Limits**: Monitor memory and CPU usage, especially with large search requests

### Data Privacy

- The MCP server processes Quran text locally and does not transmit search queries to external services
- No personal data is collected or stored by the server
- Search queries are processed in memory and not logged persistently

## Known Security Considerations

### Resource Consumption

- Large search queries may consume significant memory and CPU
- The server implements reasonable defaults for result limits
- Consider implementing additional rate limiting for production deployments

### Input Sanitization

- All user inputs are validated using Zod schemas
- Arabic text normalization is performed safely
- SQL injection is not applicable as this is not a database-driven application

## Disclosure Policy

We follow responsible disclosure principles:

1. **Private Reporting**: Security issues should be reported privately
2. **Assessment**: We will assess and validate reported vulnerabilities
3. **Coordination**: We will coordinate disclosure when a fix is available
4. **Credit**: Security researchers will be credited for their findings (if desired)

## Security Updates

Security updates will be:

* Released as new versions
* Announced in release notes
* Tagged with security-related information

## Additional Information

For questions about this security policy or to report a security issue, please contact us at [your-security-email@example.com].

Thank you for helping keep the Quran Search Engine MCP Server secure!
