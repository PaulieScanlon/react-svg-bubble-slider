import React from 'react'
import { SvgIcon } from '../components/SvgIcon'

import { IconSetOptions } from '../components/types'

import { Flex, Box, Text } from 'theme-ui'

const IconCount = ({ name, count, iconSet = IconSetOptions.chrisGannon }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: '-18px',
          bottom: '-4px',
        }}
      >
        <Flex
          className="count-background"
          sx={{
            alignItems: 'center',
            borderColor: 'accent',
            borderStyle: 'solid',
            borderWidth: '6px',
            backgroundColor: 'white',
            borderRadius: '50%',
            height: 34,
            justifyContent: 'center',
            textAlign: 'center',
            width: 34,
          }}
        >
          <Text
            className="count-text"
            as="small"
            variant="small"
            sx={{ m: 0, textAlign: 'center' }}
          >
            {count}
          </Text>
        </Flex>
      </Box>
      <Flex
        className="icon-background"
        sx={{
          alignItems: 'center',
          p: 2,
          backgroundColor: 'accent',
          borderRadius: '50%',
        }}
      >
        <SvgIcon name={name} size={40} iconSet={iconSet} />
      </Flex>
    </Flex>
  )
}

export default IconCount

{
  /* <SvgIcon name="angry" />
   */
}
