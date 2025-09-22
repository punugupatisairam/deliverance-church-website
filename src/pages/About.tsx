import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import pastor_photos from "../assets/pastor_photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-church-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our mission, leadership, and how to connect with our church family.
          </p>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
              Our Pastor
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet Pastor Nani Moses, our spiritual leader and shepherd of Bethel Deliverance Foundation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-church-primary/20">
              <CardHeader className="text-center">
                <div className="w-48 h-48 bg-church-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={pastor_photos}
                    alt="Pastor Nani Moses"
                    className="w-full h-full object-cover rounded-full border-4 border-church-primary shadow"
                  />
                </div>
                <CardTitle className="text-2xl text-church-primary">
                  Pastor Nani Moses
                </CardTitle>
                <p className="text-muted-foreground">Senior Pastor & Founder</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pastor Nani Moses is dedicated to serving God and leading our congregation with wisdom, 
                  compassion, and biblical truth. Under his leadership, Bethel Deliverance Foundation 
                  continues to grow and impact the community through various ministries and outreach programs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    8121920111
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    pillimoses86@gmail.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-church-primary mb-4">
                Visit Us
              </h2>
              <Card className="border-church-primary/20">
                <CardHeader>
                  <CardTitle className="text-church-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-church-primary mb-2">Address:</h4>
                    <p className="text-muted-foreground">
                      Pion Basthi<br />
                      Bhdradri Kothagudem<br />
                      Telangana, 507101
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-church-primary mb-2">Contact:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        8121920111
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        pillimoses86@gmail.com
                      </div>
                    </div>
                      <div className="flex justify-center space-x-4 mt-4">
                        <a
                          href="https://www.facebook.com/share/1BF5wvwoEk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-church-primary hover:text-church-secondary transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/stories/rev_nani_moses/3718721543293069003?utm_source=ig_story_item_share&igsh=MW52aW56ZnF4Nndr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-church-primary hover:text-church-secondary transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://youtube.com/@pastornanimoses2450"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-church-primary hover:text-church-secondary transition-colors"
                          aria-label="YouTube"
                        >
                          <Youtube className="h-6 w-6" />
                        </a>
                        <a
                          href="https://x.com/pillimoses?t=XbtbJmDCf8mAwxB8MMLkUg&s=09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-church-primary hover:text-church-secondary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-6 w-6" />
                        </a>
                      </div>
                  </div>

                  <Button 
                    className="w-full bg-church-primary hover:bg-church-primary/90"
                    onClick={() => window.open('https://maps.app.goo.gl/yhvoeKJvda5AcwAE6', '_blank')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-church-primary mb-6">
                Find Us
              </h2>
              <Card className="border-church-primary/20 h-80">
                <CardContent className="p-0 h-full">
                  <div 
                    className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                    onClick={() => window.open('https://maps.app.goo.gl/yhvoeKJvda5AcwAE6', '_blank')}
                  >
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Click to view interactive map</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Pion Basthi, Bhdradri Kothagudem, Telangana
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stay updated with our latest news, events, and messages through our social media channels.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/1BF5wvwoEk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-church-primary/10 rounded-full flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/stories/rev_nani_moses/3718721543293069003?utm_source=ig_story_item_share&igsh=MW52aW56ZnF4Nndr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-church-primary/10 rounded-full flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://youtube.com/@pastornanimoses2450"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-church-primary/10 rounded-full flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/pillimoses?t=XbtbJmDCf8mAwxB8MMLkUg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-church-primary/10 rounded-full flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-church-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            To spread the Gospel of Jesus Christ, nurture spiritual growth, and serve our community 
            with love and compassion. We are committed to building disciples, supporting families, 
            and making a positive impact in Kothagudem and beyond.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;