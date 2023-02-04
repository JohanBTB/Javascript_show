
export function shortcuts(e){
    

}

let x = 0,
y = 0;

export function moveBall(e, ball, stage){
    const $ball = document.querySelector(ball),
    $stage = document.querySelector(stage);

    const limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

    const move = (direction)=>{

        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    };

    
    switch(e.keyCode){
        case 37:
            x--
            e.preventDefault();
            if(limitBall.left <= limitStage.left) x++; 
            
            move("left");
            break;

        case 38:
            
            
            if(limitBall.top-10 > limitStage.top){
                e.preventDefault();
                y--;
            }
             
            move("up");
            break;
        
        case 39:
            x++;
            e.preventDefault();
            
            if(limitBall.right >= limitStage.right) x--; 
             
            move("right");
            break;
        
        case 40:
            if(limitBall.bottom+10 < limitStage.bottom){
                e.preventDefault();
                y++;
            }
            move("down");
            break;
        
    }

}

