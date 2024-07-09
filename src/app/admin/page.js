import { redirect } from "next/navigation";
import { isAdmin } from "../common/utils";
import AdminView from "./view";

export default function Admin() {
  if (isAdmin()) {
    return <AdminView></AdminView>
  }
  else {
    redirect("/account");
  }
}

export const metadata = {
  title: "管理 - 七夕泥の网站",
};
