import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiLightBulb, HiCode, HiChartBar } from 'react-icons/hi';

const HighlightsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.white}
  );
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.secondary}
  );
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const HighlightTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const HighlightDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const highlights = [
  {
    icon: <HiLightBulb />,
    title: 'Product Sense',
    description:
      'Led product discovery, user research, and prioritization for AI-powered search products. Strong intuition for balancing user needs with technical constraints.',
  },
  {
    icon: <HiCode />,
    title: 'Technical Curiosity',
    description:
      'Prototyped ML experiments (reranking models, personalization), wrote Python/SQL for data analysis. Comfortable working with engineers to scope feasibility.',
  },
  {
    icon: <HiChartBar />,
    title: 'Metrics-Driven',
    description:
      'Improved answer relevance by 12%, CTR by 9%, and reduced error rates by 18% through rigorous experimentation and data analysis.',
  },
];

const Highlights = () => {
  return (
    <HighlightsSection>
      <Container>
        <HighlightsGrid>
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>{highlight.icon}</IconWrapper>
              <HighlightTitle>{highlight.title}</HighlightTitle>
              <HighlightDescription>
                {highlight.description}
              </HighlightDescription>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </Container>
    </HighlightsSection>
  );
};

export default Highlights;
