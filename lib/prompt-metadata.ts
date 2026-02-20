import { AgentType, PromptMode, PromptAvailability, RawPrompt } from './types'

export interface PromptMetadata {
  description: string
  agentType: AgentType
  mode: PromptMode
  availability: PromptAvailability
  mcpRequirements?: string[]
}

export const PROMPT_METADATA: Record<string, PromptMetadata> = {
  // ── CI ──────────────────────────────────────────────────────────────────────
  'ci-001': {
    description: 'Generates a complete CI pipeline YAML with build, test, caching, and failure notification stages tailored to your stack and runtime.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'ci-002': {
    description: 'Configures a Docker build-and-push step with multi-platform support, layer caching, vulnerability scanning, and registry authentication.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'ci-003': {
    description: 'Sets up parallel test execution with Harness Test Intelligence to identify and skip unchanged tests, dramatically reducing pipeline runtime.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'ci-004': {
    description: 'Designs a multi-layer caching strategy for your build tool to eliminate redundant dependency downloads and accelerate every subsequent build.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },

  // ── CD ──────────────────────────────────────────────────────────────────────
  'cd-001': {
    description: 'Designs a full canary deployment pipeline with traffic splitting, Continuous Verification gates, and automated rollback on SLO breach.',
    agentType: 'devops', mode: 'architect', availability: 'ga',
  },
  'cd-002': {
    description: 'Builds a zero-downtime blue-green deployment with automated traffic switching, health validation, and instant rollback capability.',
    agentType: 'devops', mode: 'architect', availability: 'ga',
  },
  'cd-003': {
    description: 'Configures a Kubernetes rolling deployment with liveness/readiness probes, HPA scaling, and Continuous Verification gates before promotion.',
    agentType: 'devops', mode: 'architect', availability: 'ga',
  },

  // ── Feature Management & Experimentation ────────────────────────────────────
  'ff-001': {
    description: 'Designs a staged feature rollout plan with user targeting rules, traffic percentage controls, and automatic kill switches for safe releases.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-002': {
    description: 'Configures an A/B testing experiment with control/treatment traffic splits, metric tracking, and statistical significance validation.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },

  // ── CCM ─────────────────────────────────────────────────────────────────────
  'ccm-001': {
    description: 'Analyzes your cloud resources to identify over-provisioned workloads and generates right-sizing recommendations with projected cost savings.',
    agentType: 'finops', mode: 'standard', availability: 'ga',
  },
  'ccm-002': {
    description: 'Sets up budget thresholds, anomaly detection rules, and automated cost governance alerts for your cloud accounts.',
    agentType: 'finops', mode: 'standard', availability: 'ga',
  },

  // ── STO ─────────────────────────────────────────────────────────────────────
  'sto-001': {
    description: 'Integrates SAST scanning into your CI pipeline with severity-based quality gates and actionable developer-facing remediation guidance.',
    agentType: 'appsec', mode: 'standard', availability: 'ga',
  },
  'sto-002': {
    description: 'Adds container vulnerability scanning to your pipeline with SBOM generation, CVE thresholds, and policy-based enforcement gates.',
    agentType: 'appsec', mode: 'standard', availability: 'ga',
  },

  // ── Chaos Engineering ────────────────────────────────────────────────────────
  'ce-001': {
    description: 'Designs a GameDay-ready pod failure experiment with configurable blast radius controls and real-time SLO impact monitoring.',
    agentType: 'reliability', mode: 'standard', availability: 'ga',
  },
  'ce-002': {
    description: 'Creates a network latency and packet loss simulation to validate service resilience, circuit breaker behavior, and graceful degradation.',
    agentType: 'reliability', mode: 'standard', availability: 'ga',
  },

  // ── SRM ─────────────────────────────────────────────────────────────────────
  'srm-001': {
    description: 'Defines SLIs, SLOs, and error budgets for your service with multi-window burn rate alerts and policy-based freeze workflows.',
    agentType: 'sre', mode: 'standard', availability: 'q3',
  },
  'srm-002': {
    description: 'Configures automated incident detection, on-call escalation routing, and runbook-driven response workflows to minimize MTTR.',
    agentType: 'sre', mode: 'standard', availability: 'q3',
  },

  // ── IDP ─────────────────────────────────────────────────────────────────────
  'idp-001': {
    description: 'Generates a Backstage-compatible service catalog template with ownership metadata, SLO links, and scaffolded CI/CD workflow starters.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'idp-002': {
    description: 'Creates a self-service workflow that provisions ephemeral environments on demand with RBAC controls and TTL-based cleanup automation.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'idp-003': {
    description: 'Defines service maturity scorecard checks across reliability, security, observability, and operational readiness dimensions.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },

  // ── IaCM ────────────────────────────────────────────────────────────────────
  'iacm-001': {
    description: 'Sets up Terraform workspace configuration with remote state management, team RBAC controls, and module registry integration.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'iacm-002': {
    description: 'Configures scheduled drift detection for your Terraform workspaces with auto-remediation workflows and compliance reporting.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'iacm-003': {
    description: 'Builds a Terraform change approval workflow with pre-deployment cost estimation, RBAC-based approvals, and full audit trail logging.',
    agentType: 'devops', mode: 'architect', availability: 'ga',
  },

  // ── SEI ─────────────────────────────────────────────────────────────────────
  'sei-001': {
    description: 'Sets up a DORA metrics dashboard tracking Deployment Frequency, Lead Time, Change Failure Rate, and MTTR across all your teams.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'sei-002': {
    description: 'Analyzes developer cycle time, code review throughput, and PR merge velocity to surface and quantify productivity bottlenecks.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'sei-003': {
    description: 'Generates sprint velocity trends, engineering investment allocation breakdowns, and predictive capacity insights from your Jira data.',
    agentType: 'devops', mode: 'mcp', availability: 'q3',
    mcpRequirements: ['Jira'],
  },

  // ── CDE ─────────────────────────────────────────────────────────────────────
  'cde-001': {
    description: 'Configures on-demand cloud development environments with pre-installed tooling, auto-provisioning from Git, and cost-aware auto-hibernation.',
    agentType: 'coding', mode: 'standard', availability: 'ga',
  },
  'cde-002': {
    description: 'Defines a standardized workspace template with consistent toolchains, IDE extensions, and security policies enforced across your entire dev team.',
    agentType: 'coding', mode: 'standard', availability: 'ga',
  },

  // ── Artifact Registry ────────────────────────────────────────────────────────
  'ar-001': {
    description: 'Sets up a private Harness Artifact Registry with multi-format support (Docker, Helm, Maven, npm), RBAC controls, and cross-region replication.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'ar-002': {
    description: 'Configures artifact security scanning policies with CVE severity thresholds, license compliance checks, and SBOM attestation requirements.',
    agentType: 'appsec', mode: 'standard', availability: 'ga',
  },

  // ── SSCA ────────────────────────────────────────────────────────────────────
  'ssca-001': {
    description: 'Generates and manages SBOMs for your software artifacts with SLSA provenance tracking, artifact signing, and full supply chain visibility.',
    agentType: 'appsec', mode: 'standard', availability: 'q4',
  },
  'ssca-002': {
    description: 'Defines OPA-based supply chain security policies that enforce signing requirements, SLSA levels, and block non-compliant artifacts at every gate.',
    agentType: 'appsec', mode: 'standard', availability: 'q4',
  },

  // ── AI Ops ──────────────────────────────────────────────────────────────────
  'aiops-001': {
    description: 'Configures ML-based predictive failure analysis to detect anomalies in system metrics and trigger proactive alerts before outages occur.',
    agentType: 'sre', mode: 'standard', availability: 'q3',
  },
  'aiops-002': {
    description: 'Sets up intelligent alert correlation to suppress noise, group related alerts by root cause, and surface only high-confidence actionable incidents.',
    agentType: 'sre', mode: 'standard', availability: 'q3',
  },

  // ── Enterprise Governance ────────────────────────────────────────────────────
  'enterprise-001': {
    description: 'Designs an attribute-based access control framework with dynamic permission evaluation, JIT access workflows, and identity provider integration.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'enterprise-002': {
    description: 'Creates a git-based Policy as Code workflow with OPA rules, CI/CD enforcement gates, and version-controlled policy lifecycle management.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },
  'enterprise-003': {
    description: 'Automates compliance monitoring, evidence collection, and audit reporting for SOC 2, PCI-DSS, and HIPAA regulatory requirements.',
    agentType: 'devops', mode: 'standard', availability: 'ga',
  },

  // ── MCP Prompts ─────────────────────────────────────────────────────────────
  'mcp-001': {
    description: 'Cross-references failed Harness deployments with open Jira Sev-1 tickets and active Datadog alerts to surface the highest-priority incidents.',
    agentType: 'sre', mode: 'mcp', availability: 'q3',
    mcpRequirements: ['Datadog', 'Jira'],
  },
  'mcp-002': {
    description: 'Maps GitHub PRs merged in a given period to deployment health signals in Datadog, identifying which code changes caused reliability regressions.',
    agentType: 'sre', mode: 'mcp', availability: 'q3',
    mcpRequirements: ['GitHub', 'Datadog'],
  },
  'mcp-003': {
    description: 'Generates a complete postmortem document by combining Harness incident timeline, Datadog metrics, and linked Jira tickets into a structured report.',
    agentType: 'sre', mode: 'mcp', availability: 'q3',
    mcpRequirements: ['Datadog', 'Jira'],
  },
  'mcp-004': {
    description: 'Queries GitHub Security Advisories for vulnerabilities in your service dependencies and auto-generates OPA policy gates to block affected builds.',
    agentType: 'appsec', mode: 'mcp', availability: 'q4',
    mcpRequirements: ['GitHub'],
  },
  'mcp-005': {
    description: 'Analyzes Jira sprint data alongside Harness pipeline execution metrics to identify the engineering process bottlenecks slowing your deployments.',
    agentType: 'devops', mode: 'mcp', availability: 'q3',
    mcpRequirements: ['Jira'],
  },
}

export const DEFAULT_METADATA: PromptMetadata = {
  description: '',
  agentType: 'devops',
  mode: 'standard',
  availability: 'ga',
}

// ── MCP-only prompts (full RawPrompt entries) ────────────────────────────────
export const MCP_PROMPTS: RawPrompt[] = [
  {
    id: 'mcp-001',
    title: 'Cross-System Incident Correlation',
    content: `Using my connected Datadog and Jira MCP integrations, analyze the past {{time_period}} and:

1. Identify all Harness pipeline deployments that failed or triggered rollbacks
2. Cross-reference those deployments with open Jira tickets labeled Sev-1 or P0 created in the same time window
3. Match both against active Datadog monitors and alerts firing during those deployments
4. Rank the resulting incidents by blast radius (services affected × user impact × ticket priority)
5. For each top-3 incident: summarize the deployment that triggered it, the Datadog symptoms, and the linked Jira ticket

Output a prioritized incident table with columns: Incident, Deployment, Datadog Alert, Jira Ticket, Recommended Next Step.`,
    variables: [
      { id: 'v1', name: 'time_period', label: 'Time Period', placeholder: 'e.g., 7 days, 2 weeks', type: 'dropdown', options: ['24 hours', '7 days', '14 days', '30 days'], defaultValue: '7 days' },
    ],
    tags: ['incident', 'datadog', 'jira', 'cross-system', 'sre'],
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
  {
    id: 'mcp-002',
    title: 'PR-to-Deployment Health Regression Analysis',
    content: `Using my GitHub and Datadog MCP connections, analyze the relationship between code changes and deployment health for {{service_name}}:

1. List all PRs merged to {{branch}} in the past {{time_period}}
2. For each PR: retrieve the corresponding Harness pipeline execution and its outcome
3. Overlay Datadog error rate and latency metrics from ±{{monitoring_window}} minutes around each deployment
4. Identify which PRs correlated with statistically significant metric degradation (>{{threshold}}% change)
5. For the top regressions: show the PR diff summary, the Datadog metric spike, and the deployment that introduced it

Produce a ranked list of "risky PRs" with: PR title, author, deployment time, metric delta, and whether it was rolled back.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'branch', label: 'Branch', placeholder: 'e.g., main', type: 'text', defaultValue: 'main' },
      { id: 'v3', name: 'time_period', label: 'Time Period', placeholder: 'e.g., 7 days', type: 'dropdown', options: ['7 days', '14 days', '30 days'], defaultValue: '14 days' },
      { id: 'v4', name: 'monitoring_window', label: 'Monitoring Window (mins)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v5', name: 'threshold', label: 'Regression Threshold (%)', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
    ],
    tags: ['github', 'datadog', 'regression', 'pr-analysis', 'deployment-health'],
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
  {
    id: 'mcp-003',
    title: 'Automated Postmortem Generation',
    content: `Using my Datadog and Jira MCP integrations, generate a complete incident postmortem for the {{incident_name}} incident on {{incident_date}}.

Structure the postmortem as follows:

**1. Executive Summary** (2-3 sentences: what happened, customer impact, duration)

**2. Timeline** — pull from Harness pipeline events, Datadog alert timestamps, and Jira ticket activity:
- When was the issue first detected?
- When did the on-call team engage?
- What was the deployment that introduced the regression?
- When was mitigation applied and service restored?

**3. Root Cause Analysis**
- Which Harness deployment or change triggered the incident?
- What Datadog metrics degraded and by how much?

**4. Impact Assessment**
- Affected services and environments
- Approximate user impact (from Datadog)
- SLO burn rate during the incident window

**5. Action Items** — create as Jira tickets in project {{jira_project}}:
- 3 immediate fixes
- 2 process improvements
- 1 monitoring improvement

**6. Lessons Learned**`,
    variables: [
      { id: 'v1', name: 'incident_name', label: 'Incident Name', placeholder: 'e.g., Payment Service Outage', type: 'text' },
      { id: 'v2', name: 'incident_date', label: 'Incident Date', placeholder: 'e.g., 2025-01-20', type: 'text' },
      { id: 'v3', name: 'jira_project', label: 'Jira Project Key', placeholder: 'e.g., INFRA, SRE', type: 'text' },
    ],
    tags: ['postmortem', 'incident', 'datadog', 'jira', 'sre', 'rca'],
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
  {
    id: 'mcp-004',
    title: 'GitHub Advisory to OPA Security Gate',
    content: `Using my GitHub MCP connection, check for security vulnerabilities affecting {{service_name}} and generate the corresponding Harness OPA policy gates.

Steps:
1. Query the GitHub Security Advisory Database for vulnerabilities affecting the dependencies listed in {{dependency_file}} ({{ecosystem}})
2. Filter for advisories with CVSS score ≥ {{min_cvss}} published in the last {{lookback_days}} days
3. For each critical/high advisory found:
   - Show: package name, affected version range, fixed version, CVE ID, CVSS score, description
4. Generate a Harness OPA Rego policy that:
   - Blocks pipeline execution if any scanned artifact contains packages from the advisory list
   - Allows override with a named approver group {{approver_group}}
   - Emits a policy violation message with the CVE ID and fix version

Output the complete Rego policy ready to paste into Harness Policy Studio.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v2', name: 'dependency_file', label: 'Dependency File', placeholder: 'e.g., package.json, pom.xml', type: 'text' },
      { id: 'v3', name: 'ecosystem', label: 'Ecosystem', placeholder: 'Select ecosystem', type: 'dropdown', options: ['npm', 'Maven', 'PyPI', 'Go', 'RubyGems', 'NuGet', 'Cargo'] },
      { id: 'v4', name: 'min_cvss', label: 'Min CVSS Score', placeholder: 'e.g., 7.0', type: 'text', defaultValue: '7.0' },
      { id: 'v5', name: 'lookback_days', label: 'Lookback (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v6', name: 'approver_group', label: 'Override Approver Group', placeholder: 'e.g., security-team', type: 'text' },
    ],
    tags: ['github', 'opa', 'security', 'advisory', 'policy', 'cve'],
    subUseCaseId: 'sto-gates',
    subUseCaseTitle: 'Security Quality Gates',
    useCaseId: 'sto-governance',
    useCaseTitle: 'Compliance & Governance',
    moduleId: 'sto',
    moduleTitle: 'Security Testing Orchestration',
    moduleColor: '#8B5CF6',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'mcp-005',
    title: 'Sprint Velocity vs. Pipeline Bottleneck Analysis',
    content: `Using my Jira MCP connection, correlate sprint delivery data with Harness pipeline execution metrics for team {{team_name}}.

Analysis scope: last {{sprint_count}} sprints

1. **Sprint Delivery Health** — from Jira:
   - Average story points committed vs. completed per sprint
   - % of stories that missed the sprint due to deployment failures
   - Top 3 issue types that caused carryover

2. **Pipeline Bottleneck Identification** — from Harness:
   - Average pipeline duration for {{pipeline_name}} over the sprint period
   - Stage-level breakdown: which stage consumes the most time?
   - Failed pipeline rate and most common failure reasons

3. **Correlation Analysis**:
   - Do slow pipelines correlate with lower sprint completion rates?
   - Which sprint had the most deployment failures? What was the story completion rate that sprint?

4. **Recommendations**:
   - Top 2 pipeline optimizations that would most improve sprint delivery
   - Any Jira issue patterns that predict deployment failures

Output a side-by-side sprint vs. pipeline health summary table, then the recommendations.`,
    variables: [
      { id: 'v1', name: 'team_name', label: 'Team Name', placeholder: 'e.g., Platform Engineering', type: 'text' },
      { id: 'v2', name: 'pipeline_name', label: 'Pipeline Name', placeholder: 'e.g., backend-deploy', type: 'text' },
      { id: 'v3', name: 'sprint_count', label: 'Number of Sprints', placeholder: 'e.g., 4', type: 'dropdown', options: ['2', '4', '6', '8'], defaultValue: '4' },
    ],
    tags: ['jira', 'sprint', 'velocity', 'pipeline', 'bottleneck', 'sei'],
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
]
