import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Опыт работы более 15 лет",
      description: "Выполнили более 500 проектов различной сложности",
    },
    {
      icon: "Users",
      title: "Квалифицированные специалисты",
      description: "Команда сертифицированных инженеров и техников",
    },
    {
      icon: "Clock",
      title: "Круглосуточная поддержка",
      description: "Техническая поддержка и аварийные выезды 24/7",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ и оборудование",
    },
    {
      icon: "Wrench",
      title: "Полный цикл обслуживания",
      description: "От проектирования до технического обслуживания",
    },
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description: "Решения под специфику каждого объекта",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Надежный партнер в области систем безопасности с безупречной
            репутацией
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon
                  name={advantage.icon}
                  size={24}
                  className="text-orange-600"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
