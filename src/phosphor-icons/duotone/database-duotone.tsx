import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDatabaseDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 80c0 26.51-39.4 48-88 48s-88-21.49-88-48 39.4-48 88-48 88 21.49 88 48Z"
      opacity={0.2}
    />
    <Path d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56Zm80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64ZM69.61 53.08C85.07 44.65 105.81 40 128 40s42.93 4.65 58.39 13.08C200.12 60.57 208 70.38 208 80s-7.88 19.43-21.61 26.92C170.93 115.35 150.19 120 128 120s-42.93-4.65-58.39-13.08C55.88 99.43 48 89.62 48 80s7.88-19.43 21.61-26.92Zm116.78 149.84C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92Z" />
  </Svg>
);
const Memo = memo(SvgDatabaseDuotone);
export default Memo;