import HeroSection from '@/components/sections/hero.section';
import ServicesSection from '@/components/sections/services.section';
import SkillsSection from '@/components/sections/skills.section';
import ContactsSection from '@/components/sections/contacts.section';

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
