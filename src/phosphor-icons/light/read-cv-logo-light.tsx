import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgReadCvLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.43 41.22-130.25-23A14 14 0 0 0 64 29.58l-29.75 169a14 14 0 0 0 11.36 16.22l130.25 23a13.64 13.64 0 0 0 2.46.22 14 14 0 0 0 13.68-11.6l29.75-169a14 14 0 0 0-11.32-16.2ZM210 55.36l-29.75 169a2 2 0 0 1-.82 1.3 2 2 0 0 1-1.49.33L47.65 203a2 2 0 0 1-1.65-2.36l29.75-169a2 2 0 0 1 .82-1.3A2.06 2.06 0 0 1 78.1 30l130.25 23a2 2 0 0 1 1.65 2.36Zm-23.89 20.15a6 6 0 0 1-5.9 5 6.2 6.2 0 0 1-1.05-.09l-83-14.66a6 6 0 1 1 2.09-11.81l83 14.65a6 6 0 0 1 4.86 6.91ZM180.56 107a6 6 0 0 1-5.9 5 5.48 5.48 0 0 1-1-.1l-83-14.65a6 6 0 0 1 2.09-11.82l83 14.66a6 6 0 0 1 4.81 6.91Zm-47 24.19a6 6 0 0 1-5.91 4.95 6.38 6.38 0 0 1-1.05-.09l-41.49-7.33a6 6 0 1 1 2.09-11.81l41.49 7.32a6 6 0 0 1 4.84 6.99Z" />
  </Svg>
);
const Memo = memo(SvgReadCvLogoLight);
export default Memo;
