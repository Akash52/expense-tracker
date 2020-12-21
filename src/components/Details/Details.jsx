import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughunt } from 'react-chartjs-2'
import useStyles from './styles'

const Details = ({ title }) => {
  console.log(title)
  const classes = useStyles()
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        Hello World
      </CardContent>
    </Card>
  )
}

export default Details
