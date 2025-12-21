// Player sprite
let miner: Sprite = null
// Player level (starts at 1)
let playerLevel = 1
// Current level number
let currentLevelNum = 1

// Tile images defined for block compatibility
//% blockIdentity=images._tile
let tile_emptyGround = img`
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
let tile_startZone = img`
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
let tile_bedrockWall = img`
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
let tile_stone = img`
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
let tile_gravel = img`
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
let tile_gravelCracked = img`
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
let tile_oreGold = img`
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
let tile_oreDiamond = img`
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
let tile_oreCoal = img`
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
let tile_exitLocked = img`
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
let tile_exitOpen = img`
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

// Miner sprite image
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

// Create tilemaps
let level1Map = tiles.createTilemap(
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
    [tile_emptyGround, tile_startZone, tile_bedrockWall, tile_stone, tile_gravel, tile_gravelCracked, tile_oreGold, tile_oreDiamond, tile_oreCoal, tile_exitLocked, tile_exitOpen],
    TileScale.Sixteen
)

let level2Map = tiles.createTilemap(
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
    [tile_emptyGround, tile_startZone, tile_bedrockWall, tile_stone, tile_gravel, tile_gravelCracked, tile_oreGold, tile_oreDiamond, tile_oreCoal, tile_exitLocked, tile_exitOpen],
    TileScale.Sixteen
)

// A button - mine tile
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let col = Math.floor(miner.x / 16)
    let row = Math.floor(miner.y / 16)
    let loc = tiles.getTileLocation(col, row)

    if (tiles.tileAtLocationEquals(loc, tile_stone)) {
        tiles.setTileAt(loc, tile_emptyGround)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, tile_gravel)) {
        tiles.setTileAt(loc, tile_gravelCracked)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, tile_gravelCracked)) {
        tiles.setTileAt(loc, tile_emptyGround)
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(loc, tile_oreGold)) {
        tiles.setTileAt(loc, tile_emptyGround)
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(loc, tile_oreDiamond)) {
        tiles.setTileAt(loc, tile_emptyGround)
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(loc, tile_oreCoal)) {
        tiles.setTileAt(loc, tile_emptyGround)
        info.changeScoreBy(5)
    }

    // Check level up
    while (info.score() >= playerLevel * 50) {
        playerLevel += 1
        game.splash("Level " + playerLevel + "!")
        if (playerLevel == 2) {
            for (let exitLoc of tiles.getTilesByType(tile_exitLocked)) {
                tiles.setTileAt(exitLoc, tile_exitOpen)
            }
            game.splash("Exit unlocked!")
        }
    }
})

// Exit overlap
scene.onOverlapTile(SpriteKind.Player, tile_exitOpen, function (sprite, loc) {
    game.splash("Next level!")
    currentLevelNum += 1
    if (currentLevelNum == 2) {
        tiles.setCurrentTilemap(level2Map)
        tiles.placeOnRandomTile(miner, tile_startZone)
    } else {
        game.splash("You Win!")
        game.over(true)
    }
})

// Start game
tiles.setCurrentTilemap(level1Map)
miner = sprites.create(minerImg, SpriteKind.Player)
tiles.placeOnRandomTile(miner, tile_startZone)
controller.moveSprite(miner, 80, 80)
scene.cameraFollowSprite(miner)
info.setScore(0)
