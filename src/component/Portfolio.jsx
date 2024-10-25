import { useState } from "react";
import { projects } from "../data/data";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [projectsList, setProjectsList] = useState(projects);

  return (
    <div className="portfolio">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {
          setSelected(filter);
          if (filter === "All") {
            setProjectsList(projects); // Если фильтр "All", показываем все проекты
          } else {
            setProjectsList(projects.filter((project) => project.category === filter));
          };
        }}
      />
      <ProjectList projects={projectsList} />
    </div>
  );
}
