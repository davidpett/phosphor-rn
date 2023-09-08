import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoinThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M205.79 67.42C185.9 57.48 158.27 52 128 52s-57.9 5.48-77.79 15.42C31 77 20 90.35 20 104v48c0 13.65 11 27 30.21 36.58C70.1 198.52 97.73 204 128 204s57.9-5.48 77.79-15.42C225 179 236 165.65 236 152v-48c0-13.65-11-27-30.21-36.58ZM128 60c61.77 0 100 22.84 100 44s-38.23 44-100 44-100-22.84-100-44 38.23-44 100-44Zm-4 96v40c-22-.35-40.94-3.65-56-8.71v-39.64c16.23 5.1 35.44 7.97 56 8.35Zm8 0c20.56-.33 39.77-3.2 56-8.3v39.59c-15.06 5.06-33.95 8.36-56 8.71Zm-104-4v-28.08c5.15 6.19 12.67 11.89 22.21 16.66 3.08 1.54 6.36 2.95 9.79 4.28v39.38c-20.51-8.57-32-20.65-32-32.24Zm200 0c0 11.59-11.49 23.67-32 32.24v-39.38c3.43-1.33 6.71-2.74 9.79-4.28 9.54-4.77 17.06-10.47 22.21-16.66Z" />
  </Svg>
);
const Memo = memo(SvgCoinThin);
export default Memo;
