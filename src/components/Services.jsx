import{motion}from"framer-motion";
const s=[["Anxiety Support"],["Trauma Healing"],["Burnout Recovery"]];
export default()=> (
<section className="py-20 px-10">
<h2 className="text-4xl text-center mb-10">How I Can Help</h2>
<div className="grid md:grid-cols-3 gap-8">
{s.map((x,i)=>(<motion.div key={i} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}} className="p-6 bg-neutral-50 rounded-xl shadow">{x}</motion.div>))}
</div>
</section>
);