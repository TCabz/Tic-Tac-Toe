// Player 1 is X
Let player1 = X
// Player 2 is O
Let player2 = O
//////////////////////////////////////////////////
// BONUS: player 1 choose a color
// BONUS: player 2 choose a color
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// logic setup for if statements
    // each box has a column & row designation
        // top row designations: c1r1, c2r1, c3r1
        let c1r1 = 0
        let c2r1 = 0
        let c3r1 = 0
        // middle row designations: c1r1, c2r2, c3r2
        let c1r2 = 0
        let c2r2 = 0
        let c3r2 = 0
        // bottom row designations: c1r3, c2r3, c3r3
        let c1r3 = 0
        let c2r3 = 0
        let c3r3 = 0
    // x = 1
        let x = 1
    // y = 100
        let y = 100
//////////////////////////////////////////////////
    // player 1 1st pick
    // player 2 1st pick
    // player 1 2nd pick
    // player 2 2nd pick
    // player 1 3rd pick
    // player 2 3rd pick
    // player 1 4th pick
    // player 2 4th pick
//////////////////////////////////////////////////    
// BONUS: once cell is selected the other player cannot select the same cell
//////////////////////////////////////////////////
//////////////////////////////////////////////////    
// winnner logic
    // x winner
        // sum of row 1 = 3 then "x wins"
        if (c1r1 + c2r1 + c3r1 === 3) {
            console.log("Player 1 Wins!!!")
        } else {
        // sum of row 2 = 3 then "x wins"
        if (c1r2 + c2r2 + c3r2 === 3) {
            console.log("Player 1 Wins!!!")
            } else {
        // sum of row 3 = 3 then "x wins"
        if (c1r3 + c2r3 + c3r3 === 3) {
            console.log("Player 1 Wins!!!")
            } else {
        // sum of column 1 = 3 then "x wins"
        if (c1r1 + c1r2 + c1r3 === 3) {
            console.log("Player 1 Wins!!!")
            } else {
        // sum of column 2 = 3 then "x wins"
        if (c2r1 + c2r2 + c2r3 === 3) {
            console.log("Player 1 Wins!!!")
            } else {
        // sum of column 3 = 3 then "x wins"
        if (c3r1 + c3r2 + c3r3 === 3) {
            console.log("Player 1 Wins!!!")
            } else {
       // sum of diagonal back slash c1r1 + c2r2 + c3r3 = 3 then "x wins"
       if (c1r1 + c2r2 + c3r3 === 3) {
            console.log("Player 1 Wins!!!")
        } else {
        // sum of slash c3r1 + c2r2 + c1r3 = 3 then "x wins"
        if (c3r1 + c2r2 + c1r3 === 3) {
            console.log("Player 1 Wins!!!")
        } else {
//////////////////////////////////////////////////                  // y winner      
        // sum of row 1 = 3 then "y wins"
        if (c1r1 + c2r1 + c3r1 === 300) {
            console.log("Player 2 Wins!!!")
        } else {
        // sum of row 2 = 3 then "y wins"
        if (c1r2 + c2r2 + c3r2 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
        // sum of row 3 = 3 then "y wins"
        if (c1r3 + c2r3 + c3r3 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
        // sum of column 1 = 3 then "y wins"
        if (c1r1 + c1r2 + c1r3 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
        // sum of column 2 = 3 then "y wins"
        if (c2r1 + c2r2 + c2r3 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
        // sum of column 3 = 3 then "y wins"
        if (c3r1 + c3r2 + c3r3 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
       // sum of diagonal back slash c1r1 + c2r2 + c3r3 = 3 then "y wins"
       if (c1r1 + c2r2 + c3r3 === 300) {
        console.log("Player 2 Wins!!!")
            } else {
        // sum of slash c3r1 + c2r2 + c1r3 = 3 then "x wins"
        if (c3r1 + c2r2 + c1r3 === 300) {
            console.log("Player 2 Wins!!!")
            } else {
    }

//////////////////////////////////////////////////    
    // tie logic below
        // run the sum of all cells to check if it is a tie
            // sum of all cells is = 404 then "it's a tie"
            if (c1r1 + c2r1 + c3r1 + c1r2 + c2r2 + c3r2 + c1r3 + c2r3 + c3r3 >=== 404) {
                console.log("It's a tie!!!")
                } else {
    // reset
//////////////////////////////////////////////////    
    // reset game after win
    // reset game if tie
    // reset game at any point
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// need click listeners for all boxes
//////////////////////////////////////////////////
// Graphics
    // board setup
        // draw white box using drawbox function?
            // associate boxes with cell dsignations
        // draw lines between boxes?