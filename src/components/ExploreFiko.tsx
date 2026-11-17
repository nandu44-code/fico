import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger } from "@/components/Reveal";

const spaces = [
  { number:"01", name:"FIKO EMPERIA", line:"A table worth gathering around.", desc:"A dining experience centred on satisfying main courses and memorable meals.", tags:"MAIN COURSE · SIGNATURE MEALS", image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85", id:"emperia" },
  { number:"02", name:"FIKO SQUARE", line:"Your everyday comfort corner.", desc:"Tea, breakfast favourites and the snacks that make an ordinary day better.", tags:"TEA · BREAKFAST · SNACKS", image:"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1100&q=85", id:"square" },
  { number:"03", name:"FIKO KOOL", line:"Fresh flavours. Cool vibes.", desc:"A lively stop for shawarma, chilled drinks and cool-bar favourites.", tags:"SHAWARMA · COOL BAR · DRINKS", image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1100&q=85", id:"kool" },
];

export default function ExploreFiko() {
  return <section id="explore" className="section-pad bg-[#39271e] text-[#fff5e4]">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="eyebrow text-[#d0a77b]">Three experiences, one destination</p><h2 className="font-display mt-5 max-w-2xl text-5xl leading-[.98] tracking-[-.055em] md:text-7xl">Find the FIKO<br/><em className="font-normal text-[#d8b58e]">that feels right.</em></h2></div>
        <p className="max-w-sm text-sm leading-7 text-[#d4c2ad]">Different moods. Different menus. The same warm welcome. Explore the three sides of FIKO.</p>
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-3">
        {spaces.map((space) => <Reveal key={space.id}>
          <a href="#favourites" className="group block">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[#72543b]">
              <div className="photo aspect-[4/5] transition duration-700 group-hover:scale-105" style={{backgroundImage:`url(${space.image})`}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20140e]/90 via-[#20140e]/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/40 px-3 py-2 text-[9px] tracking-[.18em] text-white">{space.number} / THE COLLECTION</span>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="eyebrow text-[#e3bd91]">{space.tags}</p>
                <h3 className="font-display mt-3 text-3xl tracking-[-.04em] text-white">{space.name}</h3>
                <p className="mt-2 text-sm text-white/85">{space.line}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/30 pt-4"><span className="text-xs text-white/70">Explore this experience</span><span className="grid size-10 place-items-center rounded-full bg-[#fff5e4] text-[#39271e] transition group-hover:-rotate-45"><ArrowUpRight size={18}/></span></div>
              </div>
            </div>
            <p className="px-1 pt-4 text-sm leading-6 text-[#c9b8a4]">{space.desc}</p>
          </a>
        </Reveal>)}
      </Stagger>
    </div>
  </section>;
}
