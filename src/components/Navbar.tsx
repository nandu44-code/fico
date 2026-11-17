"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Our spaces", "#explore"], ["Favourites", "#favourites"], ["Our story", "#story"],
  ["Community", "#community"], ["Gallery", "#gallery"], ["Visit", "#visit"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-[#fffaf1]/90 px-5 py-3 shadow-[0_8px_35px_rgba(57,39,30,.09)] backdrop-blur-xl md:px-7">
        <a href="#home" aria-label="FIKO home" className="flex items-center gap-3">
          <span className="font-display text-[2rem] font-bold leading-none tracking-[-.09em] text-[#815d39]">FIKO<span className="text-[#c49a6c]">.</span></span>
          <span className="hidden border-l border-[#d8c6ad] pl-3 text-[9px] font-semibold uppercase leading-tight tracking-[.2em] text-[#80654b] sm:block">Three experiences<br/>one destination</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#594333] transition-colors hover:text-[#b47b46]">{label}</a>)}
          <a href="#visit" className="group flex items-center gap-2 rounded-full bg-[#815d39] px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#fff5e4] transition hover:bg-[#39271e]">Find us <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="rounded-full p-2 text-[#39271e] lg:hidden">{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
    <AnimatePresence>
      {open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="fixed inset-x-4 top-[86px] z-40 rounded-3xl border border-[#e7d8c3] bg-[#fffaf1] p-5 shadow-xl lg:hidden">
        <div className="flex flex-col">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[#eadfce] py-4 font-display text-2xl text-[#39271e]">{label}</a>)}</div>
        <a href="#visit" onClick={() => setOpen(false)} className="mt-5 flex items-center justify-between rounded-full bg-[#815d39] px-5 py-4 text-sm font-semibold text-white">Plan your visit <ArrowUpRight size={17}/></a>
      </motion.div>}
    </AnimatePresence>
  </>;
}
