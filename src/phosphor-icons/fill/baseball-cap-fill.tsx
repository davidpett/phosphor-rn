import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballCapFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24A104.12 104.12 0 0 0 24 128v56a24 24 0 0 0 24 24 24.11 24.11 0 0 0 14.18-4.64C74.33 194.53 95.6 184 128 184s53.67 10.52 65.81 19.35A24 24 0 0 0 232 184v-56A104.12 104.12 0 0 0 128 24ZM40 128a88.15 88.15 0 0 1 69.81-86.1 167 167 0 0 0-28.87 76.76A166 166 0 0 0 40 136.88Zm176 56a7.77 7.77 0 0 1-4.34 7.1 8 8 0 0 1-8.44-.69C189.16 180.2 164.7 168 128 168s-61.16 12.2-75.22 22.42a8 8 0 0 1-8.44.69A7.77 7.77 0 0 1 40 184v-27.93a150.62 150.62 0 0 1 49.93-23.28 7.06 7.06 0 0 0 1-.26 154.06 154.06 0 0 1 74.17 0 8.64 8.64 0 0 0 1 .27 150.49 150.49 0 0 1 49.9 23.27Zm0-47.13a166 166 0 0 0-40.94-18.22 167 167 0 0 0-28.87-76.75A88.15 88.15 0 0 1 216 128Z" />
  </Svg>
);
const Memo = memo(SvgBaseballCapFill);
export default Memo;
