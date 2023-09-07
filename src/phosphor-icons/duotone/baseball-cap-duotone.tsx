import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballCapDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 152v32a16 16 0 0 1-25.48 12.88C182.53 185.26 159 176 128 176s-54.53 9.26-70.52 20.88A16 16 0 0 1 32 184v-32a160 160 0 0 1 192 0Z"
      opacity={0.2}
    />
    <Path d="M128 24A104.12 104.12 0 0 0 24 128v56a24 24 0 0 0 24 24 24.11 24.11 0 0 0 14.18-4.64C74.33 194.53 95.6 184 128 184s53.67 10.52 65.81 19.35A24 24 0 0 0 232 184v-56A104.12 104.12 0 0 0 128 24Zm88 104v8.87a166 166 0 0 0-40.94-18.22 167 167 0 0 0-28.87-76.75A88.15 88.15 0 0 1 216 128Zm-88-83.73a152.47 152.47 0 0 1 30.4 70.46 170.85 170.85 0 0 0-60.84 0A153.31 153.31 0 0 1 128 44.27Zm-18.19-2.37a167 167 0 0 0-28.87 76.76A166 166 0 0 0 40 136.88V128a88.15 88.15 0 0 1 69.81-86.1Zm101.85 149.21a8 8 0 0 1-8.44-.69C189.16 180.2 164.7 168 128 168s-61.16 12.2-75.22 22.42a8 8 0 0 1-8.44.69A7.77 7.77 0 0 1 40 184v-27.93a152 152 0 0 1 176 0V184a7.77 7.77 0 0 1-4.34 7.11Z" />
  </Svg>
);
const Memo = memo(SvgBaseballCapDuotone);
export default Memo;
