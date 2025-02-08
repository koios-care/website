import Image from "next/image"

const advisors = [
  {
    name: "Kris Schellens",
    role: "Biopharma Leader • previously director, Biogen Beglium",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Lampros Kourtis",
    role: "Lead of Gates Ventures ADDF • Alzheimer's Digital Diagnostics • Exited Founder",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Gregor Strobbe",
    role: "Health-tech Entrepreneur • founder, CEO of Clouds of Care",
    image: "/placeholder.svg",
  },
  {
    name: "Jurgen van Broeck",
    role: "CEO of mAbxcience",
    image: "/placeholder.svg",
  },
  {
    name: "MD Jean-Briac Prevost",
    role: "Clinical Oncologist - Business",
    image: "/placeholder.svg",
  },
]

export function Advisors() {
  return (
    <section className="py-20 bg-bubbly-pink/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl text-warm-purple text-center mb-12">Our Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advisors.map((advisor, index) => (
            <div key={index} className="text-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Image
                src={advisor.image || "/placeholder.svg"}
                alt={advisor.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-display text-xl text-warm-purple mb-2">{advisor.name}</h3>
              <p className="text-wood-green text-sm leading-relaxed">{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 