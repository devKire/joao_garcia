"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { Camera,Menu, X } from "lucide-react";
import React, { useEffect,useState } from "react";

interface HeaderProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "slug">;
}

const Header = ({ contact, landingpage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar/ocultar header baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Efeito de background ao scrollar
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset para considerar o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Sobre", id: "sobre" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Serviços", id: "servicos" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  const socialLinks = [
    {
      href: contact.whatsappLink,
      icon: "📱",
      label: "WhatsApp",
      visible: !!contact.whatsappLink,
    },
    {
      href: contact.instagramLink,
      icon: "📸",
      label: "Instagram",
      visible: !!contact.instagramLink,
    },
    {
      href: contact.facebookLink,
      icon: "👥",
      label: "Facebook",
      visible: !!contact.facebookLink,
    },
  ].filter((link) => link.visible);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer items-center space-x-3"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <Camera
                className={`h-8 w-8 ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              />
              <motion.div
                className="absolute -inset-2 rounded-full bg-blue-600/20"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </div>
            <span
              className={`font-playfair text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {landingpage.name}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-poppins rounded-lg px-4 py-2 transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Social Links Desktop */}
            {socialLinks.length > 0 && (
              <div className="ml-4 flex items-center space-x-2 border-l border-gray-300 pl-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full p-2 transition-colors ${
                      isScrolled
                        ? "text-gray-600 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    }`}
                    title={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (menuItems.length + index) * 0.1 }}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`rounded-lg p-2 md:hidden ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <nav
            className={`border-t pb-4 ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-poppins block w-full py-3 text-left transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                } rounded-lg px-4`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Social Links Mobile */}
            {socialLinks.length > 0 && (
              <div className="mx-4 flex justify-center space-x-4 border-t border-gray-200 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full p-3 ${
                      isScrolled
                        ? "bg-gray-100 text-gray-600"
                        : "bg-white/20 text-white"
                    }`}
                    title={social.label}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-base">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            )}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
