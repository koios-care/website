import Image from "next/image"

const funders = [
  { name: "Lumiares", logo: "/lumiares.jpeg" },
  { name: "BioHealth Innovation Fund", logo: "/bluehealth.jpeg" },
  { name: "imec istart", logo: "/imec.jpeg" },
  { name: "VLAIO", logo: "/vlaio.jpeg" },
  { name: "European Innovation Council", logo: "/eic.jpeg" },
  { name: "Flanders Innovation & Entrepreneurship", logo: "/vlaio.jpeg" },
]

export function Funders() {
  return (
    <section className="py-12" style={{ backgroundColor: '#2A634D' }}>
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl text-white text-center mb-8">Supported by</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="w-32 h-32 relative bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-full relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={funder.logo || "/placeholder.svg"} 
                  alt={funder.name} 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

