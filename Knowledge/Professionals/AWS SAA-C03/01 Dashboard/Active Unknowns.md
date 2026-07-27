
最多只能有三個。

1. Can the complete Human → browser/application → AWS SDK → credential provider/IMDS → STS temporary credential triple → SigV4-signed HTTPS request → S3 authentication and authorization path be reconstructed without prompts, while explaining that credentials authenticate and policies authorize?
2. Can the AppRole assumed-role session be identified as the Principal, rather than the Human, application, or EC2 host by default, and tied to the request context?
3. Can `grant exists ∩ every applicable ceiling permits ∩ no Explicit Deny` be applied to fresh SCP deny-list and allow-list scenarios without treating SCP or RCP as grants?

## Parking Lot
- [ ] SCP management-account exception was taught on 2026-07-23 but remains untested.
