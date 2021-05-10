<template>
  <div class="hello">
    <div class="title">{{ msg }}</div>
    <div class="main">
      <div class="toggle-button-wrapper">
        <div class="radio-btn checkedRadio"><i><input type="radio" name="radio-btn" checked=""></i></div>
        <p style="margin-right: 5px; color: #0ebd87">我要</p>
        <!--        <div class="radio-btn off"><i><input type="radio" name="radio-btn" checked=""></i></div>-->
        <!--        <p style="color: #ff460c;">我不要</p>-->
        <!--        <p style="float: left;line-height: 30px;margin: 0 2px;" class="hidden-xs">点击"我不要"后，选取的关键词就会被搜索结果排除。</p>-->
        <!--                <a  href="/ds_search.html" target="_blank" class="form-control-new" style="border: 1px solid #36a2be;float: right;margin: 1px 10px;color: #36a2be;">新<span class=" hidden-xs">搜索页</span></a>-->
        <!--        <select id="history" class="form-control" style="width: 117px;float: right;" name="历史记录">-->
        <!--          <option value="">历史记录</option>-->
        <!--          <option value="1">记录(一键清空)</option>-->
        <!--        </select>-->
        <!--        <select id="time" class="form-control" style="margin-right: 10px;width: 75px;float: right;">-->
        <!--          <option value="30" name="">一月内</option>-->
        <!--          <option value="7" name="">一周内</option>-->
        <!--          <option value="1" name="">一天内</option>-->
        <!--          <option value="0" name="">搜索时间范围不限</option>-->
        <!--        </select>-->
        <div class="clean"></div>
      </div>
      <div class="search">
        <p>体型</p>
        <select id="school" class="form-control search-sel" style="margin-right: 10px;">
          <option value="0" name="全部门派">全部门派</option>
          <option value="15" name="凌雪阁">凌雪阁</option>
          <option value="14" name="蓬莱">蓬莱</option>
          <option value="1" name="霸刀">霸刀</option>
          <option value="2" name="长歌">长歌</option>
          <option value="3" name="苍云">苍云</option>
          <option value="4" name="丐帮">丐帮</option>
          <option value="5" name="明教">明教</option>
          <option value="6" name="唐门">唐门</option>
          <option value="7" name="五毒">五毒</option>
          <option value="8" name="藏剑">藏剑</option>
          <option value="9" name="天策">天策</option>
          <option value="10" name="纯阳">纯阳</option>
          <option value="11" name="少林">少林</option>
          <option value="12" name="七秀">七秀</option>
          <option value="13" name="万花">万花</option>
        </select>
        <select id="figure" class="form-control search-sel" style="margin-right: 10px;">
          <option value="0" name="全部体型">全部体型</option>
          <option value="4" name="萝莉">萝莉</option>
          <option value="2" name="成女">成女</option>
          <option value="1" name="成男">成男</option>
          <option value="3" name="正太">正太</option>
        </select>
        <a href="/explain.html" target="_blank"
           style="color: #36a2be; font-size: 11px; font-weight: normal; line-height: 34px;"><strong>？</strong>如何使用</a>
        <div class="clean"></div>
      </div>
      <div class="search" style="width: 100%;">
        <div class="hang-100">
          <p>区服</p>
          <select id="area1" class="form-control search-sel area" style="margin-right: 10px;">
            <option name="0" value="">不限</option>
            <option name="2" value="电点">电点</option>
            <option name="1" value="电月">电月</option>
            <option name="3" value="双点">双点</option>
            <option name="4" value="双月">双月</option>
          </select>
          <select id="area2" class="form-control search-sel area" style="margin-right: 10px;">
            <option name="0" value="">不限</option>
            <option class="district" name="1" value="电一" names="1">电一</option>
            <option class="district" name="2" value="电五" names="2">电五</option>
            <option class="district" name="2" value="电八" names="3">电八</option>
            <option class="district" name="3" value="双一" names="4">双一</option>
            <option class="district" name="4" value="双二" names="5">双二</option>
            <option class="district" name="3" value="双四" names="6">双四</option>
          </select>
          <select id="area3" class="form-control search-sel area" style="margin-right: 10px;">
            <option name="0" value="">不限</option>
            <option class="district" name="1" value="长安" names="1">长安</option>
            <option class="district" name="1" value="龙虎" names="1">龙虎</option>
            <option class="district" name="1" value="蝶服" names="1">蝶服</option>
            <option class="district" name="2" value="剑胆" names="2">剑胆</option>
            <option class="district" name="2" value="六合一" names="2">六合一</option>
            <option class="district" name="2" value="华乾" names="2">华乾</option>
            <option class="district" name="2" value="姨妈" names="2">姨妈</option>
            <option class="district" name="2" value="唯满侠" names="2">唯满侠</option>
            <option class="district" name="2" value="双梦" names="2">双梦</option>
            <option class="district" name="2" value="绝代" names="3">绝代</option>
            <option class="district" name="3" value="纵月" names="4">纵月</option>
            <option class="district" name="3" value="念破" names="4">念破</option>
            <option class="district" name="3" value="飞龙" names="5">飞龙</option>
            <option class="district" name="3" value="江湖故人" names="6">江湖故人</option>
            <option class="district" name="3" value="青梅" names="6">青梅</option>
            <option class="district" name="3" value="风月同天" names="6">风月同天</option>
            <option class="district" name="3" value="凌雪藏锋" names="6">凌雪藏锋</option>
          </select>
        </div>
        <div class="hang-100">
          <p>红发</p>
          <select id="red_hairs" class="form-control search-sel key-choose" name="红发">
            <option value="">请选择</option>
            <option value="红发全">红发全/红全</option>
            <option value="五红">五红/5红</option>
            <option value="四红">四红/4红</option>
            <option value="六红">六红/6红</option>
            <option value="羊红">羊红</option>
            <option value="猴红">猴红</option>
            <option value="七红">七红/7红</option>
            <option value="鸡红">鸡红/叽红</option>
            <option value="八红">八红/8红</option>
            <option value="狗红">狗红</option>
            <option value="九红">九红</option>
            <option value="十红">十红</option>
            <option value="猪红">猪红</option>
            <option value="资历红">资历红</option>
            <option value="鼠红">鼠红</option>
            <option value="紫发">紫发</option>
            <option value="多红发">多红发</option>
          </select>
          <div class="red_hairs key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>金发</p>
          <select id="gold_hairs" class="form-control search-sel key-choose" name="金发">
            <option value="">请选择</option>
            <option value="金发全">金发全/金全</option>
            <option value="一代金">一代金/1代金</option>
            <option value="狐金">狐金</option>
            <option value="猴金">猴金</option>
            <option value="蝶金">蝶金</option>
            <option value="叽金">叽金/鸡金</option>
            <option value="喵金">喵金</option>
            <option value="苏金">苏金/女神金</option>
            <option value="考金">考金</option>
            <option value="国金">国金</option>
            <option value="倒闭金">倒闭金</option>
            <option value="狗金">狗金</option>
            <option value="端午金">端午金/龙女金</option>
            <option value="中秋金">中秋金</option>
            <option value="玫瑰金">玫瑰金</option>
            <option value="猪金">猪金/朱金</option>
            <option value="丝路金">丝路金/坤金</option>
            <option value="珊瑚金">珊瑚金</option>
            <option value="资历金">资历金</option>
            <option value="兔金">兔金</option>
            <option value="飒金">飒金</option>
            <option value="鼠金">鼠金</option>
            <option value="苍金">苍金</option>
            <option value="如归乐金">如归乐金</option>
          </select>
          <div class="gold_hairs key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>五限</p>
          <select id="five_exteriors" class="form-control search-sel key-choose" name="五限">
            <option value="">请选择</option>
            <option value="白菜">白菜</option>
            <option value="粉白菜">粉白菜</option>
            <option value="紫白菜">紫白菜</option>
            <option value="贺华岁">贺华岁</option>
            <option value="情阅">情阅</option>
            <option value="谷雨">谷雨</option>
            <option value="夜斩白">夜斩白</option>
            <option value="白金夜斩白">白金夜斩白</option>
            <option value="黑金夜斩白">黑金夜斩白</option>
            <option value="螺母">螺母</option>
            <option value="白螺母">白螺母</option>
            <option value="蓝螺母">蓝螺母</option>
            <option value="红墨韵">红墨韵</option>
            <option value="黑墨韵">黑墨韵</option>
            <option value="红彩云">红彩云</option>
            <option value="蓝彩云">蓝彩云</option>
            <option value="红风露">红风露/黑风露</option>
            <option value="蓝风露">蓝风露</option>
            <option value="橙繁">橙繁</option>
            <option value="粉繁">粉繁</option>
            <option value="阳春海">阳春海/蓝阳春</option>
            <option value="阳春冰">阳春冰/白阳春</option>
            <option value="玉蟒">玉蟒</option>
            <option value="玉蟒游龙珥">玉蟒游龙珥</option>
            <option value="玉蟒游龙鲜">玉蟒游龙鲜</option>
            <option value="捕风">捕风</option>
            <option value="捕风捉影玄索">捕风捉影玄索</option>
            <option value="捕风捉影纵鹰">捕风捉影纵鹰</option>
            <option value="紧那罗歌波吟">紧那罗歌波吟</option>
            <option value="紧那罗歌晓镜">紧那罗歌晓镜</option>
            <option value="火舞阳炎杏甜">火舞阳炎杏甜</option>
            <option value="火舞阳炎未翔">火舞阳炎未翔</option>
            <option value="花开云隐秋菊">花开云隐秋菊/蓝花开</option>
            <option value="花开云隐春松">花开云隐春松/黑花开</option>
            <option value="策马">策马</option>
            <option value="策马弯弓若如">策马弯弓若如</option>
            <option value="策马弯弓河洲">策马弯弓河洲</option>
            <option value="风华倾国谁懂">风华倾国谁懂/紫风华</option>
            <option value="风华倾国时难">风华倾国时难/黑风华</option>
          </select>
          <div class="five_exteriors key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>六限</p>
          <select id="six_exteriors" class="form-control search-sel key-choose" name="六限">
            <option value="">请选择</option>
            <option value="娃娃">娃娃</option>
            <option value="白娃娃">白娃娃</option>
            <option value="粉娃娃">粉娃娃</option>
            <option value="蓝娃娃">蓝娃娃</option>
            <option value="黄娃娃">黄娃娃</option>
            <option value="不期">不期/不欺</option>
            <option value="绿不欺">绿不欺/绿不期</option>
            <option value="蓝不欺">蓝不欺/蓝不期</option>
            <option value="公主">公主</option>
            <option value="蓝公主">蓝公主</option>
            <option value="粉公主">粉公主</option>
            <option value="年轮">年轮</option>
            <option value="黑年轮">黑年轮</option>
            <option value="红年轮">红年轮</option>
            <option value="蓝年轮">蓝年轮</option>
            <option value="黄年轮">黄年轮</option>
            <option value="人面">人面</option>
            <option value="粉人面">粉人面</option>
            <option value="蓝人面">蓝人面</option>
            <option value="无色">无色</option>
            <option value="白无色">白无色</option>
            <option value="粉无色">粉无色</option>
            <option value="蓝无色">蓝无色</option>
            <option value="黄无色">黄无色</option>
            <option value="红九曲">红九曲</option>
            <option value="蓝九曲">蓝九曲</option>
            <option value="金陵">金陵</option>
          </select>
          <div class="six_exteriors key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>限时</p>
          <select id="exteriors" class="form-control search-sel key-choose" name="限时">
            <option value="">请选择</option>
            <option value="复刻">复刻</option>
            <option value="兰亭">兰亭/兰庭</option>
            <option value="九壤">九壤</option>
            <option value="禹梦九天">禹梦九天</option>
            <option value="长天">长天</option>
            <option value="沐云飞">沐云飞</option>
            <option value="红舞步">红舞步</option>
            <option value="舞步">舞步</option>
            <option value="封川">封川</option>
            <option value="水云">水云</option>
            <option value="雪涛">雪涛</option>
            <option value="桑海">桑海</option>
            <option value="重风">重风</option>
            <option value="写晖">写晖</option>
            <option value="微草">微草</option>
            <option value="玫瑰">玫瑰</option>
            <option value="重天">重天</option>
            <option value="天涯暮归">天涯暮归/天涯</option>
            <option value="宴陵">宴陵</option>
            <option value="红白菜">红白菜/桃白菜</option>
            <option value="绿白菜">绿白菜</option>
            <option value="白白菜">白白菜</option>
            <option value="粉螺母">粉螺母</option>
            <option value="金螺母">金螺母</option>
            <option value="绿螺母">绿螺母</option>
            <option value="粉彩云">粉彩云</option>
            <option value="紫彩云">紫彩云</option>
            <option value="潇湘">潇湘</option>
            <option value="望云">望云</option>
            <option value="天河">天河</option>
            <option value="中宵">中宵</option>
            <option value="腊八">腊八</option>
            <option value="打歌服">打歌服</option>
            <option value="兰若">兰若</option>
            <option value="喇叭">喇叭</option>
            <option value="一梦">一梦</option>
            <option value="小坎肩">小坎肩</option>
            <option value="雪衣">雪衣</option>
            <option value="鸢露白月">鸢露白月</option>
            <option value="夜隐">夜隐</option>
            <option value="重厥">重厥</option>
            <option value="侠影">侠影</option>
            <option value="白夜斩白">白夜斩白</option>
            <option value="红夜斩白">红夜斩白</option>
            <option value="黄登基">黄登基</option>
            <option value="紫登基">紫登基/黑绿登基</option>
            <option value="白彩云">白彩云</option>
            <option value="绿彩云">绿彩云</option>
            <option value="白贺华岁">白贺华岁</option>
            <option value="黑贺华岁">黑贺华岁/可儿</option>
          </select>
          <div class="exteriors key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>披风</p>
          <select id="cloaks" class="form-control search-sel key-choose" name="披风">
            <option value="">请选择</option>
            <option value="一代黑">一代黑/1代黑</option>
            <option value="一代黄">一代黄/1代黄</option>
            <option value="一代白">一代白/1代白</option>
            <option value="一代粉">一代粉/1代粉</option>
            <option value="一代红">一代红/1代红</option>
            <option value="一代紫">一代紫/1代紫</option>
            <option value="栽火莲">栽火莲/二代黑/2代黑</option>
            <option value="六翼">六翼/6e</option>
            <option value="狐狸毛">狐狸毛/狐狸</option>
            <option value="青翎翠羽">青翎翠羽/孔雀</option>
            <option value="周公御龙">周公御龙/周年龙</option>
            <option value="剑意白虹">剑意白虹/周年特效粉</option>
            <option value="狼头">狼头</option>
            <option value="情人枕">情人枕</option>
            <option value="天辉">天辉</option>
            <option value="白莲花">白莲花</option>
            <option value="几度春">几度春/绿披风</option>
            <option value="羽毛">羽毛</option>
            <option value="画卷">画卷</option>
            <option value="钰瓣">钰瓣</option>
            <option value="喵萝干">喵萝干</option>
            <option value="栩栩蝶翼">栩栩蝶翼/大蝴蝶</option>
            <option value="玲珑意">玲珑意/短粉</option>
            <option value="搞事服披风">搞事服披风/阵营披风</option>
            <option value="浩气披风">浩气披风</option>
            <option value="恶人披风">恶人披风</option>
            <option value="双十一">双十一</option>
            <option value="狄仁杰披风">狄仁杰披风</option>
          </select>
          <div class="cloaks key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>礼盒</p>
          <select id="boxes" class="form-control search-sel key-choose" name="礼盒">
            <option value="">请选择</option>
            <option value="九阙天影">九阙天影/黑盒</option>
            <option value="盘龙凤舞">盘龙凤舞/红盒</option>
            <option value="云锦梦华">云锦梦华/蓝盒</option>
            <option value="踏云盒">踏云盒</option>
            <option value="丝路盒">丝路盒</option>
            <option value="飞天盒">飞天盒</option>
            <option value="鹤影天青">鹤影天青/青盒</option>
            <option value="糖盒">糖盒/唐盒</option>
            <option value="白盒">白盒</option>
            <option value="粉盒">粉盒/七秀盒</option>
            <option value="花盒">花盒/紫盒</option>
            <option value="叽盒">叽盒</option>
            <option value="秃盒">秃盒</option>
            <option value="歌盒">歌盒/鸽盒/咕盒</option>
            <option value="丐盒">丐盒</option>
            <option value="喵盒">喵盒/明教盒</option>
            <option value="刀盒">刀盒/貂盒</option>
            <option value="毒盒">毒盒</option>
            <option value="蓬莱盒">蓬莱盒</option>
            <option value="一代七夕">一代七夕</option>
            <option value="韶华春秋">韶华春秋/二代七夕</option>
            <option value="三代七夕">三代七夕</option>
            <option value="四代七夕">四代七夕/47盒/四七</option>
            <option value="一代粉中秋盒">一代粉中秋盒/一代中秋粉盒</option>
            <option value="一代蓝中秋盒">一代蓝中秋盒/一代中秋蓝盒</option>
            <option value="二代中秋盒">二代中秋盒</option>
            <option value="三代中秋盒">三代中秋盒</option>
            <option value="四代粉中秋盒">四代粉中秋盒</option>
            <option value="四代蓝中秋盒">四代蓝中秋盒</option>
            <option value="一代元宵盒">一代元宵盒</option>
            <option value="二代元宵">二代元宵/王熙凤</option>
            <option value="一代重阳">一代重阳</option>
            <option value="二代重阳">二代重阳</option>
            <option value="绿重阳">绿重阳</option>
            <option value="紫重阳">紫重阳</option>
            <option value="一代粉花朝">一代粉花朝/一代花朝粉</option>
            <option value="一代白花朝">一代白花朝/一代花朝白</option>
            <option value="一代黄花朝">一代黄花朝/一代花朝黄</option>
            <option value="一代绿花朝">一代绿花朝/一代花朝绿</option>
            <option value="二代花朝">二代花朝</option>
            <option value="端午白盒">端午白盒/白端午</option>
            <option value="端午黑盒">端午黑盒/黑端午</option>
            <option value="猫盒">猫盒/520粉盒</option>
            <option value="狗盒">狗盒/520白盒</option>
            <option value="狄仁杰盒">狄仁杰盒</option>
            <option value="白腿盒">白腿盒</option>
            <option value="红腿盒">红腿盒</option>
            <option value="蓝腿盒">蓝腿盒</option>
            <option value="棉袄盒">棉袄盒</option>
            <option value="猪盒">猪盒</option>
            <option value="泠月盒">泠月盒</option>
          </select>
          <div class="boxes key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>杂物</p>
          <select id="other" class="form-control search-sel key-choose" name="橙武">
            <option value="">比如说橙武</option>
            <option value="橙武">
              橙武/cw/CW/霜影玄玑/瀚海长风/悲声/千山月影/羲和凰羽/沧澜沉歌/涅槃/荣枯/赤乌流火/神威/蛇影迷蝶/咫尺韶华/鹫翎诡夺/螭首千机/阴阳往极/圣炎耀尊/青雀无尘/念庭兰/猊焰/犴魂/鹿卢/厉风炽海/沧骨曜月/寒魄玉心/无芒
            </option>
            <option value="归墟玄晶">归墟玄晶</option>
            <option value="双修">双修</option>
            <option value="pvp">pvp/PVP</option>
            <option value="pve">pve/PVE</option>
            <option value="九龙">九龙/风雷</option>
            <option value="95CW">95CW/95cw/95橙武/90CW/90cw/90橙武/80CW/80cw/80橙武/70CW/70cw/70橙武/泰阿</option>
            <option value="珠盏">珠盏</option>
            <option value="焰归">焰归</option>
            <option value="夜话">夜话</option>
            <option value="黑龙斩铁">黑龙斩铁</option>
            <option value="里飞沙">里飞沙</option>
            <option value="赤兔">赤兔</option>
            <option value="脚气马">脚气马</option>
            <option value="白板">白板</option>
            <option value="无证">无证</option>
            <option value="装备">装备</option>
            <option value="精力">精力</option>
            <option value="大师赛">大师赛</option>
            <option value="三山四海">三山四海</option>
            <option value="阴阳两界">阴阳两界</option>
            <option value="黑白路">黑白路</option>
            <option value="校服">校服</option>
            <option value="老白发">老白发</option>
            <option value="资历">资历</option>
            <option value="拓印">拓印</option>
            <option value="狐金头像">狐金头像</option>
            <option value="滚滚">滚滚</option>
            <option value="大雕">大雕</option>
            <option value="团团">团团</option>
            <option value="闹闹">闹闹</option>
            <option value="橘猫">橘猫</option>
            <option value="鹦鹉">鹦鹉</option>
            <option value="珠帘">珠帘/白面挂</option>
            <option value="紫面挂">紫面挂</option>
            <option value="富婆套">富婆套</option>
            <option value="大侠">大侠</option>
            <option value="多黑发">多黑发</option>
            <option value="多白发">多白发</option>
          </select>
          <div class="other key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p style="margin: 0;">自定义</p>
          <input id="ket-text" type="text" placeholder="单个词(如冰心)" class="form-control search-key col-xs-3"
                 style="margin-left: 5px;">
          <button type="button" class="btn btn-primary key-add" id="key-add">+</button>
          <div class="ket-text key-show col-xs-6"></div>
        </div>
        <div class="hang-100">
          <p>价格</p>
          <input id="minPrice" class="form-control search-sel" style="max-width: 14%;;">
          <span style="float: left;line-height: 34px;">--</span>
          <input id="maxPrice" class="form-control search-sel" style="max-width: 14%;;">
          <p style="line-height: 17px;font-weight: normal;">
