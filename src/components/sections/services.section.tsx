import Services from '../UI/services.ui';
import ServiceData from '@/app/personal-data.json';
export default async function ServicesSection() {
  const data = ServiceData.services;
  return <Services data={data} />;
}
