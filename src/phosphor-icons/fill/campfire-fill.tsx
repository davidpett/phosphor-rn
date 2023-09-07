import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCampfireFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132.19 25.19a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60 60 0 0 0 120 0c0-47.92-53.53-81.41-55.81-82.81ZM128 152a24 24 0 0 1-24-24c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-24 24Zm95.62 74.42a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38 64 20.37a8 8 0 0 1 5.2 10.05Z" />
  </Svg>
);
const Memo = memo(SvgCampfireFill);
export default Memo;
