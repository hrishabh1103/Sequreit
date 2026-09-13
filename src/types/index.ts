export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'OPTIMAL';

export type ProductStatus = 'AVAILABLE' | 'IN_DEVELOPMENT' | 'ROADMAP' | 'WORKING_CORE';

export interface CryptoAsset {
  id: string;
  name: string;
  type: 'Algorithm' | 'Certificate' | 'Key' | 'Endpoint' | 'Protocol' | 'Library';
  algorithm: string;
  protocol?: string;
  location: string;
  owner: string;
  environment: 'Production' | 'Staging' | 'DMZ' | 'Internal Core' | 'Cloud VPC';
  evidence: string;
  risk: RiskLevel;
  status: 'Vulnerable to PQC' | 'Transition Candidate' | 'Standard Compliant' | 'Hybrid Ready';
  migrationRelevance: 'Immediate' | 'Scheduled' | 'Monitoring' | 'Low';
  dependenciesCount: number;
  dataLifetime: string;
  hndlRelevance: boolean;
  businessCriticality: 'Tier 1' | 'Tier 2' | 'Tier 3';
}

export interface DependencyNode {
  id: string;
  label: string;
  category: 'Certificate' | 'PKI' | 'Gateway' | 'API' | 'Service' | 'Application' | 'Database' | 'HSM' | 'Key';
  algorithm?: string;
  risk: RiskLevel;
  depth: number;
  description: string;
  dependencies: string[]; // ids of downstream affected nodes
}

export interface PriorityItem {
  id: string;
  rank: number;
  title: string;
  targetAsset: string;
  exposure: 'Internet-Facing' | 'Partner Mesh' | 'Internal Core' | 'OT Network';
  dataSensitivity: 'Confidential Banking' | 'Defence Telemetry' | 'Citizen PII' | 'Industrial Control';
  hndlRelevance: 'Critical (High Retention)' | 'High' | 'Moderate' | 'Low';
  dependencyCount: number;
  migrationComplexity: 'Low' | 'Medium' | 'High';
  recommendedAction: string;
  risk: RiskLevel;
}

export interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  criticalChallenge: string;
  cryptoFootprint: string[];
  vulnerabilities: string[];
  cyberkorpImpact: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  isAdvisor?: boolean;
}

export interface PlatformStage {
  step: string;
  name: string;
  headline: string;
  description: string;
  capabilities: string[];
  deliverable: string;
  currentStatus: 'Working Capability' | 'In Optimization' | 'Roadmap Architecture';
}
