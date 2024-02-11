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
        name="Projet 1 {{ Go ! }}"
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
          </>
        }
      />
    </div>

    <div className="flex flex-col gap-6">
      <Project
        name="Projet 2 {{ Go ! }}"
        description="Je vous présente un site avec des recettes de cuisine codé en langage Javascript avec le framework React."
        link="https://watch.wave.video/iYUCjnqjeVHmB0Oo"
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
  </Section>
);

export { ProjectList };
