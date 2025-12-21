// Tilemap definitions for Mining Game
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = assets.tile_emptyGround
    //% blockIdentity=images._tile
    export const tile1 = assets.tile_startZone
    //% blockIdentity=images._tile
    export const tile2 = assets.tile_bedrockWall
    //% blockIdentity=images._tile
    export const tile3 = assets.tile_stone
    //% blockIdentity=images._tile
    export const tile4 = assets.tile_gravel
    //% blockIdentity=images._tile
    export const tile5 = assets.tile_gravelCracked
    //% blockIdentity=images._tile
    export const tile6 = assets.tile_oreGold
    //% blockIdentity=images._tile
    export const tile7 = assets.tile_oreDiamond
    //% blockIdentity=images._tile
    export const tile8 = assets.tile_oreCoal
    //% blockIdentity=images._tile
    export const tile9 = assets.tile_exitLocked
    //% blockIdentity=images._tile
    export const tile10 = assets.tile_exitOpen
}

// Level tilemaps
// Tile Legend:
// 0 = emptyGround
// 1 = startZone
// 2 = bedrockWall
// 3 = stone
// 4 = gravel
// 5 = gravelCracked
// 6 = oreGold
// 7 = oreDiamond
// 8 = oreCoal
// 9 = exitLocked
// a = exitOpen (10)
namespace levels {
    // Level 1 - 16x16 tiles
    // Features: start zone, stone, gravel, ores, and a locked exit
    export const level1 = tiles.createTilemap(
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
        [myTiles.tile0, myTiles.tile1, myTiles.tile2, myTiles.tile3, myTiles.tile4, myTiles.tile5, myTiles.tile6, myTiles.tile7, myTiles.tile8, myTiles.tile9, myTiles.tile10],
        TileScale.Sixteen
    )

    // Level 2 - 16x16 tiles
    // Features: more ores, more gravel, new challenges
    export const level2 = tiles.createTilemap(
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
        [myTiles.tile0, myTiles.tile1, myTiles.tile2, myTiles.tile3, myTiles.tile4, myTiles.tile5, myTiles.tile6, myTiles.tile7, myTiles.tile8, myTiles.tile9, myTiles.tile10],
        TileScale.Sixteen
    )
}
