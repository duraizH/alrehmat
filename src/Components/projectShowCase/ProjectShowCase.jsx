
import {motion} from "framer-motion";
function ProjectShowCase({ img,title,description }) {
  return (
    <div className="flex flex-col p-10 space-y-8 cursor-pointer">
      <motion.div
      className="hover:rounded-lg transition-all"
      >
        <img className="w-full rounded-lg hover:scale-110 transition-all" src={img} alt={title} />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-black text-4xl font-bold capitalize">{title}</h2>
        <p className=" text-slate-600 leading-8 text-[1.3rem] font-semibold  my-2">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default ProjectShowCase;
