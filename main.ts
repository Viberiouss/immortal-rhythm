namespace SpriteKind {
    export const Off = SpriteKind.create()
    export const Perfect = SpriteKind.create()
    export const Late = SpriteKind.create()
    export const Early = SpriteKind.create()
    export const Miss = SpriteKind.create()
    export const Arrow = SpriteKind.create()
}

Menu()
game.showLongText("Welcome to Immortal Rhythm!", DialogLayout.Bottom)
game.showLongText("Press A to end the game, press B to change settings,", DialogLayout.Bottom)
game.showLongText("and press Menu to go back to menu (IF YOU DO THIS THE GAME WILL NOT SAVE YOUR DATA!)", DialogLayout.Bottom)
game.showLongText("Choose your play-style.", DialogLayout.Bottom)

function Menu() {
blockMenu.setColors(1, 15)
blockMenu.showMenu(["Upscroll", "Downscroll", "Rightscroll", "Leftscroll", "Center-scroll??", ], MenuStyle.List, MenuLocation.FullScreen)
blockMenu.onMenuOptionSelected(function(option, index) {
    if (index == 0) {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        Upscroll()
    }
    if (index == 1) {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        Downscroll()
    }
    if (index == 2) {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        Rightscroll()
    }
    if (index == 3) {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        Leftscroll()
    }
    if (index == 4) {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        Centerscroll()
    }
})
}

