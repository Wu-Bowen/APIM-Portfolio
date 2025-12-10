import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
  padding-top: 80px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      ${({ theme }) => theme.colors.accent}15,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Eyebrow = styled(motion.div)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  line-height: 1.15;

  span {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.secondary}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtext = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  text-align: center;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 30px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.accent},
      transparent
    );
    margin: 0.5rem auto 0;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Eyebrow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Applying to Perplexity APM Program
        </Eyebrow>

        <Headline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          APM Candidate <span>Curiosity-driven product building</span> at the
          intersection of AI & UX
        </Headline>

        <Subtext
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Passionate about building accurate, trustworthy decision-assist AI at
          scale. I bring product sense, technical curiosity, and a
          metrics-driven approach to complex problems in search, AI, and
          information retrieval.
        </Subtext>

        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PrimaryButton to="/projects">
            View Projects <HiArrowRight />
          </PrimaryButton>
          <SecondaryButton
            href="/assets/Hannah_Xiao_Resume.pdf"
            download="Hannah_Xiao_Resume.pdf"
          >
            <HiDownload /> Download Resume
          </SecondaryButton>
        </CTAContainer>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Scroll to explore
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
