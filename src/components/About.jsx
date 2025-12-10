import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;

const LocationTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary}15;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;

  svg {
    font-size: 1.25rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Product builder, data analyst, and lifelong learner
        </SectionSubtitle>

        <Content>
          <Paragraph
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm <strong>Hannah Xiao</strong>, a soon-to-be Economics graduate
            from the University of Washington (Class of 2025, GPA 3.85) with a
            passion for building products at the intersection of AI, search, and
            user experience. My background spans product management,
            data analytics, and hands-on ML experimentation. I've led
            user research, built prototypes, and shipped features that measurably
            improved relevance, engagement, and trust.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <strong>Why Perplexity?</strong> I'm drawn to Perplexity's mission
            to build the world's most trustworthy answer engine. The focus on
            citations, transparency, and accuracy aligns deeply with my
            belief that AI products must earn user trust through clear
            provenance and measurable quality. The APM program offers a unique
            opportunity to work directly with founders, tackle hard product
            problems (ranking, personalization, multi-turn conversations), and
            contribute to a product used by millions. I'm excited to bring my
            product sense, technical curiosity, and data-driven mindset to help
            scale Perplexity's impact.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Outside of product work, I'm an avid reader (currently diving into
            AI safety and decision theory), a case interview coach for aspiring
            consultants, and a frequent contributor to open-source data tools.
            I'm eager to relocate to San Francisco and immerse myself in the
            Bay Area's AI ecosystem.
          </Paragraph>

          <LocationTag
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HiLocationMarker />
            Seattle, WA → San Francisco (Willing to Relocate)
          </LocationTag>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
