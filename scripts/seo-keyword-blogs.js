const fs = require("fs")
const path = require("path")

const ROOT = path.join(__dirname, "..")
const LIST_EN = path.join(ROOT, "data/blog/list/en.json")
const LIST_SI = path.join(ROOT, "data/blog/list/si.json")
const DETAILS_DIR = path.join(ROOT, "data/blog/details")

const AUTHOR = {
  name: "James Carter",
  avatar: "/images/blog/authors/james-carter.png",
  role: "Senior Frontend Engineer",
  bio: "Passionate about building fast and scalable web applications with modern technologies.",
  socials: {
    linkedin: "https://linkedin.com/in/jamescarter",
    github: "https://github.com/jamescarter",
  },
}

const SEO_POSTS = [
  {
    slug: "software-development-company-sri-lanka",
    title: "Software Development Company Sri Lanka: Why Global Businesses Choose Mickiesoft",
    excerpt:
      "Looking for a software development company in Sri Lanka? Learn why global businesses hire Mickiesoft for web, mobile, and enterprise solutions.",
    category: "Outsourcing",
    featuredImage: "/images/blog/outsourcing-sri-lanka.png",
    tags: ["software development company Sri Lanka", "Outsourcing", "Hire Developers", "Offshore Development"],
    content: buildContent({
      title: "Software Development Company Sri Lanka",
      keyword: "software development company Sri Lanka",
      sections: [
        "Sri Lanka has become a leading destination for software development outsourcing. Companies across the US, UK, Australia, and Europe partner with Sri Lankan firms to access skilled engineers, competitive rates, and English-speaking talent.",
        "Mickiesoft (Pvt) Ltd is a software development company in Sri Lanka based in Moratuwa, serving global clients since 2020. We specialise in mobile apps, web development, Microsoft add-ins, and ERP solutions.",
        "When evaluating a software development company in Sri Lanka, look for proven delivery track records, transparent communication, agile processes, and security practices. Mickiesoft checks all these boxes with dedicated teams and flexible engagement models.",
      ],
    }),
  },
  {
    slug: "hire-developers-sri-lanka",
    title: "How to Hire Developers in Sri Lanka for Your Next Project",
    excerpt:
      "A practical guide to hire developers in Sri Lanka — engagement models, vetting tips, costs, and how to build a productive remote team.",
    category: "Outsourcing",
    featuredImage: "/images/blog/hire-developers.png",
    tags: ["hire developers", "hire developers Sri Lanka", "Remote Developers", "Dedicated Team"],
    content: buildContent({
      title: "Hire Developers in Sri Lanka",
      keyword: "hire developers",
      sections: [
        "Companies worldwide hire developers from Sri Lanka to scale engineering capacity without the overhead of local hiring. Sri Lanka produces thousands of IT graduates annually with strong skills in JavaScript, Python, Java, .NET, and mobile frameworks.",
        "There are three common ways to hire developers: staff augmentation (add engineers to your existing team), dedicated team (a full squad managed by the vendor), and project-based outsourcing (fixed scope and deliverables).",
        "To hire developers successfully, define clear requirements, establish communication cadences, use shared tooling (Jira, GitHub, Slack), and start with a small pilot before scaling. Mickiesoft offers all three models with developers experienced in React, Next.js, Flutter, and cloud platforms.",
      ],
    }),
  },
  {
    slug: "offshore-software-development-sri-lanka",
    title: "Offshore Software Development from Sri Lanka: A Complete Guide",
    excerpt:
      "Everything you need to know about offshore software development from Sri Lanka — benefits, time zones, costs, and how to get started.",
    category: "Outsourcing",
    featuredImage: "/images/blog/offshore-development.png",
    tags: ["offshore software development", "software outsourcing Sri Lanka", "Offshore Team", "IT Outsourcing"],
    content: buildContent({
      title: "Offshore Software Development from Sri Lanka",
      keyword: "offshore software development",
      sections: [
        "Offshore software development lets you build products with teams in cost-effective locations while maintaining quality. Sri Lanka offers a sweet spot: GMT+5:30 time zone overlap with Europe and partial overlap with US East Coast.",
        "Key benefits of offshore software development from Sri Lanka include 40–60% cost savings versus US/UK rates, a large English-speaking talent pool, government support for IT exports, and a mature outsourcing industry.",
        "Successful offshore partnerships require clear contracts, IP protection clauses, regular demos, and cultural alignment. Mickiesoft provides NDAs, source code ownership guarantees, and weekly sprint reviews for every offshore engagement.",
      ],
    }),
  },
  {
    slug: "outsource-software-development-to-sri-lanka",
    title: "Outsource Software Development to Sri Lanka: Benefits and Best Practices",
    excerpt:
      "Why outsource software development to Sri Lanka? Discover the advantages, risks, and best practices for a successful outsourcing partnership.",
    category: "Outsourcing",
    featuredImage: "/images/blog/outsourcing-sri-lanka.png",
    tags: ["outsource software development", "software development outsourcing", "Sri Lanka", "Best Practices"],
    content: buildContent({
      title: "Outsource Software Development to Sri Lanka",
      keyword: "outsource software development",
      sections: [
        "When you outsource software development, you delegate some or all of your engineering work to an external partner. Sri Lanka is ranked among the top outsourcing destinations in Asia for software services.",
        "Businesses outsource software development to accelerate time-to-market, access specialised skills (AI, cloud, mobile), reduce fixed costs, and focus internal teams on core product strategy.",
        "Best practices include starting with a well-defined MVP scope, choosing a partner with domain experience, insisting on code reviews and automated testing, and maintaining a single product owner on your side. Mickiesoft follows agile sprints with full transparency.",
      ],
    }),
  },
  {
    slug: "dedicated-development-team-sri-lanka",
    title: "Building a Dedicated Development Team in Sri Lanka",
    excerpt:
      "Learn how a dedicated development team in Sri Lanka works — team structure, management, pricing, and when it beats staff augmentation.",
    category: "Outsourcing",
    featuredImage: "/images/blog/hire-developers.png",
    tags: ["dedicated development team", "hire developers Sri Lanka", "Remote Team", "Outsourcing"],
    content: buildContent({
      title: "Dedicated Development Team in Sri Lanka",
      keyword: "dedicated development team",
      sections: [
        "A dedicated development team is a group of engineers who work exclusively on your product, managed day-to-day by the outsourcing partner but directed by your product roadmap. This model is ideal for long-term product development.",
        "Typical team composition includes a tech lead, 2–6 developers, a QA engineer, and optionally a UI/UX designer. Mickiesoft assembles dedicated development teams in Sri Lanka within 2–3 weeks.",
        "Compared to freelancers, a dedicated team offers continuity, institutional knowledge, and shared processes. Compared to in-house hiring, it eliminates recruitment costs, office overhead, and long notice periods.",
      ],
    }),
  },
  {
    slug: "software-outsourcing-for-us-uk-companies",
    title: "Software Outsourcing for US and UK Companies from Sri Lanka",
    excerpt:
      "How US and UK companies benefit from software outsourcing to Sri Lanka — time zone coverage, cost savings, compliance, and real case patterns.",
    category: "Outsourcing",
    featuredImage: "/images/blog/offshore-development.png",
    tags: ["software outsourcing", "offshore development", "US companies", "UK companies", "Sri Lanka"],
    content: buildContent({
      title: "Software Outsourcing for US and UK Companies",
      keyword: "software outsourcing",
      sections: [
        "US and UK companies increasingly outsource software development to Sri Lanka for cost efficiency and access to senior engineering talent. The IT industry in Sri Lanka exports over $1 billion in services annually.",
        "For US companies, Sri Lankan teams provide overnight development cycles — your team sleeps while Sri Lankan developers push code, enabling faster iteration. For UK companies, the 5.5-hour time difference allows real-time collaboration during business hours.",
        "Compliance considerations include GDPR for UK clients, SOC 2 readiness, and secure development practices. Mickiesoft supports secure VPN access, encrypted communications, and signed NDAs for all US and UK engagements.",
      ],
    }),
  },
]

