// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import format from 'date-fns/format'
import { Bar } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js'



interface BarProp {
  yellow: string
  labelColor: string
  borderColor: string
}

const ChartjsBarChart = (props: BarProp) => {
  // ** Props
  const { yellow, labelColor, borderColor } = props

  // ** States

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }

  const data: ChartData<'bar'> = {
    labels: [
      '7/12',
      '8/12',
      '9/12',
      '10/12',
      '11/12',
      '12/12',
      '13/12',
      '14/12',
      '15/12',
      '16/12',
      '17/12',
      '18/12',
      '19/12'
    ],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: yellow,
        borderColor: 'transparent',
        borderRadius: { topRight: 15, topLeft: 15 },
        data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190]
      }
    ]
  }

  const CustomInput = forwardRef(({ ...props }: any, ref) => {
    const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return (
      <TextField
        {...props}
        size='small'
        value={value}
        inputRef={ref}
        
      />
    )
  })

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    // setStartDate(start)
    // setEndDate(end)
  }

  return (
    <Card>
      <CardHeader
        title='Latest Statistics'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
    
      />
      <CardContent>
        <Bar data={data} height={400} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartjsBarChart
