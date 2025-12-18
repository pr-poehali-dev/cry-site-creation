import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О проекте', icon: 'Info' },
    { id: 'blog', label: 'Блог', icon: 'BookOpen' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const blogPosts = [
    { id: 1, title: 'Почему плакать — это нормально', excerpt: 'Слёзы — это естественная реакция организма на эмоции. Давайте разберёмся, почему не стоит их сдерживать.', emoji: '😢' },
    { id: 2, title: 'Эмоциональная разгрузка через искусство', excerpt: 'Искусство помогает выразить чувства, которые сложно описать словами. Узнайте, как это работает.', emoji: '🎨' },
    { id: 3, title: '5 способов справиться со стрессом', excerpt: 'Практические советы для тех, кто хочет научиться управлять своими эмоциями эффективно.', emoji: '🧘' },
  ];

  const galleryItems = [
    { id: 1, image: 'https://cdn.poehali.dev/projects/878ced70-d4f9-47d5-a8c0-9ae989dbe5cc/files/a98d23e8-40d0-4e1a-8b22-a1c19527be58.jpg', title: 'Эмоции' },
    { id: 2, image: 'https://cdn.poehali.dev/projects/878ced70-d4f9-47d5-a8c0-9ae989dbe5cc/files/c7b6cb8e-9ea2-4175-8065-5550ed539303.jpg', title: 'Спокойствие' },
    { id: 3, image: 'https://cdn.poehali.dev/projects/878ced70-d4f9-47d5-a8c0-9ae989dbe5cc/files/d39c721e-18be-40e8-b61b-fe88ed3e7df9.jpg', title: 'Тепло' },
    { id: 4, color: 'from-green-400 to-emerald-400', emoji: '💚' },
    { id: 5, color: 'from-yellow-400 to-orange-400', emoji: '💛' },
    { id: 6, color: 'from-pink-400 to-rose-400', emoji: '💗' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Поплачь
            </h1>
            <div className="flex gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Поплачь
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
                Платформа для эмоциональной разгрузки
              </p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-110 transition-all">
                Начать сейчас
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: 'Heart', title: 'Безопасное пространство', desc: 'Выражайте эмоции без страха осуждения' },
                { icon: 'Sparkles', title: 'Интерактивный контент', desc: 'Игры, истории и арт для вашего настроения' },
                { icon: 'Users', title: 'Сообщество', desc: 'Тысячи людей, которые вас понимают' },
              ].map((feature, idx) => (
                <Card key={idx} className="hover:shadow-2xl transition-all hover:scale-105 animate-scale-in border-2" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={feature.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="border-2 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-5xl mb-4">О проекте Поплачь</CardTitle>
                <CardDescription className="text-xl">Место, где эмоции имеют значение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  <strong className="text-primary">Поплачь</strong> — это интерактивная платформа, созданная для того, чтобы помочь людям справляться с эмоциями через творчество, общение и игру.
                </p>
                <p>
                  Мы верим, что выражение чувств — это не слабость, а сила. Наша миссия — создать безопасное пространство, где каждый может быть собой.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: 'Target', text: 'Снятие эмоционального напряжения' },
                    { icon: 'Lightbulb', text: 'Развитие эмоционального интеллекта' },
                    { icon: 'MessageCircle', text: 'Поддержка от сообщества' },
                    { icon: 'Smile', text: 'Позитивные изменения в жизни' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
                      <Icon name={item.icon} size={24} className="text-primary" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'blog' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Блог</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <Card key={post.id} className="hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-2 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="text-6xl mb-4">{post.emoji}</div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Галерея эмоций</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`h-64 rounded-2xl overflow-hidden ${item.color ? `bg-gradient-to-br ${item.color}` : ''} flex items-center justify-center text-8xl cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-2xl animate-scale-in relative group`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {item.image ? (
                    <>
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{item.title}</span>
                      </div>
                    </>
                  ) : (
                    item.emoji
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="border-2 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-4xl mb-2">Свяжитесь с нами</CardTitle>
                <CardDescription className="text-lg">Мы всегда рады вашим вопросам и предложениям</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold">Ваше имя</label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-lg p-6"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-lg p-6"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите нам, что у вас на душе..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="text-lg"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Поплачь</h3>
          <p className="text-lg mb-6">Платформа для развлечения с интерактивным контентом</p>
          <div className="flex justify-center gap-6">
            {['Instagram', 'Twitter', 'Facebook'].map((social) => (
              <Button key={social} variant="secondary" size="lg" className="rounded-full">
                {social}
              </Button>
            ))}
          </div>
          <p className="mt-8 text-sm opacity-80">© 2024 Поплачь. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;