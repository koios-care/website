import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Prof. MD Gaëtan Garraux",
    role: "Clinical Lead Neurology Professor @CHU Liege",
    image: "/gg-nbg.png",
    linkedin: "https://www.linkedin.com/in/gaëtan-garraux-md-phd-8744b2a/",
  },
  {
    name: "Konstantinos Kyritsis, PhD",
    role: "CEO",
    image: "/konstantinos.jpeg",
    linkedin: "https://www.linkedin.com/in/konstantinos-kyritsis-0a6b0a4a/",
  },
  {
    name: "Patricia Van Rompuy",
    role: "Quality and Clinical trial lead",
    image: "/pvr-nbg.png",
    linkedin: "https://www.linkedin.com/in/patricia-van-rompuy-341927b/",
  },
  {
    name: "Apostolis Moustaklis",
    role: "Junior R&D engineer",
    image: "/AM-nbg.png",
    linkedin: "https://www.linkedin.com/in/apostolos-moustaklis-941a45162/",
  },
  {
    name: "Vasileios Papapanagiotou, PhD",
    role: "Senior R&D engineer Professor @Karonlinska ",
    image: "/vp-nbg.png",
    linkedin: "https://www.linkedin.com/in/vasileios-papapanagiotou-3155b990/",
  },
  {
    name: "Dimitris Iakovakis, PhD",
    role: "CTO",
    image: "/di-nbg.png",
    linkedin: "https://www.linkedin.com/in/iakovakis/",
  },
  {
    name: "Bram Lenaerts",
    role: "Commercial Lead",
    image: "/bram.png",
    linkedin: "https://www.linkedin.com/in/bram-lenaerts-83a26a20/",
  }
]

export function TeamNetwork() {
  return (
    <section className="py-20 bg-sky-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl text-warm-purple text-center mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Link 
              href={member.linkedin} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 w-full sm:w-80 md:w-72 lg:w-80"
            >
              <div className="text-center p-6 bg-wood-green/10 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow border border-wood-green/20 h-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-display text-xl text-warm-purple mb-2">{member.name}</h3>
                <p className="text-wood-green text-sm leading-relaxed">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

