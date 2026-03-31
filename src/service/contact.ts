import "../style/index.css";
import { renderContactLayout } from "../layout/contact_layout";

//指定布局
const contact = document.getElementById('contact') as HTMLDivElement;
contact.innerHTML = renderContactLayout();

//按钮：顶部-logo
(document.getElementById('contact-logo') as HTMLDivElement).addEventListener('click', () => {
    const page_path = import.meta.env.BASE_URL + 'index.html';
    window.location.href = page_path;
});

//按钮：顶部-关闭
(document.getElementById('close-button') as HTMLDivElement).addEventListener('click', () => {
    const page_path = import.meta.env.BASE_URL + 'index.html';
    window.location.href = page_path;
});

//按钮：提交
(document.getElementById('submit-button') as HTMLDivElement).addEventListener('click', () => {
    //姓名
    const iname_input = document.getElementById('name-input') as HTMLInputElement | null;
    //电子邮箱
    const iemail_input = document.getElementById('email-input') as HTMLInputElement | null;
    //详细信息
    const idetails_textarea = document.getElementById('details-textarea') as HTMLTextAreaElement | null;
    if (iname_input && iemail_input && idetails_textarea && iname_input.value.trim() !== '' && iemail_input.value.trim() !== '' && idetails_textarea.value.trim() !== '') {
       alert('您已成功提交以下信息:\n' + '姓名: ' + iname_input.value + '\n' + '电子邮箱: ' + iemail_input.value + '\n' + '详细信息: ' + idetails_textarea.value);
       //用户点击确定后才执行
       const page_path = import.meta.env.BASE_URL + 'index.html';
       window.location.href = page_path; //跳转页面
    }else{
       alert('请输入完整信息！');
    }
});