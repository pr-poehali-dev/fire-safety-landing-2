import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 18:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@security-systems.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Профсоюзная, д. 125",
      description: "Приезжайте к нам в офис",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Аварийная служба 24/7",
    },
  ];

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Получите бесплатную консультацию по системам безопасности для вашего
            объекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={contact.icon} size={24} className="text-white" />
                </div>
                <CardTitle className="text-lg text-white">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-white mb-2">{contact.value}</p>
                <p className="text-sm text-slate-400">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-700 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-slate-300 mb-6">
            Оставьте заявку, и наш специалист свяжется с вами для бесплатной
            консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Icon name="Phone" size={20} />
              Заказать звонок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-600"
            >
              <Icon name="MessageSquare" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
