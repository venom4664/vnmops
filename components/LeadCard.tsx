import { Lead } from "@/types/lead";
import StatusBadge from "./StatusBadge";

type LeadCardProps = {
  lead: Lead;
};

export default function LeadCard({ lead }: LeadCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="font-semibold">
        {lead.company}
      </h2>

    <StatusBadge
  status={lead.status}
/>
    </div>
  );
}