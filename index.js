// 开发组
{
	if (false) {
		const staffData = [[{
			type: '策划',
			employees: ['MAItlex', 'TwelEveN'],
		}, {
			type: '音效',
			employees: ['Gaia_Alucard', 'Zedombit'],
		}, {
			type: '文案',
			employees: ['TwelEveN', 'Auriana', 'IPSNHC', 'kon', 'MAItlex', '晶晶', '星栀'],
		}, {
			type: '程序',
			employees: ['Cori&', 'Spencer', '颜柯yanck'],
		}], [{
			type: '谱师',
			employees: ['Alasy', 'Clarity.', 'KaraLee', 'Lei_motife', 'Lyrith_with_xQ', 'MAItlex', 'MeowAbly', 'Mou_Xuan', 'mxy', 'SHU', 'SrY-ABYSS', 'THE UEM', 'Xstar', 'うしろものｐ', '霖霖', '南瓜', '宁静小喵', '欧一biang', '萬莲gg', '羽毛球awa'],
		}], [{
			type: '美术',
			employees: ['神隐', 'Aluvers', 'Auriana', 'Avalia', 'enesiat', 'izumi', 'Kaybin-Lingo', 'REDE_雷蝶', 'Side_', 'YNII', '蛋黄', '哆啦啦', '仿生数位板', '风攸攸', '玲央', '清（papercrane）', '西柚'],
		}], [{
			type: '测试',
			employees: ['Auriana', 'Clarity.', 'kon', 'MAItlex', 'SrY-ABYSS', 'TwelEveN', 'Zedombit', 'うしろものｐ', '晶晶', '霖霖', '星栀'],
		}]];

		const developerElement = document.getElementById('developer');

		for (const tabData of staffData) {
			let tabHtml = `<div class="tab">`;
			for (const group of tabData) {
				let groupHtml = `<div class="group"><p class="type">${group.type}</p>`;
				for (const employee of group.employees) {
					groupHtml += `<p class="employee">${employee}</p>`;
				}
				groupHtml += `</div>`;
				tabHtml += groupHtml;
			}
			tabHtml += `</div>`;
			developerElement.innerHTML += tabHtml;
		}
	}
}
// 进度条
{
	const noticeElement = document.getElementById('notice');
	const progressElement = document.getElementById('progressbar');
	let i = 10;
	const interval = setInterval(function () {
		if (i >= 200) {
			clearInterval(interval);
		}
		else {
			++i;
			const t = 1 - (i / 200);
			noticeElement.textContent = `开发进度：${(progressElement.value = (1 - (t ** 5)) * 50.20).toFixed(2)}%`;
		}
	}, 16);
}
// 浮现
{
	const observer = new IntersectionObserver((entries) => {
		for (let i = entries.length - 1; i > -1; --i) {
			const entry = entries[i];
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				if (entries.length === 0) {
					observer.disconnect();
				}
				entries.splice(i, 1);
			}
		}
	});
	document.querySelectorAll('.scroll').forEach((board) => observer.observe(board));
	document.querySelectorAll('.board').forEach((board) => observer.observe(board));
	document.querySelectorAll('h1').forEach((board) => observer.observe(board));
}
// tip
{
	const allTips = ['真正的梦想为何物？', '航行器，前进四！', '我失忆了，这游戏怎么玩？', '航途 Route 没有 rating 机制，尽可能取得高分吧！', '洛尔萨斯快报：近期有大量人员失踪，请大家注意防范。', '猫猫～猫猫～（吸溜）', '众所周知，航途有一套算法……', '相信吧！只管相信就是了！', '如果累了的话，就早点休息哦～', '为什么你还不放下手机去睡觉，是不想吗？', '要天天开心！', '笑啊？为什么不笑呢？', '大神们只需要起飞就行了，谱师考虑的就多了……', '想知道起飞是什么感觉吗？', '快看我快看我！', '平板飞走了？！', '航途↑Route↓ 是一款单人掉线开飞机游戏（？', '大量记忆波纹会导致屏幕起火。', '教练教我，我要玩航途！', '您的航行器飞走啦!', '航行器五块钱两个！', 'AP 的一小步，是航行的一大步', '航线千万条，安全第一条！', '航途的意义？', '你知道吗？当你重开游戏后，航行器会在世界的某处静静地等待着你的到来。', '当你在看 tip 时，tip 也在凝视着你……'];
	const tipsElement = document.getElementById('tipsText');

	function next(time) {
		setTimeout(() => {
			tipsElement.classList.remove('show');
			tipsElement.classList.add('hidden');
			tipsElement.style.transform = null;
			setTimeout(() => {
				let index = Math.floor(Math.random() * allTips.length);
				tipsElement.textContent = allTips[index];
				tipsElement.classList.remove('hidden');
				tipsElement.classList.add('show');
				const x = allTips[index].length;
				next(x < 10 ? 3000 : 3000 + (x - 10) * 100);
			}, 150);
		}, time);
	}

	next(5000);
}