import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the AI Customer Care template
  redirect('/templates/ai-customer-care');
}