Below is a **clean, shareable PRD** written for **another LLM (e.g. Claude Code)** to implement the game in **MakeCode Arcade**.
It is explicit, unambiguous, and avoids design chatter.

---

# 📄 Product Requirements Document (PRD)

**Project:** Mining Game (MakeCode Arcade)
**Audience:** Code-generation LLM (Claude Code)
**Target Platform:** MakeCode Arcade (TypeScript / Blocks compatible)

---

## 1. Goal

Implement a simple **top-down mining game** where a player mines tiles to gain XP, levels up, and unlocks a new area.

---

## 2. Core Gameplay

### 2.1 Player

* A single player sprite (“Miner”)
* Controlled with arrow keys
* Camera follows the player

### 2.2 World

* Tilemap-based world
* Player starts in a defined **Start Zone**
* World contains mineable and non-mineable tiles
* One **locked exit tile** unlocks at Level 2

---

## 3. Controls

| Action                 | Input      |
| ---------------------- | ---------- |
| Move                   | Arrow keys |
| Mine tile under player | `A` button |

---

## 4. Tile Types

### 4.1 Tile Definitions

| Tile Name       | Mineable | Hits | XP       | Result After Mining                    |
| --------------- | -------- | ---- | -------- | -------------------------------------- |
| `startZone`     | No       | –    | 0        | No change                              |
| `bedrockWall`   | No       | ∞    | 0        | No change                              |
| `stone`         | Yes      | 1    | +1       | `emptyGround`                          |
| `gravel`        | Yes      | 2    | +2 total | `gravel → gravelCracked → emptyGround` |
| `gravelCracked` | Yes      | 1    | +1       | `emptyGround`                          |
| `oreGold`       | Yes      | 1    | +10      | `emptyGround`                          |
| `oreDiamond`    | Yes      | 1    | +5       | `emptyGround`                          |
| `oreCoal`       | Yes      | 1    | +5       | `emptyGround`                          |
| `exitLocked`    | No       | –    | 0        | Changes to `exitOpen` at Level 2       |
| `exitOpen`      | No       | –    | 0        | Loads next level on overlap            |
| `emptyGround`   | No       | –    | 0        | Walkable                               |

---

## 5. XP & Level System

### 5.1 XP

* XP is stored using `info.score()`

### 5.2 Levels

* Player starts at **Level 1**
* XP required per level:

  ```
  requiredXP = level * 50
  ```
* Multiple level-ups can occur if XP jumps past thresholds

### 5.3 Level Effects

* When player reaches **Level 2**:

  * All `exitLocked` tiles convert to `exitOpen`
  * Optional splash message: “Level 2! Exit unlocked”

---

## 6. Game Events

### 6.1 Mining

* Triggered by pressing `A`
* Mines the tile **under the player**
* Tile behavior depends on tile type
* XP awarded immediately
* After mining, run level-up check

### 6.2 Exit

* When player overlaps `exitOpen`:

  * Load next tilemap
  * Place player in start zone of next map

---

## 7. Non-Goals (Out of Scope)

* Inventory system
* Enemies
* Health/damage
* Procedural map generation
* Save/load
* Projectiles (future extension only)

---

## 8. Required Assets

### 8.1 Tiles

Must exist in the MakeCode Arcade asset editor:

* `stone`
* `gravel`
* `gravelCracked`
* `oreGold`
* `oreDiamond`
* `oreCoal`
* `bedrockWall`
* `startZone`
* `exitLocked`
* `exitOpen`
* `emptyGround`

### 8.2 Sprite

* `miner` player sprite

---

## 9. Pseudocode (MakeCode Arcade – TypeScript)

### 9.1 Setup

```ts
let miner: Sprite = null
let level = 1

miner = sprites.create(/* miner image */, SpriteKind.Player)
controller.moveSprite(miner, 80, 80)

tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(miner, assets.tile`startZone`)
scene.cameraFollowSprite(miner)

info.setScore(0)
level = 1
```

---

### 9.2 Mining Input

```ts
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let loc = tiles.locationOfSprite(miner)
    mineTileAt(loc)
})
```

---

### 9.3 Mining Logic

```ts
function mineTileAt(loc: tiles.Location) {

    if (tiles.tileAtLocationEquals(loc, assets.tile`stone`)) {
        tiles.setTileAt(loc, assets.tile`emptyGround`)
        info.changeScoreBy(1)

    } else if (tiles.tileAtLocationEquals(loc, assets.tile`gravel`)) {
        tiles.setTileAt(loc, assets.tile`gravelCracked`)
        info.changeScoreBy(1)

    } else if (tiles.tileAtLocationEquals(loc, assets.tile`gravelCracked`)) {
        tiles.setTileAt(loc, assets.tile`emptyGround`)
        info.changeScoreBy(1)

    } else if (tiles.tileAtLocationEquals(loc, assets.tile`oreGold`)) {
        tiles.setTileAt(loc, assets.tile`emptyGround`)
        info.changeScoreBy(10)

    } else if (tiles.tileAtLocationEquals(loc, assets.tile`oreDiamond`)) {
        tiles.setTileAt(loc, assets.tile`emptyGround`)
        info.changeScoreBy(5)

    } else if (tiles.tileAtLocationEquals(loc, assets.tile`oreCoal`)) {
        tiles.setTileAt(loc, assets.tile`emptyGround`)
        info.changeScoreBy(5)
    }

    checkLevelUp()
}
```

---

### 9.4 Level-Up Logic

```ts
function checkLevelUp() {
    while (info.score() >= level * 50) {
        level += 1
        onLevelUp(level)
    }
}

function onLevelUp(newLevel: number) {
    game.splash("Level " + newLevel)

    if (newLevel == 2) {
        for (let loc of tiles.getTilesByType(assets.tile`exitLocked`)) {
            tiles.setTileAt(loc, assets.tile`exitOpen`)
        }
    }
}
```

---

### 9.5 Exit Handling

```ts
scene.onOverlapTile(SpriteKind.Player, assets.tile`exitOpen`, function (sprite, loc) {
    game.splash("Next level")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(miner, assets.tile`startZone`)
})
```

---

## 10. Acceptance Criteria

* Player can move freely on walkable tiles
* Pressing `A` mines the tile under the player
* Correct XP is awarded per tile
* Gravel requires two hits
* XP increases level every 50 XP
* At Level 2, exit unlocks
* Stepping on exit loads next level
* No crashes when mining non-mineable tiles

---

## 11. Implementation Notes for Claude Code

* Prefer **clarity over cleverness**
* Use MakeCode Arcade APIs only
* Avoid dynamic typing hacks
* Tile checks must be explicit
* Use `assets.tile\`name`` consistently

---

If you want, I can next:

* Add **unit-test-style assertions** for Arcade, or
* Produce a **block-by-block mapping** from this PRD to MakeCode blocks for a child-friendly implementation.
