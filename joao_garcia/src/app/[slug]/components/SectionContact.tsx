"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

interface SectionContactProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "phone" | "email"
  >;
  landingpage: Pick<LandingPage, "name">;
}

const SectionContact = ({ contact, landingpage }: SectionContactProps) => {
  console.log(contact, landingpage);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const openEmail = () => {
    if (contact.email) {
      window.open(
        `mailto:${contact.email}?subject=Orçamento para Serviços Fotográficos&body=Olá! Gostaria de mais informações sobre...`,
        "_blank",
      );
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: contact.phone || "(11) 99999-9999",
      action: openWhatsApp,
      color: "text-green-400",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: contact.email || "contato@joaogarciafotografia.com",
      action: openEmail,
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
      action: null,
      color: "text-red-400",
    },
    {
      icon: Clock,
      label: "Horário de Atendimento",
      value: "Segunda a Sábado: 8h às 20h",
      action: null,
      color: "text-yellow-400",
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: openWhatsApp,
      color: "bg-green-500 hover:bg-green-600",
      iconColor: "text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      action: openInstagram,
      color: "bg-pink-500 hover:bg-pink-600",
      iconColor: "text-white",
    },
    {
      icon: Mail,
      label: "E-mail",
      action: openEmail,
      color: "bg-blue-500 hover:bg-blue-600",
      iconColor: "text-white",
    },
  ];

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-12 text-white sm:py-16 lg:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 h-20 w-20 rounded-full border-2 border-yellow-400 sm:top-10 sm:left-10 sm:h-32 sm:w-32"></div>
        <div className="absolute right-5 bottom-5 h-16 w-16 rounded-full border-2 border-yellow-400 sm:right-20 sm:bottom-20 sm:h-24 sm:w-24"></div>
        <div className="absolute top-1/2 left-1/6 h-12 w-12 rounded-full border-2 border-yellow-400 sm:left-1/4 sm:h-16 sm:w-16"></div>
        <div className="absolute right-1/4 bottom-1/6 h-14 w-14 rounded-full border-2 border-yellow-400 sm:right-1/3 sm:bottom-1/4 sm:h-20 sm:w-20"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-yellow-500/20 px-3 py-1 backdrop-blur-sm sm:px-4 sm:py-2"
          >
            <Camera className="h-3 w-3 text-yellow-400 sm:h-4 sm:w-4" />
            <span className="font-poppins text-xs font-medium text-yellow-300 sm:text-sm">
              Vamos Conversar?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            Pronto para{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Capturar Momentos?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins mx-auto mb-6 max-w-2xl text-base text-gray-300 sm:mb-8 sm:text-lg"
          >
            Entre em contato e vamos criar algo incrível juntos.
            <span className="font-semibold text-yellow-400">
              {" "}
              Respondo rapidamente via WhatsApp!
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(234, 179, 8, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsApp}
            className="font-poppins group mb-8 inline-flex items-center space-x-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400 sm:mb-12 sm:space-x-3 sm:px-8 sm:py-4 sm:text-base"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
          </motion.button>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="font-playfair mb-4 text-xl font-bold text-yellow-400 sm:mb-6 sm:text-2xl">
                Informações de Contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center space-x-3 rounded-xl p-3 transition-all duration-300 sm:space-x-4 sm:p-4 ${
                      info.action
                        ? "cursor-pointer bg-white/5 hover:scale-105 hover:bg-white/10"
                        : "bg-white/5"
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 sm:h-12 sm:w-12">
                      <info.icon
                        className={`h-5 w-5 ${info.color} sm:h-6 sm:w-6`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-poppins text-sm font-semibold text-white sm:text-base">
                        {info.label}
                      </div>
                      <div className="font-poppins truncate text-xs text-gray-300 sm:text-sm">
                        {info.value}
                      </div>
                    </div>
                    {info.action && (
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-playfair mb-4 text-xl font-bold text-yellow-400 sm:mb-6 sm:text-2xl">
                Redes Sociais
              </h3>

              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={social.action}
                    className={`${social.color} flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 sm:h-12 sm:w-12`}
                    title={social.label}
                  >
                    <social.icon
                      className={`h-4 w-4 ${social.iconColor} sm:h-5 sm:w-5`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6"
            >
              <h4 className="font-poppins mb-2 text-sm font-semibold text-yellow-400 sm:mb-3 sm:text-base">
                💡 Informações Importantes
              </h4>
              <ul className="font-poppins space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm">
                <li>• Orçamento gratuito e sem compromisso</li>
                <li>• Atendimento em estúdio ou externo</li>
                <li>• Pagamento parcelado em até 12x</li>
                <li>• Material incluso conforme pacote</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Map/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl sm:rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Estúdio de fotografia"
                width={600}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-6">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6">
                  <h4 className="font-playfair mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">
                    📸 Estúdio São Paulo
                  </h4>
                  <p className="font-poppins text-xs text-gray-200 sm:text-sm">
                    Atendimento personalizado em estúdio profissional ou em
                    locação externa. Equipamento de última geração e ambiente
                    climatizado.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-2">
                    {[
                      "Estúdio Profissional",
                      "Equipamento Top",
                      "Ar Condicionado",
                      "Estacionamento",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-300 sm:px-3"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4"
              >
                <div className="rounded-xl bg-yellow-500 px-3 py-1 shadow-lg sm:rounded-2xl sm:px-4 sm:py-2">
                  <span className="font-poppins text-xs font-semibold text-black sm:text-sm">
                    🎯 Disponível
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Additional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4"
            >
              {[
                { icon: "📷", text: "Ensaios Externos" },
                { icon: "🏠", text: "Atendimento em Casa" },
                { icon: "🌅", text: "Sessão ao Ar Livre" },
                { icon: "⚡", text: "Entrega Rápida" },
              ].map((service) => (
                <div
                  key={service.text}
                  className="rounded-lg bg-white/5 p-3 text-center backdrop-blur-sm sm:rounded-xl sm:p-4"
                >
                  <div className="text-base sm:text-lg">{service.icon}</div>
                  <div className="font-poppins mt-1 text-xs text-gray-300">
                    {service.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
