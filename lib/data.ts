import { Prompt, RawPrompt, Module } from './types'
import { PROMPT_METADATA, MCP_PROMPTS, DEFAULT_METADATA } from './prompt-metadata'

export const MODULES: Module[] = [
  {
    id: 'ci',
    name: 'Continuous Integration',
    shortName: 'CI',
    description: 'Build, test, and package your code automatically with AI-powered pipelines.',
    color: '#6366F1',
    icon: 'Zap',
    useCases: [
      {
        id: 'ci-pipeline-creation',
        title: 'Pipeline Creation & Configuration',
        description: 'Build and configure CI pipelines from scratch',
        moduleId: 'ci',
        subUseCases: [
          { id: 'ci-build-pipeline', title: 'Build Pipeline from Scratch', useCaseId: 'ci-pipeline-creation' },
          { id: 'ci-docker-build', title: 'Docker Build & Push', useCaseId: 'ci-pipeline-creation' },
          { id: 'ci-multi-stage', title: 'Multi-Stage Pipelines', useCaseId: 'ci-pipeline-creation' },
        ],
      },
      {
        id: 'ci-test-automation',
        title: 'Test Automation',
        description: 'Configure and optimize automated testing',
        moduleId: 'ci',
        subUseCases: [
          { id: 'ci-parallel-tests', title: 'Parallel Test Execution', useCaseId: 'ci-test-automation' },
          { id: 'ci-test-intelligence', title: 'Test Intelligence & Splitting', useCaseId: 'ci-test-automation' },
        ],
      },
      {
        id: 'ci-optimization',
        title: 'Build Optimization',
        description: 'Speed up builds and reduce resource usage',
        moduleId: 'ci',
        subUseCases: [
          { id: 'ci-caching', title: 'Dependency Caching', useCaseId: 'ci-optimization' },
          { id: 'ci-build-speed', title: 'Build Speed Analysis', useCaseId: 'ci-optimization' },
        ],
      },
    ],
  },
  {
    id: 'cd',
    name: 'Continuous Delivery & GitOps',
    shortName: 'CD',
    description: 'Deploy applications reliably to any environment with advanced strategies.',
    color: '#10B981',
    icon: 'Rocket',
    useCases: [
      {
        id: 'cd-deployment-strategies',
        title: 'Deployment Strategies',
        description: 'Configure advanced deployment strategies',
        moduleId: 'cd',
        subUseCases: [
          { id: 'cd-canary', title: 'Canary Deployment', useCaseId: 'cd-deployment-strategies' },
          { id: 'cd-blue-green', title: 'Blue-Green Deployment', useCaseId: 'cd-deployment-strategies' },
          { id: 'cd-rolling', title: 'Rolling Deployment', useCaseId: 'cd-deployment-strategies' },
        ],
      },
      {
        id: 'cd-kubernetes',
        title: 'Kubernetes Deployment',
        description: 'Deploy and manage Kubernetes workloads',
        moduleId: 'cd',
        subUseCases: [
          { id: 'cd-k8s-service', title: 'Kubernetes Service Deployment', useCaseId: 'cd-kubernetes' },
          { id: 'cd-helm', title: 'Helm Chart Deployment', useCaseId: 'cd-kubernetes' },
        ],
      },
      {
        id: 'cd-rollback',
        title: 'Rollback & Recovery',
        description: 'Handle failures and recovery scenarios',
        moduleId: 'cd',
        subUseCases: [
          { id: 'cd-auto-rollback', title: 'Automated Rollback', useCaseId: 'cd-rollback' },
          { id: 'cd-verification', title: 'Deployment Verification', useCaseId: 'cd-rollback' },
        ],
      },
    ],
  },
  {
    id: 'ff',
    name: 'Feature Management & Experimentation',
    shortName: 'FME',
    description: 'Control feature releases with targeted rollouts and A/B experimentation.',
    color: '#F59E0B',
    icon: 'Flag',
    useCases: [
      {
        id: 'ff-flag-management',
        title: 'Flag Management',
        description: 'Create and manage feature flags',
        moduleId: 'ff',
        subUseCases: [
          { id: 'ff-progressive-rollout', title: 'Progressive Rollout', useCaseId: 'ff-flag-management' },
          { id: 'ff-targeting-rules', title: 'Targeting Rules', useCaseId: 'ff-flag-management' },
          { id: 'ff-ab-testing', title: 'A/B Testing', useCaseId: 'ff-flag-management' },
        ],
      },
      {
        id: 'ff-lifecycle',
        title: 'Flag Lifecycle',
        description: 'Manage flags from creation to retirement',
        moduleId: 'ff',
        subUseCases: [
          { id: 'ff-cleanup', title: 'Flag Cleanup & Retirement', useCaseId: 'ff-lifecycle' },
          { id: 'ff-governance', title: 'Flag Governance', useCaseId: 'ff-lifecycle' },
        ],
      },
    ],
  },
  {
    id: 'ccm',
    name: 'Cloud Cost Management',
    shortName: 'CCM',
    description: 'Optimize cloud spend, eliminate waste, and enforce budget policies.',
    color: '#EF4444',
    icon: 'DollarSign',
    useCases: [
      {
        id: 'ccm-cost-optimization',
        title: 'Cost Optimization',
        description: 'Identify and reduce unnecessary cloud spend',
        moduleId: 'ccm',
        subUseCases: [
          { id: 'ccm-right-sizing', title: 'Resource Right-Sizing', useCaseId: 'ccm-cost-optimization' },
          { id: 'ccm-unused-resources', title: 'Unused Resources Cleanup', useCaseId: 'ccm-cost-optimization' },
          { id: 'ccm-autostopping', title: 'AutoStopping Rules', useCaseId: 'ccm-cost-optimization' },
        ],
      },
      {
        id: 'ccm-budget',
        title: 'Budget Management',
        description: 'Set and monitor cloud spend budgets',
        moduleId: 'ccm',
        subUseCases: [
          { id: 'ccm-budget-alerts', title: 'Budget Alerts & Thresholds', useCaseId: 'ccm-budget' },
          { id: 'ccm-cost-allocation', title: 'Cost Allocation & Tagging', useCaseId: 'ccm-budget' },
        ],
      },
    ],
  },
  {
    id: 'sto',
    name: 'Security Testing Orchestration',
    shortName: 'STO',
    description: 'Shift-left security scanning with SAST, DAST, SCA, and container scanning.',
    color: '#8B5CF6',
    icon: 'Shield',
    useCases: [
      {
        id: 'sto-scanning',
        title: 'Security Scanning',
        description: 'Set up and configure security scanners',
        moduleId: 'sto',
        subUseCases: [
          { id: 'sto-sast', title: 'SAST Integration', useCaseId: 'sto-scanning' },
          { id: 'sto-container', title: 'Container Image Scanning', useCaseId: 'sto-scanning' },
          { id: 'sto-sca', title: 'Software Composition Analysis', useCaseId: 'sto-scanning' },
        ],
      },
      {
        id: 'sto-governance',
        title: 'Compliance & Governance',
        description: 'Enforce security policies and gates',
        moduleId: 'sto',
        subUseCases: [
          { id: 'sto-gates', title: 'Security Quality Gates', useCaseId: 'sto-governance' },
          { id: 'sto-policies', title: 'OPA Policy Configuration', useCaseId: 'sto-governance' },
        ],
      },
    ],
  },
  {
    id: 'ce',
    name: 'Chaos Engineering',
    shortName: 'CE',
    description: 'Build resilience by proactively testing failure scenarios with controlled experiments.',
    color: '#EC4899',
    icon: 'FlaskConical',
    useCases: [
      {
        id: 'ce-experiments',
        title: 'Chaos Experiments',
        description: 'Design and run chaos experiments',
        moduleId: 'ce',
        subUseCases: [
          { id: 'ce-pod-failure', title: 'Pod Failure Testing', useCaseId: 'ce-experiments' },
          { id: 'ce-network-chaos', title: 'Network Chaos Simulation', useCaseId: 'ce-experiments' },
          { id: 'ce-resource-stress', title: 'Resource Stress Testing', useCaseId: 'ce-experiments' },
        ],
      },
      {
        id: 'ce-resilience',
        title: 'Resilience Validation',
        description: 'Validate system resilience with SLO-aligned testing',
        moduleId: 'ce',
        subUseCases: [
          { id: 'ce-slo-monitoring', title: 'SLO Monitoring During Chaos', useCaseId: 'ce-resilience' },
          { id: 'ce-gameday', title: 'GameDay Planning', useCaseId: 'ce-resilience' },
        ],
      },
    ],
  },
  {
    id: 'srm',
    name: 'Service Reliability Management',
    shortName: 'SRM',
    description: 'Monitor service health, manage SLOs, and automate incident response.',
    color: '#14B8A6',
    icon: 'Activity',
    useCases: [
      {
        id: 'srm-slo',
        title: 'SLO Management',
        description: 'Define, configure, and track SLOs',
        moduleId: 'srm',
        subUseCases: [
          { id: 'srm-slo-definition', title: 'SLO Definition & Configuration', useCaseId: 'srm-slo' },
          { id: 'srm-error-budget', title: 'Error Budget Management', useCaseId: 'srm-slo' },
        ],
      },
      {
        id: 'srm-monitoring',
        title: 'Service Monitoring',
        description: 'Set up health dashboards and alerts',
        moduleId: 'srm',
        subUseCases: [
          { id: 'srm-health-dashboard', title: 'Service Health Dashboard', useCaseId: 'srm-monitoring' },
          { id: 'srm-incident', title: 'Incident Detection & Response', useCaseId: 'srm-monitoring' },
        ],
      },
    ],
  },
  {
    id: 'idp',
    name: 'Internal Developer Portal',
    shortName: 'IDP',
    description: 'Empower developers with self-service catalogs, onboarding, and service scorecards.',
    color: '#0EA5E9',
    icon: 'LayoutDashboard',
    useCases: [
      {
        id: 'idp-self-service',
        title: 'Developer Self-Service',
        description: 'Catalog templates and automated environment provisioning',
        moduleId: 'idp',
        subUseCases: [
          { id: 'idp-service-catalog', title: 'Service Catalog Templates', useCaseId: 'idp-self-service' },
          { id: 'idp-env-provisioning', title: 'Self-Service Environment Provisioning', useCaseId: 'idp-self-service' },
          { id: 'idp-onboarding', title: 'Developer Onboarding Automation', useCaseId: 'idp-self-service' },
        ],
      },
      {
        id: 'idp-service-mgmt',
        title: 'Service Management',
        description: 'Ownership tracking, health scorecards, and dependency mapping',
        moduleId: 'idp',
        subUseCases: [
          { id: 'idp-health-scorecard', title: 'Service Health Scorecards', useCaseId: 'idp-service-mgmt' },
          { id: 'idp-dependency-map', title: 'Dependency Mapping & Impact Analysis', useCaseId: 'idp-service-mgmt' },
        ],
      },
    ],
  },
  {
    id: 'iacm',
    name: 'Infrastructure as Code Management',
    shortName: 'IaCM',
    description: 'Manage Terraform at scale with workspaces, drift detection, and cost estimation.',
    color: '#475569',
    icon: 'Server',
    useCases: [
      {
        id: 'iacm-terraform',
        title: 'Terraform Management',
        description: 'Workspace, module registry, and state management',
        moduleId: 'iacm',
        subUseCases: [
          { id: 'iacm-workspace', title: 'Workspace & State Management', useCaseId: 'iacm-terraform' },
          { id: 'iacm-drift', title: 'Drift Detection & Remediation', useCaseId: 'iacm-terraform' },
          { id: 'iacm-cost-estimate', title: 'Pre-Deployment Cost Estimation', useCaseId: 'iacm-terraform' },
        ],
      },
      {
        id: 'iacm-governance',
        title: 'Compliance & Governance',
        description: 'Policy enforcement and change approval workflows',
        moduleId: 'iacm',
        subUseCases: [
          { id: 'iacm-policy', title: 'OPA/Sentinel Policy Enforcement', useCaseId: 'iacm-governance' },
          { id: 'iacm-approval', title: 'Change Approval Workflows with RBAC', useCaseId: 'iacm-governance' },
        ],
      },
    ],
  },
  {
    id: 'sei',
    name: 'Software Engineering Insights',
    shortName: 'SEI',
    description: 'Track DORA metrics, engineering productivity, and sprint analytics across teams.',
    color: '#3B82F6',
    icon: 'TrendingUp',
    useCases: [
      {
        id: 'sei-metrics',
        title: 'Engineering Metrics',
        description: 'DORA metrics, pipeline performance, and quality tracking',
        moduleId: 'sei',
        subUseCases: [
          { id: 'sei-dora', title: 'DORA Metrics Tracking', useCaseId: 'sei-metrics' },
          { id: 'sei-productivity', title: 'Developer Productivity Analysis', useCaseId: 'sei-metrics' },
          { id: 'sei-quality', title: 'Code Quality & Defect Density', useCaseId: 'sei-metrics' },
        ],
      },
      {
        id: 'sei-agile',
        title: 'Agile & Sprint Analytics',
        description: 'Sprint velocity, investment allocation, and predictive insights',
        moduleId: 'sei',
        subUseCases: [
          { id: 'sei-sprint', title: 'Sprint Velocity & Effectiveness', useCaseId: 'sei-agile' },
          { id: 'sei-investment', title: 'Engineering Investment Allocation', useCaseId: 'sei-agile' },
        ],
      },
    ],
  },
  {
    id: 'cde',
    name: 'Cloud Development Environments',
    shortName: 'CDE',
    description: 'Provision on-demand dev environments with pre-configured workspaces and auto-hibernation.',
    color: '#7C3AED',
    icon: 'Terminal',
    useCases: [
      {
        id: 'cde-env-mgmt',
        title: 'Environment Management',
        description: 'On-demand provisioning, workspace standards, and resource optimization',
        moduleId: 'cde',
        subUseCases: [
          { id: 'cde-on-demand', title: 'On-Demand Environment Provisioning', useCaseId: 'cde-env-mgmt' },
          { id: 'cde-workspace', title: 'Pre-Configured Workspace Standards', useCaseId: 'cde-env-mgmt' },
          { id: 'cde-hibernation', title: 'Auto-Hibernation & Cost Optimization', useCaseId: 'cde-env-mgmt' },
        ],
      },
      {
        id: 'cde-collaboration',
        title: 'Developer Collaboration',
        description: 'Shared environments for pair programming and integration testing',
        moduleId: 'cde',
        subUseCases: [
          { id: 'cde-pair', title: 'Shared Environments for Pair Programming', useCaseId: 'cde-collaboration' },
          { id: 'cde-integration-test', title: 'Isolated Integration Testing Environments', useCaseId: 'cde-collaboration' },
        ],
      },
    ],
  },
  {
    id: 'ar',
    name: 'Artifact Registry',
    shortName: 'AR',
    description: 'Native artifact management for Docker, Helm, Maven, NPM, PyPI, and generic files.',
    color: '#D97706',
    icon: 'Package',
    useCases: [
      {
        id: 'ar-registry-mgmt',
        title: 'Registry Management',
        description: 'Private registries, multi-format support, and RBAC',
        moduleId: 'ar',
        subUseCases: [
          { id: 'ar-private-registry', title: 'Private Registry Setup', useCaseId: 'ar-registry-mgmt' },
          { id: 'ar-security-scan', title: 'Security Scanning for Artifacts', useCaseId: 'ar-registry-mgmt' },
          { id: 'ar-cleanup', title: 'Artifact Lifecycle & Cleanup Policies', useCaseId: 'ar-registry-mgmt' },
        ],
      },
    ],
  },
  {
    id: 'ssca',
    name: 'Supply Chain Security',
    shortName: 'SSCA',
    description: 'Secure the software supply chain with SBOM generation, artifact signing, and policy enforcement.',
    color: '#059669',
    icon: 'Link2',
    useCases: [
      {
        id: 'ssca-supply-chain',
        title: 'Supply Chain Security',
        description: 'SBOM generation, artifact signing, and provenance tracking',
        moduleId: 'ssca',
        subUseCases: [
          { id: 'ssca-sbom', title: 'SBOM Generation & Management', useCaseId: 'ssca-supply-chain' },
          { id: 'ssca-signing', title: 'Artifact Signing & Attestation', useCaseId: 'ssca-supply-chain' },
          { id: 'ssca-policy', title: 'Supply Chain Policy Enforcement', useCaseId: 'ssca-supply-chain' },
        ],
      },
    ],
  },
  {
    id: 'aiops',
    name: 'AI-Powered Operations',
    shortName: 'AI Ops',
    description: 'Harness AIDA for predictive failure analysis, automated RCA, and intelligent alerting.',
    color: '#6D28D9',
    icon: 'Brain',
    useCases: [
      {
        id: 'aiops-intelligent-ops',
        title: 'Intelligent Operations',
        description: 'Predictive analysis, root cause investigation, and noise reduction',
        moduleId: 'aiops',
        subUseCases: [
          { id: 'aiops-predictive', title: 'Predictive Failure Analysis', useCaseId: 'aiops-intelligent-ops' },
          { id: 'aiops-rca', title: 'Automated Root Cause Analysis', useCaseId: 'aiops-intelligent-ops' },
          { id: 'aiops-alerting', title: 'Intelligent Alert Correlation', useCaseId: 'aiops-intelligent-ops' },
        ],
      },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Governance',
    shortName: 'Enterprise',
    description: 'ABAC, Policy as Code, compliance automation, and audit trail management at scale.',
    color: '#DC2626',
    icon: 'Building2',
    useCases: [
      {
        id: 'enterprise-governance',
        title: 'Governance & Compliance',
        description: 'RBAC, audit trails, and regulatory compliance',
        moduleId: 'enterprise',
        subUseCases: [
          { id: 'enterprise-abac', title: 'Attribute-Based Access Control (ABAC)', useCaseId: 'enterprise-governance' },
          { id: 'enterprise-pac', title: 'Policy as Code Management', useCaseId: 'enterprise-governance' },
          { id: 'enterprise-compliance', title: 'Compliance Automation & Audit Trails', useCaseId: 'enterprise-governance' },
        ],
      },
    ],
  },
]

export const SAMPLE_PROMPTS: RawPrompt[] = [
  // ── CI: Pipeline Creation ──────────────────────────────────────────────────
  {
    id: 'ci-001',
    title: 'Generate CI Pipeline YAML',
    content: `Create a Harness CI pipeline YAML configuration for {{project_name}} using {{build_tool}} with the following requirements:

1. Trigger on pushes to {{branch_pattern}} branches
2. Build stage: compile and package the application
3. Test stage: run unit tests and generate coverage reports
4. Cache {{build_tool}} dependencies to speed up subsequent builds
5. Publish test results and coverage reports as pipeline artifacts
6. Notify via {{notification_channel}} on build failure

The service runs on {{runtime}} and the repository is hosted at {{repo_url}}.

Include proper environment variable handling, appropriate resource limits, and ensure the pipeline follows Harness best practices for {{build_tool}} projects.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'build_tool', label: 'Build Tool', placeholder: 'Select build tool', type: 'dropdown', options: ['Maven', 'Gradle', 'npm', 'yarn', 'Go', 'pip', 'Cargo'], defaultValue: 'Maven' },
      { id: 'v3', name: 'branch_pattern', label: 'Branch Pattern', placeholder: 'e.g., main, feature/*', type: 'text', defaultValue: 'main' },
      { id: 'v4', name: 'notification_channel', label: 'Notification Channel', placeholder: 'Select channel', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'Email', 'PagerDuty'] },
      { id: 'v5', name: 'runtime', label: 'Runtime', placeholder: 'e.g., Java 17, Node.js 20', type: 'text' },
      { id: 'v6', name: 'repo_url', label: 'Repository URL', placeholder: 'e.g., github.com/org/repo', type: 'text' },
    ],
    tags: ['pipeline', 'yaml', 'build', 'getting-started'],
    subUseCaseId: 'ci-build-pipeline',
    subUseCaseTitle: 'Build Pipeline from Scratch',
    useCaseId: 'ci-pipeline-creation',
    useCaseTitle: 'Pipeline Creation & Configuration',
    moduleId: 'ci',
    moduleTitle: 'Continuous Integration',
    moduleColor: '#6366F1',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ci-002',
    title: 'Docker Build & Push Pipeline Step',
    content: `Write a Harness CI pipeline step configuration to build and push a Docker image for {{service_name}}.

Service: {{service_name}}
Container Registry: {{registry}}
Image Name: {{image_name}}
Dockerfile location: {{dockerfile_path}}

Requirements:
- Build the Docker image using the Dockerfile at {{dockerfile_path}}
- Tag the image with both the Git commit SHA and {{image_tag}}
- Push to {{registry}} with proper authentication
- Scan the image for vulnerabilities before pushing
- Cache Docker layers to reduce build time
- Support multi-platform builds for {{target_platforms}}

Include the registry connector configuration and secret references needed for authentication.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., user-service', type: 'text' },
      { id: 'v2', name: 'registry', label: 'Container Registry', placeholder: 'Select registry', type: 'dropdown', options: ['Amazon ECR', 'Google Container Registry', 'Docker Hub', 'Azure Container Registry', 'GitHub Container Registry'] },
      { id: 'v3', name: 'image_name', label: 'Image Name', placeholder: 'e.g., myorg/user-service', type: 'text' },
      { id: 'v4', name: 'dockerfile_path', label: 'Dockerfile Path', placeholder: 'e.g., ./Dockerfile', type: 'text', defaultValue: './Dockerfile' },
      { id: 'v5', name: 'image_tag', label: 'Image Tag', placeholder: 'e.g., latest, v1.2.3', type: 'text', defaultValue: 'latest' },
      { id: 'v6', name: 'target_platforms', label: 'Target Platforms', placeholder: 'e.g., linux/amd64,linux/arm64', type: 'text', defaultValue: 'linux/amd64' },
    ],
    tags: ['docker', 'build', 'push', 'container', 'registry'],
    subUseCaseId: 'ci-docker-build',
    subUseCaseTitle: 'Docker Build & Push',
    useCaseId: 'ci-pipeline-creation',
    useCaseTitle: 'Pipeline Creation & Configuration',
    moduleId: 'ci',
    moduleTitle: 'Continuous Integration',
    moduleColor: '#6366F1',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ci-003',
    title: 'Parallel Test Stage with Test Intelligence',
    content: `Configure a Harness CI pipeline with parallel test execution and Test Intelligence for {{project_name}}.

Test framework: {{test_framework}}
Total tests: {{test_count}} | Current runtime: {{current_runtime}} minutes | Target: {{target_runtime}} minutes

Design the parallel test strategy:
1. Split tests across {{parallel_count}} parallel runners using Harness Test Intelligence
2. Use TI to identify and skip unchanged tests, reducing test time further
3. Group tests by module/package for efficient distribution
4. Aggregate results — fail pipeline if any runner reports failures
5. Generate a unified test report combining all runner outputs

Infrastructure: {{infrastructure}}
Test environment requirements: {{env_requirements}}`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., backend-api', type: 'text' },
      { id: 'v2', name: 'test_framework', label: 'Test Framework', placeholder: 'Select framework', type: 'dropdown', options: ['JUnit', 'TestNG', 'Jest', 'Pytest', 'Go Test', 'RSpec', 'Mocha'] },
      { id: 'v3', name: 'test_count', label: 'Number of Tests', placeholder: 'e.g., 2500', type: 'text' },
      { id: 'v4', name: 'current_runtime', label: 'Current Runtime (mins)', placeholder: 'e.g., 45', type: 'text' },
      { id: 'v5', name: 'target_runtime', label: 'Target Runtime (mins)', placeholder: 'e.g., 10', type: 'text' },
      { id: 'v6', name: 'parallel_count', label: 'Parallel Runners', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v7', name: 'infrastructure', label: 'Infrastructure', placeholder: 'Select infrastructure', type: 'dropdown', options: ['Harness Cloud', 'AWS EC2', 'GCP GKE', 'Azure AKS', 'On-Premise'] },
      { id: 'v8', name: 'env_requirements', label: 'Environment Requirements', placeholder: 'e.g., requires PostgreSQL 15 and Redis 7', type: 'textarea' },
    ],
    tags: ['testing', 'parallel', 'test-intelligence', 'optimization'],
    subUseCaseId: 'ci-parallel-tests',
    subUseCaseTitle: 'Parallel Test Execution',
    useCaseId: 'ci-test-automation',
    useCaseTitle: 'Test Automation',
    moduleId: 'ci',
    moduleTitle: 'Continuous Integration',
    moduleColor: '#6366F1',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ci-004',
    title: 'Dependency Caching Strategy',
    content: `Design an optimal dependency caching strategy for a Harness CI pipeline running {{build_tool}} builds for {{project_name}}.

Current build time: {{dep_download_time}} min (deps) + {{compile_time}} min (compile) + {{test_time}} min (tests)

Goals:
1. Cache {{build_tool}} dependencies using the Harness cache step with key based on {{cache_key_source}}
2. Set up separate caches: dependencies, build outputs, test results
3. Configure cache TTL of {{cache_ttl}} days with fallback cache strategy
4. Handle cache invalidation when {{cache_key_source}} changes

Storage backend: {{cache_storage}} | Expected cache size: {{cache_size}} GB

Provide the complete Harness YAML cache step configuration and explain the caching strategy.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., microservices-monorepo', type: 'text' },
      { id: 'v2', name: 'build_tool', label: 'Build Tool', placeholder: 'Select build tool', type: 'dropdown', options: ['Maven', 'Gradle', 'npm', 'yarn', 'pnpm', 'pip', 'Go modules', 'Cargo'] },
      { id: 'v3', name: 'dep_download_time', label: 'Dep Download Time (mins)', placeholder: 'e.g., 8', type: 'text' },
      { id: 'v4', name: 'compile_time', label: 'Compile Time (mins)', placeholder: 'e.g., 12', type: 'text' },
      { id: 'v5', name: 'test_time', label: 'Test Time (mins)', placeholder: 'e.g., 25', type: 'text' },
      { id: 'v6', name: 'cache_key_source', label: 'Cache Key Source', placeholder: 'e.g., package-lock.json, pom.xml', type: 'text' },
      { id: 'v7', name: 'cache_ttl', label: 'Cache TTL (days)', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v8', name: 'cache_storage', label: 'Cache Storage', placeholder: 'Select storage', type: 'dropdown', options: ['Harness Cache', 'S3', 'GCS', 'Azure Blob'] },
      { id: 'v9', name: 'cache_size', label: 'Expected Cache Size (GB)', placeholder: 'e.g., 2.5', type: 'text' },
    ],
    tags: ['caching', 'optimization', 'build-speed', 'dependencies'],
    subUseCaseId: 'ci-caching',
    subUseCaseTitle: 'Dependency Caching',
    useCaseId: 'ci-optimization',
    useCaseTitle: 'Build Optimization',
    moduleId: 'ci',
    moduleTitle: 'Continuous Integration',
    moduleColor: '#6366F1',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── CD: Deployment Strategies ──────────────────────────────────────────────
  {
    id: 'cd-001',
    title: 'Canary Deployment Strategy',
    content: `Design a canary deployment strategy for {{service_name}} in Harness CD.

Service: {{service_name}} | Environment: {{environment}} | New Version: {{new_version}}

Canary Rollout Plan:
1. Initial canary: {{initial_canary_percent}}% of traffic
2. Validation period: {{validation_period}} minutes at each stage
3. Progressive increase: {{initial_canary_percent}}% → 25% → 50% → 100%
4. Automated validation using: {{validation_type}}

Rollback Conditions (automated):
- Error rate exceeds {{error_threshold}}%
- P99 latency exceeds {{latency_threshold}}ms
- Failed health checks on 3 consecutive attempts

Infrastructure: {{infrastructure_type}} | Metrics: {{metrics_provider}}

Include:
- Harness pipeline YAML with canary stage and Continuous Verification (CV)
- Automated rollback trigger configuration
- Notification setup for each phase transition`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v2', name: 'environment', label: 'Target Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Production', 'Staging', 'QA', 'UAT'] },
      { id: 'v3', name: 'new_version', label: 'New Version', placeholder: 'e.g., v2.4.0', type: 'text' },
      { id: 'v4', name: 'initial_canary_percent', label: 'Initial Canary %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v5', name: 'validation_period', label: 'Validation Period (mins)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v6', name: 'validation_type', label: 'Validation Type', placeholder: 'Select type', type: 'dropdown', options: ['Prometheus metrics', 'Datadog APM', 'New Relic', 'Dynatrace', 'CloudWatch', 'Manual approval'] },
      { id: 'v7', name: 'error_threshold', label: 'Error Rate Threshold %', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v8', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 500', type: 'text' },
      { id: 'v9', name: 'infrastructure_type', label: 'Infrastructure', placeholder: 'Select infrastructure', type: 'dropdown', options: ['Kubernetes', 'ECS', 'EC2', 'Lambda', 'GKE', 'AKS'] },
      { id: 'v10', name: 'metrics_provider', label: 'Metrics Provider', placeholder: 'Select provider', type: 'dropdown', options: ['Prometheus', 'Datadog', 'New Relic', 'Dynatrace', 'CloudWatch', 'AppDynamics'] },
    ],
    tags: ['canary', 'deployment', 'rollout', 'verification', 'kubernetes'],
    subUseCaseId: 'cd-canary',
    subUseCaseTitle: 'Canary Deployment',
    useCaseId: 'cd-deployment-strategies',
    useCaseTitle: 'Deployment Strategies',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery & GitOps',
    moduleColor: '#10B981',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'cd-002',
    title: 'Blue-Green Deployment Pipeline',
    content: `Create a blue-green deployment pipeline for {{application_name}} using Harness CD.

Kubernetes Namespace: {{namespace}} | Active: {{active_color}} | New Version: {{new_version}}

Blue-Green Configuration:
1. Deploy {{new_version}} to the inactive environment
2. Run post-deployment smoke tests
3. Switch traffic using {{traffic_switch_method}}
4. Wait {{rollback_window}} minutes before decommissioning old environment
5. On failure: automatically revert traffic to {{active_color}}

Services: {{services_list}}
Load Balancer: {{load_balancer_type}} | Health endpoint: {{health_endpoint}}
Require manual approval before final cutover: {{require_approval}}`,
    variables: [
      { id: 'v1', name: 'application_name', label: 'Application Name', placeholder: 'e.g., order-management-app', type: 'text' },
      { id: 'v2', name: 'namespace', label: 'Kubernetes Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v3', name: 'active_color', label: 'Currently Active Color', placeholder: 'Select', type: 'dropdown', options: ['Blue', 'Green'], defaultValue: 'Blue' },
      { id: 'v4', name: 'new_version', label: 'New Version to Deploy', placeholder: 'e.g., v3.1.0', type: 'text' },
      { id: 'v5', name: 'traffic_switch_method', label: 'Traffic Switch Method', placeholder: 'Select method', type: 'dropdown', options: ['Kubernetes Service selector', 'Ingress annotation', 'AWS ALB weighted routing', 'Istio VirtualService'] },
      { id: 'v6', name: 'rollback_window', label: 'Rollback Window (mins)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v7', name: 'services_list', label: 'Services to Deploy', placeholder: 'e.g., api-server, worker, scheduler', type: 'textarea' },
      { id: 'v8', name: 'load_balancer_type', label: 'Load Balancer Type', placeholder: 'Select LB', type: 'dropdown', options: ['AWS ALB', 'GCP Load Balancer', 'Azure Load Balancer', 'NGINX Ingress', 'Istio'] },
      { id: 'v9', name: 'health_endpoint', label: 'Health Check Endpoint', placeholder: 'e.g., /health/ready', type: 'text', defaultValue: '/health' },
      { id: 'v10', name: 'require_approval', label: 'Require Manual Approval', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
    ],
    tags: ['blue-green', 'deployment', 'zero-downtime', 'kubernetes', 'traffic'],
    subUseCaseId: 'cd-blue-green',
    subUseCaseTitle: 'Blue-Green Deployment',
    useCaseId: 'cd-deployment-strategies',
    useCaseTitle: 'Deployment Strategies',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery & GitOps',
    moduleColor: '#10B981',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'cd-003',
    title: 'Kubernetes Deployment with Probes & CV',
    content: `Configure a Harness CD pipeline to deploy {{service_name}} to Kubernetes with health validation and Continuous Verification.

Image: {{image_name}}:{{image_tag}} | Namespace: {{namespace}} | Replicas: {{replica_count}}

Health Check Configuration:
- Readiness probe: GET {{readiness_endpoint}} every 10s, timeout 5s, failure threshold 3
- Liveness probe: GET {{liveness_endpoint}} every 30s, failure threshold 3
- Rolling update: maxUnavailable={{max_unavailable}}, maxSurge={{max_surge}}

Resource requests: CPU {{cpu_request}} / Memory {{memory_request}}
Resource limits: CPU {{cpu_limit}} / Memory {{memory_limit}}

Post-deployment CV:
- Run smoke test against {{smoke_test_url}}
- Verify no error spike in {{apm_tool}} for {{verification_duration}} minutes
- Auto-rollback if error rate exceeds baseline`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., product-catalog', type: 'text' },
      { id: 'v2', name: 'image_name', label: 'Docker Image Name', placeholder: 'e.g., myorg/product-catalog', type: 'text' },
      { id: 'v3', name: 'image_tag', label: 'Image Tag', placeholder: 'e.g., v1.5.2', type: 'text' },
      { id: 'v4', name: 'namespace', label: 'Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v5', name: 'replica_count', label: 'Replica Count', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v6', name: 'readiness_endpoint', label: 'Readiness Endpoint', placeholder: 'e.g., /health/ready', type: 'text', defaultValue: '/health/ready' },
      { id: 'v7', name: 'liveness_endpoint', label: 'Liveness Endpoint', placeholder: 'e.g., /health/live', type: 'text', defaultValue: '/health/live' },
      { id: 'v8', name: 'max_unavailable', label: 'maxUnavailable', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v9', name: 'max_surge', label: 'maxSurge', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v10', name: 'cpu_request', label: 'CPU Request', placeholder: 'e.g., 250m', type: 'text', defaultValue: '250m' },
      { id: 'v11', name: 'memory_request', label: 'Memory Request', placeholder: 'e.g., 512Mi', type: 'text', defaultValue: '512Mi' },
      { id: 'v12', name: 'cpu_limit', label: 'CPU Limit', placeholder: 'e.g., 1000m', type: 'text', defaultValue: '1000m' },
      { id: 'v13', name: 'memory_limit', label: 'Memory Limit', placeholder: 'e.g., 1Gi', type: 'text', defaultValue: '1Gi' },
      { id: 'v14', name: 'smoke_test_url', label: 'Smoke Test URL', placeholder: 'e.g., https://api.prod.example.com/ping', type: 'text' },
      { id: 'v15', name: 'apm_tool', label: 'APM Tool', placeholder: 'Select APM', type: 'dropdown', options: ['Datadog', 'New Relic', 'Dynatrace', 'Prometheus/Grafana', 'AppDynamics'] },
      { id: 'v16', name: 'verification_duration', label: 'Verification Duration (mins)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
    ],
    tags: ['kubernetes', 'health-checks', 'rolling-update', 'probes', 'verification'],
    subUseCaseId: 'cd-k8s-service',
    subUseCaseTitle: 'Kubernetes Service Deployment',
    useCaseId: 'cd-kubernetes',
    useCaseTitle: 'Kubernetes Deployment',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery & GitOps',
    moduleColor: '#10B981',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── FME: Feature Management & Experimentation ──────────────────────────────
  {
    id: 'ff-001',
    title: 'Progressive Feature Rollout Strategy',
    content: `Design a progressive rollout strategy in Harness Feature Management for {{feature_name}}.

Feature: {{feature_name}} | Risk Level: {{risk_level}}
Description: {{feature_description}}

Rollout Phases:
- Phase 1 (Day 1): Internal users and beta testers — 100% of internal group
- Phase 2 (Day {{phase2_day}}): {{beta_criteria}} — {{phase2_percent}}% of eligible users
  Success criteria: {{phase2_success_criteria}}
- Phase 3 (Day {{phase3_day}}): {{phase3_percent}}% — monitor {{monitoring_metrics}}
- Phase 4 (Day {{phase4_day}}): 100% full release; keep kill switch for {{killswitch_days}} days

Targeting Rules:
- Include: {{include_attributes}}
- Exclude: {{exclude_attributes}}
- Environments: {{environments}}

Provide the Harness FME SDK integration example in {{sdk_language}}.`,
    variables: [
      { id: 'v1', name: 'feature_name', label: 'Feature Name', placeholder: 'e.g., new-checkout-flow', type: 'text' },
      { id: 'v2', name: 'feature_description', label: 'Feature Description', placeholder: 'Brief description of the feature', type: 'textarea' },
      { id: 'v3', name: 'risk_level', label: 'Risk Level', placeholder: 'Select risk', type: 'dropdown', options: ['Low', 'Medium', 'High', 'Critical'] },
      { id: 'v4', name: 'phase2_day', label: 'Phase 2 Start (Day)', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v5', name: 'beta_criteria', label: 'Beta Target Criteria', placeholder: 'e.g., users with beta_tester=true', type: 'text' },
      { id: 'v6', name: 'phase2_percent', label: 'Phase 2 Percentage', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v7', name: 'phase2_success_criteria', label: 'Phase 2 Success Criteria', placeholder: 'e.g., error rate < 0.5%', type: 'textarea' },
      { id: 'v8', name: 'phase3_day', label: 'Phase 3 Start (Day)', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v9', name: 'phase3_percent', label: 'Phase 3 Percentage', placeholder: 'e.g., 50', type: 'text', defaultValue: '50' },
      { id: 'v10', name: 'phase4_day', label: 'Phase 4 Start (Day)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v11', name: 'monitoring_metrics', label: 'Monitoring Metrics', placeholder: 'e.g., conversion rate, error rate', type: 'text' },
      { id: 'v12', name: 'killswitch_days', label: 'Kill Switch Retention (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v13', name: 'include_attributes', label: 'Include Attributes', placeholder: 'e.g., country=US, plan=enterprise', type: 'text' },
      { id: 'v14', name: 'exclude_attributes', label: 'Exclude Attributes', placeholder: 'e.g., account_type=trial', type: 'text' },
      { id: 'v15', name: 'environments', label: 'Environments', placeholder: 'Select environment', type: 'dropdown', options: ['Production only', 'Staging + Production', 'All environments'] },
      { id: 'v16', name: 'sdk_language', label: 'SDK Language', placeholder: 'Select language', type: 'dropdown', options: ['JavaScript', 'Python', 'Java', 'Go', 'Ruby', 'React', 'Node.js'] },
    ],
    tags: ['feature-flags', 'rollout', 'targeting', 'progressive', 'sdk'],
    subUseCaseId: 'ff-progressive-rollout',
    subUseCaseTitle: 'Progressive Rollout',
    useCaseId: 'ff-flag-management',
    useCaseTitle: 'Flag Management',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-002',
    title: 'A/B Testing Experiment Configuration',
    content: `Configure a Harness FME flag for A/B testing {{experiment_name}} to measure {{metric_to_optimize}}.

Hypothesis: {{hypothesis}}
Control (A): {{control_description}} — 50% of users
Treatment (B): {{treatment_description}} — 50% of users

Targeting: {{target_segment}}
Minimum sample size: {{min_sample_size}} per variant
Statistical significance: {{significance_threshold}}% | MDE: {{min_detectable_effect}}%
Duration: {{experiment_duration}} days

Analytics platform: {{analytics_platform}}
Events to track: {{events_to_track}}

Provide:
1. FME flag YAML configuration
2. SDK code in {{sdk_language}} showing user bucketing and event tracking
3. Recommendation on when to conclude the experiment`,
    variables: [
      { id: 'v1', name: 'experiment_name', label: 'Experiment Name', placeholder: 'e.g., checkout-button-color-test', type: 'text' },
      { id: 'v2', name: 'hypothesis', label: 'Hypothesis', placeholder: 'e.g., Green CTA increases conversions by 5%', type: 'textarea' },
      { id: 'v3', name: 'metric_to_optimize', label: 'Primary Metric', placeholder: 'e.g., checkout conversion rate', type: 'text' },
      { id: 'v4', name: 'control_description', label: 'Control (A) Description', placeholder: 'e.g., Blue CTA, existing flow', type: 'text' },
      { id: 'v5', name: 'treatment_description', label: 'Treatment (B) Description', placeholder: 'e.g., Green CTA, redesigned flow', type: 'text' },
      { id: 'v6', name: 'target_segment', label: 'Target Segment', placeholder: 'e.g., logged-in users in US/CA/UK', type: 'text' },
      { id: 'v7', name: 'min_sample_size', label: 'Min Sample Size / Variant', placeholder: 'e.g., 5000', type: 'text' },
      { id: 'v8', name: 'significance_threshold', label: 'Statistical Significance %', placeholder: 'e.g., 95', type: 'text', defaultValue: '95' },
      { id: 'v9', name: 'min_detectable_effect', label: 'Min Detectable Effect %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v10', name: 'experiment_duration', label: 'Duration (days)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v11', name: 'analytics_platform', label: 'Analytics Platform', placeholder: 'Select platform', type: 'dropdown', options: ['Amplitude', 'Mixpanel', 'Google Analytics', 'Segment', 'Heap', 'Custom'] },
      { id: 'v12', name: 'events_to_track', label: 'Events to Track', placeholder: 'e.g., button_clicked, checkout_started', type: 'text' },
      { id: 'v13', name: 'sdk_language', label: 'SDK Language', placeholder: 'Select language', type: 'dropdown', options: ['JavaScript', 'Python', 'Java', 'Go', 'React', 'Node.js'] },
    ],
    tags: ['a-b-testing', 'experimentation', 'feature-flags', 'analytics', 'conversion'],
    subUseCaseId: 'ff-ab-testing',
    subUseCaseTitle: 'A/B Testing',
    useCaseId: 'ff-flag-management',
    useCaseTitle: 'Flag Management',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── CCM: Cloud Cost Management ─────────────────────────────────────────────
  {
    id: 'ccm-001',
    title: 'Cloud Resource Right-Sizing Analysis',
    content: `Conduct a cloud resource right-sizing analysis for {{organization_name}} using Harness CCM.

Cloud Provider: {{cloud_provider}} | Account: {{account_name}} | Analysis Period: {{analysis_period}} days
Savings Goal: {{savings_goal}}%

Resources to Analyze: {{instance_types}} compute + {{database_services}} databases + Kubernetes node pools

Right-Sizing Criteria:
- Flag instances with < {{cpu_threshold}}% average CPU utilization
- Flag instances with < {{memory_threshold}}% average memory utilization
- Minimum observation period: {{observation_period}} days
- Terminate instances with < {{idle_threshold}}% utilization
- Convert suitable workloads from On-Demand to {{saving_type}}

Output:
1. Executive summary with projected annual savings
2. Prioritized right-sizing opportunities
3. Kubernetes cluster optimization recommendations
4. Implementation roadmap with risk assessment`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp Engineering', type: 'text' },
      { id: 'v2', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Google Cloud', 'Azure', 'Multi-cloud (AWS + GCP)', 'Multi-cloud (AWS + Azure)', 'All three'] },
      { id: 'v3', name: 'account_name', label: 'Account/Project Name', placeholder: 'e.g., production-aws-account', type: 'text' },
      { id: 'v4', name: 'analysis_period', label: 'Analysis Period (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v5', name: 'savings_goal', label: 'Savings Goal %', placeholder: 'e.g., 20', type: 'text' },
      { id: 'v6', name: 'instance_types', label: 'Instance Types in Use', placeholder: 'e.g., EC2 m5.xlarge, t3.large', type: 'text' },
      { id: 'v7', name: 'database_services', label: 'Database Services', placeholder: 'e.g., RDS PostgreSQL, ElastiCache Redis', type: 'text' },
      { id: 'v8', name: 'cpu_threshold', label: 'CPU Threshold %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v9', name: 'memory_threshold', label: 'Memory Threshold %', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v10', name: 'observation_period', label: 'Min Observation Period (days)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v11', name: 'idle_threshold', label: 'Idle Instance Threshold %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'saving_type', label: 'Saving Instrument', placeholder: 'Select type', type: 'dropdown', options: ['Reserved Instances', 'Savings Plans', 'Committed Use Discounts', 'Spot Instances'] },
    ],
    tags: ['cost-optimization', 'right-sizing', 'cloud-cost', 'aws', 'kubernetes'],
    subUseCaseId: 'ccm-right-sizing',
    subUseCaseTitle: 'Resource Right-Sizing',
    useCaseId: 'ccm-cost-optimization',
    useCaseTitle: 'Cost Optimization',
    moduleId: 'ccm',
    moduleTitle: 'Cloud Cost Management',
    moduleColor: '#EF4444',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ccm-002',
    title: 'Cloud Budget Alert Configuration',
    content: `Configure cloud budget alerts in Harness CCM for {{team_or_project}}.

Monthly budget: \${{monthly_budget}} | Period: {{budget_period}}
Cloud accounts: {{cloud_accounts}}

Alert Thresholds:
1. Warning at {{warning_threshold}}% → notify {{warning_recipients}}
2. Critical at {{critical_threshold}}% → notify {{critical_recipients}} + open Jira ticket
3. Budget exhausted (100%) → notify {{escalation_recipients}} + page on-call

Forecasting:
- Alert when forecast exceeds budget by {{forecast_threshold}}%
- Lookback period: {{lookback_period}} days

Cost Anomaly Detection:
- Detect day-over-day spend increase > {{anomaly_threshold}}%
- Minimum anomaly amount: \${{min_anomaly_amount}}
- Notify: {{anomaly_notification_channel}}

Environment split: {{env_budget_split}} (e.g., prod: 70%, staging: 20%, dev: 10%)`,
    variables: [
      { id: 'v1', name: 'team_or_project', label: 'Team / Project', placeholder: 'e.g., Platform Engineering Team', type: 'text' },
      { id: 'v2', name: 'monthly_budget', label: 'Monthly Budget ($)', placeholder: 'e.g., 50000', type: 'text' },
      { id: 'v3', name: 'budget_period', label: 'Budget Period', placeholder: 'Select period', type: 'dropdown', options: ['Monthly', 'Quarterly', 'Annual'] },
      { id: 'v4', name: 'cloud_accounts', label: 'Cloud Accounts', placeholder: 'e.g., prod-aws-123456, staging-aws-789', type: 'text' },
      { id: 'v5', name: 'warning_threshold', label: 'Warning Threshold %', placeholder: 'e.g., 75', type: 'text', defaultValue: '75' },
      { id: 'v6', name: 'critical_threshold', label: 'Critical Threshold %', placeholder: 'e.g., 90', type: 'text', defaultValue: '90' },
      { id: 'v7', name: 'warning_recipients', label: 'Warning Recipients', placeholder: 'e.g., #cloud-costs Slack channel', type: 'text' },
      { id: 'v8', name: 'critical_recipients', label: 'Critical Recipients', placeholder: 'e.g., team leads + finance manager', type: 'text' },
      { id: 'v9', name: 'escalation_recipients', label: 'Escalation Recipients', placeholder: 'e.g., VP Engineering + CTO', type: 'text' },
      { id: 'v10', name: 'forecast_threshold', label: 'Forecast Exceed Threshold %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v11', name: 'lookback_period', label: 'Forecast Lookback (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v12', name: 'anomaly_threshold', label: 'Anomaly Threshold %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v13', name: 'min_anomaly_amount', label: 'Min Anomaly Amount ($)', placeholder: 'e.g., 500', type: 'text', defaultValue: '500' },
      { id: 'v14', name: 'anomaly_notification_channel', label: 'Anomaly Notification', placeholder: 'e.g., Slack #alerts', type: 'text' },
      { id: 'v15', name: 'env_budget_split', label: 'Environment Budget Split', placeholder: 'e.g., prod:70%, staging:20%, dev:10%', type: 'text' },
    ],
    tags: ['budget', 'alerts', 'cost-management', 'anomaly-detection'],
    subUseCaseId: 'ccm-budget-alerts',
    subUseCaseTitle: 'Budget Alerts & Thresholds',
    useCaseId: 'ccm-budget',
    useCaseTitle: 'Budget Management',
    moduleId: 'ccm',
    moduleTitle: 'Cloud Cost Management',
    moduleColor: '#EF4444',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── STO: Security Testing ──────────────────────────────────────────────────
  {
    id: 'sto-001',
    title: 'SAST Pipeline Integration',
    content: `Set up Static Application Security Testing (SAST) in a Harness pipeline for {{project_name}}.

Language/Framework: {{language_framework}} | Scanner: {{sast_scanner}}
Scan mode: {{scan_mode}} | Scan categories: {{scan_categories}}

Severity Thresholds (fail pipeline if exceeded):
- Critical: {{critical_threshold}} (0 = fail on any Critical)
- High: {{high_threshold}}
- Medium: {{medium_threshold}} (use "ignore" to not block)

OPA Policy:
- Block on: {{block_on_categories}}
- Exempt: {{exempt_cves}} (known false positives with ticket refs)

Reporting:
- Publish to Harness STO dashboard
- Deduplication against: {{dedup_baseline}}
- Notify {{notification_channel}} with scan summary

Include the complete Harness STO YAML step configuration.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'language_framework', label: 'Language / Framework', placeholder: 'e.g., Java Spring Boot', type: 'text' },
      { id: 'v3', name: 'sast_scanner', label: 'SAST Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['SonarQube', 'Semgrep', 'Checkmarx', 'Veracode', 'Snyk Code', 'Bandit (Python)', 'CodeQL'] },
      { id: 'v4', name: 'scan_mode', label: 'Scan Mode', placeholder: 'Select mode', type: 'dropdown', options: ['Orchestration (Harness runs scanner)', 'Ingestion (import existing results)'] },
      { id: 'v5', name: 'scan_categories', label: 'Scan Categories', placeholder: 'e.g., OWASP Top 10, secrets', type: 'text' },
      { id: 'v6', name: 'critical_threshold', label: 'Critical Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v7', name: 'high_threshold', label: 'High Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v8', name: 'medium_threshold', label: 'Medium Threshold', placeholder: 'e.g., 5 or ignore', type: 'text', defaultValue: 'ignore' },
      { id: 'v9', name: 'block_on_categories', label: 'Block On Categories', placeholder: 'e.g., Injection, Broken Authentication', type: 'text' },
      { id: 'v10', name: 'exempt_cves', label: 'Exempt CVEs', placeholder: 'e.g., CVE-2023-1234 (JIRA-456 - false positive)', type: 'textarea' },
      { id: 'v11', name: 'dedup_baseline', label: 'Deduplication Baseline', placeholder: 'Select baseline', type: 'dropdown', options: ['Target branch (main)', 'Latest scan results'] },
      { id: 'v12', name: 'notification_channel', label: 'Notification Channel', placeholder: 'e.g., Slack #security-alerts', type: 'text' },
    ],
    tags: ['sast', 'security', 'static-analysis', 'owasp', 'pipeline'],
    subUseCaseId: 'sto-sast',
    subUseCaseTitle: 'SAST Integration',
    useCaseId: 'sto-scanning',
    useCaseTitle: 'Security Scanning',
    moduleId: 'sto',
    moduleTitle: 'Security Testing Orchestration',
    moduleColor: '#8B5CF6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'sto-002',
    title: 'Container Image Vulnerability Scan',
    content: `Configure a container image vulnerability scanning step in Harness STO for {{service_name}}.

Image: {{image_name}}:{{image_tag}} | Base: {{base_image}} | Registry: {{registry}}
Scanner: {{scanner}}

Vulnerability Thresholds:
- CRITICAL: Block if > {{critical_count}} found (0 = zero tolerance)
- HIGH: Block if > {{high_count}} found
- MEDIUM/LOW: Warn only

CVE Exceptions (with business justification):
{{cve_exceptions}}

License Compliance:
- Blocked licenses: {{blocked_licenses}}
- Restricted (require approval): {{restricted_licenses}}

Scan Options:
- Scan secrets in image layers: {{scan_secrets}}
- Generate SBOM: {{generate_sbom}} (Format: {{sbom_format}})
- Upload results to Harness STO dashboard: Yes`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., api-gateway', type: 'text' },
      { id: 'v2', name: 'image_name', label: 'Image Name', placeholder: 'e.g., myorg/api-gateway', type: 'text' },
      { id: 'v3', name: 'image_tag', label: 'Image Tag', placeholder: 'e.g., v2.1.0', type: 'text', defaultValue: 'latest' },
      { id: 'v4', name: 'base_image', label: 'Base Image', placeholder: 'e.g., node:20-alpine', type: 'text' },
      { id: 'v5', name: 'registry', label: 'Container Registry', placeholder: 'Select registry', type: 'dropdown', options: ['Amazon ECR', 'Docker Hub', 'Google Container Registry', 'Azure Container Registry'] },
      { id: 'v6', name: 'scanner', label: 'Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['Aqua Trivy', 'Grype', 'Snyk Container', 'Prisma Cloud', 'Anchore Engine'] },
      { id: 'v7', name: 'critical_count', label: 'Critical Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v8', name: 'high_count', label: 'High Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v9', name: 'cve_exceptions', label: 'CVE Exceptions', placeholder: 'e.g., CVE-2023-5678: JIRA-123 (no fix available)', type: 'textarea' },
      { id: 'v10', name: 'blocked_licenses', label: 'Blocked Licenses', placeholder: 'e.g., GPL-3.0, AGPL-3.0', type: 'text' },
      { id: 'v11', name: 'restricted_licenses', label: 'Restricted Licenses', placeholder: 'e.g., LGPL-2.0', type: 'text' },
      { id: 'v12', name: 'scan_secrets', label: 'Scan for Secrets in Layers', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
      { id: 'v13', name: 'generate_sbom', label: 'Generate SBOM', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
      { id: 'v14', name: 'sbom_format', label: 'SBOM Format', placeholder: 'Select format', type: 'dropdown', options: ['SPDX', 'CycloneDX', 'Syft JSON'] },
    ],
    tags: ['container', 'vulnerability-scan', 'sbom', 'trivy', 'docker'],
    subUseCaseId: 'sto-container',
    subUseCaseTitle: 'Container Image Scanning',
    useCaseId: 'sto-scanning',
    useCaseTitle: 'Security Scanning',
    moduleId: 'sto',
    moduleTitle: 'Security Testing Orchestration',
    moduleColor: '#8B5CF6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── CE: Chaos Engineering ──────────────────────────────────────────────────
  {
    id: 'ce-001',
    title: 'Kubernetes Pod Failure Experiment',
    content: `Design a Harness Chaos Engineering experiment to test {{service_name}} resilience against pod failures.

Target: {{service_name}} in namespace {{namespace}} | Environment: {{environment}}

Experiment Configuration:
- Chaos type: Pod Delete | Pod selector: {{pod_selector}}
- Kill count: {{kill_count}} pods | Sequence: {{sequence}}
- Duration: {{experiment_duration}} seconds

Steady State Hypothesis:
- Availability: {{availability_threshold}}% requests succeed
- P99 latency: < {{latency_threshold}}ms
- Health check: {{health_endpoint}} returns 200

Probes (continuous validation during chaos):
1. HTTP probe: GET {{health_endpoint}} every {{probe_interval}}s
2. Prometheus probe: {{prometheus_query}} > {{prometheus_threshold}}

Expected behavior: {{expected_behavior}}

Recovery: Service recovers within {{recovery_time}}s of experiment end
Pre-chaos check: Minimum {{min_replicas}} replicas running
Schedule: {{schedule}} as part of {{game_day_name}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., order-processor', type: 'text' },
      { id: 'v2', name: 'namespace', label: 'Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v3', name: 'environment', label: 'Environment', placeholder: 'Select', type: 'dropdown', options: ['Production', 'Staging', 'QA'] },
      { id: 'v4', name: 'pod_selector', label: 'Pod Label Selector', placeholder: 'e.g., app=order-processor', type: 'text' },
      { id: 'v5', name: 'kill_count', label: 'Kill Count (pods)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v6', name: 'sequence', label: 'Kill Sequence', placeholder: 'Select', type: 'dropdown', options: ['random', 'sequential'] },
      { id: 'v7', name: 'experiment_duration', label: 'Duration (seconds)', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v8', name: 'availability_threshold', label: 'Availability Threshold %', placeholder: 'e.g., 99', type: 'text', defaultValue: '99' },
      { id: 'v9', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 500', type: 'text' },
      { id: 'v10', name: 'health_endpoint', label: 'Health Endpoint', placeholder: 'e.g., https://service.internal/health', type: 'text' },
      { id: 'v11', name: 'probe_interval', label: 'Probe Interval (seconds)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'prometheus_query', label: 'Prometheus Query', placeholder: 'e.g., sum(rate(http_requests_total{status=~"2.."}[1m]))', type: 'text' },
      { id: 'v13', name: 'prometheus_threshold', label: 'Prometheus Threshold', placeholder: 'e.g., 0.95', type: 'text' },
      { id: 'v14', name: 'expected_behavior', label: 'Expected Behavior', placeholder: 'e.g., Circuit breaker activates, cached responses served', type: 'textarea' },
      { id: 'v15', name: 'recovery_time', label: 'Recovery Time (seconds)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v16', name: 'min_replicas', label: 'Min Replicas Before Chaos', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v17', name: 'schedule', label: 'Schedule', placeholder: 'e.g., weekly Tuesdays 2am', type: 'text' },
      { id: 'v18', name: 'game_day_name', label: 'GameDay Name', placeholder: 'e.g., Q1 Resilience GameDay', type: 'text' },
    ],
    tags: ['chaos-engineering', 'pod-failure', 'kubernetes', 'resilience', 'gameday'],
    subUseCaseId: 'ce-pod-failure',
    subUseCaseTitle: 'Pod Failure Testing',
    useCaseId: 'ce-experiments',
    useCaseTitle: 'Chaos Experiments',
    moduleId: 'ce',
    moduleTitle: 'Chaos Engineering',
    moduleColor: '#EC4899',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ce-002',
    title: 'Network Latency & Packet Loss Simulation',
    content: `Create a Harness Chaos Engineering experiment to simulate network degradation for {{service_name}}.

Target: {{service_name}} pods (selector: {{pod_selector}}) in namespace {{namespace}}

Network Chaos Configuration:
- Experiment type: {{chaos_type}}
- Latency injection: {{latency_ms}}ms additional delay
- Packet loss: {{packet_loss_percent}}%
- Target interfaces: {{network_interfaces}}
- Duration: {{experiment_duration}} seconds

Steady State Hypothesis:
- Service remains available with degraded-but-acceptable performance
- P99 latency < {{max_acceptable_latency}}ms (accounting for injected delay)
- Error rate < {{max_error_rate}}%

Validation probes during experiment:
- HTTP availability check every {{probe_interval}}s
- Check circuit breaker behavior: {{circuit_breaker_check}}
- Verify fallback mechanism: {{fallback_behavior}}

Recovery validation: All metrics return to baseline within {{recovery_time}}s`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'pod_selector', label: 'Pod Label Selector', placeholder: 'e.g., app=payment-service', type: 'text' },
      { id: 'v3', name: 'namespace', label: 'Namespace', placeholder: 'e.g., staging', type: 'text' },
      { id: 'v4', name: 'chaos_type', label: 'Chaos Type', placeholder: 'Select type', type: 'dropdown', options: ['Network Latency', 'Packet Loss', 'Network Corruption', 'Network Duplication', 'Combined (Latency + Loss)'] },
      { id: 'v5', name: 'latency_ms', label: 'Latency Injection (ms)', placeholder: 'e.g., 200', type: 'text', defaultValue: '200' },
      { id: 'v6', name: 'packet_loss_percent', label: 'Packet Loss %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v7', name: 'network_interfaces', label: 'Network Interfaces', placeholder: 'e.g., eth0', type: 'text', defaultValue: 'eth0' },
      { id: 'v8', name: 'experiment_duration', label: 'Duration (seconds)', placeholder: 'e.g., 120', type: 'text', defaultValue: '120' },
      { id: 'v9', name: 'max_acceptable_latency', label: 'Max Acceptable Latency (ms)', placeholder: 'e.g., 1000', type: 'text' },
      { id: 'v10', name: 'max_error_rate', label: 'Max Error Rate %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v11', name: 'probe_interval', label: 'Probe Interval (seconds)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'circuit_breaker_check', label: 'Circuit Breaker Check', placeholder: 'e.g., verify Hystrix/Resilience4j trips at 50% errors', type: 'text' },
      { id: 'v13', name: 'fallback_behavior', label: 'Expected Fallback Behavior', placeholder: 'e.g., serve cached responses, degrade gracefully', type: 'textarea' },
      { id: 'v14', name: 'recovery_time', label: 'Recovery Time (seconds)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
    ],
    tags: ['chaos-engineering', 'network-chaos', 'latency', 'resilience', 'circuit-breaker'],
    subUseCaseId: 'ce-network-chaos',
    subUseCaseTitle: 'Network Chaos Simulation',
    useCaseId: 'ce-experiments',
    useCaseTitle: 'Chaos Experiments',
    moduleId: 'ce',
    moduleTitle: 'Chaos Engineering',
    moduleColor: '#EC4899',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── SRM: Service Reliability Management ───────────────────────────────────
  {
    id: 'srm-001',
    title: 'Service SLO Definition & Configuration',
    content: `Define and configure Service Level Objectives (SLOs) for {{service_name}} in Harness SRM.

Service: {{service_name}} | Tier: {{service_tier}} | Health Sources: {{health_sources}}

SLO Configuration:

1. Availability SLO:
   - Target: {{availability_target}}% over {{rolling_window}}-day rolling window
   - SLI type: {{availability_sli_type}}
   - Good event: {{good_event_definition}} | Valid event: {{valid_event_definition}}

2. Latency SLO:
   - Target: {{latency_target}}% of requests < {{latency_threshold}}ms
   - Metric: {{latency_metric}}

3. Error Rate SLO:
   - Target: Error rate < {{error_rate_target}}%
   - Error definition: {{error_definition}}

Error Budget Alerting:
- Page on-call when budget remaining < {{page_threshold}}%
- Warn team when < {{warn_threshold}}%
- Burn rate alert: {{budget_burn_rate}}x burn rate over {{burn_rate_window}}h
- Channels: {{notification_channels}}

Weekly SLO report to: {{report_recipients}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-gateway', type: 'text' },
      { id: 'v2', name: 'service_tier', label: 'Service Tier', placeholder: 'Select tier', type: 'dropdown', options: ['Tier 1 (Business Critical)', 'Tier 2 (Important)', 'Tier 3 (Non-critical)'] },
      { id: 'v3', name: 'health_sources', label: 'Health Sources', placeholder: 'e.g., Datadog, Prometheus', type: 'text' },
      { id: 'v4', name: 'availability_target', label: 'Availability Target %', placeholder: 'e.g., 99.9', type: 'text', defaultValue: '99.9' },
      { id: 'v5', name: 'rolling_window', label: 'Rolling Window (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v6', name: 'availability_sli_type', label: 'Availability SLI Type', placeholder: 'Select type', type: 'dropdown', options: ['Ratio-based (good/total requests)', 'Window-based (% of time healthy)'] },
      { id: 'v7', name: 'good_event_definition', label: 'Good Event Definition', placeholder: 'e.g., HTTP 2xx/3xx responses', type: 'text' },
      { id: 'v8', name: 'valid_event_definition', label: 'Valid Event Definition', placeholder: 'e.g., All HTTP requests except health checks', type: 'text' },
      { id: 'v9', name: 'latency_target', label: 'Latency SLO Target %', placeholder: 'e.g., 95', type: 'text', defaultValue: '95' },
      { id: 'v10', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 200', type: 'text' },
      { id: 'v11', name: 'latency_metric', label: 'Latency Metric', placeholder: 'e.g., http_request_duration_seconds p95', type: 'text' },
      { id: 'v12', name: 'error_rate_target', label: 'Error Rate Target %', placeholder: 'e.g., 0.1', type: 'text', defaultValue: '0.1' },
      { id: 'v13', name: 'error_definition', label: 'Error Definition', placeholder: 'e.g., HTTP 5xx responses', type: 'text' },
      { id: 'v14', name: 'page_threshold', label: 'Page On-Call Threshold %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v15', name: 'warn_threshold', label: 'Warning Threshold %', placeholder: 'e.g., 25', type: 'text', defaultValue: '25' },
      { id: 'v16', name: 'budget_burn_rate', label: 'Burn Rate Multiplier', placeholder: 'e.g., 14.4', type: 'text', defaultValue: '14.4' },
      { id: 'v17', name: 'burn_rate_window', label: 'Burn Rate Window (hours)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v18', name: 'notification_channels', label: 'Notification Channels', placeholder: 'e.g., PagerDuty, Slack #sre-alerts', type: 'text' },
      { id: 'v19', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., sre-team@company.com', type: 'text' },
    ],
    tags: ['slo', 'sli', 'reliability', 'error-budget', 'monitoring'],
    subUseCaseId: 'srm-slo-definition',
    subUseCaseTitle: 'SLO Definition & Configuration',
    useCaseId: 'srm-slo',
    useCaseTitle: 'SLO Management',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability Management',
    moduleColor: '#14B8A6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  // ── IDP: Internal Developer Portal ────────────────────────────────────────
  {
    id: 'idp-001',
    title: 'Service Catalog Microservice Template',
    content: `Design a standardized microservice template for the Harness IDP service catalog for {{team_name}}.

Technology stack: {{tech_stack}}
Service pattern: {{service_pattern}}

Template Components:
1. Application scaffolding: {{tech_stack}} project structure with standard dependencies
2. CI pipeline: build, test, security scan, Docker build & push to {{registry}}
3. CD pipeline: Kubernetes deployment with health probes and Continuous Verification
4. Observability: structured logging ({{log_format}}), Prometheus metrics endpoint, distributed tracing ({{tracing_tool}})
5. Security: secret management via {{secrets_manager}}, authentication middleware template
6. Infrastructure: Kubernetes manifests with resource limits, HPA, and PodDisruptionBudget
7. Documentation: auto-generated README, API spec (OpenAPI 3.0), and architecture decision records

Governance:
- Template versioning with semantic versioning (v{{initial_version}})
- Approval workflow required for template updates: {{approvers}}
- Compliance checks: {{compliance_standards}}

Include the Harness IDP catalog-info.yaml definition and scaffolder template YAML.`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform Engineering', type: 'text' },
      { id: 'v2', name: 'tech_stack', label: 'Technology Stack', placeholder: 'Select stack', type: 'dropdown', options: ['Node.js/Express', 'Java/Spring Boot', 'Python/FastAPI', 'Go/Gin', 'Python/Django', '.NET/ASP.NET Core'] },
      { id: 'v3', name: 'service_pattern', label: 'Service Pattern', placeholder: 'Select pattern', type: 'dropdown', options: ['REST API', 'GraphQL API', 'Event-driven (Kafka)', 'gRPC service', 'Background worker'] },
      { id: 'v4', name: 'registry', label: 'Container Registry', placeholder: 'Select registry', type: 'dropdown', options: ['Amazon ECR', 'Google Container Registry', 'Docker Hub', 'GitHub Container Registry'] },
      { id: 'v5', name: 'log_format', label: 'Log Format', placeholder: 'Select format', type: 'dropdown', options: ['JSON structured', 'Logfmt', 'Standard text'] },
      { id: 'v6', name: 'tracing_tool', label: 'Tracing Tool', placeholder: 'Select tool', type: 'dropdown', options: ['OpenTelemetry + Jaeger', 'Datadog APM', 'AWS X-Ray', 'Zipkin'] },
      { id: 'v7', name: 'secrets_manager', label: 'Secrets Manager', placeholder: 'Select manager', type: 'dropdown', options: ['HashiCorp Vault', 'AWS Secrets Manager', 'GCP Secret Manager', 'Azure Key Vault', 'Harness Secrets'] },
      { id: 'v8', name: 'initial_version', label: 'Initial Template Version', placeholder: 'e.g., 1.0.0', type: 'text', defaultValue: '1.0.0' },
      { id: 'v9', name: 'approvers', label: 'Template Approvers', placeholder: 'e.g., Platform team leads + Security', type: 'text' },
      { id: 'v10', name: 'compliance_standards', label: 'Compliance Standards', placeholder: 'e.g., SOC2, PCI-DSS, HIPAA', type: 'text' },
    ],
    tags: ['idp', 'service-catalog', 'scaffolding', 'templates', 'backstage'],
    subUseCaseId: 'idp-service-catalog',
    subUseCaseTitle: 'Service Catalog Templates',
    useCaseId: 'idp-self-service',
    useCaseTitle: 'Developer Self-Service',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'idp-002',
    title: 'Self-Service Environment Provisioning',
    content: `Design a self-service environment provisioning workflow in Harness IDP for {{environment_type}} environments.

Environment type: {{environment_type}} | Cloud provider: {{cloud_provider}}
Max concurrent environments per developer: {{max_envs_per_dev}}

Provisioning Template:
- Infrastructure: {{infra_tool}} with pre-approved modules for {{cloud_provider}}
- Database: {{database_type}} (seeded with {{data_source}} test data)
- Required services: {{required_services}}
- Resource limits: {{resource_limits}} (CPU/memory cap per environment)

Lifecycle Management:
- Auto-provision on: branch creation / PR opened
- Auto-destroy on: branch deletion / PR merged / {{idle_timeout}} hours of inactivity
- Max lifetime: {{max_lifetime}} hours (extendable with approval)
- Cost cap: \${{cost_cap}} per environment per day

Access Control:
- Creator gets admin access automatically
- Shareable with team members (read-only by default)
- Isolated network: no access to production resources

Notifications: Notify creator in {{notification_channel}} when environment is ready (~{{provision_time}} minutes)`,
    variables: [
      { id: 'v1', name: 'environment_type', label: 'Environment Type', placeholder: 'Select type', type: 'dropdown', options: ['Feature branch environments', 'PR preview environments', 'Developer sandbox', 'Integration test environments'] },
      { id: 'v2', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Google Cloud', 'Azure', 'Multi-cloud'] },
      { id: 'v3', name: 'max_envs_per_dev', label: 'Max Envs Per Developer', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v4', name: 'infra_tool', label: 'Infrastructure Tool', placeholder: 'Select tool', type: 'dropdown', options: ['Terraform', 'Pulumi', 'AWS CDK', 'CloudFormation', 'Harness IaCM'] },
      { id: 'v5', name: 'database_type', label: 'Database Type', placeholder: 'e.g., PostgreSQL 15, MySQL 8', type: 'text' },
      { id: 'v6', name: 'data_source', label: 'Test Data Source', placeholder: 'Select source', type: 'dropdown', options: ['Anonymized production snapshot', 'Synthetic generated data', 'Fixtures from repository', 'Empty with seed scripts'] },
      { id: 'v7', name: 'required_services', label: 'Required Services', placeholder: 'e.g., Redis, Kafka, API mocks', type: 'text' },
      { id: 'v8', name: 'resource_limits', label: 'Resource Limits', placeholder: 'e.g., 4 vCPU, 8GB RAM', type: 'text' },
      { id: 'v9', name: 'idle_timeout', label: 'Idle Timeout (hours)', placeholder: 'e.g., 8', type: 'text', defaultValue: '8' },
      { id: 'v10', name: 'max_lifetime', label: 'Max Lifetime (hours)', placeholder: 'e.g., 72', type: 'text', defaultValue: '72' },
      { id: 'v11', name: 'cost_cap', label: 'Cost Cap Per Day ($)', placeholder: 'e.g., 25', type: 'text' },
      { id: 'v12', name: 'notification_channel', label: 'Notification Channel', placeholder: 'e.g., Slack, Microsoft Teams', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'Email'] },
      { id: 'v13', name: 'provision_time', label: 'Estimated Provision Time (mins)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
    ],
    tags: ['idp', 'self-service', 'environment-provisioning', 'developer-experience', 'ephemeral'],
    subUseCaseId: 'idp-env-provisioning',
    subUseCaseTitle: 'Self-Service Environment Provisioning',
    useCaseId: 'idp-self-service',
    useCaseTitle: 'Developer Self-Service',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'idp-003',
    title: 'Service Health Scorecard Configuration',
    content: `Configure a service health scorecard in Harness IDP for {{service_name}} to track maturity and reliability.

Service: {{service_name}} | Owner: {{service_owner}} | Tier: {{service_tier}}

Scorecard Dimensions and Weights:

1. Reliability ({{reliability_weight}}%):
   - Availability SLO compliance (target: {{availability_target}}%)
   - P99 latency within SLO (target: < {{latency_target}}ms)
   - Error budget remaining > {{budget_threshold}}%

2. Observability ({{observability_weight}}%):
   - Structured logging: Yes/No
   - Prometheus metrics endpoint: Yes/No
   - Distributed tracing instrumented: Yes/No
   - Runbook linked in catalog: Yes/No

3. Security ({{security_weight}}%):
   - No Critical/High vulnerabilities in last scan
   - SBOM generated: Yes/No
   - Secrets not hardcoded (SAST check): Pass/Fail

4. Documentation ({{documentation_weight}}%):
   - README present and updated within {{doc_staleness_days}} days
   - API spec (OpenAPI) present: Yes/No
   - Architecture decision records: Yes/No

5. Operational Readiness ({{ops_weight}}%):
   - On-call rotation configured: Yes/No
   - Incident response runbook: Yes/No
   - Last deployment < {{deployment_staleness_days}} days ago

Health sources: {{health_sources}}
Report cadence: {{report_cadence}} | Stakeholders: {{report_recipients}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-gateway', type: 'text' },
      { id: 'v2', name: 'service_owner', label: 'Service Owner Team', placeholder: 'e.g., Payments Platform Team', type: 'text' },
      { id: 'v3', name: 'service_tier', label: 'Service Tier', placeholder: 'Select tier', type: 'dropdown', options: ['Tier 1 (Business Critical)', 'Tier 2 (Important)', 'Tier 3 (Non-critical)'] },
      { id: 'v4', name: 'reliability_weight', label: 'Reliability Weight %', placeholder: 'e.g., 40', type: 'text', defaultValue: '40' },
      { id: 'v5', name: 'availability_target', label: 'Availability Target %', placeholder: 'e.g., 99.9', type: 'text', defaultValue: '99.9' },
      { id: 'v6', name: 'latency_target', label: 'Latency Target (ms)', placeholder: 'e.g., 200', type: 'text' },
      { id: 'v7', name: 'budget_threshold', label: 'Error Budget Threshold %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v8', name: 'observability_weight', label: 'Observability Weight %', placeholder: 'e.g., 25', type: 'text', defaultValue: '25' },
      { id: 'v9', name: 'security_weight', label: 'Security Weight %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v10', name: 'documentation_weight', label: 'Documentation Weight %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v11', name: 'doc_staleness_days', label: 'Doc Staleness Limit (days)', placeholder: 'e.g., 90', type: 'text', defaultValue: '90' },
      { id: 'v12', name: 'ops_weight', label: 'Ops Readiness Weight %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v13', name: 'deployment_staleness_days', label: 'Max Deploy Staleness (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v14', name: 'health_sources', label: 'Health Data Sources', placeholder: 'e.g., Datadog, SonarQube, Harness SRM', type: 'text' },
      { id: 'v15', name: 'report_cadence', label: 'Report Cadence', placeholder: 'Select cadence', type: 'dropdown', options: ['Weekly', 'Monthly', 'Quarterly'] },
      { id: 'v16', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., engineering-leads@company.com', type: 'text' },
    ],
    tags: ['idp', 'scorecard', 'service-health', 'maturity', 'slo', 'observability'],
    subUseCaseId: 'idp-health-scorecard',
    subUseCaseTitle: 'Service Health Scorecards',
    useCaseId: 'idp-service-mgmt',
    useCaseTitle: 'Service Management',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── IaCM: Infrastructure as Code Management ────────────────────────────────
  {
    id: 'iacm-001',
    title: 'Terraform Workspace & State Management',
    content: `Design a Terraform workspace management strategy in Harness IaCM for {{organization_name}}.

Cloud provider: {{cloud_provider}} | Environments: {{environments}}

Workspace Structure:
- One workspace per environment per account: {{workspace_naming_convention}}
- Remote state backend: {{state_backend}} with encryption at rest
- State file locking: enabled (prevent concurrent modifications)
- State backup: versioned with {{backup_retention}} days retention

Access Controls (RBAC):
- Developer: plan only (no apply)
- Senior Developer: plan + apply to {{dev_envs}}
- Team Lead: plan + apply to {{staging_envs}}
- DevOps/Platform: apply to all environments (requires approval for {{prod_envs}})

Module Registry:
- Private registry at: {{module_registry_url}}
- Versioning: semantic (major.minor.patch)
- Approval workflow: security review + compliance check before publication
- Auto-scan modules for security issues using {{security_scanner}}

Provide the Harness IaCM workspace configuration and RBAC policy YAML.`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Google Cloud', 'Azure', 'Multi-cloud'] },
      { id: 'v3', name: 'environments', label: 'Environments', placeholder: 'e.g., dev, staging, prod', type: 'text', defaultValue: 'dev, staging, prod' },
      { id: 'v4', name: 'workspace_naming_convention', label: 'Workspace Naming Convention', placeholder: 'e.g., {org}-{env}-{region}', type: 'text', defaultValue: '{project}-{env}-{region}' },
      { id: 'v5', name: 'state_backend', label: 'State Backend', placeholder: 'Select backend', type: 'dropdown', options: ['S3 + DynamoDB locking', 'GCS + Firestore locking', 'Azure Blob + Table locking', 'Terraform Cloud', 'Harness IaCM built-in'] },
      { id: 'v6', name: 'backup_retention', label: 'State Backup Retention (days)', placeholder: 'e.g., 90', type: 'text', defaultValue: '90' },
      { id: 'v7', name: 'dev_envs', label: 'Dev Environments', placeholder: 'e.g., dev, feature-*', type: 'text', defaultValue: 'dev' },
      { id: 'v8', name: 'staging_envs', label: 'Staging Environments', placeholder: 'e.g., staging, qa, uat', type: 'text', defaultValue: 'staging, qa' },
      { id: 'v9', name: 'prod_envs', label: 'Production Environments', placeholder: 'e.g., prod, prod-*', type: 'text', defaultValue: 'prod' },
      { id: 'v10', name: 'module_registry_url', label: 'Module Registry URL', placeholder: 'e.g., registry.terraform.io/your-org', type: 'text' },
      { id: 'v11', name: 'security_scanner', label: 'Security Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['Checkov', 'tfsec', 'Terrascan', 'Snyk IaC', 'Prisma Cloud'] },
    ],
    tags: ['terraform', 'iacm', 'workspace', 'state-management', 'rbac', 'infrastructure'],
    subUseCaseId: 'iacm-workspace',
    subUseCaseTitle: 'Workspace & State Management',
    useCaseId: 'iacm-terraform',
    useCaseTitle: 'Terraform Management',
    moduleId: 'iacm',
    moduleTitle: 'Infrastructure as Code Management',
    moduleColor: '#475569',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'iacm-002',
    title: 'Infrastructure Drift Detection & Remediation',
    content: `Configure continuous drift detection and automated remediation in Harness IaCM for {{project_name}}.

Environments to monitor: {{monitored_environments}}
Scan frequency: {{scan_frequency}}

Drift Detection:
- Compare actual cloud resources against Terraform state every {{scan_frequency}}
- Detect: additions, deletions, and modifications outside Terraform control
- Alert channel: {{alert_channel}} | Alert severity: {{alert_severity_mapping}}

Drift Classification:
- Critical drift (immediate action): {{critical_drift_resources}} (e.g., security groups, IAM roles)
- High drift (remediate within {{high_sla}}h): {{high_drift_resources}}
- Low drift (log and review): configuration-only changes

Remediation Policies:
- Auto-remediate critical drift: {{auto_remediate_critical}} (requires approval from {{critical_approver}})
- Auto-remediate non-critical: {{auto_remediate_low}}
- Planned drift: mark as approved in Harness IaCM to suppress alerts for {{approval_window}} days

Reporting:
- Weekly drift compliance report to {{report_recipients}}
- Dashboard showing drift-free rate (target: {{drift_free_target}}%)`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., production-infrastructure', type: 'text' },
      { id: 'v2', name: 'monitored_environments', label: 'Monitored Environments', placeholder: 'e.g., prod, staging', type: 'text' },
      { id: 'v3', name: 'scan_frequency', label: 'Scan Frequency', placeholder: 'Select frequency', type: 'dropdown', options: ['Every 15 minutes', 'Every hour', 'Every 6 hours', 'Daily'] },
      { id: 'v4', name: 'alert_channel', label: 'Alert Channel', placeholder: 'e.g., Slack #infra-drift-alerts', type: 'text' },
      { id: 'v5', name: 'alert_severity_mapping', label: 'Alert Severity Mapping', placeholder: 'e.g., security group changes = P1, tag changes = P3', type: 'textarea' },
      { id: 'v6', name: 'critical_drift_resources', label: 'Critical Drift Resources', placeholder: 'e.g., security groups, IAM roles, VPC ACLs', type: 'text' },
      { id: 'v7', name: 'high_sla', label: 'High Priority SLA (hours)', placeholder: 'e.g., 4', type: 'text', defaultValue: '4' },
      { id: 'v8', name: 'high_drift_resources', label: 'High Priority Drift Resources', placeholder: 'e.g., instance types, DB configs', type: 'text' },
      { id: 'v9', name: 'auto_remediate_critical', label: 'Auto-Remediate Critical', placeholder: 'Select', type: 'dropdown', options: ['Yes (with approval gate)', 'No (manual only)'] },
      { id: 'v10', name: 'critical_approver', label: 'Critical Drift Approver', placeholder: 'e.g., Platform Lead + Security Team', type: 'text' },
      { id: 'v11', name: 'auto_remediate_low', label: 'Auto-Remediate Low Priority', placeholder: 'Select', type: 'dropdown', options: ['Yes (automatically)', 'Yes (with 1 approval)', 'No (manual only)'] },
      { id: 'v12', name: 'approval_window', label: 'Planned Drift Approval Window (days)', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v13', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., platform-team@company.com', type: 'text' },
      { id: 'v14', name: 'drift_free_target', label: 'Drift-Free Rate Target %', placeholder: 'e.g., 95', type: 'text', defaultValue: '95' },
    ],
    tags: ['terraform', 'iacm', 'drift-detection', 'compliance', 'infrastructure', 'governance'],
    subUseCaseId: 'iacm-drift',
    subUseCaseTitle: 'Drift Detection & Remediation',
    useCaseId: 'iacm-terraform',
    useCaseTitle: 'Terraform Management',
    moduleId: 'iacm',
    moduleTitle: 'Infrastructure as Code Management',
    moduleColor: '#475569',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'iacm-003',
    title: 'Infrastructure Change Approval Workflow',
    content: `Configure a multi-tier infrastructure change approval workflow in Harness IaCM for {{organization_name}}.

Change Risk Categories:
- Low risk: {{low_risk_changes}} → auto-apply after {{low_risk_reviewers}} review
- Medium risk: {{medium_risk_changes}} → requires {{medium_risk_approvers}} approval
- High risk: {{high_risk_changes}} → requires {{high_risk_approvers}} + CAB approval
- Emergency: break-glass procedure with post-implementation review

Approval Workflow (standard):
1. Developer raises Terraform PR with plan attached
2. Harness IaCM runs: cost estimation, security scan ({{security_scanner}}), compliance check ({{compliance_policy}})
3. Route to approvers based on risk level and affected resources
4. Apply with full audit trail on approval

Cost Gate:
- Block changes adding > \${{cost_increase_threshold}}/month without {{cost_approver}} sign-off
- Show cost diff on every plan

Maintenance Windows:
- Production changes allowed only during: {{maintenance_window}}
- Emergency changes: allowed 24/7 with {{emergency_approver}} sign-off

Audit: All changes logged to {{audit_destination}} with retention of {{audit_retention}} days`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'low_risk_changes', label: 'Low Risk Changes', placeholder: 'e.g., tag updates, scaling adjustments', type: 'text' },
      { id: 'v3', name: 'low_risk_reviewers', label: 'Low Risk Reviewers', placeholder: 'e.g., 1 peer review', type: 'text', defaultValue: '1 peer review' },
      { id: 'v4', name: 'medium_risk_changes', label: 'Medium Risk Changes', placeholder: 'e.g., new resources, instance type changes', type: 'text' },
      { id: 'v5', name: 'medium_risk_approvers', label: 'Medium Risk Approvers', placeholder: 'e.g., Team Lead + 1 peer', type: 'text' },
      { id: 'v6', name: 'high_risk_changes', label: 'High Risk Changes', placeholder: 'e.g., network changes, IAM, database modifications', type: 'text' },
      { id: 'v7', name: 'high_risk_approvers', label: 'High Risk Approvers', placeholder: 'e.g., Platform Architect + Security + Team Lead', type: 'text' },
      { id: 'v8', name: 'security_scanner', label: 'Security Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['Checkov', 'tfsec', 'Terrascan', 'Snyk IaC'] },
      { id: 'v9', name: 'compliance_policy', label: 'Compliance Policy', placeholder: 'e.g., OPA policy: no public S3 buckets', type: 'text' },
      { id: 'v10', name: 'cost_increase_threshold', label: 'Cost Gate Threshold ($/mo)', placeholder: 'e.g., 5000', type: 'text' },
      { id: 'v11', name: 'cost_approver', label: 'Cost Approver', placeholder: 'e.g., FinOps team + VP Engineering', type: 'text' },
      { id: 'v12', name: 'maintenance_window', label: 'Maintenance Window', placeholder: 'e.g., Tues/Thurs 10pm-2am UTC', type: 'text' },
      { id: 'v13', name: 'emergency_approver', label: 'Emergency Approver', placeholder: 'e.g., On-call Platform Engineer', type: 'text' },
      { id: 'v14', name: 'audit_destination', label: 'Audit Log Destination', placeholder: 'e.g., S3 + CloudTrail, Splunk, Datadog', type: 'text' },
      { id: 'v15', name: 'audit_retention', label: 'Audit Retention (days)', placeholder: 'e.g., 365', type: 'text', defaultValue: '365' },
    ],
    tags: ['terraform', 'iacm', 'approval-workflow', 'rbac', 'governance', 'change-management'],
    subUseCaseId: 'iacm-approval',
    subUseCaseTitle: 'Change Approval Workflows with RBAC',
    useCaseId: 'iacm-governance',
    useCaseTitle: 'Compliance & Governance',
    moduleId: 'iacm',
    moduleTitle: 'Infrastructure as Code Management',
    moduleColor: '#475569',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── SEI: Software Engineering Insights ────────────────────────────────────
  {
    id: 'sei-001',
    title: 'DORA Metrics Dashboard Setup',
    content: `Configure a DORA metrics tracking dashboard in Harness SEI for {{organization_name}}.

Teams in scope: {{teams_in_scope}}
Services/repositories: {{repositories}}
Measurement period: {{measurement_period}}

DORA Metric Configuration:

1. Deployment Frequency:
   - Count successful deployments to {{production_environment}}
   - Segmented by: team, service, environment
   - Target: {{df_target}} (Elite = multiple/day, High = daily, Medium = weekly)

2. Lead Time for Changes:
   - Start: {{lead_time_start}} (first commit / ticket created / PR opened)
   - End: deployment to {{production_environment}}
   - Target: < {{lt_target}} hours (Elite = < 1h, High = < 1 day)

3. Change Failure Rate:
   - Definition of failure: {{failure_definition}}
   - Target: < {{cfr_target}}% (Elite = 0-15%, High = 16-30%)

4. Mean Time to Recovery (MTTR):
   - Failure start: {{mttr_start}} (alert fired / incident created)
   - Recovery end: {{mttr_end}} (service restored / incident resolved)
   - Target: < {{mttr_target}} hours (Elite = < 1h)

Integrations: {{data_sources}}
Report recipients: {{report_recipients}} | Cadence: {{report_cadence}}`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp Engineering', type: 'text' },
      { id: 'v2', name: 'teams_in_scope', label: 'Teams in Scope', placeholder: 'e.g., Platform, Payments, Growth', type: 'text' },
      { id: 'v3', name: 'repositories', label: 'Repositories', placeholder: 'e.g., github.com/org/*, gitlab.com/org/*', type: 'text' },
      { id: 'v4', name: 'measurement_period', label: 'Measurement Period', placeholder: 'Select period', type: 'dropdown', options: ['Last 30 days', 'Last 90 days', 'Last 6 months', 'Last year', 'Trailing 12 months'] },
      { id: 'v5', name: 'production_environment', label: 'Production Environment Name', placeholder: 'e.g., prod, production', type: 'text', defaultValue: 'production' },
      { id: 'v6', name: 'df_target', label: 'Deployment Frequency Target', placeholder: 'Select target', type: 'dropdown', options: ['Elite (multiple/day)', 'High (daily)', 'Medium (weekly)', 'Low (monthly)'] },
      { id: 'v7', name: 'lead_time_start', label: 'Lead Time Start Point', placeholder: 'Select start', type: 'dropdown', options: ['First commit', 'PR opened', 'Ticket created', 'Branch created'] },
      { id: 'v8', name: 'lt_target', label: 'Lead Time Target (hours)', placeholder: 'e.g., 24', type: 'text' },
      { id: 'v9', name: 'failure_definition', label: 'Change Failure Definition', placeholder: 'e.g., deployment causing incident P1/P2 or hotfix within 48h', type: 'text' },
      { id: 'v10', name: 'cfr_target', label: 'Change Failure Rate Target %', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v11', name: 'mttr_start', label: 'MTTR Start Point', placeholder: 'Select start', type: 'dropdown', options: ['Alert fired', 'Incident created', 'On-call paged'] },
      { id: 'v12', name: 'mttr_end', label: 'MTTR End Point', placeholder: 'Select end', type: 'dropdown', options: ['Incident resolved', 'Service restored', 'All-clear declared'] },
      { id: 'v13', name: 'mttr_target', label: 'MTTR Target (hours)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v14', name: 'data_sources', label: 'Data Sources', placeholder: 'e.g., GitHub, Jira, PagerDuty, Harness CD', type: 'text' },
      { id: 'v15', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., VPE, engineering leads', type: 'text' },
      { id: 'v16', name: 'report_cadence', label: 'Report Cadence', placeholder: 'Select cadence', type: 'dropdown', options: ['Weekly', 'Monthly', 'Quarterly'] },
    ],
    tags: ['sei', 'dora', 'deployment-frequency', 'lead-time', 'mttr', 'metrics'],
    subUseCaseId: 'sei-dora',
    subUseCaseTitle: 'DORA Metrics Tracking',
    useCaseId: 'sei-metrics',
    useCaseTitle: 'Engineering Metrics',
    moduleId: 'sei',
    moduleTitle: 'Software Engineering Insights',
    moduleColor: '#3B82F6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'sei-002',
    title: 'Developer Productivity & Cycle Time Analysis',
    content: `Configure developer productivity and cycle time analysis in Harness SEI for {{team_name}}.

Team: {{team_name}} | Size: {{team_size}} | Methodology: {{methodology}}

Productivity Metrics:

1. Cycle Time Breakdown (PR opened → deployed to production):
   - Coding time: time from first commit to PR opened
   - Review time: PR opened → first review
   - Approval time: first review → approved
   - Merge time: approved → merged
   - Deploy time: merged → deployed to {{production_env}}
   - Target total cycle time: < {{cycle_time_target}} hours

2. Code Review Metrics:
   - Average PR size: {{target_pr_size}} lines (alert if > {{max_pr_size}})
   - Review turnaround target: < {{review_turnaround_hours}} hours
   - Iterations before merge target: < {{max_iterations}}

3. Developer Focus Time:
   - Uninterrupted coding blocks: track daily
   - Context switches: minimize below {{max_context_switches}}/day
   - Meeting overhead: track % of working hours

4. Velocity Tracking:
   - Story points completed per sprint
   - Feature delivery rate vs. commitments
   - Estimation accuracy tracking

Integrations: {{data_sources}}
Dashboard visibility: {{visibility}} | Exclude from individual tracking: {{excluded_metrics}}`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform Engineering', type: 'text' },
      { id: 'v2', name: 'team_size', label: 'Team Size', placeholder: 'e.g., 8 engineers', type: 'text' },
      { id: 'v3', name: 'methodology', label: 'Development Methodology', placeholder: 'Select methodology', type: 'dropdown', options: ['Scrum (2-week sprints)', 'Scrum (1-week sprints)', 'Kanban', 'Shape Up', 'SAFe'] },
      { id: 'v4', name: 'production_env', label: 'Production Environment', placeholder: 'e.g., production', type: 'text', defaultValue: 'production' },
      { id: 'v5', name: 'cycle_time_target', label: 'Cycle Time Target (hours)', placeholder: 'e.g., 48', type: 'text' },
      { id: 'v6', name: 'target_pr_size', label: 'Target PR Size (lines)', placeholder: 'e.g., 400', type: 'text', defaultValue: '400' },
      { id: 'v7', name: 'max_pr_size', label: 'Max PR Size Alert (lines)', placeholder: 'e.g., 800', type: 'text', defaultValue: '800' },
      { id: 'v8', name: 'review_turnaround_hours', label: 'Review Turnaround Target (hours)', placeholder: 'e.g., 4', type: 'text', defaultValue: '4' },
      { id: 'v9', name: 'max_iterations', label: 'Max Review Iterations', placeholder: 'e.g., 2', type: 'text', defaultValue: '2' },
      { id: 'v10', name: 'max_context_switches', label: 'Max Context Switches/Day', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v11', name: 'data_sources', label: 'Data Sources', placeholder: 'e.g., GitHub, Jira, Slack', type: 'text' },
      { id: 'v12', name: 'visibility', label: 'Dashboard Visibility', placeholder: 'Select visibility', type: 'dropdown', options: ['Team leads only', 'Full team + leads', 'All engineering', 'Company-wide'] },
      { id: 'v13', name: 'excluded_metrics', label: 'Exclude from Individual Tracking', placeholder: 'e.g., lines of code, commit count', type: 'text' },
    ],
    tags: ['sei', 'productivity', 'cycle-time', 'code-review', 'velocity'],
    subUseCaseId: 'sei-productivity',
    subUseCaseTitle: 'Developer Productivity Analysis',
    useCaseId: 'sei-metrics',
    useCaseTitle: 'Engineering Metrics',
    moduleId: 'sei',
    moduleTitle: 'Software Engineering Insights',
    moduleColor: '#3B82F6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'sei-003',
    title: 'Sprint Analytics & Investment Allocation',
    content: `Configure sprint analytics and engineering investment allocation tracking in Harness SEI for {{organization_name}}.

Teams: {{teams}} | Sprint length: {{sprint_length}} weeks | Tracking period: {{tracking_period}}

Sprint Analytics:
- Velocity: story points committed vs. completed per sprint
- Estimation accuracy: actual vs. estimated across sprints
- Scope change: additions/removals mid-sprint
- Impediment tracking: blocker identification and resolution time
- Burndown analysis: ideal vs. actual with variance explanation

Investment Allocation (% of engineering effort):
- Feature development: {{feature_percent}}% target
- Bug fixes & maintenance: {{bug_percent}}% target
- Technical debt reduction: {{tech_debt_percent}}% target
- Infrastructure & tooling: {{infra_percent}}% target
- Unplanned work / incidents: {{unplanned_percent}}% target

Alerts:
- Flag when unplanned work > {{unplanned_alert}}% in a sprint
- Flag when bug-to-feature ratio exceeds {{bug_ratio_alert}}
- Velocity drop > {{velocity_drop_alert}}% vs. 4-sprint average

Jira integration: {{jira_project_keys}}
Report recipients: {{report_recipients}} | Include in PI planning: {{include_in_pi}}`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'teams', label: 'Teams', placeholder: 'e.g., Platform, Payments, Mobile', type: 'text' },
      { id: 'v3', name: 'sprint_length', label: 'Sprint Length (weeks)', placeholder: 'e.g., 2', type: 'text', defaultValue: '2' },
      { id: 'v4', name: 'tracking_period', label: 'Tracking Period', placeholder: 'Select period', type: 'dropdown', options: ['Last quarter', 'Last 6 months', 'Last year'] },
      { id: 'v5', name: 'feature_percent', label: 'Feature Dev Target %', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v6', name: 'bug_percent', label: 'Bug Fix Target %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v7', name: 'tech_debt_percent', label: 'Tech Debt Target %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v8', name: 'infra_percent', label: 'Infrastructure Target %', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v9', name: 'unplanned_percent', label: 'Unplanned Work Target %', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v10', name: 'unplanned_alert', label: 'Unplanned Work Alert Threshold %', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v11', name: 'bug_ratio_alert', label: 'Bug-to-Feature Ratio Alert', placeholder: 'e.g., 0.5 (1 bug per 2 features)', type: 'text' },
      { id: 'v12', name: 'velocity_drop_alert', label: 'Velocity Drop Alert %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v13', name: 'jira_project_keys', label: 'Jira Project Keys', placeholder: 'e.g., PLAT, PAY, MOB', type: 'text' },
      { id: 'v14', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., VPE, engineering managers', type: 'text' },
      { id: 'v15', name: 'include_in_pi', label: 'Include in PI Planning', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
    ],
    tags: ['sei', 'sprint', 'velocity', 'investment-allocation', 'agile', 'jira'],
    subUseCaseId: 'sei-sprint',
    subUseCaseTitle: 'Sprint Velocity & Effectiveness',
    useCaseId: 'sei-agile',
    useCaseTitle: 'Agile & Sprint Analytics',
    moduleId: 'sei',
    moduleTitle: 'Software Engineering Insights',
    moduleColor: '#3B82F6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── CDE: Cloud Development Environments ───────────────────────────────────
  {
    id: 'cde-001',
    title: 'On-Demand Development Environment Setup',
    content: `Design on-demand Cloud Development Environments (CDEs) in Harness for {{team_name}}.

Tech stack: {{tech_stack}} | Cloud provider: {{cloud_provider}}

Environment Template:
- Base image: {{base_image}} with {{runtime_version}}
- Pre-installed tools: {{preinstalled_tools}}
- IDE: {{ide}} (browser-based or local via SSH)
- Git provider: {{git_provider}} (auto-clone repository on start)

Resource Allocation:
- Default size: {{default_size}} (CPU/memory)
- Available sizes: {{available_sizes}}
- Persistent storage: {{storage_size}} for workspace files
- Ephemeral storage: clears on stop

Lifecycle:
- Provision on: {{trigger}} (developer request / PR creation / branch push)
- Start time target: < {{start_time_seconds}} seconds
- Auto-stop after {{idle_timeout}} minutes of inactivity
- Persistent mode: developer can pin environment to prevent auto-stop

Integrations:
- Secrets injected from: {{secrets_source}}
- Services available: {{available_services}} (via docker-compose or Kubernetes)
- Access URL: {{access_pattern}}

Cost controls: cap at \${{daily_cost_cap}}/day per environment`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Backend Platform Team', type: 'text' },
      { id: 'v2', name: 'tech_stack', label: 'Technology Stack', placeholder: 'Select stack', type: 'dropdown', options: ['Node.js', 'Java/Spring Boot', 'Python', 'Go', 'Ruby on Rails', '.NET', 'Full-stack (Node + React)'] },
      { id: 'v3', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Google Cloud', 'Azure'] },
      { id: 'v4', name: 'base_image', label: 'Base Image', placeholder: 'e.g., ubuntu:22.04, debian:bookworm', type: 'text' },
      { id: 'v5', name: 'runtime_version', label: 'Runtime Version', placeholder: 'e.g., Node.js 20, Java 21, Python 3.12', type: 'text' },
      { id: 'v6', name: 'preinstalled_tools', label: 'Pre-installed Tools', placeholder: 'e.g., kubectl, Helm, Terraform, Docker, git', type: 'text' },
      { id: 'v7', name: 'ide', label: 'IDE', placeholder: 'Select IDE', type: 'dropdown', options: ['VS Code (browser)', 'VS Code (SSH)', 'JetBrains Gateway', 'Vim/Neovim', 'Any (user choice)'] },
      { id: 'v8', name: 'git_provider', label: 'Git Provider', placeholder: 'Select provider', type: 'dropdown', options: ['GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps'] },
      { id: 'v9', name: 'default_size', label: 'Default Environment Size', placeholder: 'Select size', type: 'dropdown', options: ['Small (2 vCPU, 4GB RAM)', 'Medium (4 vCPU, 8GB RAM)', 'Large (8 vCPU, 16GB RAM)', 'XL (16 vCPU, 32GB RAM)'] },
      { id: 'v10', name: 'available_sizes', label: 'Available Sizes', placeholder: 'e.g., Small, Medium, Large', type: 'text' },
      { id: 'v11', name: 'storage_size', label: 'Persistent Storage', placeholder: 'e.g., 50GB SSD', type: 'text', defaultValue: '50GB SSD' },
      { id: 'v12', name: 'trigger', label: 'Provisioning Trigger', placeholder: 'Select trigger', type: 'dropdown', options: ['Developer request (self-service)', 'PR creation', 'Branch push', 'Scheduled (daily)'] },
      { id: 'v13', name: 'start_time_seconds', label: 'Start Time Target (seconds)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v14', name: 'idle_timeout', label: 'Idle Timeout (minutes)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v15', name: 'secrets_source', label: 'Secrets Source', placeholder: 'Select source', type: 'dropdown', options: ['Harness Secrets', 'HashiCorp Vault', 'AWS Secrets Manager', 'GCP Secret Manager'] },
      { id: 'v16', name: 'available_services', label: 'Available Services', placeholder: 'e.g., PostgreSQL, Redis, Kafka, mock APIs', type: 'text' },
      { id: 'v17', name: 'access_pattern', label: 'Access Pattern', placeholder: 'e.g., https://{user}-{env}.dev.company.com', type: 'text' },
      { id: 'v18', name: 'daily_cost_cap', label: 'Daily Cost Cap ($)', placeholder: 'e.g., 20', type: 'text' },
    ],
    tags: ['cde', 'developer-experience', 'environment', 'cloud-dev', 'remote-development'],
    subUseCaseId: 'cde-on-demand',
    subUseCaseTitle: 'On-Demand Environment Provisioning',
    useCaseId: 'cde-env-mgmt',
    useCaseTitle: 'Environment Management',
    moduleId: 'cde',
    moduleTitle: 'Cloud Development Environments',
    moduleColor: '#7C3AED',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'cde-002',
    title: 'Pre-Configured Workspace Standardization',
    content: `Create standardized pre-configured workspace templates in Harness CDE for {{organization_name}}.

Workspace templates to create:

1. Backend Service Developer ({{backend_stack}}):
   - Runtime: {{backend_runtime}}
   - Build tools: {{backend_build_tools}}
   - Testing: {{backend_test_tools}}
   - Database clients: {{backend_db_clients}}
   - Company linting/formatting config: auto-applied

2. Frontend Developer ({{frontend_stack}}):
   - Node.js {{frontend_node_version}} + {{frontend_framework}}
   - Browser dev tools extension
   - Design system components pre-installed

3. Platform/SRE (Infrastructure):
   - kubectl + Helm + Terraform {{terraform_version}}
   - AWS/GCP/Azure CLI pre-configured
   - Internal tooling: {{internal_tools}}

Governance:
- Template updates distributed to all active environments within {{update_window}}
- Configuration drift detection: alert if developer modifies {{locked_configs}}
- Security baseline: pre-installed security tools ({{security_tools}})
- Secrets never stored in workspace images; injected at runtime

VS Code extensions pre-installed: {{vscode_extensions}}`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'backend_stack', label: 'Backend Stack', placeholder: 'e.g., Java/Spring Boot, Python/FastAPI', type: 'text' },
      { id: 'v3', name: 'backend_runtime', label: 'Backend Runtime', placeholder: 'e.g., Java 21 + Maven, Python 3.12 + pip', type: 'text' },
      { id: 'v4', name: 'backend_build_tools', label: 'Backend Build Tools', placeholder: 'e.g., Maven, Gradle, pip, poetry', type: 'text' },
      { id: 'v5', name: 'backend_test_tools', label: 'Backend Test Tools', placeholder: 'e.g., JUnit 5, pytest, testcontainers', type: 'text' },
      { id: 'v6', name: 'backend_db_clients', label: 'Backend DB Clients', placeholder: 'e.g., psql, redis-cli, mongo shell', type: 'text' },
      { id: 'v7', name: 'frontend_stack', label: 'Frontend Stack', placeholder: 'e.g., React/TypeScript', type: 'text' },
      { id: 'v8', name: 'frontend_node_version', label: 'Frontend Node Version', placeholder: 'e.g., 20 LTS', type: 'text', defaultValue: '20 LTS' },
      { id: 'v9', name: 'frontend_framework', label: 'Frontend Framework', placeholder: 'e.g., React 18, Next.js 14, Vue 3', type: 'text' },
      { id: 'v10', name: 'terraform_version', label: 'Terraform Version', placeholder: 'e.g., 1.7', type: 'text' },
      { id: 'v11', name: 'internal_tools', label: 'Internal Platform Tools', placeholder: 'e.g., internal CLI, deployment scripts, runbooks', type: 'text' },
      { id: 'v12', name: 'update_window', label: 'Update Distribution Window', placeholder: 'e.g., 24 hours, on next start', type: 'text', defaultValue: 'on next start' },
      { id: 'v13', name: 'locked_configs', label: 'Locked Configurations', placeholder: 'e.g., security policies, linting rules', type: 'text' },
      { id: 'v14', name: 'security_tools', label: 'Pre-installed Security Tools', placeholder: 'e.g., git-secrets, gitleaks, trivy', type: 'text' },
      { id: 'v15', name: 'vscode_extensions', label: 'VS Code Extensions', placeholder: 'e.g., GitLens, ESLint, Prettier, SonarLint', type: 'text' },
    ],
    tags: ['cde', 'workspace', 'standardization', 'developer-experience', 'devex'],
    subUseCaseId: 'cde-workspace',
    subUseCaseTitle: 'Pre-Configured Workspace Standards',
    useCaseId: 'cde-env-mgmt',
    useCaseTitle: 'Environment Management',
    moduleId: 'cde',
    moduleTitle: 'Cloud Development Environments',
    moduleColor: '#7C3AED',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── AR: Artifact Registry ──────────────────────────────────────────────────
  {
    id: 'ar-001',
    title: 'Private Artifact Registry Configuration',
    content: `Configure a private artifact registry in Harness AR for {{organization_name}}.

Artifact formats to support: {{artifact_formats}}

Registry Configuration:

Docker Registry:
- Repository: {{docker_repo_name}}
- Upstream proxy: {{docker_upstream}} (cache public images locally)
- Image signing: {{image_signing}} (Cosign/Notary)
- Multi-arch support: {{multi_arch_support}}

Helm Chart Repository:
- Repository: {{helm_repo_name}}
- Chart validation on push: enabled
- Dependency resolution: enabled

{{additional_formats}} (e.g., Maven, NPM, PyPI):
- Separate repositories per format with snapshot/release policies
- Upstream proxies for public registries

Access Controls (RBAC):
- Read: all developers in {{org_scope}}
- Push: CI/CD service accounts only (no personal credentials)
- Admin: platform team
- LDAP/SAML integration: {{identity_provider}}

Replication:
- Primary region: {{primary_region}}
- Replicate to: {{replica_regions}}
- Sync interval: {{sync_interval}}

Include the Harness AR connector YAML and CI pipeline integration step.`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'artifact_formats', label: 'Artifact Formats', placeholder: 'Select formats', type: 'dropdown', options: ['Docker only', 'Docker + Helm', 'Docker + Helm + Maven', 'Docker + NPM + PyPI', 'All formats'] },
      { id: 'v3', name: 'docker_repo_name', label: 'Docker Repo Name', placeholder: 'e.g., myorg/docker', type: 'text' },
      { id: 'v4', name: 'docker_upstream', label: 'Docker Upstream Proxy', placeholder: 'Select upstream', type: 'dropdown', options: ['Docker Hub', 'Amazon ECR Public', 'Google Container Registry', 'No upstream proxy'] },
      { id: 'v5', name: 'image_signing', label: 'Image Signing', placeholder: 'Select', type: 'dropdown', options: ['Cosign (Sigstore)', 'Notary v2', 'No signing'] },
      { id: 'v6', name: 'multi_arch_support', label: 'Multi-Arch Support', placeholder: 'Select', type: 'dropdown', options: ['Yes (amd64 + arm64)', 'amd64 only', 'arm64 only'] },
      { id: 'v7', name: 'helm_repo_name', label: 'Helm Repo Name', placeholder: 'e.g., myorg/helm-charts', type: 'text' },
      { id: 'v8', name: 'additional_formats', label: 'Additional Formats', placeholder: 'e.g., Maven, NPM, PyPI', type: 'text' },
      { id: 'v9', name: 'org_scope', label: 'Read Access Scope', placeholder: 'e.g., all engineers, specific teams', type: 'text' },
      { id: 'v10', name: 'identity_provider', label: 'Identity Provider', placeholder: 'Select IdP', type: 'dropdown', options: ['Okta (SAML)', 'Azure AD (SAML)', 'Google Workspace (OIDC)', 'LDAP', 'Harness SSO'] },
      { id: 'v11', name: 'primary_region', label: 'Primary Region', placeholder: 'e.g., us-east-1', type: 'text' },
      { id: 'v12', name: 'replica_regions', label: 'Replica Regions', placeholder: 'e.g., eu-west-1, ap-southeast-1', type: 'text' },
      { id: 'v13', name: 'sync_interval', label: 'Replication Sync Interval', placeholder: 'Select interval', type: 'dropdown', options: ['Real-time', 'Every 15 minutes', 'Every hour', 'Daily'] },
    ],
    tags: ['artifact-registry', 'docker', 'helm', 'maven', 'rbac', 'replication'],
    subUseCaseId: 'ar-private-registry',
    subUseCaseTitle: 'Private Registry Setup',
    useCaseId: 'ar-registry-mgmt',
    useCaseTitle: 'Registry Management',
    moduleId: 'ar',
    moduleTitle: 'Artifact Registry',
    moduleColor: '#D97706',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ar-002',
    title: 'Artifact Security Scanning Policy',
    content: `Configure automated security scanning policies for artifacts in Harness AR for {{organization_name}}.

Artifact types to scan: {{artifact_types}}
Scanner: {{security_scanner}}

Vulnerability Scanning Policy:
- Scan on: push + {{scan_frequency}} rescans for stored artifacts
- Block download if: CRITICAL > {{critical_threshold}} or HIGH > {{high_threshold}}
- Auto-quarantine: artifacts with CRITICAL CVEs pending review
- Exemption workflow: {{exemption_approver}} approves time-bound exceptions (max {{exemption_days}} days)

CVSS score threshold: Block if CVSS >= {{cvss_threshold}}

License Compliance:
- Blocked licenses: {{blocked_licenses}} (e.g., GPL-3.0, AGPL-3.0 for commercial use)
- Warn licenses: {{warn_licenses}} (e.g., LGPL, MPL)
- Allowed: MIT, Apache-2.0, BSD variants

Malware Scanning (generic artifacts):
- Enabled: {{malware_scanning}}
- Quarantine on detection: automatic

Reporting:
- Vulnerability dashboard: real-time in Harness AR
- Weekly security report to: {{report_recipients}}
- Integration with: {{ticketing_system}} (auto-create tickets for critical findings)

SBOM Generation:
- Generate on every artifact push: {{generate_sbom}}
- Format: {{sbom_format}} | Store in: Harness AR`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'artifact_types', label: 'Artifact Types to Scan', placeholder: 'Select types', type: 'dropdown', options: ['Docker images only', 'Docker + Maven/NPM packages', 'All artifact types'] },
      { id: 'v3', name: 'security_scanner', label: 'Security Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['Aqua Trivy', 'Grype', 'Snyk', 'Prisma Cloud', 'JFrog Xray (existing)'] },
      { id: 'v4', name: 'scan_frequency', label: 'Rescan Frequency', placeholder: 'Select frequency', type: 'dropdown', options: ['Daily', 'Weekly', 'On CVE database update'] },
      { id: 'v5', name: 'critical_threshold', label: 'Critical CVE Threshold', placeholder: 'e.g., 0 (zero tolerance)', type: 'text', defaultValue: '0' },
      { id: 'v6', name: 'high_threshold', label: 'High CVE Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v7', name: 'exemption_approver', label: 'Exemption Approver', placeholder: 'e.g., Security team + CISO', type: 'text' },
      { id: 'v8', name: 'exemption_days', label: 'Max Exemption Period (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v9', name: 'cvss_threshold', label: 'CVSS Score Block Threshold', placeholder: 'e.g., 9.0', type: 'text', defaultValue: '9.0' },
      { id: 'v10', name: 'blocked_licenses', label: 'Blocked Licenses', placeholder: 'e.g., GPL-3.0, AGPL-3.0', type: 'text' },
      { id: 'v11', name: 'warn_licenses', label: 'Warn Licenses', placeholder: 'e.g., LGPL-2.1, MPL-2.0', type: 'text' },
      { id: 'v12', name: 'malware_scanning', label: 'Malware Scanning', placeholder: 'Select', type: 'dropdown', options: ['Enabled', 'Disabled'] },
      { id: 'v13', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., security-team@company.com', type: 'text' },
      { id: 'v14', name: 'ticketing_system', label: 'Ticketing System', placeholder: 'Select system', type: 'dropdown', options: ['Jira', 'ServiceNow', 'GitHub Issues', 'Linear'] },
      { id: 'v15', name: 'generate_sbom', label: 'Auto-Generate SBOM', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
      { id: 'v16', name: 'sbom_format', label: 'SBOM Format', placeholder: 'Select format', type: 'dropdown', options: ['SPDX 2.3', 'CycloneDX 1.5', 'Both'] },
    ],
    tags: ['artifact-registry', 'security', 'vulnerability-scanning', 'sbom', 'license-compliance'],
    subUseCaseId: 'ar-security-scan',
    subUseCaseTitle: 'Security Scanning for Artifacts',
    useCaseId: 'ar-registry-mgmt',
    useCaseTitle: 'Registry Management',
    moduleId: 'ar',
    moduleTitle: 'Artifact Registry',
    moduleColor: '#D97706',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── SSCA: Supply Chain Security ────────────────────────────────────────────
  {
    id: 'ssca-001',
    title: 'SBOM Generation & Supply Chain Visibility',
    content: `Configure automated SBOM (Software Bill of Materials) generation and supply chain visibility in Harness SSCA for {{project_name}}.

Service: {{service_name}} | Build tool: {{build_tool}} | Language: {{language}}

SBOM Generation:
- Trigger: on every successful build/container push in {{pipeline_name}}
- SBOM format: {{sbom_format}}
- Include: {{sbom_scope}} (OS packages, language dependencies, transitive deps)
- Sign SBOM with: {{signing_key_provider}}

SBOM Attestation:
- Attach as OCI artifact alongside the container image
- Verification: require valid signature before deployment to {{protected_envs}}

Supply Chain Risk Analysis:
- Dependency inventory: {{total_dependencies}} approximate packages
- Risk scoring: flag dependencies with:
  - Known CVEs (CVSS >= {{cvss_threshold}})
  - License conflicts: {{blocked_licenses}}
  - Outdated by > {{staleness_threshold}} months
  - From untrusted sources: {{trusted_registries}}

Compliance Mapping:
- SLSA level target: {{slsa_level}}
- EO 14028 / NIST SSDF requirements: {{compliance_frameworks}}

Storage: SBOMs stored in {{storage_location}} with {{retention_period}} days retention
Dashboard: Real-time component inventory in Harness SSCA portal`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-platform', type: 'text' },
      { id: 'v2', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v3', name: 'build_tool', label: 'Build Tool', placeholder: 'Select tool', type: 'dropdown', options: ['Maven', 'Gradle', 'npm/yarn', 'pip/poetry', 'Go modules', 'Cargo', 'Docker multi-stage'] },
      { id: 'v4', name: 'language', label: 'Language', placeholder: 'e.g., Java, Python, Go', type: 'text' },
      { id: 'v5', name: 'pipeline_name', label: 'Pipeline Name', placeholder: 'e.g., payment-service-ci', type: 'text' },
      { id: 'v6', name: 'sbom_format', label: 'SBOM Format', placeholder: 'Select format', type: 'dropdown', options: ['CycloneDX 1.5 (JSON)', 'SPDX 2.3 (JSON)', 'Both formats', 'CycloneDX 1.5 (XML)'] },
      { id: 'v7', name: 'sbom_scope', label: 'SBOM Scope', placeholder: 'Select scope', type: 'dropdown', options: ['Direct dependencies only', 'Direct + transitive dependencies', 'Full (OS + language + transitive)'] },
      { id: 'v8', name: 'signing_key_provider', label: 'Signing Key Provider', placeholder: 'Select provider', type: 'dropdown', options: ['Cosign (keyless via Sigstore)', 'Cosign (KMS key)', 'AWS KMS', 'GCP KMS', 'HashiCorp Vault'] },
      { id: 'v9', name: 'protected_envs', label: 'Environments Requiring Verified SBOM', placeholder: 'e.g., production, staging', type: 'text' },
      { id: 'v10', name: 'total_dependencies', label: 'Approximate Total Dependencies', placeholder: 'e.g., 150', type: 'text' },
      { id: 'v11', name: 'cvss_threshold', label: 'CVSS Risk Threshold', placeholder: 'e.g., 7.0', type: 'text', defaultValue: '7.0' },
      { id: 'v12', name: 'blocked_licenses', label: 'Blocked Licenses', placeholder: 'e.g., GPL-3.0, AGPL-3.0', type: 'text' },
      { id: 'v13', name: 'staleness_threshold', label: 'Dependency Staleness Threshold (months)', placeholder: 'e.g., 12', type: 'text', defaultValue: '12' },
      { id: 'v14', name: 'trusted_registries', label: 'Trusted Registries', placeholder: 'e.g., npmjs.com, pypi.org, Maven Central', type: 'text' },
      { id: 'v15', name: 'slsa_level', label: 'Target SLSA Level', placeholder: 'Select level', type: 'dropdown', options: ['SLSA Level 1', 'SLSA Level 2', 'SLSA Level 3'] },
      { id: 'v16', name: 'compliance_frameworks', label: 'Compliance Frameworks', placeholder: 'e.g., NIST SSDF, EO 14028, SOC2', type: 'text' },
      { id: 'v17', name: 'storage_location', label: 'SBOM Storage Location', placeholder: 'Select location', type: 'dropdown', options: ['Harness AR (alongside image)', 'S3', 'GCS', 'Dependency-Track'] },
      { id: 'v18', name: 'retention_period', label: 'SBOM Retention (days)', placeholder: 'e.g., 365', type: 'text', defaultValue: '365' },
    ],
    tags: ['ssca', 'sbom', 'supply-chain', 'slsa', 'cosign', 'compliance'],
    subUseCaseId: 'ssca-sbom',
    subUseCaseTitle: 'SBOM Generation & Management',
    useCaseId: 'ssca-supply-chain',
    useCaseTitle: 'Supply Chain Security',
    moduleId: 'ssca',
    moduleTitle: 'Supply Chain Security',
    moduleColor: '#059669',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ssca-002',
    title: 'Supply Chain Policy Enforcement with OPA',
    content: `Configure supply chain security policy enforcement using OPA in Harness SSCA for {{organization_name}}.

Policy Enforcement Points: {{enforcement_points}}

OPA Policies to Enforce:

1. Artifact Provenance:
   - Require: all container images must have valid Cosign signature
   - Require: SBOM attestation attached and verified
   - Block: images from untrusted registries (allowed: {{trusted_registries}})

2. Dependency Risk:
   - Block deployment if SBOM contains CRITICAL CVE with CVSS >= {{critical_cvss}}
   - Block if banned packages present: {{banned_packages}}
   - Warn if dependency license is {{restricted_licenses}}

3. Build Provenance (SLSA):
   - Require SLSA Level {{slsa_level}} for deployments to {{prod_envs}}
   - Build must originate from: {{approved_builders}} (approved CI systems only)
   - Require signed build provenance attestation

4. Container Standards:
   - Block: images running as root (USER must be non-root)
   - Block: base images older than {{max_image_age_days}} days
   - Require: base image from approved list: {{approved_base_images}}

Policy Violation Actions:
- Block: hard stop deployment | Warn: allow with audit log | Exempt: require {{exemption_approver}}

OPA bundle location: {{opa_bundle_url}} | Review cycle: {{policy_review_cadence}}`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'enforcement_points', label: 'Enforcement Points', placeholder: 'Select points', type: 'dropdown', options: ['CI pipeline gates', 'CD deployment gates', 'Both CI + CD', 'Admission controller (K8s)'] },
      { id: 'v3', name: 'trusted_registries', label: 'Trusted Registries', placeholder: 'e.g., 123456.dkr.ecr.us-east-1.amazonaws.com', type: 'text' },
      { id: 'v4', name: 'critical_cvss', label: 'Critical CVSS Threshold', placeholder: 'e.g., 9.0', type: 'text', defaultValue: '9.0' },
      { id: 'v5', name: 'banned_packages', label: 'Banned Packages', placeholder: 'e.g., log4j:1.x, event-stream@3.3.6', type: 'text' },
      { id: 'v6', name: 'restricted_licenses', label: 'Restricted Licenses (warn)', placeholder: 'e.g., GPL-3.0, AGPL-3.0', type: 'text' },
      { id: 'v7', name: 'slsa_level', label: 'Required SLSA Level', placeholder: 'Select level', type: 'dropdown', options: ['Level 1', 'Level 2', 'Level 3'] },
      { id: 'v8', name: 'prod_envs', label: 'Production Environments', placeholder: 'e.g., prod, prod-eu', type: 'text' },
      { id: 'v9', name: 'approved_builders', label: 'Approved Build Systems', placeholder: 'e.g., Harness CI, GitHub Actions', type: 'text' },
      { id: 'v10', name: 'max_image_age_days', label: 'Max Base Image Age (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v11', name: 'approved_base_images', label: 'Approved Base Images', placeholder: 'e.g., node:20-alpine, openjdk:21-slim', type: 'textarea' },
      { id: 'v12', name: 'exemption_approver', label: 'Policy Exemption Approver', placeholder: 'e.g., Security team + CISO', type: 'text' },
      { id: 'v13', name: 'opa_bundle_url', label: 'OPA Bundle Location', placeholder: 'e.g., s3://my-opa-bundles/ssca', type: 'text' },
      { id: 'v14', name: 'policy_review_cadence', label: 'Policy Review Cadence', placeholder: 'Select cadence', type: 'dropdown', options: ['Monthly', 'Quarterly', 'On CVE database update'] },
    ],
    tags: ['ssca', 'opa', 'policy-as-code', 'supply-chain', 'slsa', 'governance'],
    subUseCaseId: 'ssca-policy',
    subUseCaseTitle: 'Supply Chain Policy Enforcement',
    useCaseId: 'ssca-supply-chain',
    useCaseTitle: 'Supply Chain Security',
    moduleId: 'ssca',
    moduleTitle: 'Supply Chain Security',
    moduleColor: '#059669',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── AI Ops: AI-Powered Operations ─────────────────────────────────────────
  {
    id: 'aiops-001',
    title: 'Predictive Failure Analysis Configuration',
    content: `Configure AI-powered predictive failure analysis using Harness AIDA for {{service_name}}.

Service: {{service_name}} | Data sources: {{data_sources}} | Prediction horizon: {{prediction_horizon}}

Predictive Model Configuration:
- Training data: {{training_period}} of historical metrics and incidents
- Model type: {{model_type}}
- Feature inputs: {{feature_inputs}}

Failure Prediction Scenarios:
1. Memory leak detection: flag services where memory grows > {{memory_growth_rate}}% per {{memory_growth_window}}
2. Disk exhaustion: predict time-to-full and alert {{disk_alert_hours}}h in advance
3. Connection pool saturation: alert when pool usage > {{conn_pool_threshold}}% for > {{conn_pool_duration}} minutes
4. Latency degradation: detect progressive slowdown before SLO breach
5. Deployment-induced regression: correlate metric changes with recent deployments

Alert Configuration:
- Prediction confidence threshold: {{confidence_threshold}}% (suppress below this)
- Alert channel: {{alert_channel}}
- Recommended actions: auto-generate runbook suggestions using AIDA
- False positive feedback loop: {{feedback_mechanism}}

Metrics: {{metrics_source}} | Logs: {{log_source}} | Traces: {{trace_source}}
Model retraining frequency: {{retraining_frequency}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'data_sources', label: 'Data Sources', placeholder: 'e.g., Datadog, Prometheus, CloudWatch', type: 'text' },
      { id: 'v3', name: 'prediction_horizon', label: 'Prediction Horizon', placeholder: 'Select horizon', type: 'dropdown', options: ['30 minutes ahead', '1 hour ahead', '4 hours ahead', '24 hours ahead'] },
      { id: 'v4', name: 'training_period', label: 'Training Data Period', placeholder: 'Select period', type: 'dropdown', options: ['Last 30 days', 'Last 90 days', 'Last 6 months', 'Last year'] },
      { id: 'v5', name: 'model_type', label: 'Model Type', placeholder: 'Select type', type: 'dropdown', options: ['Anomaly detection (unsupervised)', 'Time series forecasting (ARIMA)', 'ML regression (supervised)', 'Ensemble (recommended)'] },
      { id: 'v6', name: 'feature_inputs', label: 'Feature Inputs', placeholder: 'e.g., CPU, memory, error rate, latency, deployment events', type: 'text' },
      { id: 'v7', name: 'memory_growth_rate', label: 'Memory Growth Rate Alert %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v8', name: 'memory_growth_window', label: 'Memory Growth Window', placeholder: 'e.g., 1 hour', type: 'text', defaultValue: '1 hour' },
      { id: 'v9', name: 'disk_alert_hours', label: 'Disk Exhaustion Alert (hours ahead)', placeholder: 'e.g., 12', type: 'text', defaultValue: '12' },
      { id: 'v10', name: 'conn_pool_threshold', label: 'Connection Pool Threshold %', placeholder: 'e.g., 85', type: 'text', defaultValue: '85' },
      { id: 'v11', name: 'conn_pool_duration', label: 'Connection Pool Duration (mins)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'confidence_threshold', label: 'Confidence Threshold %', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v13', name: 'alert_channel', label: 'Alert Channel', placeholder: 'e.g., PagerDuty, Slack #aiops-alerts', type: 'text' },
      { id: 'v14', name: 'feedback_mechanism', label: 'False Positive Feedback', placeholder: 'Select mechanism', type: 'dropdown', options: ['Thumbs up/down in alert', 'Slack reaction', 'Dedicated feedback form', 'Auto-learn from resolution'] },
      { id: 'v15', name: 'metrics_source', label: 'Metrics Source', placeholder: 'e.g., Prometheus, Datadog', type: 'text' },
      { id: 'v16', name: 'log_source', label: 'Log Source', placeholder: 'e.g., Elasticsearch, Splunk, CloudWatch', type: 'text' },
      { id: 'v17', name: 'trace_source', label: 'Trace Source', placeholder: 'e.g., Jaeger, Datadog APM, AWS X-Ray', type: 'text' },
      { id: 'v18', name: 'retraining_frequency', label: 'Model Retraining Frequency', placeholder: 'Select frequency', type: 'dropdown', options: ['Daily', 'Weekly', 'Monthly', 'On significant data drift'] },
    ],
    tags: ['ai-ops', 'aida', 'predictive', 'failure-analysis', 'ml', 'anomaly-detection'],
    subUseCaseId: 'aiops-predictive',
    subUseCaseTitle: 'Predictive Failure Analysis',
    useCaseId: 'aiops-intelligent-ops',
    useCaseTitle: 'Intelligent Operations',
    moduleId: 'aiops',
    moduleTitle: 'AI-Powered Operations',
    moduleColor: '#6D28D9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'aiops-002',
    title: 'Intelligent Alert Correlation & Noise Reduction',
    content: `Configure ML-based alert correlation and noise reduction using Harness AIDA for {{organization_name}}.

Current alert volume: {{current_alert_volume}} alerts/day | Target reduction: {{target_reduction}}%
Alerting tools: {{alerting_tools}}

Alert Correlation Configuration:
- Correlation window: {{correlation_window}} minutes (group alerts fired within this window)
- Correlation method: {{correlation_method}}
- Root cause identification: link symptom alerts to probable root cause signal

Noise Reduction Policies:
1. Deduplication: suppress identical alerts within {{dedup_window}} minutes
2. Flapping detection: suppress alerts that toggle on/off more than {{flap_threshold}} times in {{flap_window}} minutes
3. Maintenance window suppression: suppress all non-critical alerts during {{maintenance_windows}}
4. Time-of-day sensitivity: reduce sensitivity during {{low-traffic_hours}} (lower thresholds)

Alert Enrichment (auto-added by AIDA):
- Recent deployments to affected service (last {{deployment_context_window}} hours)
- Related incidents from last {{incident_context_days}} days
- Runbook link: auto-matched from {{runbook_source}}
- Estimated business impact: {{impact_estimation_method}}

Priority Scoring:
- Auto-assign P1/P2/P3/P4 based on: {{priority_factors}}
- Route by priority: P1/P2 → {{high_priority_channel}} | P3/P4 → {{low_priority_channel}}

Feedback loop: on-call engineers rate alert quality after each incident to improve ML model`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'current_alert_volume', label: 'Current Alert Volume (per day)', placeholder: 'e.g., 500', type: 'text' },
      { id: 'v3', name: 'target_reduction', label: 'Target Reduction %', placeholder: 'e.g., 70', type: 'text', defaultValue: '70' },
      { id: 'v4', name: 'alerting_tools', label: 'Alerting Tools', placeholder: 'e.g., Prometheus AlertManager, Datadog, PagerDuty', type: 'text' },
      { id: 'v5', name: 'correlation_window', label: 'Correlation Window (minutes)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v6', name: 'correlation_method', label: 'Correlation Method', placeholder: 'Select method', type: 'dropdown', options: ['Service topology (dependency-based)', 'ML clustering', 'Time-based grouping', 'Hybrid (recommended)'] },
      { id: 'v7', name: 'dedup_window', label: 'Deduplication Window (minutes)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v8', name: 'flap_threshold', label: 'Flapping Threshold (toggles)', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v9', name: 'flap_window', label: 'Flapping Detection Window (minutes)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v10', name: 'maintenance_windows', label: 'Maintenance Windows', placeholder: 'e.g., Tues/Thurs 11pm-1am UTC', type: 'text' },
      { id: 'v11', name: 'deployment_context_window', label: 'Deployment Context Window (hours)', placeholder: 'e.g., 2', type: 'text', defaultValue: '2' },
      { id: 'v12', name: 'incident_context_days', label: 'Related Incident Lookback (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v13', name: 'runbook_source', label: 'Runbook Source', placeholder: 'e.g., Confluence, PagerDuty runbooks, GitHub', type: 'text' },
      { id: 'v14', name: 'impact_estimation_method', label: 'Impact Estimation Method', placeholder: 'Select method', type: 'dropdown', options: ['Affected user count', 'Revenue impact estimate', 'SLO burn rate', 'Service tier-based'] },
      { id: 'v15', name: 'priority_factors', label: 'Priority Scoring Factors', placeholder: 'e.g., service tier, user impact, SLO status', type: 'text' },
      { id: 'v16', name: 'high_priority_channel', label: 'High Priority Channel', placeholder: 'e.g., PagerDuty escalation policy', type: 'text' },
      { id: 'v17', name: 'low_priority_channel', label: 'Low Priority Channel', placeholder: 'e.g., Slack #ops-alerts', type: 'text' },
    ],
    tags: ['ai-ops', 'alert-correlation', 'noise-reduction', 'aida', 'on-call', 'ml'],
    subUseCaseId: 'aiops-alerting',
    subUseCaseTitle: 'Intelligent Alert Correlation',
    useCaseId: 'aiops-intelligent-ops',
    useCaseTitle: 'Intelligent Operations',
    moduleId: 'aiops',
    moduleTitle: 'AI-Powered Operations',
    moduleColor: '#6D28D9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── Enterprise Governance ──────────────────────────────────────────────────
  {
    id: 'enterprise-001',
    title: 'Attribute-Based Access Control (ABAC) Setup',
    content: `Design an Attribute-Based Access Control (ABAC) policy framework in Harness for {{organization_name}}.

Organization size: {{org_size}} | Environments: {{environments}} | Compliance: {{compliance_requirements}}

ABAC Policy Structure:

User Attributes (sourced from {{identity_provider}}):
- Department: {{department_values}}
- Role: developer | senior-developer | tech-lead | architect | platform-engineer | security
- Security clearance: {{security_clearance_levels}}
- Location: {{location_attribute}} (for data residency)

Resource Attributes:
- Environment: dev | staging | qa | production
- Data classification: public | internal | confidential | restricted
- Service tier: tier-1 | tier-2 | tier-3

Policy Examples:
1. "Platform engineers can deploy to production only during {{deployment_window}}"
2. "Developers can only access services tagged with their team: {{team_tag_format}}"
3. "Restricted data environments require security clearance >= {{min_clearance}}"
4. "Production changes require senior-developer role + MFA verified within {{mfa_window}} minutes"
5. "Emergency access (break-glass): any user with {{emergency_role}} role, 4-hour TTL, auto-audit"

JIT (Just-in-Time) Access:
- Self-service request portal with business justification
- Approval: {{jit_approvers}} | Max duration: {{jit_max_duration}} hours
- Auto-revoke with full audit trail

IdP sync frequency: {{sync_frequency}} | Policy evaluation: real-time`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'org_size', label: 'Organization Size', placeholder: 'Select size', type: 'dropdown', options: ['Startup (< 50 engineers)', 'Mid-size (50-200)', 'Large (200-1000)', 'Enterprise (1000+)'] },
      { id: 'v3', name: 'environments', label: 'Environments', placeholder: 'e.g., dev, staging, qa, prod', type: 'text' },
      { id: 'v4', name: 'compliance_requirements', label: 'Compliance Requirements', placeholder: 'e.g., SOC2, PCI-DSS, HIPAA', type: 'text' },
      { id: 'v5', name: 'identity_provider', label: 'Identity Provider', placeholder: 'Select IdP', type: 'dropdown', options: ['Okta', 'Azure Active Directory', 'Google Workspace', 'Ping Identity', 'LDAP + SAML'] },
      { id: 'v6', name: 'department_values', label: 'Department Values', placeholder: 'e.g., engineering, platform, security, finance', type: 'text' },
      { id: 'v7', name: 'security_clearance_levels', label: 'Security Clearance Levels', placeholder: 'e.g., standard, elevated, privileged', type: 'text' },
      { id: 'v8', name: 'location_attribute', label: 'Location Attribute', placeholder: 'e.g., country, region, office', type: 'text' },
      { id: 'v9', name: 'deployment_window', label: 'Permitted Deployment Window', placeholder: 'e.g., Mon-Fri 9am-5pm UTC', type: 'text' },
      { id: 'v10', name: 'team_tag_format', label: 'Team Tag Format', placeholder: 'e.g., team=payments, team=platform', type: 'text' },
      { id: 'v11', name: 'min_clearance', label: 'Min Clearance for Restricted Data', placeholder: 'e.g., elevated', type: 'text' },
      { id: 'v12', name: 'mfa_window', label: 'MFA Validity Window (minutes)', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v13', name: 'emergency_role', label: 'Emergency Access Role Name', placeholder: 'e.g., break-glass-admin', type: 'text' },
      { id: 'v14', name: 'jit_approvers', label: 'JIT Access Approvers', placeholder: 'e.g., Team Lead + Security', type: 'text' },
      { id: 'v15', name: 'jit_max_duration', label: 'JIT Max Duration (hours)', placeholder: 'e.g., 8', type: 'text', defaultValue: '8' },
      { id: 'v16', name: 'sync_frequency', label: 'IdP Sync Frequency', placeholder: 'Select frequency', type: 'dropdown', options: ['Real-time (SCIM)', 'Every 5 minutes', 'Every 15 minutes', 'Hourly'] },
    ],
    tags: ['enterprise', 'abac', 'rbac', 'access-control', 'jit', 'compliance', 'governance'],
    subUseCaseId: 'enterprise-abac',
    subUseCaseTitle: 'Attribute-Based Access Control (ABAC)',
    useCaseId: 'enterprise-governance',
    useCaseTitle: 'Governance & Compliance',
    moduleId: 'enterprise',
    moduleTitle: 'Enterprise Governance',
    moduleColor: '#DC2626',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'enterprise-002',
    title: 'Policy as Code with Git-Based Management',
    content: `Implement Policy as Code (PaC) governance using Harness OPA integration for {{organization_name}}.

Policy scope: {{policy_scope}} | Policy engine: OPA (Open Policy Agent)
Git repository: {{policy_repo}}

Repository Structure:
\`\`\`
policies/
  ci/          # Pipeline and build policies
  cd/          # Deployment policies
  iacm/        # Infrastructure policies
  security/    # Security and compliance policies
  cost/        # FinOps and budget policies
  enterprise/  # Cross-cutting governance policies
\`\`\`

Policy Development Workflow:
1. Policy written in Rego by {{policy_authors}}
2. Automated testing: opa test with {{min_test_coverage}}% coverage required
3. PR opened → auto-run policy impact analysis (dry run against last {{impact_sample_days}} days)
4. Peer review: {{policy_reviewers}} must approve
5. Merge to main → auto-deploy to Harness OPA policy sets
6. Rollback: git revert → immediate policy rollback

Policy Categories to Create:
- Deployment gates: {{deployment_gate_policies}}
- Security mandatory: {{security_policies}}
- Cost controls: {{cost_policies}}
- Compliance: {{compliance_policies}} (for {{compliance_frameworks}})

Policy Versioning: semantic versioning (v1.0.0)
Breaking changes: require {{breaking_change_approvers}} sign-off + migration plan

Audit: all policy evaluations logged with decision + input + output to {{audit_destination}}`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'policy_scope', label: 'Policy Scope', placeholder: 'Select scope', type: 'dropdown', options: ['CI/CD pipelines only', 'CI/CD + Infrastructure', 'All Harness modules', 'Enterprise-wide (all systems)'] },
      { id: 'v3', name: 'policy_repo', label: 'Policy Repository', placeholder: 'e.g., github.com/acme/harness-policies', type: 'text' },
      { id: 'v4', name: 'policy_authors', label: 'Policy Authors', placeholder: 'e.g., Platform team, Security team', type: 'text' },
      { id: 'v5', name: 'min_test_coverage', label: 'Min Test Coverage %', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v6', name: 'impact_sample_days', label: 'Impact Analysis Sample (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v7', name: 'policy_reviewers', label: 'Policy Reviewers', placeholder: 'e.g., 2 members of Platform + 1 Security', type: 'text' },
      { id: 'v8', name: 'deployment_gate_policies', label: 'Deployment Gate Policies', placeholder: 'e.g., require approval for prod, block during blackouts', type: 'textarea' },
      { id: 'v9', name: 'security_policies', label: 'Security Policies', placeholder: 'e.g., no public S3, no hardcoded secrets, require MFA', type: 'textarea' },
      { id: 'v10', name: 'cost_policies', label: 'Cost Policies', placeholder: 'e.g., block instance types > x8xlarge, require cost tags', type: 'textarea' },
      { id: 'v11', name: 'compliance_policies', label: 'Compliance Policies', placeholder: 'e.g., SOC2 controls, PCI-DSS network requirements', type: 'textarea' },
      { id: 'v12', name: 'compliance_frameworks', label: 'Compliance Frameworks', placeholder: 'e.g., SOC2, PCI-DSS, HIPAA, ISO 27001', type: 'text' },
      { id: 'v13', name: 'breaking_change_approvers', label: 'Breaking Change Approvers', placeholder: 'e.g., CTO + CISO', type: 'text' },
      { id: 'v14', name: 'audit_destination', label: 'Audit Log Destination', placeholder: 'e.g., Splunk, Elasticsearch, S3 + Athena', type: 'text' },
    ],
    tags: ['enterprise', 'policy-as-code', 'opa', 'governance', 'gitops', 'compliance'],
    subUseCaseId: 'enterprise-pac',
    subUseCaseTitle: 'Policy as Code Management',
    useCaseId: 'enterprise-governance',
    useCaseTitle: 'Governance & Compliance',
    moduleId: 'enterprise',
    moduleTitle: 'Enterprise Governance',
    moduleColor: '#DC2626',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'enterprise-003',
    title: 'Compliance Automation & Audit Trail Management',
    content: `Configure compliance automation and comprehensive audit trail management in Harness for {{organization_name}}.

Compliance frameworks: {{compliance_frameworks}} | Audit period: {{audit_period}}
Industry: {{industry}}

Continuous Compliance Monitoring:
- Real-time compliance score across all Harness modules
- Automated control validation: {{automated_controls}}
- Violation detection: alert within {{violation_alert_sla}} minutes of detection
- Remediation SLA: Critical = {{critical_remediation_sla}}h | High = {{high_remediation_sla}}h

Automated Evidence Collection for Audits:
- Access reviews: auto-generate quarterly user access report
- Change management: export all pipeline runs with approver trail
- Security scanning: export scan results with pass/fail evidence
- Deployment audit: full history with who, what, when, why

Audit Trail Configuration:
- Events to capture: {{events_to_audit}}
- Log format: structured JSON with: timestamp, actor (user/service), action, resource, result, IP
- Immutable storage: {{audit_storage}} (tamper-proof)
- Retention: {{audit_retention}} years (per {{compliance_frameworks}} requirements)
- Access to audit logs: restricted to {{audit_log_access_roles}}

Compliance Reporting:
- Real-time dashboard: compliance score by framework
- Automated reports: {{report_cadence}} to {{report_recipients}}
- Audit package: auto-generate evidence package for {{audit_frequency}} audits
- Exceptions tracking: all policy exceptions with business justification and approver`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'compliance_frameworks', label: 'Compliance Frameworks', placeholder: 'Select frameworks', type: 'dropdown', options: ['SOC2 Type II', 'PCI-DSS v4.0', 'HIPAA', 'ISO 27001', 'SOC2 + PCI-DSS', 'SOC2 + HIPAA', 'FedRAMP'] },
      { id: 'v3', name: 'audit_period', label: 'Audit Period', placeholder: 'Select period', type: 'dropdown', options: ['Annual', 'Semi-annual', 'Quarterly', 'Continuous (real-time)'] },
      { id: 'v4', name: 'industry', label: 'Industry', placeholder: 'Select industry', type: 'dropdown', options: ['Financial Services', 'Healthcare', 'E-commerce / Retail', 'SaaS / Technology', 'Government', 'Manufacturing'] },
      { id: 'v5', name: 'automated_controls', label: 'Automated Controls', placeholder: 'e.g., MFA enforcement, encryption at rest, least privilege', type: 'textarea' },
      { id: 'v6', name: 'violation_alert_sla', label: 'Violation Alert SLA (minutes)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v7', name: 'critical_remediation_sla', label: 'Critical Remediation SLA (hours)', placeholder: 'e.g., 4', type: 'text', defaultValue: '4' },
      { id: 'v8', name: 'high_remediation_sla', label: 'High Remediation SLA (hours)', placeholder: 'e.g., 24', type: 'text', defaultValue: '24' },
      { id: 'v9', name: 'events_to_audit', label: 'Events to Audit', placeholder: 'e.g., login, deploy, config change, secret access, role change', type: 'textarea' },
      { id: 'v10', name: 'audit_storage', label: 'Audit Storage', placeholder: 'Select storage', type: 'dropdown', options: ['AWS S3 with Object Lock (WORM)', 'Azure Immutable Blob Storage', 'GCS with retention locks', 'Splunk (tamper-evident)', 'Elastic (with WORM)'] },
      { id: 'v11', name: 'audit_retention', label: 'Audit Retention (years)', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v12', name: 'audit_log_access_roles', label: 'Audit Log Access Roles', placeholder: 'e.g., CISO, Compliance Officer, External Auditor', type: 'text' },
      { id: 'v13', name: 'report_cadence', label: 'Report Cadence', placeholder: 'Select cadence', type: 'dropdown', options: ['Daily', 'Weekly', 'Monthly', 'Quarterly'] },
      { id: 'v14', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., CISO, Compliance team, Board', type: 'text' },
      { id: 'v15', name: 'audit_frequency', label: 'External Audit Frequency', placeholder: 'Select frequency', type: 'dropdown', options: ['Annual', 'Semi-annual', 'Quarterly'] },
    ],
    tags: ['enterprise', 'compliance', 'audit', 'soc2', 'pci-dss', 'hipaa', 'governance'],
    subUseCaseId: 'enterprise-compliance',
    subUseCaseTitle: 'Compliance Automation & Audit Trails',
    useCaseId: 'enterprise-governance',
    useCaseTitle: 'Governance & Compliance',
    moduleId: 'enterprise',
    moduleTitle: 'Enterprise Governance',
    moduleColor: '#DC2626',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  {
    id: 'srm-002',
    title: 'Incident Detection & Automated Response',
    content: `Configure intelligent incident detection and automated response workflows for {{service_name}} in Harness SRM.

Service: {{service_name}} | Monitoring tool: {{monitoring_tool}}

Detection Configuration:
- Anomaly detection method: {{detection_method}}
- Alert correlation window: {{correlation_window}} minutes
- Noise reduction: group related alerts within {{grouping_window}} minutes

Incident Classification:
- P1 (Critical): {{p1_criteria}} → auto-page {{p1_oncall}}
- P2 (High): {{p2_criteria}} → notify {{p2_channel}}
- P3 (Medium): {{p3_criteria}} → create ticket in {{ticketing_system}}

Automated Response Actions (P1/P2):
1. Execute runbook: {{auto_runbook}}
2. Notify war room channel: {{war_room_channel}}
3. Auto-rollback if last deployment within {{rollback_window}} minutes
4. Attach deployment context and recent changes

Post-Incident:
- Auto-generate postmortem from incident timeline
- Track MTTR and report weekly to {{report_recipients}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v2', name: 'monitoring_tool', label: 'Monitoring Tool', placeholder: 'Select tool', type: 'dropdown', options: ['Datadog', 'Prometheus + Grafana', 'New Relic', 'Dynatrace', 'AppDynamics', 'CloudWatch'] },
      { id: 'v3', name: 'detection_method', label: 'Detection Method', placeholder: 'Select method', type: 'dropdown', options: ['Threshold-based', 'ML anomaly detection', 'Error budget burn rate', 'Composite conditions'] },
      { id: 'v4', name: 'correlation_window', label: 'Correlation Window (mins)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v5', name: 'grouping_window', label: 'Alert Grouping Window (mins)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v6', name: 'p1_criteria', label: 'P1 Criteria', placeholder: 'e.g., availability < 99% or error rate > 5%', type: 'text' },
      { id: 'v7', name: 'p1_oncall', label: 'P1 On-Call Contact', placeholder: 'e.g., PagerDuty escalation policy', type: 'text' },
      { id: 'v8', name: 'p2_criteria', label: 'P2 Criteria', placeholder: 'e.g., latency p99 > 2x baseline', type: 'text' },
      { id: 'v9', name: 'p2_channel', label: 'P2 Notification Channel', placeholder: 'e.g., Slack #incidents', type: 'text' },
      { id: 'v10', name: 'p3_criteria', label: 'P3 Criteria', placeholder: 'e.g., elevated error rate 1-5%', type: 'text' },
      { id: 'v11', name: 'ticketing_system', label: 'Ticketing System', placeholder: 'Select system', type: 'dropdown', options: ['Jira', 'ServiceNow', 'PagerDuty', 'GitHub Issues'] },
      { id: 'v12', name: 'auto_runbook', label: 'Auto-Execute Runbook', placeholder: 'e.g., restart unhealthy pods, clear cache', type: 'text' },
      { id: 'v13', name: 'war_room_channel', label: 'War Room Channel', placeholder: 'e.g., Slack #incident-war-room', type: 'text' },
      { id: 'v14', name: 'rollback_window', label: 'Auto-Rollback Window (mins)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v15', name: 'report_recipients', label: 'Weekly MTTR Report To', placeholder: 'e.g., engineering-leads@company.com', type: 'text' },
    ],
    tags: ['incident-management', 'sre', 'automation', 'mttr', 'on-call'],
    subUseCaseId: 'srm-incident',
    subUseCaseTitle: 'Incident Detection & Response',
    useCaseId: 'srm-monitoring',
    useCaseTitle: 'Service Monitoring',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability Management',
    moduleColor: '#14B8A6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ── Phase 5: New Prompts ───────────────────────────────────────────────────

  // ci-005: Monorepo CI Pipeline
  {
    id: 'ci-005',
    title: 'Monorepo Multi-Service CI Pipeline',
    content: `Design a Harness CI pipeline for a monorepo containing {{service_count}} services built with {{build_tool}}.

Monorepo root: {{repo_name}}
Service directories: {{service_list}}
Shared libraries: {{shared_libs}}

**Requirements:**

1. **Change detection**: Only build services with changes since the last successful build (git diff vs {{base_branch}}). If a shared library changes, include all dependent services in the affected set.

2. **Parallel matrix**: Run all affected services in parallel, capped at {{max_parallelism}} concurrent jobs. Each service runs: lint → unit tests → build → package.

3. **Per-service caching**: Cache {{build_tool}} dependencies using a key: \`{{repo_name}}-<service>-<lockfile-hash>\`. Fall back to the previous cache on miss.

4. **Quality gates per service**:
   - Code coverage ≥ {{coverage_threshold}}%
   - 0 critical lint violations
   - Build must produce a versioned artifact tagged \`{{registry}}/<service>:{{tag_strategy}}\`

5. **Aggregate gate**: All parallel service stages must pass before the pipeline completes. Surface per-service failure summaries in the pipeline notification to {{notify_channel}}.

Output:
- Full Harness pipeline YAML with the matrix strategy
- Change detection script (bash) using git diff
- Cache key template per {{build_tool}}
- Expected pipeline time reduction vs. building all services every run`,
    variables: [
      { id: 'v1', name: 'service_count', label: 'Number of Services', placeholder: 'e.g., 8', type: 'text', defaultValue: '5' },
      { id: 'v2', name: 'build_tool', label: 'Build Tool', placeholder: 'Select tool', type: 'dropdown', options: ['Maven', 'Gradle', 'npm', 'pnpm', 'Go modules', 'Poetry (Python)'] },
      { id: 'v3', name: 'repo_name', label: 'Repository Name', placeholder: 'e.g., my-platform', type: 'text' },
      { id: 'v4', name: 'service_list', label: 'Service Directories (comma-separated)', placeholder: 'e.g., services/api, services/worker, services/frontend', type: 'textarea' },
      { id: 'v5', name: 'shared_libs', label: 'Shared Library Paths', placeholder: 'e.g., shared/utils, shared/models', type: 'text' },
      { id: 'v6', name: 'base_branch', label: 'Base Branch', placeholder: 'e.g., main', type: 'text', defaultValue: 'main' },
      { id: 'v7', name: 'max_parallelism', label: 'Max Parallel Jobs', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v8', name: 'coverage_threshold', label: 'Coverage Threshold (%)', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v9', name: 'registry', label: 'Container Registry', placeholder: 'e.g., us-docker.pkg.dev/my-project', type: 'text' },
      { id: 'v10', name: 'tag_strategy', label: 'Image Tag Strategy', placeholder: 'Select strategy', type: 'dropdown', options: ['Git SHA (short)', 'Semantic version', 'Branch + build number', 'Timestamp'] },
      { id: 'v11', name: 'notify_channel', label: 'Notification Channel', placeholder: 'e.g., Slack #builds', type: 'text' },
    ],
    tags: ['monorepo', 'ci', 'parallelism', 'change-detection', 'caching', 'matrix'],
    subUseCaseId: 'ci-multi-stage',
    subUseCaseTitle: 'Multi-Stage Pipelines',
    useCaseId: 'ci-pipeline-creation',
    useCaseTitle: 'Pipeline Creation & Configuration',
    moduleId: 'ci',
    moduleTitle: 'Continuous Integration',
    moduleColor: '#6366F1',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // cd-004: GitOps Progressive Delivery
  {
    id: 'cd-004',
    title: 'GitOps Progressive Delivery with Argo CD',
    content: `Design a full GitOps progressive delivery pipeline for {{service_name}} using Harness CD with Argo CD.

GitOps repository: {{gitops_repo}}
Environment chain: {{env_chain}}

**Pipeline stages:**

**Stage 1 — Dev → Staging (auto)**
- Trigger: PR merged to {{trunk_branch}}
- Action: Harness GitOps operator auto-updates the image tag in the staging overlay ({{staging_overlay}}) to the new SHA
- Gate: Automated smoke test step — 3 HTTP health checks against {{staging_url}} must return 200

**Stage 2 — Staging → Pre-prod (canary)**
- Trigger: Manual approval from {{staging_approver}}
- Canary: Route {{canary_percent}}% of traffic to new version for {{canary_duration}} minutes via Argo Rollouts
- Continuous Verification gate: error rate < {{error_slo}}% AND P95 latency < {{latency_slo}}ms sustained for the canary window
- On failure: auto-rollback by reverting the GitOps overlay commit

**Stage 3 — Pre-prod → Production (progressive)**
- Trigger: {{prod_approval_count}} approvals from group {{prod_approver_group}}
- Rollout: 10% → 25% → 50% → 100% with {{progression_interval}}-minute intervals and CV analysis between each step
- Monitored metrics: {{cv_metrics}}
- Auto-rollback trigger: Any SLO breach → Argo CD sync to the previous revision hash

Provide:
1. Harness pipeline YAML with all three stages
2. Argo CD ApplicationSet template for multi-environment overlays
3. Argo Rollouts canary strategy YAML
4. Continuous Verification step configuration`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'gitops_repo', label: 'GitOps Config Repository', placeholder: 'e.g., github.com/org/k8s-configs', type: 'text' },
      { id: 'v3', name: 'env_chain', label: 'Environment Chain', placeholder: 'e.g., dev → staging → pre-prod → production', type: 'text', defaultValue: 'dev → staging → pre-prod → production' },
      { id: 'v4', name: 'trunk_branch', label: 'Trunk Branch', placeholder: 'e.g., main', type: 'text', defaultValue: 'main' },
      { id: 'v5', name: 'staging_overlay', label: 'Staging Overlay Path', placeholder: 'e.g., overlays/staging/kustomization.yaml', type: 'text' },
      { id: 'v6', name: 'staging_url', label: 'Staging URL', placeholder: 'e.g., https://staging.myservice.internal', type: 'text' },
      { id: 'v7', name: 'staging_approver', label: 'Staging Approver (user/group)', placeholder: 'e.g., platform-team', type: 'text' },
      { id: 'v8', name: 'canary_percent', label: 'Canary Traffic %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v9', name: 'canary_duration', label: 'Canary Duration (minutes)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v10', name: 'error_slo', label: 'Error Rate SLO (%)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v11', name: 'latency_slo', label: 'P95 Latency SLO (ms)', placeholder: 'e.g., 500', type: 'text', defaultValue: '500' },
      { id: 'v12', name: 'prod_approval_count', label: 'Prod Approval Count', placeholder: 'e.g., 2', type: 'text', defaultValue: '2' },
      { id: 'v13', name: 'prod_approver_group', label: 'Prod Approver Group', placeholder: 'e.g., release-managers', type: 'text' },
      { id: 'v14', name: 'progression_interval', label: 'Progression Interval (minutes)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v15', name: 'cv_metrics', label: 'CV Metrics to Monitor', placeholder: 'e.g., error_rate, p95_latency, apdex_score', type: 'text' },
    ],
    tags: ['gitops', 'argocd', 'progressive-delivery', 'canary', 'continuous-verification', 'rollback'],
    subUseCaseId: 'cd-canary',
    subUseCaseTitle: 'Canary Deployment',
    useCaseId: 'cd-deployment-strategies',
    useCaseTitle: 'Deployment Strategies',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery & GitOps',
    moduleColor: '#10B981',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ccm-003: Reserved Instance Optimization
  {
    id: 'ccm-003',
    title: 'Reserved Instance & Savings Plan Advisor',
    content: `Analyze {{cloud_provider}} compute usage across {{accounts_description}} and generate Reserved Instance and Savings Plan purchase recommendations.

Analysis scope: {{regions}} | Past {{analysis_period}} | Target coverage: {{target_coverage}}%

**Analysis steps:**

1. **Steady-state identification**: Find instance types running at ≥ {{utilization_threshold}}% uptime that are NOT dev/ephemeral environments (filter by tag: {{env_exclude_tag}}).

2. **Coverage gap**: Current RI/SP coverage is {{current_coverage}}%. Target: {{target_coverage}}%. Identify the workloads accounting for the gap.

3. **Purchase recommendations table**:
| Workload | Instance Type | Qty | Term | Payment | On-Demand/yr | Reserved/yr | Savings/yr | Break-Even |
|----------|--------------|-----|------|---------|-------------|------------|-----------|-----------|

For each row, compare 1-year vs. 3-year terms and No Upfront vs. Partial Upfront vs. All Upfront.

4. **Risk flags**:
   - Auto-scaling groups with tag {{auto_scaling_tag}}: recommend Compute Savings Plans instead of RIs
   - Workloads with < {{min_utilization}}% utilization variance: safe to commit
   - Workloads with > {{max_utilization_variance}}% variance: recommend On-Demand or Spot instead

5. **Prioritized purchase sequence**: Rank by annual savings potential. Top 5 purchases to make first.

6. **Harness CCM governance**: Generate cost policy gates that alert when on-demand spend in {{alert_scope}} exceeds \${{monthly_alert_threshold}}/month.

Output: Recommendation table, total projected annual savings, implementation checklist, and the CCM alert policy YAML.`,
    variables: [
      { id: 'v1', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Azure', 'GCP', 'Multi-cloud (AWS + Azure)'] },
      { id: 'v2', name: 'accounts_description', label: 'Accounts Scope', placeholder: 'e.g., all production accounts, or specific account IDs', type: 'text' },
      { id: 'v3', name: 'regions', label: 'Regions', placeholder: 'e.g., us-east-1, eu-west-1', type: 'text' },
      { id: 'v4', name: 'analysis_period', label: 'Analysis Period', placeholder: 'Select period', type: 'dropdown', options: ['30 days', '60 days', '90 days', '6 months'] },
      { id: 'v5', name: 'utilization_threshold', label: 'Steady-State Uptime Threshold (%)', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v6', name: 'env_exclude_tag', label: 'Env Tag to Exclude', placeholder: 'e.g., environment=dev', type: 'text', defaultValue: 'environment=dev' },
      { id: 'v7', name: 'current_coverage', label: 'Current RI/SP Coverage (%)', placeholder: 'e.g., 40', type: 'text' },
      { id: 'v8', name: 'target_coverage', label: 'Target RI/SP Coverage (%)', placeholder: 'e.g., 75', type: 'text', defaultValue: '75' },
      { id: 'v9', name: 'auto_scaling_tag', label: 'Auto-Scaling Group Tag', placeholder: 'e.g., aws:autoscaling:groupName', type: 'text' },
      { id: 'v10', name: 'min_utilization', label: 'Min Stable Utilization (%)', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v11', name: 'max_utilization_variance', label: 'Max Acceptable Variance (%)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v12', name: 'alert_scope', label: 'Alert Scope (account/tag)', placeholder: 'e.g., production account', type: 'text' },
      { id: 'v13', name: 'monthly_alert_threshold', label: 'Monthly Alert Threshold ($)', placeholder: 'e.g., 5000', type: 'text' },
    ],
    tags: ['reserved-instances', 'savings-plans', 'cost-optimization', 'finops', 'cloud-spend', 'commitment'],
    subUseCaseId: 'ccm-right-sizing',
    subUseCaseTitle: 'Resource Right-Sizing',
    useCaseId: 'ccm-cost-optimization',
    useCaseTitle: 'Cost Optimization',
    moduleId: 'ccm',
    moduleTitle: 'Cloud Cost Management',
    moduleColor: '#EF4444',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // sto-003: DAST API Security Testing
  {
    id: 'sto-003',
    title: 'DAST API Security Testing Pipeline',
    content: `Integrate dynamic application security testing (DAST) for the {{service_name}} API into the Harness STO pipeline.

API: {{api_type}} | Spec: {{spec_location}} | Target: {{target_url}} ({{target_env}})

**Harness STO DAST step configuration:**

Tool: {{dast_tool}}
Scan mode: {{scan_mode}}
Authentication: {{auth_type}}

**Security gates:**
- Block on: Critical severity findings (fail the pipeline)
- Warn on: High severity findings (allow with notification to {{security_team}})
- Report only: Medium and below

**OWASP Top 10 checks to enforce:**
- A01 Broken Access Control: Test {{auth_endpoints}} for unauthorized access (401/403 bypass attempts)
- A02 Cryptographic Failures: Verify TLS 1.2+ and no sensitive data in responses
- A03 Injection: Fuzz all input parameters across {{input_endpoints}} with SQLi, XSS, command injection payloads
- A05 Security Misconfiguration: Check for exposed debug endpoints, verbose error messages, missing security headers
- A07 Auth & Session Failures: Test session token entropy, expiry, and invalidation on logout

**Exclusions:** {{exclude_paths}}

**Remediation workflow:**
- On critical/high finding: Auto-create Jira ticket in {{jira_project}} with: tool, severity, endpoint, CWE ID, recommended fix
- Exemption process: Requires approval from {{security_team}} + documented business justification in the Jira ticket
- Re-scan after fix: Automated re-scan triggered when Jira ticket transitions to "In Review"

Provide the Harness STO pipeline step YAML, the {{dast_tool}} configuration file, and the Jira auto-creation webhook payload.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-api', type: 'text' },
      { id: 'v2', name: 'api_type', label: 'API Type', placeholder: 'Select type', type: 'dropdown', options: ['REST', 'GraphQL', 'gRPC', 'REST + GraphQL'] },
      { id: 'v3', name: 'spec_location', label: 'API Spec Location', placeholder: 'e.g., openapi.yaml, GraphQL introspection endpoint', type: 'text' },
      { id: 'v4', name: 'target_url', label: 'Target URL', placeholder: 'e.g., https://staging-api.myapp.com', type: 'text' },
      { id: 'v5', name: 'target_env', label: 'Target Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Staging', 'Pre-production', 'Production (passive scan)'] },
      { id: 'v6', name: 'dast_tool', label: 'DAST Tool', placeholder: 'Select tool', type: 'dropdown', options: ['OWASP ZAP', 'StackHawk', 'Burp Suite Enterprise', 'Veracode DAST'] },
      { id: 'v7', name: 'scan_mode', label: 'Scan Mode', placeholder: 'Select mode', type: 'dropdown', options: ['Baseline (passive only)', 'API scan (active)', 'Full scan'] },
      { id: 'v8', name: 'auth_type', label: 'Authentication Type', placeholder: 'Select auth', type: 'dropdown', options: ['API key (header)', 'OAuth2 client credentials', 'Basic auth', 'JWT Bearer token', 'No auth (public API)'] },
      { id: 'v9', name: 'auth_endpoints', label: 'Auth-Protected Endpoints to Test', placeholder: 'e.g., /api/v1/users, /api/v1/payments', type: 'text' },
      { id: 'v10', name: 'input_endpoints', label: 'Input Endpoints for Fuzzing', placeholder: 'e.g., /api/v1/search, /api/v1/orders', type: 'text' },
      { id: 'v11', name: 'exclude_paths', label: 'Paths to Exclude', placeholder: 'e.g., /health, /metrics, /swagger', type: 'text' },
      { id: 'v12', name: 'security_team', label: 'Security Team (approver)', placeholder: 'e.g., appsec-team', type: 'text' },
      { id: 'v13', name: 'jira_project', label: 'Jira Project Key', placeholder: 'e.g., SEC', type: 'text' },
    ],
    tags: ['dast', 'api-security', 'owasp', 'sto', 'zap', 'security-testing'],
    subUseCaseId: 'sto-sast',
    subUseCaseTitle: 'SAST Integration',
    useCaseId: 'sto-scanning',
    useCaseTitle: 'Security Scanning',
    moduleId: 'sto',
    moduleTitle: 'Security Testing Orchestration',
    moduleColor: '#8B5CF6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // srm-003: Incident Alert Triage
  {
    id: 'srm-003',
    title: 'Incident Alert Triage & Root Cause Diagnosis',
    content: `Triage the current incident for {{service_name}} and guide me through a structured root cause analysis.

**Incident details:**
Alert: {{alert_name}} fired at {{alert_time}} | Severity: {{severity}} | Environments: {{environments}}
Symptoms: {{symptom_description}}

**Step 1: Blast radius**
- Which services depend on {{service_name}}? List them and their current error rates vs. baseline.
- Estimated users/requests affected per minute based on observed traffic.

**Step 2: Timeline reconstruction**
- Last deployment to {{service_name}}: when, what changed (diff summary), who deployed
- Last config/infrastructure change (env vars, secrets, scaling events)
- Any correlated alerts or anomalies in the {{lookback_window}} before the incident

**Step 3: Ranked hypotheses**
List the top 3 most likely root causes, ordered by probability:
1. [Hypothesis] — Supporting evidence — Disconfirming evidence — Next diagnostic step
2. [Hypothesis] — Supporting evidence — Disconfirming evidence — Next diagnostic step
3. [Hypothesis] — Supporting evidence — Disconfirming evidence — Next diagnostic step

**Step 4: Immediate mitigations (choose one)**
- Option A (fastest): [action] — confidence: [%] — risk: [Low/Med/High]
- Option B (safest): [action] — confidence: [%] — risk: [Low/Med/High]
- Rollback decision: YES/NO with reasoning

**Step 5: Diagnostic commands**
Provide copy-paste diagnostic commands for {{platform}} to confirm/rule out the top hypothesis:
- Check 1: [command]
- Check 2: [command]
- Check 3: [command]

Format the output as a triage runbook ready to paste into {{incident_tool}}.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'alert_name', label: 'Alert Name', placeholder: 'e.g., HighErrorRate_payment-service', type: 'text' },
      { id: 'v3', name: 'alert_time', label: 'Alert Time', placeholder: 'e.g., 2025-06-12 14:32 UTC', type: 'text' },
      { id: 'v4', name: 'severity', label: 'Severity', placeholder: 'Select severity', type: 'dropdown', options: ['P1 - Critical', 'P2 - High', 'P3 - Medium'] },
      { id: 'v5', name: 'environments', label: 'Affected Environments', placeholder: 'e.g., production-us-east', type: 'text' },
      { id: 'v6', name: 'symptom_description', label: 'Symptom Description', placeholder: 'e.g., Error rate spiked to 15%, P99 latency > 5s', type: 'textarea' },
      { id: 'v7', name: 'lookback_window', label: 'Pre-incident Lookback Window', placeholder: 'Select window', type: 'dropdown', options: ['15 minutes', '30 minutes', '1 hour', '2 hours'] },
      { id: 'v8', name: 'platform', label: 'Infrastructure Platform', placeholder: 'Select platform', type: 'dropdown', options: ['Kubernetes (kubectl)', 'AWS ECS', 'AWS Lambda', 'GCP Cloud Run', 'Azure Container Apps'] },
      { id: 'v9', name: 'incident_tool', label: 'Incident Management Tool', placeholder: 'Select tool', type: 'dropdown', options: ['PagerDuty', 'OpsGenie', 'Jira Service Management', 'Slack incident channel'] },
    ],
    tags: ['incident', 'triage', 'rca', 'sre', 'on-call', 'debugging'],
    subUseCaseId: 'srm-incident',
    subUseCaseTitle: 'Incident Detection & Response',
    useCaseId: 'srm-monitoring',
    useCaseTitle: 'Service Monitoring',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability Management',
    moduleColor: '#14B8A6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // srm-004: On-Call Handover
  {
    id: 'srm-004',
    title: 'On-Call Shift Handover Report',
    content: `Generate an end-of-shift handover report for the {{team_name}} on-call rotation.

Outgoing: {{outgoing_engineer}} | Incoming: {{incoming_engineer}}
Shift: {{shift_start}} → {{shift_end}} | Services owned: {{service_list}}

---

## On-Call Handover — {{team_name}} — {{shift_end}}

### 1. Incidents This Shift
{{incidents_summary}}

For each incident produce:
| Incident | Start | Duration | Severity | Status | Open Action Items |
|----------|-------|----------|----------|--------|------------------|

### 2. Currently Open Alerts
Active alerts right now: {{active_alerts}}
Known noisy / ignorable alerts (don't page on these): {{ignore_list}}
Scheduled maintenance windows upcoming: {{maintenance_windows}}

### 3. Deployments In Flight
Services with active or pending deployments: {{in_flight_deployments}}
Expected completion: {{deployment_eta}}
Contact if issues arise: {{deployment_contacts}}

### 4. Elevated Risk — Watch List
Services that behaved abnormally this shift but did NOT trigger a page:
{{watchlist}}
What to watch for and why it's elevated: {{watch_reasoning}}

### 5. Action Items for Incoming Engineer
| Priority | Action | Owner | Due |
|----------|--------|-------|-----|
| P1 | ... | {{incoming_engineer}} | ASAP |

### 6. Slack Summary (post to {{ops_channel}})
> Shift handover complete. Key items:
> • [bullet 1]
> • [bullet 2]
> • [bullet 3]
> Incoming: @{{incoming_engineer}} — ping me if anything needs context.`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform SRE', type: 'text' },
      { id: 'v2', name: 'outgoing_engineer', label: 'Outgoing Engineer', placeholder: 'e.g., @alice', type: 'text' },
      { id: 'v3', name: 'incoming_engineer', label: 'Incoming Engineer', placeholder: 'e.g., @bob', type: 'text' },
      { id: 'v4', name: 'shift_start', label: 'Shift Start', placeholder: 'e.g., 2025-06-12 08:00 UTC', type: 'text' },
      { id: 'v5', name: 'shift_end', label: 'Shift End', placeholder: 'e.g., 2025-06-12 20:00 UTC', type: 'text' },
      { id: 'v6', name: 'service_list', label: 'Services Owned', placeholder: 'e.g., payment-service, auth-service, api-gateway', type: 'text' },
      { id: 'v7', name: 'incidents_summary', label: 'Incidents This Shift', placeholder: 'Describe any incidents that occurred', type: 'textarea' },
      { id: 'v8', name: 'active_alerts', label: 'Currently Active Alerts', placeholder: 'e.g., None, or list active alert names', type: 'text', defaultValue: 'None' },
      { id: 'v9', name: 'ignore_list', label: 'Known Noisy Alerts to Ignore', placeholder: 'e.g., DiskUsage_staging — known flap, ticket #1234', type: 'text' },
      { id: 'v10', name: 'maintenance_windows', label: 'Upcoming Maintenance Windows', placeholder: 'e.g., DB maintenance 2025-06-13 02:00–04:00 UTC', type: 'text' },
      { id: 'v11', name: 'in_flight_deployments', label: 'Deployments In Flight', placeholder: 'e.g., payment-service v2.1.4 deploying to production', type: 'text' },
      { id: 'v12', name: 'deployment_eta', label: 'Deployment ETA', placeholder: 'e.g., Completes ~21:30 UTC', type: 'text' },
      { id: 'v13', name: 'deployment_contacts', label: 'Deployment Contacts', placeholder: 'e.g., @charlie (payment team)', type: 'text' },
      { id: 'v14', name: 'watchlist', label: 'Elevated Risk Services', placeholder: 'e.g., inventory-service — higher than normal DB query times', type: 'text' },
      { id: 'v15', name: 'watch_reasoning', label: 'Watch Reasoning', placeholder: 'Explain what to look for', type: 'textarea' },
      { id: 'v16', name: 'ops_channel', label: 'Ops Slack Channel', placeholder: 'e.g., #platform-ops', type: 'text' },
    ],
    tags: ['on-call', 'handover', 'sre', 'incident', 'shift-report', 'operations'],
    subUseCaseId: 'srm-incident',
    subUseCaseTitle: 'Incident Detection & Response',
    useCaseId: 'srm-monitoring',
    useCaseTitle: 'Service Monitoring',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability Management',
    moduleColor: '#14B8A6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // srm-005: Service Runbook Generator
  {
    id: 'srm-005',
    title: 'Service Operational Runbook Generator',
    content: `Generate a complete operational runbook for {{service_name}} to guide on-call engineers through any incident.

Service: {{service_name}} | Team: {{team_name}} | Stack: {{tech_stack}}
Dependencies: {{dependencies}} | SLO: {{availability_slo}}% availability, {{latency_slo}}ms P95

---

# {{service_name}} Operational Runbook

## 1. Service Overview
- **What it does**: [Generate 2-sentence description based on service name and stack]
- **Architecture**: [Key components, data flow, external dependencies: {{dependencies}}]
- **Entry points**: primary API endpoint, internal gRPC interfaces, async consumers
- **Data stores**: [databases, caches, queues used]

## 2. Health Check Procedures
| Check | Command / URL | Expected Result | Anomaly Signal |
|-------|--------------|-----------------|----------------|
| Liveness | {{health_endpoint}}/health | HTTP 200 | Non-200 or timeout |
| Readiness | {{health_endpoint}}/ready | HTTP 200 | HTTP 503 |
| Key metrics | {{metrics_dashboard}} | Within SLO | Error rate > 1%, P95 > {{latency_slo}}ms |

## 3. Common Failure Modes
| Symptom | Likely Cause | Diagnose | Resolve | Escalate If |
|---------|-------------|---------|---------|------------|
| High error rate | Upstream dependency down | Check {{dependencies}} health | [auto-generated steps] | Persists > 5 min |
| Latency spike | DB slow queries / overload | Check slow query log | Scale DB read replicas | Cascade spreading |
| OOM / crashes | Memory leak / config issue | kubectl top pods | Rolling restart | Recurring within 1h |
| Deployment regression | Bad release | Harness rollback pipeline | Trigger rollback | Confirm with team |

## 4. Escalation Procedure
- **On-call rotation**: {{oncall_rotation}} (PagerDuty service: {{pd_service}})
- **L1 → L2 escalation**: After {{l2_escalation_mins}} minutes unresolved → {{l2_team}}
- **Declare P1 when**: {{p1_criteria}}

## 5. Recovery Playbooks
\`\`\`bash
# Restart service
{{restart_command}}

# Rollback via Harness pipeline
# Pipeline: {{rollback_pipeline}}
# Trigger via Harness UI or CLI: harness pipeline execute --pipeline-id {{rollback_pipeline}}
\`\`\`

## 6. Post-Incident Checklist
- [ ] Service restored to SLO
- [ ] Incident ticket updated with timeline
- [ ] Rollback (if applied) confirmed stable for 30 minutes
- [ ] Postmortem scheduled (for P1/P2)
- [ ] Runbook updated with any new failure modes discovered`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'team_name', label: 'Owning Team', placeholder: 'e.g., Payments Platform', type: 'text' },
      { id: 'v3', name: 'tech_stack', label: 'Tech Stack', placeholder: 'e.g., Node.js + PostgreSQL + Redis', type: 'text' },
      { id: 'v4', name: 'dependencies', label: 'External Dependencies', placeholder: 'e.g., auth-service, stripe-api, postgres-primary', type: 'text' },
      { id: 'v5', name: 'availability_slo', label: 'Availability SLO (%)', placeholder: 'e.g., 99.9', type: 'text', defaultValue: '99.9' },
      { id: 'v6', name: 'latency_slo', label: 'P95 Latency SLO (ms)', placeholder: 'e.g., 300', type: 'text', defaultValue: '300' },
      { id: 'v7', name: 'health_endpoint', label: 'Health Endpoint Base URL', placeholder: 'e.g., https://payment-service.internal', type: 'text' },
      { id: 'v8', name: 'metrics_dashboard', label: 'Metrics Dashboard Link', placeholder: 'e.g., https://app.datadoghq.com/dashboard/payment-svc', type: 'text' },
      { id: 'v9', name: 'oncall_rotation', label: 'On-Call Rotation Name', placeholder: 'e.g., Platform SRE Rotation', type: 'text' },
      { id: 'v10', name: 'pd_service', label: 'PagerDuty Service ID', placeholder: 'e.g., PABC123', type: 'text' },
      { id: 'v11', name: 'l2_escalation_mins', label: 'L2 Escalation Timeout (minutes)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v12', name: 'l2_team', label: 'L2 Team / Contact', placeholder: 'e.g., @payments-leads', type: 'text' },
      { id: 'v13', name: 'p1_criteria', label: 'P1 Declaration Criteria', placeholder: 'e.g., error rate > 5% for > 2 minutes, or payment failures', type: 'text' },
      { id: 'v14', name: 'restart_command', label: 'Restart Command', placeholder: 'e.g., kubectl rollout restart deployment/payment-service -n production', type: 'text' },
      { id: 'v15', name: 'rollback_pipeline', label: 'Harness Rollback Pipeline ID', placeholder: 'e.g., payment-service-rollback', type: 'text' },
    ],
    tags: ['runbook', 'sre', 'on-call', 'operations', 'incident-response', 'documentation'],
    subUseCaseId: 'srm-incident',
    subUseCaseTitle: 'Incident Detection & Response',
    useCaseId: 'srm-monitoring',
    useCaseTitle: 'Service Monitoring',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability Management',
    moduleColor: '#14B8A6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // idp-004: Service Documentation Generator
  {
    id: 'idp-004',
    title: 'Service Catalog Documentation Generator',
    content: `Generate a complete documentation package for {{service_name}} to publish in the Harness Internal Developer Portal.

Service: {{service_name}} | Team: {{team_name}} | Type: {{service_type}}
Stack: {{tech_stack}} | Repo: {{repo_url}} | Environments: {{environments}}

---

**Artifact 1: catalog-info.yaml** (Backstage-compatible)

\`\`\`yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: {{service_name}}
  title: "{{service_title}}"
  description: "[Generated: what this service does in one sentence]"
  tags: [{{tech_stack_tags}}]
  links:
    - url: {{runbook_url}}
      title: Runbook
      icon: docs
    - url: {{dashboard_url}}
      title: Metrics Dashboard
      icon: dashboard
  annotations:
    harness.io/project-url: "{{harness_project_url}}"
    pagerduty.com/service-id: "{{pd_service_id}}"
spec:
  type: {{service_type}}
  lifecycle: production
  owner: {{team_name}}
  system: {{system_name}}
\`\`\`

**Artifact 2: README sections**

## Overview
[Generate 2 paragraphs: what the service does, why it exists, key business value]

## Architecture
[Key components, data flow diagram (text), external dependencies: {{dependencies}}]

## Getting Started
Prerequisites: {{prerequisites}}
\`\`\`bash
{{setup_commands}}
\`\`\`

## API Reference
Base URL: {{api_base_url}}
Auth: {{auth_method}}

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
[Generate key endpoints based on service type: {{service_type}}]

## Configuration
Key environment variables and their purpose:
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|

## Ownership & Support
- Team: {{team_name}}
- On-call: {{oncall_contact}}
- Slack: {{slack_channel}}
- Escalation: {{escalation_contact}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'service_title', label: 'Service Display Title', placeholder: 'e.g., Payment Processing Service', type: 'text' },
      { id: 'v3', name: 'team_name', label: 'Owning Team', placeholder: 'e.g., Payments Platform', type: 'text' },
      { id: 'v4', name: 'service_type', label: 'Service Type', placeholder: 'Select type', type: 'dropdown', options: ['service', 'api', 'library', 'website', 'data-pipeline', 'worker'] },
      { id: 'v5', name: 'tech_stack', label: 'Tech Stack', placeholder: 'e.g., Node.js, PostgreSQL, Redis', type: 'text' },
      { id: 'v6', name: 'tech_stack_tags', label: 'Tech Tags (comma-separated)', placeholder: 'e.g., nodejs, postgresql, redis', type: 'text' },
      { id: 'v7', name: 'repo_url', label: 'Repository URL', placeholder: 'e.g., https://github.com/org/payment-service', type: 'text' },
      { id: 'v8', name: 'environments', label: 'Environments', placeholder: 'e.g., dev, staging, production', type: 'text' },
      { id: 'v9', name: 'system_name', label: 'System / Domain', placeholder: 'e.g., checkout-platform', type: 'text' },
      { id: 'v10', name: 'dependencies', label: 'External Dependencies', placeholder: 'e.g., auth-service, stripe, postgres', type: 'text' },
      { id: 'v11', name: 'prerequisites', label: 'Dev Prerequisites', placeholder: 'e.g., Node 20+, Docker, Harness CLI', type: 'text' },
      { id: 'v12', name: 'setup_commands', label: 'Setup Commands', placeholder: 'e.g., npm install && npm run dev', type: 'textarea' },
      { id: 'v13', name: 'api_base_url', label: 'API Base URL', placeholder: 'e.g., https://api.myapp.com/v1', type: 'text' },
      { id: 'v14', name: 'auth_method', label: 'Auth Method', placeholder: 'e.g., Bearer JWT', type: 'text' },
      { id: 'v15', name: 'runbook_url', label: 'Runbook URL', placeholder: 'e.g., https://wiki.company.com/runbooks/payment-service', type: 'text' },
      { id: 'v16', name: 'dashboard_url', label: 'Metrics Dashboard URL', placeholder: 'e.g., Datadog dashboard link', type: 'text' },
      { id: 'v17', name: 'harness_project_url', label: 'Harness Project URL', placeholder: 'e.g., https://app.harness.io/ng/account/...', type: 'text' },
      { id: 'v18', name: 'pd_service_id', label: 'PagerDuty Service ID', placeholder: 'e.g., PABC123', type: 'text' },
      { id: 'v19', name: 'oncall_contact', label: 'On-Call Contact', placeholder: 'e.g., @platform-oncall', type: 'text' },
      { id: 'v20', name: 'slack_channel', label: 'Slack Channel', placeholder: 'e.g., #payment-team', type: 'text' },
      { id: 'v21', name: 'escalation_contact', label: 'Escalation Contact', placeholder: 'e.g., @payments-leads', type: 'text' },
    ],
    tags: ['documentation', 'idp', 'service-catalog', 'backstage', 'readme', 'developer-portal'],
    subUseCaseId: 'idp-self-service',
    subUseCaseTitle: 'Self-Service Workflows',
    useCaseId: 'idp-self-service',
    useCaseTitle: 'Self-Service Platform',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // idp-005: ADR Generator
  {
    id: 'idp-005',
    title: 'Architecture Decision Record (ADR) Generator',
    content: `Generate an Architecture Decision Record (ADR) for the following engineering decision.

Organization: {{organization_name}} | Team: {{team_name}} | Date: {{decision_date}}
ADR Number: {{adr_number}} | Status: {{status}}

---

# ADR-{{adr_number}}: {{decision_title}}

**Date**: {{decision_date}}
**Status**: {{status}}
**Deciders**: {{team_name}}

## Context

{{problem_statement}}

**Constraints and forces:**
{{constraints}}

**Why this decision is needed now**: [Generate based on problem statement — urgency, deadline, dependency]

## Decision

We will: {{proposed_solution}}

## Considered Alternatives

| Option | Description | Pros | Cons | Why Not Selected |
|--------|-------------|------|------|-----------------|
| Option A: {{alternative_1}} | [Generate description] | [pros] | [cons] | [rejection reason] |
| Option B: {{alternative_2}} | [Generate description] | [pros] | [cons] | [rejection reason] |
| **Selected: {{proposed_solution}}** | [Generate description] | [pros] | [cons] | **SELECTED** |

## Consequences

**Positive outcomes:**
- [Generate 3–4 benefits of the decision]

**Negative trade-offs:**
- [Generate 2–3 trade-offs and how to mitigate them]

**Technical debt introduced:**
- [Any shortcuts or workarounds required by this decision]

## Implementation Plan

Target sprint: {{implementation_sprint}}

Steps:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Dependencies: [What must be in place before implementation]

## Review

Review date: {{review_date}}
Revisit trigger: {{review_trigger}}

Related ADRs: [any related decisions]`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp', type: 'text' },
      { id: 'v2', name: 'team_name', label: 'Proposing Team', placeholder: 'e.g., Platform Engineering', type: 'text' },
      { id: 'v3', name: 'decision_date', label: 'Decision Date', placeholder: 'e.g., 2025-06-12', type: 'text' },
      { id: 'v4', name: 'adr_number', label: 'ADR Number', placeholder: 'e.g., 0042', type: 'text' },
      { id: 'v5', name: 'decision_title', label: 'Decision Title', placeholder: 'e.g., Adopt OpenTelemetry for distributed tracing', type: 'text' },
      { id: 'v6', name: 'status', label: 'Status', placeholder: 'Select status', type: 'dropdown', options: ['Proposed', 'Accepted', 'Deprecated', 'Superseded'] },
      { id: 'v7', name: 'problem_statement', label: 'Problem Statement', placeholder: 'Describe the problem or need this decision addresses', type: 'textarea' },
      { id: 'v8', name: 'constraints', label: 'Constraints / Forces', placeholder: 'e.g., must work with existing Kubernetes setup, team expertise in Go', type: 'textarea' },
      { id: 'v9', name: 'proposed_solution', label: 'Proposed Solution', placeholder: 'e.g., use OpenTelemetry SDK with Jaeger backend', type: 'text' },
      { id: 'v10', name: 'alternative_1', label: 'Alternative Option A', placeholder: 'e.g., Vendor-specific tracing (Datadog APM)', type: 'text' },
      { id: 'v11', name: 'alternative_2', label: 'Alternative Option B', placeholder: 'e.g., No distributed tracing (logs only)', type: 'text' },
      { id: 'v12', name: 'implementation_sprint', label: 'Implementation Sprint', placeholder: 'e.g., Sprint 24', type: 'text' },
      { id: 'v13', name: 'review_date', label: 'Review Date', placeholder: 'e.g., 2025-12-01', type: 'text' },
      { id: 'v14', name: 'review_trigger', label: 'Review Trigger', placeholder: 'e.g., if latency overhead exceeds 5%, or CNCF landscape changes', type: 'text' },
    ],
    tags: ['adr', 'architecture', 'documentation', 'decision-record', 'engineering', 'idp'],
    subUseCaseId: 'idp-service-mgmt',
    subUseCaseTitle: 'Service Management',
    useCaseId: 'idp-service-mgmt',
    useCaseTitle: 'Service Management',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // idp-006: Developer Onboarding Workflow
  {
    id: 'idp-006',
    title: 'New Developer Onboarding Workflow',
    content: `Design an automated Day 1 onboarding workflow in Harness IDP for new engineers.

New engineer: {{engineer_name}} | Role: {{role}} | Team: {{team_name}}
Start date: {{start_date}} | Stack: {{tech_stack}}

---

**Harness IDP self-service workflow: "New Engineer Onboarding"**

**Trigger**: HR system webhook on hire confirmation (or manual trigger by engineering manager)

**Step 1 — Access provisioning (automated, Day 1 morning)**
- [ ] Add {{engineer_name}} to GitHub org → team: {{github_team}}
- [ ] Create Harness account with role: {{default_harness_role}} in project: {{harness_project}}
- [ ] Add to Jira project {{jira_project}} with {{jira_role}} permissions
- [ ] Add to Slack channels: {{slack_channels}}
- [ ] Send welcome email with portal links and onboarding guide

**Step 2 — Cloud Development Environment (Day 1)**
- [ ] Provision CDE workspace from template: {{cde_template}}
- [ ] Pre-installed tools: {{required_tools}}
- [ ] Auto-clone repositories: {{starter_repos}}
- [ ] Run setup script: \`{{setup_script}}\`
- [ ] Verify: CDE health check passes, engineer can run the app locally

**Step 3 — Knowledge base tasks (Week 1 Jira tickets)**
Create the following tickets in {{jira_project}} assigned to {{engineer_name}}:
1. "Deploy first change via {{team_name}} CI/CD pipeline" (Story, 2 pts)
2. "Complete security awareness training" (Task — link: {{security_training_url}})
3. "Review on-call runbooks for {{service_list}}" (Task)
4. "Shadow one on-call shift with {{buddy_engineer}}" (Task)

**Step 4 — Buddy system**
- Assign buddy: {{buddy_engineer}}
- Schedule 30-min daily syncs for first 2 weeks (auto-create calendar events)

**Completion criteria (end of Week 2):**
- [ ] First PR merged to {{starter_repo}}
- [ ] First pipeline triggered and passed
- [ ] Introduction posted in {{team_channel}}

Provide the Harness IDP workflow YAML, the welcome email template, and the Jira epic structure.`,
    variables: [
      { id: 'v1', name: 'engineer_name', label: 'Engineer Name', placeholder: 'e.g., Jane Smith', type: 'text' },
      { id: 'v2', name: 'role', label: 'Role', placeholder: 'Select role', type: 'dropdown', options: ['Software Engineer', 'Senior Software Engineer', 'Staff Engineer', 'DevOps Engineer', 'SRE', 'Platform Engineer'] },
      { id: 'v3', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Payments Platform', type: 'text' },
      { id: 'v4', name: 'start_date', label: 'Start Date', placeholder: 'e.g., 2025-07-01', type: 'text' },
      { id: 'v5', name: 'tech_stack', label: 'Primary Tech Stack', placeholder: 'e.g., Java + Kubernetes + PostgreSQL', type: 'text' },
      { id: 'v6', name: 'github_team', label: 'GitHub Team', placeholder: 'e.g., payments-platform', type: 'text' },
      { id: 'v7', name: 'default_harness_role', label: 'Harness Default Role', placeholder: 'Select role', type: 'dropdown', options: ['Developer', 'Pipeline Executor', 'Account Viewer', 'Custom Role'] },
      { id: 'v8', name: 'harness_project', label: 'Harness Project', placeholder: 'e.g., platform-engineering', type: 'text' },
      { id: 'v9', name: 'jira_project', label: 'Jira Project Key', placeholder: 'e.g., PAYM', type: 'text' },
      { id: 'v10', name: 'jira_role', label: 'Jira Role', placeholder: 'e.g., Developer', type: 'text' },
      { id: 'v11', name: 'slack_channels', label: 'Slack Channels to Join', placeholder: 'e.g., #engineering, #payments-team, #on-call', type: 'text' },
      { id: 'v12', name: 'cde_template', label: 'CDE Workspace Template', placeholder: 'e.g., java-microservice-workspace', type: 'text' },
      { id: 'v13', name: 'required_tools', label: 'Required Tools', placeholder: 'e.g., JDK 21, kubectl, Harness CLI, Docker', type: 'text' },
      { id: 'v14', name: 'starter_repos', label: 'Repositories to Clone', placeholder: 'e.g., github.com/org/payment-service, github.com/org/k8s-configs', type: 'text' },
      { id: 'v15', name: 'setup_script', label: 'Setup Script', placeholder: 'e.g., ./scripts/dev-setup.sh', type: 'text' },
      { id: 'v16', name: 'security_training_url', label: 'Security Training URL', placeholder: 'e.g., https://training.company.com/security', type: 'text' },
      { id: 'v17', name: 'service_list', label: 'Services to Learn', placeholder: 'e.g., payment-service, auth-service', type: 'text' },
      { id: 'v18', name: 'buddy_engineer', label: 'Buddy Engineer', placeholder: 'e.g., @carlos', type: 'text' },
      { id: 'v19', name: 'starter_repo', label: 'First PR Repository', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v20', name: 'team_channel', label: 'Team Slack Channel', placeholder: 'e.g., #payments-team', type: 'text' },
    ],
    tags: ['onboarding', 'idp', 'developer-experience', 'automation', 'workflow', 'cde'],
    subUseCaseId: 'idp-self-service',
    subUseCaseTitle: 'Self-Service Workflows',
    useCaseId: 'idp-self-service',
    useCaseTitle: 'Self-Service Platform',
    moduleId: 'idp',
    moduleTitle: 'Internal Developer Portal',
    moduleColor: '#0EA5E9',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // sei-004: Sprint Planning
  {
    id: 'sei-004',
    title: 'Sprint Planning & Capacity Forecast',
    content: `Run a data-driven sprint planning session for {{team_name}} using Harness SEI engineering insights.

Sprint {{sprint_number}} | Duration: {{sprint_length}} weeks | Team size: {{team_size}} engineers

---

**1. Capacity calculation**

Available engineer-days:
- Total: {{team_size}} × {{sprint_days}} days = [calculated total]
- Less planned PTO/leave: {{planned_leave}} days
- Less meeting overhead ({{meeting_overhead_pct}}%): [calculated]
- **Net capacity**: [calculated] engineer-days

Historical throughput (last 3 sprints):
- Median velocity: {{velocity_p50}} story points/sprint
- Points per engineer-day: [calculated]
- **Recommended commitment**: [calculated] points (±10% buffer)

**2. Backlog health check**

Stories ready for sprint (acceptance criteria done): {{ready_stories}}
Stories needing grooming: {{ungroomed_stories}} — flag these for a 30-minute refinement session before planning
Carry-over from Sprint {{prev_sprint}}: {{carry_over_points}} points — include in commitment

Risk flags:
- Stories > {{large_story_threshold}} points: [list] → recommend splitting before committing
- Stories with unresolved dependencies: {{blocked_stories}}
- P1/P2 bugs that must be addressed: {{critical_bugs}}

**3. Recommended sprint composition**

| Category | Target % | Story Points | Rationale |
|----------|----------|-------------|-----------|
| New features | {{feature_pct}}% | [calculated] | Product roadmap |
| Bug fixes | {{bug_pct}}% | [calculated] | Quality baseline |
| Tech debt | {{tech_debt_pct}}% | [calculated] | Sustainability |
| On-call buffer | {{oncall_buffer}}% | [calculated] | Unplanned work |

**4. Sprint goal (generate)**
Based on the top priority stories, write a one-sentence sprint goal.

**5. Slack kickoff message (post to {{team_channel}})**
> Sprint {{sprint_number}} starts today! Goal: [generated]. Commitment: [X] pts. Key deliverables: [top 3]. Let's go! 🚀`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform Engineering', type: 'text' },
      { id: 'v2', name: 'sprint_number', label: 'Sprint Number', placeholder: 'e.g., 47', type: 'text' },
      { id: 'v3', name: 'sprint_length', label: 'Sprint Length (weeks)', placeholder: 'Select length', type: 'dropdown', options: ['1 week', '2 weeks', '3 weeks'] },
      { id: 'v4', name: 'sprint_days', label: 'Working Days in Sprint', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v5', name: 'team_size', label: 'Team Size (engineers)', placeholder: 'e.g., 6', type: 'text' },
      { id: 'v6', name: 'planned_leave', label: 'Planned PTO/Leave (engineer-days)', placeholder: 'e.g., 3', type: 'text', defaultValue: '0' },
      { id: 'v7', name: 'meeting_overhead_pct', label: 'Meeting Overhead (%)', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v8', name: 'velocity_p50', label: 'Median Velocity (story points)', placeholder: 'e.g., 42', type: 'text' },
      { id: 'v9', name: 'ready_stories', label: 'Stories Ready for Sprint', placeholder: 'e.g., 8 stories, 38 points', type: 'text' },
      { id: 'v10', name: 'ungroomed_stories', label: 'Ungroomed Stories Count', placeholder: 'e.g., 4', type: 'text', defaultValue: '0' },
      { id: 'v11', name: 'prev_sprint', label: 'Previous Sprint Number', placeholder: 'e.g., 46', type: 'text' },
      { id: 'v12', name: 'carry_over_points', label: 'Carry-Over Points', placeholder: 'e.g., 5', type: 'text', defaultValue: '0' },
      { id: 'v13', name: 'large_story_threshold', label: 'Large Story Threshold (points)', placeholder: 'e.g., 8', type: 'text', defaultValue: '8' },
      { id: 'v14', name: 'blocked_stories', label: 'Blocked Stories', placeholder: 'e.g., PROJ-123 blocked on API from auth-team', type: 'text', defaultValue: 'None' },
      { id: 'v15', name: 'critical_bugs', label: 'Critical Bugs (P1/P2)', placeholder: 'e.g., BUG-456, BUG-789', type: 'text', defaultValue: 'None' },
      { id: 'v16', name: 'feature_pct', label: 'Feature Work %', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v17', name: 'bug_pct', label: 'Bug Fix %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v18', name: 'tech_debt_pct', label: 'Tech Debt %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v19', name: 'oncall_buffer', label: 'On-Call Buffer %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v20', name: 'team_channel', label: 'Team Slack Channel', placeholder: 'e.g., #platform-team', type: 'text' },
    ],
    tags: ['sprint-planning', 'capacity', 'velocity', 'agile', 'sei', 'engineering-metrics'],
    subUseCaseId: 'sei-agile',
    subUseCaseTitle: 'Agile Planning',
    useCaseId: 'sei-agile',
    useCaseTitle: 'Agile & Planning',
    moduleId: 'sei',
    moduleTitle: 'Software Engineering Insights',
    moduleColor: '#3B82F6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // sei-005: Release Readiness Assessment
  {
    id: 'sei-005',
    title: 'Release Readiness Assessment',
    content: `Assess whether {{service_name}} v{{version}} is ready to release to {{target_environment}}.

Change summary: {{change_summary}} | Target date: {{target_date}}

---

## Release Readiness Report — {{service_name}} v{{version}}

**Overall verdict**: 🔴 / 🟡 / 🟢 [Generate based on checks below]

---

### Code Quality
| Check | Threshold | Actual | Status |
|-------|-----------|--------|--------|
| All PRs merged to {{release_branch}} | 100% | {{pr_status}} | ✅/❌ |
| Code coverage | ≥ {{min_coverage}}% | {{current_coverage}}% | ✅/❌ |
| SAST / STO scan | 0 critical issues | {{sast_status}} | ✅/❌ |
| Dependency CVEs | 0 critical/high | {{cve_status}} | ✅/❌ |

### Testing
| Check | Threshold | Actual | Status |
|-------|-----------|--------|--------|
| Unit test pass rate | ≥ {{min_pass_rate}}% | {{unit_test_pass_rate}}% | ✅/❌ |
| Integration tests ({{staging_env}}) | All passing | {{integration_status}} | ✅/❌ |
| P95 latency (perf test) | < {{latency_slo}}ms | {{perf_p95}}ms | ✅/❌ |
| Regression suite | All passing | {{regression_status}} | ✅/❌ |

### Infrastructure & Config
| Check | Status | Notes |
|-------|--------|-------|
| Feature flags configured | {{ff_status}} | |
| DB migrations backward-compatible | {{migration_status}} | |
| Rollback plan documented | {{rollback_doc_status}} | Link: {{rollback_doc_link}} |
| Secrets/env vars updated | {{config_status}} | |

### Communication
| Check | Status |
|-------|--------|
| Release notes drafted | {{release_notes_status}} |
| Stakeholders notified | {{stakeholder_notify_status}} |
| On-call team briefed | {{oncall_brief_status}} |

---

### Blocking Items (must resolve before release)
[List any ❌ items with owner and resolution ETA]

### Recommendation
**GO / NO-GO** — [Generate rationale based on check results]

If NO-GO: estimated unblock date based on outstanding items.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'version', label: 'Version', placeholder: 'e.g., 2.4.0', type: 'text' },
      { id: 'v3', name: 'target_environment', label: 'Target Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Production', 'Pre-production', 'Staging'] },
      { id: 'v4', name: 'target_date', label: 'Target Release Date', placeholder: 'e.g., 2025-07-01', type: 'text' },
      { id: 'v5', name: 'change_summary', label: 'Change Summary', placeholder: 'Brief description of what this release contains', type: 'textarea' },
      { id: 'v6', name: 'release_branch', label: 'Release Branch', placeholder: 'e.g., release/2.4.0', type: 'text' },
      { id: 'v7', name: 'min_coverage', label: 'Coverage Threshold (%)', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v8', name: 'current_coverage', label: 'Current Coverage (%)', placeholder: 'e.g., 84', type: 'text' },
      { id: 'v9', name: 'pr_status', label: 'PR Merge Status', placeholder: 'e.g., All merged / 2 pending', type: 'text' },
      { id: 'v10', name: 'sast_status', label: 'SAST Scan Status', placeholder: 'e.g., Passed / 1 critical open', type: 'text' },
      { id: 'v11', name: 'cve_status', label: 'CVE Scan Status', placeholder: 'e.g., Clean / 2 high pending', type: 'text' },
      { id: 'v12', name: 'min_pass_rate', label: 'Min Test Pass Rate (%)', placeholder: 'e.g., 99', type: 'text', defaultValue: '99' },
      { id: 'v13', name: 'unit_test_pass_rate', label: 'Unit Test Pass Rate (%)', placeholder: 'e.g., 99.5', type: 'text' },
      { id: 'v14', name: 'staging_env', label: 'Staging Environment', placeholder: 'e.g., staging-us-east', type: 'text' },
      { id: 'v15', name: 'integration_status', label: 'Integration Test Status', placeholder: 'e.g., All passing / 3 failing', type: 'text' },
      { id: 'v16', name: 'latency_slo', label: 'P95 Latency SLO (ms)', placeholder: 'e.g., 300', type: 'text', defaultValue: '300' },
      { id: 'v17', name: 'perf_p95', label: 'Actual P95 Latency (ms)', placeholder: 'e.g., 245', type: 'text' },
      { id: 'v18', name: 'regression_status', label: 'Regression Test Status', placeholder: 'e.g., All passing', type: 'text' },
      { id: 'v19', name: 'ff_status', label: 'Feature Flags Status', placeholder: 'e.g., Configured & tested', type: 'text' },
      { id: 'v20', name: 'migration_status', label: 'DB Migration Status', placeholder: 'e.g., Backward compatible / N/A', type: 'text' },
      { id: 'v21', name: 'rollback_doc_status', label: 'Rollback Plan Status', placeholder: 'e.g., Documented', type: 'text' },
      { id: 'v22', name: 'rollback_doc_link', label: 'Rollback Plan Link', placeholder: 'e.g., https://wiki.company.com/rollback/payment-v2.4.0', type: 'text' },
      { id: 'v23', name: 'config_status', label: 'Config/Secrets Status', placeholder: 'e.g., Updated in all envs', type: 'text' },
      { id: 'v24', name: 'release_notes_status', label: 'Release Notes Status', placeholder: 'e.g., Draft ready / Not started', type: 'text' },
      { id: 'v25', name: 'stakeholder_notify_status', label: 'Stakeholder Notification', placeholder: 'e.g., Notified / Pending', type: 'text' },
      { id: 'v26', name: 'oncall_brief_status', label: 'On-Call Brief Status', placeholder: 'e.g., Briefed / Scheduled', type: 'text' },
    ],
    tags: ['release', 'readiness', 'checklist', 'go-no-go', 'quality-gate', 'sei'],
    subUseCaseId: 'sei-metrics',
    subUseCaseTitle: 'Engineering Metrics',
    useCaseId: 'sei-metrics',
    useCaseTitle: 'Engineering Insights & Metrics',
    moduleId: 'sei',
    moduleTitle: 'Software Engineering Insights',
    moduleColor: '#3B82F6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // ce-003: Chaos GameDay Planner
  {
    id: 'ce-003',
    title: 'Chaos Engineering GameDay Planner',
    content: `Plan a full chaos engineering GameDay for {{team_name}} targeting {{service_name}}.

Date: {{gameday_date}} | Duration: {{duration}} hours | Participants: {{participants}}

---

## Chaos GameDay Runbook — {{service_name}}

**Primary hypothesis**: {{hypothesis}}
**Success criteria**: {{success_criteria}}
**Blast radius limit**: {{blast_radius_limit}}

---

### Pre-Game Checklist (30 minutes before start)
- [ ] Confirm all monitoring dashboards are live: {{dashboards}}
- [ ] Verify rollback procedures are tested and accessible
- [ ] Brief all participants on hypothesis, success criteria, and emergency stop
- [ ] **Emergency stop signal**: {{stop_signal}} — anyone can call stop, no questions asked
- [ ] Confirm on-call engineer {{oncall_engineer}} is available throughout

---

### Experiment 1: {{experiment_1_name}} ({{exp1_duration}} minutes)

**Harness Chaos step configuration**:
\`\`\`yaml
type: {{chaos_step_1}}
target: {{target_1}}
duration: {{exp1_duration}}m
\`\`\`

**Expected behavior**: {{expected_1}}
**Metrics to watch**: {{observation_metrics}}
**Abort criteria**: Any SLO breach — error rate > {{slo_threshold}}% or P95 > {{latency_threshold}}ms
**Rollback**: {{rollback_1}}

*Observation window: {{observation_window}} minutes after experiment ends*

---

### Experiment 2: {{experiment_2_name}} ({{exp2_duration}} minutes)

**Harness Chaos step**: {{chaos_step_2}}
**Target**: {{target_2}}
**Expected behavior**: {{expected_2}}
**Rollback**: {{rollback_2}}

*Observation window: {{observation_window}} minutes after experiment ends*

---

### Results Capture Template

| Metric | Baseline | During Exp 1 | During Exp 2 | Recovery Time |
|--------|----------|-------------|-------------|--------------|
| Error rate | | | | |
| P95 latency | | | | |
| Throughput | | | | |
| [Custom metric] | | | | |

**Did the system behave as hypothesized?** YES / NO
**Surprises discovered**:
**Action items** (create as Harness chaos experiment improvements):

---

### Post-Game Retrospective (30 minutes)
1. What confirmed our hypothesis?
2. What surprised us?
3. What weaknesses did we find that need fixing before next GameDay?
4. Schedule follow-up experiments: [date]`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform SRE', type: 'text' },
      { id: 'v2', name: 'service_name', label: 'Target Service', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v3', name: 'gameday_date', label: 'GameDay Date', placeholder: 'e.g., 2025-07-15', type: 'text' },
      { id: 'v4', name: 'duration', label: 'Duration (hours)', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v5', name: 'participants', label: 'Participants', placeholder: 'e.g., @alice, @bob, @charlie (product observer)', type: 'text' },
      { id: 'v6', name: 'hypothesis', label: 'Primary Hypothesis', placeholder: 'e.g., payment-service will gracefully degrade when its Redis cache is unavailable', type: 'textarea' },
      { id: 'v7', name: 'success_criteria', label: 'Success Criteria', placeholder: 'e.g., error rate stays < 2% and user-facing latency < 2x baseline during cache outage', type: 'text' },
      { id: 'v8', name: 'blast_radius_limit', label: 'Blast Radius Limit', placeholder: 'e.g., staging only, or 5% of production traffic', type: 'text' },
      { id: 'v9', name: 'dashboards', label: 'Monitoring Dashboards', placeholder: 'e.g., Datadog SLO dashboard, Harness CV panel', type: 'text' },
      { id: 'v10', name: 'stop_signal', label: 'Emergency Stop Signal', placeholder: 'e.g., "STOP GAMEDAY" in #chaos-channel, or red button in Harness chaos UI', type: 'text' },
      { id: 'v11', name: 'oncall_engineer', label: 'On-Call Engineer', placeholder: 'e.g., @diana', type: 'text' },
      { id: 'v12', name: 'experiment_1_name', label: 'Experiment 1 Name', placeholder: 'e.g., Redis cache pod failure', type: 'text' },
      { id: 'v13', name: 'exp1_duration', label: 'Experiment 1 Duration (minutes)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v14', name: 'chaos_step_1', label: 'Chaos Step 1 (Harness fault type)', placeholder: 'e.g., PodDelete, NetworkChaos, CPUHog', type: 'dropdown', options: ['PodDelete', 'PodCPUHog', 'PodMemoryHog', 'NetworkLatency', 'NetworkPacketLoss', 'NodeDrain', 'ServiceKill', 'DiskFill'] },
      { id: 'v15', name: 'target_1', label: 'Experiment 1 Target', placeholder: 'e.g., redis-cache pods in namespace production', type: 'text' },
      { id: 'v16', name: 'expected_1', label: 'Expected Behavior (Exp 1)', placeholder: 'e.g., service falls back to DB, latency increases < 2x, no errors', type: 'text' },
      { id: 'v17', name: 'rollback_1', label: 'Rollback Action (Exp 1)', placeholder: 'e.g., Harness auto-restores pods; manual: kubectl apply -f redis-restore.yaml', type: 'text' },
      { id: 'v18', name: 'experiment_2_name', label: 'Experiment 2 Name', placeholder: 'e.g., 50% network packet loss', type: 'text' },
      { id: 'v19', name: 'exp2_duration', label: 'Experiment 2 Duration (minutes)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v20', name: 'chaos_step_2', label: 'Chaos Step 2 (fault type)', placeholder: 'e.g., NetworkPacketLoss', type: 'dropdown', options: ['PodDelete', 'PodCPUHog', 'PodMemoryHog', 'NetworkLatency', 'NetworkPacketLoss', 'NodeDrain', 'ServiceKill', 'DiskFill'] },
      { id: 'v21', name: 'target_2', label: 'Experiment 2 Target', placeholder: 'e.g., payment-service pods', type: 'text' },
      { id: 'v22', name: 'expected_2', label: 'Expected Behavior (Exp 2)', placeholder: 'e.g., circuit breaker triggers within 30s, requests queue up', type: 'text' },
      { id: 'v23', name: 'rollback_2', label: 'Rollback Action (Exp 2)', placeholder: 'e.g., Stop chaos experiment in Harness UI', type: 'text' },
      { id: 'v24', name: 'observation_metrics', label: 'Observation Metrics', placeholder: 'e.g., error_rate, p95_latency, cache_hit_rate, circuit_breaker_state', type: 'text' },
      { id: 'v25', name: 'observation_window', label: 'Post-Experiment Observation Window (minutes)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v26', name: 'slo_threshold', label: 'Error Rate Abort Threshold (%)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v27', name: 'latency_threshold', label: 'Latency Abort Threshold (ms)', placeholder: 'e.g., 2000', type: 'text', defaultValue: '2000' },
    ],
    tags: ['chaos-engineering', 'gameday', 'resilience', 'sre', 'reliability', 'experiments'],
    subUseCaseId: 'ce-experiments',
    subUseCaseTitle: 'Chaos Experiments',
    useCaseId: 'ce-experiments',
    useCaseTitle: 'Chaos Experiments',
    moduleId: 'ce',
    moduleTitle: 'Chaos Engineering',
    moduleColor: '#EC4899',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },

  // iacm-004: Pre-Deployment Cost Estimation
  {
    id: 'iacm-004',
    title: 'Pre-Deployment Terraform Cost Estimation',
    content: `Estimate the infrastructure cost impact of pending Terraform changes in workspace {{workspace_name}} before approving deployment.

Workspace: {{workspace_name}} | PR: {{pr_reference}} | Environment: {{environment}} | Provider: {{cloud_provider}}

---

**Cost estimation report using Infracost:**

**Step 1: Cost diff**
Run \`infracost diff --path {{tf_path}}\` against the current state and summarize:

| Resource | Action | Current Monthly | New Monthly | Delta ($/month) |
|----------|--------|----------------|------------|----------------|
| [new resources] | Add | $0 | $X | +$X |
| [modified resources] | Change | $X | $Y | ±$Z |
| [removed resources] | Destroy | $X | $0 | -$X |
| **Total** | | **\${{current_monthly}}** | **[calculated]** | **[±delta]** |

**Step 2: Anomaly flags**

Review each added/modified resource:
- Resources costing > \${{single_resource_threshold}}/month: [list] → require additional approval from {{finops_approver}}
- Total monthly increase > \${{total_increase_threshold}}: trigger {{approval_gate}} approval gate
- Flagged resource types (high-cost patterns): {{flagged_resource_types}}

**Step 3: Tagging compliance**
Required tags: {{required_tags}}

Resources missing required tags:
| Resource | Missing Tags |
|----------|-------------|
[List non-compliant resources or "All resources compliant"]

**Step 4: Cost governance OPA policy**
Generate a Harness OPA policy that:
- Blocks the Terraform plan approval if monthly delta > \${{cost_block_threshold}}
- Blocks if any resource is missing tags from: {{required_tags}}
- Warns (but allows) if any single resource costs > \${{single_resource_threshold}}/month

\`\`\`rego
# Harness OPA cost governance policy
package harness.iacm.cost
# [Generate policy YAML]
\`\`\`

**Recommendation**: APPROVE / HOLD for review / BLOCK
Justification: [based on delta and compliance findings]`,
    variables: [
      { id: 'v1', name: 'workspace_name', label: 'IaCM Workspace Name', placeholder: 'e.g., production-infra', type: 'text' },
      { id: 'v2', name: 'pr_reference', label: 'PR / Branch Reference', placeholder: 'e.g., PR #142 or feature/add-rds-replica', type: 'text' },
      { id: 'v3', name: 'environment', label: 'Target Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Production', 'Staging', 'Development', 'Shared Services'] },
      { id: 'v4', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'GCP', 'Azure', 'Multi-cloud'] },
      { id: 'v5', name: 'tf_path', label: 'Terraform Root Path', placeholder: 'e.g., ./terraform/production', type: 'text', defaultValue: '.' },
      { id: 'v6', name: 'current_monthly', label: 'Current Monthly Cost ($)', placeholder: 'e.g., 4200', type: 'text' },
      { id: 'v7', name: 'single_resource_threshold', label: 'Single Resource Alert Threshold ($/month)', placeholder: 'e.g., 500', type: 'text', defaultValue: '500' },
      { id: 'v8', name: 'total_increase_threshold', label: 'Total Increase Alert Threshold ($/month)', placeholder: 'e.g., 1000', type: 'text', defaultValue: '1000' },
      { id: 'v9', name: 'finops_approver', label: 'FinOps Approver', placeholder: 'e.g., finops-team', type: 'text' },
      { id: 'v10', name: 'approval_gate', label: 'Approval Gate Name', placeholder: 'e.g., FinOps Review', type: 'text' },
      { id: 'v11', name: 'flagged_resource_types', label: 'Flagged Resource Types', placeholder: 'e.g., aws_rds_instance, aws_elasticache_cluster, aws_nat_gateway', type: 'text' },
      { id: 'v12', name: 'required_tags', label: 'Required Tags', placeholder: 'e.g., env, team, cost-center, project', type: 'text' },
      { id: 'v13', name: 'cost_block_threshold', label: 'Cost Block Threshold ($/month)', placeholder: 'e.g., 2000', type: 'text', defaultValue: '2000' },
    ],
    tags: ['terraform', 'cost-estimation', 'infracost', 'opa', 'iacm', 'finops', 'governance'],
    subUseCaseId: 'iacm-governance',
    subUseCaseTitle: 'Infrastructure Governance',
    useCaseId: 'iacm-governance',
    useCaseTitle: 'Terraform Governance',
    moduleId: 'iacm',
    moduleTitle: 'Infrastructure as Code Management',
    moduleColor: '#475569',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
]

function enrich(raw: RawPrompt): Prompt {
  return { ...raw, ...(PROMPT_METADATA[raw.id] ?? DEFAULT_METADATA) }
}

const ALL_RAW = [...SAMPLE_PROMPTS, ...MCP_PROMPTS]

export function getAllPrompts(): Prompt[] {
  return ALL_RAW.map(enrich)
}

export function getPromptById(id: string): Prompt | undefined {
  const raw = ALL_RAW.find(p => p.id === id)
  return raw ? enrich(raw) : undefined
}

export function getModules(): Module[] {
  return MODULES
}

export function getPromptsByModule(moduleId: string): Prompt[] {
  return ALL_RAW.filter(p => p.moduleId === moduleId).map(enrich)
}
