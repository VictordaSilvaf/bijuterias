import TimerProgress from "../components/TimerProgress";
import Image1 from "../assets/beatriz_marques.png";
import Image2 from "../assets/beatriz_marques2.png";

export default function Step1({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="text-center pb-32">
      <TimerProgress />

      <p className="mt-6 font-bold text-xl">RENDA EXTRA EM CASA:</p>
      <p className="font-bold text-xl bg-app-highlight inline">
        BIJUTERIAS LUCRATIVAS
      </p>

      <p className="text-base text-neutral-800 leading-relaxed">
        Olá, me chamo <span className="font-semibold">Beatriz Marques</span> e
        trabalho com bijuterias artesanais desde 2023.
        <span className="text-yellow-500">✨</span>
      </p>

      <p className="mt-4 text-base leading-relaxed">
        <span className="text-pink-600">🎯</span> Explorei minha criatividade e
        descobri uma forma
        <span className="font-bold text-[color:var(--color-app-highlight)]">
          SIMPLES e RÁPIDA
        </span>
        de faturar
        <span className="font-bold text-[color:var(--color-app-highlight-green)]">
          MAIS DE R$ 2.000 POR MÊS
        </span>
        , trabalhando de casa e gastando pouco!
      </p>

      <div className="mt-6 w-full px-10">
        <img
          src={Image1}
          alt="Mulher produzindo pulseiras artesanais"
          className="w-full object-cover rounded-xl"
        />
      </div>

      <p className="mt-6 font-semibold text-neutral-900">
        E não, não tem nada a ver com aquelas bijuterias infantis de brincadeira
        de criança
      </p>

      <p className="mt-3 text-base text-neutral-800 leading-relaxed">
        Estou falando bijuterias
        <span className="text-[color:var(--color-app-text)] font-semibold">
          elegantes e sofisticadas
        </span>
        , com aparência de joias finas, peças únicas que encantam e vendem
        <span className="font-bold text-[color:var(--color-app-highlight)]">
          MUITO
        </span>
        , mesmo para quem está começando agora.
      </p>

      <div className="mt-6 w-full px-14 mb-4">
        <img
          src={Image2}
          alt="Pulseiras artesanais expostas"
          className="w-full object-cover rounded-xl"
        />
      </div>

      <p className="text-center font-medium leading-relaxed">
        São peças com{" "}
        <span className="text-app-highlight font-semibold">
          valor percebido alto
        </span>
        , que você produz com{" "}
        <span className="text-app-highlight font-semibold">baixo custo</span> e
        vende com{" "}
        <span className="text-green-600 font-semibold">
          ALTA MARGEM DE LUCRO
        </span>
      </p>

      <p className="text-center mt-4 font-semibold">👉 A melhor parte?</p>

      <p className="text-center mt-2 leading-relaxed">
        Você pode começar do zero, sem precisar investir muito, sem sair de
        casa.
      </p>

      <div className="mt-6 space-y-3 text-app-highlight font-bold text-left">
        <div className="flex items-start gap-1">
          <span className="text-green-600 text-xl">✅</span>
          <p>Comece com baixo investimento e alta margem de lucro</p>
        </div>

        <div className="flex items-start gap-1">
          <span className="text-green-600 text-xl">✅</span>
          <p>Crie peças modernas e desejadas, que realmente vendem</p>
        </div>

        <div className="flex items-start gap-1">
          <span className="text-green-600 text-xl">✅</span>
          <p>Técnica simples, mesmo para quem nunca fez artesanato</p>
        </div>

        <div className="flex items-start gap-1">
          <span className="text-green-600 text-xl">✅</span>
          <p>
            Alta demanda o ano inteiro. clientes apaixonados por acessórios
            exclusivos
          </p>
        </div>
      </div>

      <p className="mt-6 text-center leading-relaxed">
        💡 Se você busca uma forma de empreender com artesanato moderno, bonito
        e lucrativo, esse é o caminho certo.
      </p>

      <p className="mt-4 text-center font-semibold">
        Clique no botão abaixo e vem começar com a Bia 👇
      </p>

      <div className="mt-4">
        <button
          onClick={nextStep}
          className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Quero aprender
        </button>
      </div>
    </div>
  );
}
