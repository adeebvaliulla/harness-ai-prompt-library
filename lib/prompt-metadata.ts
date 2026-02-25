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

  // ── FME: Flag Cleanup ────────────────────────────────────────────────────────
  'ff-cleanup-001': {
    description: 'Scans all feature flags in your project for zero-traffic, 100% rollout, and stale flags, and outputs a prioritized cleanup list with risk assessment.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-002': {
    description: 'Produces a comprehensive flag audit including last modification date, traffic volume, code references, and business impact classification for each flag.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-003': {
    description: 'Validates a specific flag for safe retirement by checking code references, dependencies, stakeholder approvals, and traffic history before providing a go/no-go.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-004': {
    description: 'Creates a phased, risk-tiered cleanup plan for multiple stale flags with timelines, stakeholder coordination steps, and rollback procedures.',
    agentType: 'release', mode: 'architect', availability: 'ga',
  },
  'ff-cleanup-005': {
    description: 'Designs and implements feature flag governance policies including mandatory expiration dates, owner validation, and automated compliance tracking.',
    agentType: 'release', mode: 'architect', availability: 'ga',
  },
  'ff-cleanup-006': {
    description: 'Evaluates flag-related technical debt across a service — flag count, targeting complexity, performance impact, and code complexity introduced by conditionals.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-007': {
    description: 'Sets up automated flag cleanup workflows with daily scans, owner notifications at 30/14/7 days before expiration, and safety-gated auto-archiving.',
    agentType: 'release', mode: 'architect', availability: 'ga',
  },
  'ff-cleanup-008': {
    description: 'Plans coordinated feature flag cleanup across multiple teams with shared-flag identification, approval workflows, and conflict resolution procedures.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-009': {
    description: 'Generates a compliance report flagging undocumented, orphaned, or policy-violating flags with a remediation plan for each violation.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-010': {
    description: 'Validates that a completed flag cleanup has not caused performance regressions, unexpected behavior, or monitoring gaps in production.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-011': {
    description: 'Executes an emergency cleanup for flags causing performance degradation or security risks, with an immediate action plan and stakeholder communication.',
    agentType: 'release', mode: 'standard', availability: 'ga',
  },
  'ff-cleanup-012': {
    description: 'Conducts a quarterly review of flag lifecycle patterns, team compliance, and cleanup policy effectiveness, and generates a cleanup calendar for the next quarter.',
    agentType: 'release', mode: 'architect', availability: 'ga',
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

  // ── FME: Flag Cleanup & Governance ──────────────────────────────────────────
  {
    id: 'ff-cleanup-001',
    title: 'Weekly Flag Cleanup Assessment',
    content: `Analyze all feature flags in {{project_name}} and identify candidates for cleanup.

Flag criteria to surface:
- Flags with zero traffic in the last 7 days
- Flags at 100% rollout for more than 14 days with no pending rollback
- Flags without any modification in the last 30+ days
- Flags missing owner assignments or documentation
- Flags approaching their planned expiration dates

For each flag found, provide:
- Flag name and current state
- Last activity date and traffic volume
- Risk level (low / medium / high) to archive
- Recommended action (archive / review / retain)

Generate a prioritized cleanup list sorted by risk level, starting with the safest to remove.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project / Environment', placeholder: 'e.g., payment-platform / production', type: 'text' },
    ],
    tags: ['feature-flags', 'cleanup', 'lifecycle', 'stale-flags', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-002',
    title: 'Stale Flag Audit Report',
    content: `Create a comprehensive audit of all feature flags for the past {{lookback_days}} days, covering:

For each flag, show:
- Last modification date and the user who made it
- Current rollout percentage and targeting rules summary
- Traffic volume trend over the lookback period
- Code references and downstream service dependencies
- Business impact classification: critical / medium / low

Flag as cleanup candidates any flags that meet two or more of:
- No traffic for {{lookback_days}} days
- No code reference found
- No owner assigned
- Rollout at 0% or 100% with no modification

Output as a structured table, then a separate section listing each cleanup candidate with justification.`,
    variables: [
      { id: 'v1', name: 'lookback_days', label: 'Lookback Period (days)', placeholder: 'e.g., 30', type: 'dropdown', options: ['14', '30', '60', '90'], defaultValue: '30' },
    ],
    tags: ['feature-flags', 'audit', 'stale-flags', 'lifecycle', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-003',
    title: 'Pre-Cleanup Flag Validation',
    content: `Before archiving feature flag {{flag_name}}, validate the following checklist and provide a go/no-go recommendation.

**Code Safety**
- Are all references to {{flag_name}} removed from the codebase?
- Do any other flags use {{flag_name}} as a prerequisite or dependency?
- Are there any active SDK evaluations in the last 7 days?

**Traffic & Usage**
- Confirm zero active traffic for a minimum of {{quiet_period}} days
- Verify no scheduled campaigns or experiments reference this flag
- Check that no A/B test results are still pending for this flag

**Stakeholder Approval**
- Flag owner sign-off obtained?
- Product team approval confirmed?
- Has the permanent feature state been documented?

**Post-Archive Validation**
- Is there a rollback plan if unexpected behavior is detected after archiving?

Summarize each check as PASS / FAIL / WARNING and conclude with: GO (safe to archive) or NO-GO (action required) with specific blockers listed.`,
    variables: [
      { id: 'v1', name: 'flag_name', label: 'Flag Name', placeholder: 'e.g., enable-new-checkout-flow', type: 'text' },
      { id: 'v2', name: 'quiet_period', label: 'Min Quiet Period (days)', placeholder: 'e.g., 14', type: 'dropdown', options: ['7', '14', '30'], defaultValue: '14' },
    ],
    tags: ['feature-flags', 'validation', 'cleanup', 'pre-archive', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-004',
    title: 'Bulk Cleanup Phased Plan',
    content: `Design a phased cleanup plan for {{flag_count}} identified stale feature flags in {{project_name}}.

**Phase 1 — Low Risk (Week 1–2)**
- Group flags by: zero traffic, 100% rollout, no code references
- List flags safe to archive immediately with no stakeholder review needed
- Provide archive commands / API calls for each

**Phase 2 — Medium Risk (Week 3–4)**
- Flags requiring owner notification before archiving
- Create 30-day archive schedule with notification cadence: 30 days → 14 days → 7 days → archive
- Identify code cleanup sprints required per service

**Phase 3 — High Risk / Cross-Team (Week 5–8)**
- Flags with cross-service dependencies or active experiments
- Stakeholder consultation plan with named approvers
- Coordinated code removal timeline across affected repositories

**Rollback Procedures**
For each phase, describe the rollback steps if unexpected behavior is detected post-cleanup.

**Monitoring**
Define the metrics to watch for {{monitoring_window}} days after each cleanup phase completes.`,
    variables: [
      { id: 'v1', name: 'flag_count', label: 'Number of Flags', placeholder: 'e.g., 24', type: 'text' },
      { id: 'v2', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-platform', type: 'text' },
      { id: 'v3', name: 'monitoring_window', label: 'Post-Cleanup Monitoring (days)', placeholder: 'e.g., 14', type: 'dropdown', options: ['7', '14', '30'], defaultValue: '14' },
    ],
    tags: ['feature-flags', 'cleanup', 'phased-plan', 'bulk', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-005',
    title: 'Governance Policy Enforcement Setup',
    content: `Implement feature flag governance policies for {{project_name}} to prevent flag accumulation going forward.

**Policy Definitions**
1. Mandatory expiration: all new flags must have an expiry date, default {{default_expiry_days}} days from creation
2. Owner requirement: no flag can be created without an assigned owner and team tag
3. Naming convention enforcement: flags must follow the pattern {{naming_pattern}}
4. Maximum flags per service: alert when any service exceeds {{max_flags_per_service}} active flags

**Enforcement Mechanisms**
- Configure Harness FME to block flag creation without required metadata
- Set up automated Jira/ticket creation for flags approaching expiry
- Add flag governance checks to the sprint planning template
- Create a monthly compliance dashboard showing policy adherence by team

**Automated Alerts**
- 30 days before expiry: notify owner via {{notification_channel}}
- 14 days before expiry: escalate to team lead
- Day of expiry: auto-disable flag and notify owner + platform team

**Compliance Tracking**
Define the quarterly review cadence and the metrics that constitute a healthy flag inventory.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-platform', type: 'text' },
      { id: 'v2', name: 'default_expiry_days', label: 'Default Expiry (days)', placeholder: 'e.g., 90', type: 'dropdown', options: ['30', '60', '90', '180'], defaultValue: '90' },
      { id: 'v3', name: 'naming_pattern', label: 'Naming Pattern', placeholder: 'e.g., [team]-[feature]-[env]', type: 'text' },
      { id: 'v4', name: 'max_flags_per_service', label: 'Max Flags per Service', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v5', name: 'notification_channel', label: 'Notification Channel', placeholder: 'Select channel', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'Email', 'PagerDuty'] },
    ],
    tags: ['feature-flags', 'governance', 'policy', 'compliance', 'fme'],
    subUseCaseId: 'ff-governance',
    subUseCaseTitle: 'Flag Governance',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-006',
    title: 'Feature Flag Technical Debt Assessment',
    content: `Evaluate the feature flag technical debt accumulated in {{service_name}} and provide a remediation roadmap.

**Flag Inventory Analysis**
- Total active flags vs. industry benchmark for a service of this size
- Average flag age and distribution (< 30 days / 30–90 days / 90+ days)
- Flags with nested conditions or prerequisite chains (complexity index)

**Code Impact Assessment**
- Lines of code containing flag conditionals
- Number of test cases covering flag-on vs. flag-off paths
- Estimated developer overhead per sprint caused by flag branching

**Performance Impact**
- Flag evaluation latency contribution (ms per request)
- SDK initialization overhead at service startup
- Number of flags evaluated per critical user path

**Technical Debt Score**
Assign a debt score (1–10) based on: flag count, complexity, age, and test coverage gaps.

**Remediation Roadmap**
Prioritize the top {{top_n}} flags to clean up first, with estimated effort (hours) and expected debt reduction per flag.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v2', name: 'top_n', label: 'Top N Flags to Prioritize', placeholder: 'e.g., 5', type: 'dropdown', options: ['3', '5', '10'], defaultValue: '5' },
    ],
    tags: ['feature-flags', 'technical-debt', 'assessment', 'performance', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-007',
    title: 'Automated Cleanup Workflow Setup',
    content: `Set up an automated feature flag cleanup workflow in Harness for {{project_name}}.

**Daily Automated Scans**
Configure a Harness pipeline that runs daily and:
1. Queries the FME API for flags matching cleanup criteria (zero traffic {{zero_traffic_days}}+ days, 100% rollout 14+ days, expired TTL)
2. Cross-references the FME SDK scan results against the codebase for orphaned references
3. Creates a daily cleanup report artifact

**Notification Automation**
- T-30 days before expiry: auto-message flag owner in {{notification_channel}} with cleanup checklist link
- T-14 days: escalation message to team lead
- T-7 days: final warning with one-click archive link
- T-0 (expiry): auto-disable flag, post to {{notification_channel}}, create cleanup Jira ticket

**Auto-Archive Safety Gates**
Only auto-archive flags that pass ALL of:
- Zero SDK evaluations for {{zero_traffic_days}} days
- No code references detected by static analysis
- Flag TTL explicitly expired
- No open Jira blockers tagged to this flag

**Override Mechanism**
Describe how flag owners can snooze auto-archive with justification, and the maximum snooze period.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-platform', type: 'text' },
      { id: 'v2', name: 'zero_traffic_days', label: 'Zero-Traffic Threshold (days)', placeholder: 'e.g., 30', type: 'dropdown', options: ['14', '30', '60'], defaultValue: '30' },
      { id: 'v3', name: 'notification_channel', label: 'Notification Channel', placeholder: 'Select channel', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'Email'] },
    ],
    tags: ['feature-flags', 'automation', 'cleanup', 'workflow', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-008',
    title: 'Cross-Team Flag Cleanup Coordination',
    content: `Coordinate feature flag cleanup across {{teams}} teams in {{project_name}}.

**Shared Flag Inventory**
- Identify all flags that affect more than one service or team
- Map flag ownership across teams and highlight gaps
- Flag any flags where the owning team no longer exists or has changed

**Cleanup Schedule**
Design a dependency-safe cleanup schedule:
1. List flags with no cross-team dependencies (can be cleaned independently)
2. List flags with upstream dependencies (must coordinate cleanup order)
3. List flags with downstream consumers (require consumer team sign-off first)

**Communication Protocol**
- Cleanup notification template for cross-team flags
- Approval workflow: who must approve before a shared flag is archived?
- Escalation path if a consuming team is unresponsive for {{escalation_days}} days

**Conflict Resolution**
Provide a decision framework for disputed flag cleanups — when one team wants to archive and another wants to keep the flag.

**Coordinated Code Cleanup**
Generate a cross-team sprint planning template that aligns code removal with flag archiving across all {{teams}} teams.`,
    variables: [
      { id: 'v1', name: 'teams', label: 'Teams Involved', placeholder: 'e.g., Platform, Payments, Auth', type: 'text' },
      { id: 'v2', name: 'project_name', label: 'Project Name', placeholder: 'e.g., core-platform', type: 'text' },
      { id: 'v3', name: 'escalation_days', label: 'Escalation Timeout (days)', placeholder: 'e.g., 5', type: 'dropdown', options: ['3', '5', '7', '14'], defaultValue: '5' },
    ],
    tags: ['feature-flags', 'cross-team', 'coordination', 'governance', 'fme'],
    subUseCaseId: 'ff-governance',
    subUseCaseTitle: 'Flag Governance',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-009',
    title: 'Flag Compliance & Audit Report',
    content: `Generate a feature flag compliance audit report for {{environment}} against the following policy standards.

**Compliance Checks**
For each active flag, evaluate:
1. Documentation: does the flag have a description, owner, and linked ticket?
2. Naming: does the flag follow the team naming convention?
3. Expiry: does the flag have a set expiration date within policy limits?
4. Targeting complexity: does the flag have more than {{max_targeting_rules}} targeting rules? (complexity risk)
5. Age: has the flag been active for more than {{max_age_days}} days without modification?
6. Security: is this flag controlling a security-sensitive feature? Is it subject to enhanced review?

**Compliance Score**
Calculate a compliance score (%) per team and per service.

**Violations Report**
List each violation with:
- Flag name and owning team
- Policy violated
- Severity: critical / warning / info
- Remediation action and deadline

**Remediation Plan**
For all critical violations, generate a 2-week remediation sprint plan with specific tasks assigned to flag owners.`,
    variables: [
      { id: 'v1', name: 'environment', label: 'Environment', placeholder: 'e.g., production', type: 'dropdown', options: ['production', 'staging', 'development', 'all'], defaultValue: 'production' },
      { id: 'v2', name: 'max_targeting_rules', label: 'Max Targeting Rules', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v3', name: 'max_age_days', label: 'Max Flag Age (days)', placeholder: 'e.g., 90', type: 'dropdown', options: ['60', '90', '180', '365'], defaultValue: '90' },
    ],
    tags: ['feature-flags', 'compliance', 'audit', 'governance', 'policy', 'fme'],
    subUseCaseId: 'ff-governance',
    subUseCaseTitle: 'Flag Governance',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-010',
    title: 'Post-Cleanup Production Validation',
    content: `After archiving feature flag {{flag_name}}, validate that the cleanup has not introduced any production issues.

**Immediate Checks (0–1 hour post-archive)**
- Error rate delta: compare {{service_name}} error rate to baseline (last 7-day average)
- Latency delta: check p50/p95/p99 response times for endpoints affected by {{flag_name}}
- Null pointer / undefined reference errors: scan application logs for flag-name references still in code
- SDK evaluation errors: confirm zero FME SDK errors related to missing flag

**Stability Window (1–{{monitoring_hours}} hours post-archive)**
- Monitor conversion rates for user flows previously gated by {{flag_name}}
- Confirm no spike in support tickets or user-reported issues
- Check downstream services for unexpected behavior changes

**Test Suite Validation**
- Confirm CI pipeline passes with flag removed from test fixtures
- Verify no test is explicitly testing for {{flag_name}} variation behavior

**Cleanup Success Report**
Generate a concise post-archive report with: timestamp, flag details, pre/post metrics comparison, test results, and a final "clean" or "rollback required" verdict.`,
    variables: [
      { id: 'v1', name: 'flag_name', label: 'Archived Flag Name', placeholder: 'e.g., enable-new-checkout-flow', type: 'text' },
      { id: 'v2', name: 'service_name', label: 'Affected Service', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v3', name: 'monitoring_hours', label: 'Monitoring Window (hours)', placeholder: 'e.g., 24', type: 'dropdown', options: ['4', '12', '24', '48'], defaultValue: '24' },
    ],
    tags: ['feature-flags', 'post-cleanup', 'validation', 'monitoring', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-011',
    title: 'Emergency Flag Cleanup',
    content: `Execute an emergency feature flag cleanup to address a {{issue_type}} issue in {{service_name}}.

**Immediate Triage (next 15 minutes)**
1. Identify all feature flags currently active in {{service_name}} that could contribute to {{issue_type}}
2. Rank flags by likelihood of contributing to the issue (based on recent changes and affected code paths)
3. Recommend the single flag most likely to be the root cause — provide disable command

**Rapid Disable Plan**
For the top suspect flag:
- Disable command / API call to execute immediately
- Expected behavior change after disable
- Estimated time to confirm if disable resolved the issue

**Stakeholder Communication**
Draft an incident communication message for {{notification_channel}} covering:
- What is happening and which flag is being disabled
- Expected customer impact during and after the change
- Who is executing the change and when

**Post-Emergency Actions**
Once the immediate issue is resolved:
- Document the timeline of events
- Identify why this flag was not caught in pre-cleanup validation
- Add a process improvement to the next retrospective
- Schedule a full post-mortem if customer impact exceeded {{impact_threshold}} minutes`,
    variables: [
      { id: 'v1', name: 'issue_type', label: 'Issue Type', placeholder: 'Select issue type', type: 'dropdown', options: ['performance degradation', 'security vulnerability', 'data inconsistency', 'service outage', 'elevated error rate'] },
      { id: 'v2', name: 'service_name', label: 'Affected Service', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v3', name: 'notification_channel', label: 'Notification Channel', placeholder: 'Select channel', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'PagerDuty', 'Email'] },
      { id: 'v4', name: 'impact_threshold', label: 'Postmortem Threshold (mins)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
    ],
    tags: ['feature-flags', 'emergency', 'incident', 'cleanup', 'fme'],
    subUseCaseId: 'ff-cleanup',
    subUseCaseTitle: 'Flag Cleanup & Retirement',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'ff-cleanup-012',
    title: 'Quarterly Flag Health Review',
    content: `Conduct a comprehensive {{quarter}} quarterly feature flag health review for {{project_name}}.

**Inventory Snapshot**
- Total flags: active vs. archived vs. pending cleanup at start and end of quarter
- Net flag growth rate and trend vs. previous 3 quarters
- Flags created vs. flags retired this quarter

**Lifecycle Pattern Analysis**
- Average flag lifespan this quarter vs. previous quarters
- % of flags retired within policy TTL (target: >{{target_retirement_pct}}%)
- Top 3 teams by flag accumulation and by flag retirement rate

**Cleanup Effectiveness**
- Flags cleaned up this quarter vs. planned target
- Average time from "identified as stale" to "archived"
- Cleanup actions blocked or delayed — root causes

**Policy Compliance Review**
- Current compliance score vs. last quarter
- Policies that need to be updated or tightened
- New flag patterns that need new governance rules

**Next Quarter Cleanup Calendar**
Generate a {{next_quarter}} cleanup calendar with:
- Monthly cleanup sprint assignments per team
- Flags already identified as candidates for Q+1 archiving
- Governance policy updates planned
- Tooling and automation improvements to implement`,
    variables: [
      { id: 'v1', name: 'quarter', label: 'Current Quarter', placeholder: 'e.g., Q2 2025', type: 'text' },
      { id: 'v2', name: 'project_name', label: 'Project Name', placeholder: 'e.g., core-platform', type: 'text' },
      { id: 'v3', name: 'target_retirement_pct', label: 'Target Retirement Rate (%)', placeholder: 'e.g., 80', type: 'text', defaultValue: '80' },
      { id: 'v4', name: 'next_quarter', label: 'Next Quarter', placeholder: 'e.g., Q3 2025', type: 'text' },
    ],
    tags: ['feature-flags', 'quarterly-review', 'governance', 'lifecycle', 'planning', 'fme'],
    subUseCaseId: 'ff-governance',
    subUseCaseTitle: 'Flag Governance',
    useCaseId: 'ff-lifecycle',
    useCaseTitle: 'Flag Lifecycle',
    moduleId: 'ff',
    moduleTitle: 'Feature Management & Experimentation',
    moduleColor: '#F59E0B',
    copyCount: 0,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
]
