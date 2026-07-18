"use client";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { leads } from "@/data/leads";
import LeadTable from "@/components/LeadTable";

export default function LeadsPage() 
{
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
const filteredLeads = leads.filter((lead) => {
  const matchesSearch = lead.company
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    status === "All" ||
    lead.status === status;

  return matchesSearch && matchesStatus;
});
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold text-orange-500">
        Leads
      </h1>
  <AppLayout>
<input
  type="text"
  placeholder="Search leads..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mt-6 w-full rounded-lg bg-slate-900 p-4 text-white"
/>
<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="mt-4 rounded-lg bg-slate-900 p-4 text-white"
>
  <option>All</option>
  <option>New</option>
  <option>Demo Scheduled</option>
  <option>Proposal Sent</option>
</select>
<p className="mt-4">      
  Searching for: {search}     </p>
    <LeadTable leads={filteredLeads} />
    
  </AppLayout>

     

    </main>
  
  );
}