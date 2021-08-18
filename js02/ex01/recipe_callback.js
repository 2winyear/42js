function randomFail() {
    if(Math.random() < 0.2) throw "제작 실패..!"
}

function step5() {
    console.log('튀기기 중...');
    try {
        randomFail();
        setTimeout(()=>{console.log('튀기기 완료')}, 5000);
        }
    catch (err) {
        console.log(err);
        step5();
    }
}

function step4() {
    console.log('2차발효 중...');
    try {
        randomFail();
        setTimeout(()=>{console.log('2차발효 완료')}, 2000);
        step5();
        }
    catch (err) {
        console.log(err);
        step4();
    }
}

function step3() {
    console.log('성형 중...');
    try {
        randomFail();
        setTimeout(()=>{console.log('성형 완료')}, 4200);
        step4();
        }
    catch (err) {
        console.log(err);
        step3();
    }
}

function step2() {
    console.log('1차발효중...');
    try {
        randomFail();
        setTimeout(()=>{console.log('1차발효 완료')}, 5000);
        step3();
        }
    catch (err) {
        console.log(err);
        step2();
    }
}

function step1() {
    console.log('반죽만드는중...');
    try {
        randomFail();
        setTimeout(()=>{console.log('반죽 완료')}, 3000);
        step2();
        }
    catch (err) {
        console.log(err);
        step1();
    }
}

function recipe_callback() {
    step1();
}

recipe_callback()