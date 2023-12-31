import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOfficeChairDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M176 136H80a8 8 0 0 1-7.92-9.13l13.72-96A8 8 0 0 1 93.72 24h68.56a8 8 0 0 1 7.92 6.87l13.72 96A8 8 0 0 1 176 136Z"
      opacity={0.2}
    />
    <Path d="M248 128a8 8 0 0 1-8 8h-16.67A48.08 48.08 0 0 1 176 176h-40v24h24a32 32 0 0 1 32 32 8 8 0 0 1-16 0 16 16 0 0 0-16-16h-24v16a8 8 0 0 1-16 0v-16H96a16 16 0 0 0-16 16 8 8 0 0 1-16 0 32 32 0 0 1 32-32h24v-24H80a48.08 48.08 0 0 1-47.33-40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8 32 32 0 0 0 32 32h96a32 32 0 0 0 32-32 8 8 0 0 1 8-8h24a8 8 0 0 1 8 8ZM67.91 138.48a16 16 0 0 1-3.75-12.74l13.72-96A16.08 16.08 0 0 1 93.72 16h68.56a16.08 16.08 0 0 1 15.84 13.74l13.72 96A16 16 0 0 1 176 144H80a16 16 0 0 1-12.09-5.52ZM80 128h96l-13.72-96H93.71Z" />
  </Svg>
);
const Memo = memo(SvgOfficeChairDuotone);
export default Memo;
