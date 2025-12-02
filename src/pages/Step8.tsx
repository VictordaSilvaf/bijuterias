import Image1 from "../assets/whats1.jpg";
import Image2 from "../assets/insta1.jpg";

export default function Step8({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="text-center flex-1 pb-20 flex justify-center items-center flex-col w-full">
      {/* Título */}
      <h2 className="text-center text-2xl font-bold">
        Veja o que nossas alunas estão falando do treinamento Bijuterias
        Lucrativas 🤩
      </h2>

      {/* Imagem */}
      <div className="mt-4 px-14">
        <img
          src={Image1}
          alt="Materiais artesanais"
          className="w-full rounded-xl"
        />
      </div>

      {/* Subtítulo */}
      <h3 className="text-center text-xl leading-5 font-bold mt-8">
        Aqui está um vídeo de uma das pulseiras das nossas alunas, ela postou no
        TikTok e a pulseira bombou!! Ficou recheado de comentários perguntando
        onde comprar 😍 Ela enviou pelos Correios e hoje tem sua loja online 📲
      </h3>

      <div className="mt-4 px-14">
        <img
          src={Image2}
          alt="Materiais artesanais"
          className="w-full rounded-xl"
        />
      </div>

      {/* Botão */}
      <div className="mt-4 w-full">
        <button
          onClick={nextStep}
          className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Quero aprender o passo a passo
        </button>
      </div>
    </div>
  );
}
