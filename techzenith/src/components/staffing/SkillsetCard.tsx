import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillsetCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  delay?: number;
}

const SkillsetCard: React.FC<SkillsetCardProps> = ({
  title,
  icon: Icon,
  skills,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-lg p-6 text-white"
    >
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-emerald-400 mr-3" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-100">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillsetCard;