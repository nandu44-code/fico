import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger } from "@/components/Reveal";

const dishes = [
  {name:"The comfort plate", category:"EMPERIA · MAIN COURSE", note:"A generous meal made for slowing down.", image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"},
  {name:"Tea-time favourites", category:"SQUARE · TEA & SNACKS", note:"A little break can make the whole day.", image:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=85"},
  {name:"The street-style wrap", category:"KOOL · SHAWARMA", note:"Big flavour, wrapped up and ready to go.", image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85"},
];

export default function SignatureFavourites() {
  return <section id="favourites" className="section-pad bg-[#f1e7d8]">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-[#a2764b]">A taste of what's waiting</p><h2 className="font-display mt-4 text-5xl tracking-[-.055em] text-[#39271e] md:text-7xl">A few FIKO<br/><em className="font-normal text-[#a77c51]">favourites.</em></h2></div><p className="max-w-sm text-sm leading-7 text-[#796653]">A little preview from across our three spaces. Your next favourite might be right here.</p></Reveal>
      <Stagger className="grid gap-6 md:grid-cols-3">{dishes.map((dish,i)=><Reveal key={dish.name}><article className="group"><div className="photo relative aspect-[4/4.5] overflow-hidden rounded-2xl bg-[#d3bea2]" style={{backgroundImage:`url(${dish.image})`}}><span className="absolute left-4 top-4 rounded-full bg-[#fffaf1]/90 px-3 py-2 text-[9px] font-bold tracking-[.15em] text-[#815d39]">0{i+1}</span><span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-[#fff5e4] text-[#39271e] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={18}/></span></div><p className="eyebrow mt-5 text-[#a2764b]">{dish.category}</p><h3 className="font-display mt-2 text-3xl text-[#39271e]">{dish.name}</h3><p className="mt-2 text-sm text-[#796653]">{dish.note}</p></article></Reveal>)}</Stagger>
      <p className="mt-10 text-center text-[10px] uppercase tracking-[.18em] text-[#9a8065]">Sample menu concepts for presentation · Final dishes and prices to be confirmed</p>
    </div>
  </section>;
}
