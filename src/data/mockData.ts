import type { CryptoAsset, DependencyNode, PriorityItem, IndustryData, TeamMember, PlatformStage } from '../types';

export const PLATFORM_STAGES: PlatformStage[] = [
  {
    step: '01',
    name: 'DISCOVER',
    headline: 'Continuous Surface Reconnaissance',
    description: 'Find cryptography across source code repositories, CI/CD pipelines, container images, TLS endpoints, and network infrastructure.',
    capabilities: [
      'AST-based static code discovery for cryptographic calls',
      'Certificate and cipher suite detection on live endpoints',
      'Container image & dependency manifest scanning',
      'Secret and hardcoded key identification'
    ],
    deliverable: 'Raw Telemetry & Cryptographic Call Graph',
    currentStatus: 'Working Capability'
  },
  {
    step: '02',
    name: 'INVENTORY',
    headline: 'Unified Cryptography Bill of Materials (CBOM)',
    description: 'Build a living, continuously updated inventory of all algorithms, certificates, keys, libraries, and protocols in your enterprise.',
    capabilities: [
      'Standardized schema normalization (CBOM)',
      'Algorithm classification (Classical, Hybrid, Post-Quantum)',
      'Asset ownership, environment, and location indexing',
      'Continuous reconciliation against baseline'
    ],
    deliverable: 'Living Cryptographic Asset Catalog',
    currentStatus: 'Working Capability'
  },
  {
    step: '03',
    name: 'UNDERSTAND',
    headline: 'Deep Dependency Mapping',
    description: 'Connect disparate cryptographic findings to upstream services, APIs, databases, and core business functions.',
    capabilities: [
      'Multi-hop cryptographic dependency path tracing',
      'Trust anchor & PKI chain correlation',
      'Blast-radius modeling for algorithm deprecation',
      'API-to-data-store crypto flow analysis'
    ],
    deliverable: 'Cryptographic Relationship Topology',
    currentStatus: 'Working Capability'
  },
  {
    step: '04',
    name: 'ASSESS',
    headline: 'Multi-Dimensional Risk & HNDL Evaluation',
    description: 'Evaluate exposure, algorithm strength, data retention requirements, and Harvest Now, Decrypt Later (HNDL) risk.',
    capabilities: [
      'HNDL vulnerability assessment based on data shelf-life',
      'Quantum vulnerability scoring against NIST standards',
      'Exposure surface evaluation (Internet, DMZ, Internal)',
      'Configurable enterprise risk weighting models'
    ],
    deliverable: 'Contextual Cryptographic Risk Matrix',
    currentStatus: 'Working Capability'
  },
  {
    step: '05',
    name: 'PRIORITIZE',
    headline: 'Actionable Migration Queue',
    description: 'Convert hundreds of findings into an ordered, phased roadmap based on business impact and migration complexity.',
    capabilities: [
      'Automated priority ranking based on blast radius',
      'Effort vs risk reduction ratio calculation',
      'Phase-gate migration sequencing',
      'Resource & dependency constraint modeling'
    ],
    deliverable: 'Phased Migration Work Queue',
    currentStatus: 'Working Capability'
  },
  {
    step: '06',
    name: 'REMEDIATE',
    headline: 'Assisted & Modular Transformation',
    description: 'Deploy remediation controls, hybrid PQC tunnels, and guided crypto-agility abstractions.',
    capabilities: [
      'Live hybrid post-quantum VPN tunnels (Working Product)',
      'PQC algorithm library migration assistance',
      'Dual-signature & hybrid certificate guidance',
      'Crypto-abstraction shim recommendations'
    ],
    deliverable: 'Quantum-Safe Replacement & Agility Layer',
    currentStatus: 'Working Capability'
  },
  {
    step: '07',
    name: 'VALIDATE',
    headline: 'Automated Post-Migration Verification',
    description: 'Verify cryptographic upgrades without breaking downstream dependencies or degrading throughput.',
    capabilities: [
      'Handshake & cipher suite regression testing',
      'Certificate chain validation & trust verification',
      'Performance delta & latency benchmarking',
      'Compliance and proof-of-mitigation generation'
    ],
    deliverable: 'Cryptographic Proof & Evidence Report',
    currentStatus: 'In Optimization'
  },
  {
    step: '08',
    name: 'CONTINUOUS CRYPTO-AGILITY',
    headline: 'Permanent Infrastructure Resilience',
    description: 'Maintain the capability to swap, update, and manage cryptographic primitives as standards and threats evolve.',
    capabilities: [
      'Continuous drift detection & rogue cipher alerting',
      'Policy-as-code cryptographic governance',
      'Instant deprecation blast radius calculation',
      'Zero-downtime cryptographic algorithm switching'
    ],
    deliverable: 'Active Cryptographic Control Plane',
    currentStatus: 'Roadmap Architecture'
  }
];