<!--            <input id="ignorePriceFlag" type="checkbox" style="float: left;margin-left: 2px;" checked="checked"><span-->
<!--              style="float: left;">显示价格未识别号</span><br>-->
            <span style="">(价格功能不推荐)</span>
          </p>
        </div>
        <!--        <div class="hang-100">-->
        <!--          <p>设置</p>-->
        <!--          <p><input id="filters" type="checkbox" style="float: left;margin: 11px 0 0;" checked="checked"><span-->
        <!--              style="float: left;">隐藏无用字符</span></p>-->
        <!--          <p><input id="daishou" type="checkbox" style="float: left;margin: 11px 0 0;"><span-->
        <!--              style="float: left;">屏蔽代售</span></p>-->
        <!--        </div>-->
        <div class="hang-100">
          <button id="keyword" class="btn btn-info btn-sm" v-on:click="search()">搜索</button>
          <button id="clearkey" class="btn btn-default btn-sm" style="margin-left: 10px;">一键清除</button>
          <!-- <button id="" class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal-add">机器人冻结中</button>-->
          <div class="modal fade" id="myModal-add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
               aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content" style="padding: 9px;">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 class="modal-title">通知</h4>
                </div>
                <div class="modal-main">
                  <p>○自动蹲号小助手QQ号因为发送消息有敏感词和网页链接被暂封，暂停小助手激活功能</p>
                  <p>正在解决，恢复时间待定</p>
                  <div class="clean"></div>
                </div>
                <div class="modal-footer">
                </div>

              </div><!-- /.modal-content -->
            </div><!-- /.modal -->
          </div>
          <!--卖号-->
          <!--          <a href="/release.html" class="btn btn-warning btn-xm" style="margin-left: 10px;">自主站内发布</a>-->
          <!--          <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal">我要卖号丨免定</button>-->

        </div>

        <div id="qinghua_table">
          <table class="table" id="qh_table"></table>

          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="id"
                label="ID"
                width="80">
              <!--                width="80" :formatter="stateFormat">-->
              <template v-slot="scope">
                <a :href="'http://www.qhuads.com/h-pd-'+scope.row.id+'.html'"
                   target="_blank"
                   class="buttonText">详情</a>
              </template>

            </el-table-column>
            <el-table-column
                prop="title"
                label="编号"
                width="80">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格"
                width="80">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
          </el-table>
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-sizes="[10, 20, 30, 50, 100]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totleNum">
          </el-pagination>

          <!--          <table class="table" id="table"></table>-->
        </div>
        <div id="tieba_table">
          <table class="table" id="ds_table"></table>
          <table class="table" id="table"></table>
        </div>
        <div class="table release_table" style="display: none;">
          <table class="table" id="release_table"></table>
        </div>
        <div class="table wanbao_table" style="display: none;">
          <table class="table" id="wanbao_table"></table>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'T',
  props: {
    msg: String
  },
  data() {
    return {
      tableData: [],

      totleNum: 1,
      // 当前页
      pageNum: 1,
      // 每页多少条
      pageSize: 10

    }
  },
  mounted() {
    // this.getHomeinfo()
    $("#area1").bind("change", function () {
      $("#area2").val('');
      $("#area3").val('');
      var name = $(this).find("option:selected").attr('name');
      if (name != 0) {
        $("#area2").children().hide();
        $("#area3").children().hide();
        $("[name='" + name + "']").show();
        $("[name='0']").show();
      } else {
        $("#area2").children().show();
      }
    });
    $("#area2").bind("change", function () {
      $("#area3").val('');
      var names = $(this).find("option:selected").attr('names');
      if (names != 0) {
        $("#area3").children().hide();
        $("[names='" + names + "']").show();
        $("[name='0']").show();
      } else {
        $("#area3").children().show();
      }
    });
    //下拉框选择
    $(".key-choose").bind("change", function () {
      var id = $(this).attr('id');
      var vaule = $(this).find("option:selected").val();
      var text = $(this).find("option:selected").text();
      console.log($(this).find("option:selected").text());
      if (vaule != null) {
        //if( $(".off").css("display") =='none'){
        if ($(".off").hasClass("checkedRadio") == false) {
          $("." + id).append("<a class='choosed btn btn-info key-must' data-name=" + vaule + ">" + text + "</a>");
          $(" .key-choose option[value='" + vaule + "']").attr("disabled", "disabled");
        } else {
          $("." + id).append("<a class='unchoosed btn btn-danger' data-name=" + vaule + ">" + text + "</a>");
          $(" .key-choose option[value='" + vaule + "']").attr("disabled", "disabled");
        }

        $(".choosed").bind("click", function () {
          var uid = $(this).attr('data-name');
          $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
          $(this).remove();
        });
        $(".unchoosed").bind("click", function () {
          var uid = $(this).attr('data-name');
          $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
          $(this).remove();
        });
      }
      $(this).val('');
    });
    //手写框添加
    $("#key-add").bind("click", function () {
      var text = $('#ket-text').val();
      if (text) {
        //if( $(".off").css("display") =='none'){
        if ($(".off").hasClass("checkedRadio") == false) {
          $(".ket-text").append("<a class='choosed btn btn-info' data-name=" + text + ">" + text + "</a>");
        } else {
          $(".ket-text").append("<a class='unchoosed btn btn-danger' data-name=" + text + ">" + text + "</a>");
        }

        $(".choosed").bind("click", function () {
          var uid = $(this).attr('data-name');
          $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
          $(this).remove();
        });
        $(".unchoosed").bind("click", function () {
          var uid = $(this).attr('data-name');
          $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
          $(this).remove();
        });
      }
    });
    //一键清除
    $("#clearkey").bind("click", function () {
      $('#school').val('0');
      $('#figure').val('0');
      $('#area1').val('');
      $('#area2').val('');
      $('#area3').val('');
      $('.choosed').each(function () {
        var uid = $(this).attr('data-name');
        $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
        $(this).remove();
      });
      $('.unchoosed').each(function () {
        var uid = $(this).attr('data-name');
        $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
        $(this).remove();
      });
    });
    $(".choosed").bind("click", function () {
      var uid = $(this).attr('data-name');
      $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
      $(this).remove();
    });
    $(".unchoosed").bind("click", function () {
      var uid = $(this).attr('data-name');
      $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
      $(this).remove();
    })


  },
  methods: {
    stateFormat(row) {
      return "http://www.qhuads.com/h-pd-" + row.id + ".html"
    },

    getHomeinfo() {
      axios.get('/api/index.json')
          .then(this.getHomeinfoSucc)
    },
    chooseClean() {
      $(".choosed").bind("click", function () {
        var uid = $(this).attr('data-name');
        $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
        $(this).remove();
      });
      $(".unchoosed").bind("click", function () {
        var uid = $(this).attr('data-name');
        $(" .key-choose option[value='" + uid + "']").removeAttr("disabled");
        $(this).remove();
      });
    },
    getHomeinfoSucc(res) {
      console.log(res)
    }, search() {
      //区服
      var area = new Array();
      area.push($("#area1").val() || '不限');
      area.push($("#area2").val() || '不限');
      area.push($("#area3").val() || '不限');
      // var area_history = '';
      // $.each(area, function (i, result) {
      //
      //   if (result != '不限') {
      //     $.each(area_data[i], function (a, result) {
      //       if (result.label != area[i]) {
      //         area_history = area_history + result.label + ',';
      //       }
      //     });
      //   }
      // });
      console.log(area);
      var condition = new Array();
      var exterior = '';
      $('.choosed').each(function () {
        exterior = $(this).attr("data-name") + ',' + exterior;
        condition.push($(this).attr("data-name"));
      });
      // console.log($("#school option:selected").text());
      if ($("#area2").val()!="0")condition.push($("#school option:selected").text() );
      if ($("#area3").val()!="0")condition.push($("#school option:selected").text() );
      if ($("#school").val()!="0")condition.push($("#school option:selected").text() );
      if ($("#figure").val()!="0")condition.push($("#figure option:selected").text() );
      // condition.push($("#figure").attr("name") );
      // var filter = area_history;
      // var filter_history = '';
      // $('.unchoosed').each(function () {
      //   filter = 'strings='+$(this).attr("data-name") + '&' + filter;
      //   filter_history = $(this).attr("data-name") + ',' + filter_history;
      // });
      // var navType = $(".content-type .active").attr("index");

      // ds_initTable(exterior.substring(0, exterior.length - 1), filter.substring(0, filter.length - 1));
      // initTable(exterior.substring(0, exterior.length - 1), filter.substring(0, filter.length - 1));

      // $('html,body').animate({scrollTop: $('#contenttypenav2').offset().top}, 500);
      //记录历史
      // var news = {
      //   exterior: exterior.substring(0, exterior.length - 1),
      //   filter: filter_history.substring(0, filter_history.length - 1),
      //   school: $("#school").find("option:selected").text(),
      //   figure: $("#figure").find("option:selected").text(),
      //   area1: $("#area1").find("option:selected").text(),
      //   area2: $("#area2").find("option:selected").text(),
      //   area3: $("#area3").find("option:selected").text(),
      //   minPrice: $("#minPrice").val(),
      //   maxPrice: $("#maxPrice").val()
      // };
      // historyAdd($("#school").find("option:selected").text()+','+$("#figure").find("option:selected").text()+','+exterior.substring(0,exterior.length-1)+'/');
      // historyAdd(news);
      const that = this;
      axios.post('http://111.229.29.74:8081/test', {
            "strings": condition,
            "pageNum": that.pageNum,
            "pageSize": that.pageSize,
            "minPrice": $("#minPrice").val(),
            "maxPrice": $("#maxPrice").val()
          }, {
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-Requested-With",
              "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
            }
          }
      ).then(function (response) {
        that.tableData = response.data.list;
        that.totleNum = response.data.total;
        console.log(response);
      })
          .catch(function (error) {
            console.log(error);
          });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.search();
    }
  }

}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

