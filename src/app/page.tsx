import HeroSection from '@/src/components/sections/hero.section';
import ServicesSection from '@/src/components/sections/services.section';
import SkillsSection from '@/src/components/sections/skills.section';
import ContactsSection from '@/src/components/sections/contacts.section';

export default function Home() {
  return (
    <div
      style={{
        overflow: 'auto',
      }}>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ContactsSection />
    </div>
  );
}
