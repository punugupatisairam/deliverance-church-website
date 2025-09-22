import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Smartphone, QrCode, Heart, BookOpen, Users, MapPin, Link } from "lucide-react";
import qrCode from "../assets/qrcode.jpg";


const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-church-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Ministry</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your generous contributions help us continue God's work in our community and beyond.
          </p>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16" id="ways-to-give">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the method that works best for you to support our ministry and mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Donation */}
            <Card className="border-church-primary/20 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto mb-4 text-church-primary">
                  <Phone className="h-10 w-10" />
                </div>
                <CardTitle className="text-church-primary">Phone Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5">
                  Call us directly to make a donation or set up recurring giving.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-5">
                  <p className="font-semibold text-church-primary text-lg">
                    8121920111
                  </p>
                </div>
                <Button className="w-full bg-church-primary hover:bg-church-primary/90">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* UPI Payment */}
            <Card className="border-church-primary/20 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto mb-4 text-church-primary">
                  <Smartphone className="h-10 w-10" />
                </div>
                <CardTitle className="text-church-primary">UPI Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5">
                  Send your donation instantly using UPI payment method.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-5">
                  <p className="font-semibold text-church-primary">
                    UPI ID: 8121920111-2@ybl
                  </p>
                </div>
                <Button className="w-full bg-church-primary hover:bg-church-primary/90">
                  Pay via UPI
                </Button>
              </CardContent>
            </Card>

            {/* QR Code Payment */}
            <Card className="border-church-primary/20 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto mb-2 text-church-primary">
                  <QrCode className="h-10 w-10" />
                </div>
                <CardTitle className="text-church-primary">QR Code</CardTitle>
                <p className="text-muted-foreground mb-2">
                  Scan the QR code with your mobile payment app to donate.
                </p>
              </CardHeader>
              <CardContent>
                  <div className="bg-muted p-4 rounded-lg flex items-center justify-center">
                  <div className="rounded flex items-center justify-center">
                    {/* <img src={qrCode} alt="QR Code" className="w-48 h-48 object-contain" /> */}
                    <img src={qrCode} alt="QR Code" className="w-56 h-56 object-contain" />

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how your contributions make a difference in our community and ministry work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-church-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-church-primary" />
              </div>
              <h3 className="text-lg font-semibold text-church-primary mb-2">
                Community Outreach
              </h3>
              <p className="text-muted-foreground text-sm">
                Supporting local families and individuals in need
              </p>
            </div>

            <div className="text-center">
              <div className="bg-church-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-church-primary" />
              </div>
              <h3 className="text-lg font-semibold text-church-primary mb-2">
                Education Programs
              </h3>
              <p className="text-muted-foreground text-sm">
                Funding Bible college and educational initiatives
              </p>
            </div>

            <div className="text-center">
              <div className="bg-church-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-church-primary" />
              </div>
              <h3 className="text-lg font-semibold text-church-primary mb-2">
                Ministry Growth
              </h3>
              <p className="text-muted-foreground text-sm">
                Expanding our reach and ministry capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-church-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-church-primary" />
              </div>
              <h3 className="text-lg font-semibold text-church-primary mb-2">
                Facility Maintenance
              </h3>
              <p className="text-muted-foreground text-sm">
                Keeping our worship spaces welcoming and functional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-church-primary text-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Gift Makes a Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Whether large or small, your contribution helps us serve God and our community. 
            Thank you for your generous heart and faithful support.
          </p>
          <a href="#ways-to-give">
          <Button 
            size="lg" 
            className="bg-church-secondary text-church-primary hover:bg-church-secondary/90 font-semibold px-8 py-3"
          >
            Give Today
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Support;
