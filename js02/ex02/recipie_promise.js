const delay = [3000, 5000, 4200, 2000, 5000];
const recipe = ['반죽 만들기', '1차 발효', '성형 하기', '2차 발효', '튀기기'];

function baking(step) {
	return new Promise(function(resolve, reject){
		console.log(recipe[step]);
		setTimeout(function(){
			if (Math.random() < 0.2) reject(step);
			else resolve(step+1)
		}, delay[step])
	})
}

function tryAgain(step)
{
	console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
	startStep(step);
}

function startStep(step) {
	if (step > 4)
	{
		console.log("꽈배기 완성!!")
		return;
	}
	baking(step).then(startStep).catch(tryAgain);
}

//얘는 왜 안되는거야_물어보기
// function recipie_promise(step){
//     return new Promise(function(resolve, reject){
//         console.log(recipe[step], "제작중...");
//         setTimeout(function(){
//             if (Math.random() < 0.2) reject(step);
//             else resolve(step + 1);
//         }, delay[step]);
//     })
// }

// function retry(step) {
//     console.log('제작실패..!');
//     startStep(step);
// }

// function startStep(step){
//     if(step > 4){
//         console.log("완성")
//         return;
//     }
//     recipie_promise(step).then(startStep).catch(retry);
// }

startStep(0);