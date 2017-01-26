
module.exports = function() {

	var rover = {
		x: 0,
		y: 0,
		direction: 'E',

		forward: function() {
			if (this.direction === 'E') {
				this.x = this.x +1;
				this.y = this.y;
			} 
			else if (this.direction === 'S') {
				this.x = this.x;
				this.y = this.y -1;
			}
			else if (this.direction === 'W') {
				this.x = this.x -1;
				this.y = this.y;
			}
			else if (this.direction === 'N') {
				this.x = this.x;
				this.y = this.y +1;
			}
		},

		backward: function() {
			if (this.direction === 'E') {
				this.x = this.x -1;
				this.y = this.y;
			}
			else if (this.direction === 'S') {
				this.x = this.x;
				this.y = this.y +1;
			}
			else if (this.direction === 'W') {
				this.x = this.x +1;
				this.y = this.y;
			}
			else if (this.direction === 'N') {
				this.x = this.x;
				this.y = this.y -1;
			}
		},

		right: function() {
			if (this.direction === 'E') {
				this.direction = 'S';
			}
			else if (this.direction === 'S') {
				this.direction = 'W';
			}
			else if (this.direction === 'W') {
				this.direction = 'N';
			}
			else if (this.direction === 'N') {
				this.direction = 'E';
			}
		}

	}

	return rover;
}