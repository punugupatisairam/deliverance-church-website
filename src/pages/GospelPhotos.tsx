import React from "react";
import gospel1 from "../assets/gospel-1.jpg";
import gospel2 from "../assets/gospel-2.jpg";
import gospel3 from "../assets/gospel-3.jpg";
import gospel4 from "../assets/gospel-4.jpg";
import gospel5 from "../assets/gospel-5.jpg";
import gospel6 from "../assets/gospel-6.jpg";
import womenf1 from "../assets/womenf-1.jpg";
import womenf2 from "../assets/womenf-2.jpg";
import womenf3 from "../assets/womenf-3.jpg";
import womenf4 from "../assets/womenf-4.jpg";
import womenf5 from "../assets/womenf-5.jpg";
import womenf6 from "../assets/womenf-6.jpg";
import biblecol1 from "../assets/biblecol-1.jpg";
import biblecol2 from "../assets/biblecol-2.jpg";
import biblecol3 from "../assets/biblecol-3.jpg";
import biblecol4 from "../assets/biblecol-4.jpg";
import biblecol5 from "../assets/biblecol-5.jpg";
import biblecol6 from "../assets/biblecol-6.jpg";
import worship1 from "../assets/worship-1.jpg";
import worship2 from "../assets/worship-2.jpg";
import worship3 from "../assets/worship-3.jpg";
import worship4 from "../assets/worship-4.jpg";
import worship5 from "../assets/worship-5.jpg";
import worship6 from "../assets/worship-6.jpg";
import sundaysc1 from "../assets/sundaysc-1.jpg";
import sundaysc2 from "../assets/sundaysc-2.jpg";
import sundaysc3 from "../assets/sundaysc-3.jpg";
import sundaysc4 from "../assets/sundaysc-4.jpg";
import sundaysc5 from "../assets/sundaysc-5.jpg";
import sundaysc6 from "../assets/sundaysc-6.jpg";

const GospelPhotos = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-church-primary mb-8 text-center">
          Gospel Photos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[gospel1, gospel2, gospel3, gospel4, gospel5, gospel6].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gospel outreach photo ${idx + 1}`}
                className="w-full h-96 object-cover rounded-xl shadow-md border bg-white"
            />
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-church-primary mb-8 text-center">Women Fellowship</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[womenf1, womenf2, womenf3, womenf4,womenf5,womenf6].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Women Fellowship photo ${idx + 1}`}
              className="w-full h-96 object-cover rounded-xl shadow-md border bg-white"
            />
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-church-primary mb-8 text-center">Bible College</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {[biblecol1, biblecol2, biblecol3, biblecol4, biblecol5, biblecol6].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Bible College photo ${idx + 1}`}
              className="w-full h-96 object-cover rounded-xl shadow-md border"
            />
          ))}
        </div>
          <h2 className="text-2xl md:text-3xl font-bold text-church-primary mb-8 text-center">Sunday Worship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {[worship1, worship2, worship3, worship4, worship5, worship6].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Sunday Worship photo ${idx + 1}`}
                className="w-full h-96 object-cover rounded-xl shadow-md border"
              />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-church-primary mb-8 text-center">Sunday School</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {[sundaysc1, sundaysc2, sundaysc3, sundaysc4, sundaysc5, sundaysc6].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Sunday School photo ${idx + 1}`}
                className="w-full h-96 object-cover rounded-xl shadow-md border"
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default GospelPhotos;
