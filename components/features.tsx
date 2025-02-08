import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Quality of Life Index",
      description: "Characterize disease stage and patient functioning using passive digital measures like plate-to-mouth, fine motor control,  meal-sleep-activity cycles",
      },
    {
      title: "Early-Stage Screening",
      description:
        "Detection and monitoring of early Parkinson's Disease signs, early population triaging for clinical trials",
    },
    {
      title: "Treatment Effectiveness on HrQoL",
      description: "24/7 passive monitoring of physical activity, sleep-quality, social behavior, and meal intake",
    },
    {
      title: "Personalized Care",
      description: "Improve agency and self-care by getting knowledge about signs, behavior and progression and better communicated that with your physician",
    },
  ]

  return (
    <section className="py-20 bg-sky-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl text-warm-purple text-center mb-12">Patient-centric benefits for patients, providers and researchers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-warm-purple mb-4">{feature.title}</h3>
                <p className="text-wood-green">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

