"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Aperture,
  ArrowRight,
  Camera,
  Film,
  Flashlight,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Só executa no cliente
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simula um progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Redireciona após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        router.push("/joaogarcia");
      }, 800);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [router]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/joaogarcia");
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6"
        >
          {/* Background Elements - Efeitos de câmera e luz */}
          <div className="absolute inset-0 opacity-30">
            {/* Lens Flare Effects */}
            <div className="absolute top-1/4 left-1/4 h-32 w-32 animate-pulse rounded-full bg-yellow-400/20 blur-3xl"></div>
            <div className="absolute right-1/3 bottom-1/3 h-40 w-40 animate-pulse rounded-full bg-blue-400/20 blur-3xl delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 h-24 w-24 animate-pulse rounded-full bg-white/10 blur-2xl delay-500"></div>

            {/* Grid Pattern - Simulando sensor de câmera */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid h-full w-full grid-cols-12 gap-1">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="rounded-sm bg-white/5"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Elementos flutuantes fotográficos */}
          {windowSize.width > 0 && windowSize.height > 0 && (
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  {i % 4 === 0 ? (
                    <Aperture className="h-5 w-5 text-yellow-400/60" />
                  ) : i % 4 === 1 ? (
                    <Sparkles className="h-4 w-4 text-blue-400/60" />
                  ) : i % 4 === 2 ? (
                    <Film className="h-4 w-4 text-white/40" />
                  ) : (
                    <Flashlight className="h-4 w-4 text-gray-400/60" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Shutter Effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 0.5, times: [0, 0.1, 1], delay: 0.5 }}
          />

          {/* Conteúdo Principal */}
          <div className="z-10 max-w-2xl text-center">
            {/* Logo Animation - Câmera */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-2xl shadow-yellow-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Camera className="h-12 w-12 text-white" />
                </motion.div>

                {/* Lens Reflection */}
                <motion.div
                  className="absolute top-4 right-4 h-3 w-3 rounded-full bg-white/80"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                />

                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <Aperture className="h-5 w-5 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-6xl font-bold text-transparent md:text-7xl"
            >
              João Garcia
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-3 text-2xl font-light text-gray-300 md:text-3xl"
            >
              Fotógrafo Profissional
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8 text-3xl font-semibold text-white md:text-4xl"
            >
              Capturando Emoções
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-gray-400"
            >
              Transformo momentos especiais em memórias eternas através da arte
              da fotografia. Cada clique conta uma história única.
            </motion.p>

            {/* Progress Bar - Simulando carregamento da câmera */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 2 }}
              className="mx-auto mb-8 max-w-sm"
            >
              <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-2 text-sm text-gray-400"
              >
                Preparando a lente... {progress}%
              </motion.p>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              onClick={handleSkip}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-600 bg-yellow-500/10 px-8 py-4 text-yellow-400 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Portfólio</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* Features - Especialidades fotográficas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-yellow-400" />
                <span>Ensaios Profissionais</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span>Casamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Aperture className="h-4 w-4 text-yellow-400" />
                <span>Eventos Corporativos</span>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-8 text-xs text-gray-500"
            >
              <p>Eternizando momentos desde 2014</p>
            </motion.div>
          </div>

          {/* Efeito de flash sutil */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.3, times: [0, 0.1, 1], delay: 1 }}
          />

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
