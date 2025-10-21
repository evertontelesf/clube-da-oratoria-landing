import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <Link
          href="/"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
