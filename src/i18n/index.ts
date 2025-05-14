import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        features: 'Fonctionnalités',
        contact: 'Contact',
        login: 'Connexion'
      },
      hero: {
        title: 'Construis ton avenir avec',
        subtitle: 'Découvre tes passions, planifie ta carrière, et atteins tes objectifs avec notre plateforme d\'orientation scolaire et professionnelle.',
        signup: 'S\'inscrire',
        discover: 'Découvrir les fonctionnalités'
      },
      features: {
        title: 'Fonctionnalités clés',
        subtitle: 'Des outils puissants pour t\'aider à prendre les meilleures décisions pour ton avenir académique et professionnel.'
      }
      // Add more translations as needed
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        features: 'Features',
        contact: 'Contact',
        login: 'Login'
      },
      hero: {
        title: 'Build your future with',
        subtitle: 'Discover your passions, plan your career, and achieve your goals with our academic and professional guidance platform.',
        signup: 'Sign Up',
        discover: 'Discover Features'
      },
      features: {
        title: 'Key Features',
        subtitle: 'Powerful tools to help you make the best decisions for your academic and professional future.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'حول',
        features: 'المميزات',
        contact: 'اتصل بنا',
        login: 'تسجيل الدخول'
      },
      hero: {
        title: 'ابنِ مستقبلك مع',
        subtitle: 'اكتشف شغفك، خطط لمهنتك، وحقق أهدافك مع منصتنا للتوجيه المدرسي والمهني.',
        signup: 'سجل الآن',
        discover: 'اكتشف المميزات'
      },
      features: {
        title: 'المميزات الرئيسية',
        subtitle: 'أدوات قوية لمساعدتك في اتخاذ أفضل القرارات لمستقبلك الأكاديمي والمهني.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;