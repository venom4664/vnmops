type KpiCardProps = {
  title: string;
  value: number;
};

export default function KpiCard({
  title,
  value,
}: KpiCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-6">
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-orange-500">
        {value}
      </h2>
    </div>
  );
}