const d=document;
let x=0;
let y=0;

export function moveBall(e,ball,stage){

    /* Almacenando las variables */
    const $ball=d.querySelector(ball),
            $stage=d.querySelector(stage),
            limitBall=$ball.getBoundingClientRect(),
            limitStage=$stage.getBoundingClientRect();

    console.log(e.keyCode);
    console.log(limitBall,limitStage);
    switch (e.keyCode) {
        case 37: /*Left*/
            e.preventDefault();
            if(limitBall.left>limitStage.left){
                e.preventDefault();
                x--;
            }
            
        break;

        case 38: /*Up*/
            
            if(limitBall.top>limitStage.top){
                e.preventDefault();
                y--;
            } 
        break;

        case 39: /*Right*/
            
            if(limitBall.right<limitStage.right){
                e.preventDefault();
                x++;
            } 
        break;

        case 40: /*Down*/
            
            if(limitBall.bottom<limitStage.bottom){
                e.preventDefault();
                y++;
            } 
        break;
    
        default:
            break;
    }
    $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
}

export function shortcuts(e){
    /*
    console.log(e);
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.ctrlKey)
    console.log(e.altKey)
    */
}