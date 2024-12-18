import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="glass-effect p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-primary-100">
      <div className="p-3 bg-primary-100 rounded-full w-fit">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}