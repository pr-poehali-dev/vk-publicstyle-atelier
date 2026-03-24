import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/bf979bd2-b88a-4b0a-8626-3d6e62829c24.jpg";
const AVATAR_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/d00cae32-3164-415f-aad1-de3f9e8b8028.JPG";

const GALLERY_IMGS = [
  "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/17d50333-0e47-4dcc-971b-8a5320dcd39e.jpg",
  "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/af9db6b1-d13b-4a5c-8229-49a632b4f019.jpg",
  "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/571f89b1-beaf-44f1-90dc-8167bdb61031.jpg",
  "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/00b90c6f-4a3f-4a1e-8f89-4d58f7471801.jpg",
];

const CURRENT_MODELS = [
  {
    img: "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/a42ce568-a7e9-4259-80c6-a3426994cce2.jpg",
    title: "Толстовка флисовая с капюшоном",
    desc: "Мягкий флис, молния по всей длине, декоративный шнур. Цвет: чёрный.",
    accent: "crimson",
  },
  {
    img: "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/3b6ad4d6-75a1-4dcc-b53b-ac67765e9224.jpg",
    title: "Велюровая блуза с запа́хом",
    desc: "Элегантный перекрёстный запах, длинный рукав. Велюр тёмно-коричневый.",
    accent: "purple",
  },
  {
    img: "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/d5d6598a-d12e-458c-a47a-46baf1115c46.jpg",
    title: "Худи с контрастной отделкой",
    desc: "Жаккардовый трикотаж + клетчатая бирюзовая вставка на капюшоне и манжетах.",
    accent: "orange",
  },
  {
    img: "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/8111aa62-1834-4dfa-9ee9-c51bfbc7d3b4.jpg",
    title: "Свитшот комби-флис с кружевом",
    desc: "Флис + кружевная вставка спереди, высокий воротник. Цвет: тёмно-серый.",
    accent: "crimson",
  },
  {
    img: "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/bucket/1701789d-8d09-469f-9f17-6f62bdfb5f42.jpg",
    title: "Худи оверсайз с широким воротом",
    desc: "Пушистый флис-тедди, свободный крой, широкий отложной воротник. Цвет: бежевый.",
    accent: "purple",
  },
];