function buildContent({ title, keyword, sections }) {
  return `
<h2 id="introduction">Introduction</h2>
<p>${title} is a topic every engineering leader and founder should understand in 2026. Whether you are scaling a startup or optimising enterprise delivery, <strong>${keyword}</strong> can be a strategic advantage when done right.</p>
<p>${sections[0]}</p>
<h2 id="why-sri-lanka">Why Sri Lanka?</h2>
<p>Sri Lanka combines a highly educated workforce, competitive pricing, and strong English proficiency — making it ideal for global software partnerships.</p>
<p>${sections[1]}</p>
<ul>
<li>Cost-effective engineering talent compared to US, UK, and Australian markets</li>
<li>Strong university pipeline in computer science and engineering</li>
<li>Proven track record in fintech, healthcare, logistics, and SaaS</li>
<li>Favourable time zone for European and partial US collaboration</li>
</ul>
<h2 id="how-it-works">How It Works</h2>
<p>${sections[2]}</p>
<h2 id="engagement-models">Engagement Models</h2>
<p>Mickiesoft offers flexible ways to work with a <strong>software development company in Sri Lanka</strong>:</p>
<ul>
<li><strong>Fixed-price projects</strong> — defined scope, milestones, and deliverables</li>
<li><strong>Dedicated team</strong> — long-term engineers embedded in your workflow</li>
<li><strong>Staff augmentation</strong> — hire developers to complement your existing squad</li>
</ul>
<h2 id="get-started">Get Started</h2>
<p>Ready to <strong>hire developers</strong> or <strong>outsource software development</strong> to Sri Lanka? Contact Mickiesoft for a free consultation. We will help you choose the right model, estimate timelines, and assemble a team matched to your technology stack.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Partnering with the right <strong>${keyword}</strong> partner can transform your delivery speed and product quality. Mickiesoft brings deep expertise, transparent processes, and a commitment to long-term partnerships with global clients.</p>`.trim()
}

