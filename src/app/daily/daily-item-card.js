import Card from "../components/common/card";
import DeleteIcon from "../components/icon/delete";

export default function DailyItemCard({ content, description, onDelete }) {
  return (<Card>
    <div className="flex items-center justify-between">
      <p className="text-base font-bold text-slate-800">{content}</p>
      <div onClick={onDelete}>
        <DeleteIcon className="w-3 h-3 text-red-600"></DeleteIcon>
      </div>
    </div>
    <p className="text-sm mt-0 text-slate-600">{description}</p>
  </Card>)
}