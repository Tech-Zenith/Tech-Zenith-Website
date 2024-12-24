import { 
  ShieldCheck, BookOpen, Target, Users, 
  Monitor, Lock, Cloud, Search 
} from 'lucide-react';

export const securityFeatures = [
  {
    title: "Governance, Risk, and Compliance",
    description: "Ensure your cybersecurity policies comply with Australian regulations",
    icon: ShieldCheck,
    features: [
      "Regulatory alignment with Australian Privacy Principles (APPs)",
      "Compliance with Notifiable Data Breaches (NDB) scheme",
      "Industry-specific risk management frameworks",
      "Clear and actionable security policies"
    ]
  },
  {
    title: "Security Assessments and Audits",
    description: "Comprehensive evaluation of your security posture",
    icon: Target,
    features: [
      "Thorough security posture reviews",
      "Compliance audit services",
      "Vulnerability assessments",
      "Detailed reporting with actionable insights"
    ]
  },
  {
    title: "Penetration Testing",
    description: "Identify and address security vulnerabilities",
    icon: Search,
    features: [
      "Controlled penetration testing",
      "System and network vulnerability analysis",
      "Application security testing",
      "Regular security assessments"
    ]
  },
  {
    title: "Cybersecurity Awareness Training",
    description: "Educate your staff on security best practices",
    icon: Users,
    features: [
      "Comprehensive employee training programs",
      "Phishing awareness education",
      "Social engineering prevention",
      "Ongoing security awareness updates"
    ]
  },
  {
    title: "Endpoint Protection",
    description: "Secure all endpoints with advanced protection",
    icon: Monitor,
    features: [
      "Advanced antivirus solutions",
      "Anti-malware protection",
      "Firewall management",
      "Centralized security control"
    ]
  },
  {
    title: "Data Protection and Encryption",
    description: "Safeguard sensitive information with robust security",
    icon: Lock,
    features: [
      "Data encryption services",
      "Secure storage solutions",
      "Data backup strategies",
      "Recovery planning"
    ]
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud infrastructure and applications",
    icon: Cloud,
    features: [
      "Secure cloud configuration",
      "Access management",
      "Cloud monitoring",
      "Security assessment"
    ]
  },
  {
    title: "Vulnerability Management",
    description: "Proactive identification and remediation of security risks",
    icon: BookOpen,
    features: [
      "Regular vulnerability scanning",
      "Patch management",
      "Risk assessment",
      "Security updates"
    ]
  }
];