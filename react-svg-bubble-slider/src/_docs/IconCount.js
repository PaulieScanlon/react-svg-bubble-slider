import React from 'react'
import { SvgIcon } from '../components/SvgIcon'

import { Flex, Box, Text } from 'theme-ui'

const IconCount = ({ name, count }) => {
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
          <Text as="small" variant="small" sx={{ m: 0, textAlign: 'center' }}>
            {count}
          </Text>
        </Flex>
      </Box>
      <Flex
        sx={{
          alignItems: 'center',
          p: 2,
          backgroundColor: 'accent',
          borderRadius: '50%',
        }}
      >
        <SvgIcon name={name} size={40} />
      </Flex>
    </Flex>
  )
}

export default IconCount

{
  /* <SvgIcon name="angry" />
   */
}
