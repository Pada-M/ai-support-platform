export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">AI Support Platform</h1>
      <p className="text-gray-600 mb-6">Welcome! Choose an option below.</p>
      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
        >
          Login
        </a>
        <a
          href="/register"
          className="border border-gray-400 px-4 py-2 rounded-xl hover:bg-gray-50"
        >
          Register
        </a>
      </div>
    </main>
  );
}
