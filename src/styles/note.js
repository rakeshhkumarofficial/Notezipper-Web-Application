import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    color: '#fff',
    boxShadow: '0 3px 6px #00000029'
  },
  iconBtn: {
    position: 'absolute',
    top: '.4em',
    color: '#fff',
    padding: '.2em',
    opacity: '.6',
    '&.Mui-checked': {
      color: 'inherit'
    }
  },
  title: {
    fontSize: '1.2em',
    color: 'inherit',
    fontWeight: 500,
    marginLeft: '2em',
    marginRight: '4em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer'
  },
  noteDescription: {
    height: '5.7em',
    overflow: 'hidden'
  },
  noteDate: {
    fontWeight: 500,
    opacity: '.6',
    margin: '1em 0 -.6em'
  },
  completed: {
    textDecoration: 'line-through'
  }
})