import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderUserLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M211.28 199a30 30 0 1 0-38.56 0 38.09 38.09 0 0 0-18.52 23.5 6 6 0 0 0 4.26 7.34 6.26 6.26 0 0 0 1.54.2 6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.09A38.09 38.09 0 0 0 211.28 199ZM192 158a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm24-84h-85.52l-27.89-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.61A13.4 13.4 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86h178a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2Z" />
  </Svg>
);
const Memo = memo(SvgFolderUserLight);
export default Memo;