const navLinks = [
  { label: "О мастере", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Модели", href: "#models" },
  { label: "Галерея", href: "#gallery" },
  { label: "Заявка", href: "#order" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { icon: "Scissors", title: "Индивидуальный пошив", desc: "Создаём вещи точно по вашим меркам — от повседневных образов до вечерних нарядов.", price: "от 3 000 ₽", accent: "crimson" },
  { icon: "Sparkles", title: "Корректировка изделия", desc: "Подгонка платьев, брюк, пальто и другой одежды под вашу фигуру.", price: "от 800 ₽", accent: "purple" },
  { icon: "PenTool", title: "Выкройки в САПР", desc: "Разработка и продажа точных выкроек в программе САПР — для самостоятельного пошива или производства.", price: "по запросу", accent: "crimson" },
  { icon: "Shirt", title: "Пошив по фото/эскизу", desc: "Найдите понравившийся образ — воплотим его в реальность.", price: "от 5 000 ₽", accent: "orange" },
  { icon: "Star", title: "Подбор стиля", desc: "Поможем выбрать модели и фасоны, идеально подходящие именно вам.", price: "от 1 500 ₽", accent: "purple" },
  { icon: "Gift", title: "Корпоративные заказы", desc: "Пошив форменной и представительской одежды для компаний.", price: "по запросу", accent: "orange" },
];

const accentColors: Record<string, string> = {
  crimson: "hsl(var(--crimson))",
  purple: "hsl(var(--purple))",
  orange: "hsl(var(--orange))",
};

const contacts = [
  { icon: "Phone", lines: ["+7 (XXX) XXX-XX-XX"], link: null },
  { icon: "MessageCircle", lines: ["ВКонтакте"], link: "https://vk.com/" },
  { icon: "MapPin", lines: ["Ваш город, ул. Примерная, 1"], link: null },
  { icon: "Clock", lines: ["Пн–Сб: 9:00 – 20:00"], link: null },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [orderSent, setOrderSent] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--ivory))" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: "hsl(var(--taupe-light))" }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Стиль от Наумовой" className="h-11 w-11 rounded-full object-cover" style={{ border: "2px solid hsl(var(--crimson))" }} />
            <div className="text-left hidden sm:block">
              <div className="font-cormorant text-lg font-semibold leading-tight" style={{ color: "hsl(var(--charcoal))" }}>Стиль от Наумовой</div>
              <div className="font-montserrat text-[10px] tracking-[0.3em] uppercase" style={{ color: "hsl(var(--taupe))" }}>Ателье</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-montserrat text-[11px] tracking-[0.15em] uppercase transition-opacity hover:opacity-50"
                style={{ color: "hsl(var(--charcoal))" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#order")}
              className="font-montserrat text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
              style={{ background: "hsl(var(--crimson))", color: "#fff" }}
            >
              Заявка
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "hsl(var(--charcoal))" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "hsl(var(--taupe-light))" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-montserrat text-xs tracking-[0.15em] uppercase text-left"
                style={{ color: "hsl(var(--charcoal))" }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "hsl(var(--taupe-bg))" }}>
        {/* Декоративные цветные акценты */}
        <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, hsl(var(--crimson)), hsl(var(--purple)), hsl(var(--orange)))" }} />
        <div className="absolute top-0 right-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, hsl(var(--orange)), hsl(var(--purple)), hsl(var(--crimson)))" }} />

        <div className="relative text-center px-8 flex flex-col items-center">
          {/* Логотип */}
          <div className="animate-fade-in mb-8">
            <img
              src={LOGO_IMG}
              alt="Стиль от Наумовой"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full mx-auto"
              style={{
                border: "6px solid #fff",
                boxShadow: "0 0 0 2px hsl(var(--crimson)), 0 20px 60px rgba(0,0,0,0.25)"
              }}
            />
          </div>

          <div className="animate-fade-in-delay">
            <div className="font-montserrat text-[11px] tracking-[0.6em] uppercase mb-4" style={{ color: "#fff", opacity: 0.85 }}>
              Авторское ателье
            </div>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-2" style={{ color: "#fff" }}>
              Стиль от
            </h1>
            <h1 className="font-cormorant text-5xl md:text-7xl font-semibold italic leading-tight mb-8" style={{ color: "#fff" }}>
              Наумовой
            </h1>

            {/* Цветная разделительная линия */}
            <div className="flex items-center justify-center gap-1 mb-8 mx-auto">
              <div className="h-0.5 w-16" style={{ background: "hsl(var(--crimson))" }} />
              <div className="h-0.5 w-8" style={{ background: "hsl(var(--purple))" }} />
              <div className="h-0.5 w-8" style={{ background: "hsl(var(--orange))" }} />
            </div>

            <p className="font-montserrat text-sm font-light tracking-wide max-w-sm mx-auto mb-10" style={{ color: "#fff", opacity: 0.9 }}>
              Создаю одежду, в которой вы чувствуете себя собой — элегантно, удобно, с душой
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("#order")}
                className="font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all hover:opacity-80"
                style={{ background: "hsl(var(--crimson))", color: "#fff" }}
              >
                Оставить заявку
              </button>
              <button
                onClick={() => scrollTo("#gallery")}
                className="font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-4 border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "#fff", color: "#fff" }}
              >
                Галерея работ
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "#fff", opacity: 0.7 }} />
        </div>
      </section>

      {/* О МАСТЕРЕ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Аватарка */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Цветные акценты за фото */}
                <div className="absolute -top-3 -left-3 w-full h-full" style={{ background: "hsl(var(--crimson))", opacity: 0.15, borderRadius: "4px" }} />
                <div className="absolute -bottom-3 -right-3 w-full h-full" style={{ background: "hsl(var(--purple))", opacity: 0.1, borderRadius: "4px" }} />
                <img
                  src={AVATAR_IMG}
                  alt="Наумова — мастер ателье"
                  className="relative w-72 h-80 object-cover object-top"
                  style={{ borderRadius: "2px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                />
                {/* Бейдж */}
                <div
                  className="absolute -bottom-5 -right-5 px-4 py-2 font-montserrat text-xs text-white"
                  style={{ background: "hsl(var(--crimson))", letterSpacing: "0.1em" }}
                >
                  10+ лет опыта
                </div>
              </div>
            </div>

            <div>
              <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--crimson))" }}>
                О мастере
              </div>
              <h2 className="font-cormorant text-5xl font-light mb-6 leading-tight" style={{ color: "hsl(var(--charcoal))" }}>
                Мастерство<br />
                <em className="italic" style={{ color: "hsl(var(--purple))" }}>в каждой детали</em>
              </h2>
              <div className="flex gap-1 mb-8">
                <div className="h-0.5 w-12" style={{ background: "hsl(var(--crimson))" }} />
                <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
                <div className="h-0.5 w-4" style={{ background: "hsl(var(--orange))" }} />
              </div>
              <p className="font-montserrat text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
                Я занимаюсь пошивом и стилем уже более 10 лет. Моё ателье — это место, где рождается ваш уникальный образ.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
                Каждое изделие создаётся с вниманием к вашей фигуре, пожеланиям и индивидуальности. Работаю как с классическими моделями, так и с авторскими дизайнерскими решениями.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "500+", label: "Изделий", color: "hsl(var(--crimson))" },
                  { num: "10+", label: "Лет опыта", color: "hsl(var(--purple))" },
                  { num: "98%", label: "Довольных", color: "hsl(var(--orange))" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-cormorant text-4xl font-semibold" style={{ color: s.color }}>{s.num}</div>
                    <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: "hsl(var(--taupe))" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24 px-6" style={{ background: "hsl(var(--ivory))" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--crimson))" }}>
              Что я делаю
            </div>
            <h2 className="font-cormorant text-5xl font-light" style={{ color: "hsl(var(--charcoal))" }}>
              Услуги ателье
            </h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              <div className="h-0.5 w-12" style={{ background: "hsl(var(--crimson))" }} />
              <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
              <div className="h-0.5 w-4" style={{ background: "hsl(var(--orange))" }} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 hover-lift"
                style={{ borderTop: `3px solid ${accentColors[s.accent]}` }}
              >
                <div className="mb-5">
                  <Icon name={s.icon} fallback="Star" size={26} style={{ color: accentColors[s.accent] }} />
                </div>
                <h3 className="font-cormorant text-2xl font-medium mb-3" style={{ color: "hsl(var(--charcoal))" }}>{s.title}</h3>
                <p className="font-montserrat text-xs leading-relaxed mb-5" style={{ color: "hsl(var(--taupe))", fontWeight: 300 }}>{s.desc}</p>
                <div className="font-montserrat text-sm font-semibold" style={{ color: accentColors[s.accent] }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* АКТУАЛЬНЫЕ МОДЕЛИ */}
      <section id="models" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--crimson))" }}>
              Принимаю заказы
            </div>
            <h2 className="font-cormorant text-5xl font-light" style={{ color: "hsl(var(--charcoal))" }}>
              Актуальные модели
            </h2>
            <p className="font-montserrat text-sm mt-4 max-w-md mx-auto" style={{ color: "hsl(var(--taupe))", fontWeight: 300 }}>
              Пошив по вашим размерам — выберите модель и оставьте заявку
            </p>
            <div className="flex items-center justify-center gap-1 mt-6">
              <div className="h-0.5 w-12" style={{ background: "hsl(var(--crimson))" }} />
              <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
              <div className="h-0.5 w-4" style={{ background: "hsl(var(--orange))" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CURRENT_MODELS.map((m, i) => (
              <div key={i} className="group hover-lift bg-white border" style={{ borderColor: "hsl(var(--taupe-light))" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 right-3 px-3 py-1 font-montserrat text-[10px] tracking-[0.15em] uppercase text-white"
                    style={{ background: accentColors[m.accent] }}
                  >
                    В наличии
                  </div>
                </div>
                <div className="p-5" style={{ borderTop: `2px solid ${accentColors[m.accent]}` }}>
                  <h3 className="font-cormorant text-xl font-medium mb-2" style={{ color: "hsl(var(--charcoal))" }}>{m.title}</h3>
                  <p className="font-montserrat text-xs leading-relaxed mb-4" style={{ color: "hsl(var(--taupe))", fontWeight: 300 }}>{m.desc}</p>
                  <button
                    onClick={() => scrollTo("#order")}
                    className="w-full py-3 font-montserrat text-[11px] tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80"
                    style={{ background: accentColors[m.accent] }}
                  >
                    Заказать по размеру
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--purple))" }}>
              Мои работы
            </div>
            <h2 className="font-cormorant text-5xl font-light" style={{ color: "hsl(var(--charcoal))" }}>
              Галерея
            </h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              <div className="h-0.5 w-4" style={{ background: "hsl(var(--orange))" }} />
              <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
              <div className="h-0.5 w-12" style={{ background: "hsl(var(--crimson))" }} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} className="relative overflow-hidden group" style={{ aspectRatio: "3/4" }}>
                <img
                  src={img}
                  alt={`Работа ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
                >
                  <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white">Работа {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section id="order" className="py-24 px-6" style={{ background: "hsl(var(--taupe-bg))" }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "#fff", opacity: 0.8 }}>
            Записаться
          </div>
          <h2 className="font-cormorant text-5xl font-light mb-2" style={{ color: "#fff" }}>
            Оставить заявку
          </h2>
          <div className="flex items-center justify-center gap-1 mb-10 mt-4">
            <div className="h-0.5 w-12" style={{ background: "hsl(var(--crimson))" }} />
            <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
            <div className="h-0.5 w-4" style={{ background: "hsl(var(--orange))" }} />
          </div>

          {orderSent ? (
            <div className="bg-white/20 backdrop-blur-sm p-12 text-center">
              <Icon name="CheckCircle" size={48} style={{ color: "#fff", margin: "0 auto 1rem" }} />
              <p className="font-cormorant text-3xl text-white mb-2">Заявка принята!</p>
              <p className="font-montserrat text-sm text-white/80">Я свяжусь с вами в ближайшее время</p>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-8">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white font-montserrat text-sm"
                />
                <input
                  type="tel"
                  placeholder="Телефон или ВК"
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white font-montserrat text-sm"
                />
                <select
                  value={orderForm.service}
                  onChange={(e) => setOrderForm({ ...orderForm, service: e.target.value })}
                  className="w-full px-5 py-4 bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white font-montserrat text-sm"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" style={{ background: "hsl(var(--taupe-bg))" }}>Выберите услугу</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title} style={{ background: "hsl(var(--taupe-bg))" }}>{s.title}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Комментарий (желаемый стиль, размер, сроки...)"
                  value={orderForm.comment}
                  onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                  rows={3}
                  className="w-full px-5 py-4 bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white font-montserrat text-sm resize-none"
                />
                <button
                  onClick={() => setOrderSent(true)}
                  className="w-full py-4 font-montserrat text-xs tracking-[0.25em] uppercase transition-all hover:opacity-80"
                  style={{ background: "hsl(var(--crimson))", color: "#fff" }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--orange))" }}>
              Связаться
            </div>
            <h2 className="font-cormorant text-5xl font-light" style={{ color: "hsl(var(--charcoal))" }}>
              Контакты
            </h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              <div className="h-0.5 w-4" style={{ background: "hsl(var(--crimson))" }} />
              <div className="h-0.5 w-6" style={{ background: "hsl(var(--purple))" }} />
              <div className="h-0.5 w-12" style={{ background: "hsl(var(--orange))" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contacts.map((c, i) => {
              const colors = [accentColors.crimson, accentColors.purple, accentColors.orange, accentColors.crimson];
              return (
                <div key={i} className="text-center p-6 border hover-lift" style={{ borderColor: "hsl(var(--taupe-light))" }}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center" style={{ background: colors[i] + "15" }}>
                      <Icon name={c.icon} fallback="Star" size={22} style={{ color: colors[i] }} />
                    </div>
                  </div>
                  {c.lines.map((line) =>
                    c.link ? (
                      <a key={line} href={c.link} target="_blank" rel="noreferrer" className="font-montserrat text-sm block transition-opacity hover:opacity-60" style={{ color: colors[i] }}>
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="font-montserrat text-sm" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>{line}</p>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center" style={{ background: "hsl(var(--charcoal))" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={LOGO_IMG} alt="Стиль от Наумовой" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-cormorant text-xl text-white">Стиль от Наумовой</span>
        </div>
        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="h-px w-8" style={{ background: "hsl(var(--crimson))" }} />
          <div className="h-px w-5" style={{ background: "hsl(var(--purple))" }} />
          <div className="h-px w-3" style={{ background: "hsl(var(--orange))" }} />
        </div>
        <p className="font-montserrat text-[11px] tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          © 2024 Ателье «Стиль от Наумовой» — Авторский пошив
        </p>
      </footer>
    </div>
  );
}