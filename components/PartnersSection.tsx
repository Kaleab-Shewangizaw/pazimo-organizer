"use client";

import { motion } from "framer-motion";

const partners = ["Eventbrite", "Stripe", "Mailchimp", "Spotify", "Live Nation", "Ticketmaster"];

const PartnersSection = () => {
  return (
    <section className="border-y border-border bg-[hsl(var(--surface))] py-20">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm uppercase tracking-widest text-muted-foreground"
        >
          Trusted By Industry Leaders
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cursor-default select-none text-xl font-display font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 md:text-2xl"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