function Downscroll() {
    let speed = game.askForNumber("Speed (Default is 100)", 3)
    let spawnTime = game.askForNumber("How fast (in ms) you want the notes to spawn", 4)
    let left = sprites.create(img`
    . . . . . . 1 . . . . . . . .
    . . . . . 1 . 1 . . . . . . .
    . . . . 1 . . 1 . . . . . . .
    . . . 1 . . . 1 . . . . . . .
    . . 1 . . . . 1 1 1 1 1 1 1 1
    . 1 . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . 1
    . 1 . . . . . . . . . . . . 1
    . . 1 . . . . 1 1 1 1 1 1 1 1
    . . . 1 . . . 1 . . . . . . .
    . . . . 1 . . 1 . . . . . . .
    . . . . . 1 . 1 . . . . . . .
    . . . . . . 1 . . . . . . . .
`, SpriteKind.Off)
    let down = sprites.create(img`
    . . . . 1 1 1 1 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . 1 1 1 1 . . . 1 1 1 1 .
    1 . . . . . . . . . . . 1
    . 1 . . . . . . . . . 1 .
    . . 1 . . . . . . . 1 . .
    . . . 1 . . . . . 1 . . .
    . . . . 1 . . . 1 . . . .
    . . . . . 1 . 1 . . . . .
    . . . . . . 1 . . . . . .
`, SpriteKind.Off)
    let up = sprites.create(img`
    . . . . . . 1 . . . . . .
    . . . . . 1 . 1 . . . . .
    . . . . 1 . . . 1 . . . .
    . . . 1 . . . . . 1 . . .
    . . 1 . . . . . . . 1 . .
    . 1 . . . . . . . . . 1 .
    1 . . . . . . . . . . . 1
    . 1 1 1 1 . . . 1 1 1 1 .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 1 1 1 1 . . . .
`, SpriteKind.Off)
    let right = sprites.create(img`
    . . . . . . . . 1 . . . . . .
    . . . . . . . 1 . 1 . . . . .
    . . . . . . . 1 . . 1 . . . .
    . . . . . . . 1 . . . 1 . . .
    1 1 1 1 1 1 1 1 . . . . 1 . .
    1 . . . . . . . . . . . . 1 .
    1 . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . 1 .
    1 1 1 1 1 1 1 1 . . . . 1 . .
    . . . . . . . 1 . . . 1 . . .
    . . . . . . . 1 . . 1 . . . .
    . . . . . . . 1 . 1 . . . . .
    . . . . . . . . 1 . . . . . .
`, SpriteKind.Off)
    let earlyleft = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlydown = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlyright = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlyup = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let latedown = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateup = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateright = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateleft = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let miss = sprites.create(img`
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
`, SpriteKind.Miss)
    let misses = 0
    let lates = 0
    let earlies = 0
    let perfects = 0

    let health = statusbars.create(6, 70, StatusBarKind.Health)

    miss.setPosition(80, 120)
    health.max = 50
    health.value = 25
    health.setBarBorder(1, 0xd)
    health.positionDirection(CollisionDirection.Left)
    health.setOffsetPadding(0, 15)
    left.setPosition(50, 105)
    down.setPosition(70, 105)
    up.setPosition(90, 105)
    right.setPosition(110, 105)
    earlyleft.setPosition(50, 95)
    lateleft.setPosition(50, 115)
    earlydown.setPosition(70, 95)
    latedown.setPosition(70, 115)
    earlyup.setPosition(90, 95)
    lateup.setPosition(90, 115)
    earlyright.setPosition(110, 95)
    lateright.setPosition(110, 115)

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        left.setImage(img`
        . . . . . . a . . . . . . . .
        . . . . . a . a . . . . . . .
        . . . . a . . a . . . . . . .
        . . . a . . . a . . . . . . .
        . . a . . . . a a a a a a a a
        . a . . . . . . . . . . . . a
        a . . . . . . . . . . . . . a
        . a . . . . . . . . . . . . a
        . . a . . . . a a a a a a a a
        . . . a . . . a . . . . . . .
        . . . . a . . a . . . . . . .
        . . . . . a . a . . . . . . .
        . . . . . . a . . . . . . . .
    `)
        left.setKind(SpriteKind.Perfect)
        earlyleft.setKind(SpriteKind.Early)
        lateleft.setKind(SpriteKind.Late)
        pause(100)
        left.setKind(SpriteKind.Off)
        earlyleft.setKind(SpriteKind.Off)
        lateleft.setKind(SpriteKind.Off)
    })

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        down.setImage(img`
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . 8 8 8 8 . . . 8 8 8 8 .
        8 . . . . . . . . . . . 8
        . 8 . . . . . . . . . 8 .
        . . 8 . . . . . . . 8 . .
        . . . 8 . . . . . 8 . . .
        . . . . 8 . . . 8 . . . .
        . . . . . 8 . 8 . . . . .
        . . . . . . 8 . . . . . .
    `)
        down.setKind(SpriteKind.Perfect)
        earlydown.setKind(SpriteKind.Early)
        latedown.setKind(SpriteKind.Late)
        pause(100)
        down.setKind(SpriteKind.Off)
        earlydown.setKind(SpriteKind.Off)
        latedown.setKind(SpriteKind.Off)
    })

    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        up.setImage(img`
        . . . . . . 7 . . . . . .
        . . . . . 7 . 7 . . . . .
        . . . . 7 . . . 7 . . . .
        . . . 7 . . . . . 7 . . .
        . . 7 . . . . . . . 7 . .
        . 7 . . . . . . . . . 7 .
        7 . . . . . . . . . . . 7
        . 7 7 7 7 . . . 7 7 7 7 .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 7 7 7 7 . . . .
    `)
        up.setKind(SpriteKind.Perfect)
        earlyup.setKind(SpriteKind.Early)
        lateup.setKind(SpriteKind.Late)
        pause(100)
        up.setKind(SpriteKind.Off)
        earlyup.setKind(SpriteKind.Off)
        lateup.setKind(SpriteKind.Off)
    })

    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        right.setImage(img`
        . . . . . . . . 2 . . . . . .
        . . . . . . . 2 . 2 . . . . .
        . . . . . . . 2 . . 2 . . . .
        . . . . . . . 2 . . . 2 . . .
        2 2 2 2 2 2 2 2 . . . . 2 . .
        2 . . . . . . . . . . . . 2 .
        2 . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . 2 .
        2 2 2 2 2 2 2 2 . . . . 2 . .
        . . . . . . . 2 . . . 2 . . .
        . . . . . . . 2 . . 2 . . . .
        . . . . . . . 2 . 2 . . . . .
        . . . . . . . . 2 . . . . . .
    `)
        right.setKind(SpriteKind.Perfect)
        earlyright.setKind(SpriteKind.Early)
        lateright.setKind(SpriteKind.Late)
        pause(100)
        right.setKind(SpriteKind.Off)
        earlyright.setKind(SpriteKind.Off)
        lateright.setKind(SpriteKind.Off)
    })

    controller.left.onEvent(ControllerButtonEvent.Released, function () {
        left.setImage(img`
        . . . . . . 1 . . . . . . . .
        . . . . . 1 . 1 . . . . . . .
        . . . . 1 . . 1 . . . . . . .
        . . . 1 . . . 1 . . . . . . .
        . . 1 . . . . 1 1 1 1 1 1 1 1
        . 1 . . . . . . . . . . . . 1
        1 . . . . . . . . . . . . . 1
        . 1 . . . . . . . . . . . . 1
        . . 1 . . . . 1 1 1 1 1 1 1 1
        . . . 1 . . . 1 . . . . . . .
        . . . . 1 . . 1 . . . . . . .
        . . . . . 1 . 1 . . . . . . .
        . . . . . . 1 . . . . . . . .
    `)
    })

    controller.down.onEvent(ControllerButtonEvent.Released, function () {
        down.setImage(img`
        . . . . 1 1 1 1 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . 1 1 1 1 . . . 1 1 1 1 .
        1 . . . . . . . . . . . 1
        . 1 . . . . . . . . . 1 .
        . . 1 . . . . . . . 1 . .
        . . . 1 . . . . . 1 . . .
        . . . . 1 . . . 1 . . . .
        . . . . . 1 . 1 . . . . .
        . . . . . . 1 . . . . . .
    `)
    })

    controller.up.onEvent(ControllerButtonEvent.Released, function () {
        up.setImage(img`
        . . . . . . 1 . . . . . .
        . . . . . 1 . 1 . . . . .
        . . . . 1 . . . 1 . . . .
        . . . 1 . . . . . 1 . . .
        . . 1 . . . . . . . 1 . .
        . 1 . . . . . . . . . 1 .
        1 . . . . . . . . . . . 1
        . 1 1 1 1 . . . 1 1 1 1 .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 1 1 1 1 . . . .
    `)
    })

    controller.right.onEvent(ControllerButtonEvent.Released, function () {
        right.setImage(img`
        . . . . . . . . 1 . . . . . .
        . . . . . . . 1 . 1 . . . . .
        . . . . . . . 1 . . 1 . . . .
        . . . . . . . 1 . . . 1 . . .
        1 1 1 1 1 1 1 1 . . . . 1 . .
        1 . . . . . . . . . . . . 1 .
        1 . . . . . . . . . . . . . 1
        1 . . . . . . . . . . . . 1 .
        1 1 1 1 1 1 1 1 . . . . 1 . .
        . . . . . . . 1 . . . 1 . . .
        . . . . . . . 1 . . 1 . . . .
        . . . . . . . 1 . 1 . . . . .
        . . . . . . . . 1 . . . . . .
    `)
    })

    statusbars.onZero(StatusBarKind.Health, function () {
        game.splash("GAME OVER!")
        game.splash("Perfects: " + perfects)
        game.splash("Earlies: " + earlies)
        game.splash("Lates: " + lates)
        game.splash("Misses: " + misses)
        game.over(false)
    })

    game.onUpdateInterval(spawnTime, function () {
        let lane = randint(1, 4)
        if (lane == 1) {
            let leftarrow = sprites.create(img`
        . . . . . . . . . . . . . . .
        . . . . . . a . . . . . . . .
        . . . . . a a . . . . . . . .
        . . . . a a a . . . . . . . .
        . . . a a a a a a a a a a a .
        . . a a a a a a a a a a a a .
        . a a a a a a a a a a a a a .
        . . a a a a a a a a a a a a .
        . . . a a a a a a a a a a a .
        . . . . a a a . . . . . . . .
        . . . . . a a . . . . . . . .
        . . . . . . a . . . . . . . .
        . . . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            leftarrow.setPosition(50, 10)
            leftarrow.setVelocity(0, speed)
            sprites.onOverlap(SpriteKind.Perfect, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(300)
                health.value += 1
                perfects += 1
            })
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 2) {
            let downarrow = sprites.create(img`
        . . . . . . . . . . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . 8 8 8 8 8 8 8 8 8 8 8 .
        . . 8 8 8 8 8 8 8 8 8 . .
        . . . 8 8 8 8 8 8 8 . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . . 8 8 8 . . . . .
        . . . . . . 8 . . . . . .
        . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            downarrow.setPosition(70, 10)
            downarrow.setVelocity(0, speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 3) {
            let uparrow = sprites.create(img`
        . . . . . . . . . . . . .
        . . . . . . 7 . . . . . .
        . . . . . 7 7 7 . . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 . . .
        . . 7 7 7 7 7 7 7 7 7 . .
        . 7 7 7 7 7 7 7 7 7 7 7 .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            uparrow.setPosition(90, 10)
            uparrow.setVelocity(0, speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 4) {
            let rightarrow = sprites.create(img`
        . . . . . . . . . . . . . . .
        . . . . . . . . 2 . . . . . .
        . . . . . . . . 2 2 . . . . .
        . . . . . . . . 2 2 2 . . . .
        . 2 2 2 2 2 2 2 2 2 2 2 . . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 . . .
        . . . . . . . . 2 2 2 . . . .
        . . . . . . . . 2 2 . . . . .
        . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            rightarrow.setPosition(110, 10)
            rightarrow.setVelocity(0, speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
        speed = game.askForNumber("Speed (Default is 100)", 3)
        spawnTime = game.askForNumber("How fast (in ms) you want the notes to spawn", 4)
    })  
    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
        game.splash("GAME OVER!")
            game.splash("Perfects: " + perfects)
            game.splash("Earlies: " + earlies)
            game.splash("Lates: " + lates)
            game.splash("Misses: " + misses)
            game.over(false)
    })
}

function Upscroll() {
    let speed = game.askForNumber("Speed (Default is 100)", 3)
    let spawnTime = game.askForNumber("How fast (in ms) you want the notes to spawn", 4)
    let left = sprites.create(img`
    . . . . . . 1 . . . . . . . .
    . . . . . 1 . 1 . . . . . . .
    . . . . 1 . . 1 . . . . . . .
    . . . 1 . . . 1 . . . . . . .
    . . 1 . . . . 1 1 1 1 1 1 1 1
    . 1 . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . 1
    . 1 . . . . . . . . . . . . 1
    . . 1 . . . . 1 1 1 1 1 1 1 1
    . . . 1 . . . 1 . . . . . . .
    . . . . 1 . . 1 . . . . . . .
    . . . . . 1 . 1 . . . . . . .
    . . . . . . 1 . . . . . . . .
`, SpriteKind.Off)
    let down = sprites.create(img`
    . . . . 1 1 1 1 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . 1 1 1 1 . . . 1 1 1 1 .
    1 . . . . . . . . . . . 1
    . 1 . . . . . . . . . 1 .
    . . 1 . . . . . . . 1 . .
    . . . 1 . . . . . 1 . . .
    . . . . 1 . . . 1 . . . .
    . . . . . 1 . 1 . . . . .
    . . . . . . 1 . . . . . .
`, SpriteKind.Off)
    let up = sprites.create(img`
    . . . . . . 1 . . . . . .
    . . . . . 1 . 1 . . . . .
    . . . . 1 . . . 1 . . . .
    . . . 1 . . . . . 1 . . .
    . . 1 . . . . . . . 1 . .
    . 1 . . . . . . . . . 1 .
    1 . . . . . . . . . . . 1
    . 1 1 1 1 . . . 1 1 1 1 .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 . . . 1 . . . .
    . . . . 1 1 1 1 1 . . . .
`, SpriteKind.Off)
    let right = sprites.create(img`
    . . . . . . . . 1 . . . . . .
    . . . . . . . 1 . 1 . . . . .
    . . . . . . . 1 . . 1 . . . .
    . . . . . . . 1 . . . 1 . . .
    1 1 1 1 1 1 1 1 . . . . 1 . .
    1 . . . . . . . . . . . . 1 .
    1 . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . 1 .
    1 1 1 1 1 1 1 1 . . . . 1 . .
    . . . . . . . 1 . . . 1 . . .
    . . . . . . . 1 . . 1 . . . .
    . . . . . . . 1 . 1 . . . . .
    . . . . . . . . 1 . . . . . .
`, SpriteKind.Off)
    let earlyleft = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlydown = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlyright = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let earlyup = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let latedown = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateup = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateright = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let lateleft = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Off)
    let miss = sprites.create(img`
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
`, SpriteKind.Miss)
    let misses = 0
    let lates = 0
    let earlies = 0
    let perfects = 0

    let health = statusbars.create(6, 70, StatusBarKind.Health)

    miss.setPosition(80, 0)
    health.max = 50
    health.value = 25
    health.setBarBorder(1, 0xd)
    health.positionDirection(CollisionDirection.Left)
    health.setOffsetPadding(0, 15)
    left.setPosition(50, 15)
    down.setPosition(70, 15)
    up.setPosition(90, 15)
    right.setPosition(110, 15)
    earlyleft.setPosition(50, 25)
    lateleft.setPosition(50, 5)
    earlydown.setPosition(70, 25)
    latedown.setPosition(70, 5)
    earlyup.setPosition(90, 25)
    lateup.setPosition(90, 5)
    earlyright.setPosition(110, 25)
    lateright.setPosition(110, 5)

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        left.setImage(img`
        . . . . . . a . . . . . . . .
        . . . . . a . a . . . . . . .
        . . . . a . . a . . . . . . .
        . . . a . . . a . . . . . . .
        . . a . . . . a a a a a a a a
        . a . . . . . . . . . . . . a
        a . . . . . . . . . . . . . a
        . a . . . . . . . . . . . . a
        . . a . . . . a a a a a a a a
        . . . a . . . a . . . . . . .
        . . . . a . . a . . . . . . .
        . . . . . a . a . . . . . . .
        . . . . . . a . . . . . . . .
    `)
        left.setKind(SpriteKind.Perfect)
        earlyleft.setKind(SpriteKind.Early)
        lateleft.setKind(SpriteKind.Late)
        pause(100)
        left.setKind(SpriteKind.Off)
        earlyleft.setKind(SpriteKind.Off)
        lateleft.setKind(SpriteKind.Off)
    })

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        down.setImage(img`
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . . . . 8 . . . 8 . . . .
        . 8 8 8 8 . . . 8 8 8 8 .
        8 . . . . . . . . . . . 8
        . 8 . . . . . . . . . 8 .
        . . 8 . . . . . . . 8 . .
        . . . 8 . . . . . 8 . . .
        . . . . 8 . . . 8 . . . .
        . . . . . 8 . 8 . . . . .
        . . . . . . 8 . . . . . .
    `)
        down.setKind(SpriteKind.Perfect)
        earlydown.setKind(SpriteKind.Early)
        latedown.setKind(SpriteKind.Late)
        pause(100)
        down.setKind(SpriteKind.Off)
        earlydown.setKind(SpriteKind.Off)
        latedown.setKind(SpriteKind.Off)
    })

    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        up.setImage(img`
        . . . . . . 7 . . . . . .
        . . . . . 7 . 7 . . . . .
        . . . . 7 . . . 7 . . . .
        . . . 7 . . . . . 7 . . .
        . . 7 . . . . . . . 7 . .
        . 7 . . . . . . . . . 7 .
        7 . . . . . . . . . . . 7
        . 7 7 7 7 . . . 7 7 7 7 .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 . . . 7 . . . .
        . . . . 7 7 7 7 7 . . . .
    `)
        up.setKind(SpriteKind.Perfect)
        earlyup.setKind(SpriteKind.Early)
        lateup.setKind(SpriteKind.Late)
        pause(100)
        up.setKind(SpriteKind.Off)
        earlyup.setKind(SpriteKind.Off)
        lateup.setKind(SpriteKind.Off)
    })

    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        right.setImage(img`
        . . . . . . . . 2 . . . . . .
        . . . . . . . 2 . 2 . . . . .
        . . . . . . . 2 . . 2 . . . .
        . . . . . . . 2 . . . 2 . . .
        2 2 2 2 2 2 2 2 . . . . 2 . .
        2 . . . . . . . . . . . . 2 .
        2 . . . . . . . . . . . . . 2
        2 . . . . . . . . . . . . 2 .
        2 2 2 2 2 2 2 2 . . . . 2 . .
        . . . . . . . 2 . . . 2 . . .
        . . . . . . . 2 . . 2 . . . .
        . . . . . . . 2 . 2 . . . . .
        . . . . . . . . 2 . . . . . .
    `)
        right.setKind(SpriteKind.Perfect)
        earlyright.setKind(SpriteKind.Early)
        lateright.setKind(SpriteKind.Late)
        pause(100)
        right.setKind(SpriteKind.Off)
        earlyright.setKind(SpriteKind.Off)
        lateright.setKind(SpriteKind.Off)
    })

    controller.left.onEvent(ControllerButtonEvent.Released, function () {
        left.setImage(img`
        . . . . . . 1 . . . . . . . .
        . . . . . 1 . 1 . . . . . . .
        . . . . 1 . . 1 . . . . . . .
        . . . 1 . . . 1 . . . . . . .
        . . 1 . . . . 1 1 1 1 1 1 1 1
        . 1 . . . . . . . . . . . . 1
        1 . . . . . . . . . . . . . 1
        . 1 . . . . . . . . . . . . 1
        . . 1 . . . . 1 1 1 1 1 1 1 1
        . . . 1 . . . 1 . . . . . . .
        . . . . 1 . . 1 . . . . . . .
        . . . . . 1 . 1 . . . . . . .
        . . . . . . 1 . . . . . . . .
    `)
    })

    controller.down.onEvent(ControllerButtonEvent.Released, function () {
        down.setImage(img`
        . . . . 1 1 1 1 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . 1 1 1 1 . . . 1 1 1 1 .
        1 . . . . . . . . . . . 1
        . 1 . . . . . . . . . 1 .
        . . 1 . . . . . . . 1 . .
        . . . 1 . . . . . 1 . . .
        . . . . 1 . . . 1 . . . .
        . . . . . 1 . 1 . . . . .
        . . . . . . 1 . . . . . .
    `)
    })

    controller.up.onEvent(ControllerButtonEvent.Released, function () {
        up.setImage(img`
        . . . . . . 1 . . . . . .
        . . . . . 1 . 1 . . . . .
        . . . . 1 . . . 1 . . . .
        . . . 1 . . . . . 1 . . .
        . . 1 . . . . . . . 1 . .
        . 1 . . . . . . . . . 1 .
        1 . . . . . . . . . . . 1
        . 1 1 1 1 . . . 1 1 1 1 .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 . . . 1 . . . .
        . . . . 1 1 1 1 1 . . . .
    `)
    })

    controller.right.onEvent(ControllerButtonEvent.Released, function () {
        right.setImage(img`
        . . . . . . . . 1 . . . . . .
        . . . . . . . 1 . 1 . . . . .
        . . . . . . . 1 . . 1 . . . .
        . . . . . . . 1 . . . 1 . . .
        1 1 1 1 1 1 1 1 . . . . 1 . .
        1 . . . . . . . . . . . . 1 .
        1 . . . . . . . . . . . . . 1
        1 . . . . . . . . . . . . 1 .
        1 1 1 1 1 1 1 1 . . . . 1 . .
        . . . . . . . 1 . . . 1 . . .
        . . . . . . . 1 . . 1 . . . .
        . . . . . . . 1 . 1 . . . . .
        . . . . . . . . 1 . . . . . .
    `)
    })

    statusbars.onZero(StatusBarKind.Health, function () {
        game.splash("GAME OVER!")
        game.splash("Perfects: " + perfects)
        game.splash("Earlies: " + earlies)
        game.splash("Lates: " + lates)
        game.splash("Misses: " + misses)
        game.over(false)
    })

    game.onUpdateInterval(spawnTime, function () {
        let lane = randint(1, 4)
        if (lane == 1) {
            let leftarrow = sprites.create(img`
        . . . . . . . . . . . . . . .
        . . . . . . a . . . . . . . .
        . . . . . a a . . . . . . . .
        . . . . a a a . . . . . . . .
        . . . a a a a a a a a a a a .
        . . a a a a a a a a a a a a .
        . a a a a a a a a a a a a a .
        . . a a a a a a a a a a a a .
        . . . a a a a a a a a a a a .
        . . . . a a a . . . . . . . .
        . . . . . a a . . . . . . . .
        . . . . . . a . . . . . . . .
        . . . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            leftarrow.setPosition(50, 160)
            leftarrow.setVelocity(0, -speed)
            sprites.onOverlap(SpriteKind.Perfect, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(300)
                health.value += 1
                perfects += 1
            })
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 2) {
            let downarrow = sprites.create(img`
        . . . . . . . . . . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 . . . .
        . 8 8 8 8 8 8 8 8 8 8 8 .
        . . 8 8 8 8 8 8 8 8 8 . .
        . . . 8 8 8 8 8 8 8 . . .
        . . . . 8 8 8 8 8 . . . .
        . . . . . 8 8 8 . . . . .
        . . . . . . 8 . . . . . .
        . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            downarrow.setPosition(70, 160)
            downarrow.setVelocity(0, -speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 3) {
            let uparrow = sprites.create(img`
        . . . . . . . . . . . . .
        . . . . . . 7 . . . . . .
        . . . . . 7 7 7 . . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 . . .
        . . 7 7 7 7 7 7 7 7 7 . .
        . 7 7 7 7 7 7 7 7 7 7 7 .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . 7 7 7 7 7 . . . .
        . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            uparrow.setPosition(90, 160)
            uparrow.setVelocity(0, -speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
        if (lane == 4) {
            let rightarrow = sprites.create(img`
        . . . . . . . . . . . . . . .
        . . . . . . . . 2 . . . . . .
        . . . . . . . . 2 2 . . . . .
        . . . . . . . . 2 2 2 . . . .
        . 2 2 2 2 2 2 2 2 2 2 2 . . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 . . .
        . . . . . . . . 2 2 2 . . . .
        . . . . . . . . 2 2 . . . . .
        . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . .
    `, SpriteKind.Arrow)
            rightarrow.setPosition(110, 160)
            rightarrow.setVelocity(0, -speed)
            sprites.onOverlap(SpriteKind.Early, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Late, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy()
                info.changeScoreBy(100)
                health.value += 1
                earlies += 1
            })
            sprites.onOverlap(SpriteKind.Miss, SpriteKind.Arrow, function (sprite, otherSprite) {
                otherSprite.destroy(effects.fire)
                health.value += -3
                misses += 1
            })
        }
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        speed = game.askForNumber("Speed (Default is 100)", 3)
        spawnTime = game.askForNumber("How fast (in ms) you want the notes to spawn", 4)
    })
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        game.splash("GAME OVER!")
        game.splash("Perfects: " + perfects)
        game.splash("Earlies: " + earlies)
        game.splash("Lates: " + lates)
        game.splash("Misses: " + misses)
        game.over(false)
    })
}

function Rightscroll() {
    game.splash("May be added later")
    game.reset()
}

function Leftscroll() {
    game.splash("May be added later")
    game.reset()
}

function Centerscroll() {
    game.splash("May be added later")
    game.reset()
}