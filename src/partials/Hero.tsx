import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
         <GradientText>Bonjour</GradientText> 👋
        </>
      }
      description={
        <>
          Bienvenue dans mon {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            portfolio !
          </a>{' '}

        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      
      socialButtons={
        <>
          <a href="https://github.com/ALIXZAMORO">
            <HeroSocial
              src="/assets/images/github.png"
              alt="Github icon"
            />
          </a>

          <a href="https://linkedin.com/in/alix-zamoro">
            <HeroSocial
              src="/assets/images/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
