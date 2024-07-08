import Contacts from '../UI/contacts.ui';
import ContactsData from '@/app/personal-data.json';
export default async function ContactsSection() {
  const data = ContactsData;
  return <Contacts data={data} />;
}
