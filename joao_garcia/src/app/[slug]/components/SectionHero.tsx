"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Camera, Sparkles } from "lucide-react";
import React from "react";

interface SectionHeroProps {
  contact: Pick<ContactInfo, "whatsappLink" | "phone" | "email">;
  landingpage: Pick<LandingPage, "name" | "description" | "coverImageUrl">;
}

const SectionHero = ({ contact, landingpage }: SectionHeroProps) => {
  const openWhatsApp = () => {
    if (contact.whatsappLink) {
      window.open(contact.whatsappLink, "_blank");
    } else if (contact.phone) {
      const phone = contact.phone.replace(/\D/g, "");
      window.open(`https://wa.me/55${phone}`, "_blank");
    } else {
      window.open("https://wa.me/", "_blank");
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
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

  const scrollToAbout = () => {
    const element = document.getElementById("sobre");
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

  // Usa a coverImageUrl do banco ou uma imagem padrão
  const backgroundImage =
    landingpage.coverImageUrl ||
    "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image com lazy loading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-yellow-400/30 blur-sm"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-yellow-400/20 blur-sm"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-yellow-400/30 blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          {/* Badge de especialidade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center space-x-2 rounded-full bg-yellow-500/20 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="font-poppins text-sm font-medium text-yellow-300">
              Fotógrafo Profissional
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {landingpage.name || "João Garcia"}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-yellow-400"
            >
              Fotografia
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins mx-auto mb-8 max-w-2xl text-lg leading-relaxed sm:text-xl lg:text-2xl"
          >
            {landingpage.description ||
              "Capturando momentos reais com emoção e propósito"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(234, 179, 8, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="font-poppins group flex items-center space-x-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400"
            >
              <Camera className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Agende seu ensaio</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "white",
                color: "black",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="font-poppins group rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <span>Veja meu portfólio</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            {/* Scroll Indicator próximo aos botões */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-1/2 -right-4 -translate-y-1/2 transform sm:top-full sm:right-0 sm:mt-8 sm:translate-y-0"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:shadow-lg"
                onClick={scrollToAbout}
              >
                <ArrowDown className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 mb-12 grid grid-cols-3 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Ensaios" },
              { number: "10+", label: "Anos Exp." },
              { number: "100%", label: "Satisfação" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-playfair text-2xl font-bold text-yellow-400 sm:text-3xl">
                  {stat.number}
                </div>
                <div className="font-poppins text-sm text-white/80 sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
