import Image from "next/image"

const teamMembers = [
  {
    name: "Prof. MD Gaëtan Garraux",
    role: "Clinical Lead Neurology Professor @CHU Liege",
    image: "/placeholder.svg",
  },
  {
    name: "Konstantinos Kyritsis, PhD",
    role: "CEO",
    image: "/placeholder.svg",
  },
  {
    name: "Patricia van Rompuy",
    role: "Quality and Clinical trial lead",
    image: "/placeholder.svg",
  },
  {
    name: "Apostolis Moustaklis",
    role: "Junior R&D engineer",
    image: "/placeholder.svg",
  },
  {
    name: "Vasileios Papapanagiotou, PhD",
    role: "Senior R&D engineer Professor @Karonlinska ",
    image: "/placeholder.svg",
  },
  {
    name: "Dimitris Iakovakis, PhD",
    role: "CTO",
    image: "/placeholder.svg",
  },
]

export function TeamNetwork() {
  return (
    <section className="py-20 bg-sky-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl text-warm-purple text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-display text-xl text-warm-purple">{member.name}</h3>
              <p className="text-wood-green">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

