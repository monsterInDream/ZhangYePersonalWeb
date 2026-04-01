import{t as e}from"./logo-BORWXKjo.js";var t=`/ZhangYePersonalWeb/assets/close_icon-DGU54rIB.png`,n=`/ZhangYePersonalWeb/assets/avatar_icon-BUvUCSgI.png`;function r(){return`
      <div class="relative w-screen h-screen bg-[#ffffff]">
        <!-- 顶部视图 -->
        <div class="flex flex-row items-center w-full h-fit bg-transparent left-0 top-0">
          <img src="${e}" id="contact-logo" alt="Logo" class="w-7 sm:w-8 md:w-9 lg:w-10 h-5 sm:h-6 md:h-7 lg:h-8 ml-10 sm:ml-15 md:ml-20 lg:ml-25 mt-6 sm:mt-9 md:mt-12 lg:mt-15 mb-6 sm:mb-9 md:mb-12 lg:mb-15">
          <img src="${t}" id="close-button" alt="Close" class="w-7 sm:w-8 md:w-9 lg:w-10 h-7 sm:h-8 md:h-9 lg:h-10 ml-auto mr-10 sm:mr-15 md:mr-20 lg:mr-25 mt-6 sm:mt-9 md:mt-12 lg:mt-15 mb-6 sm:mb-9 md:mb-12 lg:mb-15">
        </div>

        <!-- 横线+头像 -->
        <div class="flex items-center w-full h-fit -mt-9 sm:-mt-12 md:-mt-15 lg:-mt-18 bg-transparent">
            <div class="flex-1 h-px translate-y-1.5 sm:translate-y-3 md:translate-y-3.5 lg:translate-y-4 bg-[#750FF7]"></div>
            <img src="${n}" alt="Avatar" class="w-10 sm:w-15 md:w-20 lg:w-25 h-12 sm:h-20 md:h-25 lg:h-30 rounded-full"/>
            <div class="flex-1 h-px translate-y-1.5 sm:translate-y-3 md:translate-y-3.5 lg:translate-y-4 bg-[#750FF7]"></div>
        </div>

        <div class="flex flex-col items-center w-full h-fit mt-5 sm:mt-7.5 md:mt-10 lg:mt-12.5 bg-transparent">
          <span class="max-w-50 sm:max-w-100 md:max-w-140 lg:max-w-187.5 text-[17px] sm:text-[22px] ms:text-[27px] lg:text-[32px] font-normal text-center text-[#000000]">感谢您抽出宝贵时间与我联系，请问今天我可以为您提供哪些帮助？</span>
        </div>

        <!-- 您的姓名 -->
        <div class="flex flex-col items-center justify-center w-full mt-5 sm:mt-7.5 md:mt-10 lg:mt-12.5 bg-transparent"> 
          <div class="flex flex-col items-start justify-center w-fit h-fit bg-transparent"> 
            <span class="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-left text-[#000000]">您的姓名：</span>
            <div class="flex items-center w-55 sm:w-95 md:w-120 lg:w-150 h-10 sm:h-14 md:h-17 lg:h-20 mt-2 sm:mt-3 md:mt-4 lg:mt-5 bg-transparent border sm:border-2 border-[#750FF7] rounded-xl">
              <input id="name-input" type="text" placeholder="" class="w-full h-full px-3 py-2 text-[13px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-normal text-left text-[#000000] focus:outline-none">
            </div>
          </div>
        </div>
        <!-- 电子邮箱 -->
        <div class="flex flex-col items-center justify-center w-full mt-2.5 sm:mt-5 md:mt-7.5 lg:mt-10 bg-transparent"> 
          <div class="flex flex-col items-start justify-center w-fit h-fit bg-transparent"> 
            <span class="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-left text-[#000000]">电子邮箱：</span>
            <div class="flex items-center w-55 sm:w-95 md:w-120 lg:w-150 h-10 sm:h-14 md:h-17 lg:h-20 mt-2 sm:mt-3 md:mt-4 lg:mt-5 bg-transparent border sm:border-2 border-[#750FF7] rounded-xl">
              <input id="email-input" type="text" placeholder="" class="w-full h-full px-3 py-2 text-[13px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-normal text-left text-[#000000] focus:outline-none">
            </div>
          </div>
        </div>
        <!-- 详细信息:  -->
        <div class="flex flex-col items-center justify-center w-full mt-2.5 sm:mt-5 md:mt-7.5 lg:mt-10 bg-transparent"> 
          <div class="flex flex-col items-start justify-center w-fit h-fit bg-transparent"> 
            <span class="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-left text-[#000000]">详细信息：</span>
            <div class="flex items-center w-55 sm:w-95 md:w-120 lg:w-150 h-30 sm:h-40 md:h-50 lg:h-60 mt-2 sm:mt-3 md:mt-4 lg:mt-5 bg-transparent border sm:border-2 border-[#750FF7] rounded-xl">
              <textarea id="details-textarea" placeholder="" class="w-full h-full px-3 py-2 text-[13px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-normal text-left text-[#000000] focus:outline-none resize-none"></textarea>
            </div>
          </div>
        </div>

        <!-- 提交按钮:  -->
        <div class="flex flex-row items-center justify-center w-full mt-10 sm:mt-10 md:mt-15 lg:mt-20">
          <button id="submit-button" class="w-45 sm:w-50 md:w-55 lg:w-65 h-9 sm:h-11 md:h-13 lg:h-15 border sm:border-2 border-[#750FF7] rounded-xl sm:rounded-2xl text-[#750FF7] hover:text-[#ffffff] bg-transparent hover:bg-[#5A0AB9] ">
            <span class="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-center ">提交</span>
          </button>
        </div>

        <!-- 留空白  -->
        <div class="flex w-full h-10 sm:h-60">
        </div>
      
      </div>
    `}var i=document.getElementById(`contact`);i.innerHTML=r(),document.getElementById(`contact-logo`).addEventListener(`click`,()=>{window.location.href=`/ZhangYePersonalWeb/index.html`}),document.getElementById(`close-button`).addEventListener(`click`,()=>{window.location.href=`/ZhangYePersonalWeb/index.html`}),document.getElementById(`submit-button`).addEventListener(`click`,()=>{let e=document.getElementById(`name-input`),t=document.getElementById(`email-input`),n=document.getElementById(`details-textarea`);e&&t&&n&&e.value.trim()!==``&&t.value.trim()!==``&&n.value.trim()!==``?(alert(`您已成功提交以下信息:
姓名: `+e.value+`
电子邮箱: `+t.value+`
详细信息: `+n.value),window.location.href=`/ZhangYePersonalWeb/index.html`):alert(`请输入完整信息！`)});