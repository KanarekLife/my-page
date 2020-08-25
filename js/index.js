console.log('#    #                                           #                       \n' +
    '#   #    ##   #    #   ##   #####  ###### #    # #       # ###### ###### \n' +
    '#  #    #  #  ##   #  #  #  #    # #      #   #  #       # #      #      \n' +
    '###    #    # # #  # #    # #    # #####  ####   #       # #####  #####  \n' +
    '#  #   ###### #  # # ###### #####  #      #  #   #       # #      #      \n' +
    '#   #  #    # #   ## #    # #   #  #      #   #  #       # #      #      \n' +
    '#    # #    # #    # #    # #    # ###### #    # ####### # #      ###### ');
console.log('Welcome to my page! Feel free to browse through the source code:');
console.log('https://github.com/KanarekLife/my-page');

document.querySelector('.year').textContent = new Date().getFullYear().toString();
const waves = [
    'M0,224L360,320L720,192L1080,192L1440,64L1440,0L1080,0L720,0L360,0L0,0Z',
    'M0,256L288,64L576,96L864,0L1152,96L1440,256L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,160L288,64L576,0L864,64L1152,0L1440,224L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,64L288,96L576,288L864,96L1152,96L1440,160L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,32L288,0L576,64L864,288L1152,0L1440,320L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,192L288,224L576,192L864,64L1152,192L1440,288L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,320L288,64L576,288L864,256L1152,0L1440,32L1440,0L1152,0L864,0L576,0L288,0L0,0Z',
    'M0,256L288,128L576,224L864,192L1152,160L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z'
];
let i = 0;
setInterval(() => {
    if(i === waves.length)
        i = 0;
    document.querySelector('#waves > path').setAttribute('d', waves[i]);
    i++;
}, 5000);
