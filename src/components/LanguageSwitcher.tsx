import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../i18n/translations'

const SwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const LangButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  background: ${props => props.$active ? '#667eea' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'rgba(255,255,255,0.8)'};
  border: 2px solid ${props => props.$active ? '#667eea' : 'rgba(255,255,255,0.3)'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? '#5568d3' : 'rgba(255,255,255,0.1)'};
    border-color: ${props => props.$active ? '#5568d3' : 'rgba(255,255,255,0.5)'};
  }
`

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'lt', label: 'LT' }
  ]

  return (
    <SwitcherContainer>
      {languages.map(lang => (
        <LangButton
          key={lang.code}
          $active={language === lang.code}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.label}
        </LangButton>
      ))}
    </SwitcherContainer>
  )
}

export default LanguageSwitcher