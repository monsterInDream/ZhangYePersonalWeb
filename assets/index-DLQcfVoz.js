(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/ZhangYePersonalWeb/assets/logo-YjCzo98O.png`,t=`/ZhangYePersonalWeb/assets/xiongmao-f6Q7RIrH.png`,n=`/ZhangYePersonalWeb/assets/dingwei-BXh-zAbZ.png`,r=`/ZhangYePersonalWeb/assets/qqlogo-DcatezTK.png`,i=`/ZhangYePersonalWeb/assets/emaillogo-Dwbraa1Q.png`,a=`/ZhangYePersonalWeb/assets/blog_icon-T6HGtBO-.png`,o=`/ZhangYePersonalWeb/assets/jianli_icon-D0TR_lfC.png`,s=`/ZhangYePersonalWeb/assets/hezuo_icon-BCmM09fZ.png`,c=`data:image/png;base64,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`,l=`data:image/png;base64,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`;function u(){return`
    <div class="relative w-screen h-screen bg-[#FFFFFF]">

       <!-- 顶部视图 -->
       <div class="flex flex-row items-center w-full h-27 sm:h-29 md:h-32 lg:h-35 bg-transparent top-0 left-0">
           <img src="${e}" alt="logo" class="w-8.5 sm:w-9 md:w-9.5 lg:w-10 h-6.5 sm:h-7 md:h-7.5 lg:h-8 ml-7 sm:ml-11 md:ml-13 lg:ml-15">
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
          <img src="${t}" alt="avatar" class="w-20 h-20 mt-5 sm:mt-10 rounded-full">
            <span class="mt-2 sm:mt-5 text-[20px] sm:text-[24px] font-normal text-center text-[#000000]">低调努力，优雅上线。</span>
            <div class="flex flex-row items-center w-full h-10 mt-5">
                <img src="${n}" alt="dingwei" class="w-10 h-10 ml-15 sm:ml-38">
                <span class="ml-2 text-[20px] font-normal text-center text-[#000000]">中国·成都</span>
            </div>
            <div class="flex flex-row items-center w-full h-10 mt-5">
                <img src="${r}" alt="qq" class="w-10 h-10 ml-15 sm:ml-38">
                <span class="ml-2 text-[20px] font-normal text-center text-[#000000]">728815221</span>
            </div>
            <div class="flex flex-row items-center w-full h-10 mt-5 mb-17.5">
                <img src="${i}" alt="email" class="w-10 h-10 ml-15 sm:ml-38">
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
                <img src="${a}" alt="blog" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">博客</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">技术想法、模块教程与开发笔记</span>
                <div id="blog-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">记录/分享</span>
                </div>
                <img src="${c}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
          </div>
          <div class="flex flex-col items-center h-fit flex-1 mx-2 sm:mx-6 md:mx-12 lg:mx-18 bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25">
                <img src="${o}" alt="jianli" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">简历</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">我的经历、技能与成长历程</span>
                <div id="jianli-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">快速了解</span>
                </div>
                <img src="${c}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
          </div>
          <div class="flex flex-col items-center h-fit flex-1 mx-2 sm:mx-6 md:mx-12 lg:mx-18 bg-[#FFFFFF] border-2 border-[#750FF7] rounded-xl shadow-2xl shadow-[#000000]/25">
                <img src="${s}" alt="hezuo" class="mt-3 sm:mt-8 md:mt-10 lg:mt-12.5 w-15 sm:w-17 md:w-20 lg:w-25 h-15 sm:h-17 md:h-20 lg:h-25">
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[14px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#000000]">客户合作</span>
                <span class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-[12px] sm:text-[28px] font-normal text-center text-[#000000]">自由接单与个性化定制开发</span>
                <div id="hezuo-button" class="group mt-3 sm:mt-4 md:mt-6 lg:mt-15 w-20 sm:w-25 md:w-30 lg:w-55 h-8 sm:h-10 md:h-12 lg:h-14 bg-transparent border-2 border-[#750FF7] border-solid rounded-lg flex items-center justify-center hover:bg-[#750FF7]"> 
                   <span class="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-normal text-center text-[#750FF7] group-hover:text-[#FFFFFF]">开始项目</span>
                </div>
                <img src="${c}" class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-5 sm:w-7.5 md:w-10 lg:w-12.5 h-5 sm:h-7.5 md:h-10 lg:h-12.5">
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
           <img src="${l}" class="w-7 sm:w-8 md:w-9 lg:w-10 h-5 sm:h-6 md:h-7 lg:h-8 mt-9 sm:mt-11 md:mt-13 lg:mt-15 mb-9 sm:mb-11 md:mb-13 lg:mb-15">
           <span class="ml-6 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-center text-[#FFFFFF]">先跑起来，再跑更快。</span>
        </div>

    </div>


    `}var d=document.getElementById(`app`);d.innerHTML=u(),document.getElementById(`contact-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`blog-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`jianli-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`hezuo-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`kaifa-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`mianshi-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)}),document.getElementById(`kehu-button`).addEventListener(`click`,()=>{alert(`还在开发中请稍等！`)});