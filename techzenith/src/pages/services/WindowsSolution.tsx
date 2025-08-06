import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../../components/ServiceHeader';
import { ArrowRight } from 'lucide-react';

const windowsFeatures = [
    {
        title: 'Seamless Migration',
        description: 'Effortless upgrade from Windows 10 to Windows 11 or the latest supported OS, minimizing downtime and disruption.'
    },
    {
        title: 'Data & App Compatibility',
        description: 'Comprehensive compatibility checks and solutions to ensure your critical apps and data work flawlessly post-upgrade.'
    },
    {
        title: 'Security Enhancements',
        description: 'Benefit from the latest security features and updates, protecting your organization from modern threats.'
    },
    {
        title: 'User Training & Support',
        description: 'Personalized training and ongoing support to help your team adapt quickly to the new Windows environment.'
    },
    {
        title: 'Device Readiness Assessment',
        description: 'Thorough evaluation of your hardware to ensure smooth transition and optimal performance.'
    },
    {
        title: 'Post-Migration Support',
        description: 'Dedicated assistance after migration to resolve any issues and ensure business continuity.'
    }
];

const WindowsSolution = () => {
    return (
        <div className="min-h-screen">
            <ServiceHeader
                title="Windows Upgrade Solutions"
                description="Upgrade from Windows 10 with confidence—future-proof your organization before support ends on August 10, 2025."
                bgColor="bg-gradient-to-r from-orange-700 via-cyan-700 to-orange-800"
            />
            <div className="relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1642177016493-41450812b63a?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-800/90 via-cyan-900/80 to-blue-900/95" />
                </div>
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Windows 10 End of Support: Are You Ready?
                            </h2>
                            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                                Microsoft will end support for Windows 10 on <span className="font-semibold text-cyan-300">August 10, 2025</span>. Now is the time to plan your upgrade and secure your organization’s future. Our Windows Upgrade Solutions ensure a smooth, secure, and cost-effective transition to the latest Windows platform.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Windows Upgrade Services</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {windowsFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg"
                                    >
                                        <h4 className="text-xl font-semibold text-cyan-200 mb-2">{feature.title}</h4>
                                        <p className="text-blue-100">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Why Upgrade with Tech Zenith?</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Certified Windows Experts",
                                        description: "Our team is certified in Microsoft technologies and experienced in large-scale migrations."
                                    },
                                    {
                                        title: "Minimal Disruption",
                                        description: "We plan and execute upgrades to minimize downtime and keep your business running."
                                    },
                                    {
                                        title: "Security First",
                                        description: "We prioritize your data security and compliance throughout the migration process."
                                    },
                                    {
                                        title: "Ongoing Support",
                                        description: "From planning to post-upgrade, we’re with you every step of the way."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="flex items-start space-x-2"
                                    >
                                        <ArrowRight className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                            <p className="text-blue-100">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WindowsSolution;
