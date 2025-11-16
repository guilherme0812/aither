"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLandmark } from "react-icons/fa";

export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: "Florestas Urbanas Vivas",
      description:
        "Expansão de corredores verdes que reduzem poluição e aumentam a qualidade do ar em grandes cidades.",
      price: "R$ 29,90 / crédito",
      img: "https://plus.unsplash.com/premium_vector-1740238776729-fd5a3e456ff9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ODS 11",
    },
    {
      id: 2,
      title: "Ar Limpo nas Escolas",
      description:
        "Implementação de sensores e purificadores em escolas públicas para proteger crianças da poluição.",
      price: "R$ 19,90 / crédito",
      img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ODS 3",
    },
    {
      id: 3,
      title: "Mobilidade Sustentável",
      description:
        "Projetos que incentivam o transporte limpo e reduzem emissões em grandes regiões urbanas.",
      price: "R$ 24,90 / crédito",
      img: "https://plus.unsplash.com/premium_photo-1715702638527-1a7f52e8cc6f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ODS 11",
    },
    {
      id: 4,
      title: "Monitoramento da Qualidade do Ar",
      description:
        "Instalação de estações de medição do ar com dados abertos para a população.",
      price: "R$ 21,90 / crédito",
      img: "https://plus.unsplash.com/premium_photo-1669584354883-c78def402801?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ODS 3",
    },
    {
      id: 5,
      title: "Espaços Públicos Verdes",
      description:
        "Criação de parques comunitários em regiões poluídas, reduzindo CO₂ e incentivando convivência.",
      price: "R$ 32,00 / crédito",
      img: "https://plus.unsplash.com/premium_photo-1681558921634-f73645bde42f?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ODS 11",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLandmark className="text-purple-700 text-2xl" />
            <h1 className="text-2xl font-bold text-purple-700">Aither</h1>
          </div>

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a className="hover:text-purple-600 cursor-pointer">
              Carbonômetros
            </a>
            <a className="hover:text-purple-600 cursor-pointer">Impacto</a>
            <a className="hover:text-purple-600 cursor-pointer">Projetos</a>
            <a className="hover:text-purple-600 cursor-pointer">Sobre</a>
          </div>

          <div className="flex gap-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Começar
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[95vh] mt-20 overflow-hidden">
        {/* imagem */}
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
          alt="Clean Air"
          fill
          className="object-cover brightness-[0.45]"
        />

        {/* overlay gradiente */}
        <div className="absolute inset-0 from-black/40 to-black/60" />

        {/* conteúdo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl 2xl:text-6xl font-extrabold tracking-tight drop-shadow-xl max-w-4xl leading-tight"
          >
            Respire Futuro: Invista em Projetos que Salvam Vidas e Cidades
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl mt-6 max-w-2xl opacity-90"
          >
            Cada crédito de carbono comprado apoia iniciativas reais que reduzem
            poluição, promovem saúde pública e constroem cidades sustentáveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-6 mt-10 rounded-2xl shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            >
              Apoiar Projetos <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SESSÃO DE IMPACTO */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Por que investir em Créditos de Carbono?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A poluição do ar é um dos maiores riscos ambientais à saúde
              humana. Contribui para doenças respiratórias, cardiovasculares e
              cognitivas. Ao apoiar projetos ambientais, você não apenas
              compensa emissões, mas também transforma cidades e comunidades.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>🌱 Melhora da qualidade do ar</li>
              <li>🏥 Alinhamento ao ODS 3: Saúde e Bem-estar</li>
              <li>🌆 Fortalecimento do ODS 11: Cidades Sustentáveis</li>
              <li>📉 Redução de emissões em larga escala</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600493335086-fda9b82b3870?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Impacto ambiental"
              width={900}
              height={600}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* MARKETPLACE EXPANDIDO */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Compre Créditos de Carbono
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200">
                  <div className="relative w-full h-48">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex justify-between">
                      {p.title}
                      <span className="text-purple-600 text-sm font-bold">
                        {p.category}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.description}
                    </p>
                    <p className="font-bold text-lg text-purple-700">
                      {p.price}
                    </p>
                    <Button className="w-full rounded-xl py-5 text-base font-medium bg-purple-600 hover:bg-purple-700">
                      Comprar Crédito
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
