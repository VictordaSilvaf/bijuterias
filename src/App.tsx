import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./pages/Step1";
import { AnimatePresence } from "motion/react";
import { ChevronLeft } from "lucide-react";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";
import Step7 from "./pages/Step7";
import Step8 from "./pages/Step8";
import Step9 from "./pages/Step9";

function App() {
  const totalSteps = 9; // total de etapas
  const [step, setStep] = useState(1);
  // calcula o progresso com base na etapa atual
  const progress = (step / totalSteps) * 100;

  // avançar
  function nextStep() {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  }

  // voltar
  function prevStep() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className="bg-[#fff7ed] min-h-screen h-full flex items-center justify-start pt-8 overflow-x-hidden flex-col">
      <div className="max-w-md w-full h-full flex flex-col flex-1">
        <ProgressBar value={progress} />
        {step > 1 && (
          <button
            onClick={prevStep}
            className="mt-4 text-gray-600 cursor-pointer hover:text-gray-800 absolute left-4 top-12"
          >
            <ChevronLeft />
          </button>
        )}

        <div className="mt-8 flex-1 flex flex-col">
          <AnimatePresence>
            {step === 1 && <Step1 nextStep={nextStep} />}
            {step === 2 && <Step2 nextStep={nextStep} />}
            {step === 3 && <Step3 nextStep={nextStep} />}
            {step === 4 && <Step4 nextStep={nextStep} />}
            {step === 5 && <Step5 nextStep={nextStep} />}
            {step === 6 && <Step6 nextStep={nextStep} />}
            {step === 7 && <Step7 nextStep={nextStep} />}
            {step === 8 && <Step8 nextStep={nextStep} />}
            {step === 9 && <Step9 />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
