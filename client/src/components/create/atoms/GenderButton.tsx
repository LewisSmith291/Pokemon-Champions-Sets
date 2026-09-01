import { type ReactElement } from "react";
import { type Gender } from "@/data/forms";

interface Props {
  gender: Gender;
  /** What this species permits - one entry means there's nothing to choose */
  options: Gender[];
  onChange: (gender: Gender) => void;
}

const SYMBOL: Record<Gender, ReactElement> = {
  male: (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        transform="translate(-4, -1919)"
        d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
      />
    </svg>
  ),
  female: (
    <svg viewBox="-3 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        transform="translate(-47, -1919)"
        d="M54.010058,1930.97067 C52.6753909,1930.97067 51.421643,1930.45194 50.4775859,1929.51025 C47.3327267,1926.36895 49.5904718,1920.99511 54.010058,1920.99511 C58.4266471,1920.99511 60.6903863,1926.36595 57.5425301,1929.51025 C56.5984729,1930.45194 55.344725,1930.97067 54.010058,1930.97067 M58.9411333,1930.92079 C63.3617184,1926.50661 60.1768991,1919 54.007061,1919 C47.8512088,1919 44.6294265,1926.50661 49.0510106,1930.92079 C50.1609021,1932.02908 51.9840813,1932.67949 52.9830836,1932.88598 L52.9830836,1935.00978 L49.9860767,1935.00978 L49.9860767,1937.00489 L52.9830836,1937.00489 L52.9830836,1939 L54.9810882,1939 L54.9810882,1937.00489 L57.9780951,1937.00489 L57.9780951,1935.00978 L54.9810882,1935.00978 L54.9810882,1932.88598 C56.9790928,1932.67949 57.8302427,1932.02908 58.9411333,1930.92079"
      />
    </svg>
  ),
  genderless: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m21.334 12c0-.006 0-.013 0-.02 0-5.166-4.188-9.354-9.354-9.354s-9.354 4.188-9.354 9.354 4.188 9.354 9.354 9.354c2.583 0 4.922-1.047 6.614-2.74 1.691-1.636 2.74-3.927 2.74-6.462 0-.046 0-.093-.001-.139v.007zm2.666 0v.036c0 1.67-.349 3.258-.977 4.695l.029-.075c-1.226 2.905-3.491 5.17-6.318 6.367l-.078.029c-1.374.599-2.974.948-4.656.948s-3.283-.349-4.733-.978l.077.03c-2.905-1.226-5.17-3.491-6.367-6.318l-.029-.078c-.599-1.374-.948-2.974-.948-4.656s.349-3.283.978-4.733l-.03.077c1.226-2.905 3.491-5.17 6.318-6.367l.078-.029c1.374-.599 2.974-.948 4.656-.948s3.283.349 4.733.978l-.077-.03c2.905 1.226 5.17 3.491 6.367 6.318l.029.078c.599 1.362.948 2.95.948 4.62v.039-.002z" />
    </svg>
  ),
};

const LABEL: Record<Gender, string> = {
  male: "Male",
  female: "Female",
  genderless: "Genderless",
};

export default function GenderButton({ gender, options, onChange }: Props) {
  const canChoose: boolean = options.length > 1;

  return (
    <button
      type="button"
      id="gender-button"
      className={`hoverable-link rounded-[var(--rounded)] gender-${gender}`}
      // Shown but inert for the 22 species that are fixed - hiding it would make
      // the row jump around and wouldn't tell the user the constraint exists
      disabled={!canChoose}
      onClick={() => onChange(gender === "male" ? "female" : "male")}
      aria-label={canChoose ? `Gender: ${LABEL[gender]}, change` : `Gender: ${LABEL[gender]}`}
      title={canChoose ? "Change gender" : `Always ${LABEL[gender].toLowerCase()}`}
    >
      {/* aria-hidden on the svg - the button's aria-label already names the state */}
      {SYMBOL[gender]}
    </button>
  );
}
