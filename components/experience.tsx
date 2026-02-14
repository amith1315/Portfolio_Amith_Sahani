"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Teaching Assistant(Statistics for Data Science)",
    company: "PES University",
    period: "Aug 2025 - Dec 2025",
    responsibilities: [
      "Guiding juniors in mastering data analytics tools such as Selenium, Beautiful Soup, Pandas, NumPy, and Seaborn.",
      "While also strengthening their understanding of statistics, teaching them practical techniques in data cleaning,preprocessing, and visualization to help build strong analytical and problem-solving skills for real-world applications.",
    ],
    skills: ["Python","Numpy", "Selenium"],
  },
  {
    title: "Data Science Intern",
    company: "Evoastra Ventures",
    period: "Jun 2025 - Aug 2025",
    responsibilities: [
      "Analyzed large, structured datasets using SQL and Python, focusing on performance and correctness.",
      "Manage project deliverables in an agile setting, from rigorous model evaluation to communicating technical results to stakeholders.",
    ],
    skills: ["Python","SQL"],
  },
  {
    title: "Research Intern",
    company: "PES University CCNCS",
    period: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Designed and developed ML based anomaly detection systems to address cybersecurity challenges in Industrial IoT environments.",
      "Worked with network protocols, real-time data streams, and system-level threat detection.",
    ],
    skills: ["Python","Scikit-learn","TensorFlow","Network protocols"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
