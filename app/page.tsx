"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Chat Tools",
  "Image Tools",
  "Video Generators",
  "Game Generators",
  "Content Generators",
  "Free Tools",
];

const aiTools = [
  {
    name: "ChatGPT",
    categories: ["Chat Tools", "Free Tools"],
    description: "AI chatbot for conversations and content creation.",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude AI",
    categories: ["Chat Tools"],
    description: "AI assistant with strong reasoning capabilities.",
    url: "https://claude.ai",
  },
  {
    name: "Bard",
    categories: ["Chat Tools"],
    description: "Google’s AI chatbot for creative and research purposes.",
    url: "https://bard.google.com",
  },

  {
    name: "Midjourney",
    categories: ["Image Tools"],
    description: "AI-powered image generation from text prompts.",
    url: "https://www.midjourney.com",
  },
  {
    name: "Stable Diffusion",
    categories: ["Image Tools", "Free Tools"],
    description: "Open-source AI for generating images from text.",
    url: "https://stablediffusionweb.com",
  },
  {
    name: "DALL·E 3",
    categories: ["Image Tools"],
    description: "Advanced AI for creative image generation.",
    url: "https://openai.com/dall-e",
  },

  {
    name: "Runway ML",
    categories: ["Video Generators"],
    description: "AI-powered video generation and editing tool.",
    url: "https://runwayml.com",
  },
  {
    name: "Pika Labs",
    categories: ["Video Generators"],
    description: "Create AI-generated videos from text prompts.",
    url: "https://pika.art",
  },
  {
    name: "Synthesia",
    categories: ["Video Generators"],
    description: "Generate AI avatars and videos from scripts.",
    url: "https://www.synthesia.io",
  },

  {
    name: "Leonardo AI",
    categories: ["Game Generators"],
    description: "AI tool for game asset and character generation.",
    url: "https://leonardo.ai",
  },
  {
    name: "Scenario.gg",
    categories: ["Game Generators"],
    description: "AI-generated assets for game development.",
    url: "https://scenario.gg",
  },
  {
    name: "Charisma AI",
    categories: ["Game Generators"],
    description: "AI-powered interactive storytelling for games.",
    url: "https://charisma.ai",
  },

  {
    name: "Jasper AI",
    categories: ["Content Generators"],
    description: "AI copywriting assistant for marketing and blogs.",
    url: "https://www.jasper.ai",
  },
  {
    name: "Copy.ai",
    categories: ["Content Generators"],
    description: "AI writing tool for sales and content creation.",
    url: "https://www.copy.ai",
  },
  {
    name: "Rytr",
    categories: ["Content Generators"],
    description: "AI-powered writing assistant for various content.",
    url: "https://rytr.me",
  },

  {
    name: "DeepSeek",
    categories: ["Free Tools", "Chat Tools"],
    description: "AI-powered search engine for research and knowledge.",
    url: "https://www.deepseek.com",
  },
  {
    name: "Perplexity AI",
    categories: ["Free Tools"],
    description: "AI search engine with detailed answers and citations.",
    url: "https://www.perplexity.ai",
  },
  {
    name: "Hugging Face",
    categories: ["Free Tools"],
    description: "Open AI models for NLP, vision, and more.",
    url: "https://huggingface.co",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter AI tools based on search and selected category
  const filteredTools = aiTools.filter(
    (tool) =>
      (selectedCategory === "All" ||
        tool.categories.includes(selectedCategory)) &&
      tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-min bg-gray-50">
          {/* Animated Title */}
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 mt-10 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Null<span className="text-blue-600">AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Discover the Best AI Tools in One Place
          </motion.p>
        </div>

        {/* Search Input */}
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Search AI Tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition cursor-pointer"
                onClick={() => window.open(tool.url, "_blank")}
              >
                <CardContent>
                  <h2 className="text-xl font-semibold mt-4">{tool.name}</h2>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tool.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 px-2 py-1 rounded-md"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-full">No AI tools found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
