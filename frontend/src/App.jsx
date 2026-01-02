import { useState } from "react"

function App() {
  const [message, setMessage] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const checkSpam = async () => {
    if (!message.trim()) return

    setLoading(true)
    setResult("")

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: message }),
      })

      const data = await res.json()
      setResult(data.prediction)
    } catch (error) {
      setResult("❌ Backend not reachable")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-purple-200">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          📧 Spam Message Detection
        </h1>

        <textarea
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-400"
          rows="4"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={checkSpam}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Checking..." : "Check Message"}
        </button>

        {result && (
          <div className="mt-4 text-center text-lg font-semibold">
            {result}
          </div>
        )}
      </div>
    </div>
  )
}

export default App