* {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-family: Arial;
}

.form-control {
  padding: 1px 5px;
}

html, body {
  height: 100%;
}

body {
  background-color: #e7e8eb;
}

.coloe-red {
  color: red;
}

.search p {
  color: gray;
  font-size: 15px;
  font-weight: bold;
  line-height: 34px;
  text-align: left;
  float: left;
  margin: 0 19px 0 0;
}

header {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .33);
}

.top-new {
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: #D4D4D4;
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  background-color: black;
  margin: 0;
}

.title {
  height: 60px;
  border-top: 1px solid #e4ebf4;
  border-bottom: 1px solid #e4ebf4;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 60px;
  font-weight: normal;
  color: #595959;
}

.clean {
  clear: both;
}

.content {
  padding-right: 15px;
  padding-left: 15px;
}

.main {
  float: left;
  background-color: white;
  padding: 15px 10px;
  min-height: 800px;
  width: 100%;
}

.aside {
  float: right;
  width: 298px;
  background-color: white;
  min-height: 800px;
  padding: 15px 10px;
}

.search {
  margin: 10px 0;
}

.search-sel {
  width: 14%;
  line-height: 28px;
  float: left;
}

.search-key {
  width: 10%;
  line-height: 28px;
  float: left;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.key-add {
  width: 4%;
  float: left;
  font-weight: bolder;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.search-inp {
  width: 70%;
  left: 28px;
  float: left;
}

.message {
  color: #777;
  margin: 10px 0;
  line-height: 10px;
  padding: 10px 10px;
  word-break: break-all;
  border-radius: 10px;
  /*background-color: #ececec;*/
  background-color: #f7f5f5;
}

.hang-100 {
  width: 100%;
  height: 34px;
  margin: 5px 0;
}

.key-show {
  padding: 0;
  height: 34px;
  float: left;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 5px;
}

.choosed {
  margin: 2px 4px;
  padding: 3px 12px;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.unchoosed {
  margin: 2px 4px;
  padding: 3px 12px;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fixed-table-body {
  height: auto;
}

.fixed-table-body strong {
  color: #dc8222;
}

.table_max {
  max-width: 194px;
}

/*开关*/
#toggle-button {
  display: none;
}

.button-label {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 30px;
  background-color: #5bc0de;
  box-shadow: #ccc 0px 0px 0px 2px;
  border-radius: 30px;
  overflow: hidden;
  float: left;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
}

.button-label .text {
  line-height: 30px;
  font-size: 18px;
  text-shadow: 0 0 2px #ddd;
}

/*排除切换*/
.on {
  color: #fff;
  display: inline-block;
  text-indent: 34px;
}

.off {
  color: #fff;
  display: none;
  text-indent: 10px;
}

.button-label .circle {
  left: 0;
  transition: all 0.3s;
}

#toggle-button:checked + label.button-label .circle {
  left: 50px;
}

#toggle-button:checked + label.button-label .on {
  display: none;
}

#toggle-button:checked + label.button-label .off {
  display: inline-block;
}

