import { Prompt, Module } from './types'

export const MODULES: Module[] = [
  {
    id: 'ci',
    name: 'Continuous Integration',
    shortName: 'CI',
    description: 'Build, test, and package your code automatically.',
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
    name: 'Continuous Delivery',
    shortName: 'CD',
    description: 'Deploy applications reliably to any environment.',
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
    name: 'Feature Flags',
    shortName: 'FF',
    description: 'Control feature releases with targeted rollouts.',
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
    description: 'Optimize cloud spend and eliminate waste.',
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
    name: 'Security Testing',
    shortName: 'STO',
    description: 'Shift-left security scanning across your pipelines.',
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
    description: 'Build resilience by proactively testing failure scenarios.',
    color: '#EC4899',
    icon: 'Zap',
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
        description: 'Validate system resilience during chaos',
        moduleId: 'ce',
        subUseCases: [
          { id: 'ce-slo-monitoring', title: 'SLO Monitoring During Chaos', useCaseId: 'ce-resilience' },
        ],
      },
    ],
  },
  {
    id: 'srm',
    name: 'Service Reliability',
    shortName: 'SRM',
    description: 'Monitor service health and manage SLOs.',
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
          { id: 'srm-alerts', title: 'Alert Configuration', useCaseId: 'srm-monitoring' },
        ],
      },
    ],
  },
]

