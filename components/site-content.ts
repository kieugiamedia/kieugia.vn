import {
  Bot,
  BrainCircuit,
  Cloud,
  Globe,
  LockKeyhole,
  MonitorSmartphone,
  Search,
  Server,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  items: string[];
  highlight?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  slug: string;
  menuLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  featureTitle: string;
  features: FeatureItem[];
  pricingTitle: string;
  pricing: PricingPlan[];
  faq: FaqItem[];
};

export const homepageServices: FeatureItem[] = [
  {
    title: "Domain",
    description: "Đăng ký và bảo vệ tên miền thương hiệu nhanh, rõ ràng chi phí.",
    icon: Globe,
  },
  {
    title: "Hosting",
    description: "Hệ thống hosting hiệu năng cao cho website, landing page và doanh nghiệp.",
    icon: Cloud,
  },
  {
    title: "VPS / Cloud",
    description: "Tài nguyên linh hoạt, mở rộng theo lưu lượng thực tế, tối ưu vận hành.",
    icon: Server,
  },
  {
    title: "Thiết kế Website",
    description: "Website chuyên nghiệp chuẩn UX, tốc độ, chuyển đổi và chuẩn SEO.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Automation",
    description: "Tự động hóa marketing, chăm sóc khách hàng và quy trình bán hàng.",
    icon: Bot,
  },
  {
    title: "SEO System",
    description: "Hệ thống SEO ứng dụng AI giúp tăng lead bền vững và đo lường rõ ràng.",
    icon: Search,
  },
];

export const whyKigi: FeatureItem[] = [
  {
    title: "Tốc độ cao",
    description: "Hạ tầng tối ưu hiệu năng truy cập cho cả website và hệ thống nội bộ.",
    icon: Cloud,
  },
  {
    title: "Bảo mật nhiều lớp",
    description: "SSL, backup định kỳ, firewall và quy trình vận hành chuẩn doanh nghiệp.",
    icon: LockKeyhole,
  },
  {
    title: "Hạ tầng mạnh mẽ",
    description: "Kiến trúc sẵn sàng scale cho tăng trưởng từ startup tới enterprise.",
    icon: Server,
  },
  {
    title: "AI tiên phong",
    description: "Áp dụng AI vào SEO, marketing và sales automation theo mục tiêu thực tế.",
    icon: BrainCircuit,
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ kỹ thuật phản hồi nhanh, đồng hành sát trong các mốc quan trọng.",
    icon: Bot,
  },
];

