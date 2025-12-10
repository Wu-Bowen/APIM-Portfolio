import styled from 'styled-components';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PageHeader = styled.section`
  padding: 4rem 2rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'd love to discuss product opportunities, the Perplexity APM program,
          or anything AI & product related
        </PageSubtitle>
      </PageHeader>
      <Contact />
    </PageWrapper>
  );
};

export default ContactPage;
