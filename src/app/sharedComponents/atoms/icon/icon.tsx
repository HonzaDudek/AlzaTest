import React, { CSSProperties } from 'react';
import { baseTheme } from '../../../../utils/theme';

type IconProps = {
  name?: string;
  style?: CSSProperties;
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
  viewBox?: string;
};

export enum Icons {
  addUser = 'addUser',
  buyBasket = 'buyBasket',
  Group1843 = 'Group1843',
  Group1844 = 'Group1844',
  Group1845 = 'Group1845',
  People = 'People',
  ManBasket = 'ManBasket',
  shareIcon = 'shareIcon',
}

const getPath = (
  name: string,
  fill: string,
  stroke: string
): React.ReactFragment => {
  switch (name) {
    case Icons.buyBasket:
      return (
        <>
          <g fill='none' fillRule='evenodd'>
            <path
              fillRule='nonzero'
              d='M0 0H20V20H0z'
              transform='translate(0 1)'
            />
            <path
              fill={fill}
              d='M6.5 16c.828 0 1.5.672 1.5 1.5S7.328 19 6.5 19 5 18.328 5 17.5 5.672 16 6.5 16zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM4.374 2l.588 1.999L17.792 4c.551 0 1 .448 1 1 0 .164-.041.325-.118.47l-2.906 5.468c-.347.654-1.026 1.062-1.766 1.062L6.4 11.999l-.864 1.21c-.16.225-.108.537.117.698.084.06.186.093.29.093H17v1H5.943c-.312 0-.617-.098-.872-.28-.674-.48-.83-1.418-.348-2.092l1.229-1.72L3.626 3H1V2h3.374z'
              transform='translate(0 1)'
            />
          </g>
        </>
      );
    case Icons.Group1844:
      return (
        <>
          <defs>
            <style>{`
              .a, .b {
                fill: ${fill};
                stroke: ${stroke};
                stroke-linejoin: round;
                stroke-width: 2px;
              }

              .a {
                stroke-linecap:round;
              }
            `}</style>
          </defs>
          <g transform='translate(1 1.185)'>
            <path
              className='a'
              d='M56.21,487.766c3.209,6.9,9.9,11.954,9.9,11.954l.033,14.015H82.757v-8.61'
              transform='translate(-19.447 -466.634)'
            />
            <path
              className='a'
              d='M82.757,513.735h8.719l-.2-10.67c-.6-6.906-2.857-9.078-10.355-10.016l-5.111,4.076-4.887-5.776c-5.294-2.281-9.444-7.829-11.507-11.147'
              transform='translate(-19.447 -466.634)'
            />
            <path
              className='b'
              d='M76.95,488.876a7.775,7.775,0,1,0-7.775-7.774A7.775,7.775,0,0,0,76.95,488.876Z'
              transform='translate(-19.447 -466.634)'
            />
            <path
              className='a'
              d='M28.166,513.735H19.447l.2-10.5c.705-8.147,3.72-9.794,14.927-10.5,12.289-.776,18.435-15.323,18.435-15.323a3.484,3.484,0,0,1,5.082-1.526,3.4,3.4,0,0,1,1.331,4.315c-4.631,14.777-14.6,19.7-14.6,19.7l-.032,13.838H28.166v-8.318'
              transform='translate(-19.447 -466.634)'
            />
            <path
              className='b'
              d='M26.2,481.1a7.775,7.775,0,1,0,7.775-7.776A7.775,7.775,0,0,0,26.2,481.1Z'
              transform='translate(-19.447 -466.634)'
            />
            <line
              className='a'
              x1='1.228'
              y2='4.55'
              transform='translate(39.12 0.647)'
            />
            <line
              className='a'
              x2='0.973'
              y2='4.612'
              transform='translate(34.176)'
            />
            <line
              className='a'
              x1='3.159'
              y2='3.499'
              transform='translate(42.847 3.19)'
            />
          </g>
        </>
      );
    case Icons.Group1845:
      return (
        <>
          <defs>
            <style>{`
              .a, .b {
                fill: ${fill};
                stroke: ${stroke};
                stroke-linejoin: round;
                stroke-width: 2px;
              }

              .a {
                stroke-linecap:round;
              }
            `}</style>
          </defs>
          <g transform='translate(0.165 1.008)'>
            <path
              className='a'
              d='M368.416,356.735a40.257,40.257,0,0,0,13.611,5.992,7.071,7.071,0,0,1,4.678,3.738,5.246,5.246,0,0,1-.722,9.75,6.784,6.784,0,0,1-2.787,2.27,11.849,11.849,0,0,0,2.057,1.7c2.141,1.395,5.636,2.017,8.632,2.362l4.3,5.225,5.871-4.377c7.122,1.168,10.339,4.874,9.565,11.764l-2.981,13.653h-9.46'
              transform='translate(-348.506 -354.951)'
            />
            <path
              className='a'
              d='M404.678,396.344l-3.494,12.464H384.75l3.57-17.577c-5.143-1.689-10.431-4.659-13.821-10.016a21.241,21.241,0,0,1-1.335-2.442c-2.446.111-4.748.523-7.2.742'
              transform='translate(-348.506 -354.951)'
            />
            <path
              className='b'
              d='M359.355,357.746c1.76-2,3.878-3.068,5.969-2.734,4.324.687,6.9,7.09,5.745,14.3s-5.588,12.488-9.911,11.8a6.2,6.2,0,0,1-4.291-3.378'
              transform='translate(-348.506 -354.951)'
            />
            <path
              className='b'
              d='M392.292,370.9a9.176,9.176,0,1,0,9.175-9.174A9.175,9.175,0,0,0,392.292,370.9Z'
              transform='translate(-348.506 -354.951)'
            />
            <line
              className='b'
              y1='2.279'
              x2='7.61'
              transform='translate(1.089 18.738)'
            />
            <line
              className='b'
              x1='6.77'
              y1='4.551'
              transform='translate(3.363 2.522)'
            />
            <path
              className='b'
              d='M367.989,365.273l-3.956-.383c-1.165-.2-2.352,1.113-2.654,2.921s.4,3.435,1.561,3.629l3.829.913'
              transform='translate(-348.506 -354.951)'
            />
            <line
              className='b'
              x2='8.257'
              y2='1.382'
              transform='translate(0 11.395)'
            />
          </g>
        </>
      );
    case Icons.Group1843:
      return (
        <>
          <defs>
            <style>{`
              .a, .b {
                fill: ${fill};
                stroke: ${stroke};
                stroke-linejoin: round;
                stroke-width: 2px;
              }

              .a {
                stroke-linecap:round;
              }
            `}</style>
          </defs>
          <g transform='translate(0.999 1)'>
            <path
              className='a'
              d='M392.289,488.075c-2.335-3.714-7.66-6.308-13.857-6.308s-11.522,2.594-13.858,6.308'
              transform='translate(-358.249 -461.435)'
            />
            <path
              className='a'
              d='M379.7,473.721a8.6,8.6,0,1,0-8.6-8.6A8.6,8.6,0,0,0,379.7,473.721Z'
              transform='translate(-359.52 -456.521)'
            />
            <path
              className='a'
              d='M394.11,515.306v6.44H361.592v-6.44'
              transform='translate(-357.669 -467.964)'
            />
            <path
              className='a'
              d='M361.592,500.185V489.772H394.11v10.241'
              transform='translate(-357.669 -462.994)'
            />
            <g transform='translate(0 35.58)'>
              <path
                className='a'
                d='M359.714,512.425c2.956.23,5.886-.5,5.876-4.986-.011-4.17-2.133-4.766-3.7-4.831-1.229-.051-2.667-.836-2.05-1.907,0,0-3.018.2-3.113,4.888C356.607,511.451,358.068,512.3,359.714,512.425Z'
                transform='translate(-356.72 -500.701)'
              />
            </g>
            <g transform='translate(31.173 35.58)'>
              <path
                className='a'
                d='M401.3,512.425c-2.956.23-5.886-.5-5.875-4.986.011-4.17,2.133-4.766,3.7-4.831,1.229-.051,2.667-.836,2.05-1.907,0,0,3.018.2,3.113,4.888C404.41,511.451,402.95,512.3,401.3,512.425Z'
                transform='translate(-395.428 -500.701)'
              />
            </g>
            <path
              className='a'
              d='M385.384,489.772v6.86l-1.438-.706-1.635.8-1.633-.8-1.65.81-1.648-.81-1.5.735v-6.889'
              transform='translate(-360.45 -462.994)'
            />
          </g>
        </>
      );
    case Icons.People:
      return (
        <>
          <defs>
            <style>{`
              .a, .b {
                fill: ${fill};
                stroke: ${stroke};
                stroke-linejoin: round;
                stroke-width: 2px;
              }

              .a {
                stroke-linecap:round;
              }
            `}</style>
          </defs>
          <g transform='translate(1 1)'>
            <path
              className='a'
              d='M388.064,80.092l.03-9.432c2.59,0,3.89-1.52,3.89-3.431l.03-11.9c0-6.151-2.663-8.644-7.689-8.963l-3.94,3.328-3.939-3.328c-5.026.319-7.69,2.812-7.69,8.963l.028,11.9c0,1.911,1.348,3.431,3.869,3.431v9.432'
              transform='translate(-351.473 -30.092)'
            />
            <path
              className='a'
              d='M381.015,41.153a6.538,6.538,0,1,0-6.537-6.538A6.538,6.538,0,0,0,381.015,41.153Z'
              transform='translate(-352.103 -28.078)'
            />
            <path
              className='a'
              d='M366.658,54.7c-.853-2.178-2.666-3.157-5.362-3.326l-3.019,2.407-3.02-2.407c-3.873.24-5.922,2.158-5.922,6.892l.022,9.152c0,1.468,1.035,2.638,2.973,2.638v8.415'
              transform='translate(-349.334 -30.643)'
            />
            <path
              className='a'
              d='M366.017,80.64l.024-8.415a2.91,2.91,0,0,0,2.57-1.159'
              transform='translate(-351.171 -32.812)'
            />
            <path
              className='a'
              d='M394.723,71.067a2.907,2.907,0,0,0,2.569,1.159l.025,8.415'
              transform='translate(-354.332 -32.812)'
            />
            <path
              className='a'
              d='M358.761,46.483a5.028,5.028,0,1,0-5.029-5.028A5.026,5.026,0,0,0,358.761,46.483Z'
              transform='translate(-349.818 -28.997)'
            />
            <path
              className='a'
              d='M409.22,78.472V70.057c1.938,0,2.973-1.169,2.973-2.638l.022-9.152c0-4.734-2.049-6.652-5.922-6.892l-3.02,2.407-3.019-2.407c-2.7.168-4.51,1.148-5.362,3.326'
              transform='translate(-354.351 -30.643)'
            />
            <path
              className='a'
              d='M403.688,46.483a5.028,5.028,0,1,1,5.029-5.028A5.026,5.026,0,0,1,403.688,46.483Z'
              transform='translate(-354.766 -28.997)'
            />
          </g>
        </>
      );
    case Icons.ManBasket:
      return (
        <>
          <defs>
            <style>
              <style>{`
              .a, .b {
                fill: ${fill};
                stroke: ${stroke};
                stroke-linejoin: round;
                stroke-width: 2px;
              }

              .a {
                stroke-linecap:round;
              }
            `}</style>
            </style>
          </defs>
          <g transform='translate(1.014 1)'>
            <path
              className='a'
              d='M241.154,168.949l-4.792,16.073a2.178,2.178,0,0,0,1.9,2.228c2.332.614,2.789-1.017,2.789-1.017l5.583-11.955'
              transform='translate(-236.359 -138.787)'
            />
            <path
              className='a'
              d='M263.794,153.713l-8.483-1.876s-3.362-3.394-4.468-4.54a4.01,4.01,0,0,0-3.061-1.3c-4.144,0-5.014,4.337-5.409,7.412l-1.161,7.4a5.384,5.384,0,0,0,1.812,4.544c1.634,1.564,7.029,6.539,7.029,6.539l-1.582,9.451a2.255,2.255,0,0,0,1.52,2.576c.935.395,2.511.321,2.969-.61,1.316-2.682,3.759-12.092,3.759-12.092a2.132,2.132,0,0,0-.179-1.825l-6.205-8.268.814-6c1.363,1.216,2.877,2.412,3.651,2.421,2.216.026,8.641.275,8.641.275a2.112,2.112,0,0,0,.353-4.093Z'
              transform='translate(-237.335 -134.136)'
            />
            <path
              className='a'
              d='M258.5,136.167a5.044,5.044,0,1,1-5.043-5.044A5.043,5.043,0,0,1,258.5,136.167Z'
              transform='translate(-238.802 -131.123)'
            />
            <path
              className='b'
              d='M271.058,159.525h3.1l4,19.041h21.236l1.678-15.556H274.9'
              transform='translate(-243.389 -136.877)'
            />
            <line
              className='b'
              x2='16.359'
              transform='translate(36.839 31.408)'
            />
            <line
              className='b'
              x2='14.943'
              transform='translate(38.323 36.191)'
            />
            <path
              className='b'
              d='M279.973,183.4v3.315h20.309'
              transform='translate(-245.195 -141.716)'
            />
            <path
              className='b'
              d='M282.673,189.847a2.286,2.286,0,1,1-2.286-2.285A2.287,2.287,0,0,1,282.673,189.847Z'
              transform='translate(-244.816 -142.558)'
            />
            <path
              className='b'
              d='M307.146,189.847a2.286,2.286,0,1,1-2.286-2.285A2.287,2.287,0,0,1,307.146,189.847Z'
              transform='translate(-249.774 -142.558)'
            />
          </g>
        </>
      );
    case Icons.addUser:
      return (
        <>
          <defs>
            <style>{`.addUser{fill:${fill}; stroke: none;}`}</style>
          </defs>
          <path
            className='addUser'
            d='M11.5,10a3,3,0,1,0-3-3A3,3,0,0,0,11.5,10ZM4.75,8.5V6.25H3.25V8.5H1V10H3.25v2.25h1.5V10H7V8.5Zm6.75,3c-2,0-6,1.005-6,3V16h12V14.5C17.5,12.505,13.5,11.5,11.5,11.5Z'
            transform='translate(-0.25 -1)'
          />
        </>
      );
    case Icons.shareIcon:
      return (
        <path
          className='c'
          fill='#535252'
          d='M14.667,13.309a2.226,2.226,0,0,0-1.524.618L7.6,10.594a2.711,2.711,0,0,0,.07-.562A2.711,2.711,0,0,0,7.6,9.47l5.483-3.3a2.284,2.284,0,0,0,1.587.651A2.369,2.369,0,0,0,17,4.41a2.335,2.335,0,1,0-4.667,0,2.711,2.711,0,0,0,.07.562L6.92,8.273a2.284,2.284,0,0,0-1.587-.651,2.411,2.411,0,0,0,0,4.819,2.284,2.284,0,0,0,1.587-.651l5.538,3.341a2.336,2.336,0,0,0-.062.522,2.272,2.272,0,1,0,2.271-2.345Z'
        />
      );
    default:
      return <path />;
  }
};

const Icon: React.FunctionComponent<IconProps> = ({
  name = '',
  style = {},
  fill = baseTheme.colors.white,
  stroke = baseTheme.sectionColors.blueAlza,
  width = '24px',
  className = '',
  height = '24px',
  viewBox = '0 0 24 24',
}: IconProps) => {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      {getPath(name, fill, stroke)}
    </svg>
  );
};
export default Icon;
