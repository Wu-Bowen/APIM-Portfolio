import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiDownload, HiAcademicCap, HiBriefcase, HiCode } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';

const ResumeSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin: 0 auto 3rem;
  display: flex;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ResumeBlock = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`;

const EducationInfo = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.25rem;
  }

  .gpa {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.25rem;
  }

  .meta {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.6;

      &:before {
        content: '-';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.accent};
        font-weight: bold;
      }
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 0.9375rem;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &:before {
        content: '-';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </SectionTitle>

        <DownloadButton
          href="/assets/Hannah_Xiao_Resume.pdf"
          download="Hannah_Xiao_Resume.pdf"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HiDownload /> Download Full Resume (PDF)
        </DownloadButton>

        <ResumeContent>
          <ResumeBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BlockHeader>
              <HiAcademicCap />
              <h3>Education</h3>
            </BlockHeader>
            <EducationInfo>
              <h4>{resumeData.education.degree}</h4>
              <p>
                <strong>{resumeData.education.school}</strong> | Class of{' '}
                {resumeData.education.year}
              </p>
              <p className="gpa">GPA: {resumeData.education.gpa}</p>
            </EducationInfo>
          </ResumeBlock>

          <ResumeBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BlockHeader>
              <HiBriefcase />
              <h3>Experience</h3>
            </BlockHeader>
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index}>
                <h4>{exp.title}</h4>
                <div className="meta">
                  {exp.organization} | {exp.location} | {exp.duration}
                </div>
                <ul>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </ExperienceItem>
            ))}
          </ResumeBlock>

          <ResumeBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BlockHeader>
              <HiCode />
              <h3>Skills</h3>
            </BlockHeader>
            <SkillsGrid>
              <SkillCategory>
                <h4>Technical</h4>
                <ul>
                  {resumeData.skills.technical.slice(0, 5).map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </SkillCategory>
              <SkillCategory>
                <h4>Product</h4>
                <ul>
                  {resumeData.skills.product.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </SkillCategory>
              <SkillCategory>
                <h4>Analytical</h4>
                <ul>
                  {resumeData.skills.analytical.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </SkillCategory>
            </SkillsGrid>
          </ResumeBlock>
        </ResumeContent>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
