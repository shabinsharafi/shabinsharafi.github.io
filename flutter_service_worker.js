'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "08dd4c15fc7e90127c430ebb3ab6d021",
".git/config": "f2f615453ba5b2702bf289657667c43c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0a1fa477b3f1e4448c9495c4cf6888bb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3ae0d4b9877399eed50b3a37975bdb8b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cc5ea615b3ca81878a676ce20797449",
".git/logs/refs/heads/main": "6cc5ea615b3ca81878a676ce20797449",
".git/logs/refs/remotes/origin/HEAD": "7600504be48e3c13e211b217be2ecff5",
".git/logs/refs/remotes/origin/main": "bd773ce8d04cfd368bee5a310b5239a0",
".git/objects/02/1933c06322d98901a4e99406b1a1839beb7c42": "7f76b42b5d70028426d8008ccac008b1",
".git/objects/02/7e5a8d18dccdb98a6a9edaf1208c71206e355e": "6cba2198f62e6b397aa58670b8af9e38",
".git/objects/03/0140f73c80221982c717038394b61ecb661a2c": "43db0d33b7ad581eb6e1ca97b8952811",
".git/objects/03/898e8c326d08dd17ba1b3c16d3e78c1c8c14c6": "a33d7e1dd4654de23e817f680b841d00",
".git/objects/06/7629ea2efe09f8feb0f46a3e4a99c5e15a5615": "cf4739af842016d47ce5f365006ca3b8",
".git/objects/08/6d9a29d5ed8acb505b58fc9afa6b3234852937": "170a657c95218469987c9e6fb31efae5",
".git/objects/0a/b1fd038e95bbb7ed3cefd46c6c4e717ed3a8cf": "a6decb96d07bbc5bd4ac79fb7d7c7ecd",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/e3da6c3e21b8cfdb51dd086dfa6c85c5a87a07": "61ad6f54f53822063ece1e35058f7c9d",
".git/objects/15/443889d06117e2a3397c37a4d2b27ede0d55ac": "fdb80b44c8d3b5d55314ce27d7c32e8a",
".git/objects/18/68cd8e1af2495cf4b6b6d2af7be33506a56ed6": "e9341e824157993bcbc1c818796754f1",
".git/objects/18/7aea8540f9a492f10678a92fd8eb2cf5b29e48": "99f8ccf43deeac228f6d0d45161bc41a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/ae10c99a60e3c6ca0615b5904aa65f50fb7edc": "fc98e4b0646f0879d47bdc9b82659446",
".git/objects/1d/607758a2d88e7e31c24ddf4bc261cddd157338": "65640ca900217725bb044640183727f0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/bf621b00c789613d12fad67854bb571876f8be": "ec2a31805c49084164f16292057f4c28",
".git/objects/22/fd50d7feaa9c8371196db6ec0d925389193b2d": "797913c9ac8c07f75df47e67925bbecc",
".git/objects/23/e8bdd5b908ded7f3f7eb313dc1f823cc55c8be": "73ea1695488db5e8e5e6162f4e57961a",
".git/objects/28/adf049f224b0623f6577d082de9ea2e47c84f6": "7257c8c88d972952274b0353c7152cc2",
".git/objects/2c/3c303383d5e676fcd20198cc9559e470ab7cf9": "9869c7ff0586e1ee8b0dd66fde775461",
".git/objects/2d/2d44ac3a04866b9db02e2a68b80ce3f72811d2": "302cf71ee1dd750bbde5cc488a123caa",
".git/objects/2e/ad89bce4b827f4f53975064d142487817c1340": "d0de3cacced1d07d87382bc5ef4d05f7",
".git/objects/30/48dd84ec16ab2339cafb4218d6313c848cf860": "8839669b4214a0d1942868688d8bb08d",
".git/objects/33/493d54851179314b4f6b55b8634e006fd5b85a": "8474adceea92ff34e56e809bb7820e8a",
".git/objects/37/684e61ab8052d215e639f843661b509bb24e99": "09bfe13b76f1762826c2fa69f880f304",
".git/objects/3b/a25cb3e24b2db7d90527be126a3022b317d5d6": "006c0771917d6ca720d9d2b656626c0b",
".git/objects/3d/5e80372dccfb3a7e2cbe591484541b67825889": "2182e6c9442db640b99d0b91c37e91d4",
".git/objects/40/7e7787203116570f545498443b16ef07e3e69a": "a2fa67925fcc066e32168a6a01ec7fdf",
".git/objects/42/b3e9528f582c69b39f903f544c23e5c3ef428d": "0da6a07b7374e1e9ad71c08e55713798",
".git/objects/46/ac2331ee60911328da25f46b76710be9b37de7": "d89292f3d7896af903cdcf7937885f95",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/50/f1a4d1c769cece4be96394cfa9d778ab4c09af": "9f82d5582b96a61100d4dd56d0cf4739",
".git/objects/51/13658ae90eb277198345bb988cc751da7463c4": "8c4e1d5e5ea923abd20eebcb6ca3c56b",
".git/objects/55/0bef5a42d0a1e87f026b846bb8397b442a7285": "e621eeacd15fccb0155f1b233ae4577b",
".git/objects/57/adf93bbb12fbcf924f528be7bc8750b721f1f1": "848284941aa479c89659f79d7cedc0c3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/f082f7801c8588120eca415834ec5d6ce28d78": "c985f77b94547ee70074f4cc0663bfcb",
".git/objects/59/c6362e511d4c092cede867fa2a45306a4fae3b": "6d6118f61e5ba23dacb4cd4442d62ae6",
".git/objects/5c/393a2123913ed429354a889ab8db8a1a923f16": "8faaed3baf99174650cf81abe5de992d",
".git/objects/5d/9f9a5eed5e89e8563efd131735a013795d26d3": "3c3962a6e48d7b21c49f25a5d206fead",
".git/objects/5f/42c52b513070f45f2297697a151107cc3b7e9a": "a44afeee80701b578465dcf12190e4dc",
".git/objects/61/def2f94ed92557545f00b959e5ac9184c9be34": "b3813a98c76e978009cc560b3d957489",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/2310fa3782ac913cd4ccde758b3e7c2d80f0d4": "8e65cc06a1dc4aab573d84f1d8390d67",
".git/objects/6b/295820a155d8ab766c54078d899b5d379d1920": "f0374518a8d68f23e0c24df128d1f975",
".git/objects/6c/2acb7fde83bb3722830dd8886e2d1613c8e7b5": "30a2d193e5d056486bd98e9e934af9b4",
".git/objects/6d/8852fc88a494bfe75aa8a7d66e140d77ebcd9e": "0199fd214350d950f622cb1ecae3020a",
".git/objects/70/17f73c1ed753cccf68af1f57b8f0d2247fca5c": "52415afa10aab88f249d27ee406aac10",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/5f2d60e0eec9f6f5fbcb61d5943d0e0bce85c5": "be181549b5df7d239a9323e2b785ba0b",
".git/objects/73/139633c94dfa17e7a185f69bc2bcfe48bafedb": "1b42d9b09d8b91447ac18b3b15a336f2",
".git/objects/77/caf70e9d91b6ba1f98cca1b6d061f48dc824f8": "7d2129128e0241f2bad583ff7652695d",
".git/objects/79/0dca1b510b4d92de754a944c2b170d7d723659": "70953be365c432725c4590717e2b2714",
".git/objects/79/87489a7993b20783db52761e7d85f1a11d3e6c": "224bdf375f3444c1c90a9c5604b69b69",
".git/objects/7c/36da359437580eb4fe98df88e7272d85c75249": "15eb2a6b582e893c14dcaae4308014a6",
".git/objects/82/ec6f0b776a9ec07792be3ac0b44e7d1e05feed": "2ee2e190b049dedf0671ece878cc2802",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/c0517072b830dda408f3793b0800eb27e21e65": "5577ae31aa779c3b1b88b3b31dfd0b8a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8b/8fd39de65cc9ae46ff138f894c057641658b72": "05e150f5d605f6913989eb2f5f30b933",
".git/objects/8b/fdf960e8c90becd1d05bf32355dafc840d8d14": "0e0587677d17eb839e29a73bfe677074",
".git/objects/8c/de33050819005e61f9e978aab924be5f2e39ff": "33caf5dff8726a543f9d7fddbfe6eeda",
".git/objects/8d/0db42c4d1712e062b7e39cbf3c519ba7e463d0": "18fe63dbe7efd4eeb7eafdbba76e19c7",
".git/objects/8e/46fa4d9a6a9ea0f10d67c2547c62184ebf1799": "76a2001aa3e9b4bb989458a9a6332857",
".git/objects/94/9b7bb0423b03527429b3d5a4b8e7b93f89fe94": "c5230f9d96a2d40bb34456eb0799a2c5",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9f/3607237187721ab37a301cc9f4f75b4103d029": "94ee2640087501f2625a3651879fbca7",
".git/objects/9f/ddf959555ade6b76db85387a8ce08e9ab520c9": "e6930d7d6bebfb6e72057c959f2b6ede",
".git/objects/a2/2df651b3c34a2ee703e4f97c8b54cd502c3b79": "3cbb7d90c3170b51aeb6d90500e31553",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a6/65a3c878c5d05337f70c83140deb6f7107bad7": "67294619df97bbcd7a658fe523568e59",
".git/objects/a6/a19bd6170fd62844de67220c2088ace32ebae7": "83c09fde779668588245c09ac32a63e4",
".git/objects/aa/2a60db0d8e97bb45be62837cf386fb235892c2": "af6dbb26f74129a7b24d50ad31bbc2ad",
".git/objects/ac/521a80cf3309d82bd6abcf0b56c547c8d1d4cd": "379a8909a2bc9d302f9a90a580917678",
".git/objects/ac/ca0b9512df446ac8170c29e9bc43383ac2e16c": "955882d4d0372ecd18898ec1a9bc3411",
".git/objects/ae/6ec43cbd9c71f0c2c5e60ae829603940c64910": "b005ce975d1f5e762944a15a302834a2",
".git/objects/af/7312301f5f3b42a520ffc3b913368c31d9feaf": "7f6c10c4946a7426ec494396a63b6b3e",
".git/objects/af/f1114aabedf39c1500a09f95c4a8b0d8b518ec": "cd226ca21e92fbbaf2a0601452a87841",
".git/objects/b2/ac387e9371fe3867b93528416fb0be00faa2b4": "ce7d4654e7e6323b3d7c41fa395d0981",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/04bb98f09ca6f522c446df008493b6b9f591c8": "cff8f8e5fb4cdcc55d0cee3b0f9676da",
".git/objects/b7/0e1fb620c4919102c70b56359f35c86ff78f34": "f6422ef5b722e5904a62e5e1ab549c14",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/b78794ad36975f81170bf1078035cfbd88798d": "f6fd6b4f279192d8a67cc8ea17608a50",
".git/objects/c4/275dfcbc811b6a2621c5d545ec78e7b1df9caa": "8616ae9295bc1d4c703a359506e7a626",
".git/objects/c4/dd774b25752ed412b40e3358b9f587df7ab605": "e87d71dcfb4fed9536549ff72a63cca6",
".git/objects/c6/ccfa0247b2788a283eac48f7dca5afe593de81": "fb2d424869048c17a99376c211d49ea0",
".git/objects/c8/6566d058a370b211a8c416844057b5fc0da10a": "f7f73568d85e6756a8b7e3c502909425",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/b062c3eee1e23f88a3a0627a0206fffbef1fcf": "3e1d150affb6fa7f4d748e8c6910c364",
".git/objects/cc/fae4779aa7bb407cbbd75674b1619f6b991369": "231cc4ec3dd78df2713545357e7188be",
".git/objects/cd/7356cffa64fe47acf0956d18ec186edd930bab": "72a5c2efa071a7993a49ec21e6ca8b06",
".git/objects/ce/887876b5fb4061221141b9d48103bdc90a3344": "affc95826455ff5c055d432b42ab08c6",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/e4d920411fefbd9f800ad33f80ddfe8697d2ab": "84440d205d4464b60802b98fa288cfb2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/fe734878f5017aa22157e06e9e2f526124f30f": "d320097303d427173ff893f20cb309a5",
".git/objects/dc/e70c17fe9c4fca7712a0a055cbd4648751fe81": "5e1caaa08d28d7a8c9b01735d5cfcea1",
".git/objects/df/87416c2fd8e5d89393a3ca489929f8c577c0f3": "c7b80d15813cdf5f10f2399e45005097",
".git/objects/e4/0513d28e85b777e7588c7264c2151d90c8897b": "5e2c30cf65fcc1c9e47ed2f7051007fb",
".git/objects/e4/34a0da1db38ad0e7d0f7c137f04d3ca2c94141": "ea8fa98d1e4ba1c7ca4d72e31327d9ed",
".git/objects/e6/8e23f96e53f1ed1d2bd53cf96b16b6cc582c5c": "129903fd055e6f882156b448c9d5e631",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/389a42d12a74b37f508131c7a72ee4cf32a31d": "342d266c8af996ebd68e463fc8e19eae",
".git/objects/eb/773ecea9b40668abe6855267ec947ba6568a57": "2ce6ecf3e52b2d376770dd5dee241342",
".git/objects/f1/8fa45c175fdf49a9432317f3d34b3cb12e6a54": "4f3c1ad99081808a2da58de9b9ffc1a2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d1163831351ce4d4cacc2a2df9acc3e67427dd": "150c22e056ead8887a906f48d240306b",
".git/objects/f2/f2149163b305c9e1fe7bb77263d990f5b9f4c2": "325b9b094b9deade37cb58727b4c680d",
".git/objects/f4/8259fe2b167c0397764d66ce090fb0585d3941": "34bbcc4b8d69382b9d002a14e8d100e5",
".git/objects/f6/4625359a9eaf424ed54bc8d53aa34863f4f330": "39def3a9760afaec8428588656c9be00",
".git/objects/f8/00cabe10a18e398948dd293964f881a3da4982": "512991e2121aefbabaadb8dc7616cff7",
".git/objects/f8/63c0d1cc49c4040cf863abb266af12ed1e13bc": "2915a07b415c2bcc521dee45ce51d7e6",
".git/objects/fc/fe60a7b4794452a43244e81cc43ccfaef93bed": "93e8c7de2f3a6474c338d31f06363112",
".git/objects/fd/4460a1180fb79fc49422da2ef29dab7803cbcd": "fc79fa895be8aa55b6138b64ba87b59a",
".git/objects/pack/pack-bb31174b056e8d656ff07154e2b9be1ed00d6a6f.idx": "5c602f8b36ded687a3ee235393c3792c",
".git/objects/pack/pack-bb31174b056e8d656ff07154e2b9be1ed00d6a6f.pack": "e0519700c6407ec494c636012d0f42b2",
".git/objects/pack/pack-bb31174b056e8d656ff07154e2b9be1ed00d6a6f.rev": "222658e12743370a6922d1f5ad550bcb",
".git/packed-refs": "4197051da99c895f6cd4b65ceb69de6d",
".git/refs/heads/main": "e97a6deb18172ac100bad5df150a39cb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e97a6deb18172ac100bad5df150a39cb",
"assets/AssetManifest.bin": "1a3dbf460fac23c9e202683c365fe91d",
"assets/AssetManifest.bin.json": "ab91b08d4fa22ba48ad9b167fe70f774",
"assets/AssetManifest.json": "7e8ac9204e03c9dc7111465069aa9b91",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d56eb9a0c4d42d43d9d72ad14716f2cd",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic1.jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/NOTICES": "0bdd36daf86b17c69408047ae2929c5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "acfe8616729651ee07181f35a26335c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7134a6a09ec0678a4a29afefa44b077f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "09e7a48e0870dbd2c425b9257942e9d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "33e4ad0e473ae9730b6249e1110b410f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3311bf75105d9f84380dca138288ac56",
"icons/Icon-192.png": "33e4ad0e473ae9730b6249e1110b410f",
"icons/Icon-512.png": "7cf66c79a64872d9d8496727bc55d5a9",
"index.html": "6f5b4c5990f7a8f8232c29ca25dc52cf",
"/": "6f5b4c5990f7a8f8232c29ca25dc52cf",
"main.dart.js": "fe884728d097619d7c9027dccd9bdcbd",
"manifest.json": "71f434e08409bbbd40da5e41eea58e2c",
"version.json": "4aa78f0c7b0a33a604db17d5f6893baa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
