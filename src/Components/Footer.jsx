import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../assets/data";
import EmailButton from "./EmailButton";

const Footer = () => {
  return (
    
    <footer className="bg-amber-950 text-white py-10 ">
     
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Name */}
          <div className="mb-6">
            <Link to="/Men" className="text-3xl font-bold text-white">
              Yuvraj
            </Link>
            <p className="mt-2 text-gray-300 text-sm">
              Your favorite fashion store. Quality & Style.
            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="space-y-2">
                {col.links.map((link, index) => (
                  <li key={index}>
                    <Link to="/" className="text-gray-300 hover:text-white transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}

          {/* Contact Info */}
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="space-y-2">
              {FOOTER_CONTACT_INFO.links.map((info, index) => (
                <li key={index} className="text-sm text-gray-300">
                  <span className="font-semibold text-white">{info.label}:</span> {info.value}
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Social Icons with Links */}
          <FooterColumn title={SOCIALS.title}>
            <div className="flex gap-4">
              {SOCIALS.links.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8  filter invert hover:brightness-75 transition"
                  />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Yuvraj. All rights reserved.
        </div>
      </div>
      
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
