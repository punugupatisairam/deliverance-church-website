import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Ministries = () => {
  const navigate = useNavigate();
  const ministries = [
    {
      title: "Gospel Outreaches",
      description: "Spreading the good news of Jesus Christ to our community and beyond through evangelistic events, street ministry, and community outreach programs.",
      icon: <Heart className="h-8 w-8" />,
      details: [
        "Community evangelism events",
        "Street ministry programs",
        "Outreach to remote areas",
        "Prison ministry visits"
      ]
    },
    {
      title: "Women Fellowship",
      description: "Empowering women through Bible study, prayer, fellowship, and service opportunities. Building strong relationships and spiritual growth among the women in our church.",
      icon: <Users className="h-8 w-8" />,
      details: [
        "Weekly Bible study sessions",
        "Prayer and fellowship meetings",
        "Community service projects",
        "Mentorship programs"
      ]
    },
    {
      title: "Bible College",
      description: "Equipping believers with solid biblical foundation and theological training for ministry and Christian service. Developing future church leaders and ministers.",
      icon: <BookOpen className="h-8 w-8" />,
      details: [
        "Biblical studies curriculum",
        "Practical ministry training",
        "Leadership development",
        "Theological education"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-church-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover ways to grow in faith, serve others, and make a difference in our community.
          </p>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="border-church-primary/20 hover:shadow-lg transition-shadow h-full flex flex-col justify-between bg-white rounded-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 text-church-primary">
                    {ministry.icon}
                  </div>
                  <CardTitle className="text-2xl text-church-primary">
                    {ministry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {ministry.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-church-primary">Key Activities:</h4>
                    <ul className="space-y-2">
                      {ministry.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-church-secondary rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-church-primary hover:bg-church-primary/90 text-white mt-4"
                    onClick={() => window.location.href = '/gospel-photos'}
                  >
                    View Our Ministries in Action
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-church-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join one of our ministries and be part of God's work in our community. 
            Whether you're called to evangelism, fellowship, or education, there's a place for you.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-church-secondary text-church-primary hover:bg-church-secondary/90 font-semibold px-8 py-3"
              onClick={() => navigate('/about')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;