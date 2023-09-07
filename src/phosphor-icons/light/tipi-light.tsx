import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTipiLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.05 212.77 135.12 53.5l21.93-34.26A6 6 0 1 0 147 12.77l-19 29.6-19-29.6a6 6 0 1 0-10 6.47l21.88 34.26L19 212.77a6 6 0 0 0 5 9.23h208a6 6 0 0 0 5.05-9.23ZM82.64 210 128 139.13 173.36 210Zm105 0-54.55-85.23a6 6 0 0 0-10.1 0L68.4 210H35l93-145.37L221 210Z" />
  </Svg>
);
const Memo = memo(SvgTipiLight);
export default Memo;
