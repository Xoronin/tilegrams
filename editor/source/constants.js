import dat from 'dat-gui'

const canvasDimensions = {
  width: 960 * 2,
  height: 720 * 2,
}

/** dat.gui for realtime updating of properties */
class Settings {
  constructor() {
    this.tileScale = 0.95
    this.hueScalar = 5
    this.displayMap = true
    this.displayGrid = true
  }
}
const settings = new Settings()
const gui = new dat.GUI()
gui.add(settings, 'tileScale', 0.9, 1.0)
gui.add(settings, 'hueScalar', 1, 10)
gui.add(settings, 'displayMap')
gui.add(settings, 'displayGrid')
dat.GUI.toggleHide()

module.exports = {
  settings,
  canvasDimensions,
  tileEdgeRange: {
    default: 20,
    min: 10,
    max: 40,
  },
  selectedTileBorderColor: '#333333',
}