// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-10-24
// @description  try to take over the world!
// @author       You
// @match        https://m.weibo.cn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.appendChild(document.createElement('style')).textContent = `
    :root {
        --m-subtitle-text: #e1e1e1;
        --m-content-text: #aaaaaa;
    }
    /* 屏蔽一些东西 */
    .login-box,
    .wrap[data-v-2ee6444e] {
        display: none;
    }

    html,
    /*html主体*/
    .lite-page-tab,
    /*转发评论赞*/
    .comment-content[data-v-36b85f94],
    /*正文评论背景*/
    .comment-content[data-v-d53db654],
    /*正文评论背景*/
    .profile-header/*个人首页背景*/
    {
        background-color: #313131;
        color: #e1e1e1
    }

    .lite-page-tab {
        box-shadow: none;
    }

    .lite-page-editor,
    /*发表评论栏*/
    .m-wpbtn-list,
    /*保存草稿菜单栏*/
    .composer-mini-wrap/*发表评论栏*/
    {
        border-top-width: 0px;
        background-color: #444;
        border-radius: 20px;
    }

    .m-wpbtn-list li a/*保存草稿菜单栏小项*/
    {
        color: #dadada;
    }

    .lite-bubble-list.bubble-l .bubble-box/*私信气泡*/
    {
        background-color: #7db19c42;
        color: #dadada;
    }

    .lite-bubble-list.bubble-l .bubble-box:before {
        border-color: #7db19c42 #7db19c29 transparent transparent
    }

    .composer-mini-wrap .textarea,
    /*发表评论栏的输入框*/
    .m-lim-width/*发微博页*/
    ,
    .m-box-center-a {
        background-color: #444;
    }

    .contactlist,
    /*话题搜索页*/
    .m-wpbtn-lbox/*保存草稿菜单*/
    {
        background: transparent;
    }




    .m-search div,
    /*搜索框*/
    .nt-sbox[data-v-bf3ded56],
    /*搜索页搜索框*/
    .card31 .m-search/*话题搜索页搜索框*/
    {
        background-color: #333333 !important;
    }



    .nav-main,
    /*微博正文导航条*/
    .lite-topbar.main-top,
    /*上方搜索条*/
    .m-reles-top,
    .ntop-nav > .m-box-center-a[data-v-bf3ded56],
    /*搜索页面中的搜索条*/
    .card31,
    /*话题搜索页搜索栏*/
    .profile-header .prf-topbar/*个人页上方导航条*/
    {
        background-color: #545454a3;
        border-radius: 20px;
    }

    .f-weibo.card9.m-panel,
    /*普通卡片*/
    .lite-msg.card,
    .lite-page-list.card,
    /*正文卡片*/
    .m-panel,
    /*搜索页热搜*/
    .lite-msg-list.card,
    /*消息箱*/
    .card9 .weibo-rp/*转发显示的微博*/
    {
        margin: 1% 2% 1% 2%;
        border-radius: 20px;
        background-color: #4f4a7170;
        border: 0px;
    }


    .lite-line {
        border-top-width: 0px;
    }

    .lite-line,
    /*评论文字*/
    .lite-topbar.main-top/*让顶栏下方没有白线*/
    {
        border-color: transparent;
        /*让评论文字上方没有颜色*/
    }

    .m-text-cut/*热搜榜条目*/
    ,
    .main-link {
        color: #fffc !important;
    }

    /*只在电脑上放在右边*/
    @media only screen and (min-width: 900px) {
        /*顶栏优化*/
        .lite-topbar.main-top {
            height: 3rem;
        }

        .pannelwrap[data-v-14449dc4]/*正文流*/
        {
            position: relative;
            top: -2rem;
        }

        .m-tips/*下拉刷新*/
        {
            top: -3rem;
        }

        /*试图把导航栏放在右边*/
        .main-top .nav-main {
            position: fixed;
            height: 30rem;
            width: 4rem;
            left: auto;
        }

        .lite-topbar .nav-main .nav_item .item_li {
            display: block;
        }

        .nav-main .m-box {
            height: 100%;
            flex-direction: column;
        }

        .lite-topbar.main-top .nav-main .inner-box {
            width: 100%;
        }

        .lite-topbar .nav-main .scroll-box {
            height: 100%;
        }



        .lite-topbar.main-top .nav-main {
            top: 5rem;
        }

        .lite-nav-sublist/*多的导航条*/
        {
            right: 4rem;
            width: 16rem;
            left: auto;
            top: 26rem;
        }
    }

    .lite-topbar .nav-main .nav_item .item_li {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin: 0px;
    }

    .lite-topbar,
    /*顶栏下边框为0*/
    .card11.ctype-3 .card.m-panel:last-of-type/*搜索页底栏下边框为0*/
    {
        border-bottom-width: 0px;
    }

    .slide-container[data-v-76f2e89e]/*搜索页中的导航栏上下居中*/
    {
        margin-top: 0.25rem;
    }

    /*导航栏优化*/
    /*导航栏左右渐变色不要*/
    .lite-topbar.main-top .nav-main .inner-box:before,
    .lite-topbar.main-top .nav-main .inner-box:after,
    .lite-topbar .nav-main .nav-plus:before,
    .m-top-nav .nav-main::before {
        display: none;
    }

    .lite-topbar .nav-main .nav_item .item_li.cur {
        background-color: #659556b0;
        border-radius: 20px;
    }



    .lite-nav-sublist/*多的导航条*/
    {
        border-radius: 20px;
        background-color: #416e56e0;
    }

    .lite-nav-sublist .m-auto-box span/*多的导航单中的标签*/
    {
        background-color: #2d2a27a8;
        color: #aaaaaa;
    }

    .lite-nav-sublist .m-auto-box.cur span/*多的导航单中的标签：选中*/
    {
        background-color: #0b0b0ba8;
        color: #93c79c;
    }

    /*文字*/
    .lite-page-top .nav-main,
    /*正文上方的微博正文文字*/
    .m-font-arrow-left::before,
    /*左边的返回*/
    .m-font-dot-more::before,
    /*右边的更多*/
    .m-text-box h3,
    /*消息箱标题文字*/
    .nt-search input[data-v-bf3ded56]/*输入框文字*/
    {
        color: #fafafa;
    }

    .card9 .weibo-top .m-text-box h3,
    /*用户名*/
    .lite-msg .m-text-box h4,
    .lite-page-list .m-text-box h4,
    /*评论的用户名*/
    .cmt-sub-txt a,
    .m-text-box a,
    .weibo-og .weibo-text a,
    .weibo-rp .weibo-text span a {
        color: #ffc69c;
    }

    .card9 .weibo-main .weibo-og,
    /*正文*/
    .card9 .weibo-rp .weibo-text,
    .m-reles-nr span textarea/*发微博文字*/
    {
        color: #dfdfdf;
    }

    .lite-page-list .m-text-box h3/*评论文字*/
    {
        color: #dadada;
    }

    .text-box/*搜索页的文字*/
    {
        color: #aaaaaa;
    }

    .lite-topbar,
    .m-container-max[data-v-76f2e89e] {
        background-color: transparent;
        border-color: transparent;
    }

    .f-footer-ctrl .m-diy-btn,
    /*转发点赞评论*/
    .lite-iconf-comments,
    .lite-iconf-like,
    .lite-iconf-liked,
    .lite-iconf-report,
    .lite-iconf-share,
    /*转发评论点赞图标*/
    .lite-iconf-releas:before,
    /*发送微博图标*/
    .lite-iconf-msg:before,
    /*私信按钮*/
    .profile-header .prf-topbar .nav-right,
    /*设置按钮*/
    .lite-page-editor .box-right .lite-iconf[data-v-69b4128e]/*正文评论旁的转发评论赞*/
    {
        color: rgb(185 185 185 / 80%);
    }

    span.surl-text,
    /*链接*/
    a {
        color: #b3ffaf
    }

    .main {
        margin-top: 3.3rem !important;
    }

    .lite-page-list .m-text-box .cmt-sub-txt/*评论的评论*/
    {
        background-color: #7d89a663;
    }


    .m-active,
    /*点击元素后底面是白色的*/
    .ntop-nav[data-v-bf3ded56]/*搜索页搜索栏背景透明*/
    {
        background-color: transparent !important;
    }

    .f-media .m-img-box,
    /*媒体资源的图片*/
    .mwb-video[data-v-d0c96a68] {
        /*         margin: 0.4rem; */
        background-color: transparent;
        border-radius: 15px;
    }

    .mwb-video .mwbv-info-bar[data-v-d0c96a68]/*视频下文字信息的底*/
    {
        background-image: none;
    }


    .f-media .m-img-box img {
        border-radius: 20px;
    }

    /*登录后界面*/
    .refresh-btn,
    /*刷新按钮*/
    .icon_edit/*个人页的发微博按钮*/
    {
        background-color: #63636363;
        border-color: #63636363;
        color: #b3ffaf;
    }

    .card9 .card.m-panel/*媒体资源*/
    {
        background-color: #63636363;
    }

    .lite-page-top span.m-add-box:after,
    .weibo-top span.m-add-box:after/*关注按钮*/
    {
        border-radius: 20px;
    }`;
    console.log("xiugaiwanle");
    // Your code here...
})();
