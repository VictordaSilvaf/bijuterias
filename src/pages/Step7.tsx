import Image from "../assets/bijuterias2.jpg";

export default function Step7({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="text-center flex-1 pb-20 flex justify-center items-center flex-col w-full">
      {/* Título */}
      <h2 className="text-center text-2xl font-bold">
        O custo é alto Bia? <span className="">😬</span>
      </h2>

      {/* Subtítulo */}
      <p className="text-center mt-2 font-semibold">
        A resposta <span className="text-red-600">TAMBÉM é NÃO!</span>
      </p>

      {/* Texto principal */}
      <p className="mt-4 leading-relaxed">
        O custo para começar a fazer bijuterias artesanais elegantes é{" "}
        <span className="font-bold">bem baixo</span>, especialmente se você está
        começando com modelos simples.
      </p>

      {/* Subtítulo destaque */}
      <p className="mt-5 font-black text-lg text-[var(--color-app-highlight)]">
        💸 Quanto custa começar a fazer bijuterias artesanais?
      </p>

      {/* Imagem */}
      <div className="mt-4 px-14">
        <img
          src={Image}
          alt="Materiais artesanais"
          className="w-full rounded-xl"
        />
      </div>

      {/* Lista de materiais */}
      <div className="mt-6">
        <p className="font-semibold">
          Materiais básicos (aproximadamente 20 à 40 peças):
        </p>

        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>
            Fio de nylon, elástico ou camurça:{" "}
            <span className="text-[var(--color-app-highlight-green)] font-semibold">
              R$ 5 a R$ 15
            </span>
          </li>

          <li>
            Miçangas, pedras, cristais ou contas decorativas:{" "}
            <span className="text-[var(--color-app-highlight-green)] font-semibold">
              R$ 10 a R$ 30
            </span>
          </li>

          <li>
            Fechos (pacote com 10 ou mais):{" "}
            <span className="text-[var(--color-app-highlight-green)] font-semibold">
              R$ 5 a R$ 15
            </span>
          </li>

          <li>
            Alicate pequeno de bijuteria:{" "}
            <span className="text-[var(--color-app-highlight-green)] font-semibold">
              R$ 15 a R$ 30
            </span>{" "}
            (compra única)
          </li>

          <li>Tesoura comum: talvez você já tenha em casa</li>
        </ol>
      </div>

      {/* Destaque final */}
      <p className="mt-5 leading-relaxed">
        👉 Você já consegue produzir{" "}
        <span className="bg-[var(--color-app-highlight)] px-1 rounded text-white font-bold">
          DIVERSAS PEÇAS
        </span>{" "}
        podendo{" "}
        <span className="bg-[var(--color-app-highlight-green)] px-1 rounded text-white font-bold">
          LUCRAR R$ 500 OU MAIS
        </span>{" "}
        com certeza você vai se apaixonar e vai querer usar, vai ficar com
        ciúmes de vender <span>💞😻</span>
      </p>

      {/* Botão */}
      <div className="mt-4 w-full">
        <button
          onClick={nextStep}
          className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Quero começar
        </button>
      </div>
    </div>
  );
}
