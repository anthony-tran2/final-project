import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SmallEventCard from '../components/small-event-card';

const useStyles = makeStyles(theme => (
  {
    heading: {
      fontSize: '2.5rem',
      fontWeight: '300',
      marginTop: '0.35em'
    },

    cardgrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },

    card: {
      height: '11rem',
      display: 'flex',
      flexDirection: 'column'
    },

    cardContent: {
      flexGrow: 1,
      maxHeight: '8rem'
    },

    ellipsis: {
      color: theme.palette.primary.main,
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.00938rem'
    }
  }
));

export default function Home(props) {
  const [eventList, setEventList] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(result => setEventList(result))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <main>
      <Container maxWidth="lg" >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.heading}>
          Your Events
        </Typography>
        <Grid container justifyContent='center'>
          <a>
            <Button variant="contained" color="primary">
              CREATE AN EVENT
            </Button>
          </a>
        </Grid>
          {eventList &&
            <Grid container spacing={4} className={classes.heading}>
              {eventList.map(event => <SmallEventCard key={event.eventId} title={event.title} description={event.description} />)}
            </Grid>
          }
      </Container>
    </main>
    </>
  );
}
