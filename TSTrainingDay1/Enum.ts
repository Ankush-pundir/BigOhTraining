enum Directions {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function getDirection(dir : Directions): void {
    console.log(dir)
}

getDirection(Directions.Up)

