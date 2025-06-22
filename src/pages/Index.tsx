import CountdownTimer from "@/components/CountdownTimer";
import InvitationText from "@/components/InvitationText";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with brightness filter */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 contrast-110"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/9a0ee495-6195-4d67-b62f-dbff0662413e.jpg')`,
          }}
        ></div>

        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-grad-purple/30 via-grad-violet/20 to-grad-indigo/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              ВЫПУСКНОЙ
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Рады пригласить вас на торжественное мероприятие
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-grad-purple via-grad-violet to-grad-pink"></div>

        {/* Purple overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-grad-dark/30 via-transparent to-grad-light/20"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-8">
          <div className="w-full max-w-4xl animate-fade-in">
            <InvitationText />
            <CountdownTimer />
          </div>
        </div>

        {/* Purple decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-grad-light/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-grad-violet/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-grad-pink/35 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* School Location Map Section */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-grad-violet to-grad-purple">
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-16">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-montserrat">
              Место проведения
            </h2>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Средняя общеобразовательная школа
                </h3>
                <p className="text-xl text-white/90">
                  с. Авдеевка, Кировского района
                </p>
              </div>

              {/* Map placeholder with location info */}
              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <div className="aspect-video bg-gradient-to-br from-grad-light/20 to-grad-purple/20 rounded-xl flex items-center justify-center border border-white/20">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="text-xl font-semibold mb-2">с. Авдеевка</p>
                    <p className="text-lg text-white/80">Кировский район</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    🕐 Время проведения
                  </h4>
                  <p className="text-white/90">28 июня 2025 года в 16:00</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    🎓 Событие
                  </h4>
                  <p className="text-white/90">Торжественный выпускной вечер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
