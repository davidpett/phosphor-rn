import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpadeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178.56 52.93a281.08 281.08 0 0 0-48.77-32.51 4 4 0 0 0-3.58 0 281.08 281.08 0 0 0-48.77 32.51C45.1 79.88 28 108.61 28 136a52 52 0 0 0 76.46 45.89l-12.29 41A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-12.29-41A52 52 0 0 0 228 136c0-27.39-17.1-56.12-49.44-83.07ZM176 180a44 44 0 0 1-28.92-10.84 4 4 0 0 0-6.46 4.17l14 46.67h-53.24l14-46.67a4 4 0 0 0-6.46-4.17A44 44 0 0 1 36 136c0-56.06 79-100.56 92-107.49 13 6.93 92 51.38 92 107.49a44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgSpadeThin);
export default Memo;
