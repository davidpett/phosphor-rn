import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileAudioThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M97.53 132.3a4 4 0 0 0-4.36.87L70.34 156H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h22.34l22.83 22.83A4 4 0 0 0 100 224v-88a4 4 0 0 0-2.47-3.7Zm-5.53 82-17.17-17.13A4 4 0 0 0 72 196H52v-32h20a4 4 0 0 0 2.83-1.17L92 145.66Zm56-34.3a36.52 36.52 0 0 1-18 31.45 4 4 0 0 1-4-6.9 28.5 28.5 0 0 0 0-49.1 4 4 0 0 1 4-6.9A36.52 36.52 0 0 1 148 180Zm62.83-94.83-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM156 41.65 198.34 84H156Z" />
  </Svg>
);
const Memo = memo(SvgFileAudioThin);
export default Memo;
