'use client'

import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Mission</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Empowering care with clinically meaningful insights from everyday devices, unobtrusively. Starting with Parkinson's Disease.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Unobtrusive sensing and clinically meaningful technology will pave the way for improved quality care for people with neuro and chronic diseases.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 