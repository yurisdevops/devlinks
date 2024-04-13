import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full text-white">
        <h1 className="text-white font-bold text-4xl">Página não encontrada</h1>
        <span className=" text-gray-50 mb-5 mt-3 text-2xl font-medium">
          Veja meus links
        </span>
        <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
          Voltar
        </Link>
      </div>
    </>
  );
}
