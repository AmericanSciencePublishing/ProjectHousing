import React, { Component } from 'react';

export default class Carouse extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 1, offset: -this.props.width };
    this.renderChildren = this.renderChildren.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  renderChildren() {
    const { children, width, height } = this.props;
    const childStyle = {
      width: width,
      height: height
    };

    if (!children) {
      return;
    }

    const appendedChildren = [
      children[children.length - 1],
      ...children,
      children[0]
    ];

    return React.Children.map(appendedChildren, (child, index) => {
      const childClone = React.cloneElement(child, { style: childStyle });

      return (
        <div
          style={{
            display: 'inline-block'
          }}
          key={index}
        >
          {childClone}
        </div>
      );
    });
  }

  setIndex(index) {
    let nextIndex = index;
    const len = this.props.children.length;
    const { width } = this.props;

    this.setState({ currentIndex: nextIndex });

    const currentOffset = this.state.offset;
    const nextOffset = -nextIndex * width;

    let start = null;

    const move = timestamp => {
      if (!start) {
        start = timestamp;
      }

      const progress = timestamp - start;

      this.setState({
        offset: currentOffset + (nextOffset - currentOffset) * progress / 200
      });

      if (progress < 200) {
        requestAnimationFrame(move);
      } else {
        if (nextIndex <= 0) {
          nextIndex = len;
        } else if (nextIndex >= len + 1) {
          nextIndex = 1;
        }

        this.setState({ currentIndex: nextIndex, offset: -nextIndex * width });
      }
    };

    requestAnimationFrame(move);
  }

  render() {
    const { width, height } = this.props;
    const { currentIndex, offset } = this.state;

    const frameStyle = {
      width: width,
      height: height,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      position: 'relative'
    };

    const imageRowStyle = {
      marginLeft: offset
    };

    const buttonStyle = {
      position: 'absolute',
      top: '40%',
      bottom: '40%',
      width: '10%',
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      outline: 'none',
      border: 'none'
    };

    const leftButtonStyle = {
      ...buttonStyle,
      left: 0
    };

    const rightButtonStyle = {
      ...buttonStyle,
      right: 0
    };

    return (
      <div className="carousel">
        <div className="frame" style={frameStyle}>
          <button
            onClick={() => this.setIndex(currentIndex - 1)}
            style={leftButtonStyle}
          >
            &lt;
          </button>
          <div style={imageRowStyle}>{this.renderChildren()}</div>
          <button
            onClick={() => this.setIndex(currentIndex + 1)}
            style={rightButtonStyle}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}
