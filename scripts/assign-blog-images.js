const fs = require("fs")
const path = require("path")

const ROOT = path.join(__dirname, "..")
const LIST_EN = path.join(ROOT, "data/blog/list/en.json")
const LIST_SI = path.join(ROOT, "data/blog/list/si.json")
const DETAILS_DIR = path.join(ROOT, "data/blog/details")

const CATEGORY_IMAGES = {
  AI: "/images/blog/ai-enterprise.png",
  "Next.js": "/images/blog/nextjs-performance.png",
  React: "/images/blog/react-patterns.png",
  Frontend: "/images/blog/react-patterns.png",
  TypeScript: "/images/blog/nextjs-performance.png",
  Cloud: "/images/blog/aws-scalable.png",
  DevOps: "/images/blog/cicd-practices.png",
  Security: "/images/blog/zero-trust-security.png",
  Web3: "/images/blog/web3-enterprise.png",
  Backend: "/images/blog/graphql-migration.png",
  Mobile: "/images/blog/flutter-mobile.png",
  Design: "/images/blog/uiux-psychology.png",
  Testing: "/images/blog/cypress-testing.png",
  Architecture: "/images/blog/microservices-transition.png",
  "Emerging Tech": "/images/blog/ai-enterprise.png",
  Outsourcing: "/images/blog/outsourcing-sri-lanka.png",
}

const FALLBACK_IMAGES = [
  "/images/blog/ai-enterprise.png",
  "/images/blog/nextjs-performance.png",
  "/images/blog/react-patterns.png",
  "/images/blog/aws-scalable.png",
  "/images/blog/cicd-practices.png",
  "/images/blog/flutter-mobile.png",
  "/images/blog/serverless-computing.png",
  "/images/blog/llm-integration.png",
  "/images/blog/microservices-transition.png",
  "/images/blog/hero-bg.png",
]

function pickImage(post, index) {
  if (post.featuredImage) return post.featuredImage
  return CATEGORY_IMAGES[post.category] || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
}

function updateList(filePath) {
  const list = JSON.parse(fs.readFileSync(filePath, "utf8"))
  let updated = 0

  list.forEach((post, index) => {
    const image = pickImage(post, index)
    if (post.featuredImage !== image) {
      post.featuredImage = image
      updated++
    }

    const detailEn = path.join(DETAILS_DIR, post.slug, "en.json")
    const detailSi = path.join(DETAILS_DIR, post.slug, "si.json")

    for (const detailPath of [detailEn, detailSi]) {
      if (fs.existsSync(detailPath)) {
        const detail = JSON.parse(fs.readFileSync(detailPath, "utf8"))
        if (detail.featuredImage !== image) {
          detail.featuredImage = image
          fs.writeFileSync(detailPath, JSON.stringify(detail, null, 2))
        }
      }
    }
  })

  fs.writeFileSync(filePath, JSON.stringify(list, null, 2))
  return updated
}

const enUpdated = updateList(LIST_EN)
const siUpdated = updateList(LIST_SI)
console.log(`Assigned images — EN: ${enUpdated}, SI: ${siUpdated} posts updated.`)
