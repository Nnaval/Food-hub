import { Payment, columns } from "@/components/table/Column"
import { DataTableDemo } from "@/components/table/Table"

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 cursor-pointer">
        <h1 className="text-3xl font-bold mb-4">Overview / Logistics</h1>
      <DataTableDemo  columns={columns} data={data} />
    </div>
  )
}
