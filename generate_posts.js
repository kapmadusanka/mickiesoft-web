const fs = require('fs');
const path = require('path');

const newPosts = [
  {
    "id": "7",
    "slug": "zero-trust-architecture-in-modern-web-applications",
    "title": "Zero-Trust Architecture in Modern Web Applications",
    "excerpt": "Learn how zero-trust security models protect modern web applications from emerging cyber threats and why you should adopt it.",
    "category": "Security",
    "featuredImage": "/images/blog/zero-trust-security.png",
    "author": {
      "name": "Alex Mercer",
      "avatar": "/images/blog/authors/james-carter.jpg",
      "role": "Security Engineer"
    },
    "publishedAt": "2025-06-01",
    "readTime": 8,
    "isFeatured": false
  },
  {
    "id": "8",
    "slug": "understanding-blockchain-for-enterprise",
    "title": "Understanding Blockchain for Enterprise",
    "excerpt": "A deep dive into how blockchain technology and decentralized networks are transforming enterprise solutions.",
    "category": "Web3",
    "featuredImage": "/images/blog/web3-enterprise.png",
    "author": {
      "name": "Sarah Chen",
      "avatar": "/images/blog/authors/olivia-martin.jpg",
      "role": "Blockchain Architect"
    },
    "publishedAt": "2025-05-30",
    "readTime": 10,
    "isFeatured": false
  },
  {
    "id": "9",
    "slug": "migrating-from-rest-to-graphql",
    "title": "Migrating from REST to GraphQL",
    "excerpt": "Discover the benefits of GraphQL and a step-by-step guide on migrating your existing REST APIs.",
    "category": "Backend",
    "featuredImage": "/images/blog/graphql-migration.png",
    "author": {
      "name": "David Kim",
      "avatar": "/images/blog/authors/daniel-lee.jpg",
      "role": "Backend Engineer"
    },
    "publishedAt": "2025-05-28",
    "readTime": 7,
    "isFeatured": false
  },
  {
    "id": "10",
    "slug": "the-psychology-of-user-interface-design",
    "title": "The Psychology of User Interface Design",
    "excerpt": "How cognitive psychology principles can help you design more intuitive and delightful user interfaces.",
    "category": "Design",
    "featuredImage": "/images/blog/uiux-psychology.png",
    "author": {
      "name": "Emma Wright",
      "avatar": "/images/blog/authors/sophia-nguyen.jpg",
      "role": "UX Researcher"
    },
    "publishedAt": "2025-05-25",
    "readTime": 6,
    "isFeatured": false
  },
  {
    "id": "11",
    "slug": "scaling-with-serverless-computing",
    "title": "Scaling with Serverless Computing",
    "excerpt": "Embrace the serverless revolution to automatically scale your infrastructure and reduce operational costs.",
    "category": "Cloud",
    "featuredImage": "/images/blog/serverless-computing.png",
    "author": {
      "name": "Michael Chang",
      "avatar": "/images/blog/authors/liam-wilson.jpg",
      "role": "Cloud Architect"
    },
    "publishedAt": "2025-05-22",
    "readTime": 5,
    "isFeatured": true
  },
  {
    "id": "12",
    "slug": "monolith-to-microservices-transition",
    "title": "Monolith to Microservices Transition",
    "excerpt": "Best practices and common pitfalls when breaking down a monolithic application into microservices.",
    "category": "Architecture",
    "featuredImage": "/images/blog/microservices-transition.png",
    "author": {
      "name": "James Carter",
      "avatar": "/images/blog/authors/james-carter.jpg",
      "role": "Senior Frontend Engineer"
    },
    "publishedAt": "2025-05-21",
    "readTime": 9,
    "isFeatured": false
  },
  {
    "id": "13",
    "slug": "end-to-end-testing-strategies-with-cypress",
    "title": "End-to-End Testing Strategies with Cypress",
    "excerpt": "Automate your testing workflows and catch regressions early with comprehensive Cypress test suites.",
    "category": "Testing",
    "featuredImage": "/images/blog/cypress-testing.png",
    "author": {
      "name": "Olivia Martin",
      "avatar": "/images/blog/authors/olivia-martin.jpg",
      "role": "QA Engineer"
    },
    "publishedAt": "2025-05-19",
    "readTime": 7,
    "isFeatured": false
  },
  {
    "id": "14",
    "slug": "integrating-llms-into-your-saas-product",
    "title": "Integrating LLMs into your SaaS Product",
    "excerpt": "A practical guide to adding Large Language Models and AI capabilities into your existing software.",
    "category": "AI",
    "featuredImage": "/images/blog/llm-integration.png",
    "author": {
      "name": "Daniel Lee",
      "avatar": "/images/blog/authors/daniel-lee.jpg",
      "role": "Machine Learning Engineer"
    },
    "publishedAt": "2025-05-16",
    "readTime": 8,
    "isFeatured": false
  },
  {
    "id": "15",
    "slug": "mastering-zustand-for-react-state-management",
    "title": "Mastering Zustand for React State Management",
    "excerpt": "Why Zustand is becoming the preferred state management library for modern React applications.",
    "category": "React",
    "featuredImage": "/images/blog/zustand-state.png",
    "author": {
      "name": "Sophia Nguyen",
      "avatar": "/images/blog/authors/sophia-nguyen.jpg",
      "role": "Frontend Architect"
    },
    "publishedAt": "2025-05-14",
    "readTime": 6,
    "isFeatured": false
  },
  {
    "id": "16",
    "slug": "why-we-are-writing-our-backend-in-rust",
    "title": "Why We Are Writing Our Backend in Rust",
    "excerpt": "Exploring the performance, safety, and productivity benefits of rewriting core services in Rust.",
    "category": "Backend",
    "featuredImage": "",
    "author": {
      "name": "Liam Wilson",
      "avatar": "/images/blog/authors/liam-wilson.jpg",
      "role": "Systems Engineer"
    },
    "publishedAt": "2025-05-11",
    "readTime": 11,
    "isFeatured": false
  }
];

