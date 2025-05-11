import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Check } from "lucide-react";

interface ProductShowcaseProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
  direction?: "left" | "right";
  backgroundColor?: string;
}

const ProductShowcase = ({
  title = "Product Title",
  description = "This is a comprehensive description of the product that explains its key features and value proposition to potential customers.",
  imageSrc = "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  imageAlt = "Product screenshot",
  benefits = [
    "Benefit one description goes here",
    "Benefit two description goes here",
    "Benefit three description goes here",
  ],
  ctaText = "Learn More",
  ctaLink = "#",
  direction = "left",
  backgroundColor = "bg-background",
}: ProductShowcaseProps) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className={`flex flex-col ${direction === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Product Image */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div className="space-y-3" variants={itemVariants}>
              <h3 className="text-xl font-semibold">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    variants={itemVariants}
                  >
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild className="group">
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
