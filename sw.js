importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"85dd540ee91b6cd6d8cc1845ca535962","url":"contributors.html"},{"revision":"735fa998d056970b70eff019db38225c","url":"feedback.html"},{"revision":"461cbc0aa70d7eaa7cf37c4a1a0fc5f9","url":"images/1a.png"},{"revision":"2c354b2aaa38d6bf2faa0c71bec2833d","url":"images/1b.png"},{"revision":"9e54aadc4ed46ed05e2abb5dd70aafd9","url":"images/1c.png"},{"revision":"0295593e51ac261ff060e3062f31f52f","url":"images/1d.png"},{"revision":"c9dc4ecba264d860976efcab4aea22b9","url":"images/2a.png"},{"revision":"51e2a372be457627fc495407d290760a","url":"images/2b.png"},{"revision":"957059978582236bc8644850a2c2e972","url":"images/2c.png"},{"revision":"93826b5f0518146c4de2225dd9b30b75","url":"images/2d.png"},{"revision":"adfd27b9db0883dfdcbe8ee93bce9f83","url":"images/9a2.png"},{"revision":"a392d8e52eb50895b6e3f7862459c3d8","url":"images/burette.png"},{"revision":"c779493bdd71f23b8146d6eaffeb9642","url":"images/fig1.png"},{"revision":"f974b2a22cf71d259bb3bb3efeaecdac","url":"images/fig2new.png"},{"revision":"d9143843cb655779208980fd7f20fbbe","url":"images/fig3.png"},{"revision":"9d41a59888053f7d2002836904026a33","url":"images/fig4.png"},{"revision":"d1021d1aa393a549abc1b65612b6e5d9","url":"images/fig5.png"},{"revision":"89dc7265255a71e468e396108e6dc7fc","url":"images/fig6.png"},{"revision":"8987a7580e1576c47b563bb4559649f8","url":"images/fig7.png"},{"revision":"0cfda6607c64cc3219cc5f11f0ac46c9","url":"images/fig8.png"},{"revision":"a6f4aae88e23e91a5f5ab0fbd3ad7903","url":"images/fig8a1.png"},{"revision":"0698ca2a2674b3ee3a24431bb834e78b","url":"images/Fig8b.png"},{"revision":"3bdfa7fe8e239b6c1396471766a774e6","url":"images/fig9a3.png"},{"revision":"ec24c7f0877e7a81160a2b8e974a6535","url":"images/fig9a4.png"},{"revision":"5fb2c9f50d1029b517a5b27e69a97f91","url":"images/figure7.png"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"ad114577cb43ac48606781db424fbc30","url":"images/phmeter.png"},{"revision":"67e261b09a8f4a363aa7a15ee6b67f01","url":"images/q5.png"},{"revision":"dd88ad8b2178490b02242cb98dbf0540","url":"images/Simulation peptide.png"},{"revision":"020749d12b687839844fe8a709e781ce","url":"index.html"},{"revision":"8a1ba4bf2080ba90fc671830fdae0891","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"0e9b6f9e90bd51350a62764bb043805f","url":"posttest.html"},{"revision":"ca079a06dac11a91c95373808a297a45","url":"posttest.json"},{"revision":"bb2a4c9a46f08f06f092038b1054b67f","url":"pretest.html"},{"revision":"143f8878831cd593e8275a5db80029d0","url":"pretest.json"},{"revision":"50f49d9e849a6897d4eb730d78287cec","url":"procedure.html"},{"revision":"26b576983eab228c251c97dde86756cc","url":"references.html"},{"revision":"ec401c7bf46bee49e6491b63da82041a","url":"simulation.html"},{"revision":"c92e501a46f2b5c2af3f5e666c70c189","url":"simulation/css/main.css"},{"revision":"4d003f7410137ff39b14bd6dd6bbae34","url":"simulation/images/burette_stand_b.png"},{"revision":"a578272d986473bdecf12877d9d5f808","url":"simulation/images/burette_stand_holder.png"},{"revision":"4690d9f64c08ea7f19abd3661598e722","url":"simulation/images/burette_stand.png"},{"revision":"746a4b7769f5ba281e8399b2bb94a7ea","url":"simulation/images/burette_switch.png"},{"revision":"a3623af054d39e60d4956dfbd7d48d66","url":"simulation/images/burette.jpg"},{"revision":"ce35f575c4dad5d2dbb34a9e114c5ffd","url":"simulation/images/burette.png"},{"revision":"21111a0a1efb8f22b535d7dcdcf97725","url":"simulation/images/buretteimg.jpg"},{"revision":"fd60945e666c4ae7e09415094861afeb","url":"simulation/images/buretteimg.png"},{"revision":"bf4983cfa5c4ed551a99a025d1e3c9ba","url":"simulation/images/chart1.jpg"},{"revision":"b1d2dd79fc451c7551709a328c066479","url":"simulation/images/chart2.jpg"},{"revision":"b1d2dd79fc451c7551709a328c066479","url":"simulation/images/chart3.jpg"},{"revision":"a9a8c9e782fbca719f3670e0fadf316f","url":"simulation/images/conicalflask.png"},{"revision":"10a31eaaedf799f6a677d065e775068f","url":"simulation/images/conicalflaskimg.png"},{"revision":"1d0622b33bff9649984f54150fd3f629","url":"simulation/images/pH_meter.png"},{"revision":"4d55021614968adfe3a02b757098de65","url":"simulation/images/phmeter.png"},{"revision":"a6d62f3eb6c6c971e13af0858d443265","url":"simulation/images/phprobe.png"},{"revision":"d3504260df99489d6849f8ddc9071303","url":"simulation/images/phprobeholder.png"},{"revision":"c6ae367dd018139c2c3c40271d8f9f1b","url":"simulation/images/posdot.png"},{"revision":"19bff2c1393bd8c027f4868211eac9d0","url":"simulation/images/probdrop.png"},{"revision":"135161cc74f52efaabc10cf0255eddd3","url":"simulation/images/Simulation_peptide.png"},{"revision":"1550721e7a5f5aa59d74237777929c5a","url":"simulation/images/table.png"},{"revision":"509e735395e3de48e5c6bc1dfd23f0df","url":"simulation/index.html"},{"revision":"6b1468e46e3215ae4c03f020a73e38a1","url":"simulation/js/main.js"},{"revision":"41adc718b2e20f39debb10acd4e82782","url":"theory.html"},{"revision":"dea212ce2e0f263c645d72ea4676d661","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );