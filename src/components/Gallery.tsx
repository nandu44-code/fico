import { Reveal } from "@/components/Reveal";
const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
];
export default function Gallery() {
  return <section id="gallery" className="section-pad bg-[#fffaf1]"><div className="mx-auto max-w-7xl"><Reveal className="mb-12 text-center"><p className="eyebrow text-[#a2764b]">A glimpse of FIKO</p><h2 className="font-display mt-4 text-5xl tracking-[-.055em] text-[#39271e] md:text-7xl">Little moments,<br/><em className="font-normal text-[#a77c51]">beautifully shared.</em></h2></Reveal><div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">{images.map((src,i)=><Reveal key={src} delay={(i%3)*.08}><div className={`photo group overflow-hidden rounded-xl bg-[#d9c6aa] ${i===1||i===4?"aspect-[4/5]":"aspect-[5/4]"}`} style={{backgroundImage:`url(${src})`}}><div className="flex h-full items-end bg-gradient-to-t from-[#39271e]/45 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100"><span className="text-[10px] uppercase tracking-[.2em] text-white">FIKO moments · 0{i+1}</span></div></div></Reveal>)}</div></div></section>;
}
