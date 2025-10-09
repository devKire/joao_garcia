"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Heart, MessageCircle, Quote, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
interface SectionTestimonialsProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "description">;
}

const SectionTestimonials = ({
  contact,
  landingpage,
}: SectionTestimonialsProps) => {
  console.log(contact, landingpage);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Mariana & Felipe",
      role: "Casamento - Junho 2024",
      image:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "As fotos do nosso casamento ficaram simplesmente perfeitas! O João captou cada detalhe com muito carinho e profissionalismo. Cada vez que olhamos as fotos, revivemos a emoção daquele dia especial.",
      rating: 5,
      service: "Casamento",
      featured: true,
    },
    {
      id: 2,
      name: "Camila Rocha",
      role: "Ensaio Pessoal - Maio 2024",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Fiz meu primeiro ensaio fotográfico e me senti super à vontade durante toda a sessão. O João tem uma sensibilidade incrível para captar os melhores ângulos e expressões. As fotos ficaram maravilhosas!",
      rating: 5,
      service: "Ensaio Pessoal",
      featured: false,
    },
    {
      id: 3,
      name: "Lucas Pereira",
      role: "Evento Corporativo - Abril 2024",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Contratamos o João para cobrir nosso evento corporativo e ficamos impressionados com o profissionalismo e a qualidade do trabalho. As fotos transmitiram perfeitamente a energia do evento.",
      rating: 5,
      service: "Evento Corporativo",
      featured: false,
    },
    {
      id: 4,
      name: "Ana Beatriz",
      role: "Ensaio Família - Março 2024",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "As fotos em família ficaram incríveis! O João conseguiu capturar a essência de cada um de nós, até das crianças que são super elétricas. Um trabalho sensível e profissional.",
      rating: 5,
      service: "Ensaio Família",
      featured: true,
    },
    {
      id: 5,
      name: "Ricardo Almeida",
      role: "Aniversário - Fevereiro 2024",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Fotos espetaculares da festa de aniversário do meu filho! O João registrou todos os momentos importantes de forma natural e espontânea. Super recomendo!",
      rating: 5,
      service: "Evento Social",
      featured: false,
    },
    {
      id: 6,
      name: "Juliana Santos",
      role: "Ensaio Gestante - Janeiro 2024",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Um ensaio gestante super especial e emocionante! O João foi extremamente paciente e carinhoso. As fotos ficaram tão lindas que chorei ao ver o resultado.",
      rating: 5,
      service: "Ensaio Gestante",
      featured: true,
    },
  ];

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  const trustIndicators = [
    {
      icon: Heart,
      value: "98%",
      label: "Clientes Satisfeitos",
      color: "text-red-500",
    },
    {
      icon: MessageCircle,
      value: "24h",
      label: "Resposta Rápida",
      color: "text-green-500",
    },
    {
      icon: Star,
      value: "5.0",
      label: "Avaliação Média",
      color: "text-yellow-500",
    },
    {
      icon: ThumbsUp,
      value: "200+",
      label: "Projetos Concluídos",
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-yellow-100 px-4 py-2"
          >
            <Heart className="h-4 w-4 text-yellow-600" />
            <span className="font-poppins text-sm font-medium text-yellow-700">
              Depoimentos Reais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
          >
            Histórias de{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Sucesso
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins mx-auto max-w-2xl text-lg text-gray-600"
          >
            Veja o que meus clientes têm a dizer sobre a experiência de
            trabalhar juntos
          </motion.p>
        </div>

        {/* Featured Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {/* Featured Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white">
                    ⭐ Destaque
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-yellow-200" />
                </div>

                <div className="mb-6 flex items-start space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-yellow-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="font-poppins text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <div className="mt-1 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-poppins leading-relaxed text-gray-700">
                  {`"${testimonial.text}"`}
                </p>

                <div className="mt-4">
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {regularTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center space-x-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="font-poppins text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mb-3 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="font-poppins text-sm leading-relaxed text-gray-600">
                {`"${testimonial.text}"`}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white shadow-2xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <indicator.icon className={`h-6 w-6 ${indicator.color}`} />
                  </div>
                  <div className="font-playfair mb-1 text-2xl font-bold lg:text-3xl">
                    {indicator.value}
                  </div>
                  <div className="font-poppins text-sm text-gray-300">
                    {indicator.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 text-center"
            >
              <p className="font-poppins mb-4 text-lg text-gray-200">
                Junte-se aos clientes satisfeitos e faça seu orçamento
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (contact.whatsappLink) {
                    window.open(contact.whatsappLink, "_blank");
                  }
                }}
                className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black shadow-lg transition-all hover:bg-yellow-400"
              >
                Quero Fazer Meu Ensaio
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
