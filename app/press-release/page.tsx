import BackgroundPattern from "@/components/shared/background-pattern";

export default function PressRelease() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern
        color="#E4C1D5"
        backgroundColor="white"
        title="Press Release"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-3xl">
        <div className="prose prose-lg">
          <p className="text-xs uppercase tracking-widest text-bubbly-pink font-semibold mb-2"></p>
          <h1 className="text-3xl font-bold mb-2">Koios Care Secures €1M Seed Round to Bring ML and Digital Biomarkers to Parkinson's Disease Care and Research</h1>
          <p className="text-sm text-gray-500 mb-8">ANTWERP, BELGIUM – June 16, 2025</p>

          <p>Koios Care, a pioneering health technology company focused on improving the Quality of Life for people living with neurological and chronic conditions, starting with Parkinson's Disease, today announced the successful closing of an €1M funding round.</p>

          <p>Koios Care delivers clinically meaningful insights through everyday devices, effectively bridging the gap between patients' daily lives, clinical care and accelerating time-to-market for new therapies in neuroscience and beyond. The round was led by the Greek early stage deeptech fund <a href="https://www.evercurious.vc/portfolio/koios-care" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">Evercurious VC</a>, with strong participation from <a href="https://www.astylabventures.com/startups" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">Astylab Ventures</a>, <a href="https://www.imecistart.com/en" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">imec.istart fund</a> and several private angel investors, coordinated by <a href="https://heban.gr/" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">HeBAN</a>. This newly injected capital aims at accelerating Koios Care's mission to address Parkinson's Disease, the fastest growing neurological disorder globally, now affecting over ten million people and increasingly described as the "silent pandemic" by the medical community.</p>

          <p>By transforming passive data from everyday smartphone and smartwatch devices into actionable clinical insights, Koios Care empowers care teams and researchers to make earlier, more personalized, and more effective decisions. The team's approach not only enhances patient outcomes but also streamlines clinical workflows, supports value-based care, and unlocks new potential for evidence generation in therapeutic development. As the clinical, economic and societal burden of Parkinson's Disease continues to grow, Koios Care is positioned to redefine how neurological conditions are monitored, understood, and managed, in real-time, and in real-life.</p>

          <blockquote className="border-l-4 border-bubbly-pink pl-4 italic my-6">
            Dr. Konstantinos Kyritsis, co-founder and CEO emphasized that the current standard of care still falls short: "There's a significant gap between what people with Parkinson's truly need and what they currently receive. It's not just about managing symptoms, it's about meaningfully improving their overall Quality of Life. That's the gap Koios Care is here to close." He then added, "One patient using the technology to clearly communicate with their neurologist told us, 'Sometimes, on my current medication scheme, it feels like I have no Parkinson's.' That's not just encouraging, it's a powerful glimpse of what's possible. It's the kind of transformation we are relentlessly working to deliver for everyone living with this disease."
          </blockquote>

          <blockquote className="border-l-4 border-bubbly-pink pl-4 italic my-6">
            "For too long, patients, clinicians and researchers have lacked continuous, objective data to truly personalize Parkinson's care and understand the real-life impact of the disease and its treatments," said Dimitris Iakovakis, co-founder and CTO of Koios Care. "This funding reflects the urgent need for a new standard in care. With our solution, we empower patients to better understand their condition, equip medical teams with unprecedented insights, and provide pharmaceutical companies with a powerful tool to accelerate the development of more effective therapies."
          </blockquote>

          <p>Koios Care is already gaining strong momentum. Their most recent study involved 130 patients across multiple EU clinics, while their platform is currently used by research institutions, industry partners and in-hospital pilot programs to optimize treatment strategies. The company's approach aligns perfectly with the current regulatory guidance on digital health technologies and is poised to improve drug trial success rates by delivering sensitive, clinically meaningful endpoints rooted in patients' daily functioning. Koios Care is focused on expanding its digital health tool ("Parkiwatch") throughout EU neurological clinics and building key partnerships with industry and pharma. This €1M investment will directly fuel these ambitions by supporting crucial steps in regulatory clearance, market commercialization, and ongoing evidence generation.</p>

          <blockquote className="border-l-4 border-bubbly-pink pl-4 italic my-6">
            Alex Vamvakas, partner at Evercurious VC, commented, "Koios Care's innovative approach to passively monitoring Quality of Life with everyday devices is a game-changer for neurodegenerative disorders. We are impressed by the team's scientific rigor, the clinical validation and the vision to reshape long-term neurodegenerative conditions' care and enable the shift toward personalized, data-driven disease management at scale. With roots in Greece and Belgium, and collaborators across Europe, Koios Care exemplifies the kind of region bridging, discipline spanning, impact-driven innovation that a more connected European deeptech ecosystem can unlock. It reflects a vision of Europe where scientific excellence and entrepreneurial ambition transcend borders to solve pressing global challenges."
          </blockquote>

          <p>Koios Care's dual business model serves both patients and industry. For patients and care providers, it offers a digital health tool for supporting the patients' quality of life and driving outcomes; for pharmaceutical and medical device companies, it serves as a powerful R&D platform enabling real-world evidence generation and precision in therapeutic development. Looking ahead, the company plans to develop drug-device combination products and extend its technology to tackle a wider range of brain and behavior-related conditions, including Mild Cognitive Impairment, Alzheimer's, narcolepsy, and eating disorders, where continuous, real-world monitoring remains a critical gap.</p>

          <h2 className="text-xl font-bold mt-10 mb-2">About Koios Care</h2>
          <p>Koios Care is a health technology company revolutionizing the management of Parkinson's Disease and other neurological disorders. Its ML-powered platform, passively collects data from everyday smartphones and smartwatches to provide continuous, clinically meaningful insights into patients' daily functioning and related quality of life. Koios Care empowers patients, providers, and pharmaceutical companies with objective, real-world data to improve outcomes, enhance care efficiency, and accelerate therapeutic innovation. Existing investors in Koios Care include <a href="https://www.lumiares.com/" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">Lumiares</a>, <a href="https://www.imecistart.com/en" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">imec.istart</a> and BlueHealth innovation Fund.</p>

          <h2 className="text-xl font-bold mt-10 mb-2">About Evercurious VC</h2>
          <p>Evercurious VC is an Athens-based venture capital firm founded by engineers turned investors. The firm invests in European early-stage deeptech companies and is committed to supporting founders who develop defensible technologies to tackle global challenges. Learn more at <a href="https://evercurious.vc" target="_blank" rel="noopener noreferrer" className="text-bubbly-pink underline">evercurious.vc</a>.</p>
        </div>
      </div>
    </div>
  );
} 