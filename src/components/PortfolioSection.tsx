import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Торговый центр «Галерея»",
      description:
        "Комплексная система безопасности для торгового центра площадью 15 000 м²",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      tags: ["Пожарная безопасность", "Видеонаблюдение", "Контроль доступа"],
      details: "150 камер, 12 зон контроля доступа, полная интеграция систем",
    },
    {
      title: "Офисный комплекс «Технопарк»",
      description:
        "Современная система безопасности для бизнес-центра класса А",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      tags: ["Биометрия", "IP-камеры", "Интеграция"],
      details:
        "Биометрический контроль доступа, 80 IP-камер 4K, центральная диспетчерская",
    },
    {
      title: "Производственный комплекс",
      description: "Система безопасности для промышленного предприятия",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop",
      tags: ["Промышленная безопасность", "Периметр", "Контроль"],
      details:
        "Защита периметра, система пожаротушения, контроль технологических процессов",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Реализованные проекты
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Примеры успешно выполненных проектов по системам безопасности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
