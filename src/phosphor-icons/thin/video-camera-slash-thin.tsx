import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVideoCameraSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12h-78.94a4 4 0 0 0 0 8H192a4 4 0 0 1 4 4v87.63a4 4 0 0 0 8 0v-8.16l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53ZM244 168.53l-40-26.67v-27.72l40-26.67ZM51 37.31a4 4 0 0 0-6 5.38L60.78 60H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.41L205 218.69a4 4 0 1 0 5.92-5.38ZM32 188a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h36.05l109.09 120Z" />
  </Svg>
);
const Memo = memo(SvgVideoCameraSlashThin);
export default Memo;
