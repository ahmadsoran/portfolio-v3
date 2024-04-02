import ServicesData from '../../../public/assets/personal-data.json';
import Services from '../UI/services.ui';
export default async function ServicesSection() {
  const data = ServicesData;
  const projects = data.projects;
  return <Services data={projects} />;
}
