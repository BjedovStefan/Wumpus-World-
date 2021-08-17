$(document).ready(function () {
    wumpus = new Wumpus();
    wumpus.reStart();

    $(window).keypress(function (e) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault();
            var dir = wumpus.move();
            wumpus.handMove(dir);
        }
    });

    var timer = function () {
        if (!wumpus.gameOver) {
            var dir = wumpus.move();
            wumpus.handMove(dir);
        }
    };

    $("#startGame").click(function () {
        setInterval(timer, 800);
    });
});

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            wumpus.handMove(wumpus.Moves.Left);
            break;

        case 38: // up
            wumpus.handMove(wumpus.Moves.Up);
            break;

        case 39: // right
            wumpus.handMove(wumpus.Moves.Right);
            break;

        case 40: // down
            wumpus.handMove(wumpus.Moves.Down);
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
