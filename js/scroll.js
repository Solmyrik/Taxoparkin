gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
});

// gsap.registerPlugin(ScrollTrigger);

// console.log(gsap);

// const panels = gsap.utils.toArray('.panel');

// panels.forEach((panel, i) => {
//   if (panels[i + 1]) {
//     console.log(panels);
//     ScrollTrigger.create({
//       trigger: '#main',
//       start: 'top+=' + 100 * (i + 1) + '%' + ' top',
//       end: 'top+=' + 100 * (i + 1) + '%' + ' top',
//       // markers: {
//       //   startColor: "white",
//       //   endColor: "white",
//       //   indent: 150 * i + 1
//       // },
//       id: i,
//       onEnter: () => {
//         gsap
//           .timeline()
//           .to(panel, {
//             scale: 0.8,
//             autoAlpha: 0,
//           })
//           .to(
//             panels[i + 1],
//             {
//               scale: 1,
//               autoAlpha: 1,
//             },
//             '<',
//           );
//       },
//       onEnterBack: () => {
//         gsap
//           .timeline()
//           .to(panel, {
//             scale: 1,
//             autoAlpha: 1,
//           })
//           .to(
//             panels[i + 1],
//             {
//               scale: 0.8,
//               autoAlpha: 0,
//             },
//             '<',
//           );
//       },
//     });
//   }
// });

// ScrollTrigger.create({
//   trigger: '#main',
//   pin: true,
//   end: '+=' + panels.length * 100 + '%',
//   // markers: {
//   //   startColor: "fuchsia",
//   //   endColor: "fuchsia"
//   // }
// });
