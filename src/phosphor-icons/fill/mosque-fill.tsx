import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMosqueFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a23.84 23.84 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0v32a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0v32a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24ZM40 200H24v-48a8 8 0 0 1 16 0Zm192 0h-16v-48a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgMosqueFill);
export default Memo;
