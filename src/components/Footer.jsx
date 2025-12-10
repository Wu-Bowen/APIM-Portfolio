import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white}cc;
  margin-bottom: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white}15;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white}cc;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.2s ease;

  svg {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.white}20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white}80;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  a {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white}80;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterTitle>Hannah Xiao</FooterTitle>
            <FooterText>
              APM Candidate passionate about building trustworthy AI products
              that help people make better decisions.
            </FooterText>
            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/hannahxiao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com/hannahxiao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="mailto:hannah.xiao@email.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <ContactItem href="mailto:hannah.xiao@email.com">
                <FaEnvelope />
                hannah.xiao@email.com
              </ContactItem>
              <ContactItem as="div">
                <HiLocationMarker />
                Seattle, WA → San Francisco, CA
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <ContactInfo>
              <ContactItem
                href="https://boards.greenhouse.io/embed/job_app?token=4786686007&utm_source=jobright"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Perplexity APM
              </ContactItem>
              <ContactItem
                href="/assets/Hannah_Xiao_Resume.pdf"
                download="Hannah_Xiao_Resume.pdf"
              >
                Download Resume
              </ContactItem>
              <ContactItem
                href="/assets/Hannah_Xiao_CL.pdf"
                download="Hannah_Xiao_CL.pdf"
              >
                Download Cover Letter
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} Hannah Xiao. Built with React, Vite, and
            styled-components.
          </Copyright>
          <FooterLinks>
            <a
              href="https://www.perplexity.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Perplexity
            </a>
            <a href="/case-studies/apm-takehome">APM Take-Home</a>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
