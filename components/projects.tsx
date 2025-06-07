"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "",
    title: "Twilight",
    description:
      "Robust and responsive music streaming platform. Your personal music universe where sound meets magic.",
    image: "/twilight.webp",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS"],
    // demoUrl: "",
    githubUrl: "https://github.com/amith1315/Twilight",
    features: [
      "Curate Playlists - Create personalized playlists",
      "Powerful Search - Find tracks, albums, or artists",
      "Immersive UI - A visually engaging music player"
    ],
  },
  {
    logo: "",
    title: "Real-time Twitter Sentiment Analysis",
    description:
      "Classifies Twitter sentiment in real-time using Kafka, Spark Streaming, and PostgreSQL.",
    image: "/real_time_twitter.webp",
    tags: ["Apache Kafka", "Apache Spark Streaming", "PostgreSQL", "Python"],
    // demoUrl: "",
    githubUrl: "https://github.com/amith1315/Real-time-Twitter-Sentiment-Analysis-using-Apache-Kafka-Spark-Streaming-and-PostgreSQL",
    features: [
      "Real-time tweet sentiment classification: Positive, Neutral, Negative",
      "Stream processing with low latency",
      "Historical sentiment analysis using batch processing",
      "Data storage in PostgreSQL for analytics",
      "Live sentiment dashboards via Kafka consumers",
    ],
  },
  {
    logo: "",
    title: "An Effective Distributed Logging System",
    description:
      "Engineered a comprehensive distributed logging system for microservices that features log collection. ",
    image: "/argus.webp",
    tags: ["Python","Apache Kafka", "Kibana", "Fluentd"],
    // demoUrl: "",
    githubUrl: "",
    features: [
      "Kibana analytics dashboard for data visualization",
      "Integrated alerting and monitoring system",
      "Efficiently manages log data flow across distributed services",
      "real-time monitoring and proactive system maintenance",
    ],
  },
  {
    logo: "",
    title: "TwikTk: Twitter Client with GUI",
    description:
      "Twitter client app fetch, analyze, and visualize tweets, trends, and user data.",
    image: "/twik.webp",
    tags: [ "Python", "Tweepy", "Tkinter", "Textblob"],
    // demoUrl: "",
    githubUrl: "",
    features: [
      "Fetch user profiles and topic-based tweets by time",
      "Track global and local trending topics",
      "Detect patterns and anomalies for predictions",
    ]
  },
  {
    logo: "",
    title: "IoT Weather Station",
    description:
      "Web Application integrated with Raspberry Pi4 is a smart environmental monitoring system.",
    image: "/iot.webp",
    tags: ["RaspBerry Pi4", "OpenWeather API", "HTML", "Integrated Sensors"],
    // demoUrl: "",
    githubUrl: "",
    features: [
      "Collect,analyze, and transmit real-time weather data using IoT",
      "Sensors like DHT11, BMP180, Rain sensor",
      "Collected data is transmitted to a cloud platform",
      "Remote access and visualization through dashboards",
    ],
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  {/* to add live url */}
                  {/* <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button> */}
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}