# Secure Serverless SaaS (Zero-Trust)

## Problem
Most SaaS systems mix identity, data access, and business logic,
leading to over-privileged roles and weak isolation.

## Solution
Designed a fully serverless SaaS with strict trust boundaries
and per-user data isolation using AWS managed services.

## Architecture
- Cognito for authentication
- API Gateway with JWT authorizers
- Lambda for stateless business logic
- DynamoDB single-table design
- KMS-backed encryption
- CloudFront + WAF for edge protection

## Security Considerations
- Least-privilege IAM roles
- Encrypted data at rest and in transit
- No server-side session state
- Explicit threat modeling

## Trade-offs
- Cold starts accepted for cost efficiency
- Limited query flexibility in DynamoDB
