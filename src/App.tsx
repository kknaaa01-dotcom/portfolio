import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Award, 
  BarChart3, 
  MessageSquare, 
  Wrench, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Code, 
  Lightbulb, 
  Users, 
  Zap, 
  Database, 
  Star, 
  GraduationCap, 
  MapPin, 
  Smile, 
  Heart, 
  Mail, 
  Phone, 
  Calendar,
  Camera,
  Layers,
  Cpu,
  BadgeCheck,
  BookOpen,
  Flag,
  Target,
  Rocket,
  ShieldCheck,
  RefreshCw,
  LayoutGrid,
  Globe,
  CreditCard,
  UtensilsCrossed,
  Truck,
  Building2,
  Handshake,
  Check,
  School,
  ArrowRight,
  Home,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showCover, setShowCover] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [expandedAward, setExpandedAward] = useState(null);
  const [expandedActivity, setExpandedActivity] = useState(null);
  const [expandedTraining, setExpandedTraining] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    setShowCover(false);
  };

  const profileData = {
    name: "김나경",
    role: "BD OPS",
    subRole: "영업지원 및 사업개발 지원",
    contact: {
      phone: "010-8628-5784",
      email: "kknaaa00@naver.com",
      location: "서울특별시 동작구\n남부순환로 265나길 27 (사당동)"
    },
    summaryPoints: [
      {
        title: "타인을 돕고자 하는 진심을 '시스템'으로 치환합니다.",
        desc: "동료들의 업무 효율을 높이기 위해 데이터와 프로세스를 정리하고 자동화 구조를 설계하는 태도가 저의 가장 큰 기획력입니다."
      },
      {
        title: "데이터로 조직의 언어를 연결하는 중간 조율자입니다.",
        desc: "SQL 기반의 데이터 리터러시를 활용해 사업부의 니즈를 데이터로 증명하며 R&D팀과의 협업 리소스를 획기적으로 절감합니다."
      },
      {
        title: "비즈니스의 안정성과 수익성을 동시에 고려합니다.",
        desc: "단순 행정 지원을 넘어 예산 흐름과 운영 체계를 재설계하여 사업의 구조적 안정화를 이끌어낸 실무 경험을 보유하고 있습니다."
      }
    ],
    keywords: ["제휴 파트너사 관리", "고객사 문의 대응", "B2G 사업 용역 관리", "영업 오퍼레이션 지원", "SQL 데이터 분석", "업무 프로세스 자동화"],
    profileImageUrl: "https://raw.githubusercontent.com/kknaaa01-dotcom/portfolio/db1591dbe74898c751e1a45480a8a7993a6dfae2/KakaoTalk_20251120_162616703.jpg"
  };

  const careerHistory = [
    {
      title: "사업개발팀 BD Ops",
      company: "(주)플레이스앤 (네이버 계열사)",
      url: "https://www.placen.kr/",
      period: "2025.09 - 현재",
      description: "영업 오퍼레이션 지원 / 제휴 파트너사 관리 / B2G 사업 운영 지원",
      tasks: [
        "다수 B2G 사업 제안, 계약, 운영 및 정산 전반 관리",
        "SQL 및 Redash 데이터 직접 추출·가공으로 정확도 개선",
        "문서 구조화 및 매뉴얼 정립을 통한 팀 생산성 향상",
        "예산 관리 및 프로세스 개선으로 사업 안정화 및 흑자 달성"
      ]
    },
    {
      title: "B2B사업팀/B2B영업팀 사원",
      company: "(주)한국공간데이터",
      url: "https://dev-bm.koreaspacedata.com/",
      period: "2025.05 - 2025.09",
      description: "B2B 영업 지원 및 마케팅/신규 리드 발굴",
      tasks: [
        "협업 툴 활용 고객 커뮤니케이션 및 운영 전반 지원",
        "맞춤 광고 콘텐츠 기획 및 마케팅 성과 분석 리포트 제작",
        "타겟 분석 기반 콜드콜 및 제안 메일로 영업 기회 확대",
        "업무 매뉴얼 정리 및 정보 공유 등 행정 프로세스 효율화"
      ]
    },
    {
      title: "만 5세반 담임교사",
      company: "카카오 늘예솔어린이집",
      period: "2024.03 - 2025.03",
      description: "보육 프로그램 기획 및 행정 관리, 자산 관리",
      tasks: [
        "연간·월간 교육 계획 수립 및 대규모 원내 행사 총괄 기획·인솔",
        "ITQ·GTQ 기반 수업 자료 제작 및 행정 협업 체계화",
        "보육프로그램 공모전 수상 및 ESG 실천 우수 사례 선정",
        "맞춤형 지도와 상담을 통한 신뢰 기반 교육 관계 형성"
      ]
    }
  ];

  const projectData = [
    {
      category: "네이버 플레이스",
      icon: UtensilsCrossed,
      title: "네이버 예약 영업대행 및 기획전 관리",
      impact: "호텔/다이닝 세일즈 가속화 및 성과 리포팅",
      details: [
        "인기 식당 및 파인다이닝 대상 예약 프로세스 관리",
        "미식 셀렉션 호텔뷔페 기획전 입점 프로세스 리딩",
        "영업 리드 기반의 입점 가입 준수 여부 정밀 검수",
        "기획전 성과 데이터 모니터링 및 영업 현장 피드백"
      ]
    },
    {
      category: "네이버 파이낸셜",
      icon: CreditCard,
      title: "네이버 파이낸셜 '커넥트' 단말기 영업 관리",
      impact: "결제 단말기 도입 활성화 및 정산 체계화",
      details: [
        "인기 식당 대상 결제 단말기 오퍼레이션 전담",
        "단말기 도입 계약서 검토, 날인 관리 및 활성화 병목 제거",
        "영업 인력별 유입 리드 분석 및 기여도 데이터 구축",
        "플랫폼사와 영업 현장 간 단말기 공급 체계 유지"
      ]
    },
    {
      category: "공공 사업 (B2G)",
      icon: ShieldCheck,
      title: "B2G 공공 사업 제안·입찰 및 수주 운영",
      impact: "입찰을 통한 사업 수주 및 안정적 운영",
      targets: [
        "경상북도경제진흥원 '2025 K-외식산업 기반구축 사업'",
        "경상북도경제진흥원 '2025년 경영혁신 외식서비스 지원 사업'",
        "소상공인시장진흥공단 '2026년 스마트상점 기술보급 사업'",
        "대전서구청 '2026 제로웨이스트 카페로드 적립서비스 운영'"
      ],
      details: [
        "공공기관 용역 입찰 참여 및 최종 사업 수주 달성",
        "제안서 작성부터 청구, 정산, 보고 전 과정 리딩",
        "사업 관련 파트너사 커뮤니케이션 및 협업 관리",
        "실시간 손익 대시보드 구축으로 예산 리스크 관리"
      ]
    },
    {
      category: "영업 파트너십",
      icon: Handshake,
      title: "POS 파트너 제휴 및 영업 채널 확장",
      impact: "신규 리드 채널 확보 및 파트너십 강화",
      details: [
        "스마트로·바로고·페이앤 등 6개 POS사 제휴 관리",
        "파트너사별 수수료 정산 및 데이터 검증 체계 책임",
        "채널별 영업 데이터 수집 및 가공을 통한 지표 분석",
        "협업 툴 활용 파트너사 성과 실시간 공유 체계 구축"
      ]
    },
    {
      category: "핵심 브랜드 관리 (KA)",
      icon: Building2,
      title: "대형 브랜드(KA) 프랜차이즈 통합 관리",
      impact: "나이키·신세계 등 핵심 고객사 신뢰 확보",
      details: [
        "나이키·신세계·무신사·명륜당 등 핵심 브랜드 관리",
        "대형 고객사별 맞춤형 솔루션 제안 및 정산 데이터화",
        "브랜드 특이사항 선제 대응 및 고객사 만족도 제고",
        "성과 지표 분석 기반의 정기 리포트 발행 및 조율"
      ]
    },
    {
      category: "신규 사업 확장 (물류센터)",
      icon: Truck,
      title: "쿠팡·컬리 물류센터 전용 솔루션 오퍼레이션",
      impact: "물류 최적화 시스템 운영 지원 및 데이터 연동",
      details: [
        "물류센터 전용 웨이팅 계약 체결 및 운영 전반 관리",
        "물류센터별 서비스 신규 계약 시 스팟 개설 및 지원",
        "물류 특화 솔루션의 월 단위 정산 및 데이터 연동 관리",
        "사업-개발부 사이의 정밀한 데이터 가이드라인 정립"
      ]
    }
  ];

  const skills = [
    { name: "SQL (Redash)", IconComp: Database, iconColor: "text-[#00A9E0]", desc: "직접 Query 추출 및 데이터 검증 가능" },
    { name: "Excel/Google Sheets", IconComp: FileText, iconColor: "text-[#00C73C]", desc: "복잡한 손익 대시보드 및 자동화 시트 구축" },
    { name: "Google Apps Script", IconComp: Code, iconColor: "text-[#10B981]", desc: "반복 행정 업무 자동화 시스템 설계" },
    { name: "Python (RPA/Macro)", IconComp: Cpu, iconColor: "text-[#334155]", desc: "반복 업무 자동화 및 웹 데이터 크롤링 활용" },
    { name: "협업 도구 (Notion/Slack)", IconComp: Layers, iconColor: "text-[#6366F1]", desc: "효율적인 커뮤니케이션 및 업무 문서화" },
    { name: "디자인 (PS/GTQ)", IconComp: Camera, iconColor: "text-[#EC4899]", desc: "홍보물 기획 및 디자인 도구 활용" }
  ];

  const qualifications = {
    education: [
      { degree: "유아교육과 학사 (차석 졸업)", school: "건양대학교", period: "2020.03 - 2024.02", grade: "4.12" },
      { degree: "고등학교 졸업학력 검정고시 합격", school: "대입검정고시", period: "2018.05.10 (합격)", grade: "-" },
      { degree: "고등학교 중퇴", school: "동일여자고등학교 (서울)", period: "2016.03 - 2017.04", grade: "-" }
    ],
    awards: [
      { 
        title: "2025년 직장어린이집 THE-자람 보육프로그램 공모전", 
        provider: "근로복지공단", 
        year: "2025",
        organization: "근로복지공단/(주)카카오/늘예솔어린이집",
        period: "2024.05 - 2024.08 (약 3개월)",
        role: "만 5세반 담임교사로서 보육프로그램 기획 및 캠페인 진행",
        achievement: "(주)카카오와 협력하여 '아.이.디(아이들과 함께 이루어가는 디지털 세상) 캠페인'을 기획·진행하였습니다. 아동의 디지털 권리(초상권, 저작권, 개인정보 등)에 대한 인식 제고를 목표로 교육 프로그램을 계획하고 수업 및 캠페인 행사 진행, 교육 영상 및 보고서 작성, 굿즈 디자인·제작·판매 및 수익금 기부까지 전 과정에 담임교사로서 주도하였습니다."
      },
      { 
        title: "2024년 직장어린이집 多가치 으쓱(ESG) 공모전 - ESG 적극 실천 어린이집", 
        provider: "근로복지공단", 
        year: "2024",
        organization: "근로복지공단/늘예솔어린이집",
        period: "2024.10 - 2024.12 (약 2개월)",
        role: "만 5세반 담임교사로서 보육프로그램 기획 및 캠페인 진행",
        achievement: "한글 가치 확산을 위해 수업 및 '소중한글 위대한글' 나눔 캠페인을 기획·진행하였습니다. 직장인들을 대상으로 유아들과 함께 한글 책·물품을 재활용한 알뜰시장을 운영하고, 한글 굿즈 디자인·판매 및 수익금을 기부하는 등 담임교사로서 다양한 활동을 주도하며 ESG 가치 실현을 인정받아 2024년 근로복지공단 주최 'ESG 적극 실천 어린이집' 부문에서 수상하였습니다."
      },
      { 
        title: "협동창의 교육·복지 EXPO 수업시연 경진대회 우수상", 
        provider: "건양대학교 재활복지교육대학", 
        year: "2023",
        organization: "건양대학교 재활복지교육대학",
        period: "2023.09 - 2023.11 (약 3개월)",
        role: "교육 프로그램 기획 및 시연 진행",
        achievement: "유아의 창의적 사고와 협력 능력 향상을 목표로 한 활동 중심 교육 프로그램을 직접 기획·운영하였습니다. 주제와 목표를 설정한 뒤, 시청각 자료 제작, 활동 교구 준비, 수업 시연 리허설 등을 거쳐 EXPO 현장에서 발표를 진행하였으며, 프로그램의 창의성과 실효성을 인정받아 우수상을 수상하였습니다."
      },
      { 
        title: "협동창의 교육·복지 EXPO 수업시연 경진대회 장려상", 
        provider: "건양대학교 재활복지교육대학", 
        year: "2022",
        organization: "건양대학교 재활복지교육대학",
        period: "2022.09 - 2022.11 (약 3개월)",
        role: "교육 주제 선정, 수업 시연 자료 제작 및 시연 발표",
        achievement: "아동의 정서 발달과 사회성 함양을 위한 참여형 수업안을 기획하고, 스토리텔링과 체험 활동을 결합한 시연을 진행했습니다. 시연 과정에서 학습 목표와 활동 흐름을 효과적으로 전달하여 심사위원으로부터 긍정적인 평가를 받았으며, 참신한 아이디어와 실천 가능성을 인정받아 장려상을 수상하였습니다."
      },
      { 
        title: "협동창의 교육·복지 EXPO 교재교구 개발 경진대회 최우수상", 
        provider: "건양대학교 재활복지교육대학", 
        year: "2022",
        organization: "건양대학교 재활복지교육대학",
        period: "2022.04 - 2022.06 (약 2개월)",
        role: "교육용 교재·교구 기획, 제작, 시연",
        achievement: "아동의 인지 발달과 문제 해결 능력을 향상시키기 위해 창의적이고 실용적인 교육용 교재·교구를 설계·제작하였습니다. 소재 선정, 디자인, 제작 과정 전반을 주도하고, 사용 방법과 교육 효과를 시연을 통해 제시했습니다. 심사 과정에서 독창성, 완성도, 교육 효과 측면에서 높은 점수를 받아 최우수상을 수상하였습니다."
      }
    ],
    activities: [
      { 
        title: "부여유치원 인턴 (실습교사)", 
        period: "2023.05", 
        duration: "1개월",
        desc: "유치원 실습교사로서 만 3세 꿈2반 아동의 놀이 상호작용을 돕고, 교구 제작 및 활동 보조를 맡았습니다. 또한, 아동의 발달을 관찰하여 관찰일지를 작성하고, 수업 실습을 통해 교육적 접근 방안을 실험하며 현장 경험을 쌓았습니다." 
      },
      { 
        title: "건양대학교 인형극 동아리 '인우리'", 
        period: "2021.08 - 2022.12", 
        duration: "1년 5개월",
        desc: "대학교 재학 중 인형극 동아리 ‘인우리’ 활동을 통해 부속 유치원을 방문하여 직접 제작한 인형극을 기획하고 실연하는 경험을 했습니다. 이 활동을 통해 아동 발달 단계에 맞는 콘텐츠를 구상하고 구현하는 능력을 키웠으며, 팀원들과 협업하며 기획력과 의사소통 능력을 높일 수 있었습니다. 또한 무대 연출과 인형 제작, 실연 과정 전반을 주도하며 창의력과 문제 해결 능력, 현장 실천 역량도 함께 기를 수 있었습니다." 
      },
      { 
        title: "성심어린이집 인턴 (실습교사)", 
        period: "2022.07 - 2022.08", 
        duration: "2개월",
        desc: "어린이집 실습교사로서 만 2세 이삭반 아동과의 놀이 상호작용을 돕고, 교구 제작 및 활동 보조를 맡았습니다. 아동 발달을 관찰하여 관찰일지를 작성하고, 수업 실습을 통해 교육적 접근을 실험하며 현장 경험을 쌓았습니다." 
      },
      { 
        title: "건양대학교 부속유치원 자원봉사", 
        period: "2022.03 - 2022.06", 
        duration: "4개월",
        desc: "부속유치원 자원봉사자로서 만 5세 온누리반 아동과의 놀이 상호작용을 돕고, 교구 제작 및 활동 보조를 맡았습니다. 아동들의 학습과 발달을 지원하는 데 적극적으로 참여하여 교육 활동을 보조하는 역할을 수행하며 현장 경험을 쌓았습니다." 
      }
    ],
    trainings: [
      { 
        title: "동화책을 이용한 앱 기반 구연 방법", 
        year: "2022.06", 
        provider: "건양대학교 취창업지원센터", 
        summary: "‘동화책을 이용한 앱 기반 구연 방법’ 교육을 이수하며 블록 코딩 및 앱 인벤터 활용 능력을 키우고, 디지털 기술을 활용한 창의적인 수업 기획 역량을 함께 발전시킬 수 있었습니다. 특히 동화 콘텐츠를 앱으로 구현하는 과정을 통해 이야기 구성력과 스토리텔링 능력이 향상되었고, 아동의 흥미를 유도하는 인터랙티브한 교육 콘텐츠를 기획·제작하는 능력도 함께 기를 수 있었습니다." 
      },
      { 
        title: "앱 인벤터(App Inventor) 이용 컴퓨터 사고 활용", 
        year: "2021.09 - 2021.11", 
        provider: "건양대학교 취창업지원센터", 
        summary: "‘앱 인벤터(App Inventor) 이용 컴퓨터 사고 활용’ 교육을 이수하며 컴퓨팅 사고력과 기초 프로그래밍 역량을 키우고, 문제를 창의적으로 해결하는 능력을 배양할 수 있었습니다. 또한 앱 기획과 구현 과정을 경험하며 사용자 중심의 사고와 UI/UX에 대한 이해를 높였고, 디지털 도구 활용 능력과 협업 능력도 함께 향상시킬 수 있었습니다." 
      }
    ],
    certs: [
      { name: "2종보통운전면허", date: "2024.02", issuer: "경찰청" },
      { name: "보육교사 2급", date: "2024.02", issuer: "여성가족부" },
      { name: "유치원정교사 2급", date: "2024.02", issuer: "교육부" },
      { name: "아동종이조형지도사", date: "2023.01", issuer: "한국종이협회" },
      { name: "동화구연지도사 3급", date: "2021.01", issuer: "한국그림책협회" },
      { name: "컴퓨터활용능력 2급", date: "2016.12", issuer: "대한상공회의소" },
      { name: "GTQ(그래픽기술자격) 2급", date: "2012.09", issuer: "한국생산성본부" },
      { name: "ITQ 한글엑셀 A등급", date: "2012.03", issuer: "한국생산성본부" },
      { name: "ITQ 아래한글 A등급", date: "2011.03", issuer: "한국생산성본부" },
      { name: "ITQ 한글파워포인트 A등급", date: "2010.09", issuer: "한국생산성본부" }
    ]
  };

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 text-sm font-serif ${
        activeTab === id 
        ? 'bg-[#1E293B] text-white shadow-xl scale-105 font-bold' 
        : 'text-[#64748B] hover:bg-[#F1F5F9] font-medium'
      }`}
    >
      <Icon size={16} strokeWidth={2.5} />
      <span>{label}</span>
    </button>
  );

  if (showCover) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative selection:bg-[#E2E8F0] font-serif">
        <div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#00C73C]/5 via-[#00A9E0]/5 to-transparent"></div>
        </div>
        
        <div className={`max-w-6xl w-full z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#00C73C] to-[#00A9E0] mb-10 rounded-full"></div>
            <h2 className="text-[#64748B] font-serif tracking-[0.4em] uppercase text-[11px] md:text-xs mb-6 font-medium">Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#1E293B] mb-8 tracking-tighter text-center leading-tight">
              {profileData.name}
            </h1>
            <div className="flex items-center gap-6 text-[#00A9E0] font-serif font-bold text-lg md:text-2xl uppercase tracking-[0.2em] mb-12">
                <span>BD OPS</span>
                <span className="w-2 h-2 rounded-full bg-[#00C73C]"></span>
                <span>영업지원 및 사업관리</span>
            </div>
            <p className="text-[#334155] font-serif text-lg md:text-2xl leading-relaxed max-w-3xl text-center font-medium" style={{ wordBreak: 'keep-all' }}>
              "타인을 돕고자 하는 진심을 <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C73C] to-[#00A9E0] font-bold">비즈니스 오퍼레이션 설계</span>로 증명합니다."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { id: 'profile', label: '경력 및 역량', desc: 'EXPERTISE', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
              { id: 'projects', label: '성과 사례', desc: 'IMPACT', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
              { id: 'tech', label: '기술/도구', desc: 'DIGITAL', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
              { id: 'edu', label: '학력/자격', desc: 'HISTORY', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleNavigate(btn.id)}
                className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700"
              >
                <img src={btn.img} alt={btn.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] mb-3 font-serif font-medium">{btn.desc}</p>
                  <h3 className="text-2xl font-serif text-white group-hover:translate-x-2 transition-transform font-bold">{btn.label}</h3>
                </div>
              </button>
            ))}
          </div>
          
          <footer className="mt-24 flex flex-col items-center gap-6">
            <div className="flex gap-12 text-[#94A3B8] text-[11px] font-serif font-bold tracking-widest uppercase">
                <span className="flex items-center gap-3 hover:text-[#1E293B] transition-colors cursor-default font-serif">
                  <Mail size={14}/> 
                  <span className="font-sans tracking-tight">{profileData.contact.email}</span>
                </span>
                <span className="flex items-center gap-3 hover:text-[#1E293B] transition-colors cursor-default font-serif">
                  <Phone size={14}/> 
                  <span className="font-sans tracking-wider">{profileData.contact.phone}</span>
                </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-serif selection:bg-[#E2E8F0] tracking-tight pb-20 overflow-x-hidden">
      <div className={`max-w-6xl mx-auto px-6 pt-12 md:pt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        
        <div className="w-full h-px bg-[#F1F5F9] mb-16 flex justify-between items-center text-[11px] font-serif font-bold text-[#94A3B8] uppercase tracking-[0.5em]">
            <span>Vol. 2026 Portfolio</span>
            <span>{profileData.name}</span>
        </div>

        <header className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 relative">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {profileData.keywords.map(k => (
                <span key={k} className="px-3 py-1.5 bg-[#F8FAFC] text-[#64748B] text-[11px] font-bold rounded-md border border-[#E2E8F0] uppercase tracking-wider">
                  {k}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setIsPhotoModalOpen(true)}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-[#E2E8F0] hover:border-[#00C73C] transition-all shadow-sm shrink-0 group relative"
                title="클릭하여 크게 보기"
              >
                <img 
                  src="https://raw.githubusercontent.com/kknaaa01-dotcom/portfolio/db1591dbe74898c751e1a45480a8a7993a6dfae2/KakaoTalk_20251120_162616703.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-[82%_18%] group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Zap size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
              <h1 className="text-3xl md:text-5xl font-serif text-[#1E293B] tracking-tighter font-bold">
                {profileData.name}
              </h1>
              <span className="text-sm md:text-base font-serif text-[#94A3B8] font-bold uppercase tracking-widest self-end pb-1 md:pb-2">{profileData.role}</span>
            </div>
            <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00C73C] to-[#00A9E0] font-serif font-bold leading-relaxed tracking-tight italic" style={{ wordBreak: 'keep-all' }}>
               {profileData.subRole}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 text-[12px] text-[#64748B] font-serif font-bold">
            <button onClick={() => setShowCover(true)} className="group flex items-center gap-3 bg-[#1E293B] text-white px-7 py-3 rounded-xl hover:bg-[#00C73C] transition-all shadow-xl mb-4 font-sans uppercase text-[11px] tracking-widest font-bold">
                <Home size={14} /> <span>홈으로 이동</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="font-sans tracking-tight text-[#1E293B]">{profileData.contact.email}</span>
              <Mail size={15} className="text-[#94A3B8]"/> 
            </div>
            <div className="flex items-start gap-3 text-right max-w-[320px]">
              <span className="leading-tight whitespace-pre-line">{profileData.contact.location}</span>
              <MapPin size={15} className="text-[#94A3B8] shrink-0 mt-1"/> 
            </div>
          </div>
        </header>

        <nav className="flex flex-wrap gap-3 mb-16 justify-start border-b border-[#F1F5F9] pb-8">
          <NavItem id="profile" label="경력 및 역량" icon={Target} />
          <NavItem id="projects" label="성과 사례" icon={Rocket} />
          <NavItem id="tech" label="기술/도구" icon={Wrench} />
          <NavItem id="edu" label="학력/자격" icon={GraduationCap} />
        </nav>

        <main className="min-h-[500px]">
          {activeTab === 'profile' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-[#F8FAFC] p-10 md:p-14 rounded-[3rem] border border-[#E2E8F0] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00C73C]/10 to-transparent rounded-bl-full pointer-events-none"></div>
                  <div>
                    <h3 className="text-3xl font-serif mb-12 flex items-center gap-4 text-[#1E293B] font-bold">
                      <Award className="text-[#00C73C]" size={28} /> 주요 역량
                    </h3>
                    <div className="space-y-10">
                      {profileData.summaryPoints.map((point, i) => (
                        <div key={i} className="flex gap-8 group">
                          <span className="font-sans text-5xl text-[#E2E8F0] group-hover:text-[#00A9E0] transition-colors leading-none font-black">0{i+1}</span>
                          <div style={{ wordBreak: 'keep-all' }}>
                            <h4 className="font-bold text-[#1E293B] text-lg mb-3 tracking-tight">{point.title}</h4>
                            <p className="text-[#475569] text-[15px] leading-relaxed font-medium">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-16 p-10 bg-white rounded-[2.5rem] shadow-sm border border-[#E2E8F0] relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-[#00C73C]"></div>
                    <h4 className="font-bold text-[#1E293B] text-md mb-3 flex items-center gap-3">
                      <ShieldCheck size={22} className="text-[#00C73C]" /> 전방위적 비즈니스 오퍼레이션 완수 역량
                    </h4>
                    <p className="text-[#475569] text-[14px] leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                      제휴사 관리 및 고객 응대부터 B2G 사업 지원, 복잡한 정산 프로세스 정립까지 비즈니스 운영의 전 과정을 무결점으로 지원합니다.<br />GAS(Google Apps Script) 자동화 및 Redash 쿼리 추출 역량을 바탕으로 운영의 모든 단계를 체계화하는 데 강점이 있습니다.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-5 space-y-4">
                  {[
                    { title: "비즈니스 파트너 관리", desc: "제휴사 관리부터 고객 대응까지 파트너십 전 과정을 조율하며 프로젝트를 안정적으로 운영", IconComp: Users, iconColor: "text-[#00C73C]" },
                    { title: "영업 오퍼레이션", desc: "조직의 병목을 해결하는 오퍼레이션 지원과 데이터 기반의 영업 전략 수립으로 성과 극대화", IconComp: RefreshCw, iconColor: "text-[#00A9E0]" },
                    { title: "데이터 리터러시 & 자동화", desc: "SQL 분석으로 정확한 의사결정 기반을 제공하고 반복 행정 업무를 설계하여 생산성 혁신", IconComp: Database, iconColor: "text-[#00C73C]" },
                    { title: "B2G 사업 용역 관리", desc: "제안, 계약, 운영, 정산 전 과정을 통합 관리하여 사업의 안정성 확보 및 수익성 개선", IconComp: ShieldCheck, iconColor: "text-[#00A9E0]" },
                    { title: "고객 경험 중심 소통", desc: "고객사 문의에 기민하게 대응하며 서비스 만족도를 제고하고 잠재적 비즈니스 리드 발굴", IconComp: MessageSquare, iconColor: "text-[#00C73C]" },
                    { title: "프로세스 구조화 & 문서화", desc: "팀 내 업무 매뉴얼을 정립하고 효율적인 협업 툴 활용 방안을 제시하여 전반적인 생산성 향상", IconComp: FileText, iconColor: "text-[#00A9E0]" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-7 rounded-[2rem] border border-[#E2E8F0] flex items-start gap-6 transition-all hover:border-[#00C73C] hover:shadow-xl group">
                      <div className={`p-4 bg-[#F8FAFC] rounded-2xl shrink-0 group-hover:bg-[#F1F5F9] transition-all`}>
                        <item.IconComp size={20} strokeWidth={2.5} className={item.iconColor} />
                      </div>
                      <div style={{ wordBreak: 'keep-all' }}>
                        <h4 className="font-bold text-[#1E293B] text-[15px] mb-1.5">{item.title}</h4>
                        <p className="text-[#64748B] text-[13px] leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                <h3 className="text-3xl font-serif mb-16 text-[#1E293B] flex items-center gap-4 font-bold">
                  <Briefcase className="text-[#00A9E0]" size={28} /> 상세 경력 사항
                </h3>
                <div className="relative border-l-2 border-[#F1F5F9] ml-8 space-y-16">
                  {careerHistory.map((career, i) => (
                    <div key={i} className="relative pl-12 group">
                      <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#1E293B] group-hover:border-[#00C73C] transition-all"></div>
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          {career.url ? (
                            <a 
                              href={career.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-2xl font-serif text-[#1E293B] mb-1 font-bold hover:text-[#00C73C] transition-colors flex items-center gap-2 group/link"
                            >
                              {career.company}
                              <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                            </a>
                          ) : (
                            <h4 className="text-2xl font-serif text-[#1E293B] mb-1 font-bold">{career.company}</h4>
                          )}
                          <p className="font-bold text-[#64748B] text-lg uppercase tracking-wider">{career.title}</p>
                        </div>
                        <span className="text-[11px] font-bold text-[#00C73C] bg-[#F0FDF4] px-5 py-2 rounded-full uppercase tracking-widest border border-[#DCFCE7] font-sans font-medium">{career.period}</span>
                      </div>
                      <p className="text-[#334155] mb-10 font-semibold text-base leading-relaxed">{career.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {career.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-start gap-4 text-[#475569] bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] text-[14px] font-medium hover:border-[#00C73C] transition-colors" style={{ wordBreak: 'keep-all' }}>
                            <CheckCircle2 size={18} className="text-[#00C73C] mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
              {projectData.map((project, index) => (
                <div key={index} className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0] relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row justify-between md:items-start mb-12 gap-8">
                    <div className="flex gap-8 flex-1 items-center">
                      <div className="w-[84px] h-[84px] flex items-center justify-center bg-gradient-to-br from-[#00C73C] to-[#00A9E0] rounded-[2rem] text-white shadow-lg shrink-0">
                        {index === 5 && <Truck size={36} strokeWidth={1.5} />}
                        {index === 4 && <Building2 size={36} strokeWidth={1.5} />}
                        {index === 3 && <Handshake size={36} strokeWidth={1.5} />}
                        {index < 3 && <project.icon size={36} strokeWidth={1.5} />}
                      </div>
                      <div style={{ wordBreak: 'keep-all' }}>
                        <span className="text-[17px] font-black uppercase tracking-[0.15em] text-[#94A3B8] mb-2 block font-sans">0{index+1}. {project.category}</span>
                        <h3 className="text-2xl md:text-3xl font-serif text-[#1E293B] mb-2 font-bold">{project.title}</h3>
                        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C73C] to-[#00A9E0] tracking-tight font-serif">{project.impact}</p>
                      </div>
                    </div>
                    
                    {project.targets && (
                      <div className="flex flex-col items-end text-right gap-2 max-w-[380px] bg-[#F8FAFC] p-6 rounded-[2rem] border border-[#E2E8F0]">
                        <h4 className="text-[11px] font-serif font-black text-[#94A3B8] uppercase tracking-widest mb-2">참여 프로젝트 목록</h4>
                        {project.targets.map((t, idx) => (
                          <span key={idx} className="text-[11px] font-bold text-[#475569] leading-tight font-sans">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {project.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-5 p-7 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] hover:bg-white transition-all hover:shadow-xl group">
                        <div className="w-9 h-9 bg-white border-2 border-[#E2E8F0] group-hover:border-[#00C73C] rounded-xl flex items-center justify-center shadow-sm text-[#00C73C] text-sm font-black shrink-0 transition-colors leading-none font-sans">
                          {i + 1}
                        </div>
                        <span className="text-[#334155] font-semibold text-[14px] md:text-[15px] leading-snug self-center" style={{ wordBreak: 'keep-all' }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0] animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
              <div className="flex items-center gap-6 mb-16">
                <div className="p-5 bg-gradient-to-br from-[#00C73C] to-[#00A9E0] rounded-[1.5rem] shadow-lg">
                   <Wrench className="text-white" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-4xl font-serif text-[#1E293B] font-bold">디지털 및 데이터 활용 역량</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {skills.map((skill, i) => (
                  <div key={i} className="p-8 bg-[#F8FAFC] rounded-[2.5rem] border border-[#E2E8F0] flex items-center gap-8 hover:bg-white transition-all hover:shadow-2xl group">
                    <div className="p-5 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform border border-[#E2E8F0] group-hover:border-[#00C73C]">
                      <skill.IconComp className={skill.iconColor} size={30} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <span className="font-serif font-bold text-[#1E293B] text-2xl block mb-1.5">0{i+1}. {skill.name}</span>
                      <p className="text-[#64748B] text-[14px] font-medium leading-relaxed font-serif">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-12 bg-white rounded-[3rem] text-center flex flex-col items-center justify-center min-h-[240px] group shadow-sm border-2 border-[#F1F5F9] hover:border-[#00C73C] transition-all">
                  <Star className="text-[#00C73C] mb-6 group-hover:scale-110 transition-transform" size={32} fill="currentColor" />
                  <h4 className="font-bold text-[#1E293B] text-lg mb-4 font-serif">데이터 리터러시</h4>
                  <p className="text-[#64748B] text-[14px] leading-relaxed font-medium font-serif" style={{ wordBreak: 'keep-all' }}>
                    SQL 추출부터 가공 및 검증까지<br />
                    실무 데이터 전 과정을 직접 수행합니다.
                  </p>
                </div>
                <div className="p-12 bg-white rounded-[3rem] text-center flex flex-col items-center justify-center min-h-[240px] group shadow-sm border-2 border-[#F1F5F9] hover:border-[#00A9E0] transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A9E0]/10 blur-[60px]"></div>
                  <Users className="text-[#00A9E0] mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-[#1E293B] text-lg mb-4 font-serif">원활한 소통</h4>
                  <p className="text-[#94A3B8] text-[14px] leading-relaxed font-medium font-serif" style={{ wordBreak: 'keep-all' }}>
                    사업부와 개발팀 간 언어 조율로<br />
                    프로젝트 수행 가속도 및 정확도를 향상합니다.
                  </p>
                </div>
                <div className="p-12 bg-white rounded-[3rem] text-center flex flex-col items-center justify-center min-h-[240px] group shadow-sm border-2 border-[#F1F5F9] hover:border-[#00C73C] transition-all">
                  <Zap className="text-[#00C73C] mb-6 group-hover:scale-110 transition-transform" size={32} fill="currentColor" />
                  <h4 className="font-bold text-[#1E293B] text-lg mb-4 font-serif">업무 혁신</h4>
                  <p className="text-[#64748B] text-[14px] leading-relaxed font-medium font-serif" style={{ wordBreak: 'keep-all' }}>
                    GAS 및 파이썬 매크로 활용으로<br />
                    반복 행정 업무 시간을 비약적으로 절감합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'edu' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
              <div className="space-y-10">
                <section className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                  <h3 className="text-2xl font-serif mb-10 flex items-center gap-4 text-[#1E293B] font-bold">
                    <GraduationCap className="text-[#00C73C]" size={26} /> 학력 사항
                  </h3>
                  <div className="space-y-6">
                    {qualifications.education.map((edu, i) => (
                      <div key={i} className="p-8 bg-[#F8FAFC] rounded-[2rem] border border-[#E2E8F0] hover:bg-white transition-all hover:shadow-lg group">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-bold text-xl text-[#1E293B] group-hover:text-[#00C73C] transition-colors font-serif">{edu.school}</h4>
                          <span className="text-[11px] font-bold text-[#64748B] tracking-wider bg-white px-3 py-1 rounded-full shadow-sm font-sans">{edu.period}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#475569] font-bold text-[15px] font-serif">{edu.degree}</p>
                          {edu.grade !== "-" && (
                            <span className="text-sm text-[#00C73C] font-black bg-[#DCFCE7] px-4 py-1.5 rounded-xl font-sans font-medium">
                              GPA {edu.grade} / 4.5
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                  <h3 className="text-2xl font-serif mb-10 flex items-center gap-4 text-[#1E293B] font-bold">
                    <Award className="text-[#00A9E0]" size={26} /> 수상 내역
                  </h3>
                  <div className="space-y-4">
                    {qualifications.awards.map((award, i) => (
                      <div key={i} className="overflow-hidden bg-[#F8FAFC] rounded-[2.5rem] border border-[#E2E8F0] hover:shadow-md transition-all">
                        <button 
                          onClick={() => setExpandedAward(expandedAward === i ? null : i)}
                          className="w-full flex justify-between items-start p-6 text-left"
                        >
                          <div className="flex items-start gap-5">
                            <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 transition-colors ${expandedAward === i ? 'bg-[#00A9E0]' : 'bg-[#00C73C]'}`}></div>
                            <span className="font-bold text-[15px] text-[#1E293B] font-serif leading-snug" style={{ wordBreak: 'keep-all' }}>{award.title}</span>
                          </div>
                          <div className="flex items-center gap-4 shrink-0 ml-4 mt-1">
                            <span className="text-[11px] font-bold text-[#94A3B8] tracking-wider font-sans">{award.year}</span>
                            <ChevronDown size={16} className={`text-[#94A3B8] transition-transform duration-300 ${expandedAward === i ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        <AnimatePresence>
                          {expandedAward === i && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-11 pb-8 pt-2 space-y-4 border-t border-[#E2E8F0]/50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                                  <div>
                                    <p className="text-[#94A3B8] font-bold mb-1 uppercase tracking-tighter">연계/소속기관</p>
                                    <p className="text-[#475569] font-medium">{award.organization}</p>
                                  </div>
                                  <div>
                                    <p className="text-[#94A3B8] font-bold mb-1 uppercase tracking-tighter">수행 기간</p>
                                    <p className="text-[#475569] font-medium">{award.period}</p>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-[#94A3B8] font-bold mb-1 uppercase tracking-tighter">주요 역할</p>
                                  <p className="text-[#475569] font-medium">{award.role}</p>
                                </div>
                                <div>
                                  <p className="text-[#94A3B8] font-bold mb-1 uppercase tracking-tighter">업무 성과</p>
                                  <p className="text-[#475569] leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>{award.achievement}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                  <h3 className="text-2xl font-serif mb-10 flex items-center gap-4 text-[#1E293B] font-bold">
                    <Flag className="text-[#10B981]" size={26} /> 대외활동
                  </h3>
                  <div className="space-y-5">
                    {qualifications.activities.map((act, i) => (
                      <div key={i} className="overflow-hidden bg-[#F8FAFC] rounded-[2.5rem] border border-[#E2E8F0] hover:shadow-md transition-all">
                        <button 
                          onClick={() => setExpandedActivity(expandedActivity === i ? null : i)}
                          className="w-full flex justify-between items-start p-7 text-left"
                        >
                          <div style={{ wordBreak: 'keep-all' }}>
                            <p className="font-bold text-[#1E293B] text-[16px] mb-2 font-serif">{act.title}</p>
                            <div className="flex items-center gap-3">
                                <span className="text-[11px] font-bold text-[#00A300] bg-[#F0FDF4] px-3 py-1 rounded-full shadow-sm tracking-tighter font-sans">{act.period}</span>
                                <span className="text-[11px] font-bold text-[#64748B] font-sans">({act.duration})</span>
                            </div>
                          </div>
                          <ChevronDown size={18} className={`text-[#94A3B8] transition-transform duration-300 mt-1 ${expandedActivity === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {expandedActivity === i && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-7 pb-8 pt-0">
                                <p className="text-[14px] text-[#475569] font-medium leading-relaxed bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-inner font-serif" style={{ wordBreak: 'keep-all' }}>
                                  {act.desc}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              
              <div className="space-y-10">
                <section className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                  <h3 className="text-2xl font-serif mb-10 flex items-center gap-4 text-[#1E293B] font-bold">
                    <BadgeCheck className="text-[#00A9E0]" size={26} /> 자격 사항
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {qualifications.certs.map((cert, i) => (
                      <div key={i} className="flex items-start justify-between p-5 bg-[#F8FAFC] rounded-[2.5rem] border border-[#E2E8F0] hover:bg-white transition-all group">
                        <div className="flex items-start gap-5">
                          <FileText size={16} className="text-[#CBD5E1] group-hover:text-[#00A9E0] mt-1 shrink-0" strokeWidth={2.5}/>
                          <div className="flex flex-col" style={{ wordBreak: 'keep-all' }}>
                            <span className="font-bold text-[15px] text-[#1E293B] leading-tight font-serif">{cert.name}</span>
                            <span className="text-[11px] text-[#94A3B8] font-bold uppercase tracking-tighter mt-1 font-serif">{cert.issuer}</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#64748B] tracking-wider font-sans shrink-0 ml-4 mt-1">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#E2E8F0]">
                  <h3 className="text-2xl font-serif mb-10 flex items-center gap-4 text-[#1E293B] font-bold">
                    <BookOpen className="text-[#00C73C]" size={26} /> 직무 교육
                  </h3>
                  <div className="space-y-6">
                    {qualifications.trainings.map((train, i) => (
                      <div key={i} className="overflow-hidden bg-[#F8FAFC] rounded-[2.5rem] border border-[#E2E8F0] group hover:border-[#00C73C] transition-all">
                        <button 
                          onClick={() => setExpandedTraining(expandedTraining === i ? null : i)}
                          className="w-full flex justify-between items-start p-8 text-left"
                        >
                          <div className="flex-1" style={{ wordBreak: 'keep-all' }}>
                            <div className="flex items-center justify-between mb-4">
                              <p className="font-bold text-[#1E293B] text-lg font-serif">{train.title}</p>
                              <span className="text-[11px] font-bold text-[#00C73C] bg-[#DCFCE7] px-4 py-1.5 rounded-full tracking-wider font-sans font-medium shrink-0 ml-4">{train.year}</span>
                            </div>
                            <p className="text-[11px] text-[#64748B] font-bold uppercase tracking-widest font-serif">{train.provider}</p>
                          </div>
                          <ChevronDown size={20} className={`text-[#94A3B8] transition-transform duration-300 mt-1 ml-4 ${expandedTraining === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {expandedTraining === i && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-8 pb-8 pt-0">
                                <p className="text-[14px] text-[#475569] font-medium leading-relaxed bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-inner font-serif" style={{ wordBreak: 'keep-all' }}>
                                  {train.summary}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}
        </main>

        <footer className="mt-40 text-center py-16 border-t border-[#F1F5F9] flex flex-col items-center gap-8 font-serif">
          <div className="flex gap-12 text-[#94A3B8] text-[11px] font-serif font-bold tracking-[0.4em] uppercase">
                <span>Portfolio</span>
                <span className="text-[#CBD5E1]">•</span>
                <span>© 2026 {profileData.name}</span>
          </div>
          <p className="text-[#CBD5E1] text-[11px] font-bold tracking-widest uppercase font-serif">All Rights Reserved</p>
        </footer>

        {/* Profile Photo Modal */}
        {isPhotoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20 md:pt-32 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-[#1E293B]/40 backdrop-blur-sm"
              onClick={() => setIsPhotoModalOpen(false)}
            ></div>
            <div className="relative max-w-sm w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-in slide-in-from-top-8 duration-500 border border-[#F1F5F9] p-2 mb-10">
              <div className="relative h-80 rounded-[2rem] overflow-hidden bg-[#F8FAFC]">
                <img 
                  src="https://raw.githubusercontent.com/kknaaa01-dotcom/portfolio/db1591dbe74898c751e1a45480a8a7993a6dfae2/KakaoTalk_20251120_162616703.jpg" 
                  alt="2026 Place& Official Model" 
                  className="w-full h-full object-cover object-[82%_20%]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              <div className="p-8 text-center">
                <h2 className="text-xl font-serif font-bold text-[#1E293B] mb-4 whitespace-nowrap">
                  2026 플레이스앤 공식 모델
                </h2>
                <p className="text-[#475569] text-sm leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                  이해도와 실무 전문성을 인정받아<br/>
                  <span className="text-[#00C73C] font-bold">2026 플레이스앤 공식 모델</span>로 선정되었습니다.
                </p>
                <button 
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="mt-8 w-full py-4 bg-[#1E293B] text-white rounded-2xl font-bold hover:bg-[#00C73C] transition-all text-sm shadow-lg"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