export const homePricing: PricingPlan[] = [
  {
    name: "Basic",
    price: "399.000đ/tháng",
    description: "Phù hợp startup cần website ổn định để triển khai marketing ban đầu.",
    items: ["Hosting tiêu chuẩn", "SSL miễn phí", "1 website", "Hỗ trợ ticket"],
  },
  {
    name: "Pro",
    price: "899.000đ/tháng",
    description: "Lựa chọn tốt cho doanh nghiệp cần tốc độ cao, uptime tốt và dễ mở rộng.",
    items: [
      "Cloud VPS",
      "NVMe hosting",
      "Giám sát realtime",
      "Ưu tiên hỗ trợ",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "Liên hệ",
    description: "Giải pháp trọn gói cho hệ thống lớn cần SLA, tư vấn kiến trúc và bảo mật.",
    items: ["Server riêng", "Tư vấn kiến trúc", "Hỗ trợ chuyên trách", "SLA doanh nghiệp"],
  },
];

export const homeStats = [
  { value: 10000, suffix: "+", label: "Khách hàng tin dùng" },
  { value: 99.9, suffix: "%", label: "Uptime hạ tầng" },
  { value: 5000, suffix: "+", label: "Website đang vận hành" },
  { value: 24, suffix: "/7", label: "Hỗ trợ kỹ thuật" },
];

export const partnerNames = [
  "Doanh nghiệp địa phương",
  "Startup công nghệ",
  "Agency marketing",
  "Ecommerce",
  "Giáo dục số",
  "Khách sạn - du lịch",
  "Y tế - dịch vụ",
  "SaaS & Fintech",
];

export const blogPosts = [
  {
    slug: "chon-domain-theo-thuong-hieu",
    title: "Cách chọn domain giúp thương hiệu dễ nhớ và tăng trust",
    excerpt: "Checklist ngắn để tránh sai lầm khi đặt domain cho doanh nghiệp.",
    category: "Domain",
    readTime: "6 phút đọc",
  },
  {
    slug: "hosting-vs-vps",
    title: "Khi nào nên chuyển từ Hosting lên VPS/Cloud?",
    excerpt: "5 dấu hiệu cho thấy hệ thống đã tới ngưỡng cần nâng cấp hạ tầng.",
    category: "Cloud",
    readTime: "8 phút đọc",
  },
  {
    slug: "seo-ai-funnel",
    title: "SEO System kết hợp AI để tăng lead chất lượng",
    excerpt: "Khung triển khai SEO + AI + funnel để tăng chuyển đổi bền vững.",
    category: "SEO AI",
    readTime: "7 phút đọc",
  },
  {
    slug: "automation-marketing-sales",
    title: "Automation cho Marketing & Sales: bắt đầu từ đâu?",
    excerpt: "Lộ trình 30 ngày để tự động hóa từ lead tới chăm sóc sau bán.",
    category: "AI Automation",
    readTime: "9 phút đọc",
  },
];

export const servicePages: ServicePageContent[] = [
  {
    slug: "domain",
    menuLabel: "Domain",
    heroTitle: "Domain thương hiệu rõ ràng, dễ nhớ, bảo vệ doanh nghiệp lâu dài",
    heroSubtitle:
      "Tra cứu nhanh, đăng ký chuẩn và tư vấn chiến lược tên miền cho từng ngành.",
    heroBadge: "Domain Management",
    featureTitle: "Domain không chỉ là tên, mà là tài sản số của doanh nghiệp",
    features: [
      {
        title: "Tra cứu realtime",
        description: "Kiểm tra và gợi ý tên miền theo thương hiệu, sản phẩm và thị trường.",
        icon: Globe,
      },
      {
        title: "Bảo mật thông tin chủ sở hữu",
        description: "Ẩn thông tin nhạy cảm và giảm rủi ro spam, giả mạo thương hiệu.",
        icon: LockKeyhole,
      },
      {
        title: "Quản lý tập trung",
        description: "Gia hạn, DNS, record và chuyển hướng trong một dashboard rõ ràng.",
        icon: MonitorSmartphone,
      },
    ],
    pricingTitle: "Bảng giá domain theo nhu cầu vận hành",
    pricing: [
      {
        name: "Basic",
        price: "299.000đ/năm",
        description: "Đăng ký domain quốc tế phổ biến cho website doanh nghiệp.",
        items: [".com / .net", "Quản lý DNS", "Nhắc gia hạn tự động"],
      },
      {
        name: "Pro",
        price: "699.000đ/năm",
        description: "Gói phù hợp doanh nghiệp có nhiều tên miền thương hiệu.",
        items: ["Nhiều domain", "Bảo mật chủ sở hữu", "Ưu tiên hỗ trợ"],
        highlight: true,
      },
      {
        name: "Business",
        price: "Liên hệ",
        description: "Xây chiến lược domain portfolio cho doanh nghiệp tăng trưởng.",
        items: ["Audit domain", "Phòng vệ thương hiệu", "Tư vấn chiến lược"],
      },
    ],
    faq: [
      {
        question: "Bao lâu thì kích hoạt domain?",
        answer: "Phần lớn domain quốc tế được kích hoạt ngay sau khi thanh toán.",
      },
      {
        question: "Có hỗ trợ chuyển domain về KIỀU GIA GROUP không?",
        answer: "Có, đội ngũ kỹ thuật hỗ trợ chuyển và kiểm tra DNS để tránh downtime.",
      },
      {
        question: "Có nhắc gia hạn trước khi hết hạn không?",
        answer: "Có, hệ thống gửi cảnh báo tự động qua email và thông báo dashboard.",
      },
    ],
  },
  {
    slug: "hosting",
    menuLabel: "Hosting",
    heroTitle: "Hosting hiệu năng cao cho website doanh nghiệp cần tốc độ ổn định",
    heroSubtitle:
      "Hạ tầng NVMe, bảo mật nhiều lớp và theo dõi uptime liên tục để tăng chuyển đổi.",
    heroBadge: "Managed Hosting",
    featureTitle: "Tập trung tăng trưởng, để hạ tầng cho KIỀU GIA GROUP lo",
    features: [
      {
        title: "Tối ưu tốc độ",
        description: "Tối ưu cache và tài nguyên để website tải nhanh trên mobile lẫn desktop.",
        icon: Cloud,
      },
      {
        title: "Sao lưu định kỳ",
        description: "Backup tự động và quy trình khôi phục nhanh khi có sự cố vận hành.",
        icon: LockKeyhole,
      },
      {
        title: "Giám sát chủ động",
        description: "Cảnh báo tài nguyên và uptime giúp xử lý rủi ro trước khi ảnh hưởng khách hàng.",
        icon: Server,
      },
    ],
    pricingTitle: "Bảng giá hosting",
    pricing: [
      {
        name: "Basic",
        price: "399.000đ/tháng",
        description: "Website giới thiệu doanh nghiệp và landing page cơ bản.",
        items: ["1 website", "SSL miễn phí", "Backup tuần"],
      },
      {
        name: "Pro",
        price: "699.000đ/tháng",
        description: "Website bán hàng cần tốc độ và ổn định cao hơn.",
        items: ["3 website", "NVMe", "Backup hàng ngày", "Ưu tiên hỗ trợ"],
        highlight: true,
      },
      {
        name: "Business",
        price: "1.490.000đ/tháng",
        description: "Doanh nghiệp cần hiệu năng cao và kiểm soát tài nguyên chặt.",
        items: ["Tài nguyên mở rộng", "WAF", "Giám sát nâng cao"],
      },
    ],
    faq: [
      {
        question: "Có hỗ trợ migrate website cũ?",
        answer: "Có, KIỀU GIA GROUP hỗ trợ migrate miễn phí cho phần lớn website phổ biến.",
      },
      {
        question: "Nếu traffic tăng đột biến thì sao?",
        answer: "Có thể nâng cấp gói nhanh hoặc chuyển sang VPS/Cloud để giữ ổn định.",
      },
      {
        question: "Có hỗ trợ WordPress không?",
        answer: "Có, chúng tôi tối ưu stack cho WordPress và các CMS thông dụng.",
      },
    ],
  },
  {
    slug: "vps-cloud",
    menuLabel: "VPS / Cloud",
    heroTitle: "VPS / Cloud linh hoạt cho hệ thống cần hiệu năng và khả năng scale",
    heroSubtitle:
      "Tài nguyên độc lập, giám sát chủ động và mô hình triển khai phù hợp từng workload.",
    heroBadge: "Cloud Infrastructure",
    featureTitle: "Từ ứng dụng nội bộ đến sản phẩm SaaS, hạ tầng luôn sẵn sàng tăng trưởng",
    features: [
      {
        title: "Scale linh hoạt",
        description: "Nâng CPU, RAM, SSD theo nhu cầu thực tế mà không gián đoạn lớn.",
        icon: Server,
      },
      {
        title: "Bảo mật chuẩn doanh nghiệp",
        description: "Phân tách mạng, firewall nhiều lớp và chính sách truy cập rõ ràng.",
        icon: LockKeyhole,
      },
      {
        title: "Quan sát hệ thống",
        description: "Theo dõi log, tài nguyên và cảnh báo để vận hành chủ động hơn.",
        icon: MonitorSmartphone,
      },
    ],
    pricingTitle: "Bảng giá VPS / Cloud",
    pricing: [
      {
        name: "Basic",
        price: "899.000đ/tháng",
        description: "Ứng dụng nội bộ và website có lưu lượng trung bình.",
        items: ["2 vCPU", "4GB RAM", "80GB SSD"],
      },
      {
        name: "Pro",
        price: "1.790.000đ/tháng",
        description: "Hệ thống bán hàng, CRM hoặc website traffic lớn.",
        items: ["4 vCPU", "8GB RAM", "160GB SSD", "Giám sát realtime"],
        highlight: true,
      },
      {
        name: "Business",
        price: "Liên hệ",
        description: "Mô hình multi-service cần kiến trúc và SLA riêng.",
        items: ["Private network", "HA options", "SLA doanh nghiệp"],
      },
    ],
    faq: [
      {
        question: "Có thể nâng cấp không cần cài lại không?",
        answer: "Có, phần lớn trường hợp nâng cấp tài nguyên có thể thực hiện nhanh.",
      },
      {
        question: "Có hỗ trợ cài đặt bảo mật ban đầu?",
        answer: "Có, đội kỹ thuật hỗ trợ hardening cơ bản và chuẩn vận hành.",
      },
      {
        question: "Có phù hợp cho SaaS mới không?",
        answer: "Rất phù hợp cho giai đoạn scale ban đầu vì linh hoạt chi phí và tài nguyên.",
      },
    ],
  },
  {
    slug: "thiet-ke-website",
    menuLabel: "Thiết kế Website",
    heroTitle: "Website doanh nghiệp chuẩn UX/UI, tốc độ và chuyển đổi",
    heroSubtitle:
      "Thiết kế định hướng kinh doanh, kết hợp trải nghiệm người dùng và mục tiêu lead.",
    heroBadge: "Website Experience",
    featureTitle: "Website không chỉ đẹp, mà phải tạo được khách hàng",
    features: [
      {
        title: "Thiết kế định hướng conversion",
        description: "Bố cục và nội dung tập trung CTA, giảm ma sát trong hành trình mua.",
        icon: MonitorSmartphone,
      },
      {
        title: "Chuẩn SEO kỹ thuật",
        description: "Tối ưu cấu trúc, tốc độ và semantic để sẵn sàng cho SEO dài hạn.",
        icon: Search,
      },
      {
        title: "Dễ quản trị",
        description: "Quy trình cập nhật nội dung linh hoạt, phù hợp đội marketing nội bộ.",
        icon: Globe,
      },
    ],
    pricingTitle: "Bảng giá thiết kế website",
    pricing: [
      {
        name: "Basic",
        price: "9.900.000đ",
        description: "Website giới thiệu doanh nghiệp 5-7 trang.",
        items: ["UI cơ bản", "Responsive", "SEO on-page cơ bản"],
      },
      {
        name: "Pro",
        price: "19.900.000đ",
        description: "Website bán hàng/landing đa mục tiêu với tracking chuyển đổi.",
        items: ["UX flow", "Tối ưu tốc độ", "Biểu mẫu lead", "Tracking"],
        highlight: true,
      },
      {
        name: "Business",
        price: "Liên hệ",
        description: "Website enterprise, nhiều vai trò và quy trình nội dung phức tạp.",
        items: ["Discovery workshop", "Design system", "Tư vấn growth funnel"],
      },
    ],
    faq: [
      {
        question: "Thời gian hoàn thành bao lâu?",
        answer: "Thường từ 2-6 tuần tùy scope và mức độ tích hợp.",
      },
      {
        question: "Có hỗ trợ nội dung và SEO ban đầu không?",
        answer: "Có, đội ngũ hỗ trợ cấu trúc nội dung và chuẩn SEO kỹ thuật.",
      },
      {
        question: "Sau bàn giao có được hỗ trợ không?",
        answer: "Có, có các gói bảo trì và nâng cấp theo tháng/quý.",
      },
    ],
  },
  {
    slug: "ai-automation",
    menuLabel: "AI Automation",
    heroTitle: "AI Automation giúp Marketing & Sales tăng tốc vận hành",
    heroSubtitle:
      "Tự động hóa quy trình tạo lead, phân loại, chăm sóc và theo dõi hiệu quả theo thời gian thực.",
    heroBadge: "AI Workflow",
    featureTitle: "Biến AI thành hệ thống tạo doanh thu, không chỉ là công cụ thử nghiệm",
    features: [
      {
        title: "Lead pipeline tự động",
        description: "Thu lead từ đa kênh, phân loại và gán ưu tiên xử lý tự động.",
        icon: Bot,
      },
      {
        title: "Nội dung AI theo ngữ cảnh",
        description: "Gợi ý nội dung ads/email/sales theo từng nhóm khách hàng mục tiêu.",
        icon: BrainCircuit,
      },
      {
        title: "Dashboard đo lường",
        description: "Theo dõi hiệu quả chiến dịch và tối ưu liên tục dựa trên dữ liệu thực.",
        icon: MonitorSmartphone,
      },
    ],
    pricingTitle: "Bảng giá AI Automation",
    pricing: [
      {
        name: "Basic",
        price: "4.900.000đ/tháng",
        description: "Tự động hóa các workflow cơ bản cho đội marketing nhỏ.",
        items: ["2 workflow", "Kết nối form", "Báo cáo cơ bản"],
      },
      {
        name: "Pro",
        price: "9.900.000đ/tháng",
        description: "Workflow nâng cao cho team marketing/sales cần nhiều automation.",
        items: ["6 workflow", "Kết nối CRM", "Dashboard nâng cao", "Tối ưu theo tuần"],
        highlight: true,
      },
      {
        name: "Business",
        price: "Liên hệ",
        description: "Thiết kế hệ thống AI riêng cho vận hành doanh nghiệp quy mô lớn.",
        items: ["Custom workflow", "Tích hợp API", "Tư vấn chiến lược"],
      },
    ],
    faq: [
      {
        question: "Có cần đội kỹ thuật nội bộ để vận hành không?",
        answer: "Không bắt buộc, KIỀU GIA GROUP có thể triển khai và bàn giao theo từng mức.",
      },
      {
        question: "Có kết nối được CRM sẵn có không?",
        answer: "Có, hỗ trợ nhiều nền tảng phổ biến và cả luồng tích hợp tùy chỉnh.",
      },
      {
        question: "Bao lâu thấy kết quả?",
        answer: "Thường từ 2-4 tuần bắt đầu nhìn thấy cải thiện rõ ở tốc độ xử lý lead.",
      },
    ],
  },
  {
    slug: "seo-system",
    menuLabel: "SEO System",
    heroTitle: "SEO System giúp doanh nghiệp tăng trưởng traffic bền vững",
    heroSubtitle:
      "Kết hợp chiến lược nội dung, kỹ thuật SEO và AI để tạo hệ thống lead dài hạn.",
    heroBadge: "SEO Infrastructure",
    featureTitle: "SEO không chạy theo từ khóa rời rạc, mà thành hệ thống tạo doanh thu",
    features: [
      {
        title: "Chiến lược topic cluster",
        description: "Xây cụm nội dung theo hành trình khách hàng và intent tìm kiếm.",
        icon: Search,
      },
      {
        title: "Tối ưu kỹ thuật toàn site",
        description: "Cấu trúc, tốc độ, schema và internal link được tối ưu có hệ thống.",
        icon: MonitorSmartphone,
      },
      {
        title: "AI hỗ trợ sản xuất",
        description: "Rút ngắn thời gian nghiên cứu và triển khai nội dung chuẩn SEO.",
        icon: BrainCircuit,
      },
    ],
    pricingTitle: "Bảng giá SEO System",
    pricing: [
      {
        name: "Basic",
        price: "7.900.000đ/tháng",
        description: "SEO nền tảng cho doanh nghiệp mới xây dựng hiện diện tìm kiếm.",
        items: ["Audit kỹ thuật", "8 bài/tháng", "Báo cáo hàng tháng"],
      },
      {
        name: "Pro",
        price: "15.900.000đ/tháng",
        description: "Tăng tốc SEO với cụm nội dung sâu và tối ưu chuyển đổi.",
        items: ["16 bài/tháng", "Cluster strategy", "CRO cơ bản", "Dashboard KPI"],
        highlight: true,
      },
      {
        name: "Business",
        price: "Liên hệ",
        description: "Chiến lược SEO dài hạn cho ngành cạnh tranh cao và nhiều thị trường.",
        items: ["SEO roadmap", "Content engine", "KPI theo funnel"],
      },
    ],
    faq: [
      {
        question: "SEO bao lâu có kết quả?",
        answer: "Thông thường từ 3-6 tháng tùy ngành, mức cạnh tranh và nền tảng ban đầu.",
      },
      {
        question: "Có kết hợp với quảng cáo được không?",
        answer: "Có, chúng tôi thường phối hợp SEO + Ads để tối ưu chi phí lead tổng thể.",
      },
      {
        question: "Có cam kết KPI không?",
        answer: "Có cam kết theo mốc tiến độ và KPI đã thống nhất trong lộ trình.",
      },
    ],
  },
];

export const servicePageMap = Object.fromEntries(
  servicePages.map((item) => [item.slug, item]),
) as Record<string, ServicePageContent>;

