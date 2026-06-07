const fs = require("fs")
const path = require("path")

const ROOT = path.join(__dirname, "..")
const LIST_EN = path.join(ROOT, "data/blog/list/en.json")
const LIST_SI = path.join(ROOT, "data/blog/list/si.json")
const DETAILS_DIR = path.join(ROOT, "data/blog/details")

const AUTHORS = [
  {
    name: "James Carter",
    avatar: "/images/blog/authors/james-carter.png",
    role: "Senior Frontend Engineer",
    bio: "Passionate about building fast and scalable web applications with modern technologies.",
    socials: { linkedin: "https://linkedin.com/in/jamescarter", github: "https://github.com/jamescarter" },
  },
  {
    name: "Olivia Martin",
    avatar: "/images/blog/authors/olivia-martin.png",
    role: "Full-Stack Developer",
    bio: "Full-stack engineer focused on developer experience and reliable delivery pipelines.",
    socials: { linkedin: "https://linkedin.com/in/oliviamartin", github: "https://github.com/oliviamartin" },
  },
  {
    name: "Daniel Lee",
    avatar: "/images/blog/authors/daniel-lee.png",
    role: "Cloud Architect",
    bio: "Designs cloud-native systems that balance performance, cost, and operational simplicity.",
    socials: { linkedin: "https://linkedin.com/in/daniellee", github: "https://github.com/daniellee" },
  },
  {
    name: "Sophia Nguyen",
    avatar: "/images/blog/authors/sophia-nguyen.png",
    role: "DevOps Engineer",
    bio: "Helps teams ship faster with automation, observability, and platform engineering practices.",
    socials: { linkedin: "https://linkedin.com/in/sophianguyen", github: "https://github.com/sophianguyen" },
  },
  {
    name: "Liam Wilson",
    avatar: "/images/blog/authors/liam-wilson.png",
    role: "Systems Engineer",
    bio: "Works on high-performance backends, distributed systems, and low-level runtime optimization.",
    socials: { linkedin: "https://linkedin.com/in/liamwilson", github: "https://github.com/liamwilson" },
  },
  {
    name: "Sarah Chen",
    avatar: "/images/blog/authors/olivia-martin.jpg",
    role: "Machine Learning Engineer",
    bio: "Builds production ML systems with a focus on retrieval, evaluation, and safe deployment.",
    socials: { linkedin: "https://linkedin.com/in/sarahchen", github: "https://github.com/sarahchen" },
  },
  {
    name: "Alex Mercer",
    avatar: "/images/blog/authors/james-carter.jpg",
    role: "Security Engineer",
    bio: "Specializes in application security, identity systems, and secure SDLC practices.",
    socials: { linkedin: "https://linkedin.com/in/alexmercer", github: "https://github.com/alexmercer" },
  },
  {
    name: "Emma Wright",
    avatar: "/images/blog/authors/sophia-nguyen.jpg",
    role: "UX Researcher",
    bio: "Bridges user research and engineering to ship accessible, intuitive product experiences.",
    socials: { linkedin: "https://linkedin.com/in/emmawright" },
  },
]

