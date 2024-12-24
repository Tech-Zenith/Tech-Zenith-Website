interface Service {
  name: string;
  href: string;
  description: string;
  bgColor: string;
}

export const servicesList: Service[] = [
  {
    name: 'Cloud Solutions',
    href: '/services/cloud-solutions',
    description: 'Scale your infrastructure with enterprise cloud services',
    bgColor: 'bg-cyan-900'
  },
  {
    name: 'Cybersecurity',
    href: '/services/cybersecurity',
    description: 'Protect your business with enterprise-grade security solutions',
    bgColor: 'bg-red-900'
  },
  {
    name: 'CRM Solutions',
    href: '/services/crm-solutions',
    description: 'Transform your customer relationships with intelligent CRM systems',
    bgColor: 'bg-blue-900'
  },
  {
    name: 'IT Staff Augmentation',
    href: '/services/staff-augmentation',
    description: 'Enhance your team with skilled IT professionals',
    bgColor: 'bg-emerald-900'
  }
];