export const MOCK_CBOM_ASSETS: CryptoAsset[] = [
  {
    id: 'ASSET-0109',
    name: 'payment-gateway-cert',
    type: 'Certificate',
    algorithm: 'RSA-2048',
    protocol: 'TLS 1.2',
    location: 'api-edge-proxy.prod.aws:/etc/ssl/certs/gateway.pem',
    owner: 'Payments Platform Team',
    environment: 'Production',
    evidence: 'X.509 SubjectKeyIdentifier: 8e:3f:b2:aa... Valid until 2027-11',
    risk: 'CRITICAL',
    status: 'Vulnerable to PQC',
    migrationRelevance: 'Immediate',
    dependenciesCount: 14,
    dataLifetime: '10+ Years (PCI-DSS & Transaction Records)',
    hndlRelevance: true,
    businessCriticality: 'Tier 1'
  },
  {
    id: 'ASSET-0244',
    name: 'auth-jwt-signer',
    type: 'Key',
    algorithm: 'ECDSA-P256',
    protocol: 'JWS/ES256',
    location: 'kms://arn:aws:kms:us-east-1:keys/auth-signing-master',
    owner: 'Identity & Access Group',
    environment: 'Production',
    evidence: 'Go crypto/ecdsa token validation hook in /services/auth/token.go:88',
    risk: 'CRITICAL',
    status: 'Vulnerable to PQC',
    migrationRelevance: 'Immediate',
    dependenciesCount: 22,
    dataLifetime: 'Session tokens (24h) / Refresh keys (3 Years)',
    hndlRelevance: true,
    businessCriticality: 'Tier 1'
  },
  {
    id: 'ASSET-0312',
    name: 'core-storage-encryption',
    type: 'Algorithm',
    algorithm: 'AES-256-GCM',
    protocol: 'Envelope Encryption',
    location: 'db-cluster-primary:/data/pgdata/crypto_tablespace',
    owner: 'Core Data Engineering',
    environment: 'Production',
    evidence: 'Symmetric cipher invoked with 256-bit entropy pool; NIST quantum-resistant',
    risk: 'OPTIMAL',
    status: 'Standard Compliant',
    migrationRelevance: 'Low',
    dependenciesCount: 8,
    dataLifetime: 'Permanent',
    hndlRelevance: false,
    businessCriticality: 'Tier 1'
  },
  {
    id: 'ASSET-0419',
    name: 'partner-b2b-interconnect',
    type: 'Endpoint',
    algorithm: 'ECDH-P384 + AES-128-CBC',
    protocol: 'IPsec / IKEv2',
    location: 'router-gw-01.lon.colo:interface/ipsec0',
    owner: 'Network Infrastructure',
    environment: 'DMZ',
    evidence: 'IKE Proposal detected in conf: dh-group20, esp-aes128-sha256',
    risk: 'HIGH',
    status: 'Vulnerable to PQC',
    migrationRelevance: 'Scheduled',
    dependenciesCount: 9,
    dataLifetime: '7 Years (B2B Settlement Stream)',
    hndlRelevance: true,
    businessCriticality: 'Tier 2'
  },
  {
    id: 'ASSET-0588',
    name: 'backup-integrity-validator',
    type: 'Algorithm',
    algorithm: 'SHA-256',
    protocol: 'HMAC',
    location: 'storage-replicator:/opt/backup/sign.py',
    owner: 'SRE & Disaster Recovery',
    environment: 'Cloud VPC',
    evidence: 'hashlib.sha256 digest validation for glacier archives',
    risk: 'LOW',
    status: 'Standard Compliant',
    migrationRelevance: 'Monitoring',
    dependenciesCount: 4,
    dataLifetime: '5 Years',
    hndlRelevance: false,
    businessCriticality: 'Tier 2'
  },
  {
    id: 'ASSET-0672',
    name: 'legacy-admin-pki-root',
    type: 'Certificate',
    algorithm: 'RSA-1024',
    protocol: 'Internal CA',
    location: 'vault-legacy.internal:/secret/ca/root.crt',
    owner: 'Enterprise Architecture',
    environment: 'Internal Core',
    evidence: 'Legacy deprecated modulus detected (1024-bit). In violation of current baseline.',
    risk: 'CRITICAL',
    status: 'Vulnerable to PQC',
    migrationRelevance: 'Immediate',
    dependenciesCount: 19,
    dataLifetime: '15 Years',
    hndlRelevance: true,
    businessCriticality: 'Tier 1'
  },
  {
    id: 'ASSET-0720',
    name: 'telemetry-pqc-pilot-tunnel',
    type: 'Protocol',
    algorithm: 'ML-KEM-768 + X25519',
    protocol: 'SeQureit PQ-VPN Hybrid',
    location: 'edge-gateway-eu01 <-> hq-datacenter',
    owner: 'SeQureit Testbed Team',
    environment: 'Staging',
    evidence: 'Post-Quantum Key Encapsulation (FIPS 203) with classical hybrid fallback',
    risk: 'OPTIMAL',
    status: 'Hybrid Ready',
    migrationRelevance: 'Low',
    dependenciesCount: 3,
    dataLifetime: 'Indefinite',
    hndlRelevance: false,
    businessCriticality: 'Tier 3'
  }
];

