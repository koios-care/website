"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PDFViewerWithLanguageProps {
  basePdfName: string
  title: string
}

type Language = "en" | "de" | "nl" | "fr"

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "nl", label: "NL" },
  { code: "fr", label: "FR" },
]

export function PDFViewerWithLanguage({ basePdfName, title }: PDFViewerWithLanguageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en")

  const pdfUrl = `/${basePdfName}-${selectedLanguage}.pdf`

  return (
    <div className="space-y-4">
      {/* Language Selector */}
      <div className="flex justify-center gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            variant={selectedLanguage === lang.code ? "default" : "outline"}
            className={
              selectedLanguage === lang.code
                ? "bg-warm-purple hover:bg-warm-purple/90 text-white"
                : "border-warm-purple text-warm-purple hover:bg-warm-purple/10"
            }
          >
            {lang.label}
          </Button>
        ))}
      </div>

      {/* PDF Viewer */}
      <div className="w-full h-[calc(100vh-16rem)] bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          key={pdfUrl}
          src={pdfUrl}
          className="w-full h-full border-0"
          title={`${title} - ${selectedLanguage.toUpperCase()}`}
        />
      </div>
    </div>
  )
}

