# Player sprite
miner: Sprite = None
# Player level (starts at 1)
playerLevel = 1
# Current level number
currentLevelNum = 1
# A button - mine tile

def on_a_pressed():
    global playerLevel
    col = Math.floor(miner.x / 16)
    row = Math.floor(miner.y / 16)
    loc = tiles.get_tile_location(col, row)
    if tiles.tile_at_location_equals(loc, myTiles.tile3):
        tiles.set_tile_at(loc, myTiles.tile0)
        info.change_score_by(1)
    elif tiles.tile_at_location_equals(loc, myTiles.tile4):
        tiles.set_tile_at(loc, myTiles.tile5)
        info.change_score_by(1)
    elif tiles.tile_at_location_equals(loc, myTiles.tile5):
        tiles.set_tile_at(loc, myTiles.tile0)
        info.change_score_by(1)
    elif tiles.tile_at_location_equals(loc, myTiles.tile6):
        tiles.set_tile_at(loc, myTiles.tile0)
        info.change_score_by(10)
    elif tiles.tile_at_location_equals(loc, myTiles.tile7):
        tiles.set_tile_at(loc, myTiles.tile0)
        info.change_score_by(5)
    elif tiles.tile_at_location_equals(loc, myTiles.tile8):
        tiles.set_tile_at(loc, myTiles.tile0)
        info.change_score_by(5)
    # Check level up
    while info.score() >= playerLevel * 50:
        playerLevel += 1
        game.splash("Level " + str(playerLevel) + "!")
        if playerLevel == 2:
            for exitLoc in tiles.get_tiles_by_type(myTiles.tile9):
                tiles.set_tile_at(exitLoc, myTiles.tile10)
            game.splash("Exit unlocked!")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# Exit overlap

def on_overlap_tile(sprite, loc2):
    global currentLevelNum
    game.splash("Next level!")
    currentLevelNum += 1
    if currentLevelNum == 2:
        tiles.set_current_tilemap(levels.level2)
        tiles.place_on_random_tile(miner, myTiles.tile1)
    else:
        game.splash("You Win!")
        game.over(True)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile10, on_overlap_tile)

# Start game
tiles.set_current_tilemap(levels.level1)
miner = sprites.create(myImages.miner, SpriteKind.player)
tiles.place_on_random_tile(miner, myTiles.tile1)
controller.move_sprite(miner, 80, 80)
scene.camera_follow_sprite(miner)
info.set_score(0)