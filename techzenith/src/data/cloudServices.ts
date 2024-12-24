import { 
  Cloud, Database, Shield, DollarSign, GitBranch, 
  Brain, History, Wifi, BarChart, ArrowUpCircle, 
  Lock, Cog, Terminal, Database as DbIcon, 
  HardDrive, Box
} from 'lucide-react';

export const azureServices = [
  {
    title: "Azure Assessment & Strategy",
    description: "Evaluate your current IT infrastructure to determine the optimal Azure adoption path.",
    icon: BarChart
  },
  {
    title: "Azure Migration & Management",
    description: "Facilitate seamless migration of applications, data, and infrastructure to Microsoft Azure.",
    icon: ArrowUpCircle
  },
  {
    title: "Azure Security & Compliance",
    description: "Implement advanced security measures using Azure Security Center and native tools.",
    icon: Shield
  },
  {
    title: "Azure Optimization & Cost Management",
    description: "Optimize resource utilization on Azure to maximize performance and efficiency.",
    icon: DollarSign
  },
  {
    title: "Azure DevOps & Automation",
    description: "Leverage Azure DevOps services to streamline development and operational workflows.",
    icon: GitBranch
  },
  {
    title: "Azure Data Analytics & AI",
    description: "Utilize Azure's data analytics and artificial intelligence services for actionable insights.",
    icon: Brain
  },
  {
    title: "Azure Disaster Recovery",
    description: "Ensure business resilience with Azure Site Recovery and Backup solutions.",
    icon: History
  },
  {
    title: "Azure IoT Solutions",
    description: "Develop and deploy IoT applications using Azure IoT Hub and related services.",
    icon: Wifi
  }
];

export const gcpServices = [
  {
    title: "GCP Assessment & Strategy",
    description: "Analyze your IT landscape to identify the best GCP adoption strategies.",
    icon: Cloud
  },
  {
    title: "GCP Migration & Management",
    description: "Manage end-to-end migration of applications and infrastructure to Google Cloud.",
    icon: ArrowUpCircle
  },
  {
    title: "GCP Security & Compliance",
    description: "Deploy robust security frameworks using GCP's comprehensive security tools.",
    icon: Lock
  },
  {
    title: "GCP Optimization",
    description: "Enhance resource utilization on GCP for maximum performance and efficiency.",
    icon: Cog
  },
  {
    title: "GCP DevOps & Automation",
    description: "Adopt DevOps best practices with Google Cloud's suite of tools.",
    icon: Terminal
  },
  {
    title: "GCP Data Analytics & ML",
    description: "Harness the power of Google's data analytics and machine learning services.",
    icon: DbIcon
  },
  {
    title: "GCP Disaster Recovery",
    description: "Implement comprehensive disaster recovery and business continuity plans.",
    icon: HardDrive
  },
  {
    title: "GCP Kubernetes Services",
    description: "Deploy and manage containerized applications with Google Kubernetes Engine.",
    icon: Box
  }
];