export const SAMPLE_PROMPTS: Prompt[] = [
  // ── CI: Build Pipeline from Scratch ──────────────────────────────────────
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

Please include proper environment variable handling, appropriate resource limits, and ensure the pipeline follows Harness best practices for {{build_tool}} projects.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'build_tool', label: 'Build Tool', placeholder: 'Select build tool', type: 'dropdown', options: ['Maven', 'Gradle', 'npm', 'yarn', 'Go', 'pip', 'Cargo'], defaultValue: 'Maven' },
      { id: 'v3', name: 'branch_pattern', label: 'Branch Pattern', placeholder: 'e.g., main, develop, feature/*', type: 'text', defaultValue: 'main' },
      { id: 'v4', name: 'notification_channel', label: 'Notification Channel', placeholder: 'Select channel', type: 'dropdown', options: ['Slack', 'Microsoft Teams', 'Email', 'PagerDuty'] },
      { id: 'v5', name: 'runtime', label: 'Runtime', placeholder: 'e.g., Java 17, Node.js 20, Go 1.21', type: 'text' },
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
    copyCount: 142,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-02-01T09:30:00Z',
  },
  {
    id: 'ci-002',
    title: 'Docker Build & Push Pipeline Step',
    content: `Write a Harness CI pipeline step configuration to build and push a Docker image for {{service_name}} with the following specifications:

Service: {{service_name}}
Container Registry: {{registry}} (e.g., ECR, GCR, Docker Hub)
Image Name: {{image_name}}
Dockerfile location: {{dockerfile_path}}

Requirements:
- Build the Docker image using the Dockerfile at {{dockerfile_path}}
- Tag the image with both the Git commit SHA and {{image_tag}}
- Push to {{registry}} with proper authentication
- Scan the image for vulnerabilities before pushing (using Aqua Trivy or Snyk)
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
    copyCount: 98,
    createdAt: '2024-01-20T11:00:00Z',
    updatedAt: '2024-02-05T14:20:00Z',
  },
  {
    id: 'ci-003',
    title: 'Parallel Test Stage Configuration',
    content: `Configure a Harness CI pipeline with parallel test execution for {{project_name}} to reduce overall build time.

Current situation:
- Test framework: {{test_framework}}
- Total number of tests: {{test_count}}
- Average test suite runtime: {{current_runtime}} minutes
- Target runtime after parallelization: {{target_runtime}} minutes

Design the parallel test strategy with:
1. Split tests across {{parallel_count}} parallel runners
2. Use Harness Test Intelligence to identify and skip unchanged tests
3. Group tests by module/package for efficient distribution
4. Configure appropriate timeouts per runner
5. Aggregate results and fail the pipeline if any runner reports failures
6. Generate a unified test report combining all runner outputs

Infrastructure: {{infrastructure}} (cloud or on-premise)
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
    copyCount: 87,
    createdAt: '2024-01-25T09:00:00Z',
    updatedAt: '2024-02-10T11:45:00Z',
  },
  {
    id: 'ci-004',
    title: 'Dependency Caching Strategy',
    content: `Design an optimal dependency caching strategy for a Harness CI pipeline running {{build_tool}} builds for {{project_name}}.

Current build time breakdown:
- Dependency download: {{dep_download_time}} minutes
- Compilation: {{compile_time}} minutes
- Testing: {{test_time}} minutes

Goals:
1. Cache {{build_tool}} dependencies using the appropriate Harness cache key
2. Define cache key based on {{cache_key_source}} (e.g., lock file hash)
3. Set up separate caches for: dependencies, build outputs, and test results
4. Configure cache TTL of {{cache_ttl}} days
5. Handle cache invalidation when {{cache_key_source}} changes
6. Set up fallback cache strategy when exact key is not found

Storage backend: {{cache_storage}}
Expected cache size: {{cache_size}} GB

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
    copyCount: 76,
    createdAt: '2024-02-01T08:00:00Z',
    updatedAt: '2024-02-15T16:00:00Z',
  },

  // ── CD: Deployment Strategies ─────────────────────────────────────────────
  {
    id: 'cd-001',
    title: 'Canary Deployment Strategy',
    content: `Design a canary deployment strategy for {{service_name}} in Harness CD with the following configuration:

Service: {{service_name}}
Target Environment: {{environment}}
Current Version: {{current_version}}
New Version: {{new_version}}

Canary Rollout Plan:
1. Initial canary: {{initial_canary_percent}}% of traffic
2. Validation period: {{validation_period}} minutes at each stage
3. Progressive increase: {{initial_canary_percent}}% → 25% → 50% → 100%
4. Automated validation using: {{validation_type}}

Rollback Conditions:
- Error rate exceeds {{error_threshold}}%
- P99 latency exceeds {{latency_threshold}}ms
- Failed health checks on {{health_check_count}} consecutive attempts

Infrastructure: {{infrastructure_type}}
Metrics provider: {{metrics_provider}} (for automated rollback decisions)

Include:
- Harness pipeline YAML with canary stage configuration
- Verification step using CV (Continuous Verification)
- Automated rollback trigger configuration
- Notification setup for each phase transition`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., checkout-service', type: 'text' },
      { id: 'v2', name: 'environment', label: 'Target Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Production', 'Staging', 'QA', 'UAT'] },
      { id: 'v3', name: 'current_version', label: 'Current Version', placeholder: 'e.g., v2.3.1', type: 'text' },
      { id: 'v4', name: 'new_version', label: 'New Version', placeholder: 'e.g., v2.4.0', type: 'text' },
      { id: 'v5', name: 'initial_canary_percent', label: 'Initial Canary %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v6', name: 'validation_period', label: 'Validation Period (mins)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v7', name: 'validation_type', label: 'Validation Type', placeholder: 'Select type', type: 'dropdown', options: ['Prometheus metrics', 'Datadog APM', 'New Relic', 'Dynatrace', 'CloudWatch', 'Manual approval'] },
      { id: 'v8', name: 'error_threshold', label: 'Error Rate Threshold %', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v9', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 500', type: 'text' },
      { id: 'v10', name: 'health_check_count', label: 'Failed Health Check Count', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v11', name: 'infrastructure_type', label: 'Infrastructure', placeholder: 'Select infrastructure', type: 'dropdown', options: ['Kubernetes', 'ECS', 'EC2', 'Lambda', 'GKE', 'AKS'] },
      { id: 'v12', name: 'metrics_provider', label: 'Metrics Provider', placeholder: 'Select provider', type: 'dropdown', options: ['Prometheus', 'Datadog', 'New Relic', 'Dynatrace', 'CloudWatch', 'AppDynamics'] },
    ],
    tags: ['canary', 'deployment', 'rollout', 'verification', 'kubernetes'],
    subUseCaseId: 'cd-canary',
    subUseCaseTitle: 'Canary Deployment',
    useCaseId: 'cd-deployment-strategies',
    useCaseTitle: 'Deployment Strategies',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery',
    moduleColor: '#10B981',
    copyCount: 203,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-02-08T13:00:00Z',
  },
  {
    id: 'cd-002',
    title: 'Blue-Green Deployment Pipeline',
    content: `Create a blue-green deployment pipeline for {{application_name}} using Harness CD.

Application: {{application_name}}
Kubernetes Namespace: {{namespace}}
Current active color: {{active_color}} (the one currently receiving traffic)

Blue-Green Configuration:
1. Deploy {{new_version}} to the {{inactive_color}} environment
2. Run post-deployment smoke tests against {{inactive_color}}
3. Switch traffic from {{active_color}} → {{inactive_color}} using {{traffic_switch_method}}
4. Wait {{rollback_window}} minutes for validation before decommissioning old environment
5. On failure: automatically switch traffic back to {{active_color}}

Services to deploy: {{services_list}}
Load Balancer: {{load_balancer_type}}
Health check endpoint: {{health_endpoint}}

Include the complete Harness pipeline with:
- Infrastructure definition for both blue and green environments
- Traffic switching step using the {{load_balancer_type}} connector
- Smoke test configuration
- Approval gate before final cutover (if {{require_approval}} is true)`,
    variables: [
      { id: 'v1', name: 'application_name', label: 'Application Name', placeholder: 'e.g., order-management-app', type: 'text' },
      { id: 'v2', name: 'namespace', label: 'Kubernetes Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v3', name: 'active_color', label: 'Currently Active Color', placeholder: 'Select color', type: 'dropdown', options: ['Blue', 'Green'], defaultValue: 'Blue' },
      { id: 'v4', name: 'inactive_color', label: 'Inactive Color (deploy to)', placeholder: 'Select color', type: 'dropdown', options: ['Green', 'Blue'], defaultValue: 'Green' },
      { id: 'v5', name: 'new_version', label: 'New Version to Deploy', placeholder: 'e.g., v3.1.0', type: 'text' },
      { id: 'v6', name: 'traffic_switch_method', label: 'Traffic Switch Method', placeholder: 'Select method', type: 'dropdown', options: ['Kubernetes Service selector', 'Ingress annotation', 'AWS ALB weighted routing', 'Istio VirtualService'] },
      { id: 'v7', name: 'rollback_window', label: 'Rollback Window (mins)', placeholder: 'e.g., 15', type: 'text', defaultValue: '15' },
      { id: 'v8', name: 'services_list', label: 'Services to Deploy', placeholder: 'e.g., api-server, worker, scheduler', type: 'textarea' },
      { id: 'v9', name: 'load_balancer_type', label: 'Load Balancer Type', placeholder: 'Select LB', type: 'dropdown', options: ['AWS ALB', 'GCP Load Balancer', 'Azure Load Balancer', 'NGINX Ingress', 'Istio'] },
      { id: 'v10', name: 'health_endpoint', label: 'Health Check Endpoint', placeholder: 'e.g., /health/ready', type: 'text', defaultValue: '/health' },
      { id: 'v11', name: 'require_approval', label: 'Require Manual Approval', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
    ],
    tags: ['blue-green', 'deployment', 'zero-downtime', 'kubernetes', 'traffic'],
    subUseCaseId: 'cd-blue-green',
    subUseCaseTitle: 'Blue-Green Deployment',
    useCaseId: 'cd-deployment-strategies',
    useCaseTitle: 'Deployment Strategies',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery',
    moduleColor: '#10B981',
    copyCount: 156,
    createdAt: '2024-01-12T09:00:00Z',
    updatedAt: '2024-02-07T10:30:00Z',
  },
  {
    id: 'cd-003',
    title: 'Kubernetes Deployment with Health Checks',
    content: `Configure a Harness CD pipeline to deploy {{service_name}} to Kubernetes with comprehensive health validation.

Deployment Details:
- Service: {{service_name}}
- Image: {{image_name}}:{{image_tag}}
- Namespace: {{namespace}}
- Replicas: {{replica_count}} (minimum {{min_replicas}} during update)
- Resource requests: CPU {{cpu_request}}, Memory {{memory_request}}
- Resource limits: CPU {{cpu_limit}}, Memory {{memory_limit}}

Health Check Configuration:
1. Readiness probe: GET {{readiness_endpoint}} every 10s, timeout 5s, success threshold 1, failure threshold 3
2. Liveness probe: GET {{liveness_endpoint}} every 30s, timeout 5s, failure threshold 3
3. Startup probe: {{startup_probe_config}}

Deployment Strategy: Rolling update with:
- maxUnavailable: {{max_unavailable}}
- maxSurge: {{max_surge}}

Post-deployment verification:
- Wait for all {{replica_count}} replicas to be Ready
- Run smoke test against {{smoke_test_url}}
- Verify no error spike in {{apm_tool}} for {{verification_duration}} minutes`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., product-catalog', type: 'text' },
      { id: 'v2', name: 'image_name', label: 'Docker Image Name', placeholder: 'e.g., myorg/product-catalog', type: 'text' },
      { id: 'v3', name: 'image_tag', label: 'Image Tag', placeholder: 'e.g., v1.5.2', type: 'text' },
      { id: 'v4', name: 'namespace', label: 'Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v5', name: 'replica_count', label: 'Replica Count', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v6', name: 'min_replicas', label: 'Min Replicas During Update', placeholder: 'e.g., 2', type: 'text', defaultValue: '2' },
      { id: 'v7', name: 'cpu_request', label: 'CPU Request', placeholder: 'e.g., 250m', type: 'text', defaultValue: '250m' },
      { id: 'v8', name: 'memory_request', label: 'Memory Request', placeholder: 'e.g., 512Mi', type: 'text', defaultValue: '512Mi' },
      { id: 'v9', name: 'cpu_limit', label: 'CPU Limit', placeholder: 'e.g., 1000m', type: 'text', defaultValue: '1000m' },
      { id: 'v10', name: 'memory_limit', label: 'Memory Limit', placeholder: 'e.g., 1Gi', type: 'text', defaultValue: '1Gi' },
      { id: 'v11', name: 'readiness_endpoint', label: 'Readiness Endpoint', placeholder: 'e.g., /health/ready', type: 'text', defaultValue: '/health/ready' },
      { id: 'v12', name: 'liveness_endpoint', label: 'Liveness Endpoint', placeholder: 'e.g., /health/live', type: 'text', defaultValue: '/health/live' },
      { id: 'v13', name: 'startup_probe_config', label: 'Startup Probe Config', placeholder: 'e.g., HTTP GET /health, failureThreshold: 30', type: 'text' },
      { id: 'v14', name: 'max_unavailable', label: 'maxUnavailable', placeholder: 'e.g., 1 or 25%', type: 'text', defaultValue: '1' },
      { id: 'v15', name: 'max_surge', label: 'maxSurge', placeholder: 'e.g., 1 or 25%', type: 'text', defaultValue: '1' },
      { id: 'v16', name: 'smoke_test_url', label: 'Smoke Test URL', placeholder: 'e.g., https://api.prod.example.com/ping', type: 'text' },
      { id: 'v17', name: 'apm_tool', label: 'APM Tool', placeholder: 'Select APM', type: 'dropdown', options: ['Datadog', 'New Relic', 'Dynatrace', 'Prometheus/Grafana', 'AppDynamics'] },
      { id: 'v18', name: 'verification_duration', label: 'Verification Duration (mins)', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
    ],
    tags: ['kubernetes', 'health-checks', 'rolling-update', 'probes', 'verification'],
    subUseCaseId: 'cd-k8s-service',
    subUseCaseTitle: 'Kubernetes Service Deployment',
    useCaseId: 'cd-kubernetes',
    useCaseTitle: 'Kubernetes Deployment',
    moduleId: 'cd',
    moduleTitle: 'Continuous Delivery',
    moduleColor: '#10B981',
    copyCount: 134,
    createdAt: '2024-01-18T14:00:00Z',
    updatedAt: '2024-02-12T09:00:00Z',
  },

  // ── Feature Flags ─────────────────────────────────────────────────────────
  {
    id: 'ff-001',
    title: 'Progressive Feature Rollout Strategy',
    content: `Design a progressive rollout strategy in Harness Feature Flags for {{feature_name}}.

Feature: {{feature_name}}
Description: {{feature_description}}
Risk Level: {{risk_level}}

Rollout Phases:
Phase 1 - Internal (Day 1):
  - Target: Harness internal users and beta testers
  - Percentage: 100% of internal group

Phase 2 - Limited Beta (Day {{phase2_day}}):
  - Target: {{beta_criteria}} (e.g., opted-in users, specific account IDs)
  - Percentage: {{phase2_percent}}% of eligible users
  - Success criteria: {{phase2_success_criteria}}

Phase 3 - Gradual Expansion (Day {{phase3_day}}):
  - Percentage: {{phase3_percent}}%
  - Monitor: {{monitoring_metrics}}

Phase 4 - Full Release (Day {{phase4_day}}):
  - Percentage: 100%
  - Kill switch: Keep flag active for {{killswitch_days}} days post-full-release

Targeting Rules:
- Include: {{include_attributes}}
- Exclude: {{exclude_attributes}}
- Environment: {{environments}}

Provide the Harness FF SDK configuration code example for {{sdk_language}}.`,
    variables: [
      { id: 'v1', name: 'feature_name', label: 'Feature Name', placeholder: 'e.g., new-checkout-flow', type: 'text' },
      { id: 'v2', name: 'feature_description', label: 'Feature Description', placeholder: 'Brief description of the feature', type: 'textarea' },
      { id: 'v3', name: 'risk_level', label: 'Risk Level', placeholder: 'Select risk', type: 'dropdown', options: ['Low', 'Medium', 'High', 'Critical'] },
      { id: 'v4', name: 'phase2_day', label: 'Phase 2 Start (Day)', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v5', name: 'beta_criteria', label: 'Beta Target Criteria', placeholder: 'e.g., users with beta_tester=true attribute', type: 'text' },
      { id: 'v6', name: 'phase2_percent', label: 'Phase 2 Percentage', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v7', name: 'phase2_success_criteria', label: 'Phase 2 Success Criteria', placeholder: 'e.g., error rate < 0.5%, conversion rate >= baseline', type: 'textarea' },
      { id: 'v8', name: 'phase3_day', label: 'Phase 3 Start (Day)', placeholder: 'e.g., 7', type: 'text', defaultValue: '7' },
      { id: 'v9', name: 'phase3_percent', label: 'Phase 3 Percentage', placeholder: 'e.g., 50', type: 'text', defaultValue: '50' },
      { id: 'v10', name: 'phase4_day', label: 'Phase 4 Start (Day)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v11', name: 'monitoring_metrics', label: 'Monitoring Metrics', placeholder: 'e.g., conversion rate, p99 latency, error rate', type: 'text' },
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
    moduleTitle: 'Feature Flags',
    moduleColor: '#F59E0B',
    copyCount: 119,
    createdAt: '2024-01-22T10:00:00Z',
    updatedAt: '2024-02-09T11:00:00Z',
  },
  {
    id: 'ff-002',
    title: 'A/B Testing Flag Configuration',
    content: `Configure a Harness Feature Flag for A/B testing {{experiment_name}} to measure {{metric_to_optimize}}.

Experiment: {{experiment_name}}
Hypothesis: {{hypothesis}}
Primary Metric: {{metric_to_optimize}}
Secondary Metrics: {{secondary_metrics}}

Variant Configuration:
- Control (A): {{control_description}} → 50% of users
- Treatment (B): {{treatment_description}} → 50% of users

Targeting:
- User segment: {{target_segment}}
- Minimum sample size: {{min_sample_size}} users per variant
- Statistical significance threshold: {{significance_threshold}}%
- Minimum detectable effect: {{min_detectable_effect}}%

Duration: Run experiment for {{experiment_duration}} days

Integration:
- Analytics platform: {{analytics_platform}}
- Log events: {{events_to_track}}

Include:
1. Feature flag YAML configuration
2. SDK integration code in {{sdk_language}} showing how to bucket users and track events
3. Recommendation on when to conclude the experiment`,
    variables: [
      { id: 'v1', name: 'experiment_name', label: 'Experiment Name', placeholder: 'e.g., checkout-button-color-test', type: 'text' },
      { id: 'v2', name: 'hypothesis', label: 'Hypothesis', placeholder: 'e.g., Changing CTA to green increases conversions by 5%', type: 'textarea' },
      { id: 'v3', name: 'metric_to_optimize', label: 'Primary Metric', placeholder: 'e.g., checkout conversion rate', type: 'text' },
      { id: 'v4', name: 'secondary_metrics', label: 'Secondary Metrics', placeholder: 'e.g., revenue per session, cart abandonment', type: 'text' },
      { id: 'v5', name: 'control_description', label: 'Control (A) Description', placeholder: 'e.g., Blue CTA button, existing flow', type: 'text' },
      { id: 'v6', name: 'treatment_description', label: 'Treatment (B) Description', placeholder: 'e.g., Green CTA button, redesigned flow', type: 'text' },
      { id: 'v7', name: 'target_segment', label: 'Target User Segment', placeholder: 'e.g., logged-in users in US/CA/UK', type: 'text' },
      { id: 'v8', name: 'min_sample_size', label: 'Min Sample Size / Variant', placeholder: 'e.g., 5000', type: 'text' },
      { id: 'v9', name: 'significance_threshold', label: 'Statistical Significance %', placeholder: 'e.g., 95', type: 'text', defaultValue: '95' },
      { id: 'v10', name: 'min_detectable_effect', label: 'Minimum Detectable Effect %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v11', name: 'experiment_duration', label: 'Experiment Duration (days)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v12', name: 'analytics_platform', label: 'Analytics Platform', placeholder: 'Select platform', type: 'dropdown', options: ['Amplitude', 'Mixpanel', 'Google Analytics', 'Segment', 'Heap', 'Custom'] },
      { id: 'v13', name: 'events_to_track', label: 'Events to Track', placeholder: 'e.g., button_clicked, checkout_started, purchase_completed', type: 'text' },
      { id: 'v14', name: 'sdk_language', label: 'SDK Language', placeholder: 'Select language', type: 'dropdown', options: ['JavaScript', 'Python', 'Java', 'Go', 'React', 'Node.js'] },
    ],
    tags: ['a-b-testing', 'experimentation', 'feature-flags', 'analytics', 'conversion'],
    subUseCaseId: 'ff-ab-testing',
    subUseCaseTitle: 'A/B Testing',
    useCaseId: 'ff-flag-management',
    useCaseTitle: 'Flag Management',
    moduleId: 'ff',
    moduleTitle: 'Feature Flags',
    moduleColor: '#F59E0B',
    copyCount: 95,
    createdAt: '2024-01-28T09:00:00Z',
    updatedAt: '2024-02-11T14:00:00Z',
  },

  // ── CCM: Cost Optimization ────────────────────────────────────────────────
  {
    id: 'ccm-001',
    title: 'Cloud Resource Right-Sizing Analysis',
    content: `Conduct a cloud resource right-sizing analysis for {{organization_name}} using Harness Cloud Cost Management.

Cloud Provider: {{cloud_provider}}
Account/Project: {{account_name}}
Analysis Period: Last {{analysis_period}} days
Target Savings Goal: {{savings_goal}}% cost reduction

Resources to Analyze:
1. Compute instances ({{instance_types}})
2. Databases ({{database_services}})
3. Kubernetes node pools
4. Reserved/Committed use vs On-demand

Right-Sizing Criteria:
- CPU utilization threshold: flag instances using < {{cpu_threshold}}% average CPU
- Memory utilization threshold: flag instances using < {{memory_threshold}}% average memory
- Minimum observation period: {{observation_period}} days of metrics

Actions to Recommend:
- Downsize: instances consistently underutilizing resources
- Terminate: instances with < {{idle_threshold}}% utilization
- Convert: suitable workloads from On-Demand to {{saving_type}}

Output Format:
1. Executive summary with projected annual savings
2. Prioritized list of right-sizing opportunities
3. Kubernetes cluster optimization recommendations
4. Implementation roadmap with estimated effort per action
5. Risk assessment for each recommendation`,
    variables: [
      { id: 'v1', name: 'organization_name', label: 'Organization Name', placeholder: 'e.g., Acme Corp Engineering', type: 'text' },
      { id: 'v2', name: 'cloud_provider', label: 'Cloud Provider', placeholder: 'Select provider', type: 'dropdown', options: ['AWS', 'Google Cloud', 'Azure', 'Multi-cloud (AWS + GCP)', 'Multi-cloud (AWS + Azure)', 'All three'] },
      { id: 'v3', name: 'account_name', label: 'Account/Project Name', placeholder: 'e.g., production-aws-account', type: 'text' },
      { id: 'v4', name: 'analysis_period', label: 'Analysis Period (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v5', name: 'savings_goal', label: 'Savings Goal %', placeholder: 'e.g., 20', type: 'text' },
      { id: 'v6', name: 'instance_types', label: 'Instance Types in Use', placeholder: 'e.g., EC2 m5.xlarge, t3.large, c5.2xlarge', type: 'text' },
      { id: 'v7', name: 'database_services', label: 'Database Services', placeholder: 'e.g., RDS PostgreSQL, ElastiCache Redis', type: 'text' },
      { id: 'v8', name: 'cpu_threshold', label: 'CPU Underutilization Threshold %', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v9', name: 'memory_threshold', label: 'Memory Underutilization Threshold %', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v10', name: 'observation_period', label: 'Min Observation Period (days)', placeholder: 'e.g., 14', type: 'text', defaultValue: '14' },
      { id: 'v11', name: 'idle_threshold', label: 'Idle Instance Threshold %', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'saving_type', label: 'Saving Instrument Type', placeholder: 'Select type', type: 'dropdown', options: ['Reserved Instances', 'Savings Plans', 'Committed Use Discounts', 'Spot Instances'] },
    ],
    tags: ['cost-optimization', 'right-sizing', 'cloud-cost', 'aws', 'kubernetes', 'analysis'],
    subUseCaseId: 'ccm-right-sizing',
    subUseCaseTitle: 'Resource Right-Sizing',
    useCaseId: 'ccm-cost-optimization',
    useCaseTitle: 'Cost Optimization',
    moduleId: 'ccm',
    moduleTitle: 'Cloud Cost Management',
    moduleColor: '#EF4444',
    copyCount: 88,
    createdAt: '2024-01-30T10:00:00Z',
    updatedAt: '2024-02-14T09:00:00Z',
  },
  {
    id: 'ccm-002',
    title: 'Cloud Budget Alert Configuration',
    content: `Configure cloud budget alerts and spending thresholds in Harness CCM for {{team_or_project}}.

Budget Configuration:
- Team/Project: {{team_or_project}}
- Monthly budget: \${{monthly_budget}}
- Budget period: {{budget_period}}
- Cloud accounts in scope: {{cloud_accounts}}

Alert Thresholds (configure all that apply):
1. Warning: {{warning_threshold}}% of monthly budget → Notify {{warning_recipients}}
2. Critical: {{critical_threshold}}% of monthly budget → Notify {{critical_recipients}} + create Jira ticket
3. Budget exhausted (100%): Notify {{escalation_recipients}} + page on-call

Forecasting:
- Alert when forecast exceeds budget by {{forecast_threshold}}%
- Lookback period for forecasting: {{lookback_period}} days

Cost Anomaly Detection:
- Detect day-over-day spend increase > {{anomaly_threshold}}%
- Minimum anomaly amount: \${{min_anomaly_amount}} (ignore smaller variations)
- Anomaly notification: {{anomaly_notification_channel}}

Budget breakdown by:
- Environment: {{env_budget_split}} (e.g., prod: 70%, staging: 20%, dev: 10%)
- Service: {{top_services}}

Provide the Harness CCM budget configuration YAML and the alert notification template.`,
    variables: [
      { id: 'v1', name: 'team_or_project', label: 'Team / Project', placeholder: 'e.g., Platform Engineering Team', type: 'text' },
      { id: 'v2', name: 'monthly_budget', label: 'Monthly Budget ($)', placeholder: 'e.g., 50000', type: 'text' },
      { id: 'v3', name: 'budget_period', label: 'Budget Period', placeholder: 'Select period', type: 'dropdown', options: ['Monthly', 'Quarterly', 'Annual'] },
      { id: 'v4', name: 'cloud_accounts', label: 'Cloud Accounts in Scope', placeholder: 'e.g., prod-aws-123456, staging-aws-789', type: 'text' },
      { id: 'v5', name: 'warning_threshold', label: 'Warning Threshold %', placeholder: 'e.g., 75', type: 'text', defaultValue: '75' },
      { id: 'v6', name: 'critical_threshold', label: 'Critical Threshold %', placeholder: 'e.g., 90', type: 'text', defaultValue: '90' },
      { id: 'v7', name: 'warning_recipients', label: 'Warning Recipients', placeholder: 'e.g., #cloud-costs Slack channel', type: 'text' },
      { id: 'v8', name: 'critical_recipients', label: 'Critical Recipients', placeholder: 'e.g., team leads + finance manager', type: 'text' },
      { id: 'v9', name: 'escalation_recipients', label: 'Escalation Recipients', placeholder: 'e.g., VP Engineering + CTO', type: 'text' },
      { id: 'v10', name: 'forecast_threshold', label: 'Forecast Exceed Threshold %', placeholder: 'e.g., 10', type: 'text', defaultValue: '10' },
      { id: 'v11', name: 'lookback_period', label: 'Forecast Lookback (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v12', name: 'anomaly_threshold', label: 'Anomaly Threshold % (day-over-day)', placeholder: 'e.g., 20', type: 'text', defaultValue: '20' },
      { id: 'v13', name: 'min_anomaly_amount', label: 'Min Anomaly Amount ($)', placeholder: 'e.g., 500', type: 'text', defaultValue: '500' },
      { id: 'v14', name: 'anomaly_notification_channel', label: 'Anomaly Notification Channel', placeholder: 'e.g., Slack #alerts, Email', type: 'text' },
      { id: 'v15', name: 'env_budget_split', label: 'Environment Budget Split', placeholder: 'e.g., prod:70%, staging:20%, dev:10%', type: 'text' },
      { id: 'v16', name: 'top_services', label: 'Top Services to Track', placeholder: 'e.g., EC2, RDS, EKS, S3', type: 'text' },
    ],
    tags: ['budget', 'alerts', 'cost-management', 'anomaly-detection', 'cloud-cost'],
    subUseCaseId: 'ccm-budget-alerts',
    subUseCaseTitle: 'Budget Alerts & Thresholds',
    useCaseId: 'ccm-budget',
    useCaseTitle: 'Budget Management',
    moduleId: 'ccm',
    moduleTitle: 'Cloud Cost Management',
    moduleColor: '#EF4444',
    copyCount: 72,
    createdAt: '2024-02-02T09:00:00Z',
    updatedAt: '2024-02-16T11:00:00Z',
  },

  // ── STO: Security Scanning ────────────────────────────────────────────────
  {
    id: 'sto-001',
    title: 'SAST Pipeline Integration',
    content: `Set up Static Application Security Testing (SAST) in a Harness pipeline for {{project_name}}.

Project: {{project_name}}
Language/Framework: {{language_framework}}
SAST Scanner: {{sast_scanner}}
Repository: {{repo_url}}

Scanner Configuration:
- Scan mode: {{scan_mode}} (orchestration or ingestion)
- Scan categories: {{scan_categories}}
- Include paths: {{include_paths}}
- Exclude paths: {{exclude_paths}} (e.g., test files, vendor)

Severity Thresholds (fail pipeline if):
- Critical vulnerabilities: {{critical_threshold}} (0 = fail on any Critical)
- High vulnerabilities: {{high_threshold}}
- Medium vulnerabilities: {{medium_threshold}} (use "ignore" to not block)

OPA Policy:
- Block on: {{block_on_categories}} (e.g., Injection, Auth issues)
- Allow with approval: {{approval_categories}}
- Exempt: {{exempt_cves}} (known false positives with ticket refs)

Output & Reporting:
- Publish results to Harness STO dashboard: Yes
- Deduplication against: {{dedup_baseline}} (target or latest)
- Report format: {{report_format}}
- Notify: {{notification_channel}} with scan summary

Include the complete Harness STO step YAML configuration.`,
    variables: [
      { id: 'v1', name: 'project_name', label: 'Project Name', placeholder: 'e.g., payment-service', type: 'text' },
      { id: 'v2', name: 'language_framework', label: 'Language / Framework', placeholder: 'e.g., Java Spring Boot, Node.js Express, Python Django', type: 'text' },
      { id: 'v3', name: 'sast_scanner', label: 'SAST Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['SonarQube', 'Semgrep', 'Checkmarx', 'Veracode', 'Snyk Code', 'Bandit (Python)', 'ESLint Security', 'CodeQL'] },
      { id: 'v4', name: 'repo_url', label: 'Repository URL', placeholder: 'e.g., github.com/org/payment-service', type: 'text' },
      { id: 'v5', name: 'scan_mode', label: 'Scan Mode', placeholder: 'Select mode', type: 'dropdown', options: ['Orchestration (Harness runs scanner)', 'Ingestion (import existing results)'], defaultValue: 'Orchestration (Harness runs scanner)' },
      { id: 'v6', name: 'scan_categories', label: 'Scan Categories', placeholder: 'e.g., OWASP Top 10, CWE Top 25, secrets', type: 'text' },
      { id: 'v7', name: 'include_paths', label: 'Include Paths', placeholder: 'e.g., src/, app/', type: 'text', defaultValue: 'src/' },
      { id: 'v8', name: 'exclude_paths', label: 'Exclude Paths', placeholder: 'e.g., src/test/, vendor/', type: 'text', defaultValue: 'src/test/, vendor/' },
      { id: 'v9', name: 'critical_threshold', label: 'Critical Vulns Threshold', placeholder: 'e.g., 0 (fail on any)', type: 'text', defaultValue: '0' },
      { id: 'v10', name: 'high_threshold', label: 'High Vulns Threshold', placeholder: 'e.g., 0 or a number', type: 'text', defaultValue: '0' },
      { id: 'v11', name: 'medium_threshold', label: 'Medium Vulns Threshold', placeholder: 'e.g., 5 or ignore', type: 'text', defaultValue: 'ignore' },
      { id: 'v12', name: 'block_on_categories', label: 'Block On Categories', placeholder: 'e.g., Injection, Broken Authentication', type: 'text' },
      { id: 'v13', name: 'approval_categories', label: 'Allow With Approval', placeholder: 'e.g., Information Disclosure', type: 'text' },
      { id: 'v14', name: 'exempt_cves', label: 'Exempt CVEs', placeholder: 'e.g., CVE-2023-1234 (JIRA-456 - false positive)', type: 'textarea' },
      { id: 'v15', name: 'dedup_baseline', label: 'Deduplication Baseline', placeholder: 'Select baseline', type: 'dropdown', options: ['Target branch (main)', 'Latest scan results'] },
      { id: 'v16', name: 'report_format', label: 'Report Format', placeholder: 'Select format', type: 'dropdown', options: ['SARIF', 'JSON', 'HTML', 'PDF'] },
      { id: 'v17', name: 'notification_channel', label: 'Notification Channel', placeholder: 'e.g., Slack #security-alerts', type: 'text' },
    ],
    tags: ['sast', 'security', 'static-analysis', 'owasp', 'vulnerabilities', 'pipeline'],
    subUseCaseId: 'sto-sast',
    subUseCaseTitle: 'SAST Integration',
    useCaseId: 'sto-scanning',
    useCaseTitle: 'Security Scanning',
    moduleId: 'sto',
    moduleTitle: 'Security Testing',
    moduleColor: '#8B5CF6',
    copyCount: 111,
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-02-10T15:00:00Z',
  },
  {
    id: 'sto-002',
    title: 'Container Image Vulnerability Scan',
    content: `Configure a container image vulnerability scanning step in Harness STO for {{service_name}}.

Image Details:
- Image: {{image_name}}:{{image_tag}}
- Base image: {{base_image}}
- Container Registry: {{registry}}

Scanner: {{scanner}} (e.g., Aqua Trivy, Grype, Snyk Container, Prisma Cloud)
Scan type: Vulnerability + License compliance

Vulnerability Thresholds:
- CRITICAL: Block pipeline if > {{critical_count}} found (0 = zero tolerance)
- HIGH: Block pipeline if > {{high_count}} found
- MEDIUM: Warn only (do not block)
- LOW/INFO: Ignore

CVE Exceptions (with business justification):
{{cve_exceptions}}

License Compliance:
- Blocked licenses: {{blocked_licenses}} (e.g., GPL-3.0, AGPL-3.0)
- Require approval for: {{restricted_licenses}} (e.g., LGPL-2.0)

Scan Target:
- OS packages: Yes
- Language packages: Yes
- Scan secrets in image layers: {{scan_secrets}}

Output:
- Generate SBOM (Software Bill of Materials): {{generate_sbom}}
- SBOM format: {{sbom_format}}
- Upload scan results to Harness STO dashboard

Provide the complete Harness STO container scan step configuration.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., api-gateway', type: 'text' },
      { id: 'v2', name: 'image_name', label: 'Image Name', placeholder: 'e.g., myorg/api-gateway', type: 'text' },
      { id: 'v3', name: 'image_tag', label: 'Image Tag', placeholder: 'e.g., latest, v2.1.0', type: 'text', defaultValue: 'latest' },
      { id: 'v4', name: 'base_image', label: 'Base Image', placeholder: 'e.g., node:20-alpine, openjdk:17-slim', type: 'text' },
      { id: 'v5', name: 'registry', label: 'Container Registry', placeholder: 'Select registry', type: 'dropdown', options: ['Amazon ECR', 'Docker Hub', 'Google Container Registry', 'Azure Container Registry', 'GitHub Container Registry'] },
      { id: 'v6', name: 'scanner', label: 'Scanner', placeholder: 'Select scanner', type: 'dropdown', options: ['Aqua Trivy', 'Grype', 'Snyk Container', 'Prisma Cloud Twistlock', 'Clair', 'Anchore Engine'] },
      { id: 'v7', name: 'critical_count', label: 'Critical Vuln Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v8', name: 'high_count', label: 'High Vuln Threshold', placeholder: 'e.g., 0', type: 'text', defaultValue: '0' },
      { id: 'v9', name: 'cve_exceptions', label: 'CVE Exceptions', placeholder: 'e.g., CVE-2023-5678: JIRA-123 (accepted risk - no fix available)', type: 'textarea' },
      { id: 'v10', name: 'blocked_licenses', label: 'Blocked Licenses', placeholder: 'e.g., GPL-3.0, AGPL-3.0', type: 'text' },
      { id: 'v11', name: 'restricted_licenses', label: 'Restricted Licenses (need approval)', placeholder: 'e.g., LGPL-2.0, CDDL-1.0', type: 'text' },
      { id: 'v12', name: 'scan_secrets', label: 'Scan for Secrets in Layers', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
      { id: 'v13', name: 'generate_sbom', label: 'Generate SBOM', placeholder: 'Select', type: 'dropdown', options: ['Yes', 'No'], defaultValue: 'Yes' },
      { id: 'v14', name: 'sbom_format', label: 'SBOM Format', placeholder: 'Select format', type: 'dropdown', options: ['SPDX', 'CycloneDX', 'Syft JSON'] },
    ],
    tags: ['container', 'vulnerability-scan', 'security', 'sbom', 'trivy', 'docker'],
    subUseCaseId: 'sto-container',
    subUseCaseTitle: 'Container Image Scanning',
    useCaseId: 'sto-scanning',
    useCaseTitle: 'Security Scanning',
    moduleId: 'sto',
    moduleTitle: 'Security Testing',
    moduleColor: '#8B5CF6',
    copyCount: 93,
    createdAt: '2024-01-19T11:00:00Z',
    updatedAt: '2024-02-13T10:00:00Z',
  },

  // ── Chaos Engineering ─────────────────────────────────────────────────────
  {
    id: 'ce-001',
    title: 'Kubernetes Pod Failure Experiment',
    content: `Design a Harness Chaos Engineering experiment to test {{service_name}} resilience against pod failures.

Target Service: {{service_name}}
Kubernetes Namespace: {{namespace}}
Environment: {{environment}}

Experiment Configuration:
- Chaos type: Pod Delete
- Target pods: Pods with label {{pod_selector}}
- Kill count: {{kill_count}} pods simultaneously
- Sequence: {{sequence}} (random or fixed)
- Duration: {{experiment_duration}} seconds

Steady State Hypothesis (define normal behavior before chaos):
- Service availability: {{availability_threshold}}% requests succeed
- P99 latency: < {{latency_threshold}}ms
- Health check: {{health_endpoint}} returns 200

Probes (continuous validation during chaos):
1. HTTP probe: GET {{health_endpoint}} every {{probe_interval}}s
2. Prometheus probe: {{prometheus_query}} should be > {{prometheus_threshold}}
3. Command probe (optional): {{command_probe}}

Expected Behavior:
{{expected_behavior}}

Recovery Validation:
- After chaos ends, service recovers within {{recovery_time}}s
- All probes should pass within {{recovery_time}}s of experiment end

Pre-chaos checks:
- Verify minimum {{min_replicas}} replicas running before starting
- Abort if {{abort_condition}}

Schedule: Run this experiment {{schedule}} as part of the GameDay for {{game_day_name}}.`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., order-processor', type: 'text' },
      { id: 'v2', name: 'namespace', label: 'Kubernetes Namespace', placeholder: 'e.g., production', type: 'text' },
      { id: 'v3', name: 'environment', label: 'Environment', placeholder: 'Select environment', type: 'dropdown', options: ['Production', 'Staging', 'QA'] },
      { id: 'v4', name: 'pod_selector', label: 'Pod Label Selector', placeholder: 'e.g., app=order-processor', type: 'text' },
      { id: 'v5', name: 'kill_count', label: 'Kill Count (pods)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v6', name: 'sequence', label: 'Kill Sequence', placeholder: 'Select sequence', type: 'dropdown', options: ['random', 'sequential'] },
      { id: 'v7', name: 'experiment_duration', label: 'Experiment Duration (seconds)', placeholder: 'e.g., 60', type: 'text', defaultValue: '60' },
      { id: 'v8', name: 'availability_threshold', label: 'Availability Threshold %', placeholder: 'e.g., 99', type: 'text', defaultValue: '99' },
      { id: 'v9', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 500', type: 'text' },
      { id: 'v10', name: 'health_endpoint', label: 'Health Endpoint', placeholder: 'e.g., https://service.internal/health', type: 'text' },
      { id: 'v11', name: 'probe_interval', label: 'Probe Interval (seconds)', placeholder: 'e.g., 5', type: 'text', defaultValue: '5' },
      { id: 'v12', name: 'prometheus_query', label: 'Prometheus Query', placeholder: 'e.g., sum(rate(http_requests_total{status=~"2.."}[1m]))', type: 'text' },
      { id: 'v13', name: 'prometheus_threshold', label: 'Prometheus Threshold', placeholder: 'e.g., 0.95 (95% success rate)', type: 'text' },
      { id: 'v14', name: 'command_probe', label: 'Command Probe (optional)', placeholder: 'e.g., kubectl get pods -n production | grep Running', type: 'text' },
      { id: 'v15', name: 'expected_behavior', label: 'Expected Behavior', placeholder: 'e.g., Service should use circuit breaker and serve cached responses while pods restart', type: 'textarea' },
      { id: 'v16', name: 'recovery_time', label: 'Recovery Time (seconds)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v17', name: 'min_replicas', label: 'Min Replicas Before Chaos', placeholder: 'e.g., 3', type: 'text', defaultValue: '3' },
      { id: 'v18', name: 'abort_condition', label: 'Abort Condition', placeholder: 'e.g., error rate exceeds 10% before experiment start', type: 'text' },
      { id: 'v19', name: 'schedule', label: 'Schedule', placeholder: 'e.g., weekly on Tuesdays at 2am, monthly, one-time', type: 'text' },
      { id: 'v20', name: 'game_day_name', label: 'GameDay Name', placeholder: 'e.g., Q1 Resilience GameDay', type: 'text' },
    ],
    tags: ['chaos-engineering', 'pod-failure', 'kubernetes', 'resilience', 'gameday', 'probes'],
    subUseCaseId: 'ce-pod-failure',
    subUseCaseTitle: 'Pod Failure Testing',
    useCaseId: 'ce-experiments',
    useCaseTitle: 'Chaos Experiments',
    moduleId: 'ce',
    moduleTitle: 'Chaos Engineering',
    moduleColor: '#EC4899',
    copyCount: 67,
    createdAt: '2024-02-03T10:00:00Z',
    updatedAt: '2024-02-17T09:00:00Z',
  },

  // ── SRM: SLO Management ───────────────────────────────────────────────────
  {
    id: 'srm-001',
    title: 'Service SLO Definition & Configuration',
    content: `Define and configure Service Level Objectives (SLOs) for {{service_name}} in Harness Service Reliability Management.

Service: {{service_name}}
Service Tier: {{service_tier}} (Tier 1 = highest criticality)
Monitored Service: {{monitored_service_name}}
Health Sources: {{health_sources}}

SLO Configuration:

1. Availability SLO:
   - Target: {{availability_target}}% (e.g., 99.9% = "three nines")
   - Rolling window: {{rolling_window}} days
   - SLI type: {{availability_sli_type}}
   - Good event definition: {{good_event_definition}}
   - Valid event definition: {{valid_event_definition}}

2. Latency SLO:
   - Target: {{latency_target}}% of requests complete within {{latency_threshold}}ms
   - SLI metric: {{latency_metric}} (from {{health_source_latency}})

3. Error Rate SLO:
   - Target: Error rate < {{error_rate_target}}% of all requests
   - Error definition: {{error_definition}} (e.g., HTTP 5xx responses)

Error Budget:
- Monthly error budget: {{error_budget_minutes}} minutes (calculate from target)
- Alert when: {{budget_burn_rate}}x burn rate detected
- Alert window: {{burn_rate_window}} hours

Notifications:
- Page on-call when: Error budget remaining < {{page_threshold}}%
- Warn team when: Error budget remaining < {{warn_threshold}}%
- Notification channels: {{notification_channels}}

Dashboard:
- Include: availability trend, error budget burn chart, SLO compliance history
- Report: Weekly SLO report to {{report_recipients}}`,
    variables: [
      { id: 'v1', name: 'service_name', label: 'Service Name', placeholder: 'e.g., payment-gateway', type: 'text' },
      { id: 'v2', name: 'service_tier', label: 'Service Tier', placeholder: 'Select tier', type: 'dropdown', options: ['Tier 1 (Business Critical)', 'Tier 2 (Important)', 'Tier 3 (Non-critical)'] },
      { id: 'v3', name: 'monitored_service_name', label: 'Monitored Service Name', placeholder: 'e.g., payment-gateway-prod', type: 'text' },
      { id: 'v4', name: 'health_sources', label: 'Health Sources', placeholder: 'e.g., Datadog, Prometheus, AppDynamics', type: 'text' },
      { id: 'v5', name: 'availability_target', label: 'Availability Target %', placeholder: 'e.g., 99.9', type: 'text', defaultValue: '99.9' },
      { id: 'v6', name: 'rolling_window', label: 'Rolling Window (days)', placeholder: 'e.g., 30', type: 'text', defaultValue: '30' },
      { id: 'v7', name: 'availability_sli_type', label: 'Availability SLI Type', placeholder: 'Select type', type: 'dropdown', options: ['Ratio-based (good/total requests)', 'Window-based (% of time healthy)'] },
      { id: 'v8', name: 'good_event_definition', label: 'Good Event Definition', placeholder: 'e.g., HTTP status 2xx or 3xx responses', type: 'text' },
      { id: 'v9', name: 'valid_event_definition', label: 'Valid Event Definition', placeholder: 'e.g., All HTTP requests except health checks', type: 'text' },
      { id: 'v10', name: 'latency_target', label: 'Latency SLO Target %', placeholder: 'e.g., 95', type: 'text', defaultValue: '95' },
      { id: 'v11', name: 'latency_threshold', label: 'Latency Threshold (ms)', placeholder: 'e.g., 200', type: 'text' },
      { id: 'v12', name: 'latency_metric', label: 'Latency Metric', placeholder: 'e.g., http_request_duration_seconds p95', type: 'text' },
      { id: 'v13', name: 'health_source_latency', label: 'Latency Health Source', placeholder: 'e.g., Prometheus, Datadog APM', type: 'text' },
      { id: 'v14', name: 'error_rate_target', label: 'Error Rate Target %', placeholder: 'e.g., 0.1', type: 'text', defaultValue: '0.1' },
      { id: 'v15', name: 'error_definition', label: 'Error Definition', placeholder: 'e.g., HTTP 5xx responses', type: 'text' },
      { id: 'v16', name: 'error_budget_minutes', label: 'Monthly Error Budget (mins)', placeholder: 'Auto-calculated from target', type: 'text' },
      { id: 'v17', name: 'budget_burn_rate', label: 'Alert Burn Rate Multiplier', placeholder: 'e.g., 14.4 (exhausts budget in 2h)', type: 'text', defaultValue: '14.4' },
      { id: 'v18', name: 'burn_rate_window', label: 'Burn Rate Window (hours)', placeholder: 'e.g., 1', type: 'text', defaultValue: '1' },
      { id: 'v19', name: 'page_threshold', label: 'Page On-Call Threshold %', placeholder: 'e.g., 10 (10% budget left)', type: 'text', defaultValue: '10' },
      { id: 'v20', name: 'warn_threshold', label: 'Warning Threshold %', placeholder: 'e.g., 25', type: 'text', defaultValue: '25' },
      { id: 'v21', name: 'notification_channels', label: 'Notification Channels', placeholder: 'e.g., PagerDuty, Slack #sre-alerts', type: 'text' },
      { id: 'v22', name: 'report_recipients', label: 'Report Recipients', placeholder: 'e.g., sre-team@company.com, engineering-leads@company.com', type: 'text' },
    ],
    tags: ['slo', 'sli', 'reliability', 'error-budget', 'monitoring', 'srm'],
    subUseCaseId: 'srm-slo-definition',
    subUseCaseTitle: 'SLO Definition & Configuration',
    useCaseId: 'srm-slo',
    useCaseTitle: 'SLO Management',
    moduleId: 'srm',
    moduleTitle: 'Service Reliability',
    moduleColor: '#14B8A6',
    copyCount: 81,
    createdAt: '2024-01-24T10:00:00Z',
    updatedAt: '2024-02-14T14:00:00Z',
  },
]

export function getAllPrompts(): Prompt[] {
  return SAMPLE_PROMPTS
}

export function getPromptById(id: string): Prompt | undefined {
  return SAMPLE_PROMPTS.find(p => p.id === id)
}

export function getModules(): Module[] {
  return MODULES
}

export function getPromptsByModule(moduleId: string): Prompt[] {
  return SAMPLE_PROMPTS.filter(p => p.moduleId === moduleId)
}
