import { ChevronRight } from "lucide-react";

export default function Step2({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="text-center flex-1 pb-20 flex justify-center items-center flex-col w-full">
      <h2 className="font-bold text-2xl">
        Você tem tempo disponível para aprender? ⏳
      </h2>

      <FormButton
        nextStep={nextStep}
        text="Tenho bastante tempo livre"
        icon="🙌"
      />
      <FormButton
        nextStep={nextStep}
        text="Cerca de 3 horas por dia "
        icon="😬"
      />
      <FormButton
        nextStep={nextStep}
        text="Pouquíssimo tempo pois já trabalho"
        icon="🤯"
      />
    </div>
  );
}

function FormButton({
  text,
  icon,
  nextStep,
}: {
  text?: string;
  icon?: string;
  nextStep?: () => void;
}) {
  return (
    <div className="mt-4 w-full">
      <button
        onClick={nextStep}
        className="w-full border-5 gap-2 flex flex-row items-center border-[#e6ded5] hover:border-[#b68300] duration-400 font-medium p-3 text-left rounded-xl"
      >
        <span className="text-4xl">{icon}</span>{" "}
        <ChevronRight
          size={22}
          className="p-1 rounded-full bg-[#ecdfd5] mr-2"
        />
        {text}
      </button>
    </div>
  );
}
