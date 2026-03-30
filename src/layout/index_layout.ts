
import logoImage from '../assets/logo.png'
import xiongmaoImage from '../assets/xiongmao.png'
import dingweiImage from '../assets/dingwei.png'
import qqlogoImage from '../assets/qqlogo.png'
import emaillogoImage from '../assets/emaillogo.png'
import blogImage from '../assets/blog_icon.png'
import jianliImage from '../assets/jianli_icon.png'
import hezuoImage from '../assets/hezuo_icon.png'
import xiangshangImage from '../assets/xiangshang_icon.png'
import logoWhiteImage from '../assets/logo_white.png'

export function renderIndexLayout() {
    return `
    <div class="relative w-screen h-screen bg-[#FFFFFF]">

       <!-- 顶部视图 -->
       <div class="flex flex-row items-center w-full h-27 sm:h-29 md:h-32 lg:h-35 bg-transparent top-0 left-0">
           <img src="${logoImage}" alt="logo" class="w-8.5 sm:w-9 md:w-9.5 lg:w-10 h-6.5 sm:h-7 md:h-7.5 lg:h-8 ml-7 sm:ml-11 md:ml-13 lg:ml-15">
           <span class="ml-2 sm:ml-5 md:ml-6 lg:ml-7 text-[18px] sm:text-[28px] md:text-[30px] lg:text-[32px]  font-normal text-center text-[#750FF7]">Coder.Zhang</span>
           <div id="contact-button" class="group flex items-center justify-center w-26 sm:w-32 md:w-36 lg:w-40 h-10 sm:h-11 md:h-12 lg:h-14 ml-auto mr-8 sm:mr-15 bg-transparent border-2 border-[#750FF7] border-solid rounded-[15px] hover:bg-[#750FF7]"> 
             <span class="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">联系我</span>
           </div>
       </div>

       <!-- 简单介绍 -->
       <div class="flex flex-col items-center w-full h-fit ml-0 mt-2 sm:mt-5 md:mt-10 lg:mt-15">
         <span class="max-w-75 sm:max-w-200 text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-bold text-center text-[#000000]">全栈开发工程师｜移动端与 Web ｜前端与后端</span>
         <span class="mt-5 lg:mt-10 max-w-75 sm:max-w-200 text-[20px] sm:text-[24px] md:text-[27px] lg:text-[25px] font-normal text-center text-[#000000]">我打造优雅的解决方案，并享受我写下的每一行代码。</span>
       </div>

       <!-- 个人信息卡片 -->
       <div class="flex flex-col items-center w-full h-fit ml-0 mt-20" >
          <div class="flex flex-col items-center w-80 sm:w-125 h-fit bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25" >
          <img src="${xiongmaoImage}" alt="avatar" class="w-20 h-20 mt-5 sm:mt-10 rounded-full">
            <span class="mt-2 sm:mt-5 text-[20px] sm:text-[24px] font-normal text-center text-[#000000]">低调努力，优雅上线。</span>
            <div class="flex flex-row items-center w-full h-10 mt-5">
                <img src="${dingweiImage}" alt="dingwei" class="w-10 h-10 ml-15 sm:ml-38">
                <span class="ml-2 text-[20px] font-normal text-center text-[#000000]">中国·成都</span>
            </div>
            <div class="flex flex-row items-center w-full h-10 mt-5">
                <img src="${qqlogoImage}" alt="qq" class="w-10 h-10 ml-15 sm:ml-38">
                <span class="ml-2 text-[20px] font-normal text-center text-[#000000]">728815221</span>
            </div>
            <div class="flex flex-row items-center w-full h-10 mt-5 mb-17.5">
                <img src="${emaillogoImage}" alt="email" class="w-10 h-10 ml-15 sm:ml-38">
                <span class="ml-2 text-[20px] font-normal text-center text-[#000000]">728815221@qq.com</span>
            </div>
          </div>
       </div>

       <!-- 蓝色背景 -->
      <div class="flex flex-col items-center w-full h-fit ml-0 -mt-45 sm:-mt-40 bg-[#750FF7]">
         <span class="max-w-75 sm:max-w-250 mt-60 text-[24px] sm:text-[32px] font-bold text-center text-[#ffffff]">嗨，我是张，很高兴认识你。</span>
         <span class="max-w-75 sm:max-w-250 mt-10 sm:mt-18 mb-60 text-[20px] sm:text-[28px] font-bold text-center text-[#ffffff]">我专注于移动端开发和全栈项目，将创意转化为流畅、实用的应用程序。多年来，我为初创公司和客户提供定制化解决方案，让他们的想法落地成为可用产品。我也热衷于分享知识——撰写技术文章、项目指南以及开发工具使用技巧——在帮助他人成长的同时，也不断提升自己。</span>
       </div>

       <!-- 三个卡片 -->
       <div class="flex flex-row justify-between items-center w-full h-fit ml-0 -mt-40 bg-transparent z-10 px-2 sm:px-20 md:px-30 lg:px-40 ">
          <div class="flex flex-col items-center h-fit flex-1 mx-2 sm:mx-6 md:mx-12 lg:mx-18 bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25">
                <img src="${blogImage}" alt="blog" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">博客</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">技术想法、模块教程与开发笔记</span>
                <div id="blog-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">记录/分享</span>
                </div>
                <img src="${xiangshangImage}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
          </div>
          <div class="flex flex-col items-center h-fit flex-1 mx-2 sm:mx-6 md:mx-12 lg:mx-18 bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25">
                <img src="${jianliImage}" alt="jianli" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">简历</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">我的经历、技能与成长历程</span>
                <div id="jianli-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">快速了解</span>
                </div>
                <img src="${xiangshangImage}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
          </div>
          <div class="flex flex-col items-center h-fit flex-1 mx-2 sm:mx-6 md:mx-12 lg:mx-18 bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25">
                <img src="${hezuoImage}" alt="hezuo" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">客户合作</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">自由接单与个性化定制开发</span>
                <div id="hezuo-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">开始项目</span>
                </div>
                <img src="${xiangshangImage}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
          </div>
        </div>

        <!-- banner：开发者-->
        <div class="flex flex-row items-center ml-7 sm:ml-10 md:ml-20 lg:ml-30 mr-7 sm:mr-10 md:mr-20 lg:mr-30 mt-15 sm:mt-20 md:mt-26 lg:mt-32 h-fit bg-[#000000] rounded-xl sm:rounded-[20px]">
          <span class="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 s:mb-12 md:mb-16 lg:mb-20 ml-8 sm:ml-15 md:ml-20 lg:ml-23.75 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#FFFFFF]">开发者</span>
          <span class="absolute left-1/2 transform -translate-x-1/2 text-[15px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-regular text-center text-[#FFFFFF]">聊技术 · 分享想法</span>
          <div id="kaifa-button" class="group flex items-center justify-center w-15 sm:w-25 md:w-35 lg:w-47.5 h-10 sm:h-12 md:h-16 lg:h-20 ml-auto mr-8 sm:mr-15 md:mr-20 lg:mr-25 bg-transparent border-2 border-[#5BE9B9] border-solid rounded-lg hover:bg-[#5BE9B9]"> 
             <span class="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-center text-[#FFFFFF] group-hover:text-[#000000]">联系我</span>
          </div>
        </div>
        <!-- banner：面试官-->
        <div class="flex flex-row items-center ml-7 sm:ml-10 md:ml-20 lg:ml-30 mr-7 sm:mr-10 md:mr-20 lg:mr-30 mt-5 sm:mt-7.5 md:mt-10 lg:mt-12.5 h-fit bg-[#000000] rounded-xl sm:rounded-[20px]">
          <span class="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 s:mb-12 md:mb-16 lg:mb-20 ml-8 sm:ml-15 md:ml-20 lg:ml-23.75 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#FFFFFF]">面试官</span>
          <span class="absolute left-1/2 transform -translate-x-1/2 text-[15px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-regular text-center text-[#FFFFFF]">查看我的作品与经历</span>
          <div id="mianshi-button" class="group flex items-center justify-center w-15 sm:w-25 md:w-35 lg:w-47.5 h-10 sm:h-12 md:h-16 lg:h-20 ml-auto mr-8 sm:mr-15 md:mr-20 lg:mr-25 bg-transparent border-2 border-[#5BE9B9] border-solid rounded-lg hover:bg-[#5BE9B9]"> 
             <span class="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-center text-[#FFFFFF] group-hover:text-[#000000]">查看</span>
          </div>
        </div>
        <!-- banner：客户-->
        <div class="flex flex-row items-center ml-7 sm:ml-10 md:ml-20 lg:ml-30 mr-7 sm:mr-10 md:mr-20 lg:mr-30 mt-5 sm:mt-7.5 md:mt-10 lg:mt-12.5 h-fit bg-[#000000] rounded-xl sm:rounded-[20px]">
          <span class="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 s:mb-12 md:mb-16 lg:mb-20 ml-8 sm:ml-15 md:ml-20 lg:ml-23.75 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#FFFFFF]">客户</span>
          <span class="absolute left-1/2 transform -translate-x-1/2 text-[15px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-regular text-center text-[#FFFFFF]">一起打造产品</span>
          <div id="kehu-button" class="group flex items-center justify-center w-15 sm:w-25 md:w-35 lg:w-47.5 h-10 sm:h-12 md:h-16 lg:h-20 ml-auto mr-8 sm:mr-15 md:mr-20 lg:mr-25 bg-transparent border-2 border-[#5BE9B9] border-solid rounded-lg hover:bg-[#5BE9B9]"> 
             <span class="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-center text-[#FFFFFF] group-hover:text-[#000000]">合作</span>
          </div>
        </div>

        <!-- 底部信息栏 -->
        <div class="flex flex-row items-center justify-center w-full mt-5 sm:mt-7.5 md:mt-10 lg:mt-12.5 h-fit bg-[#750FF7]">
           <img src="${logoWhiteImage}" class="w-7 sm:w-8 md:w-9 lg:w-10 h-5 sm:h-6 md:h-7 lg:h-8 mt-9 sm:mt-11 md:mt-13 lg:mt-15 mb-9 sm:mb-11 md:mb-13 lg:mb-15">
           <span class="ml-6 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-center text-[#FFFFFF]">先跑起来，再跑更快。</span>
        </div>

    </div>


    `
}