#toggle-button:checked + label.button-label {
  background-color: #ccc;
}

/*footer*/
.footer {
  background-color: #ffffff;
  margin-top: 10px;
}


/*二*/

.radio-btn input[type="radio"], .check-box input[type="checkbox"] {
  visibility: hidden;
}

/*Custom radio button*/
.radio-btn {
  width: 20px;
  height: 20px;
  display: inline-block;
  float: left;
  margin: 3px 7px 0 0;
  cursor: pointer;
  position: relative;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 0 1px #ccc;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(47%, rgba(246, 246, 246, 1)), color-stop(100%, rgba(237, 237, 237, 1)));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  background: -o-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  background: -ms-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed', GradientType=0);
}

.checkedRadio {
  -moz-box-shadow: inset 0 0 5px 1px #ccc;
  -webkit-box-shadow: inset 0 0 5px 1px #ccc;
  box-shadow: inset 0 0 5px 1px #ccc;
}

.radio-btn i {
  border: 1px solid #E1E2E4;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 4px;
  top: 4px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}

.toggle-button-wrapper p {
  float: left;
  line-height: 26px;
  color: gray;
  font-size: 15px;
  font-weight: bold;
}

.checkedRadio i {
  background-color: #898A8C;
}

/*导航*/
.navbar a {
  line-height: 20px;
}

