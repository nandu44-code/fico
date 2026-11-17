"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2200&q=90";

export default function Hero() {
  return <section id="home" className="relative flex min-h-[760px] h-[100svh] max-h-[1050px] items-end overflow-hidden bg-[#39271e] text-[#fff5e4]">
    <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: [0.2, 0.7, 0.2, 1] }} className="absolute inset-0 photo" style={{ backgroundImage: `url(${heroImage})` }} />
    <div className="absolute inset-0 image-overlay" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#24170f]/70 via-transparent to-[#24170f]/20" />
    <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-24">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .8 }} className="max-w-3xl">
        <p className="eyebrow mb-6 text-[#e6c49c]">A little warmth. A lot of flavour.</p>
        <h1 className="font-display text-[clamp(4rem,10vw,9.5rem)] leading-[.83] tracking-[-.075em]">Find your<br/><em className="font-normal text-[#f1d8b7]">kind</em> of FIKO.</h1>
        <p className="mt-8 max-w-md text-sm leading-7 text-white/80 md:text-base">Three distinct experiences, countless reasons to stay a little longer. Come for the flavours, make memories along the way.</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#explore" className="group inline-flex items-center gap-3 rounded-full bg-[#fff5e4] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#39271e] transition hover:bg-[#c49a6c]">Explore FIKO <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></a>
          <a href="#story" className="rounded-full border border-white/50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10">Our story</a>
        </div>
      </motion.div>
      <div className="mt-16 flex items-end justify-between border-t border-white/30 pt-5">
        <p className="text-[10px] uppercase tracking-[.22em] text-white/65">Emperia · Square · Kool</p>
        <a href="#intro" className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/75">Scroll to discover <ArrowDown size={14}/></a>
      </div>
    </div>
    <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[.35em] text-white/70 xl:block">Good food brings us together</div>
  </section>;
}
