"use client";

import { ContactInfo } from "@prisma/client";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  motion,
  spring,
} from "framer-motion";
import { MessageCircle, Sparkles, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FloatingWhatsAppProps {
  contact: Pick<ContactInfo, "whatsappLink">;
}

const FloatingWhatsAppButton = ({ contact }: FloatingWhatsAppProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Delay para aparecer suavemente
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Pulsar a cada 8 segundos
    const pulseInterval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  if (!contact.whatsappLink) return null;

  // Variantes de animação
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: spring,
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: spring,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const notificationVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: spring,
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: easeIn,
      },
    },
  };

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: spring,
        stiffness: 500,
        damping: 25,
      },
    },
  };

  const pulseRingVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0, 0.5],
      transition: {
        duration: 2,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
    idle: {
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Notification Card */}
      <AnimatePresence>
        {showNotification && isVisible && (
          <motion.div
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            <div className="mr-2 max-w-xs rounded-2xl border border-green-100 bg-white p-4 shadow-2xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-green-800">
                      Atendimento Rápido
                    </h3>
                    <button
                      onClick={() => setShowNotification(false)}
                      className="text-green-400 transition-colors hover:text-green-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mb-2 text-xs text-green-600">
                    Fale conosco no WhatsApp! Respondemos em minutos.
                  </p>
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <Sparkles className="h-3 w-3" />
                    <span>Online agora</span>
                  </div>
                </div>
              </div>

              {/* Arrow pointer */}
              <div className="absolute right-8 -bottom-2 h-4 w-4 rotate-45 transform border-r border-b border-green-100 bg-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => {
              setIsHovering(true);
              setShowTooltip(true);
            }}
            onHoverEnd={() => {
              setIsHovering(false);
              setShowTooltip(false);
            }}
            className="relative"
          >
            {/* Pulsing Ring Effect */}
            <motion.div
              variants={pulseRingVariants}
              animate={pulse ? "pulse" : "idle"}
              className="absolute inset-0 rounded-full bg-green-400"
            />

            {/* Main Button */}
            <Link
              href={contact.whatsappLink}
              target="_blank"
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl shadow-green-500/30 backdrop-blur-sm"
              aria-label="Fale conosco no WhatsApp"
              title="Clique para atendimento rápido via WhatsApp"
            >
              {/* Shine effect on hover */}
              <motion.div
                animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                transition={{ duration: 0.3 }}
              />

              <MessageCircle size={28} className="relative z-10" />

              {/* Online Status Indicator */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-400 shadow-lg"
              />
            </Link>

            {/* Animated Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-1/2 right-full mr-3 -translate-y-1/2 transform"
                >
                  <div className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium whitespace-nowrap text-white shadow-xl">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-green-400" />
                      <span>Fale conosco!</span>
                    </div>
                    <div className="absolute top-1/2 right-0 h-2 w-2 translate-x-1 -translate-y-1/2 rotate-45 transform bg-slate-900" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Particles on Hover */}
            <AnimatePresence>
              {isHovering && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: Math.random() * 40 - 20,
                        y: Math.random() * -30 - 10,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: i * 0.2,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sparkles className="h-3 w-3 text-yellow-400" />
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Hint for Mobile */}
      <AnimatePresence>
        {isVisible && !showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="lg:hidden"
          >
            <div className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
              Toque para conversar 👆
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWhatsAppButton;
