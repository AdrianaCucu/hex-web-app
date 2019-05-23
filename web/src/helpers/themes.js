import { dark as defaultDark, grommet as defaultLight } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customShared = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
  button: {
    border: {
      radius: '4px',
    },
  },
};

const lightBrand = '#4BFFA5'; // bright green
const lightBackground = '#FFFFFF'; // white
const darkBrand = '#FF6BCD'; // bright pink
const darkBackground = '#1B1464'; // dark blue

/*
    Source for generating custom color combinations below:
    https://grommet-nextjs.herokuapp.com/theme
*/

const customLight = {
  ...customShared,
  global: {
      colors: {
          brand: lightBrand,
          background: lightBackground
      }
  },
};

const customDark = {
  ...customShared,
  global: {
    colors: {
      brand: darkBrand,
      border: {
        dark: '#ebebeb',
        light: '#444444',
      },
      background: darkBackground,
      placeholder: 'rgba(235, 235, 235, 0.5)',
      control: {
        dark: darkBrand,
        light: '#009432',
      },
      'accent-1': '#ab009a',
      'accent-2': '#78006c',
      'accent-3': '#ffbff9',
      'accent-4': '#ff80f2',
      'neutral-1': '#bbff00',
      'neutral-2': '#83b300',
      'neutral-3': '#eeffbf',
      'neutral-4': '#ddff80',
      'neutral-5': '#undefined',
    },
  },
  anchor: {
    color: {
      dark: darkBrand,
      light: '#009432',
    },
  },
};

console.log('customDark: ', customDark);

const dark = deepMerge(defaultDark, customDark);
const light = deepMerge(defaultLight, customLight);

export { dark, light };