.navbar img {
  width: 20px;
}


/*标签*/
.badge {
  padding: 3px 4px;
  float: right;
  background-color: #ff666b;
}

.well-sm img {
  margin-top: -3px;
}

/*a*/
a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.til:link {
  color: #2d64b3;
}

.til:hover {
  color: #123d80;
  text-decoration: none;
}

.tilshow {
  color: #333;
  font-weight: bold;
}

.tilshow:link {
  color: #333;
}

.tilshow:hover {
  color: #333;
  text-decoration: none;
}

.teb_btn:link {
  color: white;
  background-color: #5bc0de;
  padding: 2px 5px;
  font-size: 12px;
}

/*详情弹框*/
.det_bor {
  padding: 1px 2px;
  margin: 10px 0 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: gray;
}

.modal-header, .modal-main, .modal-footer {
  padding: 10px 25px;
}

.order .txt {
  color: #686868;
  vertical-align: middle;
  font-size: 15px;
}

.order .line {
  display: inline-block;
  width: 210px;
  border-top: 1px solid #ccc;
}

/*账号发布*/
.release_details {
  min-height: 410px;
}

.release_user {
  min-height: 120px;
}

.release_user_left {
  float: left;
}

.release_user_right {
  float: right;
  margin: 10px 20px;
}

