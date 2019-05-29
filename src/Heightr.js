import React from 'react';
import HeightrElement from './HeightrElement';

export default class Heightr extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
		this.getSizeHandler = this.getSizeHandler.bind(this);
	}

	getSizeHandler(height) {
		if (this.state.height < height) {
			this.setState({
				height: height
			});
		}
	}

	render() {
		return (
			<div className="heightr">
				<HeightrElement height={this.state.height} getSizeHandler={this.getSizeHandler}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </HeightrElement>
				<HeightrElement height={this.state.height} getSizeHandler={this.getSizeHandler}>
					Sdaasdasdadsasdas d asd asd a.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna est, suscipit nec augue ac, malesuada maximus est. Donec neque nunc, ultricies ut lectus id, porta consequat lorem. Sed ac velit feugiat, lobortis justo a, efficitur metus. Curabitur et pretium lacus, sit amet dignissim ante. Aliquam maximus tincidunt risus ac pretium. Fusce sed tellus efficitur, ornare odio eu, elementum ante. Pellentesque semper non sem eget consequat. Maecenas vehicula quam in pulvinar posuere. Nullam ut congue augue, quis ornare enim. Donec sodales erat lectus, in suscipit diam feugiat ut. Nunc interdum lacinia metus, a tincidunt arcu consequat feugiat. Cras consequat elit sed mauris iaculis, et tristique tellus facilisis. Praesent ut mi sit amet odio suscipit eleifend a nec diam. Sed sodales orci neque, at placerat diam vehicula ut. Vestibulum hendrerit et arcu et te
                </HeightrElement>

			</div>);
	}
}

