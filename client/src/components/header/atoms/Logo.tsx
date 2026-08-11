
import { Link } from 'react-router';

import Light from '/logo-light.png';
import LightSelected from '/logo-light-selected.png';
import Dark from '/logo-dark.png';
import DarkSelected from '/logo-dark-selected.png';


export default function Logo() {
  return (
    <Link 
      id="logo" to="/" className="group relative" aria-label="Champion Sets Home">
      <div className="block h-full w-full dark:hidden">
        <img
          src={Light}
          alt="Champion Sets Logo"
          className="block h-full w-full [image-rendering:pixelated] group-hover:opacity-0 group-focus-visible:opacity-0"
        />
        <img
          src={LightSelected}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full [image-rendering:pixelated] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </div>

      <div className="hidden h-full w-full dark:block">
        <img
          src={Dark}
          alt="Champion Sets Logo"
          className="block inset-0 block h-full w-full [image-rendering:pixelated] group-hover:opacity-0 group-focus-visible:opacity-0"
        />
        <img
          src={DarkSelected}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full [image-rendering:pixelated] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </div>
    </Link>
  )
}