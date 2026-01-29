import { Feature, PricingPlan, Testimonial, FAQ } from "@/lib/index";

export const features: Feature[] = [
  {
    id: "feat-1",
    title: "AI 매출 분석 자동화",
    description: "매일 아침 어제의 성과를 AI가 분석하여 핵심 요약 리포트로 전달합니다.",
    iconName: "BarChart3",
  },
  {
    id: "feat-2",
    title: "플랫폼 트렌드 분석",
    description: "구글, 쇼피파이 등 글로벌 플랫폼 키워드를 정밀 분석하여, 전 세계 시장 동향을 포착합니다.",
    iconName: "TrendingUp",
  },
  {
    id: "feat-3",
    title: "광고 성과 통합 대시보드",
    description: "흩어져 있는 매체별 광고 데이터를 하나로 모아 실제 수익률(ROAS)을 계산합니다.",
    iconName: "LayoutDashboard",
  },
  {
    id: "feat-4",
    title: "매출 시뮬레이션",
    description: "키워드와 시장 상황에 따른 예상 매출 결과를 제공하여, 데이터기반 의사 결정을 지원합니다.",
    iconName: "Calculator",
  },
  {
    id: "feat-5",
    title: "실패 가능 키워드 사전 차단",
    description: "실패 가능성이 높은 키워드를 사전에 필터링 하여, 자원 낭비를 방지하고 성공 확률을 높입니다.",
    iconName: "Shield",
  },
  {
    id: "feat-6",
    title: "상위 셀러 데이터 분석",
    description: "성공이 증명된 상위 판매 셀러의 데이터 분석을 기반으로, 이미 실험된 트렌드를 재검증 합니다.",
    iconName: "Crown",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-optimization",
    name: "매출 최적화 패키지",
    price: "800,000",
    period: "건",
    description: "완성형 매출 최적화 솔루션",
    features: [
      "초고퀄리티 상품 이미지 5장",
      "구매전환 상세페이지 1개",
      "30초 쇼츠 제작 3개",
      "자동 고객 CS + 업로드 지원",
    ],
    ctaText: "구매하기",
    // src/data/index.ts
    href: "https://ai365mall.cafe24.com/exec/front/order/basket_direct?product_no=25&quantity=1"
  },
  {
    id: "plan-keyword-analysis",
    name: "광고 키워드 분석",
    price: "29,000 ~ 79,000",
    period: "월",
    description: "비즈니스 규모에 맞는 키워드 분석 서비스",
    features: [
      "Basic: 월 29,000원 - 하루 3건 키워드 분석",
      "Standard: 월 59,000원 - 하루 30건 키워드 분석",
      "Unlimited: 월 79,000원 - 무제한 이용 가능",
    ],
    isPopular: true,
    ctaText: "지금 시작하기",
    href: "#",
  },
  {
    id: "plan-expert",
    name: "전문가 부가 서비스",
    price: "250,000",
    period: "월",
    description: "고급 마케팅 및 글로벌 확장 서비스",
    features: [
      "시멘틱 마크업: 카테고리별 월 250,000원",
      "글로벌 확장팩: 국가별 패키지",
    ],
    ctaText: "구매하기",
    href: "#",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "최*혁",
    role: "글로벌 패션 브랜드 '루미**' 대표",
    content: "매일 아침 3시간씩 걸리던 키워드 분석이 5분 만에 끝납니다. AI가 뽑아준 황금 키워드로 광고를 돌렸더니 노출량이 전월 대비 4배나 늘었어요. 이제야 제대로 된 전략 기획을 하는 기분입니다.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-2",
    author: "김*영",
    role: "리빙 편집숍 '어반*' 운영팀장",
    content: "상세페이지 하나 만들 때마다 외주 업체랑 기 싸움 하느라 지쳤었었는데, OnNode 도입 후엔 AI가 1분 만에 고퀄리티 쇼츠까지 만들어주니 제작비가 거의 안 들어요. 전환율도 기대 이상이라 주변 셀러들에게 무조건 추천 중입니다.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-3",
    author: "박*성",
    role: "리빙 편집숍 '어반**' 마케터",
    content: "여러 광고 매체의 성과를 한곳에서 분석할 수 있어 효율이 40% 이상 개선되었습니다. 카페24 운영자라면 필수 앱이라고 생각합니다.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-4",
    author: "Robert D.",
    role: "Shopify 북미 전문 셀러",
    content: "데이터 분석이 막막해서 감으로만 장사하던 시절이 후회됩니다. OnNode 리포트가 짚어준 상품의 문제점을 개선했더니 구매 전환율이 180%나 상승했습니다. 쇼피파이 셀러라면 선택이 아닌 필수 도구입니다.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "test-5",
    author: "Kenji",
    role: "Top-rated Seller in Tokyo",
    content: "제가 써본 도구 중 가장 직관적입니다. 글로벌 트렌드를 분석하고 몇 분 만에 콘텐츠를 생성하는 기능 덕분에 이번 달에만 5개의 신제품을 출시했습니다. 비즈니스를 글로벌로 확장하고 싶다면 OnNode가 유일한 답입니다.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "카페24 쇼핑몰과 어떻게 연동하나요?",
    answer: "카페24 앱스토어에서 OnNode 앱을 설치하시면 클릭 몇 번만으로 모든 데이터가 자동으로 연동됩니다.",
  },
  {
    id: "faq-2",
    question: "무료 체험 기간이 종료되면 어떻게 되나요?",
    answer: "14일의 무료 체험 기간이 종료되면 서비스가 일시 중지되며, 결제 수단을 등록하시면 데이터 중단 없이 계속 사용하실 수 있습니다.",
  },
  {
    id: "faq-3",
    question: "데이터 보안은 안전하게 관리되나요?",
    answer: "OnNode는 모든 데이터를 금융권 수준의 AES-256 암호화로 관리하며, 쇼핑몰의 기밀 정보는 철저히 보호됩니다.",
  },
  {
    id: "faq-4",
    question: "요금제 변경은 언제든 가능한가요?",
    answer: "네, 대시보드 설정 페이지에서 언제든지 상위 요금제로 업그레이드하거나 하위 요금제로 변경하실 수 있습니다.",
  },
];
