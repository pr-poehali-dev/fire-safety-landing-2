import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-amber-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Профессиональные системы безопасности для вашего бизнеса
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Комплексное техническое обслуживание, монтаж и пусконаладочные
            работы систем пожарной безопасности, контроля доступа и охранного
            видеонаблюдения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
            >
              <Icon name="Phone" size={20} />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Icon name="FileText" size={20} />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
