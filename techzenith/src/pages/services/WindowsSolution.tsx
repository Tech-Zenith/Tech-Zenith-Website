import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../../components/ServiceHeader';
import { ArrowRight } from 'lucide-react';

const windowsFeatures = [
    {
        title: 'Gold Image Development',
        description: 'Creation of standardized and optimized Windows images tailored to your organizational needs.'
    },
    {
        title: 'Application Packaging',
        description: 'Packaging and testing of applications to ensure seamless deployment and compatibility.'
    },
    {
        title: 'White Glove Support',
        description: 'Hands-on assistance during migration to guarantee a smooth transition for end users.'
    },
    {
        title: 'Post-Migration Support',
        description: 'Dedicated support to resolve any issues and maintain business continuity after upgrade.'
    },
    {
        title: '90-Day Warranty',
        description: 'Comprehensive warranty period ensuring reliability and performance post-migration.'
    }
];

const migrationApproaches = [
    {
        title: 'Pilot & Enablement Delivery',
        description: 'Begin with a controlled pilot using Intune and SCCM to validate processes and prepare your team for a successful rollout.'
    },
    {
        title: 'End-to-End Managed Delivery (Recommended)',
        description: 'Leverage our full-service migration approach utilizing Intune and SCCM for a seamless, organization-wide Windows 10 to 11 upgrade.'
    }
];

const migrationPhases = [
    {
        title: 'Preparation',
        description: 'Assess device readiness, plan migration strategy, and develop gold images.'
    },
    {
        title: 'Pilot',
        description: 'Deploy pilot group migrations using Intune and SCCM to refine processes and gather feedback.'
    },
    {
        title: 'Full Rollout',
        description: 'Execute organization-wide migration with minimal disruption using proven methods.'
    },
    {
        title: 'Warranty Support',
        description: 'Provide ongoing support and warranty coverage to ensure stability post-migration.'
    }
];

const whyTechZenith = [
    "Certified Windows Experts with extensive experience in migration projects.",
    "Minimal disruption strategies to keep your business operational.",
    "Security-first approach ensuring compliance and data protection.",
    "Comprehensive end-to-end support from planning through post-upgrade."
];

const WindowsSolution = () => {
    return (
        <div className="min-h-screen">
            <ServiceHeader
                title="Windows Upgrade Solutions"
                description="Upgrade from Windows 10 with confidence—future-proof your organization before support ends on October 14, 2025."
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
                                Prepare for Windows 10 End of Life – October 14, 2025
                            </h2>
                            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                                Microsoft will end support for Windows 10 on <span className="font-semibold text-cyan-300">October 14, 2025</span>. The clock is ticking—now is the critical time to plan and execute your upgrade. Our Windows Upgrade Solutions utilize Intune and SCCM to deliver a smooth, secure, and cost-effective transition to the latest Windows platform.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Windows Upgrade Services</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                                {migrationApproaches.map((approach, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg"
                                    >
                                        <h4 className="text-xl font-semibold text-cyan-200 mb-2">{approach.title}</h4>
                                        <p className="text-blue-100">{approach.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
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
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-20 max-w-4xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Migration Approach</h3>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                {migrationPhases.map((phase, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="p-4 border border-white/20 rounded-lg"
                                    >
                                        <h4 className="text-xl font-semibold text-cyan-200 mb-2">{phase.title}</h4>
                                        <p className="text-blue-100 text-sm">{phase.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-4xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Tech Zenith?</h3>
                            <div className="space-y-4 max-w-xl mx-auto">
                                {whyTechZenith.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="flex items-start space-x-2"
                                    >
                                        <ArrowRight className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                                        <p className="text-blue-100">{point}</p>
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
