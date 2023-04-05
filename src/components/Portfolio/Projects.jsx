
import { useFilterContext } from "../../contexts/FilterContext";
import { useProjectsContext } from "../../contexts/ProjectContext";

import { ColorRing } from "react-loader-spinner";

const Projects = () => {
  const { filteredProjects: projects } = useFilterContext();
  const { projectsError, projectsLoading } = useProjectsContext();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "5rem auto",
    },
    h2: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },
  };

  if (projectsLoading)
    return (
      <section style={styles.container}>
        <ColorRing />;
      </section>
    );

  if (projectsError)
    return (
      <section style={styles.container}>
        <h2 className='h2'>Unable to fetch projects</h2>
        <button
          className='btn'
          onClick={() => window.location.reload()}
        >
          reload
        </button>
      </section>
    );

  return (
    <section className='projects'>
      <ul className='project-list'>
        {projects.map((project) => {
          const { id, name, category, projectURL, imageURL } = project;

          return (
            <li className='project-item  active' key={id}>
              <a href={projectURL}>
                <figure className='project-img'>
                  {projectURL !== "#" && (
                    <div className='project-item-icon-box'>
                      <ion-icon name='eye-outline'></ion-icon>
                    </div>
                  )}

                  <img src={imageURL} alt={name} loading='lazy' />
                </figure>

                <h3 className='project-title'>{name}</h3>
                <p className='project-category'>{category}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Projects;
