// import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-church-primary text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Church Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">
//               Bethel Deliverance Foundation
//             </h3>
//             <p className="text-gray-300 mb-4">
//               Serving the community with God's love and grace.
//             </p>
//             <p className="text-gray-300">
//               Pastor: Nani Moses
//             </p>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-2 text-gray-300">
//               <p>Pion Basthi, Bhdradri Kothagudem</p>
//               <p>Telangana, 507101</p>
//               <p>Phone: 8121920111</p>
//               <p>Email: nanimoses@gmail.com</p>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-church-secondary transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-church-secondary transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-church-secondary transition-colors"
//                 aria-label="YouTube"
//               >
//                 <Youtube className="h-6 w-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-church-secondary transition-colors"
//                 aria-label="Twitter"
//               >
//                 <Twitter className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-600 mt-8 pt-8 text-center">
//           <p className="text-gray-300">
//             © 2024 Bethel Deliverance Foundation. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-church-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Bethel Deliverance Foundation
            </h3>
            <p className="text-gray-300 mb-4">
              Serving the community with God's love and grace.
            </p>
            <p className="text-gray-300">Pastor: Nani Moses</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Pion Basthi, Bhdradri Kothagudem</p>
              <p>Telangana, 507101</p>
              <p>Phone: 8121920111</p>
              <p>Email: pillimoses86@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BF5wvwoEk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-church-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/stories/rev_nani_moses/3718721543293069003?utm_source=ig_story_item_share&igsh=MW52aW56ZnF4Nndr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-church-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@pastornanimoses2450"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-church-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/pillimoses?t=XbtbJmDCf8mAwxB8MMLkUg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-church-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Bethel Deliverance Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
