import Image from "next/image"
import Link from "next/link"

const advisors = [
  {
    name: "Kris Schellens",
    role: "Biopharma Leader • previously director, Biogen Beglium",
    image: "/ks-nbg.png",
    linkedin: "https://www.linkedin.com/in/kris-schellens-27579710/",
  },
  {
    name: "Lampros Kourtis, PhD",
    role: "Lead of Gates Ventures ADDF • Alzheimer's Digital Diagnostics • Exited Founder",
    image: "/ik-nbg.png",
    linkedin: "https://www.linkedin.com/in/lamproskourtis1977/",
  },
  {
    name: "Gregor Strobbe, PhD",
    role: "Health-tech Entrepreneur • founder, CEO of Clouds of Care",
    image: "/gs-nbg.png",
    linkedin: "https://www.linkedin.com/in/gregor-strobbe-17b37525/",
  },
  {
    name: "Jurgen van Broeck, MBA",
    role: "CEO of mAbxcience",
    image: "/jvb-nbg.png",
    linkedin: "https://www.linkedin.com/in/jurgen-van-broeck-7842ba8/",
  },
  {
    name: "MD Jean-Briac Prevost",
    role: "Clinical Oncologist • Business",
    image: "/jb-nbg.png",
    linkedin: "https://www.linkedin.com/in/jean-briac-prevost-66b2131a",
  },
  {
    name: "Hadeel Elamer",
    role: "Businsess Development Advisor • ex-Digital Lead @Abbott",
    image: "/hadeel.png",
    linkedin: "https://www.linkedin.com/in/jean-briac-prevost-66b2131a",
  }
]

export function Advisors() {
  return (
    <section className="py-20 bg-bubbly-pink/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl text-warm-purple text-center mb-12">Our Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advisors.map((advisor, index) => (
            <Link 
              href={advisor.linkedin}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center p-6 bg-wood-green/10 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow border border-wood-green/20">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 