const TOPICS = [
  { title: "Building AI Agents for Autonomous Workflows", category: "AI", topic: "AI agents", focus: "orchestrating multi-step tasks with tool use and memory" },
  { title: "RAG in Production: Architecture and Pitfalls", category: "AI", topic: "retrieval-augmented generation", focus: "chunking, embeddings, and evaluation in real systems" },
  { title: "Fine-Tuning LLMs for Enterprise Use Cases", category: "AI", topic: "LLM fine-tuning", focus: "when to fine-tune versus prompt or RAG" },
  { title: "Multi-Modal AI: Combining Vision and Language", category: "AI", topic: "multi-modal models", focus: "image understanding, document AI, and visual search" },
  { title: "Prompt Engineering Best Practices in 2026", category: "AI", topic: "prompt engineering", focus: "structured prompts, evals, and guardrails" },
  { title: "AI-Powered Code Review Tools Compared", category: "AI", topic: "AI code review", focus: "accuracy, security scanning, and team workflows" },
  { title: "Building with the Claude API and Anthropic SDK", category: "AI", topic: "Claude API", focus: "tool calling, streaming, and cost control" },
  { title: "OpenAI GPT-4o Integration Patterns for SaaS", category: "AI", topic: "GPT-4o integration", focus: "structured outputs, function calling, and caching" },
  { title: "Running Local LLMs with Ollama and Llama 3", category: "AI", topic: "local LLMs", focus: "on-prem inference, privacy, and hardware sizing" },
  { title: "Vector Databases: Pinecone vs Weaviate vs pgvector", category: "AI", topic: "vector databases", focus: "indexing strategies, hybrid search, and ops trade-offs" },
  { title: "Next.js 15 App Router: A Production Deep Dive", category: "Next.js", topic: "Next.js 15", focus: "routing, caching, and partial prerendering" },
  { title: "React Server Components in Production", category: "React", topic: "React Server Components", focus: "server/client boundaries and data fetching" },
  { title: "React 19 Actions and useOptimistic Explained", category: "React", topic: "React 19", focus: "form actions, optimistic UI, and transitions" },
  { title: "Turbopack vs Webpack in 2026", category: "Frontend", topic: "Turbopack", focus: "build performance and migration planning" },
  { title: "TanStack Query v5 Data Fetching Patterns", category: "Frontend", topic: "TanStack Query", focus: "cache keys, suspense, and invalidation" },
  { title: "TypeScript 5.5 Advanced Features You Should Use", category: "TypeScript", topic: "TypeScript 5.5", focus: "inferred types, decorators, and strictness" },
  { title: "Bun Runtime for JavaScript Backends", category: "Backend", topic: "Bun", focus: "HTTP server performance and package compatibility" },
  { title: "Deno 2.0 for Modern Web Development", category: "Backend", topic: "Deno 2", focus: "npm compatibility, security defaults, and deploy" },
  { title: "Svelte 5 Runes: A Complete Guide", category: "Frontend", topic: "Svelte 5", focus: "reactivity model and component architecture" },
  { title: "Astro Islands Architecture for Content Sites", category: "Frontend", topic: "Astro", focus: "partial hydration and performance budgets" },
  { title: "Kubernetes GitOps with Argo CD", category: "DevOps", topic: "GitOps", focus: "declarative deploys, rollbacks, and drift detection" },
  { title: "Platform Engineering and Internal Developer Portals", category: "DevOps", topic: "platform engineering", focus: "golden paths, self-service, and developer productivity" },
  { title: "Migrating from Docker Compose to Kubernetes", category: "Cloud", topic: "Kubernetes migration", focus: "service mapping, config, and rollout strategy" },
  { title: "AWS Lambda SnapStart for Faster Cold Starts", category: "Cloud", topic: "Lambda SnapStart", focus: "JVM startup optimization and cost impact" },
  { title: "Google Cloud Run vs AWS Fargate Compared", category: "Cloud", topic: "serverless containers", focus: "scaling models, networking, and pricing" },
  { title: "Edge Computing with Cloudflare Workers", category: "Cloud", topic: "edge computing", focus: "global latency, KV storage, and Durable Objects" },
  { title: "Infrastructure as Code with Pulumi", category: "DevOps", topic: "Pulumi", focus: "TypeScript IaC, state, and team workflows" },
  { title: "Terraform State Management at Scale", category: "DevOps", topic: "Terraform", focus: "remote state, workspaces, and module design" },
  { title: "Observability with OpenTelemetry", category: "DevOps", topic: "OpenTelemetry", focus: "traces, metrics, logs, and vendor-neutral pipelines" },
  { title: "eBPF for Cloud-Native Monitoring", category: "DevOps", topic: "eBPF", focus: "kernel-level visibility without instrumentation overhead" },
  { title: "Implementing Passkeys and WebAuthn", category: "Security", topic: "passkeys", focus: "phishing-resistant auth and cross-device flows" },
  { title: "OAuth 2.1 and OIDC Security Updates", category: "Security", topic: "OAuth 2.1", focus: "PKCE, token rotation, and session hardening" },
  { title: "API Security with Rate Limiting and Throttling", category: "Security", topic: "API rate limiting", focus: "token buckets, abuse detection, and edge policies" },
  { title: "Supply Chain Security for npm Packages", category: "Security", topic: "supply chain security", focus: "SBOMs, provenance, and dependency pinning" },
  { title: "Secrets Management with HashiCorp Vault", category: "Security", topic: "secrets management", focus: "dynamic credentials and rotation policies" },
  { title: "Container Image Scanning in CI/CD Pipelines", category: "Security", topic: "container scanning", focus: "CVE triage, policy gates, and base image hygiene" },
  { title: "SOC 2 Compliance for SaaS Startups", category: "Security", topic: "SOC 2", focus: "control mapping, evidence collection, and automation" },
  { title: "GDPR and Privacy-First Software Architecture", category: "Security", topic: "privacy engineering", focus: "data minimization, consent, and retention" },
  { title: "Penetration Testing for Web APIs", category: "Security", topic: "API pentesting", focus: "auth bypass, injection, and business logic flaws" },
  { title: "DDoS Protection Strategies for Modern Apps", category: "Security", topic: "DDoS mitigation", focus: "WAF rules, CDN shielding, and autoscaling" },
  { title: "Event-Driven Architecture with Apache Kafka", category: "Architecture", topic: "event-driven architecture", focus: "topics, partitions, and consumer groups" },
  { title: "CQRS and Event Sourcing Patterns Explained", category: "Architecture", topic: "CQRS", focus: "read/write separation and event stores" },
  { title: "API Gateway Patterns with Kong and Envoy", category: "Backend", topic: "API gateways", focus: "routing, auth termination, and rate policies" },
  { title: "gRPC vs REST in Microservices", category: "Backend", topic: "gRPC", focus: "serialization, streaming, and service mesh fit" },
  { title: "Database Sharding Strategies for Scale", category: "Backend", topic: "database sharding", focus: "shard keys, rebalancing, and query routing" },
  { title: "PostgreSQL 16 Features Every Team Should Know", category: "Backend", topic: "PostgreSQL 16", focus: "logical replication, performance, and JSON improvements" },
  { title: "Redis Caching Patterns at Scale", category: "Backend", topic: "Redis caching", focus: "cache-aside, TTL strategy, and stampede prevention" },
  { title: "MongoDB Atlas Vector Search in Practice", category: "Backend", topic: "MongoDB vector search", focus: "hybrid queries and operational considerations" },
  { title: "GraphQL Federation at Enterprise Scale", category: "Backend", topic: "GraphQL federation", focus: "subgraphs, schema composition, and governance" },
  { title: "Building Real-Time Apps with WebSockets", category: "Backend", topic: "WebSockets", focus: "connection management, backpressure, and fallbacks" },
  { title: "React Native New Architecture in 2026", category: "Mobile", topic: "React Native", focus: "Fabric, TurboModules, and migration steps" },
  { title: "Flutter 3.x for Enterprise Mobile Apps", category: "Mobile", topic: "Flutter enterprise", focus: "state management, testing, and release pipelines" },
  { title: "SwiftUI for Cross-Platform Apple Development", category: "Mobile", topic: "SwiftUI", focus: "shared UI layers across iOS and macOS" },
  { title: "Kotlin Multiplatform for Mobile Teams", category: "Mobile", topic: "Kotlin Multiplatform", focus: "shared business logic and platform-specific UI" },
  { title: "Progressive Web Apps in 2026", category: "Mobile", topic: "PWAs", focus: "installability, offline sync, and push APIs" },
  { title: "Mobile App Performance Optimization Guide", category: "Mobile", topic: "mobile performance", focus: "startup time, memory, and frame rates" },
  { title: "App Store Optimization for Developer Products", category: "Mobile", topic: "ASO", focus: "metadata, screenshots, and conversion testing" },
  { title: "Push Notifications with FCM and APNs", category: "Mobile", topic: "push notifications", focus: "token lifecycle, segmentation, and delivery metrics" },
  { title: "Offline-First Mobile Architecture Patterns", category: "Mobile", topic: "offline-first apps", focus: "sync engines, conflict resolution, and local storage" },
  { title: "Mobile CI/CD with Fastlane and GitHub Actions", category: "Mobile", topic: "mobile CI/CD", focus: "signing, test flights, and store releases" },
  { title: "Tailwind CSS v4 Migration Guide", category: "Design", topic: "Tailwind CSS v4", focus: "config changes, performance, and design tokens" },
  { title: "Building Design Systems with Storybook", category: "Design", topic: "design systems", focus: "component APIs, documentation, and adoption" },
  { title: "Figma to Code Workflows for Engineering Teams", category: "Design", topic: "design handoff", focus: "tokens, variants, and automated exports" },
  { title: "WCAG 2.2 Accessibility Compliance Guide", category: "Design", topic: "accessibility", focus: "focus management, contrast, and keyboard flows" },
  { title: "Dark Mode Implementation Patterns", category: "Design", topic: "dark mode", focus: "theme tokens, SSR considerations, and user preference" },
  { title: "Micro-Interactions in Modern User Interfaces", category: "Design", topic: "micro-interactions", focus: "motion budgets, feedback loops, and performance" },
  { title: "CSS Container Queries in Production", category: "Frontend", topic: "container queries", focus: "component-responsive layouts without media queries" },
  { title: "Web Animations with Framer Motion", category: "Frontend", topic: "Framer Motion", focus: "layout animations, gestures, and reduced motion" },
  { title: "Responsive Design for Foldable Devices", category: "Design", topic: "foldable UI", focus: "dual-screen layouts and continuity APIs" },
  { title: "UX Writing for Developer Tools", category: "Design", topic: "UX writing", focus: "error messages, onboarding copy, and docs UX" },
  { title: "Playwright vs Cypress in 2026", category: "Testing", topic: "E2E testing", focus: "parallelization, debugging, and CI integration" },
  { title: "Contract Testing with Pact for Microservices", category: "Testing", topic: "contract testing", focus: "consumer-driven contracts and broker workflows" },
  { title: "Chaos Engineering for Resilient Systems", category: "Testing", topic: "chaos engineering", focus: "failure injection, blast radius, and game days" },
  { title: "Load Testing with k6 and Grafana", category: "Testing", topic: "load testing", focus: "scenario design, thresholds, and capacity planning" },
  { title: "Feature Flags with LaunchDarkly and Open Source Alternatives", category: "DevOps", topic: "feature flags", focus: "rollouts, targeting, and kill switches" },
  { title: "Blue-Green Deployments Explained", category: "DevOps", topic: "blue-green deployment", focus: "traffic switching, database compatibility, and rollback" },
  { title: "Canary Releases in Kubernetes", category: "DevOps", topic: "canary releases", focus: "progressive delivery and metric-based promotion" },
  { title: "Monorepo Management with Turborepo", category: "DevOps", topic: "Turborepo", focus: "task pipelines, caching, and dependency graphs" },
  { title: "Nx for Large-Scale Frontend Codebases", category: "DevOps", topic: "Nx monorepos", focus: "affected builds, generators, and module boundaries" },
  { title: "Trunk-Based Development Best Practices", category: "DevOps", topic: "trunk-based development", focus: "short-lived branches, CI discipline, and release trains" },
  { title: "WebAssembly for High-Performance Web Apps", category: "Frontend", topic: "WebAssembly", focus: "Wasm modules, JS interop, and compute-heavy workloads" },
  { title: "Quantum Computing Basics for Software Developers", category: "Emerging Tech", topic: "quantum computing", focus: "qubits, algorithms, and practical near-term use cases" },
  { title: "5G and Edge AI Application Patterns", category: "Emerging Tech", topic: "edge AI", focus: "low-latency inference and distributed model serving" },
  { title: "Sustainable Software Engineering Practices", category: "Emerging Tech", topic: "green software", focus: "energy-aware architecture and carbon-aware scheduling" },
]

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function formatDate(daysAgo) {
  const date = new Date("2026-06-07")
  date.setDate(date.getDate() - daysAgo)
  return date.toISOString().split("T")[0]
}

