export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      services: 'Услуги',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      title: 'MB Auto Profi',
      subtitle: 'Строительство по всему Евросоюзу',
      description: 'Профессиональное строительство жилой и коммерческой недвижимости, мостов и инфраструктурных объектов',
      cta: 'Связаться с нами'
    },
    services: {
      title: 'Наши услуги',
      residential: {
        title: 'Жилое строительство',
        desc: 'Строительство домов, коттеджей и многоквартирных зданий под ключ'
      },
      commercial: {
        title: 'Коммерческая недвижимость',
        desc: 'Офисные центры, торговые комплексы, производственные здания'
      },
      infrastructure: {
        title: 'Инфраструктура',
        desc: 'Строительство мостов, дорог и инженерных сооружений'
      },
      renovation: {
        title: 'Реконструкция',
        desc: 'Капитальный ремонт и модернизация существующих зданий'
      }
    },
    about: {
      title: 'О компании',
      text: 'MB Auto Profi - надежная строительная компания с многолетним опытом работы по всему Евросоюзу. Мы специализируемся на строительстве жилой и коммерческой недвижимости, мостов и крупных инфраструктурных проектов.'
    },
    stats: {
      projects: 'Завершенных проектов',
      countries: 'Стран Евросоюза',
      experience: 'Лет опыта',
      team: 'Специалистов'
    },
    contact: {
      title: 'Свяжитесь с нами',
      name: 'Ваше имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      submit: 'Отправить'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'MB Auto Profi',
      subtitle: 'Construction across the European Union',
      description: 'Professional construction of residential and commercial real estate, bridges and infrastructure projects',
      cta: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      residential: {
        title: 'Residential Construction',
        desc: 'Turnkey construction of houses, cottages and apartment buildings'
      },
      commercial: {
        title: 'Commercial Real Estate',
        desc: 'Office centers, shopping complexes, industrial buildings'
      },
      infrastructure: {
        title: 'Infrastructure',
        desc: 'Construction of bridges, roads and engineering structures'
      },
      renovation: {
        title: 'Reconstruction',
        desc: 'Major repairs and modernization of existing buildings'
      }
    },
    about: {
      title: 'About Company',
      text: 'MB Auto Profi is a reliable construction company with many years of experience throughout the European Union. We specialize in the construction of residential and commercial real estate, bridges and large infrastructure projects.'
    },
    stats: {
      projects: 'Completed Projects',
      countries: 'EU Countries',
      experience: 'Years of Experience',
      team: 'Specialists'
    },
    contact: {
      title: 'Contact Us',
      name: 'Your Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send'
    }
  },
  lt: {
    nav: {
      home: 'Pagrindinis',
      about: 'Apie mus',
      services: 'Paslaugos',
      projects: 'Projektai',
      contact: 'Kontaktai'
    },
    hero: {
      title: 'MB Auto Profi',
      subtitle: 'Statyba visoje Europos Sąjungoje',
      description: 'Profesionalus gyvenamųjų ir komercinių nekilnojamojo turto, tiltų ir infrastruktūros objektų statyba',
      cta: 'Susisiekite su mumis'
    },
    services: {
      title: 'Mūsų paslaugos',
      residential: {
        title: 'Gyvenamųjų namų statyba',
        desc: 'Namų, kotedžų ir daugiabučių pastatų statyba "raktai į rankas"'
      },
      commercial: {
        title: 'Komercinis nekilnojamasis turtas',
        desc: 'Biurų centrai, prekybos kompleksai, gamybiniai pastatai'
      },
      infrastructure: {
        title: 'Infrastruktūra',
        desc: 'Tiltų, kelių ir inžinerinių statinių statyba'
      },
      renovation: {
        title: 'Rekonstrukcija',
        desc: 'Kapitalinis remontas ir esamų pastatų modernizavimas'
      }
    },
    about: {
      title: 'Apie įmonę',
      text: 'MB Auto Profi - patikima statybos įmonė su daugiamete patirtimi visoje Europos Sąjungoje. Speciali­zuojamės gyvena­mojo ir komercinio nekilnojamojo turto, tiltų ir didelių infra­struktūros projektų statyboje.'
    },
    stats: {
      projects: 'Užbaigtų projektų',
      countries: 'ES šalių',
      experience: 'Metų patirtis',
      team: 'Specialistų'
    },
    contact: {
      title: 'Susisiekite su mumis',
      name: 'Jūsų vardas',
      email: 'El. paštas',
      phone: 'Telefonas',
      message: 'Žinutė',
      submit: 'Siųsti'
    }
  }
}

export type Language = 'ru' | 'en' | 'lt'
export type TranslationKey = keyof typeof translations.ru