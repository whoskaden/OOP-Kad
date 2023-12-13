import Character from './Character.js';
import GameEnv from './GameEnv.js';
export class Enemy extends Character {
    // constructors sets up Character object
    constructor(canvas, image, speedRatio, enemyData){
        super(canvas,
            image,
            speedRatio,
            enemyData.width,
            enemyData.height,
        );
        // Player Data is required for Animations
        this.enemyData = enemyData;
        this.x = 0.6 * GameEnv.innerWidth;
    }
    update() {
        // Check if the enemy is at the left or right boundary
        if (this.x <= 0 || this.x + this.width >= GameEnv.innerWidth) {
            // Change direction by reversing the speed
            this.speed = -this.speed;
        }
        //Initially get the enemy moving
        this.x += this.speed;
    }
}
// Enemy collision
if (this.collisionData.touchPoints.other.id === "enemy") {
    // Collision with the left side of the Enemy
    if (this.collisionData.touchPoints.other.left) {
        // Kill Player (Reset Game)
    }
    // Collision with the right side of the Enemy
    if (this.collisionData.touchPoints.other.right) {
        deathController.setDeath(1);
        // Kill Player (Reset Game)
    }
    // Collision with the top of the Enemy
    if (this.collisionData.touchPoints.other.ontop) {
        // Kill Goomba
        // Make Mario Bounce
    }
  }
  
export default Enemy
