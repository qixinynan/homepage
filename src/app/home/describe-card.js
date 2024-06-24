import Card from "../components/common/card";
import H2 from "../components/common/h2";

export default function DescribeCard({ title = "", children }) {
  return (
    <Card className="shadow-md border text-sm text-slate-800">
      <p className="text-lg text-black font-bold">{title}</p>
      {children}
    </Card>
  )
}