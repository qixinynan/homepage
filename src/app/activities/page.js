import Card from "../components/common/card";
import RecentPreview from "./preview";
export default function Recent() {
  return <div className="mt-10 mx-5">
    <RecentPreview></RecentPreview>
    <Card className="mt-10">该页面还未完成</Card>
  </div>;
}

export const metadata = {
  title: "动态 - 七夕泥の网站",
};