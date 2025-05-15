import { useEffect, useState } from 'react'

export default function DonationTracker({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 10), 500)
      return () => clearTimeout(timer)
    } else {
      // After reaching 100%, wait a bit then call onFinish
      const timer = setTimeout(() => onFinish(), 1000)
      return () => clearTimeout(timer)
    }
  }, [progress, onFinish])

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Donation in Progress</h2>
      <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mb-4">
        <div
          className="bg-green-500 h-6 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p>{progress < 100 ? `Your donation is ${progress}% on its way...` : 'Almost there!'}</p>
    </div>
  )
}
