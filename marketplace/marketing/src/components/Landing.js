import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.15s ease-in-out',
  },
  cardHovered: {
    transform: 'scale3d(1.05, 1.05, 1)',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  loader: {
    textAlign: 'center',
  },
}));

export default function Album({ isSignedIn, products }) {
  const classes = useStyles();
  const [hovered, setHovered] = useState({});
  const [favorite, setFavorite] = useState({});

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                {isSignedIn &&
                  <Grid item>
                    <Link to="/dashboard">
                      <Button variant="outlined" color="primary">
                        Dashboard
                      </Button>
                    </Link>
                  </Grid>
                }
              </Grid>
            </div>
          </Container>
        </div>
        {!products &&
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        }
        {products?.length &&
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    classes={{ root: hovered[product.id]?.raised ? classes.cardHovered : '' }}
                    onMouseOver={() => setHovered({ [product.id]: { raised: true, shadow: 3 } })}
                    onMouseOut={() => setHovered({ [product.id]: { raised: false, shadow: 1 } })}
                    raised={hovered[product.id]?.raised}
                    zdepth={hovered[product.id]?.shadow}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.imageUrl}
                      title="Image title"
                    />
                    <CardHeader
                      title={product.name}
                      subheader={`${product.price}$`}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        {product.description.slice(0, 200)}...
                      </Typography>
                    </CardContent>
                    {isSignedIn &&
                      <CardActions disableSpacing>
                        <IconButton aria-label="edit" component={Link} to={'/product-management'}>
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="favorite"
                          color={favorite[product.id] ? 'primary' : 'default'}
                          onClick={() => setFavorite({ ...favorite, [product.id]: !favorite[product.id] })}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </CardActions>
                    }
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        }
      </main>
    </React.Fragment>
  );
}
