import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import contactBg from '@/assets/contact_background.jpg';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Nubo brand lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-contrast/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-brand text-contrast font-subheading text-sm px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="font-heading text-contrast-foreground text-3xl md:text-5xl lg:text-6xl mb-4">
              Fresh Looks Good On You!
            </h2>
            <p className="font-body text-contrast-foreground/80 text-lg">
              Visit us or drop a message. We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="bg-balanced/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-contrast" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-xl mb-2">Visit Us</h3>
                  <p className="font-body text-contrast/70">
                    123 Green Street, Health Hub<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-balanced/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-contrast-foreground" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-xl mb-2">Opening Hours</h3>
                  <p className="font-body text-contrast/70">
                    Mon - Sat: 8:00 AM - 9:00 PM<br />
                    Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-balanced/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sunny rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-contrast" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-xl mb-2">Call Us</h3>
                  <p className="font-body text-contrast/70">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-balanced/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lettuce rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-contrast" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-xl mb-2">Email Us</h3>
                  <p className="font-body text-contrast/70">
                    hello@nubo.in<br />
                    orders@nubo.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="reveal mt-12 text-center">
            <p className="font-subheading text-contrast-foreground mb-4">Follow Us</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-brand rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-contrast" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-brand rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-contrast" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
