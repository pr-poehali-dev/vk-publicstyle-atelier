import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/00b90c6f-4a3f-4a1e-8f89-4d58f7471801.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/af9db6b1-d13b-4a5c-8229-49a632b4f019.jpg";
const WORKSHOP_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/571f89b1-beaf-44f1-90dc-8167bdb61031.jpg";
const GALLERY_MAIN_IMG = "https://cdn.poehali.dev/projects/0926fab3-65ec-4473-ab82-a4718cc6daac/files/17d50333-0e47-4dcc-971b-8a5320dcd39e.jpg";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Заявка", href: "#order" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: "Scissors",
    title: "Индивидуальный пошив",
    desc: "Создаём вещи точно по вашим меркам — от повседневных образов до вечерних нарядов.",
    price: "от 3 000 ₽",
  },
  {
    icon: "Sparkles",
    title: "Корректировка изделия",
    desc: "Подгонка платьев, брюк, пальто и другой одежды под вашу фигуру.",
    price: "от 800 ₽",
  },
  {
    icon: "Heart",
    title: "Свадебные наряды",
    desc: "Платья мечты, создаваемые с любовью к деталям и вашему образу.",
    price: "от 15 000 ₽",
  },
  {
    icon: "Shirt",
    title: "Пошив по фото/эскизу",
    desc: "Найдите понравившийся образ в интернете — воплотим его в реальность.",
    price: "от 5 000 ₽",
  },
  {
    icon: "Star",
    title: "Подбор стиля",
    desc: "Поможем выбрать модели и фасоны, идеально подходящие именно вам.",
    price: "от 1 500 ₽",
  },
  {
    icon: "Gift",
    title: "Корпоративные заказы",
    desc: "Пошив форменной и представительской одежды для компаний.",
    price: "по запросу",
  },
];

