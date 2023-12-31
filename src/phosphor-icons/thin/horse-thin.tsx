import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHorseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 100a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm96 29.42A100.29 100.29 0 0 1 130 228h-2.09a99.37 99.37 0 0 1-66.6-25 4 4 0 1 1 5.34-6 89.08 89.08 0 0 0 24.09 15.39l31.35-43.11c-25.16-13-53.95-8.1-68.14-5.7a27.85 27.85 0 0 1-27.43-11.22c-.05-.07-.1-.14-.14-.21l-13.79-22a3.94 3.94 0 0 1-.5-3 4 4 0 0 1 1.79-2.5L116 61.76V32a4 4 0 0 1 4-4h8a100 100 0 0 1 100 101.42Zm-34.48-66A91.35 91.35 0 0 0 128 36h-4v28a4 4 0 0 1-1.9 3.41L21.53 129.29l11.58 18.52a19.89 19.89 0 0 0 19.52 7.91c15.68-2.66 48.08-8.13 76.39 8.25a44 44 0 0 0 43-44 4 4 0 0 1 8 0A52.06 52.06 0 0 1 130.07 172l-31.56 43.4a94.54 94.54 0 0 0 31.35 4.6 92 92 0 0 0 63.65-156.6Z" />
  </Svg>
);
const Memo = memo(SvgHorseThin);
export default Memo;
