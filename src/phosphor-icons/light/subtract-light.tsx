import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172.91 83.08a78 78 0 1 0-89.83 89.83 78 78 0 1 0 89.83-89.83ZM226 160a65.31 65.31 0 0 1-.62 8.9l-53.76-53.77A77.84 77.84 0 0 0 174 96v-.51A65.8 65.8 0 0 1 226 160Zm-79.29-4.81 55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.86 77.86 0 0 0 18.99-12Zm8.48-8.48a77.86 77.86 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69ZM30 96a66 66 0 1 1 66 66 66.08 66.08 0 0 1-66-66Zm65.49 78H96a77.84 77.84 0 0 0 19.13-2.38l53.77 53.76A65.87 65.87 0 0 1 95.49 174Z" />
  </Svg>
);
const Memo = memo(SvgSubtractLight);
export default Memo;
