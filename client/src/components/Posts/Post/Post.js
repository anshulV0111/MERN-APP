/* eslint-disable react/prop-types */
import {
  Button, Card, CardActions, CardContent, CardMedia, Typography
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import moment from 'moment'
import useStyles from './styles'

const Post = ({ post }) => {
  const classes = useStyles()
  return (
    <Card className={ classes.card }>
      <CardMedia className={ classes.media } image={ post.selectedFile } title={ post.selectedFile } />
      <div className={ classes.overlay }>
        <Typography variant='h6'>
          {post.creator}
        </Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={ classes.overlay2 }>
        <Button style={ { color: 'white' } } size='small' onClick={ () => {} }>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={ classes.details }>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${ tag }`)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={ classes.cardActions }>
        <Button size='small' color='primary' onClick={ () => {} }>
          <ThumbUpIcon fontSize='small' />
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={ () => {} }>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
