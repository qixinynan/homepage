import { isAdmin } from "@/app/common/utils";
import PostBlogView from "./view";

export default function PostBlog() {
  if (isAdmin()) {
    return <PostBlogView></PostBlogView>
  }
  else {
    redirect("/account");
  }
}
export const metadata = {
  title: "发布博客 - 七夕泥の网站",
};
