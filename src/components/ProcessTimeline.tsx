interface Stage {
  step: number;
  title: string;
  description: string;
}

export default function ProcessTimeline({ stages }: { stages: Stage[] }) {
  return (
    <ol className="relative border-l border-forest-100 ml-3 sm:ml-0 sm:border-l-0">
      <div className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-forest-100" aria-hidden="true" />
      <div className="sm:grid sm:grid-cols-5 sm:gap-x-6 sm:gap-y-10">
        {stages.map((stage) => (
          <li key={stage.step} className="relative pl-8 sm:pl-0 pb-10 sm:pb-0">
            <div className="sm:flex sm:flex-col sm:items-start">
              <span className="absolute -left-[9px] sm:static sm:-ml-0 flex items-center justify-center w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-forest text-harvest-50 text-xs sm:text-sm font-semibold">
                {stage.step}
              </span>
              <h3 className="mt-0 sm:mt-4 font-display text-lg text-ink">{stage.title}</h3>
              <p className="mt-1 text-sm text-ink-400 leading-relaxed">{stage.description}</p>
            </div>
          </li>
        ))}
      </div>
    </ol>
  );
}
