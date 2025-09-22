import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import churchHeroBg from "@/assets/church-hero-bg.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${churchHeroBg})` }}
      >
        <div className="absolute inset-0 bg-church-primary/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bethel Deliverance Foundation
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-church-secondary">
            <b><span className="text-purple-600">Pastor Nani Moses</span></b>
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Welcome to our ministry! Join us as we worship together and grow in faith.
            Experience God's love and find your spiritual home with us.
          </p>
          <div className="space-x-4">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-church-secondary text-church-primary hover:bg-church-secondary/90 font-semibold px-8 py-3"
              >
                Our Services
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-church-primary font-semibold px-8 py-3"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Requests Section (moved below cards) */}

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-church-primary mb-4">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Bethel Deliverance Foundation, we believe in the transformative power of 
              God's love. Join us as we worship, learn, and grow together in faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-church-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-church-primary mb-3">
                  Sunday Services
                </h3>
                <p className="text-muted-foreground">
                  Join us for inspiring worship and biblical teaching every Sunday.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="mt-4">
                    Service Times
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-church-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-church-primary mb-3">
                  Ministries
                </h3>
                <p className="text-muted-foreground">
                  Discover opportunities to serve and grow through our various ministries.
                </p>
                <Link to="/ministries">
                  <Button variant="outline" className="mt-4">
                    Get Involved
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-church-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-church-primary mb-3">
                  Support Us
                </h3>
                <p className="text-muted-foreground">
                  Help us continue our mission through your generous contributions.
                </p>
                <Link to="/support">
                  <Button variant="outline" className="mt-4">
                    Give Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Prayer Requests Section (now after cards) */}
          <section className="py-10 bg-background mt-8">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-church-primary mb-4">Prayer Requests</h2>
              <div className="bg-white rounded-2xl shadow-lg p-6 inline-block mx-auto">
                <p className="text-lg text-muted-foreground mb-2">Kindly send your prayer requests to:</p>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-church-primary font-semibold text-lg">Mobile: 8121920111</span>
                  <span className="text-church-primary font-semibold text-lg">Email: pillimoses86@gmail.com</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;