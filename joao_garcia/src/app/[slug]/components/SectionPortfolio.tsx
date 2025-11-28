"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Camera, Filter, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
interface SectionPortfolioProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name">;
}

const SectionPortfolio = ({ contact, landingpage }: SectionPortfolioProps) => {
  console.log(contact, landingpage);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["Todos", "Ensaios", "Casamentos", "Eventos", "Retratos"];

  const portfolioItems = [
    // Fotos que você já tinha (9 fotos do Pexels)
    {
      id: 15,
      category: "Ensaios",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Ensaio Individual",
      description: "Ensaio pessoal em estúdio profissional",
    },
    {
      id: 16,
      category: "Casamentos",
      image:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Casamento Ana & Pedro",
      description: "Cerimônia ao ar livre no jardim",
    },
    {
      id: 17,
      category: "Retratos",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Retrato Artístico",
      description: "Sessão criativa com iluminação natural",
    },
    {
      id: 18,
      category: "Eventos",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Evento Corporativo",
      description: "Cobertura completa do evento empresarial",
    },
    {
      id: 19,
      category: "Ensaios",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Ensaio Individual",
      description: "Sessão criativa com iluminação",
    },
    {
      id: 20,
      category: "Ensaios",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Ensaio Urbano",
      description: "Ensaio ao ar livre em cenário urbano",
    },
    {
      id: 21,
      category: "Retratos",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Retrato Profissional",
      description: "Foto para perfil profissional e LinkedIn",
    },
    {
      id: 22,
      category: "Ensaios",
      image:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Ensaio individual",
      description: "Capturando a essência única",
    },
    {
      id: 23,
      category: "Eventos",
      image:
        "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      title: "Festa de Formatura",
      description: "Celebração de conquista acadêmica",
    },
  ];

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-yellow-100 px-4 py-2"
          >
            <Camera className="h-4 w-4 text-yellow-600" />
            <span className="font-poppins text-sm font-medium text-yellow-700">
              Meu Trabalho
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
          >
            Meu Portfólio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins mx-auto max-w-2xl text-lg text-gray-600"
          >
            Descubra alguns dos meus registros favoritos e inspire-se para o seu
            próximo ensaio
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`font-poppins flex items-center space-x-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/25"
                    : "bg-white text-gray-600 shadow-sm hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                {selectedCategory === category && (
                  <Filter className="h-4 w-4" />
                )}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openModal(item.image)}
                      className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all hover:bg-white/30"
                    >
                      <ZoomIn className="h-6 w-6 text-white" />
                    </motion.button>
                  </div>

                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="font-poppins mb-2 text-lg font-semibold text-white"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="font-poppins mb-3 text-sm text-gray-200"
                    >
                      {item.description}
                    </motion.p>
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="inline-block rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-white"
                    >
                      {item.category}
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 text-white shadow-lg">
            <h3 className="font-playfair mb-4 text-2xl font-bold">
              Pronto para criar memórias incríveis?
            </h3>
            <p className="font-poppins mb-6 text-lg opacity-90">
              Vamos conversar sobre seu projeto fotográfico
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (contact.whatsappLink) {
                  window.open(contact.whatsappLink, "_blank");
                }
              }}
              className="rounded-full bg-white px-8 py-4 font-semibold text-yellow-600 shadow-lg transition-all hover:shadow-xl"
            >
              Agendar Ensaio
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal para imagem ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-h-[90vh] max-w-[90vw]"
          >
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              width={800}
              height={800}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SectionPortfolio;
