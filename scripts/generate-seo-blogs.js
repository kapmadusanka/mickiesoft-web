const fs = require('fs');
const path = require('path');

const blogs = [
  {
    id: "107",
    slug: "hire-flutter-developer-sri-lanka",
    titleEn: "Hire a Flutter Developer in Sri Lanka: The Ultimate Guide",
    titleSi: "ශ්‍රී ලංකාවේ Flutter සංවර්ධකයෙකු බඳවා ගැනීම: අවසාන මාර්ගෝපදේශය",
    categoryEn: "Mobile",
    categorySi: "ජංගම",
    image: "/images/blog/hire-flutter-developer.png",
    excerptEn: "Looking to build a cross-platform app? Learn why hiring a Flutter developer from Sri Lanka is the most cost-effective way to scale your mobile team.",
    excerptSi: "හරස්-වේදිකා ජංගම යෙදුමක් තැනීමට අවශ්‍යද? ශ්‍රී ලංකාවෙන් Flutter සංවර්ධකයෙකු බඳවා ගැනීම ලාභදායී වන්නේ මන්දැයි ඉගෙන ගන්න.",
    contentEn: "<p>If you're looking to build high-performance mobile apps for both iOS and Android simultaneously, Flutter is the top choice. When you <strong>hire a Flutter developer in Sri Lanka</strong>, you gain access to world-class talent at competitive rates. Sri Lanka's tech ecosystem is renowned for producing skilled mobile engineers who excel in Dart and Flutter.</p><h2>Why Flutter?</h2><p>Flutter allows you to maintain a single codebase for multiple platforms, drastically reducing development time and costs. When you hire offshore developers, they can leverage Flutter's hot-reload feature to deliver features rapidly.</p><h2>Benefits of Hiring from Sri Lanka</h2><p>Sri Lankan engineers are fluent in English, work well in agile environments, and offer significant cost savings compared to US or UK rates without compromising on quality.</p>",
    contentSi: "<p>ඔබ එකවර iOS සහ Android සඳහා ජංගම යෙදුම් තැනීමට බලාපොරොත්තු වන්නේ නම්, Flutter යනු හොඳම තේරීමයි. ඔබ <strong>ශ්‍රී ලංකාවේ Flutter සංවර්ධකයෙකු බඳවා ගන්නා විට</strong>, ඔබට තරඟකාරී මිලකට ලෝක මට්ටමේ දක්ෂයින්ට ප්‍රවේශය ලැබේ.</p><h2>Flutter ඇයි?</h2><p>බහු වේදිකා සඳහා තනි කේතයක් පවත්වා ගැනීමට Flutter ඔබට ඉඩ සලසයි, සංවර්ධන කාලය සහ පිරිවැය විශාල ලෙස අඩු කරයි.</p><h2>ශ්‍රී ලංකාවෙන් බඳවා ගැනීමේ ප්‍රතිලාභ</h2><p>ශ්‍රී ලාංකික ඉංජිනේරුවන් ඉංග්‍රීසි භාෂාව චතුර ලෙස හසුරුවන අතර, US හෝ UK අනුපාතයන්ට සාපේක්ෂව සැලකිය යුතු පිරිවැය ඉතිරියක් ලබා දෙයි.</p>"
  },
  {
    id: "108",
    slug: "microsoft-office-add-in-development-company",
    titleEn: "Top Microsoft Office Add-in Development Company",
    titleSi: "හොඳම Microsoft Office Add-in සංවර්ධන සමාගම",
    categoryEn: "Enterprise",
    categorySi: "ව්‍යවසාය",
    image: "/images/blog/office-addin.png",
    excerptEn: "Discover how partnering with a specialized Microsoft Office add-in development company can automate your workflows and supercharge productivity in Excel and Word.",
    excerptSi: "විශේෂිත Microsoft Office add-in සංවර්ධන සමාගමක් සමඟ හවුල් වීමෙන් ඔබේ කාර්ය ප්‍රවාහයන් ස්වයංක්‍රීය කරන්නේ කෙසේදැයි සොයා බලන්න.",
    contentEn: "<p>Enterprise productivity heavily relies on Microsoft Office. By partnering with a leading <strong>Microsoft Office add-in development company</strong>, businesses can automate repetitive tasks across Excel, Word, and Outlook.</p><h2>Custom Excel Add-ins</h2><p>We build tailored solutions that integrate your internal APIs directly into Excel, allowing your finance and operations teams to pull live data without leaving their spreadsheets.</p><h2>Modern Office.js Framework</h2><p>Using the modern Office.js API, we create cross-platform add-ins that work seamlessly on Windows, Mac, and Office on the Web.</p>",
    contentSi: "<p>ව්‍යවසාය ඵලදායිතාව විශාල වශයෙන් Microsoft Office මත රඳා පවතී. ප්‍රමුඛ පෙළේ <strong>Microsoft Office add-in සංවර්ධන සමාගමක්</strong> සමඟ හවුල් වීමෙන්, ව්‍යාපාරවලට Excel, Word සහ Outlook හරහා පුනරාවර්තන කාර්යයන් ස්වයංක්‍රීය කළ හැක.</p><h2>අභිරුචි Excel Add-ins</h2><p>ඔබේ අභ්‍යන්තර API කෙලින්ම Excel වෙත ඒකාබද්ධ කරන විසඳුම් අපි ගොඩනඟමු.</p><h2>නවීන Office.js රාමුව</h2><p>නවීන Office.js API භාවිතයෙන්, අපි Windows, Mac, සහ Office on the Web මත බාධාවකින් තොරව ක්‍රියා කරන හරස්-වේදිකා add-ins නිර්මාණය කරමු.</p>"
  },
  {
    id: "109",
    slug: "dedicated-dotnet-developer-offshore",
    titleEn: "Hire a Dedicated .NET Developer Offshore",
    titleSi: "කැපවූ .NET සංවර්ධකයෙකු බාහිරව බඳවා ගන්න",
    categoryEn: "Outsourcing",
    categorySi: "බාහිරකරණය",
    image: "/images/blog/dotnet-developer.png",
    excerptEn: "Scale your enterprise backend by hiring a dedicated .NET developer offshore. Get expert C# and ASP.NET Core talent seamlessly integrated into your team.",
    excerptSi: "කැපවූ .NET සංවර්ධකයෙකු බාහිරව බඳවා ගැනීමෙන් ඔබේ ව්‍යවසාය පසුපෙළ පරිමාණය කරන්න.",
    contentEn: "<p>When enterprise systems need to scale securely, .NET remains the gold standard. Hiring a <strong>dedicated .NET developer offshore</strong> is a strategic move for CTOs looking to expand their engineering capacity efficiently.</p><h2>Why .NET Core?</h2><p>Modern ASP.NET Core is incredibly fast, cross-platform, and perfect for microservices architecture. Our offshore .NET developers are experts in C#, Entity Framework, and Azure cloud deployments.</p><h2>The Offshore Advantage</h2><p>A dedicated offshore developer acts as an extension of your internal team. They attend your daily standups, follow your coding standards, and deliver high-quality code at a fraction of local hiring costs.</p>",
    contentSi: "<p>ව්‍යවසාය පද්ධති ආරක්ෂිතව පරිමාණය කිරීමට අවශ්‍ය වූ විට, .NET හොඳම ප්‍රමිතිය ලෙස පවතී. <strong>කැපවූ .NET සංවර්ධකයෙකු බාහිරව බඳවා ගැනීම</strong> ඉංජිනේරු ධාරිතාව පුළුල් කිරීමට අපේක්ෂා කරන CTOs සඳහා උපායමාර්ගික පියවරකි.</p><h2>.NET Core ඇයි?</h2><p>නවීන ASP.NET Core ඇදහිය නොහැකි තරම් වේගවත් වන අතර මයික්‍රොසර්විස් ගෘහ නිර්මාණ ශිල්පය සඳහා පරිපූර්ණ වේ.</p><h2>බාහිරකරණයේ වාසිය</h2><p>කැපවූ බාහිර සංවර්ධකයෙකු ඔබේ අභ්‍යන්තර කණ්ඩායමේ දිගුවක් ලෙස ක්‍රියා කරයි. ඔවුන් ඔබේ දෛනික රැස්වීම්වලට සහභාගී වන අතර උසස් තත්ත්වයේ කේත සපයයි.</p>"
  },
  {
    id: "110",
    slug: "erp-development-company-sri-lanka",
    titleEn: "Top ERP Development Company in Sri Lanka",
    titleSi: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම ERP සංවර්ධන සමාගම",
    categoryEn: "Enterprise",
    categorySi: "ව්‍යවසාය",
    image: "/images/blog/erp-development.png",
    excerptEn: "Streamline your business operations with a leading ERP development company in Sri Lanka. We build custom ERP systems for finance, HR, and logistics.",
    excerptSi: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම ERP සංවර්ධන සමාගමක් සමඟ ඔබේ ව්‍යාපාර මෙහෙයුම් විධිමත් කරන්න.",
    contentEn: "<p>Off-the-shelf software often forces businesses to change their workflows. As a premier <strong>ERP development company in Sri Lanka</strong>, we build custom Enterprise Resource Planning systems that adapt to how you actually work.</p><h2>Custom Modules for Every Department</h2><p>Whether you need custom dashboards for Finance, inventory tracking for Supply Chain, or automated payroll for HR, our custom ERPs integrate all departments into a single, unified source of truth.</p><h2>Scalable Architecture</h2><p>Our ERP systems are built on scalable cloud architectures ensuring high availability, robust security, and seamless integration with third-party tools via secure APIs.</p>",
    contentSi: "<p>සාමාන්‍ය මෘදුකාංග බොහෝ විට ව්‍යාපාරවලට ඔවුන්ගේ කාර්ය ප්‍රවාහ වෙනස් කිරීමට බල කරයි. ශ්‍රී ලංකාවේ ප්‍රමුඛතම <strong>ERP සංවර්ධන සමාගමක්</strong> ලෙස, අපි ඔබ සැබවින්ම වැඩ කරන ආකාරයට අනුගත වන අභිරුචි ERP පද්ධති ගොඩනඟමු.</p><h2>සෑම දෙපාර්තමේන්තුවක් සඳහාම අභිරුචි මොඩියුල</h2><p>මුල්‍ය සඳහා අභිරුචි උපකරණ පුවරු, සැපයුම් දාමය සඳහා ඉන්වෙන්ටරි ලුහුබැඳීම හෝ මානව සම්පත් සඳහා ස්වයංක්‍රීය වැටුප් ගෙවීම් ඔබට අවශ්‍ය වුවද, අපගේ ERPs සියලු දෙපාර්තමේන්තු තනි පද්ධතියකට ඒකාබද්ධ කරයි.</p><h2>පරිමාණය කළ හැකි ගෘහ නිර්මාණ ශිල්පය</h2><p>අපගේ ERP පද්ධති ගොඩනඟා ඇත්තේ ඉහළ ලබා ගැනීමේ හැකියාව, ශක්තිමත් ආරක්ෂාව සහ තෙවන පාර්ශවීය මෙවලම් සමඟ බාධාවකින් තොරව ඒකාබද්ධ වීම සහතික කරන පරිමාණය කළ හැකි වලාකුළු ගෘහ නිර්මාණ ශිල්පය මත ය.</p>"
  }
];

