import BackgroundPattern from "@/components/shared/background-pattern";
import { PDFViewerWithLanguage } from "@/components/pdf-viewer-with-language";

export default function IFUHCPs() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern
        color="#E4C1D5"
        backgroundColor="white"
        title="Instructions For Use - Healthcare Professionals"
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <PDFViewerWithLanguage
          basePdfName="ifu-hcps"
          title="Instructions For Use - Healthcare Professionals"
        />
      </div>
    </div>
  );
}


