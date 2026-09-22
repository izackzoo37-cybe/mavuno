import ManufacturingIcon from "./ManufacturingIcons";
import { manufacturingStages } from "../data/manufacturingProcess";

export default function ManufacturingProcess() {
  return (
    <div>
      {/* Mobile / tablet: single vertical flow with a connecting line */}
      <ol className="lg:hidden relative border-l border-forest-100 ml-3">
        {manufacturingStages.map((stage) => (
          <li key={stage.step} className="relative pl-9 pb-10 last:pb-0">
            <span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-forest text-harvest-50 text-xs font-semibold ring-4 ring-harvest-50">
              {String(stage.step).padStart(2, "0")}
            </span>
            <div className="text-forest">
              <ManufacturingIcon name={stage.icon} />
            </div>
            <h3 className="mt-2 font-display text-lg text-ink">{stage.title}</h3>
            <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{stage.description}</p>
          </li>
        ))}
      </ol>

      {/* Desktop: structured grid timeline, two rows of five with a connecting line per row */}
      <div className="hidden lg:block">
        {[manufacturingStages.slice(0, 5), manufacturingStages.slice(5, 10)].map((row, rowIndex) => (
          <div key={rowIndex} className="relative mb-14 last:mb-0">
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-forest-100" aria-hidden="true" />
            <ol className="grid grid-cols-5 gap-6">
              {row.map((stage) => (
                <li
                  key={stage.step}
                  className={`relative flex flex-col items-start p-5 ${
                    stage.step % 2 === 0 ? "bg-forest-50" : "bg-white"
                  } border border-ink/10`}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest text-harvest-50 text-sm font-semibold -mt-9 mb-4 ring-4 ring-harvest-50">
                    {String(stage.step).padStart(2, "0")}
                  </span>
                  <div className="text-forest">
                    <ManufacturingIcon name={stage.icon} />
                  </div>
                  <h3 className="mt-3 font-display text-base text-ink leading-snug">{stage.title}</h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">{stage.description}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
