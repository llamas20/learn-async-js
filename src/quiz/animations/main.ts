const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

if(alice10 && alice20 && alice30) {
  // Promise chain  
  // alice10.animate(aliceTumbling1, aliceTiming1).finished  
  //   .then(() => {
  //       return alice20
  //               .animate(aliceTumbling1, aliceTiming1)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice30
  //             .animate(aliceTumbling1, aliceTiming1)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));
  animateAlices(alice10, alice20, alice30);
}
else{
  console.warn("#alice not found");
}

async function animateAlices(alice1: HTMLElement, alice2: HTMLElement, alice3: HTMLElement) {
  try {
    await alice1.animate(aliceTumbling1, aliceTiming1).finished
    await alice2.animate(aliceTumbling1, aliceTiming1).finished
    await alice3.animate(aliceTumbling1, aliceTiming1).finished
    return "done" 
  }
  catch (error) {
    console.log("Error in animation:  ", error)
    return "failed"
  }
}

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  