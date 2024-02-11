import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Abonnez vous à ma <GradientText>Newsletters</GradientText>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    />
  </Section>
);

export { CTA };
