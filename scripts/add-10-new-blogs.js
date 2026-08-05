const fs = require('fs');
const path = require('path');

const blogs = [
  {
    id: "111",
    slug: "why-every-growing-business-needs-custom-web-application-2026",
    titleEn: "Why Every Growing Business Needs a Custom Web Application in 2026",
    titleSi: "2026 දී සෑම වර්ධනය වන ව්‍යාපාරයකටම අභිරුචි වෙබ් යෙදුමක් අවශ්‍ය වන්නේ ඇයි?",
    categoryEn: "Web Development",
    categorySi: "වෙබ් සංවර්ධනය",
    image: "/images/blog/custom-web-app.png",
    excerptEn: "Discover why off-the-shelf software is no longer enough for growing businesses in 2026, and how custom web applications provide scalability, security, and a competitive edge.",
    excerptSi: "2026 දී වර්ධනය වන ව්‍යාපාර සඳහා සාමාන්‍ය මෘදුකාංග තවදුරටත් ප්‍රමාණවත් නොවන්නේ මන්දැයි සොයා බලන්න.",
    contentEn: `<h2>The Limitations of Off-the-Shelf Software</h2>
<p>As businesses grow, their operational needs become increasingly complex. While off-the-shelf SaaS solutions are great for startups, they often become a bottleneck for mid-sized and enterprise companies. In 2026, relying on generic software means compromising on workflows, facing scalability issues, and struggling with integration gaps.</p>
<h2>Why Custom Web Applications are the Solution</h2>
<p>A custom web application is built entirely around your unique business logic. It eliminates the need for workarounds and ensures that the software adapts to your processes, not the other way around. <strong>Mickiesoft</strong> specializes in developing tailor-made web apps that streamline operations and drive efficiency.</p>
<h3>1. Ultimate Scalability</h3>
<p>Custom applications are designed with your future growth in mind. Whether you need to support a sudden spike in users or integrate new features down the line, a custom architecture allows for seamless scaling without incurring exponential licensing fees.</p>
<h3>2. Enhanced Security and Compliance</h3>
<p>Data breaches are a significant concern in 2026. Custom web apps provide superior security because they are not targeted by mass cyberattacks aimed at popular commercial software. Furthermore, they can be designed to comply strictly with industry-specific regulations like GDPR, HIPAA, or local data protection laws.</p>
<h3>3. Seamless Integrations</h3>
<p>Your business likely uses multiple tools—CRM, ERP, marketing platforms, and payment gateways. Custom web applications act as a centralized hub, integrating flawlessly with your existing ecosystem via custom APIs, reducing data silos and manual data entry.</p>
<h2>Conclusion</h2>
<p>Investing in a custom web application is an investment in your business's future. It provides the agility, security, and efficiency needed to stay ahead of the competition in 2026. Contact <strong>Mickiesoft</strong> today to discuss how we can build a solution tailored for your success.</p>`,
    contentSi: `<h2>සාමාන්‍ය මෘදුකාංගවල සීමාවන්</h2>
<p>ව්‍යාපාර වර්ධනය වන විට ඒවායේ මෙහෙයුම් අවශ්‍යතා වඩ වඩාත් සංකීර්ණ වේ. ආරම්භක ව්‍යාපාර සඳහා සාමාන්‍ය SaaS විසඳුම් විශිෂ්ට වුවද, ඒවා බොහෝ විට මධ්‍යම ප්‍රමාණයේ සහ ව්‍යවසාය සමාගම් සඳහා බාධාවක් වේ.</p>
<h2>අභිරුචි වෙබ් යෙදුම් විසඳුම වන්නේ ඇයි</h2>
<p>අභිරුචි වෙබ් යෙදුමක් සම්පූර්ණයෙන්ම ගොඩනඟා ඇත්තේ ඔබේ අද්විතීය ව්‍යාපාරික තර්කනය වටා ය. එය මෘදුකාංගය ඔබේ ක්‍රියාවලීන්ට අනුවර්තනය වන බව සහතික කරයි.</p>
<h3>1. අවසාන පරිමාණ හැකියාව</h3>
<p>අභිරුචි යෙදුම් නිර්මාණය කර ඇත්තේ ඔබේ අනාගත වර්ධනය මනසේ තබාගෙන ය. පරිශීලකයින්ගේ හදිසි වැඩිවීමකට සහාය වීමට හෝ නව විශේෂාංග ඒකාබද්ධ කිරීමට ඔබට අවශ්‍ය වුවද, අභිරුචි ගෘහ නිර්මාණ ශිල්පය බාධාවකින් තොරව පරිමාණය කිරීමට ඉඩ සලසයි.</p>
<h3>2. වැඩිදියුණු කළ ආරක්ෂාව සහ අනුකූලතාවය</h3>
<p>අභිරුචි වෙබ් යෙදුම් උසස් ආරක්ෂාවක් සපයයි, මන්ද ඒවා ජනප්‍රිය වාණිජ මෘදුකාංග ඉලක්ක කරගත් මහා සයිබර් ප්‍රහාරවලට ඉලක්ක නොවන බැවිනි.</p>
<h3>3. බාධාවකින් තොරව ඒකාබද්ධ වීම</h3>
<p>ඔබේ ව්‍යාපාරය CRM, ERP, අලෙවිකරණ වේදිකා වැනි බහුවිධ මෙවලම් භාවිත කරනවා විය හැක. අභිරුචි වෙබ් යෙදුම් අභිරුචි APIs හරහා ඔබේ පවතින පරිසර පද්ධතිය සමඟ දෝෂ රහිතව ඒකාබද්ධ වෙමින් මධ්‍යගත මධ්‍යස්ථානයක් ලෙස ක්‍රියා කරයි.</p>`
  },
  {
    id: "112",
    slug: "nextjs-vs-react-choosing-right-tech-stack",
    titleEn: "Next.js vs React: Choosing the Right Tech Stack for Scalable Web Apps",
    titleSi: "Next.js vs React: පරිමාණය කළ හැකි වෙබ් යෙදුම් සඳහා නිවැරදි තාක්ෂණය තෝරා ගැනීම",
    categoryEn: "Web Development",
    categorySi: "වෙබ් සංවර්ධනය",
    image: "/images/blog/nextjs-vs-react.png",
    excerptEn: "Deciding between Next.js and React? Explore the key differences, performance benefits, and SEO advantages to make an informed decision for your next project.",
    excerptSi: "Next.js සහ React අතර තීරණය කරනවාද? ඔබේ මීළඟ ව්‍යාපෘතිය සඳහා දැනුවත් තීරණයක් ගැනීමට ප්‍රධාන වෙනස්කම් ගවේෂණය කරන්න.",
    contentEn: `<h2>Understanding the Core Difference</h2>
<p>React is a powerful JavaScript library for building user interfaces, primarily focused on rendering components in the browser (Client-Side Rendering). Next.js, on the other hand, is a full-fledged framework built on top of React that provides additional features like Server-Side Rendering (SSR), Static Site Generation (SSG), and routing out of the box.</p>
<h2>When to Choose React</h2>
<p>React is an excellent choice for highly interactive applications where SEO is not a primary concern, such as internal dashboards, admin panels, and Single Page Applications (SPAs) behind a login screen. It gives developers complete flexibility over the architecture, routing (using react-router), and state management.</p>
<h2>When to Choose Next.js</h2>
<p>For modern web applications where performance, SEO, and user experience are critical, Next.js is the superior choice. <strong>Mickiesoft</strong> heavily utilizes Next.js for public-facing platforms.</p>
<h3>1. SEO Optimization</h3>
<p>Because Next.js pre-renders pages on the server, search engine crawlers can easily read the HTML content, drastically improving your application's search engine rankings compared to a standard React SPA.</p>
<h3>2. Superior Performance</h3>
<p>Features like automatic code splitting, optimized image loading, and SSG ensure that users experience blazing-fast page loads. This is crucial for retaining users and improving conversion rates.</p>
<h3>3. Built-in API Routes</h3>
<p>Next.js allows you to build full-stack applications by providing built-in API routes. You can write your backend endpoints in the same project as your frontend, streamlining development.</p>
<h2>The Verdict</h2>
<p>If you're building a public-facing product—whether it's an e-commerce site, a corporate website, or a SaaS marketing page—Next.js is the recommended path. At <strong>Mickiesoft</strong>, we help businesses architect robust Next.js applications that scale effortlessly.</p>`,
    contentSi: `<h2>මූලික වෙනස අවබෝධ කර ගැනීම</h2>
<p>React යනු පරිශීලක අතුරුමුහුණත් ගොඩනැගීම සඳහා ප්‍රබල JavaScript පුස්තකාලයකි. අනෙක් අතට, Next.js යනු Server-Side Rendering (SSR) සහ Static Site Generation (SSG) වැනි අමතර විශේෂාංග සපයන React මත ගොඩනගා ඇති සම්පූර්ණ රාමුවකි.</p>
<h2>React තෝරාගත යුත්තේ කවදාද</h2>
<p>අභ්‍යන්තර උපකරණ පුවරු සහ Single Page Applications (SPAs) වැනි SEO ප්‍රධාන සැලකිල්ලක් නොවන ඉහළ අන්තර්ක්‍රියාකාරී යෙදුම් සඳහා React විශිෂ්ට තේරීමකි.</p>
<h2>Next.js තෝරාගත යුත්තේ කවදාද</h2>
<p>කාර්ය සාධනය, SEO සහ පරිශීලක අත්දැකීම් තීරණාත්මක වන නවීන වෙබ් යෙදුම් සඳහා, Next.js යනු ඉහළම තේරීමයි.</p>
<h3>1. SEO ප්‍රශස්තකරණය</h3>
<p>Next.js සේවාදායකයේ පිටු පූර්ව-ප්‍රදර්ශනය කරන බැවින්, සෙවුම් යන්ත්‍රවලට HTML අන්තර්ගතය පහසුවෙන් කියවිය හැක.</p>
<h3>2. උසස් කාර්ය සාධනය</h3>
<p>ස්වයංක්‍රීය කේත බෙදීම සහ ප්‍රශස්ත රූප පැටවීම වැනි විශේෂාංග මඟින් පරිශීලකයින්ට වේගවත් පිටු පැටවීමක් අත්විඳීම සහතික කරයි.</p>
<h2>නිගමනය</h2>
<p>ඔබ මහජනතාව මුහුණ දෙන නිෂ්පාදනයක් ගොඩනඟන්නේ නම්, Next.js යනු නිර්දේශිත මාර්ගයයි. <strong>Mickiesoft</strong> හි අපි ව්‍යාපාරවලට වෙහෙසකින් තොරව පරිමාණය වන ශක්තිමත් Next.js යෙදුම් සැලසුම් කිරීමට උදවු කරමු.</p>`
  },
  {
    id: "113",
    slug: "native-vs-cross-platform-app-development-for-business",
    titleEn: "Native vs Cross-Platform App Development: Which One Fits Your Business?",
    titleSi: "දේශීය එදිරිව හරස්-වේදිකා යෙදුම් සංවර්ධනය: ඔබේ ව්‍යාපාරයට ගැලපෙන්නේ කුමක්ද?",
    categoryEn: "Mobile App Development",
    categorySi: "ජංගම යෙදුම් සංවර්ධනය",
    image: "/images/blog/native-vs-cross-platform.png",
    excerptEn: "Struggling to choose between Native and Cross-Platform mobile app development? We break down the pros and cons of Swift, Kotlin, Flutter, and React Native.",
    excerptSi: "දේශීය සහ හරස් වේදිකා ජංගම යෙදුම් සංවර්ධනය අතර තෝරා ගැනීමට අපහසුද? අපි මෙහි වාසි සහ අවාසි විග්‍රහ කරමු.",
    contentEn: `<h2>The Mobile Dilemma</h2>
<p>When planning a mobile application, one of the most critical technical decisions is choosing between Native development (Swift for iOS, Kotlin for Android) and Cross-Platform development (Flutter, React Native). The right choice depends on your budget, timeline, and the specific needs of your application.</p>
<h2>Native App Development: Uncompromising Performance</h2>
<p>Native apps are built specifically for one platform using its native programming languages. </p>
<ul>
<li><strong>Pros:</strong> Unmatched performance, seamless access to device hardware (Bluetooth, Camera, AR/VR), and the best possible UI/UX that aligns perfectly with OS guidelines.</li>
<li><strong>Cons:</strong> Higher development costs and longer time-to-market since you need two separate teams to build and maintain the iOS and Android codebases.</li>
</ul>
<p><strong>Best For:</strong> High-performance games, AR/VR applications, or apps that heavily rely on complex device hardware integrations.</p>
<h2>Cross-Platform Development: Efficiency and Speed</h2>
<p>Frameworks like Flutter and React Native allow developers to write code once and deploy it on both iOS and Android.</p>
<ul>
<li><strong>Pros:</strong> Faster time-to-market, significantly lower development and maintenance costs, and consistency across platforms. Technologies like Flutter now offer near-native performance.</li>
<li><strong>Cons:</strong> May struggle with highly complex animations or cutting-edge hardware features immediately upon their release by Apple or Google.</li>
</ul>
<p><strong>Best For:</strong> E-commerce apps, social media platforms, business applications, and minimum viable products (MVPs).</p>
<h2>How Mickiesoft Can Help</h2>
<p>At <strong>Mickiesoft</strong>, we evaluate your business goals to recommend the optimal tech stack. Whether you need a robust Native iOS app or a cost-effective Flutter cross-platform solution, our expert mobile engineering team is ready to deliver.</p>`,
    contentSi: `<h2>ජංගම උභතෝකෝටිකය</h2>
<p>ජංගම යෙදුමක් සැලසුම් කිරීමේදී, වඩාත් තීරණාත්මක තාක්ෂණික තීරණවලින් එකක් වන්නේ දේශීය සංවර්ධනය සහ හරස්-වේදිකා සංවර්ධනය අතර තේරීමයි.</p>
<h2>දේශීය යෙදුම් සංවර්ධනය (Native)</h2>
<p>දේශීය යෙදුම් විශේෂයෙන් එක් වේදිකාවක් සඳහා ගොඩනගා ඇත.</p>
<ul>
<li><strong>වාසි:</strong> අසමසම කාර්ය සාධනය සහ උපාංග දෘඩාංග වෙත බාධාවකින් තොරව ප්‍රවේශ වීම.</li>
<li><strong>අවාසි:</strong> ඉහළ සංවර්ධන පිරිවැය සහ දිගු කාලයක් ගතවීම.</li>
</ul>
<h2>හරස්-වේදිකා සංවර්ධනය (Cross-Platform)</h2>
<p>Flutter සහ React Native වැනි රාමු මඟින් කේතය එක් වරක් ලියා එය iOS සහ Android දෙකටම යෙදවීමට ඉඩ සලසයි.</p>
<ul>
<li><strong>වාසි:</strong> වේගවත් වෙළඳපල කාලය සහ සැලකිය යුතු ලෙස අඩු සංවර්ධන පිරිවැය.</li>
<li><strong>අවාසි:</strong> ඉතා සංකීර්ණ සජීවිකරණ සමඟ අරගල කළ හැකිය.</li>
</ul>
<h2>Mickiesoft හට උදව් කළ හැකි ආකාරය</h2>
<p>Mickiesoft හිදී, ප්‍රශස්ත තාක්ෂණික තොගය නිර්දේශ කිරීම සඳහා අපි ඔබේ ව්‍යාපාර ඉලක්ක ඇගයීමට ලක් කරමු.</p>`
  },
  {
    id: "114",
    slug: "how-custom-mobile-app-boosts-customer-loyalty",
    titleEn: "How a Custom Mobile App Can Boost Customer Loyalty and Engagement",
    titleSi: "අභිරුචි ජංගම යෙදුමකට පාරිභෝගික පක්ෂපාතිත්වය සහ නියැලීම ඉහළ නැංවිය හැක්කේ කෙසේද",
    categoryEn: "Mobile App Development",
    categorySi: "ජංගම යෙදුම් සංවර්ධනය",
    image: "/images/blog/mobile-customer-loyalty.png",
    excerptEn: "In the digital age, a mobile app is a direct channel to your customers. Learn how custom mobile applications drive engagement and long-term brand loyalty.",
    excerptSi: "ඩිජිටල් යුගයේ ජංගම යෙදුමක් යනු ඔබේ ගනුදෙනුකරුවන්ට සෘජු නාලිකාවකි. අභිරුචි යෙදුම් වෙළඳ නාම පක්ෂපාතිත්වය ගෙන යන්නේ කෙසේදැයි ඉගෙන ගන්න.",
    contentEn: `<h2>The Power of a Direct Connection</h2>
<p>A website is essential for discovery, but a mobile app is the ultimate tool for retention. When a customer installs your app, you secure prime real estate on their most personal device. This direct connection offers unparalleled opportunities to engage and nurture long-term loyalty.</p>
<h2>1. Personalized User Experiences</h2>
<p>Custom mobile apps excel at leveraging user data to provide highly personalized experiences. By analyzing user behavior, location, and preferences, your app can offer tailored product recommendations and relevant content. Personalization makes customers feel valued, significantly increasing the likelihood of repeat business.</p>
<h2>2. Push Notifications That Convert</h2>
<p>Push notifications boast open rates far superior to email marketing. When used thoughtfully, they allow you to instantly notify customers about flash sales, abandoned carts, or new features. A well-timed, relevant notification can drive immediate traffic and revenue.</p>
<h2>3. Seamless Loyalty Programs</h2>
<p>Ditch the physical punch cards. Integrating a digital rewards program directly into your mobile app makes it effortless for customers to track points and redeem rewards. Gamifying the experience with tiers and badges further incentivizes continued engagement.</p>
<h2>4. Superior Customer Support</h2>
<p>Integrating in-app chat or AI-driven customer support bots allows users to resolve issues without leaving the app. Fast, accessible support is a major driver of brand loyalty.</p>
<h2>Build Your Digital Asset</h2>
<p>Partnering with a reliable development firm like <strong>Mickiesoft</strong> ensures your app is beautifully designed, highly functional, and optimized for engagement. Ready to transform your customer experience? Let's build your custom mobile app.</p>`,
    contentSi: `<h2>සෘජු සම්බන්ධතාවයේ බලය</h2>
<p>වෙබ් අඩවියක් සොයාගැනීම් සඳහා අත්‍යවශ්‍ය වේ, නමුත් ජංගම යෙදුමක් යනු රඳවා තබා ගැනීම සඳහා වූ අවසාන මෙවලමයි. පාරිභෝගිකයෙකු ඔබේ යෙදුම ස්ථාපනය කරන විට, ඔබ ඔවුන්ගේ පුද්ගලික උපාංගයේ ප්‍රධාන ස්ථානයක් ලබා ගනී.</p>
<h2>1. පුද්ගලීකරණය කළ පරිශීලක අත්දැකීම්</h2>
<p>ඉතා පුද්ගලීකරණය කළ අත්දැකීම් සැපයීම සඳහා පරිශීලක දත්ත භාවිතා කිරීමට අභිරුචි ජංගම යෙදුම් විශිෂ්ටයි. මෙය පාරිභෝගිකයින්ට වටිනාකමක් දැනීමට සලස්වයි.</p>
<h2>2. Push Notifications</h2>
<p>Push දැනුම්දීම් විද්‍යුත් තැපැල් අලෙවිකරණයට වඩා ඉහළ විවෘත අනුපාතයක් ඇත. නිවැරදි වේලාවට යවන අදාළ දැනුම්දීමකට ක්ෂණික ගමනාගමනය සහ ආදායම ගෙන යා හැක.</p>
<h2>3. බාධාවකින් තොරව පක්ෂපාතිත්ව වැඩසටහන්</h2>
<p>ඩිජිටල් ත්‍යාග වැඩසටහනක් ඔබේ ජංගම යෙදුමට කෙලින්ම ඒකාබද්ධ කිරීම පාරිභෝගිකයින්ට ලකුණු ලුහුබැඳීම පහසු කරයි.</p>
<h2>ඔබේ ඩිජිටල් වත්කම ගොඩනඟන්න</h2>
<p><strong>Mickiesoft</strong> වැනි විශ්වාසදායක සංවර්ධන ආයතනයක් සමඟ හවුල් වීමෙන් ඔබේ යෙදුම අලංකාර ලෙස නිර්මාණය කර ඇති බව සහතික කරයි.</p>`
  },
  {
    id: "115",
    slug: "what-is-custom-erp-software-and-automation",
    titleEn: "What is Custom ERP Software and How Can It Automate Your Business Operations?",
    titleSi: "අභිරුචි ERP මෘදුකාංග යනු කුමක්ද සහ එයට ඔබේ ව්‍යාපාර මෙහෙයුම් ස්වයංක්‍රීය කළ හැක්කේ කෙසේද?",
    categoryEn: "ERP Development",
    categorySi: "ERP සංවර්ධනය",
    image: "/images/blog/custom-erp-software.png",
    excerptEn: "Discover the transformative power of custom Enterprise Resource Planning (ERP) software. Learn how tailored automation eliminates inefficiencies and connects your entire organization.",
    excerptSi: "අභිරුචි ERP මෘදුකාංගයේ පරිවර්තනීය බලය සොයා ගන්න. අභිරුචි ස්වයංක්‍රීයකරණය ඔබේ සමස්ත සංවිධානය සම්බන්ධ කරන්නේ කෙසේදැයි ඉගෙන ගන්න.",
    contentEn: `<h2>Understanding ERP Systems</h2>
<p>Enterprise Resource Planning (ERP) software is the central nervous system of a business. It integrates various functions—such as accounting, human resources, inventory management, and CRM—into a unified system. While legacy platforms exist, <strong>custom ERP software</strong> is uniquely built from the ground up to match an organization's specific operational workflows.</p>
<h2>The Need for Customization</h2>
<p>Off-the-shelf ERPs often come with bloatware—features you pay for but never use—while lacking the specific nuances your business requires. Custom ERP development ensures you get exactly what you need. It eliminates manual data entry across disparate systems, drastically reducing human error and administrative overhead.</p>
<h2>Key Automation Benefits</h2>
<h3>1. Unified Data Flow</h3>
<p>With a custom ERP, when a sale is made, inventory is automatically updated, accounting records the transaction, and the warehouse gets a shipping notification. Data silos are completely dismantled.</p>
<h3>2. Real-Time Reporting and Analytics</h3>
<p>Stop waiting for end-of-month reports. Custom dashboards provide real-time visibility into KPIs, cash flow, and supply chain bottlenecks, empowering leadership to make data-driven decisions instantly.</p>
<h3>3. Streamlined HR and Payroll</h3>
<p>Automate leave tracking, attendance, and complex payroll calculations based on your specific local regulations and company policies.</p>
<h2>Partnering with Mickiesoft</h2>
<p>Building an ERP is a complex undertaking that requires deep technical and business expertise. <strong>Mickiesoft</strong> specializes in architecting and deploying scalable custom ERP solutions that modernize legacy operations and position your enterprise for unparalleled growth.</p>`,
    contentSi: `<h2>ERP පද්ධති අවබෝධ කර ගැනීම</h2>
<p>Enterprise Resource Planning (ERP) මෘදුකාංග යනු ව්‍යාපාරයක මධ්‍යම ස්නායු පද්ධතියයි. එය ගිණුම්කරණය, මානව සම්පත්, ඉන්වෙන්ටරි කළමනාකරණය වැනි විවිධ කාර්යයන් ඒකාබද්ධ පද්ධතියකට සම්බන්ධ කරයි.</p>
<h2>අභිරුචිකරණයේ අවශ්‍යතාවය</h2>
<p>සාමාන්‍ය ERPs බොහෝ විට ඔබට අවශ්‍ය නොවන විශේෂාංග සමඟ පැමිණේ. අභිරුචි ERP සංවර්ධනය මඟින් ඔබට හරියටම අවශ්‍ය දේ ලබා ගැනීම සහතික කරයි.</p>
<h2>ප්‍රධාන ස්වයංක්‍රීයකරණ ප්‍රතිලාභ</h2>
<h3>1. ඒකාබද්ධ දත්ත ප්‍රවාහය</h3>
<p>අභිරුචි ERP එකක් සමඟ, විකුණුමක් සිදු කළ විට, ඉන්වෙන්ටරි ස්වයංක්‍රීයව යාවත්කාලීන වන අතර, ගිණුම්කරණය ගනුදෙනුව වාර්තා කරයි.</p>
<h3>2. තත්‍ය කාලීන වාර්තාකරණය</h3>
<p>අභිරුචි උපකරණ පුවරු මඟින් දත්ත මත පදනම් වූ තීරණ ක්ෂණිකව ගැනීමට නායකත්වයට බලය ලබා දේ.</p>
<h2>Mickiesoft සමඟ හවුල් වීම</h2>
<p>ERP එකක් ගොඩනැගීම යනු ගැඹුරු තාක්ෂණික සහ ව්‍යාපාරික විශේෂඥ දැනුමක් අවශ්‍ය වන සංකීර්ණ කාර්යයකි. <strong>Mickiesoft</strong> පරිමාණය කළ හැකි අභිරුචි ERP විසඳුම් නිර්මාණය කිරීම සඳහා විශේෂීකරණය කරයි.</p>`
  },
  {
    id: "116",
    slug: "erp-systems-for-smes-worth-investment",
    titleEn: "ERP Systems for Small and Medium Enterprises (SMEs): Is It Worth the Investment?",
    titleSi: "කුඩා හා මධ්‍යම පරිමාණ ව්‍යවසාය (SME) සඳහා ERP පද්ධති: ආයෝජනය වටිනවාද?",
    categoryEn: "ERP Development",
    categorySi: "ERP සංවර්ධනය",
    image: "/images/blog/erp-for-sme.png",
    excerptEn: "Many SMEs believe ERPs are only for massive corporations. We explore why investing in a custom ERP solution is critical for the growth and survival of mid-sized businesses.",
    excerptSi: "බොහෝ SMEs විශ්වාස කරන්නේ ERPs ඇත්තේ දැවැන්ත සමාගම් සඳහා පමණක් බවයි. මධ්‍යම ප්‍රමාණයේ ව්‍යාපාර සඳහා ERP විසඳුමක ආයෝජනය කිරීම වැදගත් වන්නේ මන්දැයි අපි ගවේෂණය කරමු.",
    contentEn: `<h2>Breaking the Enterprise Myth</h2>
<p>There is a common misconception that Enterprise Resource Planning (ERP) systems are exclusive to Fortune 500 companies with massive budgets. However, in today's competitive landscape, Small and Medium Enterprises (SMEs) face the same operational complexities—just on a different scale.</p>
<h2>The Chaos of Spreadsheets</h2>
<p>Many SMEs operate using a patchwork of standalone software and Excel spreadsheets. This leads to duplicate data entry, lost information, and a lack of clear visibility into the business's overall health. When growth accelerates, this fragile system collapses.</p>
<h2>Why the Investment Pays Off</h2>
<h3>1. Scalability from Day One</h3>
<p>A custom ERP built for your SME grows alongside you. Instead of migrating systems every few years as you expand, a modular custom ERP allows you to add features (like an advanced CRM or supply chain module) only when you need them.</p>
<h3>2. Increased Valuation</h3>
<p>If you plan to secure funding or eventually sell the business, having streamlined, auditable, and automated processes managed by an ERP significantly increases your company's valuation and attractiveness to investors.</p>
<h3>3. Cost Reduction</h3>
<p>While the initial investment in a custom ERP development might seem daunting, the long-term ROI is massive. Automation reduces the need for heavy administrative hiring, prevents costly inventory errors, and optimizes resource allocation.</p>
<h2>Conclusion</h2>
<p>An ERP system is not just a software expense; it's a strategic asset. Contact the ERP development experts at <strong>Mickiesoft</strong> to discover how we can design an affordable, high-impact system for your SME.</p>`,
    contentSi: `<h2>ව්‍යවසාය මිථ්‍යාව බිඳ දැමීම</h2>
<p>Enterprise Resource Planning (ERP) පද්ධති දැවැන්ත අයවැය සහිත විශාල සමාගම්වලට පමණක් සීමා වී ඇති බවට පොදු දුර්මතයක් පවතී. කෙසේ වෙතත්, අද තරඟකාරී භූ දර්ශනය තුළ කුඩා හා මධ්‍යම පරිමාණ ව්‍යවසායකයින් (SME) ද එම මෙහෙයුම් සංකීර්ණතාවලට මුහුණ දෙයි.</p>
<h2>පැතුරුම්පත් වල අවුල් ජාලය</h2>
<p>බොහෝ SMEs Excel පැතුරුම්පත් භාවිතයෙන් ක්‍රියාත්මක වේ. මෙය අනුපිටපත් දත්ත ඇතුළත් කිරීමට සහ ව්‍යාපාරයේ සමස්ත සෞඛ්‍යය පිළිබඳ පැහැදිලි දෘශ්‍යතාවක් නොමැතිකමට හේතු වේ.</p>
<h2>ආයෝජනය ගෙවන්නේ ඇයි?</h2>
<h3>1. පළමු දින සිට පරිමාණ හැකියාව</h3>
<p>ඔබේ SME සඳහා ඉදිකරන ලද අභිරුචි ERP ඔබ සමඟ වර්ධනය වේ. ඔබ පුළුල් වන විට සෑම වසර කිහිපයකට වරක් පද්ධති සංක්‍රමණය කරනවා වෙනුවට, නව විශේෂාංග එකතු කිරීමට ඔබට ඉඩ සලසයි.</p>
<h3>2. පිරිවැය අඩු කිරීම</h3>
<p>අභිරුචි ERP සංවර්ධනය සඳහා ආරම්භක ආයෝජනය බියජනක ලෙස පෙනෙන්නට තිබුණත්, දිගු කාලීන ROI අතිශයින් විශාලය.</p>
<h2>නිගමනය</h2>
<p>ERP පද්ධතියක් යනු මෘදුකාංග වියදමක් පමණක් නොවේ; එය උපායමාර්ගික වත්කමකි. <strong>Mickiesoft</strong> හි ERP සංවර්ධන ප්‍රවීණයන් අමතන්න.</p>`
  },
  {
    id: "117",
    slug: "role-of-modern-ui-ux-design-in-conversion-rates",
    titleEn: "The Role of Modern UI/UX Design in Driving Higher Conversion Rates",
    titleSi: "ඉහළ පරිවර්තන අනුපාතයන් ගෙන යාමේදී නවීන UI/UX නිර්මාණයේ කාර්යභාරය",
    categoryEn: "UI/UX & Design",
    categorySi: "UI/UX සහ නිර්මාණය",
    image: "/images/blog/modern-ui-ux-design.png",
    excerptEn: "Great design isn't just about aesthetics; it's about revenue. Learn how strategic UI/UX principles minimize friction and convert casual visitors into loyal customers.",
    excerptSi: "විශිෂ්ට නිර්මාණයක් යනු සෞන්දර්යය පමණක් නොවේ; එය ආදායම ගැනයි. උපායමාර්ගික UI/UX මූලධර්ම පරිවර්තන අනුපාත ඉහළ නංවන්නේ කෙසේදැයි ඉගෙන ගන්න.",
    contentEn: `<h2>Design is a Business Strategy</h2>
<p>In today's hyper-competitive digital market, users judge the credibility of your business within milliseconds of loading your app or website. Modern UI (User Interface) and UX (User Experience) design are no longer just about making things look "pretty"—they are direct drivers of conversion rates and customer retention.</p>
<h2>Minimizing Friction</h2>
<p>The primary goal of excellent UX design is to reduce cognitive load and friction. Every extra click, confusing navigation menu, or slow animation gives a potential customer a reason to abandon their cart or close the tab. Streamlining user flows ensures a seamless journey from the landing page to the checkout screen.</p>
<h2>Trust and Credibility</h2>
<p>Aesthetically pleasing, modern interfaces build instant trust. Elements such as consistent typography, strategic use of whitespace, and accessible color palettes signal professionalism and security. Users are far more likely to enter payment information into an application that feels premium and well-crafted.</p>
<h2>Mobile-First Design</h2>
<p>With the majority of web traffic originating from smartphones, responsive and mobile-first design is non-negotiable. Buttons must be easily clickable with a thumb, text must be readable without zooming, and loading times must be optimized for cellular networks.</p>
<h2>The Mickiesoft Approach</h2>
<p>At <strong>Mickiesoft</strong>, our design team bridges the gap between art and psychology. We conduct user research and wireframing to ensure that every digital product we build not only looks stunning but is mathematically optimized to convert visitors into customers.</p>`,
    contentSi: `<h2>නිර්මාණය යනු ව්‍යාපාරික උපාය මාර්ගයකි</h2>
<p>අද අධි තරඟකාරී ඩිජිටල් වෙළඳපොල තුළ, පරිශීලකයින් ඔබගේ යෙදුම හෝ වෙබ් අඩවිය පූරණය වී මිලි තත්පර කිහිපයක් ඇතුළත ඔබේ ව්‍යාපාරයේ විශ්වසනීයත්වය විනිශ්චය කරයි. නවීන UI සහ UX නිර්මාණය අලංකාරය පමණක් නොව, එය පරිවර්තන අනුපාතයන්ගේ සෘජු ධාවකයකි.</p>
<h2>ඝර්ෂණය අවම කිරීම</h2>
<p>විශිෂ්ට UX නිර්මාණයේ මූලික අරමුණ වන්නේ සංජානන බර අඩු කිරීමයි. සෑම අමතර ක්ලික් කිරීමක් හෝ ව්‍යාකූල සංචාලන මෙනුවක් ගනුදෙනුකරුවෙකුට පිටවීමට හේතුවක් සපයයි.</p>
<h2>විශ්වාසය සහ විශ්වසනීයත්වය</h2>
<p>සෞන්දර්යාත්මකව ප්‍රසන්න, නවීන අතුරුමුහුණත් ක්ෂණික විශ්වාසය ගොඩනඟයි. පරිශීලකයින් වාරික සහ මනාව සකසන ලද යෙදුමකට ගෙවීම් තොරතුරු ඇතුළත් කිරීමට වැඩි ඉඩක් ඇත.</p>
<h2>ජංගම-පළමු නිර්මාණය</h2>
<p>වෙබ් ගමනාගමනයෙන් බහුතරයක් ස්මාර්ට්ෆෝන් වලින් ආරම්භ වන බැවින්, ජංගම-පළමු නිර්මාණය සාකච්ඡා කළ නොහැක.</p>
<h2>Mickiesoft ප්‍රවේශය</h2>
<p><strong>Mickiesoft</strong> හිදී, අපගේ නිර්මාණ කණ්ඩායම කලාව සහ මනෝවිද්‍යාව අතර පරතරය පියවයි. අමුත්තන් ගනුදෙනුකරුවන් බවට පත් කිරීම සඳහා අපි සෑම ඩිජිටල් නිෂ්පාදනයක්ම ප්‍රශස්ත කරමු.</p>`
  },
  {
    id: "118",
    slug: "cloud-migration-strategies-secure-enterprise-applications",
    titleEn: "Cloud Migration Strategies: How to Securely Move Your Enterprise Applications",
    titleSi: "වලාකුළු සංක්‍රමණ උපාය මාර්ග: ඔබේ ව්‍යවසාය යෙදුම් ආරක්ෂිතව ගෙන යන්නේ කෙසේද",
    categoryEn: "Cloud & Security",
    categorySi: "වලාකුළු සහ ආරක්ෂාව",
    image: "/images/blog/cloud-migration.png",
    excerptEn: "Moving from on-premise servers to the cloud is complex. Learn the best strategies (Rehosting, Refactoring) to ensure a secure, zero-downtime migration.",
    excerptSi: "ඔන්-ප්‍රේමිස් සේවාදායකවලින් වලාකුළට ගමන් කිරීම සංකීර්ණ වේ. ආරක්ෂිත සහ අක්‍රීය කාලයක් නොමැති සංක්‍රමණයක් සහතික කිරීම සඳහා හොඳම උපාය මාර්ග ඉගෙන ගන්න.",
    contentEn: `<h2>The Imperative for Cloud Computing</h2>
<p>In 2026, maintaining legacy on-premise servers is an expensive security liability. Cloud migration—moving digital business operations into the cloud—provides enterprises with unmatched scalability, disaster recovery capabilities, and remote accessibility.</p>
<h2>Choosing the Right Migration Strategy</h2>
<p>Not all applications should be moved in the same way. The 6 R's of cloud migration provide a framework:</p>
<ul>
<li><strong>Rehosting (Lift and Shift):</strong> The fastest approach. Moving your exact current infrastructure onto cloud instances (e.g., AWS EC2) without modifying the code.</li>
<li><strong>Refactoring (Re-architecting):</strong> Re-imagining how the application is architected by utilizing cloud-native features like serverless computing, auto-scaling groups, and managed databases to maximize long-term ROI.</li>
<li><strong>Replatforming:</strong> A middle ground where you make a few cloud optimizations to achieve tangible benefits without changing the core architecture.</li>
</ul>
<h2>Security First</h2>
<p>Security is the biggest concern during migration. It requires strict Identity and Access Management (IAM), data encryption in transit and at rest, and robust firewall configurations. Partnering with a skilled DevOps team is crucial to avoid misconfigurations that lead to data leaks.</p>
<h2>Let Mickiesoft Guide Your Journey</h2>
<p>Cloud migration shouldn't cause business disruption. <strong>Mickiesoft's</strong> cloud engineering experts architect secure, well-planned migrations to AWS, Azure, and Google Cloud, ensuring zero downtime and modernized infrastructure.</p>`,
    contentSi: `<h2>වලාකුළු පරිගණකයේ අත්‍යවශ්‍යතාව</h2>
<p>2026 දී, පැරණි සේවාදායකයන් පවත්වාගෙන යාම මිල අධික ආරක්ෂක වගකීමකි. වලාකුළු සංක්‍රමණය මඟින් ව්‍යවසායන්ට අසමසම පරිමාණ හැකියාව සහ ආපදා ප්‍රතිසාධන හැකියාවන් සපයයි.</p>
<h2>නිවැරදි සංක්‍රමණ උපාය මාර්ගය තෝරා ගැනීම</h2>
<p>සියලුම යෙදුම් එකම ආකාරයකින් ගෙන නොයා යුතුය:</p>
<ul>
<li><strong>Rehosting:</strong> වේගවත්ම ප්‍රවේශය. කේතය වෙනස් නොකර ඔබේ වත්මන් යටිතල පහසුකම් වලාකුළු වෙත ගෙන යාම.</li>
<li><strong>Refactoring:</strong> දිගුකාලීන ROI උපරිම කිරීම සඳහා සේවාදායක රහිත පරිගණකකරණය වැනි වලාකුළු-දේශීය විශේෂාංග භාවිතා කිරීම.</li>
</ul>
<h2>පළමුව ආරක්ෂාව</h2>
<p>සංක්‍රමණයේදී ඇති ලොකුම සැලකිල්ල ආරක්ෂාවයි. දත්ත කාන්දුවීම් වලට තුඩු දෙන වැරදි වින්‍යාසයන් වළක්වා ගැනීම සඳහා දක්ෂ DevOps කණ්ඩායමක් සමඟ හවුල් වීම ඉතා වැදගත් වේ.</p>
<h2>Mickiesoft හට මඟ පෙන්වීමට ඉඩ දෙන්න</h2>
<p>වලාකුළු සංක්‍රමණය ව්‍යාපාරයට බාධාවක් නොවිය යුතුය. <strong>Mickiesoft</strong> හි විශේෂඥයින් AWS, Azure, සහ Google Cloud වෙත ආරක්ෂිත සහ මනාව සැලසුම් කළ සංක්‍රමණයක් සහතික කරයි.</p>`
  },
  {
    id: "119",
    slug: "integrating-ai-into-modern-web-mobile-apps",
    titleEn: "Integrating AI into Modern Web and Mobile Apps: Practical Use Cases",
    titleSi: "නවීන වෙබ් සහ ජංගම යෙදුම් වෙත AI ඒකාබද්ධ කිරීම: ප්‍රායෝගික භාවිතයන්",
    categoryEn: "Tech Trends",
    categorySi: "තාක්ෂණික ප්‍රවණතා",
    image: "/images/blog/ai-integration.png",
    excerptEn: "Artificial Intelligence is no longer sci-fi. Explore practical ways to integrate AI features like LLMs and Machine Learning into your custom software to outpace competitors.",
    excerptSi: "කෘතිම බුද්ධිය (AI) තවදුරටත් විද්‍යා ප්‍රබන්ධයක් නොවේ. තරඟකරුවන් අභිබවා යාමට ඔබේ අභිරුචි මෘදුකාංගයට AI විශේෂාංග ඒකාබද්ධ කිරීමට ප්‍රායෝගික ක්‍රම ගවේෂණය කරන්න.",
    contentEn: `<h2>AI is the New Standard</h2>
<p>Adding AI to a software application is no longer just a marketing gimmick; it's a fundamental requirement to stay competitive. In 2026, user expectations have shifted—they expect software to be predictive, assistive, and deeply intelligent.</p>
<h2>Practical Use Cases for Businesses</h2>
<h3>1. Intelligent Customer Support Agents</h3>
<p>Integrating Large Language Models (LLMs) into your web and mobile apps allows you to deploy chatbots that actually understand context. Instead of frustrating menu trees, AI agents can read your company documentation and provide accurate, human-like resolutions instantly 24/7.</p>
<h3>2. Predictive Analytics & Personalization</h3>
<p>Machine learning algorithms can analyze user behavior in e-commerce or SaaS platforms to predict what a user needs before they search for it, driving significantly higher engagement and sales through hyper-personalized recommendations.</p>
<h3>3. Automated Content & Data Extraction</h3>
<p>For internal enterprise tools (ERPs, CRMs), AI integrations can automatically parse incoming emails, extract invoice data from PDFs using OCR and NLP, and automatically update databases, eliminating hundreds of hours of manual labor.</p>
<h2>Architecting AI Solutions with Mickiesoft</h2>
<p>Integrating AI securely requires expertise in API management, prompt engineering, and vector databases. <strong>Mickiesoft</strong> engineers leverage modern tools from OpenAI, Anthropic, and custom machine learning pipelines to seamlessly infuse AI into your existing web and mobile architecture.</p>`,
    contentSi: `<h2>AI යනු නව ප්‍රමිතියයි</h2>
<p>මෘදුකාංග යෙදුමකට AI එක් කිරීම තවදුරටත් අලෙවිකරණ උපක්‍රමයක් පමණක් නොවේ; තරඟකාරීව සිටීමට එය මූලික අවශ්‍යතාවයකි.</p>
<h2>ව්‍යාපාර සඳහා ප්‍රායෝගික භාවිතයන්</h2>
<h3>1. බුද්ධිමත් පාරිභෝගික සහාය</h3>
<p>Large Language Models (LLMs) ඔබේ යෙදුම්වලට ඒකාබද්ධ කිරීම මඟින් සන්දර්භය සැබවින්ම තේරුම් ගන්නා චැට්බොට් (chatbots) යෙදවීමට ඔබට ඉඩ සලසයි.</p>
<h3>2. පුරෝකථන විශ්ලේෂණ සහ පුද්ගලීකරණය</h3>
<p>පරිශීලකයා සෙවීමට පෙර ඔවුන්ට අවශ්‍ය කුමක්දැයි අනාවැකි කීමට යන්ත්‍ර ඉගෙනුම් (Machine learning) ඇල්ගොරිතම භාවිත කළ හැක.</p>
<h3>3. ස්වයංක්‍රීය දත්ත නිස්සාරණය</h3>
<p>අභ්‍යන්තර ව්‍යවසාය මෙවලම් සඳහා, AI ඒකාබද්ධ කිරීම්වලට PDF වලින් දත්ත උකහා ගත හැකි අතර ස්වයංක්‍රීයව දත්ත සමුදායන් යාවත්කාලීන කළ හැක.</p>
<h2>Mickiesoft සමඟ AI විසඳුම් නිර්මාණය කිරීම</h2>
<p>AI ආරක්ෂිතව ඒකාබද්ධ කිරීම සඳහා API කළමනාකරණය සහ දෛශික දත්ත සමුදායන් (vector databases) පිළිබඳ විශේෂඥ දැනුමක් අවශ්‍ය වේ. <strong>Mickiesoft</strong> හි ඉංජිනේරුවන් ඔබේ පවතින යෙදුම් වලට AI බාධාවකින් තොරව එක් කරයි.</p>`
  },
  {
    id: "120",
    slug: "offshore-software-development-mickiesoft-scalable-solutions",
    titleEn: "Offshore Software Development: How Mickiesoft Delivers Scalable Solutions",
    titleSi: "බාහිර මෘදුකාංග සංවර්ධනය: Mickiesoft පරිමාණය කළ හැකි විසඳුම් ලබා දෙන්නේ කෙසේද",
    categoryEn: "Business Strategy",
    categorySi: "ව්‍යාපාරික උපාය මාර්ග",
    image: "/images/blog/offshore-software-development.png",
    excerptEn: "Explore the strategic benefits of outsourcing your software development to Sri Lanka. Learn how Mickiesoft’s agile offshore teams deliver top-tier engineering talent and scalable solutions.",
    excerptSi: "ඔබේ මෘදුකාංග සංවර්ධනය ශ්‍රී ලංකාවට බාහිරින් ලබා දීමේ උපායමාර්ගික ප්‍රතිලාභ ගවේෂණය කරන්න.",
    contentEn: `<h2>The Global Engineering Shortage</h2>
<p>For tech leaders in North America, Europe, and Australia, scaling an internal engineering team is severely hindered by high local salaries and a massive talent shortage. Offshore software development has evolved from a simple cost-saving measure into a strategic necessity for accessing elite global talent.</p>
<h2>Why Sri Lanka?</h2>
<p>Sri Lanka has rapidly emerged as a premier destination for offshore IT services. The country boasts a highly educated, English-fluent workforce that possesses deep technical expertise and a strong cultural alignment with Western business practices.</p>
<h2>The Mickiesoft Advantage</h2>
<p>At <strong>Mickiesoft</strong>, we don't just write code; we build dedicated, integrated teams that act as an extension of your own company. Our approach guarantees:</p>
<ul>
<li><strong>Agile Methodologies:</strong> Complete transparency through daily stand-ups, continuous integration, and sprint reviews.</li>
<li><strong>Top-Tier Talent:</strong> We employ rigorous vetting processes to hire only the top percentile of software engineers, specializing in Next.js, React, Node, .NET, and Flutter.</li>
<li><strong>Cost Efficiency:</strong> Significantly reduce your burn rate without compromising on the quality or security of your software architecture.</li>
</ul>
<h2>Scale With Confidence</h2>
<p>Whether you need a custom web application, an enterprise ERP, or a dedicated mobile team, <strong>Mickiesoft</strong> is the partner you can trust to deliver high-quality code and scalable solutions. Ready to accelerate your roadmap? Let's talk.</p>`,
    contentSi: `<h2>ගෝලීය ඉංජිනේරු හිඟය</h2>
<p>උතුරු ඇමරිකාව, යුරෝපය සහ ඕස්ට්‍රේලියාවේ තාක්ෂණික නායකයින් සඳහා, ඉහළ දේශීය වැටුප් සහ දැවැන්ත දක්ෂතා හිඟය හේතුවෙන් අභ්‍යන්තර ඉංජිනේරු කණ්ඩායමක් ගොඩනැගීම දැඩි ලෙස බාධාවට ලක්ව ඇත.</p>
<h2>ශ්‍රී ලංකාව ඇයි?</h2>
<p>ශ්‍රී ලංකාව බාහිර තොරතුරු තාක්ෂණ සේවා සඳහා ප්‍රමුඛ ගමනාන්තයක් ලෙස වේගයෙන් ඉස්මතු වී ඇත. ඉහළ උගත්, ඉංග්‍රීසි චතුර ශ්‍රම බලකායක් මෙරට සතුව ඇත.</p>
<h2>Mickiesoft වාසිය</h2>
<p><strong>Mickiesoft</strong> හිදී, අපි කේතය ලියන්නේ පමණක් නොවේ; අපි ඔබේම සමාගමේ දිගුවක් ලෙස ක්‍රියා කරන කැපවූ කණ්ඩායම් ගොඩනඟමු.</p>
<ul>
<li><strong>Agile ක්‍රමවේද:</strong> දෛනික රැස්වීම් සහ ස්ප්‍රින්ට් සමාලෝචන හරහා සම්පූර්ණ විනිවිදභාවය.</li>
<li><strong>ඉහළම දක්ෂතා:</strong> Next.js, React, Node, .NET, සහ Flutter සඳහා විශේෂිත වූ ඉහළම මෘදුකාංග ඉංජිනේරුවන් පමණක් බඳවා ගැනීමට අපි දැඩි ක්‍රියාවලි භාවිතා කරමු.</li>
<li><strong>පිරිවැය කාර්යක්ෂමතාව:</strong> ඔබේ මෘදුකාංගයේ ගුණාත්මකභාවය අඩාල නොකර ඔබේ පිරිවැය සැලකිය යුතු ලෙස අඩු කරන්න.</li>
</ul>
<h2>විශ්වාසයෙන් යුතුව පරිමාණය කරන්න</h2>
<p>ඔබට අභිරුචි වෙබ් යෙදුමක්, ERP හෝ කැපවූ ජංගම යෙදුම් කණ්ඩායමක් අවශ්‍ය වුවද, උසස් තත්ත්වයේ කේත සහ විසඳුම් ලබා දීමට ඔබට විශ්වාස කළ හැකි සහකරු <strong>Mickiesoft</strong> වේ.</p>`
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
      role: "Senior Software Engineer",
      bio: "Passionate about building fast, scalable software solutions with modern technologies."
    },
    publishedAt: "2026-08-05",
    readTime: 6,
    metaDescription: blog.excerptEn,
    tags: [blog.categoryEn, "Mickiesoft", "Development"],
    relatedSlugs: [],
    content: blog.contentEn,
    cta: {
      title: "Ready to accelerate your project?",
      description: "Contact Mickiesoft today for a free technical consultation.",
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
    tags: [blog.categorySi, "Mickiesoft", "Development"]
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
    role: "Senior Software Engineer"
  },
  publishedAt: "2026-08-05",
  readTime: 6,
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
    role: "Senior Software Engineer"
  },
  publishedAt: "2026-08-05",
  readTime: 6,
  isFeatured: false
}));

enList.unshift(...enNewItems);
siList.unshift(...siNewItems);

fs.writeFileSync(enListPath, JSON.stringify(enList, null, 2));
fs.writeFileSync(siListPath, JSON.stringify(siList, null, 2));

console.log('10 New Blogs generated successfully.');
