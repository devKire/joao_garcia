"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Check,
  Heart,
  Star,
  Users,
  Zap,
} from "lucide-react";
import React, { useRef, useState } from "react";

interface SectionServicesProps {
  contact: Pick<ContactInfo, "whatsappLink" | "phone" | "email">;
  landingpage: Pick<LandingPage, "name">;
}

const SectionServices = ({ contact, landingpage }: SectionServicesProps) => {
  console.log({ contact, landingpage });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openWhatsApp = () => {
    const message =
      "Olá! Gostaria de solicitar um orçamento para serviços fotográficos.";
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

  const services = [
    {
      icon: Camera,
      title: "Ensaio Pessoal",
      description: "Sessão individual personalizada",
      duration: "1-2 horas de sessão",
      features: [
        "15 fotos editadas profissionalmente",
        "Entrega digital em alta resolução",
        "Orientação de poses e expressões",
        "2 locações diferentes",
        "Tratamento de pele e cores",
        "Galeria online privada",
      ],
      price: "R$ 350",
      originalPrice: "R$ 420",
      popular: false,
      badge: "Mais Procurado",
      color: "blue",
    },
    {
      icon: Heart,
      title: "Casamentos",
      description: "Cobertura completa do seu dia especial",
      duration: "Cobertura de 8 horas",
      features: [
        "Álbum físico premium 30x30cm",
        "Making of do casal incluído",
        "Fotos da cerimônia e festa",
        "Entrega em até 21 dias",
        "Segundo fotógrafo incluído",
        "Sessão pré-wedding gratuita",
        "Vídeo slideshow com música",
        "Todas as fotos em alta resolução",
      ],
      price: "R$ 2.800",
      originalPrice: "R$ 3.200",
      popular: true,
      badge: "Mais Popular",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Registro profissional para sua empresa",
      duration: "Cobertura de 4 horas",
      features: [
        "Entrega em até 3 dias úteis",
        "Fotos em alta resolução",
        "Galeria online corporativa",
        "Fotos para redes sociais",
        "Registro de palestras e workshops",
        "Fotos de produtos/serviços",
        "Direitos de uso comercial",
        "Backup em nuvem por 1 ano",
      ],
      price: "R$ 900",
      originalPrice: "R$ 1.100",
      popular: false,
      badge: "Empresarial",
      color: "purple",
    },
    {
      icon: Star,
      title: "Ensaio Família",
      description: "Memórias em família eternizadas",
      duration: "2 horas de sessão",
      features: [
        "25 fotos editadas profissionalmente",
        "Fotos individuais e em grupo",
        "Locação externa ou estúdio",
        "Orientação para crianças",
        "Entrega em 7 dias",
        "Galeria online familiar",
        "5 fotos impressas 15x21cm",
        "Arte para redes sociais",
      ],
      price: "R$ 450",
      originalPrice: "R$ 550",
      popular: false,
      badge: "Família",
      color: "green",
    },
    {
      icon: Zap,
      title: "Ensaio Express",
      description: "Quick session para redes sociais",
      duration: "30 minutos de sessão",
      features: [
        "5 fotos editadas profissionalmente",
        "Entrega em 24 horas",
        "Foco em redes sociais",
        "1 locação simples",
        "Edição básica de cores",
        "Download digital",
      ],
      price: "R$ 150",
      originalPrice: "R$ 200",
      popular: false,
      badge: "Rápido",
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-500/10",
      },
      yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        gradient: "from-yellow-500 to-yellow-600",
        light: "bg-yellow-500/10",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-500/10",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600",
        light: "bg-green-500/10",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        gradient: "from-red-500 to-red-600",
        light: "bg-red-500/10",
      },
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  return (
    <section
      id="servicos"
      className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-yellow-100 px-4 py-2"
          >
            <Zap className="h-4 w-4 text-yellow-600" />
            <span className="font-poppins text-sm font-medium text-yellow-700">
              Serviços Profissionais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
          >
            Serviços &{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Investimento
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins mx-auto max-w-3xl text-lg text-gray-600"
          >
            Escolha o pacote ideal para o seu momento especial. Todos os planos
            incluem entrega digital, edição profissional e garantia de
            satisfação.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: service.popular ? 1.05 : 1.02,
                }}
                className={`relative rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl ${
                  service.popular
                    ? `border-yellow-200 ring-2 ring-yellow-400`
                    : `border ${colorClasses.border}`
                }`}
                onMouseEnter={() => setSelectedService(service.title)}
                onMouseLeave={() => setSelectedService(null)}
              >
                {/* Badge */}
                {service.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 transform`}
                  >
                    <span
                      className={`font-poppins rounded-full px-3 py-1 text-xs font-semibold ${
                        service.popular
                          ? "bg-yellow-500 text-white shadow-lg"
                          : `${colorClasses.bg} ${colorClasses.text}`
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Desconto Tag */}
                <div className="absolute -top-2 -right-2">
                  <div className="rounded-full bg-red-500 px-2 py-1">
                    <span className="text-xs font-semibold text-white">
                      -
                      {Math.round(
                        (1 -
                          parseInt(service.price.replace(/\D/g, "")) /
                            parseInt(
                              service.originalPrice.replace(/\D/g, ""),
                            )) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6 text-center">
                  <div
                    className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${colorClasses.light}`}
                  >
                    <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>

                  <h3 className="font-playfair mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="font-poppins mb-2 text-sm text-gray-600">
                    {service.description}
                  </p>

                  <div className="font-poppins text-xs font-medium text-gray-500">
                    {service.duration}
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-6 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-playfair text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <span className="font-poppins text-sm text-gray-500 line-through">
                      {service.originalPrice}
                    </span>
                  </div>
                  <div className="font-poppins mt-1 text-xs text-gray-500">
                    ou 3x sem juros
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 * index + featureIndex * 0.1,
                      }}
                      className="font-poppins flex items-start text-sm text-gray-700"
                    >
                      <Check
                        className={`mt-0.5 mr-2 h-4 w-4 flex-shrink-0 ${colorClasses.text}`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="font-poppins text-xs font-medium text-gray-500">
                      + {service.features.length - 4} benefícios inclusos
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsApp}
                  className={`w-full rounded-xl py-3 font-semibold text-white transition-all duration-300 ${
                    service.popular
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg shadow-yellow-500/25"
                      : `bg-gradient-to-r ${colorClasses.gradient} shadow-md`
                  }`}
                >
                  Solicitar Orçamento
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {[
            {
              icon: Check,
              title: "Garantia de Satisfação",
              description:
                "Se não gostar do resultado, refazemos a sessão sem custo adicional",
            },
            {
              icon: Zap,
              title: "Entrega Rápida",
              description:
                "Processo ágil desde o agendamento até a entrega final",
            },
            {
              icon: Star,
              title: "Qualidade Premium",
              description:
                "Equipamento profissional e edição com padrão de excelência",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <item.icon className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-poppins mb-2 text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="font-poppins text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white shadow-2xl">
            <h3 className="font-playfair mb-4 text-2xl font-bold">
              Não encontrou o que procurava?
            </h3>
            <p className="font-poppins mb-6 text-lg opacity-90">
              Entre em contato para um orçamento personalizado de acordo com
              suas necessidades
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(234, 179, 8, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="font-poppins group rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400"
            >
              <span className="flex items-center space-x-2">
                <span>👉 Solicitar orçamento personalizado</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionServices;
