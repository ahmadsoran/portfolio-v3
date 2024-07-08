import Contacts from '../UI/contacts.ui';
import ContactsData from '@/public/assets/personal-data.json';
export default async function ContactsSection() {
  const data = ContactsData;
  return <Contacts data={data} />;
}
