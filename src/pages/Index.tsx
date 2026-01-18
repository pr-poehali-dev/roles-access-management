import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'bots', name: 'Telegram-боты', icon: 'Bot' },
  { id: 'templates', name: 'Шаблоны сайтов', icon: 'Layout' },
  { id: 'scripts', name: 'Скрипты и приложения', icon: 'Code' },
  { id: 'games', name: 'Готовые игры', icon: 'Gamepad2' },
  { id: 'plugins', name: 'Плагины CMS', icon: 'Puzzle' },
  { id: 'mobile', name: 'Мобильные приложения', icon: 'Smartphone' },
  { id: 'business', name: 'Готовый IT-бизнес', icon: 'Briefcase' },
  { id: 'freelance', name: 'Фриланс-услуги', icon: 'Users' },
];

const products = [
  {
    id: 1,
    title: 'Telegram-бот для продаж',
    price: 15000,
    rating: 4.8,
    reviews: 124,
    category: 'bots',
    seller: 'TechStudio',
    image: '🤖',
    badges: ['urgent', 'featured'],
  },
  {
    id: 2,
    title: 'Шаблон интернет-магазина WordPress',
    price: 8500,
    rating: 4.9,
    reviews: 89,
    category: 'templates',
    seller: 'WebMasters',
    image: '🛒',
    badges: ['partner'],
  },
  {
    id: 3,
    title: 'CRM-система для малого бизнеса',
    price: 25000,
    rating: 4.7,
    reviews: 56,
    category: 'scripts',
    seller: 'DevPro',
    image: '💼',
    badges: ['featured'],
  },
  {
    id: 4,
    title: 'Мобильное приложение для доставки',
    price: 45000,
    rating: 4.9,
    reviews: 203,
    category: 'mobile',
    seller: 'AppFactory',
    image: '📱',
    badges: ['urgent', 'partner'],
  },
  {
    id: 5,
    title: 'Плагин оплаты для WooCommerce',
    price: 3500,
    rating: 4.6,
    reviews: 312,
    category: 'plugins',
    seller: 'PluginHub',
    image: '💳',
    badges: [],
  },
  {
    id: 6,
    title: '2D платформер Unity',
    price: 12000,
    rating: 4.8,
    reviews: 78,
    category: 'games',
    seller: 'GameDevStudio',
    image: '🎮',
    badges: ['featured'],
  },
];

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('Москва');

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <header className="border-b border-neon/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-heading font-bold text-neon-green">
                IT<span className="text-white">Market</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[180px] border-neon/30 focus:border-neon-green focus:ring-neon-green">
                  <Icon name="MapPin" size={16} className="text-neon-green" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-neon/30">
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black neon-glow">
                <Icon name="User" size={18} />
                Войти
              </Button>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm mb-4">
            {['Главная', 'Магазины', 'Блог', 'Категории'].map((item) => (
              <button
                key={item}
                className="text-gray-300 hover:text-neon-green transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск товаров, продавцов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-neon/30 focus:border-neon-green focus:ring-neon-green"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-heading font-bold mb-6 text-white">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                selectedCategory === 'all'
                  ? 'border-neon-green bg-neon-green/10 neon-glow'
                  : 'border-neon/30 hover:border-neon-green'
              }`}
            >
              <div className="text-3xl mb-2">📦</div>
              <div className="text-xs font-medium text-white">Все</div>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                  selectedCategory === category.id
                    ? 'border-neon-green bg-neon-green/10 neon-glow'
                    : 'border-neon/30 hover:border-neon-green'
                }`}
              >
                <Icon name={category.icon as any} size={32} className="mx-auto mb-2 text-neon-green" />
                <div className="text-xs font-medium text-white">{category.name}</div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">
              Популярные товары
              {filteredProducts.length > 0 && (
                <span className="text-neon-green ml-2">({filteredProducts.length})</span>
              )}
            </h2>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[200px] border-neon/30 focus:border-neon-green">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-neon/30">
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="date">По дате</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-card border-neon/20 hover:border-neon-green transition-all group hover-scale overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-6xl">{product.image}</div>
                    <div className="flex flex-col gap-1">
                      {product.badges.includes('urgent') && (
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                          🔥 Срочно
                        </Badge>
                      )}
                      {product.badges.includes('featured') && (
                        <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50">
                          Спецразмещение
                        </Badge>
                      )}
                      {product.badges.includes('partner') && (
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                          Партнёрское
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-neon-green transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Продавец: {product.seller}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} отзывов)</span>
                  </div>
                  <div className="text-3xl font-bold text-neon-green mb-4">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90 font-semibold neon-glow-strong">
                    <Icon name="ShoppingCart" size={18} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-neon/20 bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-neon-green mb-4">ITMarket</h3>
              <p className="text-sm text-muted-foreground">
                Маркетплейс цифровых товаров и IT-решений
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-neon-green cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Блог</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-neon-green cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Поддержка</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-neon-green cursor-pointer transition-colors">Email</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">Telegram</li>
                <li className="hover:text-neon-green cursor-pointer transition-colors">VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neon/20 pt-6 text-center text-sm text-muted-foreground">
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