.release_user_right .btn-default {
  margin-top: 10px;
}

.release_user_right button img {
  width: 18px;
  margin-right: 5px;
  margin-top: -4px;
}

.to-qq img {
  width: 19px;
  margin-top: -4px;
}

.to-qq {
  border-radius: 33px;
  padding: 4px;
  margin-right: 5px;
}

.btn-xs.to-qq {
  padding: 2px;
}

.release_details textarea {
  /*border: none;*/
}

.btn-ground {
  width: 60%;
  margin: 5px auto;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.btn-ground .btn {
  padding: 10px 50px;
}


/*账号发布*/
.alert {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 300px;
  max-width: 600px;
  transform: translate(-50%, -50%);
  z-index: 99999;
  text-align: center;
  padding: 15px;
  border-radius: 3px;
}

.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}

.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}

.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

@media (min-width: 1440px) {
  /*.main {*/
  /*width: 920px;*/
  /*}*/
  .container {
    width: 1270px;
  }

  .order .line {
    width: 210px;
  }
}

@media (min-width: 1366px) {
  /*.main {*/
  /*width: 840px;*/
  /*}*/
  .container {
    width: 1190px;
  }

  .order .line {
    width: 210px;
  }
}

@media screen and (max-width: 500px) {
  .top-new {
    height: 21px;
  }

  .search-sel {
    width: 25%;
  }

  .search-key {
    width: 18%;
  }

  .key-show {
    width: 55%;
  }

  #exterior {
    width: 25%;
  }

  .choosed {
    margin: 2px 2px;
    max-width: 70px;
  }

  .unchoosed {
    margin: 2px 2px;
    max-width: 70px;
  }

  .main {
    height: auto;
  }

  .content {
    padding: 0;
  }

  .order .line {
    width: 90px;
  }

  .btn-ground .btn {
    padding: 10px 17px;
  }

  .hang-new {
    width: 100% !important;
  }

  .search-row {
    display: block !important;
  }
}


