// Player sprite
let miner: Sprite = null
// Player level (starts at 1)
let playerLevel = 1
// Current level number
let currentLevelNum = 1

// A button - mine tile
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let col = Math.floor(miner.x / 16)
    let row = Math.floor(miner.y / 16)
    let loc = tiles.getTileLocation(col, row)

    if (tiles.tileAtLocationEquals(loc, myTiles.tile3)) {
        tiles.setTileAt(loc, myTiles.tile0)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, myTiles.tile4)) {
        tiles.setTileAt(loc, myTiles.tile5)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, myTiles.tile5)) {
        tiles.setTileAt(loc, myTiles.tile0)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, myTiles.tile6)) {
        tiles.setTileAt(loc, myTiles.tile0)
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(loc, myTiles.tile7)) {
        tiles.setTileAt(loc, myTiles.tile0)
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(loc, myTiles.tile8)) {
        tiles.setTileAt(loc, myTiles.tile0)
        info.changeScoreBy(5)
    }

    // Check level up
    while (info.score() >= playerLevel * 50) {
        playerLevel += 1
        game.splash("Level " + playerLevel + "!")
        if (playerLevel == 2) {
            for (let exitLoc of tiles.getTilesByType(myTiles.tile9)) {
                tiles.setTileAt(exitLoc, myTiles.tile10)
            }
            game.splash("Exit unlocked!")
        }
    }
})

// Exit overlap
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, loc) {
    game.splash("Next level!")
    currentLevelNum += 1
    if (currentLevelNum == 2) {
        tiles.setCurrentTilemap(levels.level2)
        tiles.placeOnRandomTile(miner, myTiles.tile1)
    } else {
        game.splash("You Win!")
        game.over(true)
    }
})

// Start game
tiles.setCurrentTilemap(levels.level1)
miner = sprites.create(myImages.miner, SpriteKind.Player)
tiles.placeOnRandomTile(miner, myTiles.tile1)
controller.moveSprite(miner, 80, 80)
scene.cameraFollowSprite(miner)
info.setScore(0)
