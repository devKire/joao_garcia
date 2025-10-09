"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ArrowUp,
  Camera,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import React from "react";

interface FooterProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "email" | "phone"
  >;
  landingpage: Pick<LandingPage, "name" | "description">;
}

const Footer = ({ contact, landingpage }: FooterProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const openWhatsApp = () => {
    const message =
      "Olá! Gostaria de mais informações sobre os serviços fotográficos.";
    if (contact.whatsappLink) {
      window.open(contact.whatsappLink, "_blank");
    } else if (contact.phone) {
      const phone = contact.phone.replace(/\D/g, "");
      window.open(
        `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }
  };

  const openInstagram = () => {
    if (contact.instagramLink) {
      window.open(contact.instagramLink, "_blank");
    }
  };

  const openFacebook = () => {
    if (contact.facebookLink) {
      window.open(contact.facebookLink, "_blank");
    }
  };

  const openEmail = () => {
    if (contact.email) {
      window.open(
        `mailto:${contact.email}?subject=Orçamento para Serviços Fotográficos&body=Olá! Gostaria de mais informações sobre...`,
        "_blank",
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { label: "Início", id: "hero" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Serviços", id: "servicos" },
    { label: "Sobre", id: "sobre" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  const services = [
    "Ensaios Individuais",
    "Casamentos",
    "Eventos Corporativos",
    "Retratos Artísticos",
    "Ensaios Familiares",
    "Ensaios Gestante",
    "Books Profissionais",
    "Eventos Sociais",
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: contact.phone || "(11) 99999-9999",
      action: openWhatsApp,
    },
    {
      icon: Mail,
      text: contact.email || "contato@joaogarcia.com",
      action: openEmail,
    },
    {
      icon: MapPin,
      text: "São Paulo, SP",
      action: null,
    },
    {
      icon: Clock,
      text: "Seg - Sáb: 8h às 20h",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      action: openInstagram,
      color: "hover:bg-pink-500",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      action: openWhatsApp,
      color: "hover:bg-green-500",
      label: "WhatsApp",
    },
    {
      icon: Facebook,
      action: openFacebook,
      color: "hover:bg-blue-500",
      label: "Facebook",
    },
    {
      icon: Mail,
      action: openEmail,
      color: "hover:bg-red-500",
      label: "E-mail",
    },
  ];

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-b from-gray-900 to-black py-12 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center space-x-3"
            >
              <div className="relative">
                <Camera className="h-8 w-8 text-yellow-400" />
                <div className="absolute -inset-2 rounded-full bg-yellow-400/20 blur-sm"></div>
              </div>
              <span className="font-playfair bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-2xl font-bold text-transparent">
                {landingpage.name || "João Garcia"} Fotografia
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins mb-6 max-w-md leading-relaxed text-gray-300"
            >
              {landingpage.description ||
                "Capturando emoções, eternizando histórias através da fotografia profissional."}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 space-y-3"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 text-gray-300 ${
                    info.action
                      ? "cursor-pointer transition-colors hover:text-yellow-400"
                      : ""
                  }`}
                  onClick={info.action || undefined}
                >
                  <info.icon className="h-4 w-4 text-yellow-400" />
                  <span className="font-poppins text-sm">{info.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={social.action}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-yellow-500"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-playfair mb-4 text-lg font-bold text-yellow-400"
            >
              Navegação
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-playfair mb-4 text-lg font-bold text-yellow-400"
            >
              Serviços
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins space-y-3 text-gray-300"
            >
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="mr-2 h-1 w-1 rounded-full bg-yellow-400"></div>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h4 className="font-playfair mb-2 text-xl font-bold text-white">
                Pronto para seu ensaio?
              </h4>
              <p className="font-poppins text-gray-300">
                Entre em contato agora e garante seu horário!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="font-poppins rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400"
            >
              Agendar Agora
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row"
        >
          <p className="font-poppins mb-4 text-sm text-gray-400 md:mb-0">
            © 2024 {landingpage.name || "João Garcia"} Fotografia. Todos os
            direitos reservados.
          </p>

          <div className="flex items-center space-x-4">
            <div className="font-poppins flex items-center space-x-1 text-sm text-gray-400">
              <span>Feito com</span>
              <Heart className="h-4 w-4 fill-current text-red-500" />
              <span>para momentos especiais</span>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 transition-all duration-300 hover:bg-yellow-400"
              title="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4 text-black" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
