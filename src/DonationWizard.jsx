import { useState } from 'react'

export default function DonationWizard() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((s) => Math.min(s + 1, 8))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <div className="mb-4 text-center font-semibold">
        Step {step} of 8
      </div>

      <div className="min-h-[250px]">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to CharityCart!</h2>
            <p className="text-gray-700">
              CharityCart helps you donate your old shoes, books, clothes, and other usable items easily.
              Let’s get started with your donation in a few simple steps.
            </p>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload your first item</h2>
            <form>
              <label className="block mb-2 font-medium" htmlFor="itemName">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                placeholder="e.g. Old Shoes"
                className="w-full mb-4 px-3 py-2 border rounded"
              />

              <label className="block mb-2 font-medium" htmlFor="itemPhoto">
                Upload Photo
              </label>
              <input
                type="file"
                id="itemPhoto"
                name="itemPhoto"
                accept="image/*"
                className="w-full mb-4"
              />
            </form>
          </div>
        )}

        {step === 3 &&  (
  <div>
    <h2 className="text-xl font-semibold mb-4">Upload your second item</h2>
    <form>
      <label className="block mb-2 font-medium" htmlFor="item2Name">
        Item Name
      </label>
      <input
        type="text"
        id="item2Name"
        placeholder="e.g. Old Bag"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2 font-medium" htmlFor="item2Photo">
        Upload Photo
      </label>
      <input
        type="file"
        id="item2Photo"
        accept="image/*"
        className="w-full mb-4"
      />
    </form>
  </div>
)}

{step === 4 && (
  <div>
    <h2 className="text-xl font-semibold mb-4">Choose a Pickup Option</h2>
    <form>
      <label className="block mb-2 font-medium">Select one:</label>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="radio" name="pickup" value="home" className="mr-2" />
          Home Pickup
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="radio" name="pickup" value="drop" className="mr-2" />
          Drop-off at Donation Center
        </label>
      </div>
    </form>
  </div>
)}

{step === 5 && (
  <div>
    <h2 className="text-xl font-semibold mb-4">Enter Your Address</h2>
    <form>
      <label className="block mb-2 font-medium" htmlFor="address">
        Full Address
      </label>
      <textarea
        id="address"
        rows="4"
        placeholder="123 Main Street, City, State"
        className="w-full mb-4 px-3 py-2 border rounded"
      ></textarea>
    </form>
  </div>
)}

{step === 6 && (
  <div>
    <h2 className="text-xl font-semibold mb-4">Your Contact Information</h2>
    <form>
      <label className="block mb-2 font-medium" htmlFor="name">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2 font-medium" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="you@example.com"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2 font-medium" htmlFor="phone">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="+91-XXXXXXXXXX"
        className="w-full mb-4 px-3 py-2 border rounded"
      />
    </form>
  </div>
)}

{step === 7 && (
  <div className="text-center">
    <h2 className="text-xl font-semibold mb-6">Donation in Progress...</h2>
    <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
      <div
        className="bg-green-500 h-6 rounded-full animate-progress"
        style={{ width: '100%', animation: 'progress 3s ease-out forwards' }}
      ></div>
    </div>
    <p className="text-green-700 font-medium mt-4">
      🎉 Your donation has been delivered successfully!
    </p>
  </div>
)}

{step === 8 && (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Thank You! 💖</h2>
    <p className="text-gray-700 mb-6">
      We really appreciate your generous donation. You’ve made someone’s day a lot brighter!
    </p>
    <p className="text-gray-500 italic">You can close this window or start another donation.</p>
  </div>
)}

      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  )
}
