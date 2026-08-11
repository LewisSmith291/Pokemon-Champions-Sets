
import { Link } from 'react-router';
//import { useState } from 'react';
import userPrefersDark from '@/hooks/userPrefersDark';

import Light from '/logo-light.png';
import LightSelected from '/logo-light-selected.png';
import Dark from '/logo-dark.png';
import DarkSelected from '/logo-dark-selected.png';


export default function Logo() {
  const isDark = userPrefersDark();
  const base = isDark ? Dark: Light;
  const selected = isDark ? DarkSelected : LightSelected;

  //const [isHovered, setIsHovered] = useState(false);
  //const src = isDark ? (isHovered ? DarkSelected : Dark) : (isHovered ? LightSelected : Light);

  return (
    <Link 
      id="logo" to="/" className="group relative flex items-center">
      <img
        src={base}
        alt="Champion Sets Logo"
        className="block h-full w-full [image-rendering:pixelated] group-hover:opacity-0 group-focus-visible:opacity-0"
      />
      <img
        src={selected}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 block h-full w-full [image-rendering:pixelated] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
    </Link>
  )
}        


