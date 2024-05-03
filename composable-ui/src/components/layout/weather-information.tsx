import { Box, BoxProps, Text } from '@chakra-ui/react'
// const appID = 'cfcd7116c4e223146031a21b4a8cac01'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=${appID}&units=metric`)
// response.json()

export const WeatherInformation = (props: { rootProps?: BoxProps }) => {
  return (
    <Box display={'flex'} {...props.rootProps}>
      <Text textStyle={'Desktop/Body-S'} fontWeight={'700'}>
        {/* Weather Placeholder */}
      </Text>
    </Box>
  )
}
