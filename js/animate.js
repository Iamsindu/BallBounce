function Animate() {
	var balls = [];
			//or
	// this.balls = []; 

	this.start = function(noOfBalls) {
		for (i = 1; i <= noOfBalls; i++) {
			var ball = new Ball();
            ball.create(noOfBalls);
            
			var size = parseInt(Math.random() * 100);
            ball.setDimension(size, size);
			
			//
			var position = new Position(window.innerWidth, 0);
			position.create();
			ball.setPosition(position.x, position.y);
			balls.push(ball);
			//or
			// this.balls.push(ball);
			
			document.body.appendChild(ball.ball);


			// moving the ball downwards with certain interval
			var timeout = Math.random() * 5 * 1000;
			setTimeout(
				(function() {
					var currentBall = ball;
					return function() {
						currentBall.move();
					};
				})(),
				timeout
			);
		}
	};

	//removing ball when it reaches to the lowest height of frame
	this.removeBall = function () {
		setInterval(() => {
		  this.ball.filter(function (item) {
			return !item.isDeleted;
		  }).forEach(function (ball) {
			var pos = ball.getPosition();
	
			if (pos.y > 1000) {
			  ball.remove();
			}
		  });
		}, 1000 / 60);
	};

}

var animate = new Animate();
animate.start(300);
animate.removeBall();