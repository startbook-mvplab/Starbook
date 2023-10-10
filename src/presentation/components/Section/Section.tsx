import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { Box, SxProps, Theme } from '@mui/material';
import React, { useRef, useEffect, useContext, ReactNode } from 'react';

interface SectionProps {
  name: string;
  children: ReactNode | ReactNode[],
  sx?: SxProps<Theme> | undefined,
}

const Section: React.FC<SectionProps> = ({ name, children, sx }) => {
  const { activeSection } = useContext(GlobalContext);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeSection === name && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });

      sectionRef.current.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
      sectionRef.current.style.padding = '10px'; // Cambiar el padding
      const timeout = setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.backgroundColor = 'transparent';
          sectionRef.current.style.padding = '0'; // Restaurar el padding
        }
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [activeSection, name]);

  return (
    <Box ref={sectionRef}
      sx={{
        backgroundColor: activeSection === name ? 'rgba(255, 255, 0, 0.3)' : 'transparent',
        transition: 'background-color 0.3s ease',
        borderRadius: '20px',
        // display: 'flex',
        // width: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
