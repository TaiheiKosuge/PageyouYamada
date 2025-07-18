"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, ChevronDown, Microscope, Award, Clock, Shield, Star, Users, Zap, Instagram, Twitter, Bug, Turtle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TypewriterText } from "@/components/typewriter-text"
import { FloatingParticles } from "@/components/floating-particles"
import { useState, useEffect } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // お問い合わせフォーム用のstate
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const specimenNames = [
    "サビイロカブト",
    "リボンスネーク",
    "ネプチューンオオカブト",
    "コクワガタ",
    "フトアゴヒゲトカゲ",
    "ハモ"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-serif font-light tracking-wider bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">山田標本ラボ</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {/* SNS Links */}
            <a
              href="https://www.instagram.com/kookaku.da?igsh=eXk4MXpmajV3ODhp&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-lg mr-4"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/masayuki_oni?s=21&t=nE62aiJWfnXqugdVFrjCLQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-lg mr-4"
            >
              <Twitter className="w-5 h-5" />
            </a>
            {/* 既存のナビゲーション */}
            {["サービス", "ギャラリー", "お問い合わせ"].map((item, index) => (
              <Link
                key={item}
                href={`#${["services", "gallery", "contact"][index]}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
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
                className="block text-gray-300 hover:text-white transition-colors font-medium"
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
            <span className="block text-white animate-fade-in-right animation-delay-300">ずっと残したいあなたへ</span>
           {/* <span className="block animate-fade-in-right animation-delay-900">あなたへ</span>  */}
          </h1>

          <div className="mb-10 animate-fade-in animation-delay-1200">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-serif">
              亡くなったペットを骨格標本としてそばに残しませんか？
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-2000">
            <Button
              size="lg"
              className="bg-white text-black font-serif font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              制作依頼をする
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white font-serif hover:bg-gray-800 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ギャラリーを見る
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center animate-float">
          <p className="text-white mb-2 text-sm tracking-wider font-mono">Scroll</p>
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">提供サービス</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-serif">
                様々な生き物の骨格標本を制作しています
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bug,
                title: "昆虫標本",
                description: "クワガタ、カブトムシといった甲虫類、蜂、蝶などの昆虫類の標本を制作します。",
                delay: 0,
              },
              {
                icon: Turtle,
                title: "爬虫類標本",
                description: "レオパやコーンスネークなどの爬虫類の標本を制作します。",
                delay: 200,
              },
              {
                icon: Shield,
                title: "オプションサービス",
                description: "皮標本、アクセサリー作成、ジオラマ標本など、ご要望に応じた追加サービスも提供します。",
                delay: 400,
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={service.delay}>
                <Card className="bg-black/50 border-gray-800 hover:border-white/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300 mx-auto">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-4 text-white group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed font-serif">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">制作実績</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-serif">
                これまでに制作した骨格標本の一部をご紹介します
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div
                  className="group relative overflow-hidden rounded-xl bg-black/30 aspect-square hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
                  onClick={() => { setModalOpen(true); setModalIndex(index); }}
                >
                  <Image
                    src={`/gallery-specimen-${item}.jpg`}
                    alt={`骨格標本 ${item}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-white font-serif font-medium text-lg mb-2">{specimenNames[index]}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-12 text-white text-center">PRICE LIST</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* クワガタ・カブトムシ */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">クワガタ・カブトムシ</h3>
              <p className="font-serif mb-2">基本料金：￥5,000</p>
              <p className="font-serif mb-2">ジオラマ標本：＋￥5,000</p>
            </div>
            {/* 蜂・蝶 */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">蜂・蝶</h3>
              <p className="font-serif mb-2">基本料金：￥5,000</p>
              <p className="font-serif mb-2">ジオラマ標本：＋￥5,000</p>
            </div>
            {/* トカゲ（トカゲモドキも含む） */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">トカゲ（トカゲモドキも含む）</h3>
              <p className="font-serif mb-2">基本料金：￥35,000</p>
              <p className="font-serif mb-2">サイズ加算：全長1cmごとに＋￥300</p>
            </div>
            {/* ヘビ */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">ヘビ</h3>
              <p className="font-serif mb-2">基本料金：￥30,000</p>
              <p className="font-serif mb-2">サイズ加算：全長1cmごとに＋￥300</p>
              <p className="font-serif mb-2">皮標本（なめし）：＋￥4,000</p>
              <p className="font-serif mb-2">アクセサリー作成（チョーカー等）：＋￥1,000</p>
            </div>
            {/* 四足動物 */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">四足動物</h3>
              <p className="font-serif mb-2">基本料金：￥40,000</p>
              <p className="font-serif mb-2">サイズ加算：全長1cmごとに＋￥300</p>
              <p className="font-serif mb-2">皮標本（なめし）：＋￥4,000</p>
              <p className="font-serif mb-2">アクセサリー作成（チョーカー等）：＋￥1,000</p>
            </div>
            {/* その他 */}
            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold bg-black text-white px-4 py-2 rounded mb-4 text-center font-serif">その他</h3>
              <p className="font-serif mb-2">
                柔軟にご対応可能ですので無料相談にてお気軽にご相談ください。<br />
                無料相談は下記お問い合わせメールよりお願いいたします。
              </p>
            </div>
          </div>
          {/* オプション料金リストを削除し、注意事項を追加 */}
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white text-center">ご依頼の流れ</h2>
            <div className="text-gray-300 font-serif space-y-4 max-w-4xl mx-auto text-lg">
              <div>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-bold">無料相談</span><br />
                    メールまたはお電話でご要望・ご不明点をお伺いします。
                  </li>
                  <li>
                    <span className="font-bold">お見積もり</span><br />
                    標本の種類・サイズ・加工方法を確認し、正式なお見積もりを提示いたします。<br />
                    <span className="text-xs">※内容にご納得いただけない場合は、ここでキャンセル可能です。</span>
                  </li>
                  <li>
                    <span className="font-bold">ご遺体の発送（クール便）</span><br />
                    当社指定の梱包手順に従い、クール便（冷蔵）でお送りください。<br />
                    送料はご依頼主様のご負担となります。
                  </li>
                  <li>
                    <span className="font-bold">前金のお支払い</span><br />
                    お見積もり金額の50％を、下記いずれかの方法でお支払いいただきます。<br />
                    <ul className="list-disc list-inside ml-4">
                      <li>銀行振込</li>
                      <li>クレジットカード決済</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">標本作製</span><br />
                    専門スタッフが丁寧にクリーニング・漂白・組み立てを行います。<br />
                    作業期間：標本の種類により 2〜8 週間 ほど。
                  </li>
                  <li>
                    <span className="font-bold">写真確認</span><br />
                    完成写真をメールでお送りし、形状・組み立て姿勢などをご確認いただきます。<br />
                    修正が必要な場合は、この時点でお申し付けください。
                  </li>
                  <li>
                    <span className="font-bold">完成品の発送</span><br />
                    ご指定の住所へ安全梱包で発送いたします。<br />
                    追跡番号をメールでお知らせします。
                  </li>
                  <li>
                    <span className="font-bold">後金のお支払い</span><br />
                    残金（ご請求額の50％）を、到着後 7 日以内 にお支払いください。
                  </li>
                </ol>
              </div>
              <hr className="my-6 border-gray-600" />
              <div>
                <div className="font-bold mb-2">お支払い方法</div>
                <ul className="list-disc list-inside ml-4">
                  <li>銀行振込（〇〇銀行／△△支店）</li>
                  <li>クレジットカード決済（Visa・Mastercard・JCB・Amex 対応）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">お問い合わせ</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-serif">
                  以下のフォームよりご相談内容をお送りください。３日以内にご返答いたします。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="max-w-xl mx-auto bg-black/80 p-8 rounded-lg shadow-lg space-y-6">
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("送信中...");
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: formName, email: formEmail, message: formMessage }),
                  });
                  if (res.ok) {
                    setFormStatus("送信が完了しました。");
                    setFormName(""); setFormEmail(""); setFormMessage("");
                  } else {
                    const data = await res.json();
                    setFormStatus(`送信に失敗しました。時間をおいて再度お試しください。`);
                  }
                }}>
                  <div>
                    <label className="block mb-2 font-serif text-white">お名前</label>
                    <input type="text" className="w-full p-3 rounded bg-gray-800 text-white" required value={formName} onChange={e => setFormName(e.target.value)} />
                  </div>
                  <div>
                    <label className="block mb-2 font-serif text-white">メールアドレス</label>
                    <input type="email" className="w-full p-3 rounded bg-gray-800 text-white" required value={formEmail} onChange={e => setFormEmail(e.target.value)} />
                  </div>
                  <div>
                    <label className="block mb-2 font-serif text-white">ご依頼内容</label>
                    <textarea className="w-full p-3 rounded bg-gray-800 text-white" rows={6} required value={formMessage} onChange={e => setFormMessage(e.target.value)} />
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-serif font-bold py-3 rounded hover:bg-gray-200 transition">送信</button>
                  {formStatus && <div className="mt-4 text-center text-lg font-serif">{formStatus}</div>}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500 font-mono">&copy; {new Date().getFullYear()} 山田標本ラボ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* モーダル表示 */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-black rounded-xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
              onClick={() => setModalOpen(false)}
              aria-label="閉じる"
            >
              ×
            </button>
            {/* 前後移動ボタン */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-white px-2"
              onClick={() => setModalIndex((modalIndex + specimenNames.length - 1) % specimenNames.length)}
              aria-label="前の画像"
            >
              &#60;
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-white px-2"
              onClick={() => setModalIndex((modalIndex + 1) % specimenNames.length)}
              aria-label="次の画像"
            >
              &#62;
            </button>
            <div className="w-full max-w-2xl h-[60vh] relative mb-4 flex items-center justify-center">
              <Image
                src={`/gallery-specimen-${modalIndex + 1}.jpg`}
                alt={specimenNames[modalIndex]}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h4 className="text-white font-serif font-medium text-xl text-center mt-2">{specimenNames[modalIndex]}</h4>
          </div>
        </div>
      )}
    </div>
  )
}
