import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
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
            <div className="group relative bg-gradient-to-br from-white/95 to-balanced/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-lg mb-3">Visit Us</h3>
                  <p className="font-body text-contrast/80 leading-relaxed">
                    A 15A, 1, Block X, Hauz Khas,<br />
                    New Delhi, 110016
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group relative bg-gradient-to-br from-white/95 to-balanced/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-olive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-olive/20 transition-colors">
                  <Clock className="w-5 h-5 text-olive" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-lg mb-3">Opening Hours</h3>
                  <p className="font-body text-contrast/80 leading-relaxed">
                    Monday - Sunday<br />
                    11:00 AM - 9:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group relative bg-gradient-to-br from-white/95 to-balanced/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sunny/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sunny/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sunny/20 transition-colors">
                  <Phone className="w-5 h-5 text-sunny" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-lg mb-3">Call Us</h3>
                  <p className="font-body text-contrast/80 leading-relaxed">
                    +91 92898 88289<br />
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative bg-gradient-to-br from-white/95 to-balanced/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lettuce/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lettuce/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lettuce/20 transition-colors">
                  <Mail className="w-5 h-5 text-lettuce" />
                </div>
                <div>
                  <h3 className="font-subheading text-contrast text-lg mb-3">Email Us</h3>
                  <p className="font-body text-contrast/80 leading-relaxed">
                    hello@eatnubo.com<br />
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
                href="https://www.instagram.com/eatnubo?igsh=NXd2bW51MmtqNDRv"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-white/95 to-balanced/80 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-contrast group-hover:text-brand transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