function main() {
  const listEn = JSON.parse(fs.readFileSync(LIST_EN, "utf8"))
  const listSi = JSON.parse(fs.readFileSync(LIST_SI, "utf8"))
  const existingSlugs = new Set(listEn.map((p) => p.slug))

  const newPosts = SEO_POSTS.filter((p) => !existingSlugs.has(p.slug))
  if (newPosts.length === 0) {
    console.log("SEO posts already exist.")
    return
  }

  let nextId = Math.max(...listEn.map((p) => parseInt(p.id, 10))) + 1

  newPosts.forEach((post, index) => {
    const id = String(nextId + index)
    const publishedAt = "2026-06-07"

    const listItem = {
      id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      featuredImage: post.featuredImage,
      author: {
        name: AUTHOR.name,
        avatar: AUTHOR.avatar,
        role: AUTHOR.role,
      },
      publishedAt,
      readTime: 7,
      isFeatured: index === 0,
    }

    const detailEn = {
      id,
      slug: post.slug,
      title: post.title,
      category: post.category,
      featuredImage: post.featuredImage,
      author: AUTHOR,
      publishedAt,
      updatedAt: publishedAt,
      readTime: 7,
      metaDescription: post.excerpt,
      tags: post.tags,
      relatedSlugs: [
        "how-ai-is-transforming-enterprise-software-development",
        "building-scalable-applications-on-aws",
        "cicd-best-practices-for-modern-teams",
      ],
      content: post.content,
      cta: {
        title: "Ready to hire developers in Sri Lanka?",
        description: "Talk to Mickiesoft about outsourcing your next software project.",
        buttonText: "Contact Us",
        buttonUrl: "/contact",
      },
    }

    listEn.unshift(listItem)
    listSi.unshift({ ...listItem, title: `${listItem.title} (Sinhala)` })

    const detailDir = path.join(DETAILS_DIR, post.slug)
    fs.mkdirSync(detailDir, { recursive: true })
    fs.writeFileSync(path.join(detailDir, "en.json"), JSON.stringify(detailEn, null, 2))
    fs.writeFileSync(
      path.join(detailDir, "si.json"),
      JSON.stringify(
        {
          ...detailEn,
          title: `${detailEn.title} (Sinhala)`,
          metaDescription: "ශ්‍රී ලංකාවේ මෘදුකාංග සංවර්ධනය සහ සංවර්ධකයින් බඳවා ගැනීම පිළිබඳ මාර්ගෝපදේශය.",
          content: `<h2 id="introduction">හැඳින්වීම</h2><p>මෙම ලිපිය ශ්‍රී ලංකාවේ මෘදුකාංග සංවර්ධන සමාගම් සහ බාහිර සංවර්ධනය පිළිබඳව විස්තර කරයි. වැඩිදුර විස්තර සඳහා ඉංග්‍රීසි සංස්කරණය කියවන්න.</p>`,
        },
        null,
        2
      )
    )
  })

  fs.writeFileSync(LIST_EN, JSON.stringify(listEn, null, 2))
  fs.writeFileSync(LIST_SI, JSON.stringify(listSi, null, 2))
  console.log(`Added ${newPosts.length} SEO keyword blog posts. Total: ${listEn.length}`)
}

main()