export const DEPENDENCY_GRAPH_NODES: DependencyNode[] = [
  {
    id: 'node-cert-ecdsa',
    label: 'ECDSA-P256 Certificate',
    category: 'Certificate',
    algorithm: 'ECDSA-P256',
    risk: 'CRITICAL',
    depth: 1,
    description: 'Edge wildcard certificate serving external customer traffic. Vulnerable to Shor algorithm.',
    dependencies: ['node-pki', 'node-api-gw']
  },
  {
    id: 'node-pki',
    label: 'Enterprise PKI',
    category: 'PKI',
    algorithm: 'RSA-4096 Root CA',
    risk: 'HIGH',
    depth: 2,
    description: 'Enterprise internal certificate authority issuing service-to-service trust certificates.',
    dependencies: ['node-api-gw', 'node-hsm-cluster']
  },
  {
    id: 'node-api-gw',
    label: 'API Gateway',
    category: 'Gateway',
    algorithm: 'TLS 1.3 / ECDHE',
    risk: 'HIGH',
    depth: 2,
    description: 'Terminates ingress TLS traffic and routes verified client requests to backend services.',
    dependencies: ['node-payment-svc']
  },
  {
    id: 'node-hsm-cluster',
    label: 'Dedicated Cloud HSM',
    category: 'HSM',
    algorithm: 'Hardware PKCS#11',
    risk: 'MEDIUM',
    depth: 3,
    description: 'Hardware security module storing the root signing keys and master wrapping keys.',
    dependencies: ['node-kms-key']
  },
  {
    id: 'node-kms-key',
    label: 'Envelope Master Key',
    category: 'Key',
    algorithm: 'AES-256-KW',
    risk: 'LOW',
    depth: 4,
    description: 'Master key for decrypting data-encryption keys across the database tier.',
    dependencies: ['node-database']
  },
  {
    id: 'node-payment-svc',
    label: 'Payment Service',
    category: 'Service',
    algorithm: 'RSA-2048 / JWS Signing',
    risk: 'CRITICAL',
    depth: 3,
    description: 'Processes credit card transactions, transaction signing, and settlement dispatch.',
    dependencies: ['node-customer-app', 'node-database']
  },
  {
    id: 'node-customer-app',
    label: 'Customer Application',
    category: 'Application',
    algorithm: 'App Pinning (ECDSA-P256)',
    risk: 'HIGH',
    depth: 4,
    description: 'Consumer client apps utilizing certificate pinning against the public gateway.',
    dependencies: []
  },
  {
    id: 'node-database',
    label: 'Ledger Primary DB',
    category: 'Database',
    algorithm: 'AES-256-GCM',
    risk: 'LOW',
    depth: 4,
    description: 'Encrypted relational datastore containing 12 years of customer financial records.',
    dependencies: []
  }
];

