import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm91.91 96h-48c-.83-32.93-11.88-64.09-30.79-87.06A92.16 92.16 0 0 1 219.91 124ZM128 220a3.76 3.76 0 0 1-2.78-1.23C104.91 196.9 93 165.46 92.06 132h71.88c-.89 33.46-12.85 64.9-33.16 86.77A3.76 3.76 0 0 1 128 220Zm-35.94-96c.89-33.46 12.85-64.9 33.16-86.77a3.76 3.76 0 0 1 5.56 0c20.31 21.87 32.27 53.31 33.16 86.77Zm22.79-87.06c-18.91 23-30 54.13-30.79 87.06h-48a92.16 92.16 0 0 1 78.79-87.06ZM36.09 132h48c.83 32.93 11.88 64.09 30.79 87.06A92.16 92.16 0 0 1 36.09 132Zm105.06 87.06c18.91-23 30-54.13 30.79-87.06h48a92.16 92.16 0 0 1-78.79 87.06Z" />
  </Svg>
);
const Memo = memo(SvgGlobeSimpleThin);
export default Memo;
