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
  Facebook,
  Star,
  Check,
  ArrowRight
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
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
  };

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translate(0)' : transforms[direction],
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const BeautyFixLanding = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Brand Colors
  const colors = {
    blush: '#FDDAD8',
    blushLight: '#FFF5F4',
    navy: '#1E3A6E',
    blue: '#137DC5',
    cyan: '#00B4D8',
    white: '#FFFFFF',
    gray: '#6B7280',
    grayLight: '#F9FAFB'
  };

  const services = [
    {
      icon: Syringe,
      title: 'Botox & Dysport',
      description: 'Smooth fine lines and wrinkles with expert precision. FDA-approved neurotoxins administered by a registered nurse.',
      price: '$14/unit · $250 flat rate',
      features: ['Forehead lines', 'Crow\'s feet', 'Frown lines', 'Lip flip']
    },
    {
      icon: Droplets,
      title: 'IV Hydration Therapy',
      description: 'Revitalize from the inside out with customized IV drips delivered in the comfort of your home.',
      price: 'Starting at $120',
      features: ['Hydration boost', 'Immune support', 'Energy enhancement', 'Hangover relief']
    },
    {
      icon: Sparkles,
      title: 'Vitamin Injections',
      description: 'Targeted vitamin cocktails for energy, wellness, and beauty enhancement.',
      price: 'Starting at $35',
      features: ['B12 shots', 'Biotin boost', 'Glutathione', 'Lipotropic blend']
    }
  ];

  const packages = [
    {
      name: 'Glow Getter',
      price: '$199',
      description: 'Perfect introduction to BeautyFix',
      includes: ['20 units Botox', 'B12 injection', 'Complimentary consultation'],
      popular: false
    },
    {
      name: 'VIP Refresh',
      price: '$399',
      description: 'Our most popular package',
      includes: ['40 units Botox OR Dysport', 'IV Hydration (Beauty Drip)', 'Vitamin injection of choice', 'Priority scheduling'],
      popular: true
    },
    {
      name: 'Ultimate Luxe',
      price: '$599',
      description: 'The complete BeautyFix experience',
      includes: ['60 units Botox OR Dysport', 'Premium IV Therapy', '2 Vitamin injections', 'VIP membership perks', 'Monthly touch-up discount'],
      popular: false
    }
  ];

  const testimonials = [
    { name: 'Sarah M.', location: 'Lincoln Park', text: 'Having a nurse come to my home for Botox was a game-changer. Professional, convenient, and amazing results!' },
    { name: 'Jessica L.', location: 'Naperville', text: 'The IV hydration therapy after my long flight was exactly what I needed. I felt rejuvenated within hours.' },
    { name: 'Amanda K.', location: 'Oak Park', text: 'Finally found someone I trust for injectables. The convenience of at-home service is unbeatable.' }
  ];

  const serviceAreas = [
    'Lake Zurich', 'Barrington', 'Buffalo Grove', 'Arlington Heights',
    'Naperville', 'Schaumburg', 'Hinsdale', 'Lake Forest', 'Wilmette',
    'Evanston', 'Oak Park', 'Chicago Loop', 'Lincoln Park', 'Lakeview',
    'Gold Coast', 'River North', 'Wicker Park', 'Bucktown', 'Logan Square'
  ];

  // CSS Keyframe Animations
  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }

    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 8px 30px rgba(19, 125, 197, 0.35); }
      50% { box-shadow: 0 8px 50px rgba(19, 125, 197, 0.55); }
    }

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scale-in {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slide-in-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes bounce-subtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @keyframes rotate-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes blob {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    }

    html {
      scroll-behavior: smooth;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .nav-links {
        display: none !important;
      }

      .mobile-book-btn {
        display: inline-block !important;
      }

      .hero-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
        text-align: center;
      }

      .hero-title {
        font-size: 2.25rem !important;
      }

      .hero-subtitle {
        font-size: 1rem !important;
      }

      .hero-buttons {
        justify-content: center !important;
        flex-direction: column !important;
        align-items: center !important;
      }

      .hero-stats {
        justify-content: center !important;
      }

      .services-grid {
        grid-template-columns: 1fr !important;
      }

      .about-grid {
        grid-template-columns: 1fr !important;
      }

      .pricing-grid {
        grid-template-columns: 1fr !important;
      }

      .pricing-card-popular {
        transform: scale(1) !important;
      }

      .footer-grid {
        grid-template-columns: 1fr !important;
        text-align: center;
      }

      .footer-bottom {
        flex-direction: column !important;
        gap: 1rem !important;
        text-align: center;
      }

      .floating-badge {
        display: none !important;
      }

      .credentials-grid {
        grid-template-columns: 1fr !important;
      }

      .form-grid {
        grid-template-columns: 1fr !important;
      }

      .section-title {
        font-size: 1.75rem !important;
      }

      .section-padding {
        padding: 3rem 1rem !important;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.875rem !important;
      }

      .nav-logo {
        font-size: 1.25rem !important;
      }
    }
  `;

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: colors.navy, overflow: 'hidden' }}>
      <style>{keyframes}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
        animation: 'fade-in-up 0.6s ease-out'
      }}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.navy }}>BEAUTY</span>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.blue }}>FIX</span>
        </div>
        {/* Mobile Book Now Button */}
        <a
          href="https://booking.hydreight.com/widget-business/yd92b"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-book-btn"
          style={{
            display: 'none',
            backgroundColor: colors.blue,
            color: colors.white,
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '0.875rem',
            textDecoration: 'none'
          }}
        >
          Book Now
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Services', 'Pricing', 'About', 'Service Areas'].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{
                color: colors.navy,
                textDecoration: 'none',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = colors.blue}
              onMouseLeave={(e) => e.target.style.color = colors.navy}
            >
              {item}
            </a>
          ))}
          <a
            href="https://booking.hydreight.com/widget-business/yd92b"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colors.blue,
              color: colors.white,
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 30px rgba(19, 125, 197, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${colors.blush} 0%, ${colors.blushLight} 100%)`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated decorative blobs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.blue}20, ${colors.cyan}15)`,
          filter: 'blur(40px)',
          animation: 'blob 8s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.cyan}15, ${colors.blue}10)`,
          filter: 'blur(30px)',
          animation: 'blob 10s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.blush}50, ${colors.cyan}05)`,
          filter: 'blur(60px)',
          animation: 'blob 12s ease-in-out infinite',
          transform: `translate(-50%, -50%)`
        }} />

        <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ marginBottom: '1.5rem', animation: 'fade-in-up 0.6s ease-out 0.2s both' }}>
              <span style={{
                backgroundColor: colors.white,
                color: colors.blue,
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.875rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(19, 125, 197, 0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Sparkles size={16} style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }} /> Mobile Med-Spa Services in Chicagoland
              </span>
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.blue} 50%, ${colors.cyan} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fade-in-up 0.6s ease-out 0.3s both, gradient-shift 6s ease infinite'
            }}>
              Premium Aesthetics,<br />Delivered to You
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: colors.gray,
              marginBottom: '2rem',
              lineHeight: '1.7',
              animation: 'fade-in-up 0.6s ease-out 0.4s both'
            }}>
              Experience luxury med-spa treatments in the comfort of your own home.
              Botox, IV hydration, and vitamin injections — administered by a registered nurse.
            </p>

            <p style={{
              fontSize: '1.125rem',
              color: colors.blue,
              fontWeight: '600',
              fontStyle: 'italic',
              marginBottom: '2rem',
              animation: 'fade-in-up 0.6s ease-out 0.5s both'
            }}>
              "Beauty Finds You"
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fade-in-up 0.6s ease-out 0.6s both' }}>
              <a
                href="https://booking.hydreight.com/widget-business/yd92b"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.cyan} 100%)`,
                  color: colors.white,
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(19, 125, 197, 0.35)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(19, 125, 197, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(19, 125, 197, 0.35)';
                }}
              >
                Book Your Appointment <ArrowRight size={18} style={{ transition: 'transform 0.3s ease' }} />
              </a>
              <a
                href="https://booking.hydreight.com/widget-business/yd92b"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                  color: colors.navy,
                  border: `2px solid ${colors.navy}`,
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.navy;
                  e.currentTarget.style.color = colors.white;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.navy;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Free Consultation
              </a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', animation: 'fade-in-up 0.6s ease-out 0.7s both' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.navy }}>
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div style={{ fontSize: '0.875rem', color: colors.gray }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.navy }}>5.0</div>
                <div style={{ fontSize: '0.875rem', color: colors.gray, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Star size={14} fill="#FFD700" color="#FFD700" /> Rating
                </div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.navy }}>RN</div>
                <div style={{ fontSize: '0.875rem', color: colors.gray }}>Certified</div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', animation: 'slide-in-right 0.8s ease-out 0.3s both' }}>
            {/* Logo display area */}
            <div style={{
              backgroundColor: colors.blush,
              borderRadius: '30px',
              padding: '2rem',
              boxShadow: '0 25px 80px rgba(30, 58, 110, 0.15)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}>
              <img
                src="/beautyfix-logo.png"
                alt="BeautyFix - Beauty Finds You"
                style={{
                  maxWidth: '380px',
                  width: '100%',
                  height: 'auto'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text version if image doesn't load */}
              <div style={{
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: colors.navy,
                    letterSpacing: '-0.02em'
                  }}>BEAUTY</span>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: colors.blue,
                    letterSpacing: '-0.02em'
                  }}>FIX</span>
                </div>
                <p style={{
                  color: colors.cyan,
                  letterSpacing: '0.35em',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  margin: 0
                }}>
                  B E A U T Y &nbsp; F I N D S &nbsp; Y O U
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="floating-badge" style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              backgroundColor: colors.white,
              padding: '1rem',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: 'float 4s ease-in-out infinite',
              transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${colors.blue}15, ${colors.cyan}15)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Home size={20} color={colors.blue} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: colors.navy }}>At-Home Service</div>
                <div style={{ fontSize: '0.75rem', color: colors.gray }}>We come to you</div>
              </div>
            </div>

            <div className="floating-badge" style={{
              position: 'absolute',
              bottom: '40px',
              left: '-30px',
              backgroundColor: colors.white,
              padding: '1rem',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: 'float-slow 5s ease-in-out infinite',
              transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${colors.blue}15, ${colors.cyan}15)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Gem size={20} color={colors.blue} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: colors.navy }}>Premium Quality</div>
                <div style={{ fontSize: '0.75rem', color: colors.gray }}>Medical-grade products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '6rem 2rem', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: colors.blue, fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem' }}>OUR SERVICES</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.navy, marginTop: '0.5rem' }}>
                Treatments Tailored to You
              </h2>
              <p style={{ color: colors.gray, fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                Professional aesthetic services brought directly to your home by a registered nurse
              </p>
            </div>
          </FadeInSection>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div
                  style={{
                    backgroundColor: colors.grayLight,
                    borderRadius: '24px',
                    padding: '2.5rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid transparent',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(19, 125, 197, 0.2)';
                    e.currentTarget.style.borderColor = colors.blue;
                    e.currentTarget.style.backgroundColor = colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.backgroundColor = colors.grayLight;
                  }}
                >
                  <div style={{
                    marginBottom: '1.5rem',
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${colors.blush}, ${colors.blushLight})`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                  }}>
                    <service.icon size={36} color={colors.blue} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.navy, marginBottom: '1rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: colors.gray, marginBottom: '1.5rem', lineHeight: '1.7' }}>
                    {service.description}
                  </p>
                  <div style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    marginBottom: '1.5rem'
                  }}>
                    {service.price}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        color: colors.gray,
                        fontSize: '0.9rem',
                        padding: '0.5rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Check size={16} color={colors.cyan} strokeWidth={2.5} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: `linear-gradient(135deg, ${colors.blush} 0%, ${colors.blushLight} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background element */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.blue}08, ${colors.cyan}05)`,
          animation: 'blob 15s ease-in-out infinite'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <FadeInSection direction="right">
              <div>
                <span style={{ color: colors.blue, fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem' }}>MEET BADRIA</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.navy, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Badria Kachani, RN
                </h2>
                <p style={{ color: colors.gray, fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  With over 15 years of nursing experience specializing in Home Health, I founded BeautyFix
                  to bring professional aesthetic treatments directly to you. My passion is helping patients
                  and clients look and feel happy and live their best lives.
                </p>
                <p style={{ color: colors.gray, fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Every treatment is administered with the same level of care, safety, and precision
                  you'd expect from a top medical spa — but in the comfort of your own home.
                </p>

                <div className="credentials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  {[
                    { icon: GraduationCap, title: 'RN Licensed', desc: 'State of Illinois' },
                    { icon: Syringe, title: 'Certified', desc: 'Aesthetic Injector' },
                    { icon: Building2, title: 'Experience', desc: '5+ Years Clinical' },
                    { icon: ShieldCheck, title: 'Insured', desc: 'Fully Licensed & Insured' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: colors.white,
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${colors.blue}10, ${colors.cyan}10)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem'
                      }}>
                        <item.icon size={24} color={colors.blue} strokeWidth={1.5} />
                      </div>
                      <div style={{ fontWeight: '600', color: colors.navy }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: colors.gray }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="left">
              <div>
                {/* Testimonials */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: colors.white,
                        padding: '2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        transition: 'all 0.4s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(10px)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                        ))}
                      </div>
                      <p style={{ color: colors.gray, fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.7' }}>
                        "{testimonial.text}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.white,
                          fontWeight: '600'
                        }}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600', color: colors.navy }}>{testimonial.name}</div>
                          <div style={{ fontSize: '0.875rem', color: colors.gray }}>{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '6rem 2rem', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: colors.blue, fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem' }}>PRICING</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.navy, marginTop: '0.5rem' }}>
                Simple, Transparent Pricing
              </h2>
              <p style={{ color: colors.gray, fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                Choose a package or customize your treatment. No hidden fees, no surprises.
              </p>
            </div>
          </FadeInSection>

          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'center' }}>
            {packages.map((pkg, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div
                  style={{
                    backgroundColor: pkg.popular ? colors.navy : colors.grayLight,
                    borderRadius: '24px',
                    padding: '2.5rem',
                    position: 'relative',
                    transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: pkg.popular ? '0 25px 80px rgba(30, 58, 110, 0.25)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.transform = 'scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(30, 58, 110, 0.15)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow = '0 30px 100px rgba(30, 58, 110, 0.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.popular) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 25px 80px rgba(30, 58, 110, 0.25)';
                    }
                  }}
                >
                  {pkg.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
                      color: colors.white,
                      padding: '0.5rem 1.5rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      animation: 'pulse-glow 2s ease-in-out infinite'
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: pkg.popular ? colors.white : colors.navy,
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.name}
                  </h3>
                  <p style={{
                    color: pkg.popular ? 'rgba(255,255,255,0.7)' : colors.gray,
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                  }}>
                    {pkg.description}
                  </p>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: pkg.popular ? colors.white : colors.navy,
                    marginBottom: '2rem'
                  }}>
                    {pkg.price}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                    {pkg.includes.map((item, i) => (
                      <li key={i} style={{
                        color: pkg.popular ? 'rgba(255,255,255,0.9)' : colors.gray,
                        padding: '0.75rem 0',
                        borderBottom: `1px solid ${pkg.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <Check size={18} color={pkg.popular ? colors.cyan : colors.blue} strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
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
                      backgroundColor: pkg.popular ? colors.white : colors.blue,
                      color: pkg.popular ? colors.navy : colors.white,
                      border: 'none',
                      textDecoration: 'none',
                      display: 'block',
                      textAlign: 'center',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${pkg.popular ? 'rgba(255,255,255,0.3)' : 'rgba(19, 125, 197, 0.4)'}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
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

      {/* Service Areas Section */}
      <section id="service-areas" style={{
        padding: '6rem 2rem',
        background: `linear-gradient(135deg, ${colors.navy} 0%, #2A4A7A 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.cyan}20, transparent)`,
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.blue}15, transparent)`,
          animation: 'float-slow 10s ease-in-out infinite'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: colors.cyan, fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem' }}>SERVICE AREAS</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.white, marginTop: '0.5rem' }}>
                Serving Chicagoland
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                We bring beauty to you across Chicago and surrounding suburbs
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: colors.white,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    animation: `fade-in-up 0.5s ease-out ${index * 50}ms both`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.borderColor = colors.cyan;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <MapPin size={14} strokeWidth={2} /> {area}
                </span>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
                Don't see your area? Contact us — we may still be able to serve you!
              </p>
              <button
                style={{
                  background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
                  color: colors.white,
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(0, 180, 216, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 15px 50px rgba(0, 180, 216, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 30px rgba(0, 180, 216, 0.3)';
                }}
              >
                Check My Area <ArrowRight size={18} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <FadeInSection>
            <span style={{ color: colors.blue, fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem' }}>GET STARTED</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: colors.navy, marginTop: '0.5rem', marginBottom: '1rem' }}>
              Ready for Your Glow Up?
            </h2>
            <p style={{ color: colors.gray, fontSize: '1.125rem', marginBottom: '3rem' }}>
              Book your consultation today and discover the convenience of luxury aesthetics at home.
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div style={{
              backgroundColor: colors.grayLight,
              borderRadius: '24px',
              padding: '3rem',
              transition: 'all 0.3s ease'
            }}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
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
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.blue}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
                <select
                  style={{
                    padding: '1rem 1.5rem',
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
                  <option>Botox / Dysport</option>
                  <option>IV Hydration</option>
                  <option>Vitamin Injections</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your goals..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  border: '2px solid transparent',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  marginBottom: '1.5rem',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.blue}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              />
              <button
                style={{
                  width: '100%',
                  background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
                  color: colors.white,
                  border: 'none',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(19, 125, 197, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(19, 125, 197, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 30px rgba(19, 125, 197, 0.35)';
                }}
              >
                Request Consultation <ArrowRight size={20} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: colors.navy,
        color: colors.white,
        padding: '4rem 2rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>BEAUTY</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.cyan }}>FIX</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Premium mobile med-spa services delivered to your door in Chicagoland.
              </p>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Botox & Dysport', 'IV Hydration', 'Vitamin Injections', 'Packages'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = colors.cyan}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About Us', 'Service Areas', 'FAQ', 'Contact'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = colors.cyan}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Contact</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} strokeWidth={1.5} /> BadriaKachani@gmail.com
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} strokeWidth={1.5} /> (312) 925-2401
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                <a
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
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Instagram size={18} strokeWidth={1.5} />
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
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
              © 2026 BeautyFix. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Privacy Policy', 'Terms of Service'].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
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

// Alias for App
const App = BeautyFixLanding;
export { App };
