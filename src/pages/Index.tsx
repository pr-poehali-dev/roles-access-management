import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const categories = ['ТОВАРЫ', 'УСЛУГИ', 'КУРСЫ', 'ПОЛЕЗНОЕ'];

const products = [
  {
    id: 1,
    title: 'Telegram-бот для продаж',
    price: 15000,
    category: 'ТОВАРЫ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
  {
    id: 2,
    title: 'Шаблон интернет-магазина WordPress',
    price: 8500,
    category: 'ТОВАРЫ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
  {
    id: 3,
    title: 'Разработка сайта под ключ',
    price: 45000,
    category: 'УСЛУГИ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
  {
    id: 4,
    title: 'Курс по Python разработке',
    price: 12000,
    category: 'КУРСЫ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
  {
    id: 5,
    title: 'Мобильное приложение для бизнеса',
    price: 35000,
    category: 'ТОВАРЫ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
  {
    id: 6,
    title: 'Гайд по продвижению в Instagram',
    price: 2500,
    category: 'ПОЛЕЗНОЕ',
    preview: 'https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg',
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <header className="backdrop-blur-md bg-black/30 sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="w-32 h-12 flex items-center justify-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl">
              <span className="text-white/50 text-xs">LOGO</span>
            </div>

            <nav className="flex items-center gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? 'all' : category)}
                  className={`glass-nav px-6 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>

            <Button className="glass-button text-white font-medium">
              <Icon name="User" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[70vh] flex items-center justify-center py-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="backdrop-blur-md bg-black/20 rounded-3xl p-12 border border-white/10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Цифровой маркетплейс
              <br />
              <span className="text-gray-300">для IT-профессионалов</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Покупайте и продавайте готовые IT-решения, цифровые товары, услуги и обучающие курсы.
              Всё для развития вашего бизнеса в одном месте.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="glass-button text-white font-semibold px-8 py-6 text-lg">
                Начать покупки
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button className="glass-button text-white font-semibold px-8 py-6 text-lg">
                Стать продавцом
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-white backdrop-blur-sm bg-black/20 px-6 py-3 rounded-xl border border-white/10">
            {selectedCategory === 'all' ? 'Все предложения' : selectedCategory}
          </h2>
          <div className="backdrop-blur-sm bg-black/20 px-6 py-3 rounded-xl border border-white/10 text-gray-200">
            Найдено: <span className="text-white font-semibold">{filteredProducts.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.preview}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-gray-200 transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between gap-3">
                  <button className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                    Подробнее
                    <Icon name="ChevronRight" size={16} />
                  </button>

                  <Button className="glass-button text-white text-sm font-semibold">
                    {product.price.toLocaleString('ru-RU')} ₽
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="backdrop-blur-md bg-black/30 border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-4">ITMarket</h3>
              <p className="text-sm text-gray-400">
                Маркетплейс цифровых товаров и IT-решений
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Блог</li>
                <li className="hover:text-white cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-white cursor-pointer transition-colors">Поддержка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Email</li>
                <li className="hover:text-white cursor-pointer transition-colors">Telegram</li>
                <li className="hover:text-white cursor-pointer transition-colors">VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
            <p>© 2026 ITMarket. Все права защищены.</p>
            <p className="mt-2">
              Мы используем файлы cookie и рекомендательные технологии для улучшения работы сайта
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
