interface Row {
  label: string;
  value: string;
}

export default function NutritionTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <h3 className="font-display text-xl text-forest mb-3">{title}</h3>
      <table className="w-full text-sm border-t border-ink/15">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-ink/10">
              <th scope="row" className="py-3 pr-4 text-left font-medium text-ink-600 w-1/2">
                {row.label}
              </th>
              <td className="py-3 text-ink font-semibold">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
