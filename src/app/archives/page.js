import { redirect } from "next/navigation";
import { isAdmin } from "../common/utils";
import { ArchivesView } from "./view";

export default function Archives() {
  if (!isAdmin()) {
    redirect("/account");
  }
  return <ArchivesView></ArchivesView>
}

export const metadata = {
  title: "档案 - 七夕泥の网站",
};
