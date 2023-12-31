import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonArmsSpreadBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.4 86.85A23.55 23.55 0 0 0 212 68h-61.41a36 36 0 1 0-45.18 0H44a24 24 0 0 0-10 45.79l.19.09 47.63 21L61.76 211a24 24 0 0 0 12.11 30.74A23.77 23.77 0 0 0 84 244a24 24 0 0 0 21.52-13.29l22.48-38.8 22.51 38.8A24 24 0 0 0 194.24 211l-20-76.15 47.63-21 .19-.09a23.55 23.55 0 0 0 13.34-26.91ZM128 28a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm27.16 89a12 12 0 0 0-6.77 14l22.87 87a11.87 11.87 0 0 0 .73 2c-.15-.32-.32-.64-.5-.95L138.38 162a12 12 0 0 0-20.76 0l-33.11 57.05c-.18.31-.35.63-.5.95a11.87 11.87 0 0 0 .73-2l22.87-86.92a12 12 0 0 0-6.77-14L44 92h168Z" />
  </Svg>
);
const Memo = memo(SvgPersonArmsSpreadBold);
export default Memo;
