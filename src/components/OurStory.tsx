import { Reveal } from "@/components/Reveal";

export default function OurStory() {
  return <section id="story" className="section-pad bg-[#fffaf1]">
    <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_.95fr] md:gap-20">
      <Reveal className="order-2 md:order-1"><p className="eyebrow text-[#a2764b]">The heart behind FIKO</p><h2 className="font-display mt-5 text-5xl leading-[1.02] tracking-[-.055em] text-[#39271e] md:text-7xl">Good food is<br/>just the <em className="font-normal text-[#a77c51]">beginning.</em></h2><p className="mt-7 max-w-xl text-base leading-8 text-[#796653]">We imagine FIKO as more than a place to eat. It is a place to pause between plans, catch up with people you love and discover something new with every visit.</p><p className="mt-4 max-w-xl text-sm leading-7 text-[#796653]">Across Emperia, Square and Kool, we bring together different tastes and everyday rituals under one roof — with hospitality at the centre of it all.</p><div className="mt-9 flex items-center gap-4"><span className="font-display text-4xl italic text-[#815d39]">FIKO</span><span className="h-px w-16 bg-[#c49a6c]"/><span className="text-[9px] uppercase tracking-[.2em] text-[#8d745c]">Come as you are</span></div></Reveal>
      <Reveal delay={.15} className="order-1 md:order-2"><div className="grid grid-cols-[1.1fr_.9fr] items-end gap-3"><div className="photo aspect-[3/4] rounded-t-full bg-[#d8c2a4]" style={{backgroundImage:"url(https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85)"}}/><div className="photo mb-10 aspect-[4/5] rounded-2xl bg-[#c6a982]" style={{backgroundImage:"url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85)"}}/></div></Reveal>
    </div>
  </section>;
}
