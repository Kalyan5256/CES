import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-24 px-4 text-center max-w-xl mx-auto flex flex-col items-center">
      <SectionHeader
        badge="404 Error"
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
      />
      <div className="mt-8">
        <Button to="/" variant="primary" icon={Home}>Return Home</Button>
      </div>
    </div>
  );
}
