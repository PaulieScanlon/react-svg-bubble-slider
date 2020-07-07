const fontFamily =
  '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif'

export default {
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
  colors: {
    text: '#282a36',
    background: '#ffffff',
    primary: '#FF69B4',
    secondary: '#1EA7FD',
    muted: '#8394ca',
    highlight: '#50fa7b',
    gray: '#F2F2F2',
    darkGray: '#999999',
    accent: '#ffd5ea',
    mutedAccent: '#d1d8ec',
    darken: '#323442',
    emoji: '#ffcb4c',
  },

  shadows: [
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  ],

  buttons: {
    primary: {
      cursor: 'pointer',
      fontWeight: 'bold',
      minWidth: 120,
      ':disabled': {
        color: 'primary',
        backgroundColor: 'accent',
        cursor: 'not-allowed',
      },
      ':focus': {
        outlineColor: 'secondary',
      },
    },
    ghost: {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'secondary',
      minWidth: 120,
      ':disabled': {
        color: 'darkGray',
        backgroundColor: 'gray',
        cursor: 'not-allowed',
      },
      ':focus': {
        outlineColor: 'emoji',
      },
    },
  },

  text: {
    small: {
      textAlign: 'center',
      fontWeight: 'bold',
      mt: 2,
      color: 'primary',
    },
  },

  lineHeights: {
    body: 'normal',
    heading: 'normal',
  },

  fontWeights: {
    body: 400,
    heading: 800,
  },
  styles: {
    a: {
      fontWeight: 'bold',
      color: 'secondary',
      ':focus': {
        outlineColor: 'primary',
      },
    },
    hr: {
      my: 4,
    },
  },
}
