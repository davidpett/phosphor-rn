import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.93 126.3A116.43 116.43 0 0 0 49 50.81a115.45 115.45 0 0 0-37 75.49A20 20 0 0 0 32 148h84v52a36 36 0 0 0 72 0 12 12 0 0 0-24 0 12 12 0 0 1-24 0v-52h84a20 20 0 0 0 20-21.7ZM36.44 124a92.45 92.45 0 0 1 154.25-55.54A91.56 91.56 0 0 1 219.56 124Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaSimpleBold);
export default Memo;
