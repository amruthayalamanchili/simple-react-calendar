import React from 'react'
import classnames from 'classnames'

import isWeekend from 'date-fns/src/is_weekend'
import isSameDay from 'date-fns/src/is_same_day'
import formatDate from 'date-fns/src/format'
import isSameMonth from 'date-fns/src/is_same_month'

export default class Day extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.object,
    date: React.PropTypes.instanceOf(Date).isRequired,
    onClick: React.PropTypes.func,
    onMouseMove: React.PropTypes.func,
    today: React.PropTypes.instanceOf(Date).isRequired
  }

  static defaultProps = {
    data: {}
  }

  _onClick = (e) => {
    e.preventDefault()
    const {date, onClick} = this.props
    if (onClick) {
      onClick(date)
    }
  }

  _onMouseMove = (e) => {
    e.preventDefault()
    const {date, onMouseMove} = this.props
    if (onMouseMove) {
      onMouseMove(date)
    }
  }

  render() {
    const {date} = this.props
    const classes = classnames(['day', this.props.className])
    return (
      <div
        className={classes}
        onClick={this._onClick}
        onMouseMove={this._onMouseMove}
      >
        {formatDate(this.props.date, 'D')}
      </div>
    )
  }
}
