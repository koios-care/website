'use client'

import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface Publication {
  title: string
  authors: string
  journal: string
  year: string
  link?: string
}

const publications: Record<string, Publication[]> = {
  "Parkinson's Disease": [
    {
      title: "Touchscreen typing-pattern analysis for detecting fine motor skills decline in early-stage Parkinson's disease",
      authors: "Iakovakis, D., Hadjidimitriou, S., Charisis, V., Bostantzopoulou, S., Katsarou, Z., & Hadjileontiadis, L. J.",
      journal: "Scientific reports, 8(1), 1-13",
      year: "2018"
    },
    {
      title: "Motor Impairment Estimates via Touchscreen Typing Dynamics Toward Parkinson's Disease Detection From Data Harvested In-the-Wild",
      authors: "Iakovakis, D., Hadjidimitriou, S., Charisis, V., Bostantjopoulou, S., Katsarou, Z., Klingelhoefer, L., ... & Chaudhuri, K. Hadjileontiadis, L. J.",
      journal: "Frontiers in ICT, 5, 28",
      year: "2018"
    },
    {
      title: "Screening of Parkinsonian subtle fine-motor impairment from touchscreen typing via deep learning",
      authors: "Iakovakis, D., Hadjidimitriou, S., Charisis, V., Bostantjopoulou, S., Katsarou, Z., Klingelhoefer, L., Chaudhuri, K., & Hadjileontiadis, L. J.",
      journal: "Scientific reports, 10(1), 1-13",
      year: "2020"
    },
    {
      title: "Unobtrusive detection of Parkinson's disease from multi-modal and in-the-wild sensor data using deep learning techniques",
      authors: "Papadopoulos, A., Iakovakis, D., Klingelhoefer, L., Bostantjopoulou, S., Chaudhuri, K. R., Kyritsis, K., ... & Delopoulos, A.",
      journal: "Scientific Reports, 10(1), 1-13",
      year: "2020"
    },
    {
      title: "DeepFoG: An IMU-based Detection of Freezing-of-Gait Episodes in Parkinson's Disease Patients via Deep Learning",
      authors: "Bikias, T., Iakovakis, D., Hadjidimitriou, S, Charisis V. and Hadjileontiadis LJ.",
      journal: "Front. Robot. AI - Sensor Fusion and Machine Perception",
      year: "2021"
    },
    {
      title: "Parkinson's Disease Detection Based on Running Speech Data From Phone Calls",
      authors: "Laganas, C, Iakovakis, D., Hadjidimitriou, S., Charisis, V., Bostantzopoulou, S., Katsarou, Z., & Hadjileontiadis, L. J.",
      journal: "IEEE Trans. Biomedical Engineering",
      year: "2022"
    },
    {
      title: "Detecting parkinsonian tremor from IMU data collected in-the-wild using deep multiple-instance learning",
      authors: "Papadopoulos, A., Kyritsis, K., Klingelhoefer, L., Bostanjopoulou, S., Chaudhuri, K. R., & Delopoulos, A.",
      journal: "IEEE Journal of Biomedical and Health Informatics, 24(9), 2559-2569",
      year: "2019"
    },
    {
      title: "Assessment of real-life eating difficulties in Parkinson's disease patients by measuring plate-to-mouth movement elongation with inertial sensors",
      authors: "Kyritsis, K., Fagerberg, P., Ioakimidis, I., Chaudhuri, K., Reichmann, H., Klingelhoefer, L., & Delopoulos, A.",
      journal: "Scientific reports, 11(1), 1-14",
      year: "2021"
    }
  ],
  "Mild Cognitive Impairment": [
    {
      title: "Detection of Mild Cognitive Impairment through natural language and touchscreen typing processing",
      authors: "Ntracha, A., Iakovakis, D., Hadjidimitriou, S., Charisis, V., Tsolaki, M., & Hadjileontiadis, L. J.",
      journal: "Frontiers in Digital Health, 2, 19",
      year: "2020"
    }
  ],
  "Depression": [
    {
      title: "Touchscreen typing pattern analysis for remote detection of the depressive tendency",
      authors: "Mastoras, R. E., Iakovakis, D., Hadjidimitriou, S., Charisis, V., Kassie, S., Alsaadi, T., & Hadjileontiadis, L. J.",
      journal: "Scientific reports, 9(1), 1-12",
      year: "2019"
    }
  ],
  "Orthostatic Hypotension": [
    {
      title: "Fuzzy logic-based risk of fall estimation using smartwatch data as a means to form an assistive feedback mechanism in everyday living activities",
      authors: "Iakovakis, D., Papadopoulou, F. A., & Hadjileontiadis, L. J.",
      journal: "Healthcare technology letters, 3(4), 263-268",
      year: "2016"
    },
    {
      title: "Standing hypotension prediction based on smartwatch heart rate variability data: a novel approach",
      authors: "Iakovakis, D., L Hadjileontiadis",
      journal: "Proceedings of the 18th International Conference on Human-Computer Interaction",
      year: "2016"
    }
  ]
}

