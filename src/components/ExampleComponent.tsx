import React from 'react'
import { Box, Typography } from '@mui/material'

interface ExampleComponentProps {
  title: string
  children: React.ReactNode
}

export function ExampleComponent({ title, children }: ExampleComponentProps) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='h5' component='h2'>
        {title}
      </Typography>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Box>
  )
}
