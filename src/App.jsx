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
                Начать играть
              </button>
              <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-blue-200 transition-all">
                О методике
              </button>
            </div>
          </motion.div>
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
