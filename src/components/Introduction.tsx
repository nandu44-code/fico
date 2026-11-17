import { Reveal } from "@/components/Reveal";

export default function Introduction() {
  return <section id="intro" className="section-pad bg-[#fffaf1]">
    <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[.85fr_1.15fr] md:gap-20">
      <Reveal className="relative">
        <div className="photo aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-2xl bg-[#d9c6aa]" style={{backgroundImage:"url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85)"}} />
        <div className="absolute -bottom-6 -right-3 rounded-full border border-[#c49a6c] bg-[#fffaf1] px-6 py-5 text-center shadow-lg md:-right-8"><span className="font-display text-3xl italic text-[#815d39]">Since day one</span><span className="mt-1 block text-[9px] uppercase tracking-[.2em] text-[#80654b]">Made for moments</span></div>
      </Reveal>
      <Reveal delay={.12}>
        <p className="eyebrow text-[#a2764b]">Welcome to FIKO</p>
        <h2 className="font-display mt-5 text-5xl leading-[1.02] tracking-[-.055em] text-[#39271e] md:text-7xl">One place.<br/><em className="font-normal text-[#a77c51]">Many ways</em> to enjoy.</h2>
        <p className="mt-7 max-w-xl text-base leading-8 text-[#796653]">Some days call for a proper meal. Some call for a cup of tea and a favourite snack. And some are simply better with a shawarma and something chilled. At FIKO, every craving has a corner.</p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#796653]">We bring different food experiences together in one welcoming destination — made for everyday pauses, shared plates and the moments in between.</p>
        <a href="#explore" className="mt-8 inline-flex items-center gap-3 border-b border-[#815d39] pb-2 text-xs font-bold uppercase tracking-[.16em] text-[#815d39] transition hover:gap-5">Discover the three spaces <span aria-hidden>↗</span></a>
      </Reveal>
    </div>
  </section>;
}
