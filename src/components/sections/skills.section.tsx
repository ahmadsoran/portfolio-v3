import { baseUrl } from '@/constant/const';
import { PersonalData } from '@/@types';
import Skills from '../UI/skills';
const SkillsData = async function SkillsData<T>(): Promise<T> {
  return (await (
    await fetch(`${baseUrl}/assets/personal-data.json`, {
      // SSG
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  ).json()) as T;
};
export default async function SkillsSection() {
  const data = await SkillsData<PersonalData>();
  const skills = data.skills;
  return <Skills data={skills} />;
}
