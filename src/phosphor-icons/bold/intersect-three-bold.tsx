import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIntersectThreeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 93.66V92a72 72 0 0 0-144 0v1.66a72 72 0 1 0 72 124.65 72 72 0 1 0 72-124.65Zm-41.28 35.22A71.73 71.73 0 0 0 148 110.77a47.69 47.69 0 0 1 25-1.92 48.21 48.21 0 0 1-14.32 20.03ZM128 187.7a47.81 47.81 0 0 1-11.47-24.62 72 72 0 0 0 22.94 0A47.81 47.81 0 0 1 128 187.7Zm-44.94-78.85a47.69 47.69 0 0 1 25 1.92 71.73 71.73 0 0 0-10.72 18.11 48.21 48.21 0 0 1-14.28-20.03ZM128 140a47.88 47.88 0 0 1-8.94-.85A48 48 0 0 1 128 124.3a48 48 0 0 1 8.94 14.85 47.88 47.88 0 0 1-8.94.85Zm0-96a48.07 48.07 0 0 1 47.47 40.92A71.77 71.77 0 0 0 128 93.69a71.77 71.77 0 0 0-47.47-8.77A48.07 48.07 0 0 1 128 44ZM44 156a47.89 47.89 0 0 1 17.32-36.88A72.45 72.45 0 0 0 92 154.34V156a71.64 71.64 0 0 0 16 45.23A48 48 0 0 1 44 156Zm120 48a47.67 47.67 0 0 1-16-2.77A71.64 71.64 0 0 0 164 156v-1.66a72.45 72.45 0 0 0 30.72-35.22A48 48 0 0 1 164 204Z" />
  </Svg>
);
const Memo = memo(SvgIntersectThreeBold);
export default Memo;
