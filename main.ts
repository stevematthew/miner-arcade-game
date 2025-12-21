// Mining Game - Main Entry Point
// A top-down mining game for MakeCode Arcade

// Tile images
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile_emptyGround = img`
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
    `
    //% blockIdentity=images._tile
    export const tile_startZone = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
    //% blockIdentity=images._tile
    export const tile_bedrockWall = img`
        c c c c b c c c c c c b c c c c
        c c b c c c c c c b c c c c c c
        c c c c c c b c c c c c c c b c
        c b c c c c c c c c c c c c c c
        c c c c c c c c c b c c c b c c
        c c c c b c c c c c c c c c c c
        c c c c c c c c c c c c b c c c
        c b c c c c c b c c c c c c c c
        c c c c c c c c c c c b c c c b
        c c c b c c c c c c c c c c c c
        c c c c c c c c b c c c c c c c
        c c c c c c c c c c c c c b c c
        c b c c c c b c c c c c c c c c
        c c c c c c c c c c b c c c c c
        c c c c c c c c c c c c c c b c
        c c b c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile_stone = img`
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b c b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b c b b b b b b b b b b b
        b b b b b b b b b b b c b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b c b b b b b b b b b b b b
        b b b b b b b b c b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b c b b b
        b b c b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b c b b b b b b b b
    `
    //% blockIdentity=images._tile
    export const tile_gravel = img`
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d d e d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d e d d d d d d d d d d d
        d d d d d d d d d d d e d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d e d d d d d d d d d d d d
        d d d d d d d d e d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d e d d d
        d d e d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d e d d d d d d d d
    `
    //% blockIdentity=images._tile
    export const tile_gravelCracked = img`
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d f e d d d d d d d
        d d d d d d f d d d d d d d d d
        d d d d e f d d d d d d d d d d
        d d d d d f d d d d d e d d d d
        d d d d d d f d d d d d d d d d
        d d d d d d f f d d d d d d d d
        d d d e d d d d f d d d d d d d
        d d d d d d d d e f d d d d d d
        d d d d d d d d d d f d d d d d
        d d d d d d d d d d d f e d d d
        d d e d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d
        d d d d d d d e d d d d d d d d
    `
    //% blockIdentity=images._tile
    export const tile_oreGold = img`
        b b b b b b b b b b b b b b b b
        b b b b b 5 5 5 b b b b b b b b
        b b b b 5 5 5 5 5 b b b b b b b
        b b b b 5 5 5 5 5 b b b b b b b
        b b b b b 5 5 5 b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b 5 5 5 b b
        b b b b b b b b b b 5 5 5 5 5 b
        b b 5 5 5 b b b b b 5 5 5 5 5 b
        b 5 5 5 5 5 b b b b b 5 5 5 b b
        b 5 5 5 5 5 b b b b b b b b b b
        b b 5 5 5 b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
    `
    //% blockIdentity=images._tile
    export const tile_oreDiamond = img`
        b b b b b b b b b b b b b b b b
        b b b b b 9 9 9 b b b b b b b b
        b b b b 9 9 9 9 9 b b b b b b b
        b b b b 9 9 9 9 9 b b b b b b b
        b b b b b 9 9 9 b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b 9 9 9 b b
        b b b b b b b b b b 9 9 9 9 9 b
        b b 9 9 9 b b b b b 9 9 9 9 9 b
        b 9 9 9 9 9 b b b b b 9 9 9 b b
        b 9 9 9 9 9 b b b b b b b b b b
        b b 9 9 9 b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
    `
    //% blockIdentity=images._tile
    export const tile_oreCoal = img`
        b b b b b b b b b b b b b b b b
        b b b b b f f f b b b b b b b b
        b b b b f f f f f b b b b b b b
        b b b b f f f f f b b b b b b b
        b b b b b f f f b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b f f f b b
        b b b b b b b b b b f f f f f b
        b b f f f b b b b b f f f f f b
        b f f f f f b b b b b f f f b b
        b f f f f f b b b b b b b b b b
        b b f f f b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
    `
    //% blockIdentity=images._tile
    export const tile_exitLocked = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2
        2 2 2 2 2 f f f f f f 2 2 2 2 2
        2 2 2 2 2 f f 2 2 f f 2 2 2 2 2
        2 2 2 2 2 f f 2 2 f f 2 2 2 2 2
        2 2 2 2 f f f f f f f f 2 2 2 2
        2 2 2 2 f f f f f f f f 2 2 2 2
        2 2 2 2 f f f f f f f f 2 2 2 2
        2 2 2 2 f f f 5 5 f f f 2 2 2 2
        2 2 2 2 f f f 5 5 f f f 2 2 2 2
        2 2 2 2 f f f f f f f f 2 2 2 2
        2 2 2 2 f f f f f f f f 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile_exitOpen = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 f f f f 7 7 7 7 7 7
        7 7 7 7 7 f 7 7 7 7 f 7 7 7 7 7
        7 7 7 7 7 f 7 7 7 7 f 7 7 7 7 7
        7 7 7 7 7 f 7 7 7 7 f 7 7 7 7 7
        7 7 7 7 f f f f f f f f 7 7 7 7
        7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7
        7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7
        7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7
        7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7
        7 7 7 7 f f f f f f f f 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}

// Miner sprite
let minerImg = img`
    . . . . . f f f f . . . . . . .
    . . . . f 5 5 5 5 f . . . . . .
    . . . f 5 5 5 5 5 5 f . . . . .
    . . f 5 5 5 f f 5 5 5 f . . . .
    . . f 5 5 f 1 1 f 5 5 f . . . .
    . . f 5 5 f 1 1 f 5 5 f . . . .
    . . . f 5 5 f f 5 5 f . . . . .
    . . . . f 5 5 5 5 f . . . . . .
    . . . f 8 8 8 8 8 8 f . . . . .
    . . f 8 8 8 8 8 8 8 8 f . . . .
    . . f 8 8 8 8 8 8 8 8 f . . . .
    . . . f 8 8 f f 8 8 f . . . . .
    . . . . f 8 f f 8 f . . . . . .
    . . . . f f . . f f . . . . . .
    . . . . f f . . f f . . . . . .
    . . . f f f . . f f f . . . . .
