import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiClock } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { apmTakeHomePrompt } from '../data/projects';

const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    gap: 0.75rem;
  }
`;

const Header = styled(motion.header)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const TimeLimit = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 600;

  svg {
    font-size: 1.125rem;
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
`;

const SectionSubtitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PromptBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
`;

const MarkdownContent = styled.div`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  word-wrap: break-word;
  overflow-wrap: break-word;

  p {
    margin-bottom: 1.25rem;
    line-height: 1.8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  strong, b {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  em, i {
    font-style: italic;
  }

  ul, ol {
    margin: 1.25rem 0;
    padding-left: 2rem;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }

  code {
    background-color: ${({ theme }) => theme.colors.primary}15;
    color: ${({ theme }) => theme.colors.accent};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.white};
      padding: 0;
      font-size: 0.875rem;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.textLight};
    font-style: italic;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  hr {
    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.border};
    margin: 2rem 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};

    &:before {
      content: '-';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      font-size: 1.125rem;
    }
  }
`;

const HypothesisCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

const SolutionCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent}08,
    ${({ theme }) => theme.colors.secondary}08
  );
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border};

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
`;

const ProsCons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProsConsBox = styled.div`
  background-color: ${({ theme, $type }) =>
    $type === 'pros'
      ? theme.colors.secondary + '10'
      : theme.colors.accent + '10'};
  padding: 1rem;
  border-radius: 6px;

  h5 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: ${({ theme, $type }) =>
      $type === 'pros' ? theme.colors.secondary : theme.colors.accent};
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding-left: 0;
      font-size: 0.9375rem;
      margin-bottom: 0.5rem;

      &:before {
        content: ${({ $type }) => ($type === 'pros' ? "'-'" : "'-'")};
        margin-right: 0.5rem;
      }
    }
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent}15,
    ${({ theme }) => theme.colors.secondary}15
  );
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const APMTakeHome = () => {
  const { title, prompt, modelAnswer } = apmTakeHomePrompt;

  return (
    <PageWrapper>
      <Container>
        <BackLink to="/">
          <HiArrowLeft /> Back to Home
        </BackLink>

        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>{title}</Title>
          <Subtitle>
            A demonstration of product thinking, prioritization, and
            data-driven decision-making for an APM role
          </Subtitle>
          <TimeLimit>
            <HiClock /> 30-minute exercise
          </TimeLimit>
        </Header>

        <Content>
          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionTitle>The Prompt</SectionTitle>
            <PromptBox><ReactMarkdown>{prompt}</ReactMarkdown></PromptBox>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SectionTitle>My Approach</SectionTitle>

            <SectionSubtitle>1. Hypotheses: Why Users Drop Off</SectionSubtitle>
            {modelAnswer.hypotheses.map((hyp, index) => (
              <HypothesisCard key={index}>
                <h4>{hyp.hypothesis}</h4>
                <p>
                  <strong>Evidence:</strong> {hyp.evidence}
                </p>
                <p>
                  <strong>How to test:</strong> {hyp.testable}
                </p>
              </HypothesisCard>
            ))}

            <SectionSubtitle>2. Proposed Solutions</SectionSubtitle>
            {modelAnswer.proposedSolutions.map((sol, index) => (
              <SolutionCard key={index}>
                <h4>{sol.solution}</h4>
                <p>{sol.description}</p>
                <ProsCons>
                  <ProsConsBox $type="pros">
                    <h5>Pros</h5>
                    <ul>
                      {sol.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </ProsConsBox>
                  <ProsConsBox $type="cons">
                    <h5>Cons</h5>
                    <ul>
                      {sol.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </ProsConsBox>
                </ProsCons>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  <strong>Key tradeoff:</strong> {sol.tradeoff}
                </p>
              </SolutionCard>
            ))}

            <SectionSubtitle>3. Recommended Solution & Rationale</SectionSubtitle>
            <HighlightBox>
              <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                {modelAnswer.recommendedSolution.choice}
              </h4>
              <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{modelAnswer.recommendedSolution.rationale}</ReactMarkdown></MarkdownContent>
            </HighlightBox>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>4. Experiment Design</SectionTitle>
            <Paragraph>
              <strong>Hypothesis:</strong> {modelAnswer.experiment.hypothesis}
            </Paragraph>
            <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{modelAnswer.experiment.design}</ReactMarkdown></MarkdownContent>

            <SectionSubtitle>Success Metrics</SectionSubtitle>
            <HypothesisCard>
              <h4>Primary Metric</h4>
              <p>{modelAnswer.experiment.metrics.primary}</p>
            </HypothesisCard>
            <h4
              style={{
                fontSize: '1.125rem',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              Secondary Metrics
            </h4>
            <List>
              {modelAnswer.experiment.metrics.secondary.map((metric, i) => (
                <li key={i}>{metric}</li>
              ))}
            </List>
            <h4
              style={{
                fontSize: '1.125rem',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              Guardrail Metrics
            </h4>
            <List>
              {modelAnswer.experiment.metrics.guardrails.map((metric, i) => (
                <li key={i}>{metric}</li>
              ))}
            </List>

            <Paragraph>
              <strong>Success Criteria:</strong>{' '}
              {modelAnswer.experiment.successCriteria}
            </Paragraph>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>5. 6-Month Roadmap (If Successful)</SectionTitle>
            <HypothesisCard>
              <h4>Month 1-2</h4>
              <p>{modelAnswer.roadmap.month1}</p>
            </HypothesisCard>
            <HypothesisCard>
              <h4>Month 2-3</h4>
              <p>{modelAnswer.roadmap.month2}</p>
            </HypothesisCard>
            <HypothesisCard>
              <h4>Month 3-4</h4>
              <p>{modelAnswer.roadmap.month3}</p>
            </HypothesisCard>
            <HypothesisCard>
              <h4>Month 4-5</h4>
              <p>{modelAnswer.roadmap.month4}</p>
            </HypothesisCard>
            <HypothesisCard>
              <h4>Month 5-6</h4>
              <p>{modelAnswer.roadmap.month5}</p>
            </HypothesisCard>
            <HypothesisCard>
              <h4>Month 6+</h4>
              <p>{modelAnswer.roadmap.month6}</p>
            </HypothesisCard>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Key Tradeoffs & Decision Framework</SectionTitle>
            {modelAnswer.keyTradeoffs.map((tradeoff, index) => (
              <HypothesisCard key={index}>
                <h4>{tradeoff.tradeoff}</h4>
                <p>
                  <strong>My decision:</strong> {tradeoff.decision}
                </p>
              </HypothesisCard>
            ))}
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Reflection</SectionTitle>
            <HighlightBox>
              <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{modelAnswer.retrospective}</ReactMarkdown></MarkdownContent>
            </HighlightBox>
          </Section>
        </Content>
      </Container>
    </PageWrapper>
  );
};

export default APMTakeHome;
