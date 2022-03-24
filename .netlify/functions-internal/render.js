const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","my-app.png","profile-avatar.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-d77c9ba8.js","js":["start-d77c9ba8.js","chunks/vendor-2da1beec.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-28d9e71a.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/webwhatssapp\/?$/,
				params: null,
				path: "/webwhatssapp",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/stores\/store\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/stores/store.js'))
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/test\/?$/,
				params: null,
				path: "/test",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/all\/?$/,
				params: null,
				path: "/all",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/modifyPassword\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/modifyPassword.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/modifyUserName\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/modifyUserName.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/verification\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/verification.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/modifyEmail\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/modifyEmail.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/getResolve\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/getResolve.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/delete\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/delete.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/logout\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/logout.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/login\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/login.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/es\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/es.js'))
			}
		]
	}
});
