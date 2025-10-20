import BackgroundPattern from "@/components/shared/background-pattern";

export default function IFUHCPs() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern
        color="#E4C1D5"
        backgroundColor="white"
        title="Instructions For Use - Healthcare Professionals"
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="w-full h-[calc(100vh-12rem)] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="/ifu-hcps.pdf"
            className="w-full h-full border-0"
            title="Instructions For Use - Healthcare Professionals"
          />
        </div>
      </div>
    </div>
  );
}

