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
        name="Projet 1"
        description="Je vous présente un site de streaming fait avec le framework Symfony et Bootstrap pour le front."
        link="/"
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
  </Section>
);

export { ProjectList };