const galleryItems = [
  { img: GALLERY_MAIN_IMG, title: "Вечернее платье", cat: "Вечерние" },
  { img: ABOUT_IMG, title: "Летний образ", cat: "Повседневные" },
  { img: WORKSHOP_IMG, title: "Рабочий процесс", cat: "Ателье" },
  { img: HERO_IMG, title: "Коллекция 2024", cat: "Коллекции" },
  { img: GALLERY_MAIN_IMG, title: "Свадебное платье", cat: "Свадебные" },
  { img: ABOUT_IMG, title: "Деловой образ", cat: "Деловые" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [payForm, setPayForm] = useState({ name: "", amount: "", description: "" });
  const [orderSent, setOrderSent] = useState(false);
  const [paySent, setPaySent] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--ivory))" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b" style={{ borderColor: "hsl(var(--champagne))" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div onClick={() => scrollTo("#hero")} className="cursor-pointer">
            <div className="font-cormorant text-2xl font-semibold tracking-widest" style={{ color: "hsl(var(--rose-dark))" }}>
              НАУМОВА
            </div>
            <div className="font-montserrat text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(var(--rose-medium))" }}>
              Ателье
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-montserrat text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-60"
                style={{ color: "hsl(var(--charcoal))" }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "hsl(var(--charcoal))" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "hsl(var(--champagne))" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-montserrat text-xs tracking-[0.15em] uppercase text-left transition-colors"
                style={{ color: "hsl(var(--charcoal))" }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255,245,240,0.55) 0%, rgba(255,240,235,0.78) 100%)" }} />
        <div className="relative text-center px-6 animate-fade-in">
          <div className="font-montserrat text-xs tracking-[0.5em] uppercase mb-6 animate-fade-in-delay" style={{ color: "hsl(var(--rose-medium))" }}>
            Онлайн-ателье
          </div>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light mb-4 leading-tight" style={{ color: "hsl(var(--charcoal))" }}>
            Ателье<br />
            <em className="font-light italic" style={{ color: "hsl(var(--rose-dark))" }}>Наумовой</em>
          </h1>
          <div className="section-divider animate-fade-in-delay" />
          <p className="font-montserrat text-sm md:text-base font-light tracking-wide max-w-md mx-auto mb-10 animate-fade-in-delay-2" style={{ color: "hsl(var(--charcoal))" }}>
            Создаём одежду, в которой вы чувствуете себя собой — элегантно, удобно, с душой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => scrollTo("#order")}
              className="font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all hover-lift"
              style={{ background: "hsl(var(--rose-dark))", color: "hsl(var(--ivory))" }}
            >
              Оставить заявку
            </button>
            <button
              onClick={() => scrollTo("#gallery")}
              className="font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-4 border transition-all hover-lift"
              style={{ borderColor: "hsl(var(--rose-dark))", color: "hsl(var(--rose-dark))", background: "transparent" }}
            >
              Галерея моделей
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "hsl(var(--rose-medium))" }} />
        </div>
      </section>

      {/* О НАС */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-medium))" }}>
                О нас
              </div>
              <h2 className="font-cormorant text-5xl font-light mb-6 leading-tight" style={{ color: "hsl(var(--charcoal))" }}>
                Мастерство<br /><em className="italic" style={{ color: "hsl(var(--rose-dark))" }}>в каждой детали</em>
              </h2>
              <div className="section-divider" style={{ margin: "0 0 2rem" }} />
              <p className="font-montserrat text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
                Меня зовут Анастасия Наумова. Я занимаюсь пошивом и стилем уже более 10 лет. Моё ателье — это место, где рождается ваш уникальный образ.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
                Каждое изделие создаётся с вниманием к вашей фигуре, пожеланиям и индивидуальности. Работаю как с классическими моделями, так и с авторскими дизайнерскими решениями.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[["10+", "лет опыта"], ["500+", "клиентов"], ["1000+", "изделий"]].map(([num, lab]) => (
                  <div key={lab} className="text-center">
                    <div className="font-cormorant text-4xl font-light" style={{ color: "hsl(var(--rose-dark))" }}>{num}</div>
                    <div className="font-montserrat text-xs tracking-wider uppercase mt-1" style={{ color: "hsl(var(--rose-medium))" }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Мастер ателье Наумовой"
                className="w-full h-[500px] object-cover"
                style={{ filter: "sepia(10%) brightness(1.03)" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 hidden md:block"
                style={{ background: "hsl(var(--blush))", opacity: 0.5, zIndex: -1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24 px-6" style={{ background: "hsl(var(--ivory))" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-medium))" }}>
              Что мы делаем
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-4" style={{ color: "hsl(var(--charcoal))" }}>
              Услуги ателье
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 hover-lift border"
                style={{ borderColor: "hsl(var(--champagne))" }}
              >
                <div className="mb-4">
                  <Icon name={s.icon} fallback="Star" size={28} style={{ color: "hsl(var(--rose-dark))" }} />
                </div>
                <h3 className="font-cormorant text-2xl font-medium mb-3" style={{ color: "hsl(var(--charcoal))" }}>{s.title}</h3>
                <p className="font-montserrat text-xs leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>{s.desc}</p>
                <div className="font-cormorant text-xl italic" style={{ color: "hsl(var(--rose-dark))" }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-medium))" }}>
              Наши работы
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-4" style={{ color: "hsl(var(--charcoal))" }}>
              Галерея моделей
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden hover-lift"
                style={{ aspectRatio: i === 0 || i === 5 ? "3/4" : "1/1" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(80,30,40,0.7) 0%, transparent 60%)" }}
                >
                  <div>
                    <div className="font-cormorant text-lg text-white font-light">{item.title}</div>
                    <div className="font-montserrat text-xs tracking-widest text-white/70 uppercase">{item.cat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://vk.com/publicstyle_ot_naumovoy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 pb-1 border-b transition-opacity hover:opacity-60"
              style={{ borderColor: "hsl(var(--rose-dark))", color: "hsl(var(--rose-dark))" }}
            >
              Смотреть все работы во ВКонтакте
              <Icon name="ExternalLink" size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАЯВКИ */}
      <section id="order" className="py-24 px-6" style={{ background: "hsl(var(--blush))" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-dark))" }}>
              Записаться
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-4" style={{ color: "hsl(var(--charcoal))" }}>
              Оставьте заявку
            </h2>
            <div className="section-divider" />
            <p className="font-montserrat text-xs leading-relaxed" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
              Заполните форму, и я свяжусь с вами в ближайшее время для уточнения деталей
            </p>
          </div>

          {orderSent ? (
            <div className="text-center bg-white p-16">
              <Icon name="CheckCircle" size={48} style={{ color: "hsl(var(--rose-dark))", margin: "0 auto 1rem" }} />
              <h3 className="font-cormorant text-3xl mb-3" style={{ color: "hsl(var(--charcoal))" }}>Заявка принята!</h3>
              <p className="font-montserrat text-xs" style={{ color: "hsl(var(--rose-medium))", fontWeight: 300 }}>
                Анастасия свяжется с вами в течение 24 часов
              </p>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Ваше имя *</label>
                  <input
                    type="text"
                    value={orderForm.name}
                    onChange={e => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Телефон *</label>
                  <input
                    type="tel"
                    value={orderForm.phone}
                    onChange={e => setOrderForm({ ...orderForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Услуга</label>
                  <select
                    value={orderForm.service}
                    onChange={e => setOrderForm({ ...orderForm, service: e.target.value })}
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  >
                    <option value="">Выберите услугу</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Комментарий</label>
                  <textarea
                    value={orderForm.comment}
                    onChange={e => setOrderForm({ ...orderForm, comment: e.target.value })}
                    placeholder="Расскажите о вашем пожелании..."
                    rows={3}
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none resize-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <button
                  onClick={() => { if (orderForm.name && orderForm.phone) setOrderSent(true); }}
                  className="w-full py-4 font-montserrat text-xs tracking-[0.25em] uppercase transition-all hover-lift mt-4"
                  style={{ background: "hsl(var(--rose-dark))", color: "hsl(var(--ivory))" }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ОПЛАТА */}
      <section id="payment" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-medium))" }}>
              Оплата
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-4" style={{ color: "hsl(var(--charcoal))" }}>
              Внести оплату
            </h2>
            <div className="section-divider" />
            <p className="font-montserrat text-xs leading-relaxed" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
              Оплатите аванс или полную стоимость заказа онлайн — безопасно и быстро
            </p>
          </div>

          {paySent ? (
            <div className="text-center border p-16" style={{ borderColor: "hsl(var(--champagne))" }}>
              <Icon name="CheckCircle" size={48} style={{ color: "hsl(var(--rose-dark))", margin: "0 auto 1rem" }} />
              <h3 className="font-cormorant text-3xl mb-3" style={{ color: "hsl(var(--charcoal))" }}>Платёж оформлен!</h3>
              <p className="font-montserrat text-xs" style={{ color: "hsl(var(--rose-medium))", fontWeight: 300 }}>
                Квитанция будет отправлена на ваш номер
              </p>
            </div>
          ) : (
            <div className="border p-8 md:p-12" style={{ borderColor: "hsl(var(--champagne))" }}>
              <div className="space-y-6">
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Ваше имя *</label>
                  <input
                    type="text"
                    value={payForm.name}
                    onChange={e => setPayForm({ ...payForm, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Сумма (₽) *</label>
                  <input
                    type="number"
                    value={payForm.amount}
                    onChange={e => setPayForm({ ...payForm, amount: e.target.value })}
                    placeholder="0"
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--rose-medium))" }}>Назначение платежа</label>
                  <input
                    type="text"
                    value={payForm.description}
                    onChange={e => setPayForm({ ...payForm, description: e.target.value })}
                    placeholder="Например: аванс за вечернее платье"
                    className="w-full border-b bg-transparent py-3 font-montserrat text-sm outline-none"
                    style={{ borderColor: "hsl(var(--champagne))", color: "hsl(var(--charcoal))", fontWeight: 300 }}
                  />
                </div>
                <div className="p-4 flex items-center gap-3" style={{ background: "hsl(var(--ivory))" }}>
                  <Icon name="Shield" size={18} style={{ color: "hsl(var(--rose-medium))" }} />
                  <span className="font-montserrat text-xs" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>
                    Платёж защищён. Данные карты не сохраняются.
                  </span>
                </div>
                <button
                  onClick={() => { if (payForm.name && payForm.amount) setPaySent(true); }}
                  className="w-full py-4 font-montserrat text-xs tracking-[0.25em] uppercase transition-all hover-lift"
                  style={{ background: "hsl(var(--rose-dark))", color: "hsl(var(--ivory))" }}
                >
                  Перейти к оплате
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 px-6" style={{ background: "hsl(var(--ivory))" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--rose-medium))" }}>
              Будем на связи
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-4" style={{ color: "hsl(var(--charcoal))" }}>
              Контакты
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (XXX) XXX-XX-XX"],
                note: "Пн–Сб, 10:00–19:00",
                link: null,
              },
              {
                icon: "MessageCircle",
                title: "ВКонтакте",
                lines: ["@publicstyle_ot_naumovoy"],
                note: "Отвечаем быстро",
                link: "https://vk.com/publicstyle_ot_naumovoy",
              },
              {
                icon: "MapPin",
                title: "Формат работы",
                lines: ["Онлайн-консультации"],
                note: "Принимаем заказы из любого города",
                link: null,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white p-8 text-center hover-lift border"
                style={{ borderColor: "hsl(var(--champagne))" }}
              >
                <div className="mb-4 flex justify-center">
                  <Icon name={c.icon} fallback="Star" size={28} style={{ color: "hsl(var(--rose-dark))" }} />
                </div>
                <h3 className="font-cormorant text-2xl mb-3" style={{ color: "hsl(var(--charcoal))" }}>{c.title}</h3>
                {c.lines.map((line) =>
                  c.link ? (
                    <a key={line} href={c.link} target="_blank" rel="noopener noreferrer"
                      className="font-montserrat text-sm block transition-opacity hover:opacity-60"
                      style={{ color: "hsl(var(--rose-dark))", fontWeight: 300 }}>
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="font-montserrat text-sm" style={{ color: "hsl(var(--charcoal))", fontWeight: 300 }}>{line}</p>
                  )
                )}
                <p className="font-montserrat text-xs mt-2" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>{c.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://vk.com/publicstyle_ot_naumovoy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all hover-lift"
              style={{ background: "#4a76a8", color: "white" }}
            >
              <Icon name="ExternalLink" size={16} />
              Перейти в сообщество ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t" style={{ background: "hsl(var(--charcoal))", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-cormorant text-xl tracking-widest" style={{ color: "hsl(var(--ivory))" }}>НАУМОВА</div>
            <div className="font-montserrat text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(var(--rose-medium))" }}>Ателье</div>
          </div>
          <div className="font-montserrat text-xs text-center" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
            © 2024 Ателье Наумовой. Все права защищены.
          </div>
          <a
            href="https://vk.com/publicstyle_ot_naumovoy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
            style={{ color: "hsl(var(--champagne))" }}
          >
            ВКонтакте
          </a>
        </div>
      </footer>
    </div>
  );
}