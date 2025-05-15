export default function Home({ onStart }) {
    return (
      <section className="max-w-xl mx-auto text-center py-24 px-6 bg-white rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
          Welcome to CharityCart
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Donate your old shoes, books, clothes, or any usable items easily and
          help those in need. Let’s make a difference together!
        </p>
        <button
          onClick={onStart}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start Donating
        </button>
      </section>
    )
  }
  