/*新操作界面*/
/*选择框*/
.border-lr {
  border-color: #E6E2E1 #D1CCC7;
  border-style: solid solid dotted;
  border-width: 0 2px;
}

.hang-new {
  border-top: 1px dotted #D1CCC7;
  width: 50%;
  float: left;
  border-right: 1px solid #cacaca;
  border-left: 1px solid #cecdcd;
}

.hang-new .row-title {
  color: #777777;
  font: 12px tahoma, arial, "\5b8b\4f53";
  text-align: center;
  background-color: #F7F5F5;
  line-height: 30px;
  padding-left: 12px;
  position: relative;
  cursor: pointer;
}

.hang-new .row-label .label, .form-control-new {
  padding: .2em .5em .3em;
  margin: 6px 10px;
  font: 14px tahoma, arial, "\5b8b\4f53";
  color: #777777;
  display: inline-block;
  cursor: pointer;
  border-radius: .8em;
}

.hang-new .row-hang {
  height: 40px;
  overflow: hidden;
}

.hang-new .row-all {
  height: auto;
  max-height: 164px;
  overflow-y: auto;
  min-height: 40px;
}

.hang-new #red_hairs.row-all {
  height: 123px;
}

.hang-new .row-label .btn-info {
  margin: 6px 10px;
  width: auto;
  overflow: unset;
  color: white;
  border-color: #46b8da;
}