function pickRelatedSlugs(allSlugs, category, currentSlug) {
  const sameCategory = allSlugs.filter((slug) => slug !== currentSlug)
  const shuffled = [...sameCategory].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
}

function generateContent({ title, topic, focus, category }) {
  const sections = [
    {
      id: "introduction",
      heading: "Introduction",
      paragraphs: [
        `${title} is one of the most discussed topics in ${category.toLowerCase()} circles right now. Teams are adopting ${topic} to ship faster, reduce operational risk, and deliver better user experiences.`,
        `This article explains what ${topic} means in practice, why it matters in 2026, and how engineering leaders can evaluate ${focus} without over-engineering their stack.`,
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why It Matters Now",
      paragraphs: [
        `The technology landscape moves quickly. What was experimental last year is now a baseline expectation for competitive products. ${topic} addresses real constraints: latency, cost, security, and maintainability.`,
        `Organizations that treat ${topic} as a strategic capability—not a one-off experiment—tend to see compounding returns across delivery speed and system reliability.`,
      ],
      list: [
        `Faster iteration cycles with clearer architectural boundaries`,
        `Improved observability and easier incident response`,
        `Better alignment between product goals and technical implementation`,
        `Reduced long-term maintenance cost through standardized patterns`,
      ],
    },
    {
      id: "core-concepts",
      heading: "Core Concepts",
      paragraphs: [
        `Before implementation, teams should align on vocabulary and constraints. At its core, ${topic} is about ${focus}.`,
        `Successful adoption usually starts with a narrow pilot: one team, one service, and explicit success metrics such as deployment frequency, error rate, or p95 latency.`,
      ],
    },
    {
      id: "architecture-patterns",
      heading: "Architecture Patterns",
      paragraphs: [
        `Most production architectures combine ${topic} with existing platform investments rather than replacing everything at once.`,
        `A pragmatic approach keeps the control plane simple, isolates blast radius, and documents decision records so future teams understand trade-offs.`,
      ],
      list: [
        `Start with a reference implementation and golden-path templates`,
        `Define ownership boundaries between platform and product teams`,
        `Introduce automated checks in CI/CD before production rollout`,
        `Measure outcomes weekly and adjust scope based on evidence`,
      ],
    },
    {
      id: "implementation-guide",
      heading: "Implementation Guide",
      paragraphs: [
        `Rollout should be incremental. Begin by mapping current workflows, identifying bottlenecks, and selecting one high-impact use case where ${topic} provides immediate value.`,
        `Instrument everything from day one: traces, structured logs, and business-level KPIs. Without measurement, it is difficult to justify wider adoption.`,
      ],
      code: `// Example: baseline integration pattern\nconst config = {\n  service: "${slugify(topic)}",\n  environment: process.env.NODE_ENV,\n  observability: { traces: true, metrics: true },\n}\n\nexport async function bootstrap() {\n  // Initialize adapters and health checks\n  await validateDependencies(config)\n  return { status: "ready", focus: "${focus}" }\n}`,
    },
    {
      id: "best-practices",
      heading: "Best Practices",
      paragraphs: [
        `Mature teams treat ${topic} as an operational discipline, not only a tooling decision. That means runbooks, on-call readiness, and security review are part of the launch plan.`,
      ],
      list: [
        `Keep interfaces stable and version external contracts`,
        `Use feature flags for safe rollout and fast rollback`,
        `Automate compliance checks and dependency updates`,
        `Invest in developer documentation and internal workshops`,
      ],
    },
    {
      id: "common-pitfalls",
      heading: "Common Pitfalls",
      paragraphs: [
        `The most common failure mode is adopting ${topic} for hype rather than fit. Another frequent issue is skipping enablement—teams get tools without training or ownership.`,
        `Avoid big-bang migrations. Parallel runs, shadow traffic, and migration dashboards reduce risk while preserving business continuity.`,
      ],
    },
    {
      id: "conclusion",
      heading: "Conclusion",
      paragraphs: [
        `${topic} is no longer optional for teams building modern software at scale. With a focused rollout, clear metrics, and strong platform support, ${focus} becomes a durable advantage.`,
        `Start small, measure impact, and scale what works. The teams that learn fastest will define the next generation of ${category.toLowerCase()} best practices.`,
      ],
    },
  ]

  return sections
    .map((section) => {
      let html = `<h2 id="${section.id}">${section.heading}</h2>`
      html += section.paragraphs.map((p) => `<p>${p}</p>`).join("")
      if (section.list) {
        html += `<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>`
      }
      if (section.code) {
        html += `<pre><code>${section.code}</code></pre>`
      }
      return html
    })
    .join("")
}

function estimateReadTime(content) {
  const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
  return Math.max(5, Math.min(12, Math.round(words / 200)))
}

function buildPosts(existingSlugs) {
  const posts = []
  const allSlugs = [...existingSlugs]

  TOPICS.forEach((topic, index) => {
    const id = String(17 + index)
    const slug = slugify(topic.title)
    if (existingSlugs.includes(slug)) return

    const author = AUTHORS[index % AUTHORS.length]
    const content = generateContent(topic)
    const readTime = estimateReadTime(content)
    const publishedAt = formatDate(index * 2)
    const excerpt = `A practical guide to ${topic.topic}: ${topic.focus}.`
    const tags = [topic.category, topic.topic, "Software Engineering", "2026 Trends"]

    allSlugs.push(slug)
    posts.push({
      list: {
        id,
        slug,
        title: topic.title,
        excerpt,
        category: topic.category,
        featuredImage: "",
        author: {
          name: author.name,
          avatar: author.avatar,
          role: author.role,
        },
        publishedAt,
        readTime,
        isFeatured: index % 20 === 0,
      },
      detail: {
        id,
        slug,
        title: topic.title,
        category: topic.category,
        featuredImage: "",
        author,
        publishedAt,
        updatedAt: publishedAt,
        readTime,
        metaDescription: excerpt,
        tags,
        relatedSlugs: pickRelatedSlugs(allSlugs, topic.category, slug),
        content,
        cta: {
          title: "Need help implementing this?",
          description: "Mickiesoft engineers can help you design, build, and scale modern software solutions.",
          buttonText: "Contact Us",
          buttonUrl: "/contact",
        },
      },
      topic,
    })
  })

  return posts
}

function main() {
  const listEn = JSON.parse(fs.readFileSync(LIST_EN, "utf8"))
  const listSi = JSON.parse(fs.readFileSync(LIST_SI, "utf8"))
  const existingSlugs = listEn.map((post) => post.slug)

  const posts = buildPosts(existingSlugs)
  if (posts.length === 0) {
    console.log("No new posts to generate.")
    return
  }

  const newListEn = [...listEn, ...posts.map((post) => post.list)]
  const newListSi = [
    ...listSi,
    ...posts.map((post) => ({
      ...post.list,
      title: `${post.list.title} (Sinhala)`,
    })),
  ]

  fs.writeFileSync(LIST_EN, JSON.stringify(newListEn, null, 2))
  fs.writeFileSync(LIST_SI, JSON.stringify(newListSi, null, 2))

  posts.forEach((post) => {
    const detailDir = path.join(DETAILS_DIR, post.list.slug)
    fs.mkdirSync(detailDir, { recursive: true })

    const detailSi = {
      ...post.detail,
      title: `${post.detail.title} (Sinhala)`,
      metaDescription: `${post.topic.topic} පිළිබඳ සවිස්තරාත්මක මාර්ගෝපදේශයක්.`,
      content: `<h2 id="introduction">හැඳින්වීම</h2><p>මෙම ලිපිය ${post.topic.topic} පිළිබඳව නවීන තාක්ෂණික ප්‍රවණතා අනුව විස්තර කරයි. ${post.topic.focus} සඳහා ප්‍රායෝගික උපදෙස් මෙහි ඇතුළත් වේ.</p><h2 id="summary">සාරාංශය</h2><p>වැඩිදුර විස්තර සඳහා ඉංග්‍රීසි සංස්කරණය කියවන්න.</p>`,
    }

    fs.writeFileSync(path.join(detailDir, "en.json"), JSON.stringify(post.detail, null, 2))
    fs.writeFileSync(path.join(detailDir, "si.json"), JSON.stringify(detailSi, null, 2))
  })

  console.log(`Generated ${posts.length} new blog posts.`)
  console.log(`Total posts: ${newListEn.length}`)
}

main()
