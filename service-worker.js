/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a3ed291398534f0d3bdc10debf8cee7"
  },
  {
    "url": "assets/css/0.styles.de4ca4d0.css",
    "revision": "fd06c2bf50b7730a07e4b139c3e2ad59"
  },
  {
    "url": "assets/img/1e24bb72075b4919be574bf40410bfd9.b5f51db4.jpeg",
    "revision": "b5f51db4387b0feb9f45083152bdbbb8"
  },
  {
    "url": "assets/img/201511191002536863.30317be8.jpg",
    "revision": "30317be8e89e79667ac5522ceaca7d74"
  },
  {
    "url": "assets/img/53C6F271F8FD4B856D33D273336_1DC06C02_1EDB2.78fd953c.jpg",
    "revision": "78fd953c6f271f8fd4b856d33d273336"
  },
  {
    "url": "assets/img/63f5b29fly1gfng7xspumj20t80peav7.8715e57d.jpg",
    "revision": "8715e57d674c2ee5a5262a604c2e99f7"
  },
  {
    "url": "assets/img/6FCD4E31448F454A9ED2D556397_1E162674_71616.92bbc6fc.jpg",
    "revision": "92bbc6fcd4e31448f454a9ed2d556397"
  },
  {
    "url": "assets/img/7177303D1BBF126FCB92A415182_2AD8E6D3_1946C.108a3717.jpg",
    "revision": "108a37177303d1bbf126fcb92a415182"
  },
  {
    "url": "assets/img/72627b19639742a39dd11df0274c72e2.600f8877.jpeg",
    "revision": "600f88779e7019b920faa8485783ec60"
  },
  {
    "url": "assets/img/76F999E31BD1BED478750AFCC9B_3CB8DA93_1D1078.7b37876f.jpg",
    "revision": "7b37876f999e31bd1bed478750afcc9b"
  },
  {
    "url": "assets/img/791ac984b3544721a76b62a327756720.15b5d5b2.jpg",
    "revision": "15b5d5b2da9010c25e3c53d474815e29"
  },
  {
    "url": "assets/img/7C532B683D14D6B76F3BA668BE1_B3B20295_20BFD.bf41f7c5.jpg",
    "revision": "bf41f7c532b683d14d6b76f3ba668be1"
  },
  {
    "url": "assets/img/80E5EEA9F5E5D2AF4C6443D6D48_E56FE01E_C8D6D.7b71580e.jpg",
    "revision": "7b71580e5eea9f5e5d2af4c6443d6d48"
  },
  {
    "url": "assets/img/8717804798184762503.4c62c90f.jpg",
    "revision": "4c62c90f98408f9e2daeba3160f13a8a"
  },
  {
    "url": "assets/img/8A3E3DE17CA13EC1D1FA605FF1C_E04C6EDE_4710F.b17688a3.jpg",
    "revision": "b17688a3e3de17ca13ec1d1fa605ff1c"
  },
  {
    "url": "assets/img/98F25FEFCBDCC7B360DBB23EF87_0B07A178_23C32.cc32398f.jpg",
    "revision": "cc32398f25fefcbdcc7b360dbb23ef87"
  },
  {
    "url": "assets/img/BE7310D19C5F0F5E974E90BD4D3_1F1749BE_41B37.16e9fbe7.jpg",
    "revision": "16e9fbe7310d19c5f0f5e974e90bd4d3"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/c995d143ad4bd113cc8b39a2ebf666074afb05ba.3f30b653.jpeg",
    "revision": "3f30b6536a9710dd216b6bd6a016df6d"
  },
  {
    "url": "assets/img/CE6BFAFFD96B459CFBE8CA2AB92_23275869_3A8E3.47228ce6.gif",
    "revision": "47228ce6bfaffd96b459cfbe8ca2ab92"
  },
  {
    "url": "assets/img/D746A0AFDCB4E7BD89ED4D5FE79_1511444C_365B4.04d7fd74.jpg",
    "revision": "04d7fd746a0afdcb4e7bd89ed4d5fe79"
  },
  {
    "url": "assets/img/FA5AD9057E9A0A44A3C0A310511_BC32C1BF_468C9.3d131fa5.jpg",
    "revision": "3d131fa5ad9057e9a0a44a3c0a310511"
  },
  {
    "url": "assets/img/fcfaaf51f3deb48fbf640c1460520d212cf57844.d6791b74.jpeg",
    "revision": "d6791b746ef892c29cc084350c81c882"
  },
  {
    "url": "assets/img/image-20210825235347729.2045b10e.png",
    "revision": "2045b10e54afe387fcfd832323495861"
  },
  {
    "url": "assets/img/image-20210829140615263.dde4aa16.png",
    "revision": "dde4aa16ead6b137b5e7a7a45f0adfa1"
  },
  {
    "url": "assets/img/image-20210829140628253.9fff8f1c.png",
    "revision": "9fff8f1c544779477925529320df9cd8"
  },
  {
    "url": "assets/img/image-20210829140656635.07aa0044.png",
    "revision": "07aa00449dd9060227407f8b1025b033"
  },
  {
    "url": "assets/img/image-20210829140729090.04ba4b9f.png",
    "revision": "04ba4b9f8f657d0c3d18b054372ed2eb"
  },
  {
    "url": "assets/img/image-20210829140802832.cb8a0cc1.png",
    "revision": "cb8a0cc1aa85fcd97853f105f45370aa"
  },
  {
    "url": "assets/img/image-20210829140815459.25d7e77a.png",
    "revision": "25d7e77a667cf098f57c9818ad120e4d"
  },
  {
    "url": "assets/img/image-20210829140836949.92077bb1.png",
    "revision": "92077bb12179688636290c82f359a457"
  },
  {
    "url": "assets/img/image-20210829140854974.9f6bbb86.png",
    "revision": "9f6bbb860f1f2f360983afc51d9a7490"
  },
  {
    "url": "assets/img/image-20210829140907890.9667e8a8.png",
    "revision": "9667e8a8a6f344ad9f73ea54219559fd"
  },
  {
    "url": "assets/img/image-20210829140919489.54c423c5.png",
    "revision": "54c423c5cbc0f0f8849d2644593eebd1"
  },
  {
    "url": "assets/img/image-20210923190655416.14bb1375.png",
    "revision": "14bb137525753bef9be4277d87925e7b"
  },
  {
    "url": "assets/img/image-20211029224527238.4e1cea3a.png",
    "revision": "4e1cea3aac8cfb0d7f22cdf5e3bd63e3"
  },
  {
    "url": "assets/img/image-20211029224744233.45298c60.png",
    "revision": "45298c60c9d2b81344e0a67f0f3c23ae"
  },
  {
    "url": "assets/img/image-20211030150153367.ff6d27e3.png",
    "revision": "ff6d27e30484832b2d477b45cd20edae"
  },
  {
    "url": "assets/img/image-20211030150453320.8455139d.png",
    "revision": "8455139d7e3bf96d7816e68b0da6dea2"
  },
  {
    "url": "assets/img/image-20211030211545509.15373421.png",
    "revision": "153734212f81482f74e36905a766bb34"
  },
  {
    "url": "assets/img/image-20211115223519290.f9f3018b.png",
    "revision": "f9f3018bf9b7892928d9838b47b43ccf"
  },
  {
    "url": "assets/img/image-20220630173734744.115380d4.png",
    "revision": "115380d48f43c5d825494afaf0123670"
  },
  {
    "url": "assets/img/iShot2022-02-25-00.23.24.cc2fba52.png",
    "revision": "cc2fba521b15e41fd1437b07388cdcc9"
  },
  {
    "url": "assets/img/Screenshot_20210910_091840_edit_245042770780836.f4865b89.jpg",
    "revision": "f4865b89a928deec86cd007b8029e54e"
  },
  {
    "url": "assets/img/src=http%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20210227%2F219f16c623924600adf600c475258892.jpeg&refer=http%3A%2F%2Fp5.itc-20220308201137133.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt.dc7ea5ed.jpeg",
    "revision": "dc7ea5ed2a07623d72ba488a6d9606b9"
  },
  {
    "url": "assets/img/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F10687%2F20160721224913-498543295.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt.5a845601.jpeg",
    "revision": "5a84560106752889c61cfd8d41eb09f7"
  },
  {
    "url": "assets/js/1.77c48626.js",
    "revision": "dd126604fcd18d99f73439865c6aa200"
  },
  {
    "url": "assets/js/10.2f66b3b5.js",
    "revision": "6196158333e89078b2aa4c1db79dd875"
  },
  {
    "url": "assets/js/11.df05d3da.js",
    "revision": "2f900f745fe19a0a2edb07d716b32153"
  },
  {
    "url": "assets/js/12.6cf316a4.js",
    "revision": "f2d10a58c1d069f01b9bfe6b696631cd"
  },
  {
    "url": "assets/js/13.77e27518.js",
    "revision": "d3fdb02f0ec8ba852cf5ea25814edec1"
  },
  {
    "url": "assets/js/14.2220471a.js",
    "revision": "e2f08469c777a4fb2075f9a45cf63307"
  },
  {
    "url": "assets/js/15.a801c26b.js",
    "revision": "2be4c16aa58a3eb071bbd94bfe329bda"
  },
  {
    "url": "assets/js/16.0f798532.js",
    "revision": "9e8771373de9f0da4506fa01c8f6f9a5"
  },
  {
    "url": "assets/js/17.6645b1a2.js",
    "revision": "52281ef8e2c3b3b684aa843f9de6089e"
  },
  {
    "url": "assets/js/18.abffb19e.js",
    "revision": "99d5d18e64c74efc5e96b82fc47c4be1"
  },
  {
    "url": "assets/js/19.8f8225cb.js",
    "revision": "1802c84c414decf5ba88ff2d9e2a3751"
  },
  {
    "url": "assets/js/20.4617b404.js",
    "revision": "68116cd64b379d42e067ae3bb786992c"
  },
  {
    "url": "assets/js/21.02f90cc8.js",
    "revision": "8b368a24a278d98d4efca119bf2675b1"
  },
  {
    "url": "assets/js/22.65cf204a.js",
    "revision": "8fd93c224bf1818f6e084f7e727352be"
  },
  {
    "url": "assets/js/23.e9d62ab6.js",
    "revision": "d0865d243bb5cccf168fbd0b3a71a478"
  },
  {
    "url": "assets/js/24.ef5d73d9.js",
    "revision": "bc70fc971ab3ca696ffeb01aff79f40e"
  },
  {
    "url": "assets/js/25.06c4e384.js",
    "revision": "9dfbae4ae3b5c17868e025dddf3bcf2d"
  },
  {
    "url": "assets/js/26.6c11fe53.js",
    "revision": "5097101bca5780c2df120c7ac6e06fb8"
  },
  {
    "url": "assets/js/27.ef470a98.js",
    "revision": "f792fc8fd7f6a887e1b37eac01ccfa1a"
  },
  {
    "url": "assets/js/28.d8871438.js",
    "revision": "02e7984c293ff259a43e2ce3963b696c"
  },
  {
    "url": "assets/js/29.bce59f73.js",
    "revision": "009082c8602a822349e1e6cac0640a3c"
  },
  {
    "url": "assets/js/3.edf2166e.js",
    "revision": "a8d7071705eefc192c6b461d37b87431"
  },
  {
    "url": "assets/js/30.75a6fb22.js",
    "revision": "e0d2ed1db6def7d9f6d9132ab4a5fb63"
  },
  {
    "url": "assets/js/31.845d2b54.js",
    "revision": "0e3fae388ad04dac4396f774af3226d0"
  },
  {
    "url": "assets/js/32.6c17a3cd.js",
    "revision": "b91707e0d2ca185c110e5041ef5eb37c"
  },
  {
    "url": "assets/js/33.bc9d15db.js",
    "revision": "812fdbc5817c44a6d386e5168aff8120"
  },
  {
    "url": "assets/js/34.e4847917.js",
    "revision": "f6d9a2b74d475d34750a79ce2fd6ee85"
  },
  {
    "url": "assets/js/35.35ef0aeb.js",
    "revision": "bc60ee9239cf3bed0d529ce8f3f80e15"
  },
  {
    "url": "assets/js/36.a3bc23de.js",
    "revision": "2578f92340b8fdb0ef5b4c82533b10ca"
  },
  {
    "url": "assets/js/4.e89996af.js",
    "revision": "713f47ced09b74fbea56dc82cdeeedf4"
  },
  {
    "url": "assets/js/5.6904d416.js",
    "revision": "e05d10efa3112b2c45dc348f18c1f936"
  },
  {
    "url": "assets/js/6.b822a749.js",
    "revision": "dbfc1ef94c855088a437fb4e849b78d3"
  },
  {
    "url": "assets/js/7.4826302e.js",
    "revision": "3d73ea4c1075e04acaf6c72b81ed94d3"
  },
  {
    "url": "assets/js/8.02ecd149.js",
    "revision": "e59a4f0ef250b531e22c143767322f14"
  },
  {
    "url": "assets/js/9.44fadf33.js",
    "revision": "6b56baf7f2a8635977055554d11f4a22"
  },
  {
    "url": "assets/js/app.99df8a02.js",
    "revision": "ca850ba4174c55b22c601db29f72b357"
  },
  {
    "url": "avatar.png",
    "revision": "3a9108db688b40eb41b389c935ada863"
  },
  {
    "url": "backup/avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "backup/hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "backup/logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "blogs/cai-keng/2021/032801.html",
    "revision": "78babc7aca102ae0a73acde618468dd0"
  },
  {
    "url": "blogs/cai-keng/2021/081901.html",
    "revision": "4c7a9e20d70e895a524479945855e9f0"
  },
  {
    "url": "blogs/cai-keng/2021/083101.html",
    "revision": "3c499e386dc267bdf671d0364c83435a"
  },
  {
    "url": "blogs/cai-keng/2021/091401.html",
    "revision": "28c1e64403b613d331e940945b2c18b1"
  },
  {
    "url": "blogs/cai-keng/2021/102901.html",
    "revision": "a19bbf2e5dbc84a015a4df3e15b06f6c"
  },
  {
    "url": "blogs/cai-keng/2021/112201.html",
    "revision": "01369d920857f09a40c84c319ceaed7f"
  },
  {
    "url": "blogs/wen-ti-su-cha/2021/072201.html",
    "revision": "adcc03e6478ab8e5c989a20db110c7cb"
  },
  {
    "url": "blogs/wen-ti-su-cha/2021/091401.html",
    "revision": "a35f2b86a691fd27789af5ef72f2884f"
  },
  {
    "url": "blogs/wen-ti-su-cha/2021/092301.html",
    "revision": "8dabbf5b7f6e4274bc0056aa908fe853"
  },
  {
    "url": "blogs/wen-ti-su-cha/2021/101001.html",
    "revision": "cbea73515ca168c41a90f6d81e05409e"
  },
  {
    "url": "blogs/wen-ti-su-cha/2021/101301.html",
    "revision": "963f7be0e5c9ddd035ce620de13c7d02"
  },
  {
    "url": "blogs/wen-ti-su-cha/2022/022501.html",
    "revision": "9bd8e33d0ceb1dbf1aa6030bac23d7fd"
  },
  {
    "url": "blogs/wen-zhang/2022/030401.html",
    "revision": "5902d897b38531e3f5ae0b1d2bebf263"
  },
  {
    "url": "blogs/xiang-mu-zong-jie/2021/091001.html",
    "revision": "923197d0efd52139b32f8622df7ecccd"
  },
  {
    "url": "blogs/xiang-mu-zong-jie/2021/111701.html",
    "revision": "9516f8d9fe4fb653dc4f954f83ee76f4"
  },
  {
    "url": "blogs/xue-xi-bi-ji/2021/093001.html",
    "revision": "b4b70e0593d548832ae15477234799ff"
  },
  {
    "url": "blogs/xue-xi-bi-ji/2021/111501.html",
    "revision": "8489fdf468abc174044fa6778fa8a987"
  },
  {
    "url": "blogs/you-xi/2021/082801.html",
    "revision": "3aa165f0a811bdd5c189978c5dedb3d6"
  },
  {
    "url": "categories/index.html",
    "revision": "350786abfbe819c40a21911b57c813c4"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "e96c42e15e6518c9498f5050f5f2923c"
  },
  {
    "url": "categories/文章/index.html",
    "revision": "b4aa3ccd0a7a519de34a5f8eaa06b526"
  },
  {
    "url": "categories/游戏/index.html",
    "revision": "2d46ed5f52576cdd1f9347943a3f1e51"
  },
  {
    "url": "categories/踩坑/index.html",
    "revision": "800294895fcaf03d955185374da3d9a3"
  },
  {
    "url": "categories/问题速查/index.html",
    "revision": "dddef43d23c7921a0746b72a932d0684"
  },
  {
    "url": "categories/项目总结/index.html",
    "revision": "9a2e153fcc48ac05b1dc69cd3ae92e34"
  },
  {
    "url": "docs/ji-jian/index.html",
    "revision": "b11803931428c4e91bb2e81d5505d500"
  },
  {
    "url": "docs/ji-jian/ji-jian-shi-jian-zhou.html",
    "revision": "58b212fd5507693381c33f8d29c7dea2"
  },
  {
    "url": "docs/ji-jian/jian-zhu-mian-ji-kao-ju.html",
    "revision": "ba948d41b7c9edc7529d7284e477df8a"
  },
  {
    "url": "docs/ji-jian/nan-da-men-kai-xiao.html",
    "revision": "036bc1260b7641b6b588278409bff1ab"
  },
  {
    "url": "docs/test-doc/index.html",
    "revision": "c6b976aab9bc5164a884ffdda2b652b4"
  },
  {
    "url": "docs/test-doc/test1.html",
    "revision": "8b3865474c9fa4b3f4a9df6b60062f12"
  },
  {
    "url": "favicon.png",
    "revision": "6e6dae285238ed1c87a297a70feb3f98"
  },
  {
    "url": "index.html",
    "revision": "b46a529155ae7462d72bf705faafc249"
  },
  {
    "url": "tag/index.html",
    "revision": "4168060710014dc67735c06fab25a81a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f52d8b81003e3f6a0baf7ccbb7a96e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