export const PRIORITY_QUEUE_ITEMS: PriorityItem[] = [
  {
    id: 'PQ-001',
    rank: 1,
    title: 'External Payment Gateway Ingress Cert',
    targetAsset: 'api-edge-proxy (RSA-2048 / TLS 1.2)',
    exposure: 'Internet-Facing',
    dataSensitivity: 'Confidential Banking',
    hndlRelevance: 'Critical (High Retention)',
    dependencyCount: 14,
    migrationComplexity: 'Medium',
    recommendedAction: 'Transition to Hybrid TLS with ML-KEM-768 key exchange and dual-sign certs',
    risk: 'CRITICAL'
  },
  {
    id: 'PQ-002',
    rank: 2,
    title: 'Defence Communication Backbone Interconnect',
    targetAsset: 'telemetry-ipsec-gw (ECDH-P384 / IKEv2)',
    exposure: 'OT Network',
    dataSensitivity: 'Defence Telemetry',
    hndlRelevance: 'Critical (High Retention)',
    dependencyCount: 19,
    migrationComplexity: 'High',
    recommendedAction: 'Deploy SeQureit PQ-VPN tunnel with post-quantum key encapsulation',
    risk: 'CRITICAL'
  },
  {
    id: 'PQ-003',
    rank: 3,
    title: 'Citizen Identity Verification JWT Signer',
    targetAsset: 'auth-token-service (ECDSA-P256)',
    exposure: 'Partner Mesh',
    dataSensitivity: 'Citizen PII',
    hndlRelevance: 'High',
    dependencyCount: 22,
    migrationComplexity: 'High',
    recommendedAction: 'Migrate token signature verification to stateful hybrid scheme or ML-DSA-65',
    risk: 'HIGH'
  },
  {
    id: 'PQ-004',
    rank: 4,
    title: 'Internal SCADA Telemetry Broker Certs',
    targetAsset: 'scada-broker-chain (RSA-2048)',
    exposure: 'Internal Core',
    dataSensitivity: 'Industrial Control',
    hndlRelevance: 'Moderate',
    dependencyCount: 8,
    migrationComplexity: 'Medium',
    recommendedAction: 'Schedule CA reissuance with crypto-agile certificates during maintenance window',
    risk: 'HIGH'
  }
];

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: 'bfsi',
    name: 'Banking & BFSI',
    tagline: 'Securing transaction rails, SWIFT workflows, and long-retention financial ledgers.',
    accent: '#00E5FF',
    criticalChallenge: 'Financial records must remain confidential for 10-30 years, creating acute vulnerability to Harvest Now, Decrypt Later (HNDL) adversaries.',
    cryptoFootprint: ['SWIFT Messaging TLS', 'HSM Cluster Pinning', 'EMV Key Derivation', 'B2B Interbank VPNs', 'Card Vault AES Keys'],
    vulnerabilities: ['Classical RSA in core payment gateways', 'Tightly coupled legacy mainframe cryptography', 'Multi-party certificate dependencies'],
    sequreitImpact: 'Enables discovery of legacy ciphers across transaction paths and phased rollout of quantum-safe encapsulation without mainframe downtime.'
  },
  {
    id: 'defence',
    name: 'Defence & Aerospace',
    tagline: 'Protecting classified communications, tactical datalinks, and sovereign data.',
    accent: '#0066FF',
    criticalChallenge: 'Tactical intelligence and sovereign secrets retain operational value for 30 to 50+ years, demanding immediate post-quantum resilience.',
    cryptoFootprint: ['Tactical IPsec Tunnels', 'Air-Gapped PKI Roots', 'Telemetry Datalinks', 'Mission Firmware Signatures'],
    vulnerabilities: ['Long-lifecycle hardware in disconnected environments', 'Static pre-shared symmetric keys', 'Complex supply-chain firmware crypto'],
    sequreitImpact: 'Provides air-gapped cryptographic discovery and ready-to-deploy PQ-VPN tunnels for post-quantum secure transport.'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    tagline: 'Safeguarding SCADA systems, remote pipeline telemetry, and refinery control networks.',
    accent: '#8B5CF6',
    criticalChallenge: 'Industrial automation equipment operating in harsh environments has a 15-25 year operational lifespan with limited compute overhead.',
    cryptoFootprint: ['Modbus/DNP3 Secure Envelopes', 'Remote Wellhead Radios', 'Pipeline Control VPNs', 'Refinery Safety Systems'],
    vulnerabilities: ['Hardcoded legacy certificates', 'Unsupported proprietary cipher implementations', 'Lack of remote crypto-agility updating'],
    sequreitImpact: 'Maps OT/IT boundary cryptography and models blast radius before changing critical field device trust anchors.'
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    tagline: 'Defending national grid control planes, substation automation, and smart metering.',
    accent: '#10B981',
    criticalChallenge: 'High-availability electrical grid substations cannot tolerate false positives, latency spikes, or interrupted telemetry during cryptographic change.',
    cryptoFootprint: ['IEC 61850 Substation Certs', 'Grid SCADA Backhaul', 'Smart Meter Mesh Keys', 'Synchrophasor TLS Streams'],
    vulnerabilities: ['Substation protocol crypto legacy', 'Massive scale key rotation hurdles', 'Regulatory compliance transition timelines'],
    sequreitImpact: 'Continuous cryptographic drift monitoring that alerts engineering teams before certificate expiry or cryptographic obsolescence disrupts operations.'
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    tagline: 'Securing 5G Standalone core, eNodeB backhaul, and subscriber identity registries.',
    accent: '#388BFD',
    criticalChallenge: 'Massive throughput (terabits/sec) requires quantum-resistant key exchanges that introduce minimal latency to carrier-grade networks.',
    cryptoFootprint: ['5G Core Service-Based Architecture (SBA) TLS', 'SEPP Roaming Security', 'IPsec Backhaul Tunnels', 'eSIM Profile Decryption'],
    vulnerabilities: ['Massive distributed edge footprint', 'Signaling protocol legacy (Diameter/SS7)', 'High-volume TLS certificate overhead'],
    sequreitImpact: 'Discovers vulnerable ciphers across 5G microservices and provides high-speed hybrid tunnel integration paths.'
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    tagline: 'Safeguarding citizen identity registries, sovereign data vaults, and judicial systems.',
    accent: '#00E5FF',
    criticalChallenge: 'Government environments require controlled cryptographic inventories, long-lived data protection and carefully managed migration paths.',
    cryptoFootprint: ['National ID Signing Keys', 'Government PKI (GPKI)', 'Inter-Agency Data Exchanges', 'Critical National Registries'],
    vulnerabilities: ['Fragmented cross-departmental trust models', 'Decades-old legacy software stacks', 'Lack of a central cryptographic inventory'],
    sequreitImpact: 'Establishes a sovereign, comprehensive CBOM across civil infrastructure to guide structured national transition plans.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'Protecting genomic data, clinical trial integrity, and connected hospital medical devices.',
    accent: '#F43F5E',
    criticalChallenge: 'Genomic information is immutable and tied to human life expectancy (80+ years), making HNDL an existential patient privacy threat.',
    cryptoFootprint: ['HL7 / FHIR API Endpoints', 'PACS Imaging DICOM TLS', 'IoMT Connected Infusion Pumps', 'Genomic Data Repositories'],
    vulnerabilities: ['Legacy embedded medical device firmware', 'Static vendor root certificates', 'Unencrypted internal hospital VLANs'],
    sequreitImpact: 'Identifies high-retention genomic and clinical data repositories to prioritize immediate post-quantum storage and transit remediation.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Robotics',
    tagline: 'Shielding proprietary CAD designs, automated assembly lines, and supply-chain APIs.',
    accent: '#F59E0B',
    criticalChallenge: 'Intellectual property theft of manufacturing blueprints threatens multi-billion dollar industrial advantages decades into the future.',
    cryptoFootprint: ['Industrial IoT (IIoT) Gateways', 'Supply Chain ERP EDI', 'CAD/CAM Vault Encryption', 'Cobot Controller Auth'],
    vulnerabilities: ['Unpatched legacy operating systems on factory floors', 'Shared symmetric keys across vendor fleets'],
    sequreitImpact: 'Isolates and validates factory floor cryptographic endpoints without halting active assembly lines.'
  },
  {
    id: 'technology',
    name: 'Technology & Enterprise SaaS',
    tagline: 'Empowering cloud platforms, multi-tenant databases, and modern API ecosystems.',
    accent: '#8B5CF6',
    criticalChallenge: 'Rapid release cadences risk introducing unvetted cryptographic libraries, hardcoded credentials, and obsolete ciphers in microservices.',
    cryptoFootprint: ['mTLS Service Mesh', 'JWT Signing Infrastructure', 'Customer Data-at-Rest KMS', 'OAuth2 / OIDC Providers'],
    vulnerabilities: ['Dependency tree crypto vulnerabilities in npm/PyPI/cargo', 'Shadow cloud certificates', 'Configuration drift across K8s clusters'],
    sequreitImpact: 'Automates CI/CD cryptographic discovery and establishes policy gates before vulnerable algorithms deploy into production.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Kishan Dwivedi',
    role: 'Founder & CEO',
    focus: 'Vision, Product Direction & Strategic Development',
    bio: "Leads the company's vision, product direction and strategic development around cryptographic security and post-quantum readiness."
  },
  {
    name: 'Hrishabh Gupta',
    role: 'Technology & Product',
    focus: 'Discovery Engine, Dependency Intelligence & Crypto-Agility',
    bio: "Building SeQureit's cryptographic discovery, dependency intelligence and crypto-agility platform."
  },
  {
    name: 'Abhishek Pratap Singh',
    role: 'DevOps Engineer',
    focus: 'Infrastructure, Deployment & Platform Operations',
    bio: "Engineering infrastructure, deployment and platform operations for SeQureit's cryptographic systems."
  },
  {
    name: 'Raunak Sharma',
    role: 'Researcher',
    focus: 'Post-Quantum Cryptography & Migration Strategies',
    bio: 'Researching post-quantum cryptography, cryptographic standards and migration strategies.'
  },
  {
    name: 'Nitin Gupta',
    role: 'Advisor',
    focus: 'Enterprise Technology Advisory',
    bio: 'AGM, YASH Technologies',
    isAdvisor: true
  }
];
