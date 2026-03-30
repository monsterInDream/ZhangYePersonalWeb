
import '../style/index.css'
import { renderIndexLayout } from "../layout/index_layout"

//指定布局
const app = document.getElementById('app') as HTMLDivElement;
app.innerHTML = renderIndexLayout();

//按钮：顶部-联系我
(document.getElementById('contact-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：blog-记录/分享
(document.getElementById('blog-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：简历-快速了解
(document.getElementById('jianli-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：客户合作-开始项目
(document.getElementById('hezuo-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：开发者-联系我
(document.getElementById('kaifa-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：面试官-查看
(document.getElementById('mianshi-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
//按钮：客户-合作
(document.getElementById('kehu-button') as HTMLDivElement).addEventListener('click', () => {
    alert('还在开发中请稍等！');
});
   