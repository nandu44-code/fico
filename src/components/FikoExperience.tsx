import { Reveal } from "@/components/Reveal";

const photos = [
  {src:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85", title:"A warm welcome"},
  {src:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85", title:"Room to connect"},
  {src:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85", title:"Moments to savour"},
];
export default function FikoExperience() {
  return <section className="section-pad bg-[#39271e] text-[#fff5e4]"><div className="mx-auto max-w-7xl"><Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-[#d0a77b]">The FIKO feeling</p><h2 className="font-display mt-5 text-5xl tracking-[-.055em] md:text-7xl">Stay for the<br/><em className="font-normal text-[#d8b58e]">experience.</em></h2></div><p className="max-w-sm text-sm leading-7 text-[#d4c2ad]">Come together over a meal, take a little pause or make an afternoon of it. There's always room for one more.</p></Reveal><div className="grid gap-4 md:grid-cols-[1.2fr_.8fr_.8fr]"><Reveal><div className="photo relative aspect-[4/5] overflow-hidden rounded-2xl" style={{backgroundImage:`url(${photos[0].src})`}}><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><p className="absolute bottom-6 left-6 font-display text-3xl">{photos[0].title}</p></div></Reveal>{photos.slice(1).map((p,i)=><Reveal key={p.title} delay={i*.12}><div className="photo relative mt-0 aspect-[4/5] overflow-hidden rounded-2xl md:mt-14" style={{backgroundImage:`url(${p.src})`}}><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><p className="absolute bottom-6 left-6 font-display text-3xl">{p.title}</p></div></Reveal>)}</div></div></section>;
}
