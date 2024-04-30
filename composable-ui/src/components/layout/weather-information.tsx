import { Box, BoxProps, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
const appID = 'cfcd7116c4e223146031a21b4a8cac01'

interface WeatherData {
  name: string
  main: {
    temp: number
  }
}

export const WeatherInformation = (props: { rootProps?: BoxProps }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=${appID}&units=metric`
    )
    const data = await response.json()
    setWeatherData(data)
  }

  useEffect(() => {
    getWeatherData()
  }, [])
  if (!weatherData) return null
  return (
    <Box display={'flex'} {...props.rootProps}>
      <Text textStyle={'Desktop/Body-S'} fontWeight={'700'}>
        {weatherData.name} - {weatherData.main.temp}°C
      </Text>
    </Box>
  )
}