function ResearchArea({ title, papers }: { title: string; papers: Publication[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-warm-purple mb-6">{title}</h2>
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-warm-purple/10 hover:border-warm-purple/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
            <p className="text-gray-600 mb-2">{paper.authors}</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">{paper.journal}</p>
              <span className="text-warm-purple font-semibold">{paper.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ResearchVisualization() {
  const areas = [
    { name: "Parkinson's Disease", count: 8, color: "#4A2B5F" },
    { name: "Mild Cognitive Impairment", count: 1, color: "#D25137" },
    { name: "Depression", count: 1, color: "#89CFF0" },
    { name: "Orthostatic Hypotension", count: 2, color: "#E4C1D5" }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-warm-purple mb-6">Research Areas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div 
            key={index}
            className="relative p-4 rounded-xl"
            style={{ backgroundColor: `${area.color}10` }}
          >
            <div 
              className="w-full h-2 rounded-full mb-2"
              style={{ backgroundColor: area.color }}
            />
            <h3 className="text-lg font-semibold mb-1" style={{ color: area.color }}>
              {area.name}
            </h3>
            <p className="text-sm text-gray-600">
              {area.count} publication{area.count !== 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function TeamResearchImpact() {
  const teamResearch = [
    {
      name: "Dimitrios Iakovakis, PhD",
      role: "CTO",
      citations: 796,
      hIndex: 16,
      i10Index: 20,
      expertise: ["Biomedical Engineering", "Human Computer Interaction", "Machine Learning", "Digital Health"],
      keyAreas: ["Parkinson's Disease", "Depression", "Motor Impairment Analysis"],
      image: "/iakovakis.jpeg",
      highlightPaper: {
        title: "Touchscreen typing pattern analysis for detecting fine motor skills decline in early-stage Parkinson's disease",
        citations: 92,
        year: 2018
      }
    },
    {
      name: "Konstantinos Kyritsis, PhD",
      role: "CEO",
      citations: 541,
      hIndex: 13,
      i10Index: 16,
      expertise: ["Signal Processing", "Machine Learning", "Sensors", "Behavioral Modeling", "Computer Vision"],
      keyAreas: ["Eating Behavior Analysis", "Parkinson's Disease", "IMU Sensors"],
      image: "/konstantinos.jpeg",
      highlightPaper: {
        title: "Detecting parkinsonian tremor from IMU data collected in-the-wild using deep multiple-instance learning",
        citations: 81,
        year: 2019
      }
    },
    {
      name: "Prof. MD Gaëtan Garraux",
      role: "Clinical Lead Neurology Professor @CHU Liege",
      citations: 4850,
      hIndex: 38,
      i10Index: 82,
      expertise: ["Movement Disorders", "Neurology", "Clinical Research", "Parkinson's Disease"],
      keyAreas: ["Clinical Neurology", "Movement Disorders", "Neuroimaging"],
      image: "/gaetan.jpeg",
      highlightPaper: {
        title: "Brain energy metabolism and dopamine function in Parkinson's disease",
        citations: 245,
        year: 2017
      }
    },
    {
      name: "Gregor Strobbe, PhD",
      role: "Advisor",
      citations: 680,
      hIndex: 15,
      i10Index: 18,
      expertise: ["Digital Health", "Healthcare Innovation", "Medical Technology", "Entrepreneurship"],
      keyAreas: ["Health Technology", "Digital Transformation", "Healthcare Solutions"],
      image: "/strobbe.jpeg",
      highlightPaper: {
        title: "Digital health solutions for improved patient care and monitoring",
        citations: 125,
        year: 2020
      }
    },
    {
      name: "Lampros Kourtis, PhD",
      role: "Advisor",
      citations: 1830,
      hIndex: 23,
      i10Index: 38,
      expertise: ["Digital Biomarkers", "Alzheimer's Disease", "Wearable Technology"],
      keyAreas: ["Digital Medicine", "Cognitive Impairment", "Medical Devices"],
      image: "/kourtis.jpeg",
      highlightPaper: {
        title: "Digital biomarkers for Alzheimer's disease: the mobile/wearable devices opportunity",
        citations: 359,
        year: 2019
      }
    }
  ]

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-warm-purple mb-8">Team Research Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamResearch.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-warm-purple/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-profile.png';
                }}
                priority
              />
              <div>
                <h3 className="text-lg font-semibold text-warm-purple">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-warm-purple">{member.citations}</p>
                <p className="text-xs text-gray-600">Citations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-warm-purple">{member.hIndex}</p>
                <p className="text-xs text-gray-600">h-index</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-warm-purple">{member.i10Index}</p>
                <p className="text-xs text-gray-600">i10-index</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-warm-purple/5 text-warm-purple rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Research Areas</h4>
              <div className="flex flex-wrap gap-2">
                {member.keyAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-2 py-1 bg-bubbly-pink/5 text-bubbly-pink rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Most Cited Paper</h4>
              <p className="text-sm text-gray-600 mb-1">{member.highlightPaper.title}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{member.highlightPaper.year}</span>
                <span>{member.highlightPaper.citations} citations</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function Publications() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#4A2B5F"
        backgroundColor="white"
        title="Our Publications"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our research focuses on developing innovative digital biomarkers and AI-enabled solutions 
              for various neurological and mental health conditions.
            </p>
          </div>

          <TeamResearchImpact />
          
          <ResearchVisualization />

          {Object.entries(publications).map(([area, papers]) => (
            <ResearchArea key={area} title={area} papers={papers} />
          ))}
        </div>
      </div>
    </div>
  )
} 