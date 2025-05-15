import { useState } from 'react'

export default function UploadItems({ onBack, onSubmit }) {
  const [item, setItem] = useState('')
  const [photo, setPhoto] = useState(null)
  const [itemsList, setItemsList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (item.trim() === '') return

    const newItem = {
      name: item.trim(),
      photoUrl: photo ? URL.createObjectURL(photo) : null,
    }

    setItemsList([...itemsList, newItem])
    setItem('')
    setPhoto(null)
  }

  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Items</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter item name (e.g. shoes, books)"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </form>

      {itemsList.length > 0 && (
        <>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Items to Donate:</h3>
            <ul className="list-disc list-inside space-y-4">
              {itemsList.map((it, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  {it.photoUrl && (
                    <img
                      src={it.photoUrl}
                      alt={it.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <span>{it.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onSubmit}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Complete Donation
          </button>
        </>
      )}

      <button
        onClick={onBack}
        className="mt-8 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
      >
        Back to Home
      </button>
    </section>
  )
}
