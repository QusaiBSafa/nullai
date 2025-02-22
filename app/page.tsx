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
  "Content Generators",
  "Music & Audio",
  "Business & Marketing",
  "Writing & Editing",
  "Coding & Development",
  "Productivity",
  "Design & Creativity",
  "Search & Research",
  "Education & Learning",
  "Voice & Audio",
  "SEO & Content Strategy",
  "Social Media",
  "Resume & Career",
  "Meeting & Collaboration",
  "AI Assistants",
  "AI Art",
  "AI for Developers",
  "AI for Designers",
  "AI for Marketers",
  "AI for Writers",
  "AI for Students",
  "AI for Creators",
];

const aiTools = [
  {
    name: "DeepSeek",
    categories: ["Search & Research", "AI Assistants"],
    url: "https://www.deepseek.com",
    description:
      "AI-powered search engine for research and knowledge, providing detailed answers and insights.",
  },
  {
    name: "Anyword",
    categories: ["Business & Marketing", "Content Generators"],
    url: "https://www.anyword.com",
    description: "AI-powered predictive analytics for marketing copy.",
  },
  {
    name: "AudioStrip",
    categories: ["Music & Audio"],
    url: "https://www.audiostrip.co.uk",
    description: "Near perfect instrumental and vocal isolation for free.",
  },
  {
    name: "Bearly",
    categories: ["Search & Research", "Productivity"],
    url: "https://www.bearly.ai",
    description: "Summarize research papers, PDFs, articles, and more.",
  },
  {
    name: "Beatoven.ai",
    categories: ["Music & Audio"],
    url: "https://www.beatoven.ai",
    description: "Compose unique mood-based music for videos or podcasts.",
  },
  {
    name: "Beepbooply",
    categories: ["Voice & Audio"],
    url: "https://www.beepbooply.com",
    description: "Generate text-to-speech with an AI voice generator.",
  },
  {
    name: "BoloForms",
    categories: ["Productivity"],
    url: "https://www.boloforms.com/sheetgod",
    description: "Turns English into Excel formulas in seconds.",
  },
  {
    name: "ChatGPT",
    categories: ["Chat Tools", "AI Assistants"],
    url: "https://chat.openai.com",
    description:
      "Chatbot that takes instructions and provides detailed responses.",
  },
  {
    name: "ChefGPT",
    categories: ["AI Assistants"],
    url: "https://www.chefgpt.xyz",
    description: "AI-powered digital chef for meal ideas.",
  },
  {
    name: "Cleanvoice",
    categories: ["Voice & Audio"],
    url: "https://www.cleanvoice.ai",
    description:
      "Removes filler sounds, stuttering, and mouth sounds from audio.",
  },
  {
    name: "Clipdrop",
    categories: ["Image Tools"],
    url: "https://www.clipdrop.co/remove-background",
    description: "Remove background from images in one click.",
  },
  {
    name: "Copy.ai",
    categories: ["Content Generators", "Writing & Editing"],
    url: "https://www.copy.ai",
    description: "Generate copywriting material for sales and marketing.",
  },
  {
    name: "Copysmith",
    categories: ["Content Generators", "Writing & Editing"],
    url: "https://www.copysmith.ai",
    description: "AI content generator for product descriptions.",
  },
  {
    name: "Cutout.pro",
    categories: ["Image Tools", "Video Generators"],
    url: "https://www.cutout.pro",
    description: "AI-powered image and video editing tools.",
  },
  {
    name: "DALL-E 2",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.openai.com/dall-e-2",
    description: "Create realistic images and art from text descriptions.",
  },
  {
    name: "Echowin",
    categories: ["AI Assistants", "Business & Marketing"],
    url: "https://www.echo.win",
    description: "AI for handling multiple calls and personalized responses.",
  },
  {
    name: "Eightify",
    categories: ["Search & Research"],
    url: "https://www.eightify.app",
    description: "Summarize YouTube videos with a link.",
  },
  {
    name: "Endel",
    categories: ["Music & Audio"],
    url: "https://www.endel.io",
    description: "Personalized soundscapes for focus, relaxation, and sleep.",
  },
  {
    name: "Fliki",
    categories: ["Video Generators"],
    url: "https://www.fliki.ai",
    description:
      "Create videos from scripts or blog posts using realistic voices.",
  },
  {
    name: "GhostWryter",
    categories: ["Writing & Editing", "SEO & Content Strategy"],
    url: "https://www.ghostwryter.net",
    description: "AI for writing SEO texts, blog posts, and marketing content.",
  },
  {
    name: "GitHub Copilot",
    categories: ["Coding & Development"],
    url: "https://www.github.com/features/copilot",
    description: "AI-powered coding assistant for developers.",
  },
  {
    name: "Glean",
    categories: ["Search & Research", "Productivity"],
    url: "https://www.glean.com",
    description: "Search across company apps to find what you need.",
  },
  {
    name: "HiveMind AI",
    categories: ["Business & Marketing"],
    url: "https://www.hivemindai.com",
    description: "Connects digital strategy to measurable business growth.",
  },
  {
    name: "Figma",
    categories: ["Design & Creativity"],
    url: "https://www.figma.com",
    description: "Convert websites into fully editable Figma designs.",
  },
  {
    name: "Illustroke",
    categories: ["AI Art", "Design & Creativity"],
    url: "https://www.illustroke.com",
    description: "Create stunning vector illustrations from text prompts.",
  },
  {
    name: "Jasper",
    categories: ["Writing & Editing", "Content Generators"],
    url: "https://www.jasper.ai",
    description: "AI for creating blog, social media, and website content.",
  },
  {
    name: "Jenni",
    categories: ["Writing & Editing"],
    url: "https://www.jenni.ai",
    description: "Write blogs, essays, or anything else 10x faster.",
  },
  {
    name: "Kickresume",
    categories: ["Resume & Career"],
    url: "https://www.kickresume.com",
    description: "AI-powered resume writing tool.",
  },
  {
    name: "Krisp",
    categories: ["Voice & Audio", "Meeting & Collaboration"],
    url: "https://www.krisp.ai",
    description: "Remove background noise from calls.",
  },
  {
    name: "Looka",
    categories: ["Design & Creativity", "Business & Marketing"],
    url: "https://www.looka.com",
    description: "AI-powered logo and brand design platform.",
  },
  {
    name: "Lumen5",
    categories: ["Video Generators"],
    url: "https://www.lumen5.com",
    description:
      "Turn blog posts into videos or transform Zoom recordings into clips.",
  },
  {
    name: "Midjourney",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.midjourney.com",
    description: "Generate images from text prompts.",
  },
  {
    name: "Moviebot",
    categories: ["Video Generators"],
    url: "https://www.moviebot.io",
    description: "Create, edit, and share AI-generated movies instantly.",
  },
  {
    name: "Murf AI",
    categories: ["Voice & Audio"],
    url: "https://www.murf.ai",
    description: "Create studio-quality voiceovers with AI voices.",
  },
  {
    name: "Namelix",
    categories: ["Business & Marketing"],
    url: "https://www.namelix.com",
    description: "Generate brandable business names using AI.",
  },
  {
    name: "OpenRead",
    categories: ["Search & Research", "Education & Learning"],
    url: "https://www.openread.io",
    description: "AI-powered interactive research papers.",
  },
  {
    name: "Otter.ai",
    categories: ["Meeting & Collaboration", "Productivity"],
    url: "https://www.otter.ai",
    description: "AI meeting assistant for notes and transcription.",
  },
  {
    name: "PlaylistAI",
    categories: ["Music & Audio"],
    url: "https://www.playlistai.app",
    description: "Create playlists from AI prompts, images, and videos.",
  },
  {
    name: "Postwise",
    categories: ["Social Media"],
    url: "https://www.postwise.ai",
    description: "Craft engaging posts and grow your Twitter followers.",
  },
  {
    name: "Prodigy",
    categories: ["Coding & Development"],
    url: "https://prodi.gy/",
    description: "Build AI systems that do exactly what you want.",
  },
  {
    name: "Profile Pic Maker",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.pfpmaker.com",
    description: "Create professional profile pictures with AI.",
  },
  {
    name: "Quickchat AI",
    categories: ["Chat Tools"],
    url: "https://www.quickchat.ai",
    description: "Build AI assistants that talk like humans.",
  },
  {
    name: "Quillbot",
    categories: ["Writing & Editing"],
    url: "https://www.quillbot.com",
    description: "Paraphrase and rewrite text instantly.",
  },
  {
    name: "Quizgecko",
    categories: ["Education & Learning"],
    url: "https://www.quizgecko.com",
    description: "Create quizzes from any text or URL using AI.",
  },
  {
    name: "Reface AI",
    categories: ["Video Generators", "AI Art"],
    url: "https://reface.ai/",
    description: "Create videos with your face swapped and animated.",
  },
  {
    name: "Remove.bg",
    categories: ["Image Tools"],
    url: "https://www.remove.bg",
    description: "Remove image backgrounds automatically.",
  },
  {
    name: "Repurpose.io",
    categories: ["Video Generators", "Social Media"],
    url: "https://www.repurpose.io",
    description: "Repurpose and distribute video and audio content.",
  },
  {
    name: "Resemble AI",
    categories: ["Voice & Audio"],
    url: "https://www.resemble.ai",
    description: "Clone your voice for human-like voiceovers.",
  },
  {
    name: "ResumeWorded",
    categories: ["Resume & Career"],
    url: "https://www.resumeworded.com",
    description: "Improve your resume and LinkedIn profile with AI feedback.",
  },
  {
    name: "Runway",
    categories: ["Video Generators", "Design & Creativity"],
    url: "https://www.runwayml.com",
    description: "AI-powered video editing and content creation suite.",
  },
  {
    name: "Rytr",
    categories: ["Writing & Editing"],
    url: "https://www.rytr.me",
    description: "AI writing tool for profile bios, ads, and landing pages.",
  },
  {
    name: "Scalenut",
    categories: ["SEO & Content Strategy"],
    url: "https://www.scalenut.com",
    description: "AI-powered SEO content strategy platform.",
  },
  {
    name: "SciSpace",
    categories: ["Search & Research", "Education & Learning"],
    url: "https://www.typeset.io",
    description: "AI copilot for decoding research papers.",
  },
  {
    name: "Secta AI",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.secta.ai",
    description: "Generate professional headshots from selfies.",
  },
  {
    name: "Simplified",
    categories: ["Content Generators", "Video Generators"],
    url: "https://www.simplified.com",
    description: "AI for copywriting, video editing, and marketing.",
  },
  {
    name: "Slides AI",
    categories: ["Productivity", "Business & Marketing"],
    url: "https://www.slidesai.io",
    description: "AI-powered presentation content creation.",
  },
  {
    name: "Soundful",
    categories: ["Music & Audio"],
    url: "https://www.soundful.com",
    description: "Generate royalty-free background music with AI.",
  },
  {
    name: "Spellbook",
    categories: ["Writing & Editing"],
    url: "https://www.spellbook.legal",
    description: "AI for reviewing and suggesting language in contracts.",
  },
  {
    name: "Steno",
    categories: ["Meeting & Collaboration"],
    url: "https://www.steno.ai",
    description: "Transcribe and reference podcasts and meetings.",
  },
  {
    name: "Stockimg.ai",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.stockimg.ai",
    description: "Design stock images with AI prompts.",
  },
  {
    name: "Storyd",
    categories: ["Business & Marketing"],
    url: "https://www.storyd.ai",
    description: "Create data presentations in seconds.",
  },
  {
    name: "Stylized",
    categories: ["Image Tools", "AI Art"],
    url: "https://www.stylized.ai",
    description: "Generate professional product photos from raw images.",
  },
  {
    name: "Supercreator AI",
    categories: ["Video Generators"],
    url: "https://www.supercreator.ai",
    description: "Create short-form videos 10x faster with AI.",
  },
  {
    name: "Supermeme",
    categories: ["Social Media", "AI Art"],
    url: "https://supermeme.ai/",
    description: "Turn text into memes using AI.",
  },
  {
    name: "Supernormal",
    categories: ["Meeting & Collaboration"],
    url: "https://www.supernormal.com",
    description: "AI-powered meeting notes creation.",
  },
  {
    name: "Synthesia",
    categories: ["Video Generators"],
    url: "https://www.synthesia.io",
    description: "Create videos from plain text in minutes.",
  },
  {
    name: "Tavus",
    categories: ["Video Generators"],
    url: "https://www.tavus.io",
    description: "Create personalized AI-generated videos from recordings.",
  },
  {
    name: "Timely AI",
    categories: ["Productivity"],
    url: "https://www.timely.com/",
    description: "Unlock business insights with 100% accurate time data.",
  },
  {
    name: "Tome",
    categories: ["AI Assistants"],
    url: "https://www.tome.app",
    description: "AI storytelling partner for presentations.",
  },
  {
    name: "Tribescaler",
    categories: ["Social Media"],
    url: "https://tribescaler.com/",
    description: "Generate irresistible Twitter hooks with AI.",
  },
  {
    name: "Tutor AI",
    categories: ["Education & Learning"],
    url: "https://www.tutorai.me",
    description: "AI tutor for learning anything.",
  },
  {
    name: "Typly AI",
    categories: ["Writing & Editing", "SEO & Content Strategy"],
    url: "https://www.typli.ai",
    description: "AI content tool with SEO assistance.",
  },
  {
    name: "Uizard",
    categories: ["Design & Creativity"],
    url: "https://www.uizard.io",
    description: "Design web apps, wireframes, and prototypes in minutes.",
  },
  {
    name: "Vidyo",
    categories: ["Video Generators"],
    url: "https://www.vidyo.ai",
    description: "Make short videos from long ones instantly.",
  },
  {
    name: "Waitroom",
    categories: ["Meeting & Collaboration"],
    url: "https://www.waitroom.com",
    description: "Revolutionary video meeting tool for remote teams.",
  },
  {
    name: "WebCopilot",
    categories: ["Productivity"],
    url: "https://www.webcopilot.co",
    description: "Write Notion pages with AI assistance.",
  },
  {
    name: "Whisper Memos",
    categories: ["Voice & Audio"],
    url: "https://www.whispermemos.com",
    description: "Turn voice memos into accurate transcripts with AI.",
  },
  {
    name: "Windsor",
    categories: ["Video Generators"],
    url: "https://www.windsor.io",
    description: "Send personalized AI-generated videos to customers.",
  },
  {
    name: "Wolfram Alpha",
    categories: ["Education & Learning", "Search & Research"],
    url: "https://www.wolframalpha.com",
    description: "Compute expert-level answers with AI technology.",
  },
  {
    name: "WordAi",
    categories: ["Writing & Editing"],
    url: "https://www.wordai.com",
    description: "AI-powered text rewriting tool.",
  },
  {
    name: "Wordtune",
    categories: ["Writing & Editing"],
    url: "https://www.wordtune.com",
    description: "Reword your thoughts into clear and compelling writing.",
  },
  {
    name: "Write Me a Cover Letter",
    categories: ["Resume & Career"],
    url: "https://www.success.ai/ai-tools/writemeacoverletter",
    description: "Create a cover letter in seconds using AI.",
  },
  {
    name: "Write With Laika",
    categories: ["Writing & Editing"],
    url: "https://www.writewithlaika.com",
    description:
      "AI creative partner trained to write like you or anyone else.",
  },
  {
    name: "Writely",
    categories: ["Writing & Editing"],
    url: "https://www.writesonic.com/chat",
    description: "AI tool for cutting down, elaborating, or rephrasing text.",
  },
  {
    name: "Yarnt",
    categories: ["Content Generators"],
    url: "https://www.yarnit.app",
    description:
      "Reduce time, cost, and complexity of digital content creation.",
  },
  {
    name: "Yippity",
    categories: ["Education & Learning"],
    url: "https://www.yippity.io",
    description: "Convert any text or website into a quiz automatically.",
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
