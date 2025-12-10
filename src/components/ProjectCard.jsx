import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Card = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-4px);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const ProjectSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    strong {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const MetricsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
`;

const MetricsTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MetricsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: '-';
      font-size: 1.125rem;
    }
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tool = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    svg {
      transform: translateX(4px);
    }
  }
`;

const ProjectCard = ({ project, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ProjectHeader>
        <CategoryBadge>{project.category}</CategoryBadge>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
        <MetaInfo>
          <span>
            <strong>Role:</strong> {project.role}
          </span>
          <span>"</span>
          <span>
            <strong>Timeline:</strong> {project.timeline}
          </span>
        </MetaInfo>
      </ProjectHeader>

      <ProjectDescription>{project.shortDescription}</ProjectDescription>

      <MetricsContainer>
        <MetricsTitle>Key Outcomes</MetricsTitle>
        <MetricsList>
          <li>{project.metrics.primary}</li>
          {project.metrics.secondary.slice(0, 2).map((metric, i) => (
            <li key={i}>{metric}</li>
          ))}
        </MetricsList>
      </MetricsContainer>

      <ToolsContainer>
        {project.tools.slice(0, 6).map((tool, i) => (
          <Tool key={i}>{tool}</Tool>
        ))}
      </ToolsContainer>

      <ReadMoreLink to={`/case-studies/${project.slug}`}>
        Read Full Case Study <HiArrowRight />
      </ReadMoreLink>
    </Card>
  );
};

export default ProjectCard;
