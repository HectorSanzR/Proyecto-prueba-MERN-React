import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({children, title=''}) => {
  return (
        <div className="container">

            <Grid item
                    className='box-shadow'
                    xs={4}
                    sx={{
                      width: " 100%",
                      height:'100px',
                      padding:5,
                      borderRadius:2}}>
                        <Typography variant='h5' sx={{mb:1}}>{title}</Typography>

                {children}
            </Grid>
      </div>
  )
}
