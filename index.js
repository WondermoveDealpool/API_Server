//node_modules 의 express 파일 가져온다
const express = require('express');
//express 함수의 반환값을 router로 지정.
const router = express();

// http://localhost:3000/ 
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const users = [
	{ id: 1, name: '0biglife_01' },
	{ id: 2, name: '0biglife_02' },
	{ id: 3, name: '0biglife_03' },
];

const feeds = [
	{
		id: 1,
		name: 'Giriboy',
		title: 'Hi, my name is Giriboy and I just got here for ...',
		url:
			'https://w.namu.la/s/5fea88ec01958c7ab1553474199357e1647307f1b3845bebdfbc9b387861a1900bd0fd8476a42a4d1afc0cdceeca66e5915c2cc6c4dcf891730ee3da8867df64a7e2bb7a50d0ad3889ea1d528beafeb962ae16cc427dedbf496305bd49f5fb94e7c4b8f9fdfdfc24d4812c6fcf262eae',
		thumbnailUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg/2560px-2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg',
		postTime: '2022-01-25',
	},
	{
		id: 2,
		name: 'DongHyun-Seo',
		title: 'Hi, my name is DongHyun and I just got here for ...',
		url:
			'http://img.etoday.co.kr/pto_db/2021/12/600/20211204011121_1693934_991_550.jpg',
		thumbnailUrl:
			'https://w.namu.la/s/ff2ae0f6737cc6e3ca3d167b13e76ca416f6aa6592bbc007109945308a9c90ac454fa5c184db555b20f2d8ec49b72d6aef36fff9553a1cdf378d06416890ebf3162e45e8aba0c0e09baea8e58e628eea50bb0abe955bd35ab80f1b275bde140ea8b937c7fbf1d1169de62d635c166082',
		postTime: '2022-01-25',
	},
	{
		id: 3,
		name: 'YoungB',
		title: 'Hi, my name is Giriboy and I just got here for ...',
		url:
			'https://images.chosun.com/resizer/CzfbjMoa-qtvRJPbm9yW_e0JtFI=/650x650/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/CT73WT6KEZOYDE2FX7236EE4RA.jpg',
		thumbnailUrl:
			'https://w.namu.la/s/fa1d5dac661e7fd14f23329076788364e29082a9646bbd77634200d167fdc4a62abc9a7d4f9a38bb8d64073ce02a0b788d33357bad5bca0fbe69e66acfa5aa8fb22f69fb11a0814b3ed21108868d188d4d5d7c7caf6e52540aee8345782b552c4729e6268d35497ecd5539bc66c2c874',
		postTime: '2022-01-25',
	},
];

//라우팅 처리
router.get('/', (req, res) => {
	res.send('Server for API TEST!');
});

router.get('/api/users', (req, res) => {
	res.json({ ok: true, users: users });
});

router.get('/api/feeds', (req, res) => {
	res.json(feeds);
});

//param 사이에는 '&' 입력.!
router.get('/api/users/user', (req, res) => {
	const user_id = req.query.user_id;

	const user = users.filter(data => data.id == user_id);

	res.json({ ok: true, user: user });
});

// : <- 이거는 type 모두 가능하단 뜻
router.get('/api/users/:user_id', (req, res) => {
	const user_id = req.params.user_id;
	const user = users.filter(data => data.id == user_id);

	res.json({ ok: true, user: user });
});

//POST 방식!! 드디어..
router.post("/api/users/add", (req, res) => {
  
  const user = {
		id: users.length + 1,
		name: req.body.name,
	};

  users.push(user);
  
	res.json({ ok: true, users: user });
})

//3000포트로 서버 오픈 // router.listen(포트번호, 콜백함수)
router.listen(3000, () => console.log('0BigLife Server :)'));
