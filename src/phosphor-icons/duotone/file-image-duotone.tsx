import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileImageDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m104 152 48 72H24l36-56 16.36 25.45Zm48-120v56h56Z"
      opacity={0.2}
    />
    <Path d="M110.66 147.56a8 8 0 0 0-13.32 0l-20.85 31.29-9.76-15.18a8 8 0 0 0-13.46 0l-36 56A8 8 0 0 0 24 232h128a8 8 0 0 0 6.66-12.44ZM38.65 216 60 182.79l9.63 15a8 8 0 0 0 6.67 3.67 7.91 7.91 0 0 0 6.7-3.57l21-31.47L137.05 216Zm175-133.66-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v96a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160Z" />
  </Svg>
);
const Memo = memo(SvgFileImageDuotone);
export default Memo;
