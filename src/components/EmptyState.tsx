export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="border border-dashed border-ink/20 py-16 px-6 text-center">
      <p className="font-display text-xl text-ink-600">{message}</p>
    </div>
  );
}
