import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { useFetchContext } from "../../contexts/FetchContext";

import { ColorRing } from "react-loader-spinner";
import AnimatedSection from "../AnimatedSection";


import { projects_url as url } from "../../utils/constants";

const Projects = () => {
  const { filteredProjects: projects } = useFilterContext();
  const { fetchTable, fetchError, fetchLoading } = useFetchContext();

  useEffect(() => {
    fetchTable(url, "projects");
  }, []);


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

  if (fetchLoading)
    return (
      <section style={styles.container}>
        <ColorRing />;
      </section>
    );

  if (fetchError)
    return (
      <section style={styles.container}>
        <h2 className='h2'>Unable to fetch projects</h2>
        <button className='btn' onClick={() => window.location.reload()}>
          reload
        </button>
      </section>
    );

  return (
    <section className='projects'>
      <ul className='project-list'>
        {projects?.map((project) => {
          const { id, name, category, projectURL, imageURL } = project;

          return (
            <AnimatedSection>
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
                </a>
                <h3 className='project-title'>{name}</h3>
                <p className='project-category'>{category}</p>
              </li>
            </AnimatedSection>
          );
        })}
      </ul>
    </section>
  );
};
export default Projects;