`

// Level 1 tilemap
let level1 = tiles.createTilemap(
    hex`1000100002020202020202020202020202020202020200000000000003030303030302020001010000000303030303030202000101000003030303030303020200000000000303040404030302020003030303030404040403030202000303030608030303030303020200030303030303030303030302020003030303030303030303030202000303030303030303030303020200030303030303030303030302020003030303030303030303030202000303030303030303030303020200030303030703030303040902020003030303030303030303030202020202020202020202020202020202`,
    img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile_emptyGround, myTiles.tile_startZone, myTiles.tile_bedrockWall, myTiles.tile_stone, myTiles.tile_gravel, myTiles.tile_gravelCracked, myTiles.tile_oreGold, myTiles.tile_oreDiamond, myTiles.tile_oreCoal, myTiles.tile_exitLocked, myTiles.tile_exitOpen],
    TileScale.Sixteen
)

// Level 2 tilemap
let level2 = tiles.createTilemap(
    hex`1000100002020202020202020202020202020202020200000000000003030303030302020001010000000303030303030202000101000003030303030303020200000000000404040404040302020003030303040404040403030202000303060803030404040303020200030303030303030303030302020003030303030303030303030202000303030303030404030303020200030303030303040404030302020003030604030303030303030202000303030303030303030303020200030303030303030307030302020003030303030303030303030202020202020202020202020202020202`,
    img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . . . 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile_emptyGround, myTiles.tile_startZone, myTiles.tile_bedrockWall, myTiles.tile_stone, myTiles.tile_gravel, myTiles.tile_gravelCracked, myTiles.tile_oreGold, myTiles.tile_oreDiamond, myTiles.tile_oreCoal, myTiles.tile_exitLocked, myTiles.tile_exitOpen],
    TileScale.Sixteen
)

// Player sprite
let miner: Sprite = null

// Player level (starts at 1)
let level = 1

// Current level number (for level transitions)
let currentLevelNum = 1

// Initialize the game
function initGame() {
    // Set up the tilemap
    tiles.setCurrentTilemap(level1)

    // Create the miner sprite
    miner = sprites.create(minerImg, SpriteKind.Player)

    // Place player on start zone
    tiles.placeOnRandomTile(miner, myTiles.tile_startZone)

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
    if (tiles.tileAtLocationEquals(loc, myTiles.tile_stone)) {
        tiles.setTileAt(loc, myTiles.tile_emptyGround)
        info.changeScoreBy(1)
    }
    // Gravel: first hit, +1 XP -> gravelCracked
    else if (tiles.tileAtLocationEquals(loc, myTiles.tile_gravel)) {
        tiles.setTileAt(loc, myTiles.tile_gravelCracked)
        info.changeScoreBy(1)
    }
    // Gravel cracked: second hit, +1 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, myTiles.tile_gravelCracked)) {
        tiles.setTileAt(loc, myTiles.tile_emptyGround)
        info.changeScoreBy(1)
    }
    // Gold ore: 1 hit, +10 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, myTiles.tile_oreGold)) {
        tiles.setTileAt(loc, myTiles.tile_emptyGround)
        info.changeScoreBy(10)
    }
    // Diamond ore: 1 hit, +5 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, myTiles.tile_oreDiamond)) {
        tiles.setTileAt(loc, myTiles.tile_emptyGround)
        info.changeScoreBy(5)
    }
    // Coal ore: 1 hit, +5 XP -> emptyGround
    else if (tiles.tileAtLocationEquals(loc, myTiles.tile_oreCoal)) {
        tiles.setTileAt(loc, myTiles.tile_emptyGround)
        info.changeScoreBy(5)
    }
    // Non-mineable tiles: do nothing

    // Check for level up after mining
    checkLevelUp()
}

// Check if player has enough XP to level up
function checkLevelUp() {
    // Level up threshold: level * 50 XP
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
        for (let loc of tiles.getTilesByType(myTiles.tile_exitLocked)) {
            tiles.setTileAt(loc, myTiles.tile_exitOpen)
        }
        game.splash("Exit unlocked!")
    }
}

// Load the next level
function loadNextLevel() {
    currentLevelNum += 1

    if (currentLevelNum == 2) {
        tiles.setCurrentTilemap(level2)
    } else {
        game.splash("You Win!")
        game.over(true)
        return
    }

    // Place player on start zone of new level
    tiles.placeOnRandomTile(miner, myTiles.tile_startZone)
}

// A button handler - mine the tile under the player
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let col = Math.floor(miner.x / 16)
    let row = Math.floor(miner.y / 16)
    let loc = tiles.getTileLocation(col, row)
    mineTileAt(loc)
})

// Exit tile overlap handler
scene.onOverlapTile(SpriteKind.Player, myTiles.tile_exitOpen, function (sprite, loc) {
    game.splash("Next level!")
    loadNextLevel()
})

// Start the game
initGame()
