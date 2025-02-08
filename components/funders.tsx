import Image from "next/image"

const funders = [
  { name: "Lumiares", logo: "/placeholder.svg" },
  { name: "BioHealth Innovation Fund", logo: "/placeholder.svg" },
  { name: "imec istart", logo: "/placeholder.svg" },
  { name: "VLAIO", logo: "/placeholder.svg" },
]

export function Funders() {
  return (
    <section className="py-12 bg-sky-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl text-warm-purple text-center mb-8">Supported by</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="w-20 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image src={funder.logo || "/placeholder.svg"} alt={funder.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

