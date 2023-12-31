import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodesandboxLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m222.72 67.91-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.17A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.28l88 48.17a13.92 13.92 0 0 0 13.44 0l88-48.17a14 14 0 0 0 7.28-12.28V80.18a14 14 0 0 0-7.28-12.27ZM128 121.16 44.49 75.44l38.65-21.15 42 23a6 6 0 0 0 5.76 0l42-23 38.65 21.15Zm-1-90.91a2 2 0 0 1 1.92 0l31.4 17.2L128 65.16 95.63 47.45ZM38 175.82v-40l36 19.7v41.16l-35-19.11a2 2 0 0 1-1-1.75Zm48 27.46V152a6 6 0 0 0-3.12-5.26L38 122.17v-36.6l84 46V223ZM134 223v-91.44l84-46v36.6l-44.88 24.57A6 6 0 0 0 170 152v51.28Zm83-45.42-35 19.14v-41.17l36-19.7v40a2 2 0 0 1-1 1.72Z" />
  </Svg>
);
const Memo = memo(SvgCodesandboxLogoLight);
export default Memo;
