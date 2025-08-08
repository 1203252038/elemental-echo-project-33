import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BonusContentProps {
  title: string;
}

const BonusContent = ({ title }: BonusContentProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            {title}
          </h1>
          <div className="text-center">
            <p className="text-xl text-muted-foreground">
              To be constructed
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BonusContent;