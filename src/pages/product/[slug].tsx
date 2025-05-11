import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Product data - in a real app this would come from an API or CMS
const productData = {
  tagpulse: {
    name: "TagPulse",
    tagline: "Real-time analytics for your IoT devices",
    description:
      "TagPulse provides comprehensive analytics and monitoring for all your connected devices. Get real-time insights, predictive maintenance alerts, and performance optimization recommendations.",
    features: [
      "Real-time device monitoring",
      "Predictive maintenance alerts",
      "Performance optimization",
      "Custom dashboards",
      "API integration",
      "Unlimited device connections",
    ],
    benefits: [
      "Reduce downtime by up to 73%",
      "Extend device lifespan by 40%",
      "Lower maintenance costs",
      "Improve operational efficiency",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    primaryColor: "bg-blue-600",
  },
  tagio: {
    name: "TagIo",
    tagline: "Seamless IoT connectivity platform",
    description:
      "TagIo is a comprehensive IoT connectivity platform that simplifies device management, data collection, and integration. Connect any device, collect valuable data, and integrate with your existing systems effortlessly.",
    features: [
      "Universal device compatibility",
      "Secure data transmission",
      "Edge computing capabilities",
      "Low-power optimization",
      "Scalable infrastructure",
      "Plug-and-play setup",
    ],
    benefits: [
      "Connect devices in minutes, not days",
      "Reduce integration costs by 65%",
      "Enterprise-grade security",
      "Scale from 10 to 10,000 devices",
    ],
    images: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    ],
    primaryColor: "bg-green-600",
  },
  tagit: {
    name: "TagIt",
    tagline: "Complete IoT ecosystem for modern businesses",
    description:
      "TagIt is our flagship solution that combines device management, connectivity, analytics, and automation in one powerful platform. Build, deploy, and scale your IoT infrastructure with confidence.",
    features: [
      "End-to-end IoT management",
      "Advanced analytics and reporting",
      "Automated workflows",
      "Custom integrations",
      "Enterprise security features",
      "Dedicated support team",
    ],
    benefits: [
      "Single platform for all IoT needs",
      "Reduce time-to-market by 80%",
      "Enterprise-grade security and compliance",
      "Seamless scaling as your business grows",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=800&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=800&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=800&q=80",
    ],
    primaryColor: "bg-purple-600",
  },
};

const ProductPage = () => {
  const { slug = "tagit" } = useParams<{ slug: string }>();
  const product =
    productData[slug as keyof typeof productData] || productData.tagit;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation header would go here */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-16 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">TagIt</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/product/tagpulse" className="hover:text-blue-600">
                TagPulse
              </a>
              <a href="/product/tagio" className="hover:text-green-600">
                TagIo
              </a>
              <a href="/product/tagit" className="hover:text-purple-600">
                TagIt
              </a>
              <a href="/about" className="hover:text-gray-600">
                About
              </a>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`${product.primaryColor} text-white py-20 px-4 md:px-8 lg:px-16`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              {product.name}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-light max-w-3xl"
              variants={itemVariants}
            >
              {product.tagline}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Benefits */}
            <div className="space-y-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold">Overview</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {product.description}
                </p>
              </motion.div>

              <Separator />

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`${product.primaryColor} rounded-full p-1 mr-3 mt-1`}
                      >
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="pt-8">
                <Button size="lg" className={product.primaryColor}>
                  Get Started Today
                </Button>
              </div>
            </div>

            {/* Right Column - Images and Features */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={product.images[0]}
                  alt={`${product.name} interface`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="pt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div
                              className={`${product.primaryColor} rounded-full p-1 mr-3`}
                            >
                              <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="screenshots" className="pt-6">
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.images.slice(1).map((image, index) => (
                          <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md"
                          >
                            <img
                              src={image}
                              alt={`${product.name} screenshot ${index + 1}`}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to transform your IoT infrastructure?
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Join thousands of businesses that trust {product.name} for their
              IoT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className={product.primaryColor}>
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">TagIt</h3>
              <p className="text-gray-400">
                Complete IoT solutions for modern businesses
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/product/tagpulse"
                    className="text-gray-400 hover:text-white"
                  >
                    TagPulse
                  </a>
                </li>
                <li>
                  <a
                    href="/product/tagio"
                    className="text-gray-400 hover:text-white"
                  >
                    TagIo
                  </a>
                </li>
                <li>
                  <a
                    href="/product/tagit"
                    className="text-gray-400 hover:text-white"
                  >
                    TagIt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TagIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
