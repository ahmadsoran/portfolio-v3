import Skills from '../UI/skills.ui';
import SkillsData from '@/app/personal-data.json';
export default async function SkillsSection() {
  const data = SkillsData.skills;
  return <Skills data={data} />;
}
