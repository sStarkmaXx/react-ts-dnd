import reRender from ".";

const Mystate = {
  bubblePosition: {
    bubbleX: 5,
    bubbleY: 0
  },
  moveBubble(x, y) {
    this.bubblePosition.bubbleX = x;
    this.bubblePosition.bubbleY = y;
    reRender();
  }
};

export default Mystate;
