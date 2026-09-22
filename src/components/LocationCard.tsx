import type { Location } from "../data/locations";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="border border-ink/10 bg-white p-6">
      <p className="text-xs uppercase tracking-wide text-forest font-semibold">{location.type}</p>
      <h3 className="mt-2 font-display text-lg text-ink">{location.name}</h3>
      <p className="mt-1 text-sm text-ink-400">{location.address}</p>
      <p className="mt-1 text-sm text-ink-400">{location.county}</p>
      {location.mapUrl && (
        <a href={location.mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-forest font-medium hover:underline">
          View on map
        </a>
      )}
    </div>
  );
}
