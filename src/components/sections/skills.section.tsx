import Skills from '../UI/skills.ui';
import SkillsData from '../../../public/assets/personal-data.json';
export default async function SkillsSection() {
  const data = SkillsData;
  const skills = data.skills;
  return <Skills data={skills} />;
}
