function drawBowl()
{
    var bowlWidth = 200;
    var bowlHeight = 100;
    var bowlX = 200;
    var bowlY = 150;

    // Draw the bowl with rounded corners
    ctx.beginPath();
    ctx.moveTo(bowlX + 20, bowlY);
    ctx.arcTo(bowlX + bowlWidth, bowlY, bowlX + bowlWidth, bowlY + bowlHeight, 20);
    ctx.arcTo(bowlX + bowlWidth, bowlY + bowlHeight, bowlX, bowlY + bowlHeight, 20);
    ctx.arcTo(bowlX, bowlY + bowlHeight, bowlX, bowlY, 20);
    ctx.arcTo(bowlX, bowlY, bowlX + 20, bowlY, 20);
    ctx.closePath();
    ctx.fillStyle = 'tan';
    ctx.fill();
    ctx.stroke();
}