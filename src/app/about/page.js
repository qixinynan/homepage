import Intro from "./intro";
import RecentPreview from "../activities/preview";
import ProjectsPreview from "../projects/preview";

export default function About() {
  return (
    <main className="">
      <article className="max-w-xl space-y-8 px-3 mx-auto">
        <Intro></Intro>
        <RecentPreview></RecentPreview>
        <ProjectsPreview></ProjectsPreview>
      </article>
    </main>
  )
}

export const metadata = {
  title: "关于 - 七夕泥の网站",
};