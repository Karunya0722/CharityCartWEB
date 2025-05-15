export default function Hero({ onStart }) {
    return (
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to CharityCart</h1>
        <p className="text-xl max-w-xl mx-auto mb-8">
          Donate your old shoes, books, clothes, and more to those who need them.
        </p>
        <button
          onClick={onStart}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Start Donating
        </button>
      </section>
    )
  }
  