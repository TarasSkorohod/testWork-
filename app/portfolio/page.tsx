import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import ProjectsGrid from "@/components/mainPortfolioFix/projects/ProjectsGrid";
import React from "react";
export default function Portfolio() {
  return (
    <main className="py-16 container">
      <Title tag="h2" cn="mb-16">
          ТУТ Я ВСТАВИВ  <span className="text-[#203055]">ДЛЯ ПРИКЛАДУ </span>
      </Title>
      <ProjectsGrid />

      <Title tag="h4" cn="mb-10 mt-16">
        ЗВЯЗАТИСЯ
      </Title>
      <CustomForm />
    </main>
  );
}
