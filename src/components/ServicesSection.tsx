import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Flame",
      title: "Пожарная безопасность",
      description:
        "Монтаж, обслуживание и ремонт систем пожарной сигнализации, дымоудаления и оповещения",
      features: [
        "Пожарная сигнализация",
        "Системы дымоудаления",
        "Оповещение о пожаре",
        "Автоматическое пожаротушение",
      ],
    },
    {
      icon: "KeyRound",
      title: "Контроль доступа",
      description:
        "Современные системы управления доступом для защиты территории и помещений",
      features: [
        "Электронные замки",
        "Карточные системы",
        "Биометрические системы",
        "Турникеты и шлюзы",
      ],
    },
    {
      icon: "Camera",
      title: "Видеонаблюдение",
      description:
        "Профессиональные системы охранного видеонаблюдения с удаленным мониторингом",
      features: [
        "IP-камеры высокого разрешения",
        "Системы записи",
        "Удаленный просмотр",
        "Аналитические функции",
      ],
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Полный спектр работ по системам безопасности от проектирования до
            технического обслуживания
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-slate-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