const listEnPath = path.join('data', 'blog', 'list', 'en.json');
const listSiPath = path.join('data', 'blog', 'list', 'si.json');

const listEn = JSON.parse(fs.readFileSync(listEnPath, 'utf8'));
const listSi = JSON.parse(fs.readFileSync(listSiPath, 'utf8'));

listEn.push(...newPosts);
const newPostsSi = newPosts.map(p => ({...p, title: p.title + " (Sinhala)"}));
listSi.push(...newPostsSi);

fs.writeFileSync(listEnPath, JSON.stringify(listEn, null, 2));
fs.writeFileSync(listSiPath, JSON.stringify(listSi, null, 2));

newPosts.forEach(post => {
  const detailDir = path.join('data', 'blog', 'details', post.slug);
  fs.mkdirSync(detailDir, { recursive: true });

  const detailEn = {
    ...post,
    updatedAt: post.publishedAt,
    metaDescription: post.excerpt,
    tags: [post.category, "Technology", "Software Engineering"],
    relatedSlugs: ["how-ai-is-transforming-enterprise-software-development", "10-performance-optimizations-for-nextjs-applications"],
    content: `<h2>Introduction to ${post.title}</h2><p>This is a detailed placeholder content for ${post.title}. It explores the fundamental concepts, best practices, and implementation details necessary for modern software development.</p><h3>Key Benefits</h3><ul><li>Improved performance</li><li>Enhanced security</li><li>Better developer experience</li></ul><p>By leveraging these concepts, teams can deliver higher quality software faster than ever before.</p><h2>Conclusion</h2><p>The future of software architecture heavily relies on these foundational principles.</p>`,
    cta: {
      title: "Need expert help?",
      description: "Our team of engineers can help you implement these concepts.",
      buttonText: "Contact Us",
      buttonUrl: "/contact"
    }
  };

  const detailSi = {
    ...detailEn,
    title: detailEn.title + " (Sinhala)",
    content: `<h2>${post.title} පිළිබඳ හැඳින්වීම</h2><p>මෙය සවිස්තරාත්මක ලිපියකි...</p>`
  };

  fs.writeFileSync(path.join(detailDir, 'en.json'), JSON.stringify(detailEn, null, 2));
  fs.writeFileSync(path.join(detailDir, 'si.json'), JSON.stringify(detailSi, null, 2));
});
