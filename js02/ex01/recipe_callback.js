function randomFail() {
    // console.log('random');
    if(Math.random() < 0.2) throw "제작 실패..!"
}

function recipe_callback() {
    if (randomFail() === undefined){
        setTimeout(()=>{console.log('반죽만들기');
        if (randomFail() === undefined)
            setTimeout(()=>{console.log('1차 발효')}, 500);},300);
            if (randomFail() === undefined){
                setTimeout(()=>{console.log('성형하기')}, 500);
                if (randomFail() === undefined){
                    setTimeout(()=>{console.log('2차 발효')}, 500);
                    if (randomFail() === undefined){
                        setTimeout(()=>{console.log('튀기기')}, 500);
                    }
                }
            }
        }
    }
}

// function recipe_callback() {
//     do {
//         let result = null;
//         setTimeout(result=randomFail(), 300);
//         console.log('반죽만들기');
//         setTimeout(result=randomFail(), 500);
//         console.log('1차 발효');
//         setTimeout(result=randomFail(), 420);
//         console.log('성형 하기');
//         setTimeout(result=randomFail(), 200);
//         console.log('2차 발효');
//         setTimeout(result=randomFail(), 500);
//         console.log('튀기기');
//     } while (result != undefined)
// }

recipe_callback();