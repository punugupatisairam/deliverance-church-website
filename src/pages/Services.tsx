import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Morning Service",
      time: "8:30 AM - 10:30 AM",
      location: "Meshan Colony, Ramaavram, Kothagudem",
      description: "Start your Sunday with inspiring worship, prayer, and biblical teaching.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Main Service",
      time: "10:00 AM - 12:00 PM",
      location: "Pion Basthi, Kothagudem",
      description: "Our main worship service with dynamic preaching and community fellowship.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Sunday School",
      time: "10:30 AM - 12:00 PM",
      location: "Pion Basthi, Kothagudem",
      description: "Engaging Bible lessons and activities designed especially for children.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-church-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth. All are welcome!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-church-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-church-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-church-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.time}
                    </div>
                    <div className="flex items-start text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{service.location}</span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're a first-time visitor or a regular attendee, here's what you can expect during our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-church-secondary rounded-full flex items-center justify-center">
                  <span className="text-church-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-church-primary mb-2">
                    Welcoming Atmosphere
                  </h3>
                  <p className="text-muted-foreground">
                    Experience a warm and friendly environment where everyone is welcome.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-church-secondary rounded-full flex items-center justify-center">
                  <span className="text-church-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-church-primary mb-2">
                    Inspiring Worship
                  </h3>
                  <p className="text-muted-foreground">
                    Participate in uplifting music and heartfelt worship that draws us closer to God.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-church-secondary rounded-full flex items-center justify-center">
                  <span className="text-church-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-church-primary mb-2">
                    Biblical Teaching
                  </h3>
                  <p className="text-muted-foreground">
                    Hear practical, life-changing messages from God's Word that you can apply daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-church-secondary rounded-full flex items-center justify-center">
                  <span className="text-church-primary font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-church-primary mb-2">
                    Community Fellowship
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with others and build meaningful relationships within our church family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;