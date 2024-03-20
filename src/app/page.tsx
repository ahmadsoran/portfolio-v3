import HeroSection from '@/components/sections/hero.section';
import SkillsSection from '@/components/sections/skills.section';

export default function Home() {
  return (
    <div
      style={{
        overflow: 'auto',
      }}>
      <HeroSection />
      <SkillsSection />
    </div>
  );
}
