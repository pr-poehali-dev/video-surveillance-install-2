import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {

  const services = [
    {
      icon: "Video",
      title: "Установка видеонаблюдения",
      description: "Проектирование и монтаж систем любой сложности для офисов, складов и частных объектов"
    },
    {
      icon: "Settings",
      title: "Настройка оборудования",
      description: "Профессиональная настройка камер, видеорегистраторов и удаленного доступа"
    },
    {
      icon: "Shield",
      title: "Техническое обслуживание",
      description: "Регулярное ТО, диагностика и круглосуточная поддержка вашей системы безопасности"
    },
    {
      icon: "Smartphone",
      title: "Удаленный мониторинг",
      description: "Доступ к видео с любого устройства через мобильное приложение или веб-интерфейс"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/76910aee-9bb0-4138-bc10-b3211fccd320/files/7aa1669e-cf22-4e4d-8152-1eb74a2e3e91.jpg",
      title: "Торговый центр",
      description: "24 камеры, онлайн-мониторинг"
    },
    {
      image: "https://cdn.poehali.dev/projects/76910aee-9bb0-4138-bc10-b3211fccd320/files/dcdfe6e1-1bba-438e-8e37-85c5fb4c4a56.jpg",
      title: "Офисное здание",
      description: "16 камер, контроль доступа"
    },
    {
      image: "https://cdn.poehali.dev/projects/76910aee-9bb0-4138-bc10-b3211fccd320/files/69bfbb32-83a3-466a-94fd-a4dced907419.jpg",
      title: "Складской комплекс",
      description: "32 камеры, периметр охраны"
    }
  ];



  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 opacity-10">
        <img 
          src="https://cdn.poehali.dev/projects/76910aee-9bb0-4138-bc10-b3211fccd320/files/7611ea9c-513d-47e7-8757-2f98e05d60c7.jpg" 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg rounded-full animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-2 rounded-2xl animate-float group-hover:scale-110 transition-transform duration-300">
                <Icon name="Camera" size={24} className="text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Смайл ТВ
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
            <a href="tel:+79196208360" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-secondary transition-colors">
              <Icon name="Phone" size={28} />
              <span className="hidden lg:inline">+7 919-620-83-60</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Видеонаблюдение под ключ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная установка систем безопасности для вашего бизнеса и дома. 
              Современное оборудование, быстрый монтаж, гарантия качества.
            </p>
            <div className="mb-8 animate-scale-in">
              <a href="tel:+79196208360" className="inline-flex items-center gap-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
                <Icon name="Phone" size={48} className="text-primary animate-pulse-glow" />
                +7 919-620-83-60
              </a>
              <p className="text-lg text-muted-foreground mt-3">Звоните прямо сейчас!</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 group">
                <a href="#contact">
                  Получить консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="#portfolio">
                  Посмотреть объекты
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-30"></div>
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-muted-foreground">Объектов</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">15</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-muted-foreground">Поддержка</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-muted-foreground">Гарантия</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Полный спектр услуг по видеонаблюдению
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Наши объекты
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Реализованные проекты с установленным видеонаблюдением
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 animate-scale-in border-0"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              О компании
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Смайл ТВ</span> — профессиональная компания по установке систем видеонаблюдения 
                с 15-летним опытом работы на рынке безопасности.
              </p>
              <p>
                Мы специализируемся на комплексных решениях для бизнеса и частных клиентов: 
                от проектирования и монтажа до настройки удаленного доступа и технической поддержки. 
                Работаем только с сертифицированным оборудованием ведущих производителей.
              </p>
              <p>
                Наша команда — это сертифицированные инженеры, которые реализовали более 500 объектов: 
                торговые центры, офисные здания, складские комплексы, частные дома и коттеджи.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <Icon name="Award" size={32} className="text-primary" />
                <span className="text-lg">Сертификаты качества</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" size={32} className="text-secondary" />
                <span className="text-lg">Опытная команда</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={32} className="text-accent" />
                <span className="text-lg">Быстрый монтаж</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами для консультации
            </p>
          </div>
          <Card className="bg-card/50 backdrop-blur border-primary/20 animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-center gap-8 flex-wrap mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 919-620-83-60</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <span>info@stv16.ru</span>
                </div>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <a href="https://wa.me/79196208360" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-[#0088cc] hover:bg-[#0077b5] text-white">
                  <a href="https://t.me/+79196208360" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Icon name="Send" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <a href="https://vk.com/im?sel=-your_vk_id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} />
                    VK
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg rounded-full animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-2 rounded-2xl animate-float">
                <Icon name="Camera" size={20} className="text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Смайл ТВ
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Смайл ТВ. Все права защищены.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}