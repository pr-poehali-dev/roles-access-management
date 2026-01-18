import { useState } from 'react';
import { Input } from '@/components/ui/input';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <header className="border-b border-neon/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-heading font-bold text-neon-green">
              IT<span className="text-white">Market</span>
            </div>

            <nav className="flex items-center gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? 'all' : category)}
                  className={`text-sm font-medium transition-colors relative group ${
                    selectedCategory === category ? 'text-neon-green' : 'text-gray-300 hover:text-neon-green'
                  }`}
                >
                  {category}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-neon-green transition-all duration-300 ${
                      selectedCategory === category ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-card/50 border-neon/30 focus:border-neon-green focus:ring-neon-green"
                />
              </div>
              <Button
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black neon-glow"
              >
                <Icon name="User" size={18} />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/9aeb176a-2aae-47d8-809e-0f5baa1a06c9/files/d0e92176-031d-45e2-8ac9-3b76fa3923a3.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Цифровой маркетплейс
            <br />
            <span className="text-neon-green">для IT-профессионалов</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покупайте и продавайте готовые IT-решения, цифровые товары, услуги и обучающие курсы. 
            Всё для развития вашего бизнеса в одном месте.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-neon-green text-black hover:bg-neon-green/90 font-semibold neon-glow-strong px-8 py-6 text-lg">
              Начать покупки
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-6 text-lg"
            >
              Стать продавцом
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card/30 backdrop-blur-sm border-y border-neon/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-neon-green text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Товаров и услуг</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-neon-green text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Проверенных продавцов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-neon-green text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-white">
            {selectedCategory === 'all' ? 'Все предложения' : selectedCategory}
          </h2>
          <div className="text-gray-400">
            Найдено: <span className="text-neon-green font-semibold">{filteredProducts.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-neon/20 rounded-lg overflow-hidden hover:border-neon-green transition-all hover-scale animate-fade-in"
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
                <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-neon-green transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-neon-green hover:bg-transparent p-0"
                  >
                    Подробнее
                    <Icon name="ChevronRight" size={16} />
                  </Button>

                  <Button className="bg-neon-green/20 text-neon-green hover:bg-neon-green hover:text-black border border-neon-green/50 font-semibold">
                    {product.price.toLocaleString('ru-RU')} ₽
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-neon/20 bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-neon-green text-xl mb-4">ITMarket</h3>
              <p className="text-sm text-gray-400">
                Маркетплейс цифровых товаров и IT-решений
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-neon-green cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Блог</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-neon-green cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Поддержка</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-neon-green cursor-pointer transition-colors">Email</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Telegram</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neon/20 pt-6 text-center text-sm text-gray-400">
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
