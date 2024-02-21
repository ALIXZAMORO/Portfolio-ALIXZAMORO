import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Mes <GradientText>Projets</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 1 {{ AZA-FLIX }}"
        description="Je vous présente un site de streaming codé en langage PHP avec le framework Symfony et Bootstrap pour le design."
        link="https://watch.wave.video/bmVE3uuWlu7NT79E"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>PHP</Tags>
            <Tags color={ColorTags.LIME}>Symfony</Tags>
            <Tags color={ColorTags.SKY}>Twig</Tags>
            <Tags color={ColorTags.ROSE}>Bootstrap</Tags>
            <Tags color={ColorTags.YELLOW}>Adminer/phpMyAdmin</Tags>
          </>
        }
      />
    </div>
    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 2 {{ Aza-Recettes }}"
        description="Je vous présente un site avec des recettes de cuisine codé en langage Javascript avec le framework React."
        link="https://watch.wave.video/8rGj3Z6CWWU0thEI"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.LIME}>React</Tags>
            <Tags color={ColorTags.SKY}>CSS/SCSS</Tags>
            <Tags color={ColorTags.ROSE}>HTML</Tags>
            
          </>
        }
      />
    </div>

    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 3 {{ Aza-Pokémon }}"
        description="Ce site permet d'explorer une liste immense de pokémon ! Il a été codé en langage PHP."
        link="https://watch.wave.video/b7Ik92oUFDIofyHj"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>PHP</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>Adminer/phpMyAdmin</Tags>
          </>
        }
      />
    </div>
    
    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 4 {{ Ajout d'une tâche }}"
        description="Ce site consiste à ajouter des tâches, afin de s'organiser au quotidien, il a été codé en langage PHP."
        link="https://watch.wave.video/Bu28M53DfoYgJGaq"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>PHP</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>Adminer/phpMyAdmin</Tags>
          </>
        }
      />
    </div>

<br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 5 {{ NatureWebSite }}"
        description="Je vous présente un site de publication des plus grands arbres au monde et codé en langage PHP."
        link="https://watch.wave.video/3QztOPkhxMDozTOL"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>PHP</Tags>
            <Tags color={ColorTags.LIME}>Bootstrap</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            <Tags color={ColorTags.ROSE}>HTML</Tags>
          </>
        }
      />
    </div>

    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 6 {{ Dj-soundbar }}"
        description="Ce mini site a été codé avec le langage Javascript."
        link="https://dj-soundbar-alixzamoro.netlify.app/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
          </>
        }
      />
    </div>

    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Projet 7 {{ aza-pub }}"
        description="Ce mini site a été codé avec le langage Javascript."
        link="https://azapub.netlify.app/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
          </>
        }
      />
    </div>


  </Section>
);

export { ProjectList };
