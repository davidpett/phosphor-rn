import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBridgeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 156h-28v-44.51a76.39 76.39 0 0 0 23.49 15 12 12 0 0 0 9-22.25A51.81 51.81 0 0 1 204 56a12 12 0 0 0-24 0 52 52 0 0 1-104 0 12 12 0 0 0-24 0 51.81 51.81 0 0 1-32.5 48.22 12 12 0 1 0 9 22.25 76.39 76.39 0 0 0 23.49-15V156H24a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h104v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24Zm-92-24.95V156h-24v-24.95a76.26 76.26 0 0 0 24 0Zm-64-19.67a76.44 76.44 0 0 0 16 11.53V156H76ZM164 156v-33.09a76.44 76.44 0 0 0 16-11.53V156Z" />
  </Svg>
);
const Memo = memo(SvgBridgeBold);
export default Memo;
