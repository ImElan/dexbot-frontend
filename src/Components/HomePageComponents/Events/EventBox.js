import React,{Component} from 'react';
import eventSprite from '../../../assets/events_sprite.svg'; 

class EventBox extends Component {
      render() {
            const {side} = this.props;
            let style = {};
            if(side === 'left') {
                  style = { borderLeft:'5px solid #A8D4FF' }
            } else {
                  style = { borderRight: '5px solid #A8D4FF'}
            }
            const {event,icon} = this.props;
            return(
                  <div className='events__eventBox' style={style}>
                        <svg className='events__eventBox--icon'>
                              <use xlinkHref={`${eventSprite}#${icon}`}/>
                        </svg>
                        <p className='events__eventBox--name'>{event}</p>
                  </div>
            )
      }
}

export default EventBox;