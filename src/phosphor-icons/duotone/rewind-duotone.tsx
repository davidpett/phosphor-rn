import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 71.85v112.3a7.91 7.91 0 0 1-12.18 6.59l-88.19-56.15a7.8 7.8 0 0 1 0-13.18l88.19-56.15A7.91 7.91 0 0 1 224 71.85Zm-116.18-6.59-88.19 56.15a7.8 7.8 0 0 0 0 13.18l88.19 56.15a7.91 7.91 0 0 0 12.18-6.59V71.85a7.91 7.91 0 0 0-12.18-6.59Z"
      opacity={0.2}
    />
    <Path d="M223.77 58a16 16 0 0 0-16.25.53L128 109.14v-37.3a15.91 15.91 0 0 0-24.48-13.34l-88.19 56.16a15.8 15.8 0 0 0 0 26.68l88.19 56.16A15.91 15.91 0 0 0 128 184.16v-37.3l79.52 50.64A15.91 15.91 0 0 0 232 184.16V71.84A15.83 15.83 0 0 0 223.77 58ZM112 183.93 24.18 128 112 72.06Zm104 0L128.18 128 216 72.06Z" />
  </Svg>
);
const Memo = memo(SvgRewindDuotone);
export default Memo;
