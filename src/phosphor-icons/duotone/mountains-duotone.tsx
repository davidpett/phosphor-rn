import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMountainsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M94.9 75.94 125.65 128h-75.3L81.1 75.94a8 8 0 0 1 13.8 0ZM164 72a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm29.44 35.92a8 8 0 0 0-13.77 0l-33.06 55.79L168 200h80Z"
      opacity={0.2}
    />
    <Path d="M164 80a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm90.88 155.92-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84L146.63 148l-44.84-76.1a16 16 0 0 0-27.58 0L1.11 195.94A8 8 0 0 0 8 208h240a8 8 0 0 0 6.88-12.08ZM88 80l23.57 40H64.43ZM22 192l33-56h66l18.74 31.8L154 192Zm150.57 0-16.66-28.28L186.55 112 234 192Z" />
  </Svg>
);
const Memo = memo(SvgMountainsDuotone);
export default Memo;
