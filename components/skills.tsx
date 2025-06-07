"use client"

import { motion } from "framer-motion"
import { FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact} from "react-icons/fa";
import { SiMongodb, SiMysql,SiExpress } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { SiGo, SiPython,SiJavascript, SiR,SiC,SiDocker,SiKubernetes} from "react-icons/si";
import { SiApachekafka,SiApachespark,SiApachehadoop} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

const skillCategories = [
  {
    title: "Programming Language",
    skills: [
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "C", icon: <SiC className="text-blue-600" /> },
      { name: "GoLang", icon: <SiGo className="text-cyan-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "R", icon: <SiR className="text-blue-600" /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
      { name: "Node.js", icon: <DiNodejs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      // { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    ],
  },
  {
    title: "Big Data",
    skills: [
      { name: " Hadoop", icon: <SiApachehadoop className="text-yellow-500" /> },
      { name: " Kafka", icon: <SiApachekafka className="text-black dark:text-white" /> },
      { name: " Spark", icon: <SiApachespark className="text-orange-500" /> },
      { name: "SparkSQL", icon: <FaDatabase className="text-blue-500" /> },

    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    ],
  },
  // {
  //   title: "Tools & Platforms",
  //   skills: [
  //     { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  //     { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  //     { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  //     { name: "Figma", icon: <IoLogoFigma className="text-purple-600" /> },
  //     { name: "Vercel", icon: <IoLogoVercel className="text-black dark:text-white" /> },
  //   ],
  // },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I've worked with throughout my projects and experience
        </motion.p>

        <motion.div 
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}