.hang-new .row-label .btn-danger {
  margin: 6px 10px;
  width: auto;
  overflow: unset;
  color: white;
  border-color: #d43f3a;
}

.hang-new .key-add {
  width: 25px;
  font-size: 19px;
  height: 25px;
  border-radius: 32px;
  font-weight: bolder;
  border: 1px solid #cacaca;
  background: none;
  margin: 6px 10px;
  color: #cacaca;
}

.search-new {
  border-color: #cecdcd;
  border-style: solid solid solid;
  border-width: 1px 0px 2px 0px;
  position: relative;
}

.search-new .search-open, .search-new .search-close {
  color: #777777;
  position: absolute;
  right: -1px;
  font-size: 12px;
  padding: 3px 5px;
  background-color: #cecdcd;
  cursor: pointer;
}

.search-new .search-open svg, .search-new .search-close svg {
  vertical-align: middle;
  margin-top: -3px;
}

.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {
  background-color: #5bc0de;
}

.nav-justified > li > a {
  border: 1px solid #5bc0de;
  color: #5bc0de;
}

.nav > li > a:focus, .nav > li > a:hover {
  color: white;
  background-color: #97c8d6;
}

.search-row {
  display: flex;
}

.search-new p {
  margin: 6px 10px;
}

.search-new .row-open, .search-new .row-close {
  color: #777777;
  font-size: 12px;
  right: 10px;
  position: absolute;
  cursor: pointer;
}

.search-new .row-open svg, .search-new .row-close svg {
  vertical-align: middle;
  margin-top: -3px;
}

.row-label a, .row-label a:focus, .row-label a:hover {
  cursor: pointer;
  background-color: #F7F5F5;
  display: inline-block;
  padding: 10px 6px;
  color: #777777;
  width: 65px;
}

#area1, #area2, #area3, #school, #figure {
  padding: .2em .1em .2em;
}

#area1, #area2, #area3 {
  width: 18%;
}

.hang-new .row-title span {
  font-weight: bolder;
}

.line-two {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/*正在加载图。。。*/
.spin-container {
  width: 100px;
  height: 100px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10002;
  margin-top: -100px;
  margin-left: -50px;
}

.spinner {
  margin: auto;
  width: 80px;
  height: 80px;
  position: relative;
}

.container1 > div, .container2 > div, .container3 > div {
  width: 16px;
  height: 16px;
  background-color: #f08300;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}

.circle1 {
  top: 0;
  left: 0;
}

.circle2 {
  top: 0;
  right: 0;
}

.circle3 {
  right: 0;
  bottom: 0;
}

.circle4 {
  left: 0;
  bottom: 0;
}

.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0.0)
  }
  40% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.inline-block {
  display: inline-block;
  width: 66px;
}

.opacity {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}

.tips-close {
  position: absolute;
  right: -5px;
  top: -10px;
  background-color: #5e5e5e;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  padding: 0 6px;
  cursor: pointer;
}


.wan_btn .icon {
  vertical-align: middle;
  margin-top: -3px;
}

.yu-text {
  display: inline;
  color: white;
  background: rgb(255, 6, 0);
  border-radius: 50%;
  padding: 2px 3px;
  margin-right: 10px;
}

.shou-text {
  display: inline;
  color: white;
  background: rgb(0, 178, 105);
  border-radius: 50%;
  padding: 2px 3px;
  margin-right: 10px;
}

.content-type {
  width: 97%;
  margin: auto;
}
</style>
