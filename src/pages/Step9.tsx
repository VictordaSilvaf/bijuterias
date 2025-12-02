import { StarIcon } from "lucide-react";
import Image1 from "../assets/badge.png";

export default function Step9() {
  function goToCheckout() {
    window.location.href =
      "https://pay.kiwify.com.br/checkout/lucrandocombijuterias?source=lp";
  }

  return (
    <div className="text-center flex-1 pb-20 flex justify-center items-center flex-col w-full">
      {/* Título */}
      <h4 className="text-app-highlight-green font-bold text-lg">Parabéns!</h4>
      <h2 className="text-center text-xl font-bold">
        Você está qualificada para participar do treinamento{" "}
        <span className="bg-app-highlight inline">BIJUTERIAS LUCRATIVAS</span>
        !👏
      </h2>

      <h2 className="font-black text-2xl mt-6">
        Olha tudo o que você vai aprender com o treinamento{" "}
        <span className="bg-app-highlight inline">Bijuterias Lucrativas</span>
      </h2>

      <ul className="mt-6 space-y-3 text-zinc-900 text-left">
        <li>
          <span className="mr-2">✅</span>
          <strong>Acesso vitalício</strong>, assista sempre que quiser
        </li>

        <li>
          <span className="mr-2">✅</span>
          <strong>Vídeos aulas</strong>, explicando o passo a passo da produção
          de cada bijuteria
        </li>

        <li>
          <span className="mr-2">✅</span>
          Aprenda a fazer pulseiras lindas e profissionais, mesmo{" "}
          <strong>começando do zero</strong>
        </li>

        <li>
          <span className="mr-2">✅</span>
          <strong>Técnicas fáceis</strong> com diferentes tipos de materiais
        </li>

        <li>
          <span className="mr-2">✅</span>
          Quais são os materiais essenciais e onde comprá-los
        </li>

        <li>
          <span className="mr-2">✅</span>
          Como fazer o <strong>acabamento perfeito</strong>
        </li>

        <li>
          <span className="mr-2">✅</span>
          Como escolher os materiais certos para evitar quebras e desgastes
        </li>

        <li>
          <span className="mr-2">✅</span>
          Como <strong>vender nas redes sociais</strong> e atrair suas primeiras
          clientes
        </li>

        <li>
          <span className="mr-2">✅</span>
          Método para faturar até <strong>R$ 2.000 por mês</strong> com suas
          pulseiras artesanais
        </li>

        <li>
          <span className="mr-2">✅</span>
          Lista completa de <strong>materiais e ferramentas necessárias</strong>
        </li>

        <li>
          <span className="mr-2">✅</span>
          Como <strong>montar um espaço simples</strong> na sua casa
        </li>

        <li>
          <span className="mr-2">✅</span>
          <strong>Ideias de embalagens e etiquetas</strong> lindas para
          valorizar seu produto
        </li>

        <li>
          <span className="mr-2">✅</span>
          Como <strong>calcular o preço</strong> ideal de cada peça para lucrar
          100 por cento em cima
        </li>

        <li>
          <span className="mr-2">✅</span>
          Dicas para <strong>fidelizar clientes</strong> e criar sua marca
          própria
        </li>

        <li>
          <span className="mr-2">✅</span>
          Estilos de bijuteria que estão em alta em{" "}
          <span className="bg-white px-1">2025</span>
        </li>

        <li>
          <span className="mr-2">✅</span>
          Estratégias de posts e reels para atrair seguidores e clientes
        </li>
      </ul>

      <h2 className="text-app-highlight font-black text-xl mt-6">
        🎁 Ganhe 4 BÔNUS exclusivos se garantir sua vaga AGORA:
      </h2>

      <ul className="mt-6 space-y-4 text-zinc-900 text-left">
        {/* Bônus 1 */}
        <li>
          <span className="bg-yellow-600 text-zinc-900 font-bold px-1 rounded">
            Bônus 1:
          </span>
          <span className="ml-1">
            Meu método secreto de como eu faço pra vender bijuterias{" "}
            <strong>todos os dias</strong>, mesmo começando com poucos
            seguidores.
          </span>
        </li>

        {/* Bônus 2 */}
        <li>
          <span className="bg-yellow-600 text-zinc-900 font-bold px-1 rounded">
            Bônus 2:
          </span>
          <span className="ml-1">
            <strong>Acesso vitalício</strong> ao treinamento pra você ver quando
            quiser no seu ritmo
          </span>
        </li>

        {/* Bônus 3 */}
        <li>
          <span className="bg-yellow-600 text-zinc-900 font-bold px-1 rounded">
            Bônus 3:
          </span>
          <span className="ml-1">
            Descubra como produzir <strong>brincos e colares</strong> que
            encantam clientes e se destacam pela delicadeza e estilo.
          </span>
        </li>

        {/* Bônus 4 */}
        <li>
          <span className="bg-yellow-600 text-zinc-900 font-bold px-1 rounded">
            Bônus 4:
          </span>
          <span className="ml-1">
            Aprenda a criar rosários de miçangas. Um dos itens mais fáceis de
            fazer e tem alta procura para presentinhos.
          </span>
        </li>
      </ul>

      {/* Texto principal */}
      <div className="py-1">
        <div className="py-2 break-words text-center text-zinc-900">
          <p>
            <strong>
              CLIQUE NO BOTÃO ABAIXO E ADQUIRA O TREINAMENTO BIJUTERIAS
              LUCRATIVAS{" "}
            </strong>
            <strong className="text-yellow-600">+ 4 BÔNUS EXCLUSIVOS</strong>
          </p>

          <p className="mt-3">
            <strong>Garanta seus bônus e sua vaga</strong>
          </p>

          <h3 className="text-lg font-bold">
            <strong>Clique no botão abaixo 👇</strong>
          </h3>
        </div>
      </div>

      {/* Card do preço */}
      <div className="grid w-full">
        <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-green-100 text-green-700 ease-in-out">
          <div className="flex items-center gap-2 p-2 leading-tight">
            <div className="flex w-full items-center gap-2 px-2">
              <div className="text-xl font-bold">
                <p>Lucrando com bijuterias</p>
              </div>
            </div>

            {/* Preço */}
            <div className="text-right w-full">
              <div className="relative inline-block p-2">
                <div className="absolute inset-0 rounded-lg bg-[rgba(67,20,7,0.05)]"></div>

                <div className="relative text-xs leading-none opacity-70 text-left">
                  DE R$ 217 POR
                </div>

                <div className="relative py-1 leading-none text-2xl whitespace-nowrap font-bold">
                  <span className="text-base">R$</span> 37,90
                </div>

                <div className="relative text-xs leading-none opacity-70 text-right">
                  à vista ou 9X 5,14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão */}
      <div className="mt-4 w-full">
        <button
          onClick={goToCheckout}
          className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Quero aprender o passo a passo
        </button>
      </div>

      {/* Aviso de vagas */}
      <div className="mt-2 w-full">
        <div className="grid w-full">
          <div className="bg-blue-100 text-blue-700 w-full p-4 rounded-2xl">
            <p>
              Corra! Falta <strong>apenas 8 vagas</strong> disponíveis nessa
              oferta!
            </p>
          </div>
        </div>
      </div>

      {/* Compra segura */}
      <div className="p-1">
        <div className="py-2 break-words text-center text-sm text-zinc-900 opacity-90">
          <p>
            Esta compra é segura, você pode testar por 7 dias, caso não goste, a
            plataforma devolverá o seu dinheiro.
          </p>
        </div>
      </div>

      {/* Imagem 1 */}
      <div className="p-1 flex justify-center">
        <div className="w-[100%]">
          <div className="relative w-full overflow-hidden pb-[1.17%]">
            <img
              src="https://media.inlead.cloud/uploads/30767/2025-07-30/md-rX4cI-captura-de-tela-2025-07-30-123255.png"
              alt="Imagem"
              className="inset-0 h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Imagem 2 */}
      <div className="p-1 flex justify-center">
        <div className="w-[93%]">
          <div className="relative w-full overflow-hidden">
            <img
              src={Image1}
              alt="Imagem"
              className="inset-0 h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Título depoimentos */}
      <div className="p-1">
        <div className="py-2 break-words text-center text-2xl">
          <h2 className="font-bold text-zinc-900">
            Alguns depoimentos das nossas alunas que fizeram o treinamento{" "}
            <span className="bg-yellow-600 text-white px-1 rounded">
              Bijuterias Lucrativas
            </span>
            :
          </h2>
        </div>
      </div>

      {/* GRID DE DEPOIMENTOS */}
      <div className="p-1">
        <div className="grid gap-2 text-left ">
          {/* CARD 1 */}
          <div className="rounded-2xl border p-4 grid border-app-highlight/20">
            <div className="flex items-start gap-3 w-full">
              <div className="w-full">
                {/* Estrelas */}
                <div className="flex gap-0.5 pb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      size={12}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <div className="font-semibold">Marcela Rios</div>
                <div className="text-xs">@marcelaa.rs01</div>

                <p className="pt-2 text-sm text-black/60">
                  Eu fiquei muito encantada com as peças que aprendi fazer, elas
                  são muito elegantes, da para fazer de várias cores para
                  combinar com cada roupa 😍
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border p-4 grid border-app-highlight/20">
            <div className="flex items-start gap-3 w-full">
              <div className="w-full">
                <div className="flex gap-0.5 pb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      size={12}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <div className="font-semibold">Maressa Fernandes</div>
                <div className="text-xs">@maressafer1998</div>

                <p className="pt-2 text-sm text-black/60">
                  Aprendi muito com a Bia, bem explicativo, e já estou vendendo
                  super bem no Instagram💛, já fiz R$ 200 em uma semana, e estou
                  começando ainda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TÍTULO DAS BIJUTERIAS */}
      <div className="p-1">
        <div className="py-2 text-center">
          <h2 className="text-yellow-600 font-semibold text-2xl">
            Olha só o estilo sofisticado das bijuterias que você vai aprender
            comigo! 💫💛
          </h2>
        </div>
      </div>

      <img
        src="https://media.inlead.cloud/uploads/30767/2025-11-27/md-U35Qv-d2d206d9-7080-4215-8f99-6f88e9759eeb.jpg"
        alt="Imagem"
        className=" max-w-full rounded-2xl max-h-[400px] object-contain"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* COMO RECEBER O ACESSO */}
      <div className="p-1">
        <div className="py-2 text-center break-words">
          <h2 className="text-yellow-600 font-semibold text-2xl">
            Como vou receber meu acesso ao treinamento?
          </h2>

          <p className="text-zinc-900 mt-1">
            Para acessar seu curso, irá chegar um link de acesso por e-mail após
            a compra.
            <span className="bg-yellow-600 text-white px-1 rounded">
              Se não encontrar o e-mail ou o acesso não funcionar, entre em
              contato pelo e-mail lucrandocommicangas@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* IMAGEM FINAL */}
      <div className="p-1 flex justify-center">
        <div className="w-[65%]">
          <div className="relative w-full overflow-hidden pb-[150%]">
            <img
              src="https://media.inlead.cloud/uploads/30767/2025-08-26/md-p9VVM-e80447f4-fed6-438b-9370-5c4ddd3d6f2e.jpg"
              alt="Imagem"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <p>
        Você está a um passo de aprender um hobby e ainda lucrar com isso.{" "}
        <strong>Vai deixar mesmo essa chance escapar?</strong>
      </p>

      <img
        src="https://media.inlead.cloud/uploads/30767/2025-08-26/md-p9VVM-e80447f4-fed6-438b-9370-5c4ddd3d6f2e.jpg"
        alt="Imagem"
        className="max-w-full rounded-2xl overflow-hidden"
        style={{
          objectFit: "contain",
          maxWidth: "65%",
        }}
      />

      <h4 className="font-bold text-2xl py-5">Beatriz Marques</h4>

      <p className="pb-4">
        Criadora do treinamento Bijuterias lucrativas e apaixonada por
        artesanato desde criança, mas me encontrei nas bijuterias, e estou
        lucrando com elas desde 2023.
      </p>

      <p className="pb-4">
        Minha história começou de forma simples, vi minha filha fazendo
        pulseiras coloridas de miçangas, achei muito divertido. Foi ai que
        comecei a me inspirar e fazer colares, pulseiras e brincos parecidos com
        joias, elegantes. Elas chamaram muito atenção, foi ai que comecei a
        vender para amigas e familiares. Com o tempo, percebi que podia se
        tornar uma fonte real de renda usando minha criatividade, dedicação.✨💛
      </p>

      <p className="pb-4">
        Me especializei em técnicas de produção, embalagens, e estratégias de
        venda, e hoje vivo daquilo que amo: criar bijuterias criativas sem
        perder a elegância.
      </p>

      <p>
        Hoje, asbijuterias artesanais são minha fonte de renda, vendo para lojas
        também. Agora, quero te mostrar que você também pode transformar sua
        paixão em renda! 💖💰
      </p>

      {/* Card do preço */}
      <div className="grid w-full mt-6">
        <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-green-100 text-green-700 ease-in-out">
          <div className="flex items-center gap-2 p-2 leading-tight">
            <div className="flex w-full items-center gap-2 px-2">
              <div className="text-xl font-bold">
                <p>Lucrando com bijuterias</p>
              </div>
            </div>

            {/* Preço */}
            <div className="text-right w-full">
              <div className="relative inline-block p-2">
                <div className="absolute inset-0 rounded-lg bg-[rgba(67,20,7,0.05)]"></div>

                <div className="relative text-xs leading-none opacity-70 text-left">
                  DE R$ 217 POR
                </div>

                <div className="relative py-1 leading-none text-2xl whitespace-nowrap font-bold">
                  <span className="text-base">R$</span> 37,90
                </div>

                <div className="relative text-xs leading-none opacity-70 text-right">
                  à vista ou 9X 5,14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão */}
      <div className="mt-4 w-full">
        <button
          onClick={goToCheckout}
          className="cursor-pointer animate-pulse w-full bg-[#C89100] hover:bg-[#b68300] text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Quero aprender o passo a passo
        </button>
      </div>

      {/* Aviso de vagas */}
      <div className="mt-2 w-full">
        <div className="grid w-full">
          <div className="bg-blue-100 text-blue-700 w-full p-4 rounded-2xl">
            <p>
              Corra! Falta <strong>apenas 8 vagas</strong> disponíveis nessa
              oferta!
            </p>
          </div>
        </div>
      </div>

      {/* Compra segura */}
      <div className="p-1">
        <div className="py-2 break-words text-center text-sm text-zinc-900 opacity-90">
          <p>
            Esta compra é segura, você pode testar por 7 dias, caso não goste, a
            plataforma devolverá o seu dinheiro.
          </p>
        </div>
      </div>

      {/* Imagem 1 */}
      <div className="p-1 flex justify-center">
        <div className="w-[100%]">
          <div className="relative w-full overflow-hidden pb-[1.17%]">
            <img
              src="https://media.inlead.cloud/uploads/30767/2025-07-30/md-rX4cI-captura-de-tela-2025-07-30-123255.png"
              alt="Imagem"
              className="inset-0 h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
