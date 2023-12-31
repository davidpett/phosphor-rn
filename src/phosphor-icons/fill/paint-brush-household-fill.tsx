import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushHouseholdFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.64 25.36a32 32 0 0 0-45.26 0c-.1.1-.2.2-.29.31l-54.91 61.18-9.18-9.21a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-9.21-9.2 61.18-54.91a2.91 2.91 0 0 0 .31-.3 32 32 0 0 0 0-45.28ZM96 228.69 79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68 55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68 27.31 160 72 115.31 140.69 184Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushHouseholdFill);
export default Memo;
