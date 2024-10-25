import PropTypes from "prop-types";

export default function ProjectList({ projects }) {
  return (
    <div className="projectList">
      {projects.map((project, index) => (
        <div key={index} name={project.category} className="item">
          <img src={`${project.img}`} width={200} />
        </div>
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
