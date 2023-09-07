import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballCapThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28A100.12 100.12 0 0 0 28 128v56a20 20 0 0 0 31.84 16.12C72.46 191 94.53 180 128 180s55.54 10.94 68.16 20.12a20 20 0 0 0 21 1.67A19.87 19.87 0 0 0 228 184v-56A100.12 100.12 0 0 0 128 28Zm92 100v16.23a162.31 162.31 0 0 0-48.67-22.47 162.56 162.56 0 0 0-34.15-85.31A92.12 92.12 0 0 1 220 128Zm-56.9-8.26a166.58 166.58 0 0 0-70.2 0C97.64 76.93 120 47.31 128 38c8 9.32 30.36 38.93 35.1 81.75Zm-44.28-83.28a162.56 162.56 0 0 0-34.15 85.31A162.31 162.31 0 0 0 36 144.24V128a92.12 92.12 0 0 1 82.82-91.54Zm94.66 158.21a11.88 11.88 0 0 1-12.61-1C187.29 183.78 163.62 172 128 172s-59.29 11.77-72.87 21.65a11.88 11.88 0 0 1-12.61 1A11.75 11.75 0 0 1 36 184v-30a156 156 0 0 1 184 0v30a11.75 11.75 0 0 1-6.52 10.67Z" />
  </Svg>
);
const Memo = memo(SvgBaseballCapThin);
export default Memo;
