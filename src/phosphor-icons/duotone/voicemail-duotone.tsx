import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVoicemailDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M104 128a48 48 0 1 1-48-48 48 48 0 0 1 48 48Zm96-48a48 48 0 1 0 48 48 48 48 0 0 0-48-48Z"
      opacity={0.2}
    />
    <Path d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112ZM16 128a40 40 0 1 1 40 40 40 40 0 0 1-40-40Zm184 40a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgVoicemailDuotone);
export default Memo;
