import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m211 213.31-160-176a4 4 0 0 0-6 5.38l18.8 20.63A76 76 0 0 0 124 179.89V204H32a4 4 0 0 0 0 8h167l6.08 6.69a4 4 0 1 0 5.92-5.38ZM100 103.18l26.14 28.75A28 28 0 0 1 100 104v-.82ZM60 104a67.62 67.62 0 0 1 9.4-34.52l23.6 26a36 36 0 0 0 40.13 44.14l23.63 26A68 68 0 0 1 60 104Zm72 100v-24.11a76.09 76.09 0 0 0 30.39-8.11l29.3 32.22ZM89 43.33a4 4 0 0 1 1.5-5.45 76 76 0 0 1 99.76 109.72 4 4 0 1 1-6.55-4.59 68 68 0 0 0-89.25-98.18 4 4 0 0 1-5.46-1.5Zm65.63 69.34a28 28 0 0 0-32.73-36 4 4 0 0 1-1.74-7.81 36 36 0 0 1 42.08 46.28 4 4 0 0 1-3.8 2.77 4.12 4.12 0 0 1-1.24-.2 4 4 0 0 1-2.57-5.04Z" />
  </Svg>
);
const Memo = memo(SvgWebcamSlashThin);
export default Memo;
