"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, ChevronDown, Microscope, Award, Clock, Shield, Star, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TypewriterText } from "@/components/typewriter-text"
import { FloatingParticles } from "@/components/floating-particles"
import { useState, useEffect } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <FloatingParticles />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-serif font-light tracking-wider text-gradient">suage山田</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["サービス", "ギャラリー", "お問い合わせ"].map((item, index) => (
              <Link
                key={item}
                href={`#${["services", "gallery", "contact"][index]}`}
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <nav className="px-4 py-4 space-y-4">
            {["サービス", "ギャラリー", "お問い合わせ"].map((item, index) => (
              <Link
                key={item}
                href={`#${["services", "gallery", "contact"][index]}`}
                className="block text-gray-300 hover:text-amber-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0">
          <Image
            src="/hero-skeleton-bg.jpg"
            alt="骨格標本の美しい展示"
            fill
            className="object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light mb-8 tracking-wide leading-tight">
            <span className="block animate-fade-in-left">大切に育てたペットを</span>
            <span className="block text-gradient animate-fade-in-right animation-delay-300">ずっと残したいあなたへ</span>
           {/* <span className="block animate-fade-in-right animation-delay-900">あなたへ</span>  */}
          </h1>

          <div className="mb-10 animate-fade-in animation-delay-1200">
            <TypewriterText
              text="亡くなったペットを骨格標本としてそばに残しませんか？"
              delay={2000}
              speed={80}
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-2000">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              制作依頼をする
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600 text-amber-400 hover:bg-amber-900/30 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ギャラリーを見る
              <Star className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center animate-float">
          <p className="text-amber-400 mb-2 text-sm tracking-wider font-mono">Scroll</p>
          <ChevronDown className="w-6 h-6 text-amber-400 animate-bounce mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gradient">提供サービス</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                様々な生き物の骨格標本を制作しています
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "昆虫標本",
                description: "クワガタ、カブトムシといった甲虫類、蜂、蝶などの昆虫類の標本を制作します。",
                delay: 0,
              },
              {
                icon: Award,
                title: "爬虫類標本",
                description: "レオパやコーンスネークなどの爬虫類の標本を制作します。",
                delay: 200,
              },
              {
                icon: Shield,
                title: "オプションサービス",
                description: "ご要望に応じた追加サービスも提供します。",
                features: ["皮標本", "アクセサリー作成", "ジオラマ標本"],
                delay: 400,
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={service.delay}>
                <Card className="bg-black/50 border-gray-800 hover:border-amber-600/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300">
                      <service.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-4 text-amber-100 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    {service.features && (
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge
                variant="outline"
                className="mb-6 border-amber-600 text-amber-400 bg-amber-900/20 font-mono tracking-wider"
              >
                Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gradient">制作実績</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                これまでに制作した骨格標本の一部をご紹介します
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-xl bg-black/30 aspect-square hover:transform hover:scale-105 transition-all duration-500">
                  <Image
                    src={`/gallery-specimen-${item}.jpg`}
                    alt={`骨格標本 ${item}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-white font-serif font-medium text-lg mb-2">標本 #{item}</h4>
                    <p className="text-gray-300 text-sm">制作期間: 2-3週間</p>
                    <div className="flex items-center mt-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <Badge
                  variant="outline"
                  className="mb-6 border-amber-600 text-amber-400 bg-amber-900/20 font-mono tracking-wider"
                >
                  Contact
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gradient">お問い合わせ</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  骨格標本制作に関するご相談やお見積もりは、お気軽にお問い合わせください
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-16">
              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <h3 className="text-2xl font-serif font-medium mb-8 text-amber-100">制作依頼・お見積もり</h3>
                  <div className="space-y-6">
                    {[
                      { label: "メール", value: "info@honeya.site", icon: "📧" },
                      { label: "電話", value: "03-XXXX-XXXX", sub: "平日 9:00-18:00", icon: "📞" },
                      { label: "所在地", value: "東京都XXX区XXX", icon: "📍" },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="text-2xl">{contact.icon}</div>
                        <div>
                          <h4 className="font-medium mb-2 text-amber-200 group-hover:text-gradient transition-all duration-300">
                            {contact.label}
                          </h4>
                          <p className="text-gray-400 font-mono">{contact.value}</p>
                          {contact.sub && <p className="text-sm text-gray-500 mt-1">{contact.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="space-y-8">
                  <h3 className="text-2xl font-serif font-medium mb-8 text-amber-100">制作期間・料金目安</h3>
                  <div className="space-y-4">
                    {[
                      { type: "小型鳥類", period: "2-3週間" },
                      { type: "中型哺乳類", period: "4-6週間" },
                      { type: "大型標本", period: "要相談" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-4 border-b border-gray-700 group hover:border-amber-600/50 transition-all duration-300"
                      >
                        <span className="text-gray-300 group-hover:text-amber-200 transition-colors">{item.type}</span>
                        <span className="text-amber-400 font-mono font-medium">{item.period}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    ※料金は検体の状態や仕様により変動します。詳細はお問い合わせください。
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={600}>
              <div className="text-center mt-16">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  お問い合わせフォームへ
                  <ChevronDown className="ml-2 w-5 h-5 rotate-[-90deg]" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 bg-black relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
                <span className="text-3xl font-serif font-light tracking-wider text-gradient">suage山田</span>
              </div>
              <div className="flex space-x-8 text-sm text-gray-400">
                {["プライバシーポリシー", "利用規約", "特定商取引法"].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="hover:text-amber-400 transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-8 bg-gray-800" />

          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="text-gray-500 font-mono">&copy; {new Date().getFullYear()} suage山田. All rights reserved.</p>
              <p className="text-xs text-gray-600 mt-2">Crafted with precision and passion for scientific beauty.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
