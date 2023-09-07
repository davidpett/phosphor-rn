import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipBackCircleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96Zm32 136-64-40 64-40Z"
      opacity={0.2}
    />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm35.88-135a8 8 0 0 0-8.12.22L104 113.57V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-25.57l51.76 32.35A8 8 0 0 0 168 168V88a8 8 0 0 0-4.12-7ZM152 153.57 111.09 128 152 102.43Z" />
  </Svg>
);
const Memo = memo(SvgSkipBackCircleDuotone);
export default Memo;
