import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiClock, HiUserCircle } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '../data/projects';

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const Meta = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textLight};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
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
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
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
      content: '▸';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      font-size: 1.125rem;
    }
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent}08,
    ${({ theme }) => theme.colors.secondary}08
  );
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 1.5rem 0;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    padding: 1rem;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const MetricCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;

  .label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ToolsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

const Tool = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageWrapper>
      <Container>
        <BackLink to="/projects">
          <HiArrowLeft /> Back to Projects
        </BackLink>

        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CategoryBadge>{project.category}</CategoryBadge>
          <Title>{project.title}</Title>
          <Subtitle>{project.subtitle}</Subtitle>
          <Meta>
            <span>
              <HiUserCircle /> {project.role}
            </span>
            <span>
              <HiClock /> {project.timeline}
            </span>
          </Meta>
        </Header>

        <Content>
          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionTitle>Problem</SectionTitle>
            <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.problem}</ReactMarkdown></MarkdownContent>
          </Section>

          {project.fullCaseStudy && project.fullCaseStudy.context && (
            <Section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle>Context</SectionTitle>
              <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.context}</ReactMarkdown></MarkdownContent>
            </Section>
          )}

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SectionTitle>Approach & Methodology</SectionTitle>
            <List>
              {project.approach.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </List>
            <SectionSubtitle>Tools & Technologies</SectionSubtitle>
            <ToolsList>
              {project.tools.map((tool, index) => (
                <Tool key={index}>{tool}</Tool>
              ))}
            </ToolsList>
          </Section>

          {project.fullCaseStudy && project.fullCaseStudy.deepDive && (
            <>
              {project.fullCaseStudy.deepDive.research && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>User Research & Discovery</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.research}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.dataAnalysis && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Data Analysis</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.dataAnalysis}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.experiments && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Experiments & A/B Testing</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.experiments}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.experimentDesign && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Experiment Design & Results</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.experimentDesign}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.modelWork && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Model Development</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.modelWork}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.modelDesign && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Model Design</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.modelDesign}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.prioritization && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Product Prioritization & Tradeoffs</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.prioritization}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.privacyAlignment && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Privacy & Compliance</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.privacyAlignment}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.wireframes && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>UI Design & Wireframes</SectionTitle>
                  <CodeBlock>{project.fullCaseStudy.deepDive.wireframes}</CodeBlock>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.methodology && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Methodology</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.methodology}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.findings && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Key Findings</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.findings}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.impactAnalysis && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Impact Analysis</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.impactAnalysis}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.roadmap && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Product Roadmap</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.roadmap}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.rolloutPlan && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Rollout Plan & Monitoring</SectionTitle>
                  <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.rolloutPlan}</ReactMarkdown></MarkdownContent>
                </Section>
              )}

              {project.fullCaseStudy.deepDive.retrospective && (
                <Section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle>Retrospective & Lessons Learned</SectionTitle>
                  <HighlightBox>
                    <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullCaseStudy.deepDive.retrospective}</ReactMarkdown></MarkdownContent>
                  </HighlightBox>
                </Section>
              )}
            </>
          )}

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Outcomes & Impact</SectionTitle>
            <MetricsGrid>
              <MetricCard>
                <div className="label">Primary Metric</div>
                <div className="value">{project.metrics.primary.match(/[+-]?\d+%/)?.[0] || 'N/A'}</div>
              </MetricCard>
              {project.metrics.secondary.slice(0, 2).map((metric, index) => {
                const match = metric.match(/[+-]?\d+%/);
                return (
                  <MetricCard key={index}>
                    <div className="label">
                      {metric.replace(/[+-]?\d+%/, '').replace(/[()]/g, '')}
                    </div>
                    <div className="value">{match ? match[0] : 'N/A'}</div>
                  </MetricCard>
                );
              })}
            </MetricsGrid>
            <List>
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Key Learnings</SectionTitle>
            <List>
              {project.keyLearnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>What's Next</SectionTitle>
            <MarkdownContent><ReactMarkdown remarkPlugins={[remarkGfm]}>{project.nextSteps}</ReactMarkdown></MarkdownContent>
          </Section>
        </Content>
      </Container>
    </PageWrapper>
  );
};

export default CaseStudyDetail;
