import CountdownTimer from "@/components/CountdownTimer";
import InvitationText from "@/components/InvitationText";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/9a0ee495-6195-4d67-b62f-dbff0662413e.jpg')`,
          }}
        ></div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

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
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-purple via-soft-pink to-soft-blue"></div>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-8">
          <div className="w-full max-w-4xl animate-fade-in">
            <InvitationText />
            <CountdownTimer />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/20 rounded-full blur-md animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Index;
