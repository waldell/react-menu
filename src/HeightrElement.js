import React from 'react';

export default class HeightrElement extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
    }

    componentDidMount() {
        this.props.getSizeHandler(this.element.clientHeight);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) { }

    render() {
        //console.log('render ' + this.props.height)
        return (
            <section
                // style={{
                //     minHeight: this.props.height
                // }}
                ref={ (elm) => this.element = elm} 
                className="heightr-element">{this.props.children}</section>
        );
    }
}
