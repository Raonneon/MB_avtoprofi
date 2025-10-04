import styled from 'styled-components'
import { useLanguage } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'

const GlobalContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
`

const Header = styled.header`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #667eea;
  }
`

const Hero = styled.section`
  background: 
    linear-gradient(135deg, rgba(30, 60, 114, 0.85) 0%, rgba(42, 82, 152, 0.85) 100%),
    url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80') center/cover;
  padding: 8rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CTAButton = styled.button`
  padding: 18px 48px;
  font-size: 1.2rem;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
  font-weight: 600;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 30px rgba(255, 107, 53, 0.5);
  }
`

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  text-align: center;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
  }
`

const ServiceIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
`

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    z-index: 1;
  }
`

const ProjectImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 100%;
  background: url(${props => props.$image}) center/cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  z-index: 2;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.9;
  }
`

const StatsSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem;
  color: white;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const StatItem = styled.div`
  h3 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.95;
  }
`

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: white;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #555;
  margin-top: 2rem;
`

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
`

const ContactContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`

const Input = styled.input`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const TextArea = styled.textarea`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  min-height: 150px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const SubmitButton = styled.button`
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const Footer = styled.footer`
  background: #1a1a1a;
  color: white;
  text-align: center;
  padding: 2rem;
`

function App() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (Demo mode)')
  }

  return (
    <GlobalContainer>
      <Header>
        <Nav>
          <Logo>MB Auto Profi</Logo>
          <NavLinks>
            <NavLink onClick={() => scrollToSection('home')}>{t.nav.home}</NavLink>
            <NavLink onClick={() => scrollToSection('services')}>{t.nav.services}</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>{t.nav.about}</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>{t.nav.contact}</NavLink>
            <LanguageSwitcher />
          </NavLinks>
        </Nav>
      </Header>

      <Hero id="home">
        <HeroContent>
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
          <HeroDescription>{t.hero.description}</HeroDescription>
          <CTAButton onClick={() => scrollToSection('contact')}>
            {t.hero.cta}
          </CTAButton>
        </HeroContent>
      </Hero>

      <ServicesSection id="services">
        <SectionTitle>{t.services.title}</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🏠</ServiceIcon>
            <ServiceTitle>{t.services.residential.title}</ServiceTitle>
            <ServiceDescription>{t.services.residential.desc}</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🏢</ServiceIcon>
            <ServiceTitle>{t.services.commercial.title}</ServiceTitle>
            <ServiceDescription>{t.services.commercial.desc}</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🌉</ServiceIcon>
            <ServiceTitle>{t.services.infrastructure.title}</ServiceTitle>
            <ServiceDescription>{t.services.infrastructure.desc}</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🔨</ServiceIcon>
            <ServiceTitle>{t.services.renovation.title}</ServiceTitle>
            <ServiceDescription>{t.services.renovation.desc}</ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ProjectsSection id="projects">
        <SectionTitle>Our Projects</SectionTitle>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage $image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" />
            <ProjectInfo>
              <h3>Residential Complex</h3>
              <p>Berlin, Germany</p>
            </ProjectInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage $image="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80" />
            <ProjectInfo>
              <h3>Shopping Center</h3>
              <p>Warsaw, Poland</p>
            </ProjectInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage $image="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80" />
            <ProjectInfo>
              <h3>Bridge Construction</h3>
              <p>Prague, Czech Republic</p>
            </ProjectInfo>
          </ProjectCard>
        </ProjectsGrid>
      </ProjectsSection>

      <StatsSection>
        <StatsGrid>
          <StatItem>
            <h3>50+</h3>
            <p>{t.stats.projects}</p>
          </StatItem>
          <StatItem>
            <h3>15</h3>
            <p>{t.stats.countries}</p>
          </StatItem>
          <StatItem>
            <h3>2+</h3>
            <p>{t.stats.experience}</p>
          </StatItem>
          <StatItem>
            <h3>70+</h3>
            <p>{t.stats.team}</p>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <AboutSection id="about">
        <SectionTitle>{t.about.title}</SectionTitle>
        <AboutText>{t.about.text}</AboutText>
      </AboutSection>

      <ContactSection id="contact">
        <ContactContainer>
          <SectionTitle>{t.contact.title}</SectionTitle>
          <ContactForm onSubmit={handleSubmit}>
            <Input type="text" placeholder={t.contact.name} required />
            <Input type="email" placeholder={t.contact.email} required />
            <Input type="tel" placeholder={t.contact.phone} />
            <TextArea placeholder={t.contact.message} required />
            <SubmitButton type="submit">{t.contact.submit}</SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>

      <Footer>
        <p>© 2024 MB Auto Profi. All rights reserved.</p>
      </Footer>
    </GlobalContainer>
  )
}

export default App