interface Cert {
  name: string;
  number: string;
  issuingOrganization: string;
  validity: string;
  document: string;
  note: string;
}

export default function CertificationCard({ cert }: { cert: Cert }) {
  return (
    <div className="border border-ink/15 p-6 bg-white">
      <h3 className="font-display text-lg text-forest">{cert.name}</h3>
      <dl className="mt-3 space-y-1.5 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-ink-400">Certification number</dt>
          <dd className="font-medium text-right">{cert.number}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-ink-400">Issuing organization</dt>
          <dd className="font-medium text-right">{cert.issuingOrganization}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-ink-400">Validity</dt>
          <dd className="font-medium text-right">{cert.validity}</dd>
        </div>
      </dl>
      <p className="mt-4 text-xs text-ink-400 border-t border-ink/10 pt-3">{cert.note}</p>
    </div>
  );
}
