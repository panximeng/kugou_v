/**
 * Created by Administrator on 2018/8/6 0006.
 */

window.onload=function(){
    Vue.component("v-header",{
        template:'<div class="header_top"><a class="logo"></a><span class="download">下载酷狗</span><a href="/search.html" class="search"></a> </div>',
    })

    Vue.component("v-nav",{
        data:function(){
            return{
                navList:[{url:"/",title:"新歌"}, {url:"/ranking.html",title:"排行"}, {url:"/plist.html",title:"歌单"}, {url:"/singer.html",title:"歌手"}
                ],
                ur:location.pathname// location.pathname  获取当前页面的url地址路径
            }
        },
        ur:location.pathname,// location.pathname  获取当前页面的url地址路径
        template:'<div class="nav"><ul><li v-for="urls in navList" :class="{active_nav:urls.url==ur}"><a :href="urls.url==ur?\'javascript:;\' :urls.url" >{{urls.title}}</a></li></ul></div>'
    })
    new Vue({
        el:"#app",
    })
}


