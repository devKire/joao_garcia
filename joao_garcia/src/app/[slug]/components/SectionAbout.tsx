"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, Camera,Heart, Users } from "lucide-react";
import React, { useRef } from "react";

interface SectionAboutProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "description" | "avatarImageUrl">;
}

const SectionAbout = ({ contact, landingpage }: SectionAboutProps) => {
  console.log({ contact, landingpage });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: <Camera className="h-6 w-6" />,
      number: "500+",
      label: "Ensaios Realizados",
      delay: 0.6,
    },
    {
      icon: <Heart className="h-6 w-6" />,
      number: "200+",
      label: "Casamentos",
      delay: 0.7,
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "10+",
      label: "Anos de Experiência",
      delay: 0.8,
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "100%",
      label: "Clientes Satisfeitos",
      delay: 0.9,
    },
  ];

  // Usa a avatarImageUrl do banco ou uma imagem padrão
  const profileImage =
    landingpage.avatarImageUrl ||
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop";

  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 rounded-full bg-yellow-100 px-4 py-2"
              >
                <Award className="h-4 w-4 text-yellow-600" />
                <span className="font-poppins text-sm font-medium text-yellow-700">
                  Fotógrafo Profissional
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-playfair text-4xl font-bold text-gray-900 lg:text-5xl"
              >
                Sobre{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                  {landingpage.name?.split(" ")[0] || "João Garcia"}
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-poppins space-y-6 text-lg leading-relaxed text-gray-600"
            >
              <p>
                Sou{" "}
                <span className="font-semibold text-gray-900">
                  {landingpage.name || "João Garcia"}
                </span>
                , fotógrafo profissional especializado em ensaios, casamentos e
                retratos artísticos.
              </p>

              <p>
                {landingpage.description ||
                  "Acredito que cada momento conta uma história — e minha missão é transformar essas histórias em imagens que falam por si."}
              </p>

              <p>
                Com mais de{" "}
                <span className="font-semibold text-yellow-600">
                  10 anos de experiência
                </span>
                , busco capturar sentimentos genuínos e eternizar o que
                realmente importa.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {stats.map(
                (stat, index) => (
                  console.log(stat, index),
                  (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: stat.delay }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group text-center"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 transition-colors group-hover:bg-yellow-200">
                          {stat.icon}
                        </div>
                        <div className="font-playfair text-2xl font-bold text-gray-900 lg:text-3xl">
                          {stat.number}
                        </div>
                        <div className="font-poppins text-sm text-gray-600 lg:text-base">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  )
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src={profileImage}
                alt={`${landingpage.name || "João Garcia"} - Fotógrafo`}
                className="h-[600px] w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute right-6 bottom-6 left-6"
              >
                <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-sm">
                  <h3 className="font-playfair text-xl font-bold text-gray-900">
                    Especialidades
                  </h3>
                  <div className="font-poppins mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                    {["Casamentos", "Ensaios", "Retratos", "Eventos"].map(
                      (specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700"
                        >
                          {specialty}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-yellow-200/30 blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-yellow-100/20 blur-xl"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              className="absolute -top-4 -left-4"
            >
              <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-3 shadow-lg">
                <span className="font-poppins text-sm font-semibold text-white">
                  📸 Desde 2014
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
