//import { leads } from "@/data/leads";
import { Lead } from "@/types/lead";
import StatusBadge from "./StatusBadge";

type LeadTableProps = {
  leads: Lead[];
};

export default function LeadTable({
  leads,
}: LeadTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl bg-slate-900">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Contact</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Product</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-slate-800"
            >
              <td className="p-4">{lead.company}</td>

              <td className="p-4">
                {lead.contact || "-"}
              </td>

              <td className="p-4">
                <StatusBadge status={lead.status} />
              </td>

              <td className="p-4">{lead.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}