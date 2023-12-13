if (deathController.getDeath() === 1) {
    const currentIndex = GameEnv.levels.indexOf(currentLevel);
    this.transitionToLevel(GameEnv.levels[currentIndex]);
    deathController.setDeath(0);
}
let death = 0;
const deathController = {
getDeath: () => death,
setDeath: (value) => { death = value; }
};
export default deathController;