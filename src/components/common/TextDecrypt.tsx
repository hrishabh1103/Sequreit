import React, { useEffect, useState, useRef } from 'react';

interface TextDecryptProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  speed?: number; // ms per frame
  scrambleLoops?: number; // how many random scrambles before locking
  delay?: number; // delay before starting in ms
  cursorColor?: string;
  showCursor?: boolean;
  triggerOnScroll?: boolean;
  threshold?: number;
}

const CIPHER_GLYPHS = '01#%&*+=-_~<>{}[]/?@$ABCDEFXYZ!^';

export const TextDecrypt: React.FC<TextDecryptProps> = ({
  text,
  className = '',
  as: Component = 'span',
  speed = 28,
  scrambleLoops = 2,
  delay = 0,
  cursorColor = '#00E5FF',
  showCursor = true,
  triggerOnScroll = true,
  threshold = 0.2
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const hasTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      setIsCompleted(true);
      return;
    }

    const startAnimation = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;

      const timeoutId = setTimeout(() => {
        setIsAnimating(true);
        let currentIndex = 0;
        let loopCount = 0;

        const interval = setInterval(() => {
          if (currentIndex >= text.length) {
            clearInterval(interval);
            setDisplayText(text);
            setIsAnimating(false);
            // Hide cursor after a short delay
            setTimeout(() => setIsCompleted(true), 800);
            return;
          }

          loopCount++;
          if (loopCount >= scrambleLoops) {
            loopCount = 0;
            currentIndex++;
          }

          // Generate string: revealed locked text + current scrambling characters
          let output = text.slice(0, currentIndex);
          if (currentIndex < text.length) {
            const nextChar = text[currentIndex];
            if (nextChar === ' ' || nextChar === '\n') {
              output += nextChar;
            } else {
              const randomGlyph = CIPHER_GLYPHS[Math.floor(Math.random() * CIPHER_GLYPHS.length)];
              output += randomGlyph;
            }
          }

          setDisplayText(output);
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeoutId);
    };

    if (!triggerOnScroll) {
      startAnimation();
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [text, speed, scrambleLoops, delay, triggerOnScroll, threshold]);

  return (
    <Component
      ref={containerRef as any}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {displayText || (hasTriggeredRef.current ? '' : '\u00A0')}
      </span>
      {showCursor && !isCompleted && isAnimating && (
        <span
          className="inline-block w-[0.55em] h-[1em] ml-1 align-baseline animate-pulse transition-opacity duration-300"
          style={{ backgroundColor: cursorColor }}
          aria-hidden="true"
        />
      )}
    </Component>
  );
};
