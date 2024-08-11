import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import React from "react";

const BLUR_FADE_DELAY = 0.04;
export default function page() {
  return (
    <>
      <div className="mt-12  grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[1000px] mx-auto">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </>
  );
}
