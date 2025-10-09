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
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-20 text-white lg:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute right-20 bottom-20 h-24 w-24 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute right-1/3 bottom-1/4 h-20 w-20 rounded-full border-2 border-yellow-400"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-yellow-500/20 px-4 py-2 backdrop-blur-sm"
          >
            <Camera className="h-4 w-4 text-yellow-400" />
            <span className="font-poppins text-sm font-medium text-yellow-300">
              Vamos Conversar?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-4xl font-bold lg:text-5xl"
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
            className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300"
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
            className="font-poppins group mb-12 inline-flex items-center space-x-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair mb-6 text-2xl font-bold text-yellow-400">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center space-x-4 rounded-xl p-4 transition-all duration-300 ${
                      info.action
                        ? "cursor-pointer bg-white/5 hover:scale-105 hover:bg-white/10"
                        : "bg-white/5"
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-poppins font-semibold text-white">
                        {info.label}
                      </div>
                      <div className="font-poppins text-gray-300">
                        {info.value}
                      </div>
                    </div>
                    {info.action && (
                      <ArrowRight className="h-4 w-4 text-yellow-400" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-playfair mb-6 text-2xl font-bold text-yellow-400">
                Redes Sociais
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={social.action}
                    className={`${social.color} flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300`}
                    title={social.label}
                  >
                    <social.icon className={`h-5 w-5 ${social.iconColor}`} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="rounded-2xl bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 p-6 backdrop-blur-sm"
            >
              <h4 className="font-poppins mb-3 font-semibold text-yellow-400">
                💡 Informações Importantes
              </h4>
              <ul className="font-poppins space-y-2 text-sm text-gray-300">
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Estúdio de fotografia"
                width={600}
                height={400}
                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <h4 className="font-playfair mb-2 text-xl font-bold text-white">
                    📸 Estúdio São Paulo
                  </h4>
                  <p className="font-poppins text-sm text-gray-200">
                    Atendimento personalizado em estúdio profissional ou em
                    locação externa. Equipamento de última geração e ambiente
                    climatizado.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Estúdio Profissional",
                      "Equipamento Top",
                      "Ar Condicionado",
                      "Estacionamento",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-300"
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
                className="absolute -top-4 -right-4"
              >
                <div className="rounded-2xl bg-yellow-500 px-4 py-2 shadow-lg">
                  <span className="font-poppins text-sm font-semibold text-black">
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
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {[
                { icon: "📷", text: "Ensaios Externos" },
                { icon: "🏠", text: "Atendimento em Casa" },
                { icon: "🌅", text: "Sessão ao Ar Livre" },
                { icon: "⚡", text: "Entrega Rápida" },
              ].map((service) => (
                <div
                  key={service.text}
                  className="rounded-xl bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-lg">{service.icon}</div>
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
