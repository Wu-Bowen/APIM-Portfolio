import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadows.md : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transition: right 0.3s ease;
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.text};
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    &:after {
      width: 100%;
    }
  }
`;

const ApplyButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.75rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <HeaderWrapper
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo to="/">Hannah Xiao</Logo>

          <NavLinks $isOpen={mobileMenuOpen}>
            <NavLink to="/" $active={isActive('/')}>
              Home
            </NavLink>
            <NavLink to="/case-studies/apm-takehome" $active={isActive('/case-studies/apm-takehome')}>
              APM Take-Home
            </NavLink>
            <NavLink to="/case-studies" $active={location.pathname.includes('/case-studies')}>
              Case Studies
            </NavLink>
            <NavLink to="/resume" $active={isActive('/resume')}>
              Resume
            </NavLink>
            <NavLink to="/contact" $active={isActive('/contact')}>
              Contact
            </NavLink>
            <ApplyButton
              href="https://boards.greenhouse.io/embed/job_app?token=4786686007&utm_source=jobright"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply: Perplexity APM
            </ApplyButton>
          </NavLinks>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </MobileMenuButton>
        </Nav>
      </HeaderWrapper>

      <Overlay
        $isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