const basePath = path.join(process.cwd(), 'data', 'blog');

// Write detail files
blogs.forEach(blog => {
  const dirPath = path.join(basePath, 'details', blog.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const enDetail = {
    id: blog.id,
    slug: blog.slug,
    title: blog.titleEn,
    category: blog.categoryEn,
    featuredImage: blog.image,
    author: {
      name: "James Carter",
      avatar: "/images/blog/authors/james-carter.png",
      role: "Senior Frontend Engineer",
      bio: "Passionate about building fast and scalable web applications with modern technologies."
    },
    publishedAt: "2026-06-11",
    readTime: 5,
    metaDescription: blog.excerptEn,
    tags: [blog.categoryEn, "Outsourcing", "Sri Lanka"],
    relatedSlugs: [],
    content: blog.contentEn,
    cta: {
      title: "Ready to start your project?",
      description: "Contact us today for a free technical consultation.",
      buttonText: "Contact Us",
      buttonUrl: "/#contact"
    }
  };

  const siDetail = {
    ...enDetail,
    title: blog.titleSi,
    category: blog.categorySi,
    metaDescription: blog.excerptSi,
    content: blog.contentSi,
    tags: [blog.categorySi, "Outsourcing", "Sri Lanka"]
  };

  fs.writeFileSync(path.join(dirPath, 'en.json'), JSON.stringify(enDetail, null, 2));
  fs.writeFileSync(path.join(dirPath, 'si.json'), JSON.stringify(siDetail, null, 2));
});

// Update list files
const enListPath = path.join(basePath, 'list', 'en.json');
const siListPath = path.join(basePath, 'list', 'si.json');

const enList = JSON.parse(fs.readFileSync(enListPath, 'utf8'));
const siList = JSON.parse(fs.readFileSync(siListPath, 'utf8'));

const enNewItems = blogs.map(blog => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.titleEn,
  excerpt: blog.excerptEn,
  category: blog.categoryEn,
  featuredImage: blog.image,
  author: {
    name: "James Carter",
    avatar: "/images/blog/authors/james-carter.png",
    role: "Senior Frontend Engineer"
  },
  publishedAt: "2026-06-11",
  readTime: 5,
  isFeatured: false
}));

const siNewItems = blogs.map(blog => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.titleSi,
  excerpt: blog.excerptSi,
  category: blog.categorySi,
  featuredImage: blog.image,
  author: {
    name: "James Carter",
    avatar: "/images/blog/authors/james-carter.png",
    role: "Senior Frontend Engineer"
  },
  publishedAt: "2026-06-11",
  readTime: 5,
  isFeatured: false
}));

enList.unshift(...enNewItems);
siList.unshift(...siNewItems);

fs.writeFileSync(enListPath, JSON.stringify(enList, null, 2));
fs.writeFileSync(siListPath, JSON.stringify(siList, null, 2));

console.log('Blogs generated successfully.');
