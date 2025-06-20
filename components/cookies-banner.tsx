"use client"

import { useState, useEffect } from "react"

export function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem("cookies-consent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookies-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-[#2A634D] text-white rounded-md hover:bg-[#2A634D]/90 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 