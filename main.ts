// Mining Game - Main Entry Point
// A top-down mining game for MakeCode Arcade

// Player sprite
let miner: Sprite = null

// Player level (starts at 1)
let level = 1

// Current level number (for level transitions)
let currentLevelNum = 1

// Initialize the game
function initGame() {
    // Set up the tilemap
    tiles.setCurrentTilemap(levels.level1)

    // Create the miner sprite
    miner = sprites.create(assets.miner, SpriteKind.Player)

    // Place player on start zone
    tiles.placeOnRandomTile(miner, assets.tile_startZone)

    // Set up player movement
    controller.moveSprite(miner, 80, 80)

    // Camera follows player
    scene.cameraFollowSprite(miner)

    // Initialize score (XP)
    info.setScore(0)

    // Reset level
    level = 1
    currentLevelNum = 1
}

// Mining logic - mines the tile at the given location
function mineTileAt(loc: tiles.Location) {
    // Stone: 1 hit, +1 XP -> emptyGround
    if (tiles.tileAtLocationEquals(loc, assets.tile_stone)) {
        tiles.setTileAt(loc, assets.tile_emptyGround)
        info.changeScoreBy(1)
    }
    // Gravel: first hit, +1 XP -> gravelCracked
    else if (tiles.tileAtLocationEquals(loc, assets.tile_gravel)) {
        tiles.setTileAt(loc, assets.tile_gravelCracked)
        info.changeScoreBy(1)
    }
    // Gravel cracked: second hit, +1 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, assets.tile_gravelCracked)) {
        tiles.setTileAt(loc, assets.tile_emptyGround)
        info.changeScoreBy(1)
    }
    // Gold ore: 1 hit, +10 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, assets.tile_oreGold)) {
        tiles.setTileAt(loc, assets.tile_emptyGround)
        info.changeScoreBy(10)
    }
    // Diamond ore: 1 hit, +5 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, assets.tile_oreDiamond)) {
        tiles.setTileAt(loc, assets.tile_emptyGround)
        info.changeScoreBy(5)
    }
    // Coal ore: 1 hit, +5 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, assets.tile_oreCoal)) {
        tiles.setTileAt(loc, assets.tile_emptyGround)
        info.changeScoreBy(5)
    }
    // Non-mineable tiles: do nothing (startZone, bedrockWall, emptyGround, exits)

    // Check for level up after mining
    checkLevelUp()
}

// Check if player has enough XP to level up
function checkLevelUp() {
    // Level up threshold: level * 50 XP
    // Support multiple level-ups if XP jumps past thresholds
    while (info.score() >= level * 50) {
        level += 1
        onLevelUp(level)
    }
}

// Handle level up event
function onLevelUp(newLevel: number) {
    // Show level up message
    game.splash("Level " + newLevel + "!")

    // At level 2, unlock all exit tiles
    if (newLevel == 2) {
        for (let loc of tiles.getTilesByType(assets.tile_exitLocked)) {
            tiles.setTileAt(loc, assets.tile_exitOpen)
        }
        game.splash("Exit unlocked!")
    }
}

// Load the next level
function loadNextLevel() {
    currentLevelNum += 1

    if (currentLevelNum == 2) {
        tiles.setCurrentTilemap(levels.level2)
    } else {
        // For levels beyond 2, loop back or show victory
        game.splash("You Win!")
        game.over(true)
        return
    }

    // Place player on start zone of new level
    tiles.placeOnRandomTile(miner, assets.tile_startZone)
}

// A button handler - mine the tile under the player
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Get the tile location from sprite's current position
    let col = Math.floor(miner.x / 16)
    let row = Math.floor(miner.y / 16)
    let loc = tiles.getTileLocation(col, row)
    mineTileAt(loc)
})

// Exit tile overlap handler - load next level when stepping on open exit
scene.onOverlapTile(SpriteKind.Player, assets.tile_exitOpen, function (sprite, loc) {
    game.splash("Next level!")
    loadNextLevel()
})

// Start the game
initGame()
