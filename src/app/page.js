import Image from "next/image";
import Intro from "./intro";
import UpdatesPreview from "./updates/preview";
import ProjectsPreview from "./projects/preview";

export default function Home() {
  return (
    <main className="">
      <article className="max-w-xl space-y-8 px-3 mx-auto">
        <Intro></Intro>
        <UpdatesPreview></UpdatesPreview>
        <ProjectsPreview></ProjectsPreview>
      </article>
    </main>
  );
}
