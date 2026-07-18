type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  let color = "bg-slate-700";

  if (status === "New") {
    color = "bg-blue-600";
  }

  if (status === "Proposal Sent") {
    color = "bg-yellow-600";
  }

  if (status === "Demo Scheduled") {
    color = "bg-green-600";
  }

  return (
    <span
      className={`${color} rounded-full px-3 py-1 text-sm`}
    >
      {status}
    </span>
  );
}