import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, GraduationCap, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <GraduationCap /> Narykov English
        </div>
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Методика</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Игры</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Стоимость</a>
        </nav>
      </header>

      <main>
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Английский — это не зубрежка, а игра
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Интерактивное обучение через PowerPoint и Genially с Нарыковым Станиславом.
              Погрузитесь в геймифицированный мир английского языка.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                Бесплатный пробный урок (30 мин)
              </button>
              <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-blue-200 transition-all">
                Как проходят игры?
              </button>
            </div>
          </motion.div>
        </section>

        {/* Game Showcase Section */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold mb-6">Результаты, которые видно сразу</h2>
                <p className="text-slate-400 text-lg mb-8">
                  Родители часто спрашивают: «Как заставить ребенка учиться?». Мой ответ — никак. 
                  Его не нужно заставлять играть. На моих уроках английский — это награда, а не повинность.
                </p>
                <div className="space-y-6">
                  {[
                    { t: 'Для детей 7-12 лет', d: 'Погружение в миры Harry Potter, Minecraft и Roblox.' },
                    { t: 'Снятие барьера', d: 'Ребенок начинает говорить, потому что это нужно для прохождения квеста.' },
                    { t: 'Отчеты родителям', d: 'Вы видите прогресс через успехи в игре.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.t}</h4>
                        <p className="text-sm text-slate-400">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                whileHover={{ rotateY: 5, rotateX: -5 }}
                style={{ perspective: 1000 }}
              >
                <div className="bg-blue-600/20 absolute -inset-4 blur-3xl rounded-full" />
                <img 
                  src="/game-preview.jpg" 
                  alt="Game Preview" 
                  className="rounded-2xl shadow-2xl border border-slate-700 relative z-10"
                />
                {/* Floaties */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 z-20 hidden md:block"
                >
                  <Sparkles className="text-yellow-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              { title: 'Геймификация', icon: <Gamepad2 />, text: 'Уроки в формате квестов и RPG на базе PowerPoint.' },
              { title: 'Интерактив', icon: <Sparkles />, text: 'Использование платформы Genially для полного погружения.' },
              { title: 'Результат', icon: <GraduationCap />, text: 'Снимаем языковой барьер через азарт и интерес.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
