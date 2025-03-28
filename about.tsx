import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.2 }
    })
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={0}
          >
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-8 font-light tracking-wide">About Le Eisvóre</h2>
            <p className="text-[#161616]/80 mb-6 leading-relaxed">Le Eisvóre creates distinctive fragrances that capture fleeting moments and personal memories. Our perfumes are crafted with the finest natural ingredients, precisely blended to evoke emotion and sensation.</p>
            <p className="text-[#161616]/80 mb-10 leading-relaxed">Founded on principles of purity and sophistication, each fragrance tells its own story while allowing you to create yours.</p>
            <div className="flex items-center">
              <span className="block h-px w-12 bg-[#C9B382] mr-4"></span>
              <span className="text-sm uppercase tracking-widest text-[#C9B382] font-light">Handcrafted in Paris</span>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={1}
          >
            <img 
              src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Le Eisvóre Fragrance" 
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
