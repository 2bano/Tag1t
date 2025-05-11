import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Header from "./Header";
import ProductShowcase from "./ProductShowcase";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  // Mock data for products
  const products = [
    {
      id: "tagpulse",
      name: "TagPulse",
      description:
        "Real-time monitoring and analytics for your tag management system.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      benefits: [
        "Live performance tracking",
        "Customizable dashboards",
        "Anomaly detection",
      ],
    },
    {
      id: "tagio",
      name: "TagIo",
      description:
        "Seamless integration platform connecting your tags with third-party services.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      benefits: [
        "One-click integrations",
        "Secure data transfer",
        "API management",
      ],
    },
    {
      id: "tagit",
      name: "TagIt",
      description:
        "Our flagship tag management solution for modern businesses.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      benefits: [
        "Intuitive tag builder",
        "Cross-platform support",
        "Enterprise-grade security",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              variants={itemVariants}
            >
              Simplify Your Tag Management
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-[800px]"
              variants={itemVariants}
            >
              TagIt provides powerful solutions to streamline your tag
              management workflow, boost performance, and enhance data quality
              across all platforms.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" className="rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
            >
              <ChevronDown className="h-8 w-8 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Discover our comprehensive suite of tag management tools designed
              for modern businesses.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {products.map((product, index) => (
              <ProductShowcase
                key={product.id}
                product={product}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Why Choose TagIt
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Our platform offers unmatched capabilities to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bank-level encryption and compliance with industry standards
                  to keep your data safe.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with over 200+ platforms and services with our
                  pre-built connectors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>24/7 Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our dedicated team is always available to help you resolve any
                  issues.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              See what our customers have to say about TagIt solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>"Game-changing platform"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  TagIt has revolutionized how we manage our tags across
                  multiple platforms. The analytics provided by TagPulse have
                  helped us optimize performance significantly.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                      alt="John D."
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">John D.</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, TechCorp
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>"Exceptional integration capabilities"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  TagIo's integration capabilities have saved our team countless
                  hours. The platform is intuitive and the support team is
                  always responsive and helpful.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="Sarah M."
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, GrowthLabs
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready to Transform Your Tag Management?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses that trust TagIt for their tag
              management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/product/tagpulse"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    TagPulse
                  </a>
                </li>
                <li>
                  <a
                    href="/product/tagio"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    TagIo
                  </a>
                </li>
                <li>
                  <a
                    href="/product/tagit"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    TagIt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/documentation"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} TagIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
