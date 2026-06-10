import BackgroundPattern from "@/components/shared/background-pattern"

type Device = {
  id: string
  manufacturer: string
  model: string
  wearOS: string
  role: string
}

const devices: Device[] = [
  { id: "SW-06", manufacturer: "Google", model: "Pixel Watch 3", wearOS: "5.1", role: "Candidate" },
  { id: "SW-07", manufacturer: "Google", model: "Pixel Watch 4", wearOS: "6.1", role: "Candidate" },
  { id: "SW-01", manufacturer: "Mobvoi", model: "Ticwatch E3", wearOS: "3.5", role: "Candidate" },
  { id: "SW-05", manufacturer: "Mobvoi", model: "Ticwatch Pro 3", wearOS: "3.5", role: "Candidate" },
  { id: "SW-02", manufacturer: "Mobvoi", model: "Ticwatch Pro 5", wearOS: "4.0", role: "Candidate" },
  { id: "SW-04", manufacturer: "Xiaomi", model: "Watch 2 Pro", wearOS: "3.5", role: "Candidate" },
  { id: "SW-03", manufacturer: "Xiaomi", model: "Watch 5", wearOS: "5.0", role: "Candidate" },
]

export default function CompatibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern
        color="#D25137"
        backgroundColor="white"
        title="Device Compatibility"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 text-center">
            <p className="text-gray-700 text-lg">
              The following smartwatches are part of our compatibility list.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-[#D25137]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#D25137]/5 border-b border-[#D25137]/10">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-[#D25137] uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#D25137] uppercase tracking-wider">Manufacturer</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#D25137] uppercase tracking-wider">Model</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#D25137] uppercase tracking-wider">WearOS</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#D25137] uppercase tracking-wider">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D25137]/10">
                  {devices.map((device) => (
                    <tr key={device.id} className="hover:bg-[#D25137]/5 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">{device.id}</td>
                      <td className="px-6 py-4 text-gray-700">{device.manufacturer}</td>
                      <td className="px-6 py-4 text-gray-700">{device.model}</td>
                      <td className="px-6 py-4 text-gray-700">{device.wearOS}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#D25137]/10 text-[#D25137]">
                          {device.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
