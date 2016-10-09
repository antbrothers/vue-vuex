<script>

    export default {
        name: 'Home'
    }
</script>
<style>
    .nav_home{
        background-color: #0e90d2;
    }
    .nav_home.navbar-default .navbar-nav>li>a{
        color: white;
    }
    .nav_home .navbar_title{
        color: white;
        font-weight: bold;
    }
    .nav_home.navbar-default .navbar-nav>.open>a{
        background-color:#0b6fa2;
        color: white;
    }
    .nav_home .navbar-user{
        float: right;
    }
</style>
<template>
    <div id="home">
        <!-- 导航开始 -->
        <nav class="navbar navbar-default nav_home" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand navbar_title" href="#">运营后台</a>
                </div>
                <div>
                    <ul class="nav navbar-nav">
                        <li><a href="#!">内容运营</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                用户运营
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">主播运营</a></li>
                                <li><a href="#">公司测试账号</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                加V
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">加V初审</a></li>
                                <li><a href="#">资料修改审核</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                直播间设置
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">点赞样式管理</a></li>
                                <li><a href="#">浪客运营位管理</a></li>
                                <li><a href="#!">东财运营位管理</a></li>
                                <li><a href="#!">推流设置管理</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                话题
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">话题设置</a></li>
                                <li><a href="#">话题统计</a></li>
                            </ul>
                        </li>
                        <li><a href="#!">推送</a></li>
                        <li><a href="#!">礼物</a></li>
                        <li><a href="#!">意见反馈</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                统计
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">数据统计</a></li>
                                <li><a href="#">用户统计</a></li>
                            </ul>
                        </li>
                        <li><a href="#!">管理员列表</a></li>
                        <li><a href="#!">主播搜索</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                运营活动
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#!/home/realNameAuto">实名认证</a></li>
                                <li><a href="#">报名用户</a></li>
                                <li><a href="#">日排行榜</a></li>
                                <li><a href="#">周排行榜</a></li>
                                <li><a href="#">活动黑名单</a></li>
                                <li><a href="#">数据统计</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-user">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="glyphicon glyphicon-user"></i>
                                管理员:eastmoney
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#">
                                        <i class="glyphicon glyphicon-cog"></i>
                                    设置
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="glyphicon glyphicon-off"></i>
                                    退出
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>