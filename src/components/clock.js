import React from "react";
import './clock.scss'
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: props.date ? props.date : new Date() };
    }

    render(){
        return(
            <div className="clock">
            <h2>{this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    tick () {
        this.setState({
            date: new Date()
        });
    }

}
export default Clock;