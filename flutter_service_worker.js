'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dd622712a1e76616bacc40e4f09d410b",
".git/config": "f2f615453ba5b2702bf289657667c43c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c5831ec008ac08a6193d3677290546d9",
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
".git/index": "a60bd11954b69a2847e2cc33b4d5d9b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff40c3742cf58bc272bd436d38899ce9",
".git/logs/refs/heads/main": "ff40c3742cf58bc272bd436d38899ce9",
".git/logs/refs/remotes/origin/HEAD": "d4b43da48f4778f1abdebf066b51f89b",
".git/logs/refs/remotes/origin/main": "92a00c0380499f16fdbe29aaa6aa1bf3",
".git/objects/02/3fd206f03b1d83fb03f269cb5456c678ceb8f6": "90eaa9c4184b1aea21f4bd83cf931476",
".git/objects/05/2fdda5b8c9fcbb3dea3d7b4b97f84656f16578": "96ee803e3014d60788b36f3d435c7973",
".git/objects/07/2c3432a4bd15c177b2b57cd9ac85336f437366": "43253be2fb15dab145cf08cab51bf4b7",
".git/objects/07/792721c9d7e737c3308d644d180e19f0e6a208": "4cb447cc0bdd7b71f19d4eaf8d100364",
".git/objects/07/a2d30ff5a43cab87ef5f4cb68932dfc3c8c288": "51af35d1c6f72686ddf4048785e8fd33",
".git/objects/09/5b85ef405150d718a567bc9d32ad1d9661faae": "87d7305c823bb42bf881bb04551f89e6",
".git/objects/0a/c2999a36d26a5a0744c8dbca91ea55df928171": "7fe0d3e213192f2fe577f77c479577c3",
".git/objects/10/6bc3699bb974439a0aa67cbd5be7e071a4462b": "6d43ff9fca4c43ba4c6505db2de07937",
".git/objects/10/b878b2397d7d7933f08e01cc482d207c6178f6": "13f9a678c5d5438a5c523da98f310d69",
".git/objects/11/21bdcee36bf7449e87740ab2e74bc99dd73a8e": "901b90a9671bc02c8fc4e520a04be46f",
".git/objects/14/7be35287843f3013406740022d36601151dc7e": "047a7e087a40e9c3e87ba0f856feae5d",
".git/objects/16/ca106d4b0b3c15908f550333626076e5408a92": "7239616a5682281863f90f31ffaf8ed6",
".git/objects/1a/943dd661623a3474ecde8f5a9a96ae68807817": "854f6c759a958634b1cf0b47366009c4",
".git/objects/1d/125dccee6c56dceb249c06e973870a707908f3": "07f6486a64150f77de318b0d738c1631",
".git/objects/1f/60f42cf2cbc7464925fb67177b889570781b70": "865032a74d0058e537645f30303a8a33",
".git/objects/1f/e1aba0f40742e1c656117216d73a2192785e87": "a183ac71e1daab3f7bcf0cc8d1297df7",
".git/objects/21/1304664cc7d116c732c010ff94c3cfd949b814": "7a243f36873e8d54b452e993155e41f6",
".git/objects/22/118d4e7ddc39c9583c6fd1364ae9aba1d2d764": "304d175d2a70ecd36eeeb73300a82d4a",
".git/objects/22/8c888c12388d79d5eae6794f22dcf7676abf41": "da4734b3661359393949b3b137c6d8dc",
".git/objects/28/0155f20d727aab9c5944065e91df077078f819": "7c8ec7cd2e7c47c22670ab2c1702e51f",
".git/objects/29/0cfd1683ebb237dbe6a262fdb93b7595708ff0": "e4d1e7b11e42cccd0e13c04037515da9",
".git/objects/29/4205b5494c8a2929c93169bea37b6c65e58fb7": "e43cb4cd7102e42b4944b4315c9bdb6e",
".git/objects/2e/2b3dc8904002b02bad0a8800743b4eef44f299": "d03971bded4cef2d448d870e4de915be",
".git/objects/30/b9efb4dd85f055af73a2fa3642c9cb6c5e9fba": "5f10db73a8318377bf72a624d848489e",
".git/objects/31/a5806fead0687bcd5f29e3a3fba682ac6585a4": "3c9937b7d76e92bf513ba9e24992ca20",
".git/objects/33/45a735f3c4ab2bd1221d05a8a53df35014fc82": "519e3d96cdb98df1e2cce49ee4efce3f",
".git/objects/38/c9c1ea81c38fc1fa6066114dfaf95e2fb8e58c": "46edb72099fd5934bf55130375d7312e",
".git/objects/3a/103f78e2c7861d79c5474956c884b137463347": "a29509ade21cf58ee02bf8025a915a73",
".git/objects/3a/f208dfa97c88f8152e74a5123d75cb5c085036": "29cfc7b4f0f811a1d8e1bf8500829697",
".git/objects/3d/784be461ae0932e8944911809cf32f4880dfc2": "75397beb322d84a1bab415b65fd0d34c",
".git/objects/3e/740709773e3e9edc971955fbfa15b7095c441a": "85e760311b0ca8b02731975a31ba7cf9",
".git/objects/3e/dd9617d789606e8dd3afa92ed2d057b5e00bcf": "f4d16611d288947e4e0291dcb4a5efd9",
".git/objects/42/3fda4f1b5b19226078f0d75f2b3258d7f980d7": "c1f23e2d08d47995e489d8aaa295ee0a",
".git/objects/46/d158ddd02252b50c098e35c85445defbc289d9": "05d683e09a8c5048c9be492fda103c07",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/48/ac81202f8fe5719d159f73970e75bb47f2c4fa": "9dfbdb07ff27fca6e9a6f2933354a0a8",
".git/objects/49/e267e7598afbd0636126b1bde4357f67d499ed": "c2395933727bb443bf466f676d130e19",
".git/objects/4a/7740ebe9183c969d518a2a8c983e0ea92152dd": "4acfbb8a9b37e9ffdbeea45e69d9dcb2",
".git/objects/4d/112893a0db049098975857e2e7879d027eedcc": "bd9760fa0b21dec89dcd1a84eb2cf62d",
".git/objects/4f/16a0cb137bbb06fd6a083da9078f546203f6c3": "91b429fd60289915a51499d54ed528fa",
".git/objects/52/e95eba771b339c4130939bef31a4080fadc6ea": "a69739af333ef4c3e3cc93e9b8229f77",
".git/objects/55/aabdbb81e19dc2b1ca54c9ddb14c211d06f9b1": "58b564403a158d8ab002d39da309d04d",
".git/objects/56/9608e69458827b4bd8b74ad5ccbb342da94262": "6470c82ca55e2cd205cf04dc6056b3f5",
".git/objects/56/ca7cee15c63a8b60f0a1e6ac684c475ce6eed6": "7399136ecc0ad41a54ea3330b9c854c4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/f9c587fe280d9411d4a9e414a658aaa4fca56f": "9be8a9d5546e4e48f4f9fffe66f1f243",
".git/objects/5a/c7d4d39dc1fa9017b3e7ce0581b8b35e28f671": "f18ba362634b466260aa639913799834",
".git/objects/5b/fa9a7f76df63ad6ddfa127176437615132ac0e": "ce455c85def27a757e944cf6341f3d37",
".git/objects/5c/f88108a4107f1166d82592123766642ea0c0d1": "98807edde0cac1c0894c9ea8c3d2cc52",
".git/objects/5d/4568779eb7cf21d2d35ef9aa17b8827493f8f6": "babbd3778b0a7f176caceb0dc579945e",
".git/objects/5e/6b50a1d2ea25a0ec90c1e8ee70a6eaf5d61439": "6d82033c2049cf9aaf96f6bfa7c136e5",
".git/objects/61/4aab17698cab3f6c305410915fccff66bb8bcd": "6990dfba106d387e2bf6d8d13032d9bd",
".git/objects/62/343b7a5d4328d6343cdea2dd459049fd4f01d9": "98b5d26cb8154f3f1afddc7403de8afc",
".git/objects/64/59bbe435d00d69de6ab2b773d3b743586f6d04": "202c889b6353ca1175fce57f5c0cef76",
".git/objects/68/5ad6795d421db55652ff5d8e31dd19b2e3b200": "0ef3ff75053f1e7f08bac82365595cfe",
".git/objects/6d/a39b61e336feb10282390110b5546d26e193e1": "687c787db05caa84bd6596be76963968",
".git/objects/6e/c2dfd3a125b2a9dc3e3d185ccb9c4699de0049": "d344026fc6d830660fcd458c540702d8",
".git/objects/70/cf84950edb4c2a3beebf5789ccc3239e7bcb8b": "f1e66f13afa11eb50b2e293fd27abc86",
".git/objects/72/8740e280881655266be29d3b5b4d40c06c931e": "cfe0598f584ac01f5a5bc637cd17d639",
".git/objects/78/6002e3eba5d511c6ceaaab8160af2ce6da84c7": "bc22c4a4497cd37aec619aa67e0aa46c",
".git/objects/7b/a9c23ec886fd8b276f8debb8f1fca38491bf26": "a212258c19e8a0224ea394f942eb5140",
".git/objects/7c/3c797215511163f9818247cb9d0e8d49053753": "710c3a848491ee6fdd685e5a7ebc47b0",
".git/objects/7c/e95e24eff2b4ef45e238c5c558996848d3fea1": "c926753c8877cc8f2a5d5faa28891f82",
".git/objects/7d/61b8312b824d24863e5167591db65b20ac5aff": "07f70d478bd5e9a91ba7483967ef5847",
".git/objects/7f/52adfd86cb7c2a1a012a21bd2c057f3c52c544": "df67f880bad893d604c7824eaea61b25",
".git/objects/80/563766d9308b5c591aa86d230862661c904d70": "08b1e36d6225c173031af82c4c2f4e38",
".git/objects/82/97b28cdbb56db644ae1b0ff47f646d36639f26": "0373bc6a990e9f7758045b34b136868b",
".git/objects/82/d5ac2bda23767da9911ccb051e68aa73c40864": "2e8509201f3fe006dc1f36cb9a34d636",
".git/objects/86/e89faab6b87fef4457302118620c1228189123": "2edd2bc56f1f432defb528821cde09fd",
".git/objects/89/325c3f7e0d8b905775147bb9bedfaa28ce708a": "2bdeac27175d728f88689d47dd72f00c",
".git/objects/89/4eb24c0b66957523992f3b6ad3ada363e4fb3c": "5231b7c91c02255b28058f9addf856c9",
".git/objects/8a/3848c8e0afd33d4d28d3bb677e12e11158d968": "8f48d2cf1e1ba1a4589e0c21b6f09f44",
".git/objects/8a/890560ea1f6fde52dc308da8a4b54ff73ee463": "6b26ce5ed456a4155e425320e5c99745",
".git/objects/8c/cee48f21b8c549e25bae306fe18f205d3289c5": "98b1cdda401badfe349802b321fa57d4",
".git/objects/90/d623e0b77f431cd06d5cee83835b1765eef6be": "6656a03573f59f10ceec96a4a8830f89",
".git/objects/96/03c29e16536ab752a4d0daab14987fce922436": "c01a74478a087b5548a2455e3a013e6b",
".git/objects/98/195ae7a635919d37ff97d75723cf99f46a25c4": "aa9209ddc0ae59fafbc41c169a0ad4a4",
".git/objects/9b/037664742a7d086b8236b5f1ae98373d480083": "07c0110cc48a8ac6e1bdacfdb0b2f6aa",
".git/objects/9d/1d5c94146b93b3eff7d662617e5c70179efa84": "55f98dab7438e2c52aed5bf93e0893ff",
".git/objects/9e/2b876366a35359e85b99a32f147f7aef33ef20": "7204df7a3b843b20aa638ac4b71d92f8",
".git/objects/a0/9e4c66731c47df83ba7a0f52b436d7d4c40972": "17bf461f3cff2ae679cc36eaa3e8e27c",
".git/objects/a1/698f63a155748f16d1c195e77180bfa6c9ce6b": "fdcc88640afec6feea64678cc271b962",
".git/objects/a2/0cd0863e2435a27fbfef5cbbbfc099ae7c5749": "652622cc8308582930f06cc488a9c12a",
".git/objects/a6/e5292fb08ea5bec3dbb41c87db5db9e6ff69b2": "54dba48c2f4b65e04ad961cfc950a435",
".git/objects/a8/8b4f3b5f769bdc2192f8e0089046e68eac43bd": "01f949efb6047cdd421a7af09a0440d4",
".git/objects/aa/12df043bfa375c7567e19b7b42aff100cc2880": "634244421e24abef49a54fbd231831f1",
".git/objects/aa/98ecf863ecde521406e3ee8fa7fb391db4767c": "d0c3f402b1a967210ceb17b81313614a",
".git/objects/ac/c8ed948d30efb4099344347f1ddf229b0640b7": "ceeac0c9d0894cb3b8a0993c25354448",
".git/objects/ae/3d346688ca1e7ae26a5b7f51184b91bfb73b26": "3361059bfed30e8ec77411d45b665b15",
".git/objects/b1/18965671024d082ce12793ccab89b49ceb74a2": "709f7794c95f352c47e9cd39e2da8a98",
".git/objects/b2/7acde8de10230e44db6a80deacffde2bbf7a3a": "b9b2ebcde4e62d2c679aa31002a8b414",
".git/objects/b2/afd139a0dd4128de54ecbadf1ba4bf08d3d22b": "56eaf688f3b5b2e3eb76c0ac5c68987e",
".git/objects/b6/7cd2f9f7debe38da5c49e0d08298f45d2463d0": "3a5cab1f7415b8b30f9db66d73fcfe01",
".git/objects/b6/ba75e19a82449d219deb7602193b8a05897e8a": "1f78d35baf3aab790b270d61b1a4d523",
".git/objects/bc/96728c6e41ec1f31db51fad316b90769584b51": "3affac55876e1fb9f7e613454aba81ba",
".git/objects/bd/0d65df6f6d1ad5bf7db5735fb0c3bf60955128": "07acfe4a85f9ebf2c073b3bbe9063185",
".git/objects/be/63e06e20b143cf74d44ca1bcf5111e57d17ff2": "d5ba4556562c8ab771f9b7de8fb91698",
".git/objects/bf/13d19146f64c48cfbe1a4cda0887b85c63035e": "20c28589de06982500aa6586517bf111",
".git/objects/bf/99b8f6a19a9445e7219e7bfe86b7d144682ec4": "730d67f15ac6f9bd71fde411a814eb87",
".git/objects/c2/349ee046aeb86dacf09736e4c2b27e76595e8c": "7083c5c8df3ad9d05a2f3b3442da2003",
".git/objects/c3/0a9e31b2592b4e9c8f58e2e552ebd6540eb04d": "34b3a1647f9adfb477a94ea1357711c2",
".git/objects/c3/6a4df445c10c410b5360e45231c652b8dcc69a": "aaf89209a03121189594fa197598a6f8",
".git/objects/c4/4dbf1c1662e8e830d7dfa31a99dcaf63fecadc": "eb8fd90ad85f5dc12db63f6c76d23311",
".git/objects/c7/7048f550d7ee64e68e653ff6df6a4cd4dd2628": "0dcdf6f4fc2d22a9c534592fb7c849d9",
".git/objects/c8/d4373109d6af194bbf909f1cd0561303ec0826": "3241b73458d69664ed771f9a6d5be43b",
".git/objects/ca/b60f7941b79b0b58c70c0c94704296e253053a": "c74eeb883a9a1aae2afd691c8d9aaedc",
".git/objects/ca/c0d0fc0ded21e8bccceb15464acf1c6db0b6ff": "d5918d04091f2d92f19b5647fd9e1972",
".git/objects/cb/185a0a796c0798352faa6aa1d75a01b6d02b97": "e0df2d03cc0c2fc481f689433027b972",
".git/objects/cb/491a8c64cab886fb2195a0260e38e89afb817a": "830ea0be30366e841f33ad2817aceb5b",
".git/objects/cd/2e63cb586b571c002ca43acbcd2a357a7335fd": "f9c3f082316db512e988e54cbe28d460",
".git/objects/cd/9f8047476a9f32b9744b805b99f6fd1fba170d": "ceadf266c8d95b700cbd1e148c95bda6",
".git/objects/ce/0e39fef537244747ee355b474169d576e43d77": "2e91abc6fd11d1b41ebc8516ffefbf14",
".git/objects/cf/553c374cc3bc23644324a8f526cb5d439f7791": "57bea4d79dd7f9584b575b7e05be87b6",
".git/objects/d1/957a352b99e4679d03c4bc46d19a759129b354": "e8e0608e3e093de10d8b3549835c6d85",
".git/objects/d6/9bc49cc09ac0f2b191aaaa9acc72b314ab9d40": "f5b795a660d450e8279580acc7a5dba4",
".git/objects/d6/d3c5ec8e9ed0ad6df3846223671b7bc3c306a6": "79373a9cd23e7f7fd158ec66b90b9949",
".git/objects/d9/98e68f207660ff2d41ce97a589d0670910b509": "d9c0f8894cfe15731e9d98101c3dfad5",
".git/objects/dc/dd853b6f88028b2517cf2e072e7d8e04833561": "8c7bb3d9fbe7bdc40a9259bcc519fb81",
".git/objects/de/f5cb69d46c43dea553fac2810373908bd87ca4": "faddd14ab42ea96297e462e2eddf42f6",
".git/objects/df/cd459aad1c22e76ea2bf3a6c5cac97d05c865d": "a39996e5b7399e1ed460e61db264809b",
".git/objects/e3/5e4d9b4562fa4ca6aea5f7acd843f5b53038bf": "44c3a9c4ffdcdb38f7725e58672ea454",
".git/objects/e4/3668180e9ee91365aafe448b427959b28a9652": "f8f3ae027a6ffe77d4f83c70156357d4",
".git/objects/e8/03329381305cf2fbc48dca2d37751336cee467": "204a6a086c87cf83d2423769f238fa16",
".git/objects/e9/f21cabb1b5658757a3b9af45ef31071d72b515": "925ee848764e300eeaa23c09a18255db",
".git/objects/ea/2f98eac2532bff9480b1918b9061efcdc06291": "a8b6ad8df685c41f8cde77ea53550326",
".git/objects/ee/2f22af4154f9e0e3c456cb72399ad908a1805d": "0f97ebc4810cab92bfef4f2a69cba591",
".git/objects/ef/6df92d0c955730aaf465a322bb9301bd2f0f4f": "a243574faed998c9321d426d0073a890",
".git/objects/f6/8f8f96d5a859400ca161e2dfcc4a350f1ea715": "a75d775383f492616d5cf94c543e75b5",
".git/objects/f8/efc58fa33d1369b2c96b977202f4ec7de96892": "bf5cdea236852fed29dd118ed7f41d5d",
".git/objects/fa/0d54f600ff45bb3c9fd7642c346a4ab6c44bfc": "a91958fb293057777351f7a783178d6c",
".git/objects/fa/4775f4c31a543a9a7698d90a7df762f78a5653": "60000e16dfebbecb20e09b1b62c6d3f8",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.idx": "ff8b6ae6b1390420a1226918e8296f11",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.pack": "5d793f37d9f695812f50e660b725e7b1",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.rev": "ca2841d5bd170f755c002ca152287426",
".git/packed-refs": "bf966858004a6254d1fd103e3b1be53b",
".git/refs/heads/main": "948ffb6d8e1c46ed0d9df7a098fbf491",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "948ffb6d8e1c46ed0d9df7a098fbf491",
"assets/AssetManifest.bin": "71d8030acbfcee99c8606604d4bf8b8f",
"assets/AssetManifest.bin.json": "04ce404f61224822ead04f3d499f9ae5",
"assets/AssetManifest.json": "1f349f3a028f830606c20938ed9c44f2",
"assets/assets/AssetManifest.json": "c39ce65838e0b47108d258da4b382b6e",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/images/care1.jpg": "ebbc1ff7365b3ae88d27f71ff12a1a3b",
"assets/assets/images/care2.jpg": "d418bd265d4fcab0e5f344a54b35c18d",
"assets/assets/images/care3.png": "a870c0ba1cf6d5bb4ba2b139a4ca2bde",
"assets/assets/images/care4.png": "dd99e4263c9c1c5e8669b0dd0297dad3",
"assets/assets/images/dash.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/fan1.jpg": "8cb09b50298f6ab2775deb4e14361d8c",
"assets/assets/images/fan2.jpg": "76f58f07077275f64d1cd75eaed5c3dd",
"assets/assets/images/fan3.jpg": "a004ea3d02eef2f0d19c67162dac443a",
"assets/assets/images/fan4.jpg": "66288d469c11351dded530204ff78544",
"assets/assets/images/foodzer1.png": "e4ad30018b1534dc2630b9ffa26e9bcf",
"assets/assets/images/foodzer2.png": "46b0beb5697e8371ac4596ab5bf05252",
"assets/assets/images/foodzer3.png": "0ff25a501deb5fccba4d3620939d808f",
"assets/assets/images/google_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/images/play1.jpg": "6b3de3388e3617b2be5b87e77c444641",
"assets/assets/images/play2.jpg": "3528163d6e8c96223759b277015220e9",
"assets/assets/images/play3.jpg": "fa4a288edcd62c93cddd03997f48628f",
"assets/assets/images/play4.jpg": "22bd092eefcf3b454b69cf5fb7d50eb2",
"assets/assets/images/play5.png": "2051d6db1b608c23b544e9c95ba78493",
"assets/assets/images/play6.png": "207738923f02af71ee6dfbef235aaa74",
"assets/assets/images/play7.png": "8e6c77bc8fe7b7023b8e8e026d5ac046",
"assets/assets/images/poivaa1.png": "b510d2d1cc99b9bda8ba43182068783b",
"assets/assets/images/poivaa2.png": "79f2d14b4dac5b38848037b9bff61700",
"assets/assets/images/poivaa3.png": "95e01231fe97f37e18285cbbff75dc67",
"assets/assets/images/poivaa4.png": "24ca4ab7a1b1e7d9355e74dade031b40",
"assets/assets/images/rematch1.jpg": "93f036bbdebe2e73e1daf7ae7fba9f5d",
"assets/assets/images/rematch2.jpg": "6e094a72dd7e25876138f603c7e5491c",
"assets/assets/images/rematch3.jpg": "8c0ec336f28cf9f56e8ded811b3e3651",
"assets/assets/images/rematch4.jpg": "2f027e9b14fe7939037e66ace866a008",
"assets/assets/images/rematch5.jpg": "430ddaf3b3bd64fa8bbcd2ab3b389b6a",
"assets/assets/images/rematch6.jpg": "666499932bc5b82a64ec429ce3e18487",
"assets/assets/images/rematch7.png": "fd8cfff57b8961863a0917e0fe7a6966",
"assets/assets/images/rematch8.jpg": "1e3473d1197b01f0a09f7b90a5725393",
"assets/assets/images/shabz.png": "4c86c4c9d5c26272ee440e4e44424712",
"assets/assets/images/singx1.webp": "9d0b7148977b1cab798eb05ae734d43a",
"assets/assets/images/singx2.png": "5835b6289b0f65f1e29e2547ee4f09fd",
"assets/assets/images/singx3.webp": "7aafcd1da80ee6fa77de269f64485caa",
"assets/assets/images/singx4.png": "74071e837c354661fbe9db9dbc094bc2",
"assets/assets/images/wakanda1.webp": "906afb74d3498cbea5a5948691251560",
"assets/assets/images/wakanda2.webp": "546124542b9ace3ee77eb1bd623afdcd",
"assets/assets/images/wakanda3.webp": "7cae44251f1d70aab3acc542ace93b81",
"assets/assets/images/wakanda4.webp": "f960851f36242a2c038285f574243e01",
"assets/assets/images/wakanda5.webp": "a0adefa8f868ae3575faef40c11fec06",
"assets/assets/NOTICES": "e425d3b7b58c7a956e1dc77911c17ee8",
"assets/assets/splash_animation.json": "7f27ad44c341c7d131d70ba883a1aefd",
"assets/assets/splash_animation2.json": "b8b582ab47acc40403220ae25a51db0d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5621098cf9eda1bbe9cd8f4f18248e98",
"assets/NOTICES": "d6a266ffee780f2e9bb5265785af6545",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "dae62e3c453ac7466c54f00dd948a415",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a1d6651f653f4aa6f8d3c63cdd4146a5",
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
"flutter_bootstrap.js": "8e693e9e688ef74dff66feb7a8b0b64b",
"icons/Icon-192.png": "33e4ad0e473ae9730b6249e1110b410f",
"icons/Icon-512.png": "7cf66c79a64872d9d8496727bc55d5a9",
"index.html": "e9fba33ce541f84945bc91cfbb4c1a76",
"/": "e9fba33ce541f84945bc91cfbb4c1a76",
"main.dart.js": "4cbe5ba6a40d93df86e582d7e703e7a8",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
