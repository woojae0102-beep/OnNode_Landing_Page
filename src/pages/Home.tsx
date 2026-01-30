import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  TrendingUp,
  AlertCircle,
  Zap,
  MessageSquare,
  MousePointer2,
} from "lucide-react";
import { IMAGES } from "@/assets/images";
import { features, pricingPlans, testimonials } from "@/data/index";
import { FeatureCard, PricingCard, TestimonialCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";

const springPresets = {
  gentle: { stiffness: 300, damping: 35 },
  smooth: { stiffness: 200, damping: 40 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: springPresets.gentle,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG_8}
            alt="Dashboard Analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.smooth}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              OnNode: Next-Gen AI Automation
            </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            매출이 오르는 이유를 분석하는<br/><span className="text-primary">데이터 기반 이커머스 전략 솔루션</span>
          </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              이미지, 쇼츠, 상세페이지가 이쁘데 왜 매출이 안오르는지는 아무도 말 해주지 않습니다.<br/>
              우리는 <span className="text-primary font-bold">"무엇을 만들까"</span>가 아니라 <span className="text-primary font-bold">"왜 팔리는가?"</span>를 분석합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg group">
                지금 무료로 시작하기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                서비스 문의하기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic text-muted-foreground">
              "아직도 직접 데이터를 수집하고 계신가요?"
            </h2>
            <p className="text-muted-foreground">
              쇼핑몰 운영자의 시간 중 70%는 데이터를 수집하고 정리하는 반복 업무에 소모됩니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[ 
              { icon: TrendingUp, title: "매출에 도움이 되는 분석 자료", desc: "지역별, 플랫폼별 이미지, 쇼츠 트랜드 분석, 잘 팔리는 스토어 분석 후 적용" },
              { icon: Clock, title: "비효율적 광고 집행", desc: "어떤 매체에서 매출이 나오고 효율적인 광고 집행 분석(광고 비용 절감 효과)" },
              { icon: AlertCircle, title: "반복적인 수동 작업", desc: "고객cs, 상세페이지 작업, 사진촬영, 트랜드 분석, 광고 키워드 분석 등 클릭 한 번으로 해결" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-destructive w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="flex-1">
              <img
                src={IMAGES.ANALYTICS_1}
                alt="AI Analysis"
                className="rounded-3xl shadow-2xl border border-border"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                AI 자동분석으로 해결하는
                <br />
                데이터 기반 의사결정
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">자동 데이터 동기화</h4>
                    <p className="text-muted-foreground">API 연동으로 모든 데이터를 실시간 수집합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AI 인사이트 도출</h4>
                    <p className="text-muted-foreground">단순 나열이 아닌, 매출 하락 원인과 상승 기회를 포착합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MousePointer2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">원클릭 액션 제안</h4>
                    <p className="text-muted-foreground">분석 결과를 바탕으로 즉시 실행 가능한 최적화 가이드를 제공합니다.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">핵심 기능</h2>
            <p className="text-muted-foreground">운영의 효율을 극대화하는 OnNode의 핵심 기술들입니다.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-foreground text-background rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  OnNode 도입 후,
                  <br />
                  비즈니스는 이렇게 바뀝니다.
                </h2>
                <ul className="space-y-6">
                  {[
                    "월 평균 업무 시간 80시간 단축",
                    "콘텐츠 제작 속도 10배 향상",
                    "광고 수익률(ROAS) 25% 향상",
                    "데이터 누락 및 휴먼 에러 0%",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                      <span className="text-lg opacity-90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1 relative min-h-[400px]">
              <img
                src={IMAGES.AUTOMATION_4}
                alt="Future Tech"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">이런 분들께 적극 추천합니다</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "비즈니스 모델 확장에만 집중하고 싶은 대표님",
                "상품은 좋은데 콘텐츠 제작이 막막한 초보 셀러",
                "여러 광고 매체의 효율을 한 눈에 보고 싶은 마케터",
                "데이터 기반의 정교한 성장 전략이 필요한 대표님",
                "글로벌 시장에 진출하고 싶지만 현지 데이터 분석이 막막한 대표님",
                "아이템은 확실한데, 어떻게 마케팅을 시작할지 막막한 대표님",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 rounded-xl border border-border bg-card"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-4" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">다양한 서비스 요금제</h2>
            <p className="text-muted-foreground">
              비즈니스 단계에 맞는 최적의 솔루션을 선택하세요.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.ECOMMERCE_5}
            alt="Start Today"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              지금 바로 OnNode의
              <br />
              압도적인 효율을 경험하세요.
            </h2>
            <p className="text-lg mb-10 opacity-90">
              무료 체험을 통해 먼저 사용해 볼 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 text-lg shadow-xl">
                무료 체험 시작하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg bg-background/50 backdrop-blur-sm"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                상담하기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm font-medium mb-4">© 2026 OnNode. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-xs">
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-foreground transition-colors">고객센터</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
