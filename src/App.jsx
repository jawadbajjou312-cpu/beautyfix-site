import React, { useState, useEffect, useRef } from 'react';
import {
  Syringe,
  Droplets,
  Sparkles,
  Home,
  Gem,
  GraduationCap,
  Building2,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Star,
  Check,
  ArrowRight,
  Pill,
  Menu,
  X
} from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Fade In on Scroll Component
const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: 'translateY(60px)',
    down: 'translateY(-60px)',
    left: 'translateX(60px)',
    right: 'translateX(-60px)',
  };

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translate(0)' : transforms[direction],
        opacity: isVisible ? 1 : 0,
        transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// 3D Blob Component
const AnimatedBlob = ({ color1, color2, color3, size, top, left, right, bottom, delay = 0, duration = 20 }) => {
  return (
    <div
      className="animated-blob"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
        borderRadius: '50%',
        filter: 'blur(0px)',
        opacity: 0.9,
        animation: `morphBlob ${duration}s ease-in-out infinite ${delay}s, floatBlob ${duration * 0.8}s ease-in-out infinite ${delay}s`,
        boxShadow: `
          inset -20px -20px 40px rgba(0,0,0,0.1),
          inset 20px 20px 40px rgba(255,255,255,0.3),
          0 0 60px ${color1}40
        `,
      }}
    />
  );
};
const BeautyFixLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    blush: '#FDDAD8',
    blushLight: '#FFF5F4',
    navy: '#1E3A6E',
    blue: '#137DC5',
    cyan: '#00B4D8',
    white: '#FFFFFF',
    gray: '#6B7280',
    grayLight: '#F9FAFB',
    black: '#0A0A0A',
    pink: '#FF6B9D',
    orange: '#FFA26B',
    purple: '#A855F7',
    mint: '#6BFFB8',
    coral: '#FF7B7B',
    gold: '#FFD700'
  };

  const services = [
    { icon: Syringe, title: 'Botox', description: 'Smooth fine lines and wrinkles with expert precision. FDA-approved neurotoxin administered by a registered nurse.', price: '$14/unit · $250 flat rate', features: ['Forehead lines', 'Crow\'s feet', 'Frown lines', 'Lip flip'] },
    { icon: Droplets, title: 'IV Hydration Therapy', description: 'Revitalize from the inside out with customized IV drips delivered in the comfort of your home.', price: 'Starting at $120', features: ['Hydration boost', 'Immune support', 'Energy enhancement', 'Hangover relief'] },
    { icon: Sparkles, title: 'Vitamin Injections', description: 'Targeted vitamin cocktails for energy, wellness, and beauty enhancement.', price: 'Starting at $35', features: ['B12 shots', 'Biotin boost', 'Glutathione', 'Lipotropic blend'] },
    { icon: Pill, title: 'GLP-1 Medications', description: 'Medically supervised weight management with GLP-1 medications. Personalized treatment plans for sustainable results.', price: 'Starting at $175', features: ['Weight management', 'Appetite control', 'Medical supervision', 'Personalized dosing'] }
  ];

  const packages = [
    { name: 'Glow Getter', price: '$249', description: 'Perfect introduction to BeautyFix', includes: ['20 units Botox', 'B12 injection', 'Complimentary consultation'], popular: false },
    { name: 'VIP Refresh', price: '$399', description: 'Our most popular package', includes: ['40 units Botox', 'IV Hydration (Beauty Drip)', 'Vitamin injection of choice', 'Priority scheduling'], popular: true },
    { name: 'Ultimate Luxe', price: '$499', description: 'The complete BeautyFix experience', includes: ['50 units Botox', 'Premium IV Therapy', '2 Vitamin injections', 'Monthly touch-up discount'], popular: false }
  ];

  const testimonials = [
    { name: 'Sarah M.', location: 'Lincoln Park', text: 'Having a nurse come to my home for Botox was a game-changer. Professional, convenient, and amazing results!' },
    { name: 'Jessica L.', location: 'Naperville', text: 'The IV hydration therapy after my long flight was exactly what I needed. I felt rejuvenated within hours.' },
    { name: 'Amanda K.', location: 'Oak Park', text: 'Finally found someone I trust for injectables. The convenience of at-home service is unbeatable.' }
  ];

  const serviceAreas = ['Lake Zurich', 'Barrington', 'Buffalo Grove', 'Arlington Heights', 'Naperville', 'Schaumburg', 'Hinsdale', 'Lake Forest', 'Wilmette', 'Evanston', 'Oak Park', 'Chicago Loop', 'Lincoln Park', 'Lakeview', 'Gold Coast', 'River North', 'Wicker Park', 'Bucktown', 'Logan Square'];

  const keyframes = `
    @keyframes morphBlob {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
      25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
      50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; transform: rotate(180deg) scale(0.95); }
      75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; transform: rotate(270deg) scale(1.02); }
    }
    @keyframes floatBlob {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-30px) translateX(20px); }
      66% { transform: translateY(20px) translateX(-15px); }
    }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    @keyframes pulse-glow { 0%, 100% { box-shadow: 0 8px 30px rgba(19, 125, 197, 0.35); } 50% { box-shadow: 0 8px 50px rgba(19, 125, 197, 0.55); } }
    @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    html { scroll-behavior: smooth; }
    body { overflow-x: hidden; }
    @media (max-width: 768px) {
      .nav-links { display: none !important; }
      .mobile-menu-btn { display: flex !important; }
      .hero-content { text-align: center; padding: 0 1rem; }
      .hero-title { font-size: 2.5rem !important; line-height: 1.1 !important; }
      .hero-subtitle { font-size: 1rem !important; }
      .hero-buttons { justify-content: center !important; flex-direction: column !important; align-items: center !important; gap: 1rem !important; }
      .hero-stats { justify-content: center !important; }
      .services-grid { grid-template-columns: 1fr !important; }
      .about-grid { grid-template-columns: 1fr !important; }
      .pricing-grid { grid-template-columns: 1fr !important; }
      .pricing-card-popular { transform: scale(1) !important; }
      .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
      .footer-bottom { flex-direction: column !important; gap: 1rem !important; text-align: center; }
      .credentials-grid { grid-template-columns: 1fr !important; }
      .form-grid { grid-template-columns: 1fr !important; }
      .section-title { font-size: 2rem !important; }
      .section-padding { padding: 4rem 1rem !important; }
      .blob-container .animated-blob { transform: scale(0.5) !important; }
    }
    @media (max-width: 480px) { .hero-title { font-size: 2rem !important; } }
    .mobile-menu { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(20px); z-index: 2000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
    .mobile-menu a { font-size: 1.5rem; font-weight: 600; color: #1E3A6E; text-decoration: none; transition: color 0.3s ease; }
    .mobile-menu a:hover { color: #137DC5; }
  `;

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: colors.black, overflow: 'hidden' }}>
      <style>{keyframes}</style>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}><X size={32} color={colors.navy} /></button>
          {['Services', 'Pricing', 'About', 'Service Areas'].map((item, i) => (<a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)}>{item}</a>))}
          <a href="https://booking.hydreight.com/widget-business/yd92b" target="_blank" rel="noopener noreferrer" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, color: colors.white, padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600' }} onClick={() => setMobileMenuOpen(false)}>Book Now</a>
        </div>
      )}

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.9)' : 'transparent', backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, transition: 'all 0.3s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.navy }}>BEAUTY</span>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.blue }}>FIX</span>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}><Menu size={28} color={colors.navy} /></button>
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Services', 'Pricing', 'About', 'Service Areas'].map((item, i) => (<a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ color: colors.navy, textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = colors.blue} onMouseLeave={(e) => e.target.style.color = colors.navy}>{item}</a>))}
          <a href="https://booking.hydreight.com/widget-business/yd92b" target="_blank" rel="noopener noreferrer" style={{ background: colors.black, color: colors.white, border: 'none', padding: '0.85rem 1.75rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem', cursor: 'pointer', transition: 'all 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.background = colors.navy; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.background = colors.black; e.target.style.transform = 'scale(1)'; }}>Book Now</a>
        </div>
      </nav>

      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 4rem', position: 'relative', overflow: 'hidden', background: colors.white }}>
        <div className="blob-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
          <AnimatedBlob color1={colors.pink} color2={colors.orange} color3={colors.coral} size="400px" top="10%" right="-5%" delay={0} duration={25} />
          <AnimatedBlob color1={colors.cyan} color2={colors.blue} color3={colors.purple} size="350px" top="40%" right="15%" delay={2} duration={22} />
          <AnimatedBlob color1={colors.mint} color2={colors.cyan} color3={colors.blue} size="300px" bottom="5%" right="5%" delay={4} duration={28} />
          <AnimatedBlob color1={colors.blush} color2={colors.pink} color3={colors.orange} size="250px" top="20%" right="35%" delay={1} duration={20} />
          <AnimatedBlob color1={colors.gold} color2={colors.orange} color3={colors.coral} size="200px" bottom="20%" right="30%" delay={3} duration={24} />
          <div style={{ position: 'absolute', top: '50%', right: '20%', width: '600px', height: '600px', background: `radial-gradient(circle, ${colors.blush}40 0%, transparent 70%)`, transform: 'translate(50%, -50%)', zIndex: -1 }} />
        </div>

        <div className="hero-content" style={{ maxWidth: '700px', position: 'relative', zIndex: 1, marginRight: 'auto', marginLeft: '5%' }}>
          <FadeInSection><p style={{ fontSize: '0.9rem', fontWeight: '500', color: colors.gray, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>Mobile Med-Spa Services in Chicagoland</p></FadeInSection>
          <FadeInSection delay={100}><h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '700', lineHeight: '1.05', marginBottom: '1.5rem', color: colors.black, letterSpacing: '-0.02em' }}>Premium Aesthetics,<br /><span style={{ color: colors.navy }}>Delivered to You</span></h1></FadeInSection>
          <FadeInSection delay={200}><p className="hero-subtitle" style={{ fontSize: '1.15rem', color: colors.gray, marginBottom: '1rem', lineHeight: '1.7', maxWidth: '500px' }}>Experience luxury med-spa treatments in the comfort of your own home. Botox, IV hydration, and vitamin injections — administered by a registered nurse.</p></FadeInSection>
          <FadeInSection delay={300}><p style={{ fontSize: '1rem', color: colors.blue, fontWeight: '600', fontStyle: 'italic', marginBottom: '2.5rem' }}>"Beauty Finds You"</p></FadeInSection>
          <FadeInSection delay={400}>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="https://booking.hydreight.com/widget-business/yd92b" target="_blank" rel="noopener noreferrer" style={{ background: colors.black, color: colors.white, border: 'none', padding: '1.1rem 2rem', borderRadius: '50px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Book Appointment <ArrowRight size={18} /></a>
              <a href="https://booking.hydreight.com/widget-business/yd92b" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'transparent', color: colors.black, border: `2px solid ${colors.black}`, padding: '1.1rem 2rem', borderRadius: '50px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.black; e.currentTarget.style.color = colors.white; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.black; }}>Free Consultation</a>
            </div>
          </FadeInSection>
          <FadeInSection delay={500}>
            <div className="hero-stats" style={{ display: 'flex', gap: '3rem' }}>
              <div><div style={{ fontSize: '2rem', fontWeight: '700', color: colors.black }}><AnimatedCounter end={500} suffix="+" /></div><div style={{ fontSize: '0.875rem', color: colors.gray }}>Happy Clients</div></div>
              <div><div style={{ fontSize: '2rem', fontWeight: '700', color: colors.black, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>5.0 <Star size={20} fill="#FFD700" color="#FFD700" /></div><div style={{ fontSize: '0.875rem', color: colors.gray }}>Rating</div></div>
              <div><div style={{ fontSize: '2rem', fontWeight: '700', color: colors.black }}>RN</div><div style={{ fontSize: '0.875rem', color: colors.gray }}>Certified</div></div>
            </div>
          </FadeInSection>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="section-padding" style={{ padding: '7rem 2rem', backgroundColor: colors.grayLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ color: colors.gray, fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>OUR SERVICES</p>
              <h2 className="section-title" style={{ fontSize: '2.75rem', fontWeight: '700', color: colors.black, letterSpacing: '-0.02em' }}>
                Treatments Tailored to You
              </h2>
              <p style={{ color: colors.gray, fontSize: '1.1rem', maxWidth: '550px', margin: '1rem auto 0' }}>
                Professional aesthetic services brought directly to your home by a registered nurse
              </p>
            </div>
          </FadeInSection>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: '24px',
                    padding: '2rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    marginBottom: '1.25rem',
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${colors.blush}, ${colors.blushLight})`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <service.icon size={28} color={colors.blue} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.black, marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: colors.gray, marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {service.description}
                  </p>
                  <div style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}>
                    {service.price}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        color: colors.gray,
                        fontSize: '0.85rem',
                        padding: '0.35rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Check size={14} color={colors.cyan} strokeWidth={2.5} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About/Trust Section with Blob */}
      <section id="about" className="section-padding" style={{
        padding: '7rem 2rem',
        backgroundColor: colors.white,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative blob */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: `linear-gradient(135deg, ${colors.blush}60, ${colors.pink}30)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'morphBlob 20s ease-in-out infinite'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <FadeInSection direction="right">
              <div>
                <p style={{ color: colors.gray, fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>MEET BADRIA</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.black, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                  Badria Kachani, RN
                </h2>
                <p style={{ color: colors.gray, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  With over 15 years of nursing experience specializing in Home Health, I founded BeautyFix
                  to bring professional aesthetic treatments directly to you. My passion is helping patients
                  and clients look and feel happy and live their best lives.
                </p>
                <p style={{ color: colors.gray, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Every treatment is administered with the same level of care, safety, and precision
                  you'd expect from a top medical spa — but in the comfort of your own home.
                </p>

                <div className="credentials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {[
                    { icon: GraduationCap, title: 'RN Licensed', desc: 'State of Illinois' },
                    { icon: Syringe, title: 'Certified', desc: 'Aesthetic Injector' },
                    { icon: Building2, title: 'Experience', desc: '15+ Years Nursing' },
                    { icon: ShieldCheck, title: 'Insured', desc: 'Fully Licensed' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: colors.grayLight,
                        padding: '1.25rem',
                        borderRadius: '16px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <item.icon size={24} color={colors.blue} strokeWidth={1.5} style={{ marginBottom: '0.5rem' }} />
                      <div style={{ fontWeight: '600', color: colors.black, fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.85rem', color: colors.gray }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: colors.grayLight,
                      padding: '1.75rem',
                      borderRadius: '20px',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>
                    <p style={{ color: colors.gray, fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      "{testimonial.text}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.white,
                        fontWeight: '600',
                        fontSize: '0.9rem'
                      }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', color: colors.black, fontSize: '0.9rem' }}>{testimonial.name}</div>
                        <div style={{ fontSize: '0.8rem', color: colors.gray }}>{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding" style={{ padding: '7rem 2rem', backgroundColor: colors.grayLight }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ color: colors.gray, fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>PRICING</p>
              <h2 className="section-title" style={{ fontSize: '2.75rem', fontWeight: '700', color: colors.black, letterSpacing: '-0.02em' }}>
                Simple, Transparent Pricing
              </h2>
              <p style={{ color: colors.gray, fontSize: '1.1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
                Choose a package or customize your treatment. No hidden fees.
              </p>
            </div>
          </FadeInSection>

          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'center' }}>
            {packages.map((pkg, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div
                  className={pkg.popular ? 'pricing-card-popular' : ''}
                  style={{
                    backgroundColor: pkg.popular ? colors.black : colors.white,
                    borderRadius: '24px',
                    padding: '2.5rem 2rem',
                    position: 'relative',
                    transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: pkg.popular ? '0 30px 60px rgba(0,0,0,0.2)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {pkg.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: `linear-gradient(135deg, ${colors.pink}, ${colors.orange})`,
                      color: colors.white,
                      padding: '0.4rem 1.25rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.03em'
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: pkg.popular ? colors.white : colors.black,
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.name}
                  </h3>
                  <p style={{
                    color: pkg.popular ? 'rgba(255,255,255,0.6)' : colors.gray,
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                  }}>
                    {pkg.description}
                  </p>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: pkg.popular ? colors.white : colors.black,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {pkg.price}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                    {pkg.includes.map((item, i) => (
                      <li key={i} style={{
                        color: pkg.popular ? 'rgba(255,255,255,0.85)' : colors.gray,
                        padding: '0.6rem 0',
                        borderBottom: `1px solid ${pkg.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.95rem'
                      }}>
                        <Check size={16} color={pkg.popular ? colors.cyan : colors.blue} strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  
                    href="https://booking.hydreight.com/widget-business/yd92b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: pkg.popular ? colors.white : colors.black,
                      color: pkg.popular ? colors.black : colors.white,
                      border: 'none',
                      textDecoration: 'none',
                      display: 'block',
                      textAlign: 'center',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.opacity = '0.9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section with Blob */}
      <section id="service-areas" className="section-padding" style={{
        padding: '7rem 2rem',
        background: colors.navy,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: `linear-gradient(135deg, ${colors.cyan}40, ${colors.blue}20)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'morphBlob 18s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: `linear-gradient(135deg, ${colors.purple}30, ${colors.pink}20)`,
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'morphBlob 22s ease-in-out infinite reverse'
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ color: colors.cyan, fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>SERVICE AREAS</p>
              <h2 className="section-title" style={{ fontSize: '2.75rem', fontWeight: '700', color: colors.white, letterSpacing: '-0.02em' }}>
                Serving Chicagoland
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
                We bring beauty to you across Chicago and surrounding suburbs
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '2.5rem'
            }}>
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: colors.white,
                    padding: '0.6rem 1.25rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <MapPin size={14} strokeWidth={2} /> {area}
                </span>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Don't see your area? Contact us — we may still be able to serve you!
              </p>
              
                href="mailto:BadriaKachani@gmail.com"
                style={{
                  background: colors.white,
                  color: colors.navy,
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Check My Area <ArrowRight size={18} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="section-padding" style={{ padding: '7rem 2rem', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: colors.gray, fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>GET STARTED</p>
            <h2 className="section-title" style={{ fontSize: '2.75rem', fontWeight: '700', color: colors.black, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Ready for Your Glow Up?
            </h2>
            <p style={{ color: colors.gray, fontSize: '1.1rem', marginBottom: '3rem' }}>
              Book your consultation today and discover the convenience of luxury aesthetics at home.
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div style={{
              backgroundColor: colors.grayLight,
              borderRadius: '24px',
              padding: '2.5rem'
            }}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: colors.white,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: colors.white,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: colors.white,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
                <select
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: colors.white,
                    color: colors.gray,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                >
                  <option>Select Service Interest</option>
                  <option>Botox</option>
                  <option>IV Hydration</option>
                  <option>Vitamin Injections</option>
                  <option>GLP-1 Medications</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your goals..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  border: '2px solid transparent',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  marginBottom: '1.5rem',
                  boxSizing: 'border-box',
                  backgroundColor: colors.white,
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.blue}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              />
              <button
                style={{
                  width: '100%',
                  background: colors.black,
                  color: colors.white,
                  border: 'none',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Request Consultation <ArrowRight size={18} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: colors.black,
        color: colors.white,
        padding: '4rem 2rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>BEAUTY</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: colors.cyan }}>FIX</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Premium mobile med-spa services delivered to your door in Chicagoland.
              </p>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Botox', 'IV Hydration', 'Vitamin Injections', 'GLP-1 Medications'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    
                      href="#services"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = colors.white}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About Us', 'Service Areas', 'FAQ', 'Contact'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = colors.white}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>Contact</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} /> BadriaKachani@gmail.com
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} /> (312) 925-2401
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                
                  href="https://instagram.com/BeautyFixToYou"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.white,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.cyan;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
              © 2026 BeautyFix. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Privacy Policy', 'Terms of Service'].map((item, i) => (
                
                  key={i}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeautyFixLanding;

const App = BeautyFixLanding;
export { App };
