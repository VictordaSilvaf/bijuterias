import Image from "../assets/bijuterias.png";

export default function Step6({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="text-center flex-1 pb-20 flex justify-center items-center flex-col w-full">
      {/* Título */}
      <h2 className="text-2xl font-bold text-black mb-1">
        É necessário ter experiência com artesanato Bia?
      </h2>

      {/* Destaque resposta */}
      <p className="mt-1">
        A resposta é <span className="text-red-500 font-bold">NÃO!</span>
      </p>

      {/* Imagem principal */}
      <div className="mt-5 px-4">
        <img src={Image} alt="Biju artesanato" className="w-full rounded-md" />
      </div>

      {/* Texto 1 */}
      <p className="mt-5 font-medium leading-relaxed">
        Mesmo que você nunca tenha feito artesanato antes, com o uso dos
        materiais certos e meu treinamento passo a passo, você vai aprender a
        fazer bijuterias lindas e elegantes 💛💫
      </p>

      {/* Texto 2 */}
      <p className="mt-4 text-black leading-relaxed">
        Não é preciso ter experiência ou habilidade manual, eu te mostro cada
        detalhe do processo, desde a escolha dos materiais até os acabamentos
        que fazem toda a diferença.
      </p>

      {/* Texto 3 */}
      <p className="mt-4 text-black leading-relaxed">
        Com técnicas simples e acessíveis, você vai transformar fios, pedrarias
        e fechos em peças que parecem feitas por profissionais.
      </p>

      {/* Destaque final */}
      <p className="mt-5 font-bold text-black mb-4">
        <span className="bg-[var(--color-app-highlight)] px-1 rounded">
          Você vai se surpreender com o que é capaz de criar com suas próprias
          mãos!
        </span>
      </p>

      {/* Botão */}
      <button
        onClick={nextStep}
        className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
      >
        Quero aprender
      </button>
    </div>
  );
}
