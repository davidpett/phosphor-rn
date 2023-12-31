import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCornersOutDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 48v40l-40-40ZM48 208h40l-40-40Zm160 0v-40l-40 40ZM48 88l40-40H48Z"
      opacity={0.2}
    />
    <Path d="M208 40h-40a8 8 0 0 0-5.66 13.66l40 40A8 8 0 0 0 216 88V48a8 8 0 0 0-8-8Zm-8 28.69L187.31 56H200ZM53.66 162.34A8 8 0 0 0 40 168v40a8 8 0 0 0 8 8h40a8 8 0 0 0 5.66-13.66ZM56 200v-12.69L68.69 200Zm155.06-39.39a8 8 0 0 0-8.72 1.73l-40 40A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39ZM200 200h-12.69L200 187.31ZM88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66l40-40A8 8 0 0 0 88 40ZM56 68.69V56h12.69Z" />
  </Svg>
);
const Memo = memo(SvgCornersOutDuotone);
export default Memo;
