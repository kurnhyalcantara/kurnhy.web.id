'use client';

import { useEffect, useRef } from 'react';
import feather from 'feather-icons';

interface FeatherIconProps {
  icon: string; // Nama ikon dari Feather Icons (misalnya: "home", "star")
  className?: string; // Kelas tambahan untuk styling (opsional)
}

export const FeatherIcon: React.FC<FeatherIconProps> = ({
  icon,
  className,
}) => {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      // Type assertion untuk icons
      const featherIcons = feather.icons as Record<string, feather.FeatherIcon>;

      if (featherIcons[icon]) {
        iconRef.current.innerHTML = featherIcons[icon].toSvg({
          class: className,
        });
      }
    }
  }, [icon, className]);

  return <i ref={iconRef} data-feather={icon} className={className}></i>;
};
