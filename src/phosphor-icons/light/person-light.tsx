import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 70a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm88.88 113.42-45.21-51.26A30 30 0 0 0 149.17 74h-42.34a30 30 0 0 0-22.5 10.15l-45.21 51.27A18 18 0 0 0 64.46 161l21.11-16.93-18.13 68.85a18 18 0 0 0 32.75 14.94L128 180l27.81 47.91a18 18 0 0 0 32.75-14.94l-18.13-68.87 21.11 16.9a18 18 0 0 0 25.34-25.56Zm-8.63 16.82a6 6 0 0 1-8.49 0 4.15 4.15 0 0 0-.49-.44l-35.51-28.48a6 6 0 0 0-9.56 6.2l22.87 86.93a7.66 7.66 0 0 0 .37 1 6 6 0 0 1-10.88 5.07 4.37 4.37 0 0 0-.25-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05a4.37 4.37 0 0 0-.25.48 6 6 0 0 1-10.88-5.07 7.66 7.66 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-2.53-6.53 6.07 6.07 0 0 0-3.27-1 6 6 0 0 0-3.76 1.32L56.73 151.8a4.15 4.15 0 0 0-.49.44 6 6 0 0 1-8.49-8.49l.26-.27 45.32-51.39a18 18 0 0 1 13.5-6.09h42.34a18 18 0 0 1 13.5 6.09L208 143.48l.26.27a6 6 0 0 1-.01 8.49Z" />
  </Svg>
);
const Memo = memo(SvgPersonLight);
export default Memo;