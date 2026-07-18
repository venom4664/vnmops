
import AppLayout from "@/components/AppLayout";
import KpiCard from "@/components/KpiCard";
import { leads } from "@/data/leads";
import LeadCard from "@/components/LeadCard";
export default function DashboardPage() {
  const totalLeads = leads.length;

const newLeads = leads.filter(
  (lead) => lead.status === "New"
).length;

const proposals = leads.filter(
  (lead) => lead.status === "Proposal Sent"
).length;
  return (
<main className="min-h-screen bg-slate-950 text-white p-10">
  <h1 className="text-5xl font-bold text-orange-500">
    VnmOps
  </h1>
  <AppLayout>

    DASHBOARD 
<p className="mt-2 text-slate-400">
     Sales CRM Platform
  </p>
<div className="mt-8 grid grid-cols-3 gap-4">
  <KpiCard
    title="Total Leads"
    value={totalLeads}
  />

  <KpiCard
    title="New Leads"
    value={newLeads}
  />

  <KpiCard
    title="Proposals"
    value={proposals}
  />
</div>
  <div className="mt-10 space-y-3">
    {leads.map((lead) => (
      <LeadCard
        key={lead.id}
        lead={lead}
      />
    ))}
  </div>
  </AppLayout>

  
</main>
);
}