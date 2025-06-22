const InvitationText = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-light text-white mb-6 font-montserrat">
        Выпускной вечер
      </h1>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
        <p className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed">
          Дорогие выпускники и гости!
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          Приглашаем вас на торжественный выпускной вечер
        </p>
        <div className="text-white/95 space-y-3">
          <p className="text-lg md:text-xl font-medium">
            📅 28 июня 2025 года в 16:00
          </p>
          <p className="text-base md:text-lg">
            📍 Средняя общеобразовательная школа
            <br />
            с. Авдеевка Кировского района
          </p>
        </div>
      </div>
      <p className="text-lg text-white/80 italic">
        Этот день станет незабываемым началом новой главы в вашей жизни! 🎓✨
      </p>
    </div>
  );
};

export default InvitationText;
