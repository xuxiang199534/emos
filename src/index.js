import React, { Component } from 'react'
import { Carousel } from 'antd'
import PropTypes from 'prop-types'

import styles from './index.less'

export const emos = {
  '[微笑]': '//s.weituibao.com/release/crius/emo/001.png',
  '[撇嘴]': '//s.weituibao.com/release/crius/emo/002.png',
  '[色]': '//s.weituibao.com/release/crius/emo/003.png',
  '[发呆]': '//s.weituibao.com/release/crius/emo/004.png',
  '[得意]': '//s.weituibao.com/release/crius/emo/005.png',
  '[流泪]': '//s.weituibao.com/release/crius/emo/006.png',
  '[害羞]': '//s.weituibao.com/release/crius/emo/007.png',
  '[闭嘴]': '//s.weituibao.com/release/crius/emo/008.png',
  '[睡]': '//s.weituibao.com/release/crius/emo/009.png',
  '[大哭]': '//s.weituibao.com/release/crius/emo/010.png',
  '[尴尬]': '//s.weituibao.com/release/crius/emo/011.png',
  '[发怒]': '//s.weituibao.com/release/crius/emo/012.png',
  '[调皮]': '//s.weituibao.com/release/crius/emo/013.png',
  '[呲牙]': '//s.weituibao.com/release/crius/emo/014.png',
  '[惊讶]': '//s.weituibao.com/release/crius/emo/015.png',
  '[难过]': '//s.weituibao.com/release/crius/emo/016.png',
  '[酷]': '//s.weituibao.com/release/crius/emo/017.png',
  '[囧]': '//s.weituibao.com/release/crius/emo/018.png',
  '[抓狂]': '//s.weituibao.com/release/crius/emo/019.png',
  '[吐]': '//s.weituibao.com/release/crius/emo/020.png',
  '[偷笑]': '//s.weituibao.com/release/crius/emo/021.png',
  '[愉快]': '//s.weituibao.com/release/crius/emo/022.png',
  '[白眼]': '//s.weituibao.com/release/crius/emo/023.png',
  '[傲慢]': '//s.weituibao.com/release/crius/emo/024.png',
  '[饥饿]': '//s.weituibao.com/release/crius/emo/025.png',
  '[困]': '//s.weituibao.com/release/crius/emo/026.png',
  '[惊恐]': '//s.weituibao.com/release/crius/emo/027.png',
  '[流汗]': '//s.weituibao.com/release/crius/emo/028.png',
  '[憨笑]': '//s.weituibao.com/release/crius/emo/029.png',
  '[悠闲]': '//s.weituibao.com/release/crius/emo/030.png',
  '[奋斗]': '//s.weituibao.com/release/crius/emo/031.png',
  '[咒骂]': '//s.weituibao.com/release/crius/emo/032.png',
  '[疑问]': '//s.weituibao.com/release/crius/emo/033.png',
  '[嘘]': '//s.weituibao.com/release/crius/emo/034.png',
  '[晕]': '//s.weituibao.com/release/crius/emo/035.png',
  '[疯了]': '//s.weituibao.com/release/crius/emo/036.png',
  '[衰]': '//s.weituibao.com/release/crius/emo/037.png',
  '[骷髅]': '//s.weituibao.com/release/crius/emo/038.png',
  '[敲打]': '//s.weituibao.com/release/crius/emo/039.png',
  '[再见]': '//s.weituibao.com/release/crius/emo/040.png',
  '[擦汗]': '//s.weituibao.com/release/crius/emo/041.png',
  '[抠鼻]': '//s.weituibao.com/release/crius/emo/042.png',
  '[鼓掌]': '//s.weituibao.com/release/crius/emo/043.png',
  '[糗大了]': '//s.weituibao.com/release/crius/emo/044.png',
  '[坏笑]': '//s.weituibao.com/release/crius/emo/045.png',
  '[左哼哼]': '//s.weituibao.com/release/crius/emo/046.png',
  '[右哼哼]': '//s.weituibao.com/release/crius/emo/047.png',
  '[哈欠]': '//s.weituibao.com/release/crius/emo/048.png',
  '[鄙视]': '//s.weituibao.com/release/crius/emo/049.png',
  '[委屈]': '//s.weituibao.com/release/crius/emo/050.png',
  '[快哭了]': '//s.weituibao.com/release/crius/emo/051.png',
  '[阴险]': '//s.weituibao.com/release/crius/emo/052.png',
  '[亲亲]': '//s.weituibao.com/release/crius/emo/053.png',
  '[吓]': '//s.weituibao.com/release/crius/emo/054.png',
  '[可怜]': '//s.weituibao.com/release/crius/emo/055.png',
  '[菜刀]': '//s.weituibao.com/release/crius/emo/056.png',
  '[西瓜]': '//s.weituibao.com/release/crius/emo/057.png',
  '[啤酒]': '//s.weituibao.com/release/crius/emo/058.png',
  '[篮球]': '//s.weituibao.com/release/crius/emo/059.png',
  '[乒乓]': '//s.weituibao.com/release/crius/emo/060.png',
  '[咖啡]': '//s.weituibao.com/release/crius/emo/061.png',
  '[饭]': '//s.weituibao.com/release/crius/emo/062.png',
  '[猪头]': '//s.weituibao.com/release/crius/emo/063.png',
  '[玫瑰]': '//s.weituibao.com/release/crius/emo/064.png',
  '[凋谢]': '//s.weituibao.com/release/crius/emo/065.png',
  '[嘴唇]': '//s.weituibao.com/release/crius/emo/066.png',
  '[爱心]': '//s.weituibao.com/release/crius/emo/067.png',
  '[心碎]': '//s.weituibao.com/release/crius/emo/068.png',
  '[蛋糕]': '//s.weituibao.com/release/crius/emo/069.png',
  '[闪电]': '//s.weituibao.com/release/crius/emo/070.png',
  '[炸弹]': '//s.weituibao.com/release/crius/emo/071.png',
  '[刀]': '//s.weituibao.com/release/crius/emo/072.png',
  '[足球]': '//s.weituibao.com/release/crius/emo/073.png',
  '[瓢虫]': '//s.weituibao.com/release/crius/emo/074.png',
  '[便便]': '//s.weituibao.com/release/crius/emo/075.png',
  '[月亮]': '//s.weituibao.com/release/crius/emo/076.png',
  '[太阳]': '//s.weituibao.com/release/crius/emo/077.png',
  '[礼物]': '//s.weituibao.com/release/crius/emo/078.png',
  '[拥抱]': '//s.weituibao.com/release/crius/emo/079.png',
  '[强]': '//s.weituibao.com/release/crius/emo/080.png',
  '[弱]': '//s.weituibao.com/release/crius/emo/081.png',
  '[握手]': '//s.weituibao.com/release/crius/emo/082.png',
  '[胜利]': '//s.weituibao.com/release/crius/emo/083.png',
  '[抱拳]': '//s.weituibao.com/release/crius/emo/084.png',
  '[勾引]': '//s.weituibao.com/release/crius/emo/085.png',
  '[拳头]': '//s.weituibao.com/release/crius/emo/086.png',
  '[差劲]': '//s.weituibao.com/release/crius/emo/087.png',
  '[爱你]': '//s.weituibao.com/release/crius/emo/088.png',
  '[NO]': '//s.weituibao.com/release/crius/emo/089.png',
  '[OK]': '//s.weituibao.com/release/crius/emo/090.png',
  '[爱情]': '//s.weituibao.com/release/crius/emo/091.png',
  '[飞吻]': '//s.weituibao.com/release/crius/emo/092.png',
  '[跳跳]': '//s.weituibao.com/release/crius/emo/093.png',
  '[发抖]': '//s.weituibao.com/release/crius/emo/094.png',
  '[怄火]': '//s.weituibao.com/release/crius/emo/095.png',
  '[转圈]': '//s.weituibao.com/release/crius/emo/096.png',
  '[磕头]': '//s.weituibao.com/release/crius/emo/097.png',
  '[回头]': '//s.weituibao.com/release/crius/emo/098.png',
  '[跳绳]': '//s.weituibao.com/release/crius/emo/099.png',
  '[投降]': '//s.weituibao.com/release/crius/emo/100.png',
  '[激动]': '//s.weituibao.com/release/crius/emo/101.png',
  '[乱舞]': '//s.weituibao.com/release/crius/emo/102.png',
  '[献吻]': '//s.weituibao.com/release/crius/emo/103.png',
  '[左太极]': '//s.weituibao.com/release/crius/emo/104.png',
  '[右太极]': '//s.weituibao.com/release/crius/emo/105.png',
  '[嘿哈]': '//s.weituibao.com/release/crius/emo/106.png',
  '[捂脸]': '//s.weituibao.com/release/crius/emo/107.png',
  '[奸笑]': '//s.weituibao.com/release/crius/emo/108.png',
  '[机智]': '//s.weituibao.com/release/crius/emo/109.png',
  '[皱眉]': '//s.weituibao.com/release/crius/emo/110.png',
  '[耶]': '//s.weituibao.com/release/crius/emo/111.png',
  '[红包]': '//s.weituibao.com/release/crius/emo/112.png',
  '[蜡烛]': '//s.weituibao.com/release/crius/emo/113.png',
  '\\uE415': '//s.weituibao.com/release/crius/emo/114.png',
  '\\uE056': '//s.weituibao.com/release/crius/emo/115.png',
  '\\uE057': '//s.weituibao.com/release/crius/emo/116.png',
  '\\uE414': '//s.weituibao.com/release/crius/emo/117.png',
  '\\uE405': '//s.weituibao.com/release/crius/emo/118.png',
  '\\uE106': '//s.weituibao.com/release/crius/emo/119.png',
  '\\uE418': '//s.weituibao.com/release/crius/emo/120.png',
  '\\uE417': '//s.weituibao.com/release/crius/emo/121.png',
  '\\uE40D': '//s.weituibao.com/release/crius/emo/122.png',
  '\\uE404': '//s.weituibao.com/release/crius/emo/123.png',
  '\\uE40A': '//s.weituibao.com/release/crius/emo/124.png',
  '\\uE105': '//s.weituibao.com/release/crius/emo/125.png',
  '\\uE409': '//s.weituibao.com/release/crius/emo/126.png',
  '\\uE40E': '//s.weituibao.com/release/crius/emo/127.png',
  '\\uE402': '//s.weituibao.com/release/crius/emo/128.png',
  '\\uE108': '//s.weituibao.com/release/crius/emo/129.png',
  '\\uE403': '//s.weituibao.com/release/crius/emo/130.png',
  '\\uE058': '//s.weituibao.com/release/crius/emo/131.png',
  '\\uE407': '//s.weituibao.com/release/crius/emo/132.png',
  '\\uE401': '//s.weituibao.com/release/crius/emo/133.png',
  '\\uE40F': '//s.weituibao.com/release/crius/emo/134.png',
  '\\uE40B': '//s.weituibao.com/release/crius/emo/135.png',
  '\\uE406': '//s.weituibao.com/release/crius/emo/136.png',
  '\\uE413': '//s.weituibao.com/release/crius/emo/137.png',
  '\\uE411': '//s.weituibao.com/release/crius/emo/138.png',
  '\\uE412': '//s.weituibao.com/release/crius/emo/139.png',
  '\\uE410': '//s.weituibao.com/release/crius/emo/140.png',
  '\\uE107': '//s.weituibao.com/release/crius/emo/141.png',
  '\\uE059': '//s.weituibao.com/release/crius/emo/142.png',
  '\\uE416': '//s.weituibao.com/release/crius/emo/143.png',
  '\\uE408': '//s.weituibao.com/release/crius/emo/144.png',
  '\\uE40C': '//s.weituibao.com/release/crius/emo/145.png',
  '\\uE11A': '//s.weituibao.com/release/crius/emo/146.png',
  '\\uE10C': '//s.weituibao.com/release/crius/emo/147.png',
  '\\uE022': '//s.weituibao.com/release/crius/emo/148.png',
  '\\uE023': '//s.weituibao.com/release/crius/emo/149.png',
  '\\uE329': '//s.weituibao.com/release/crius/emo/150.png',
  '\\uE32E': '//s.weituibao.com/release/crius/emo/151.png',
  '\\uE335': '//s.weituibao.com/release/crius/emo/152.png',
  '\\uE337': '//s.weituibao.com/release/crius/emo/153.png',
  '\\uE336': '//s.weituibao.com/release/crius/emo/154.png',
  '\\uE13C': '//s.weituibao.com/release/crius/emo/155.png',
  '\\uE331': '//s.weituibao.com/release/crius/emo/156.png',
  '\\uE03E': '//s.weituibao.com/release/crius/emo/157.png',
  '\\uE11D': '//s.weituibao.com/release/crius/emo/158.png',
  '\\uE05A': '//s.weituibao.com/release/crius/emo/159.png',
  '\\uE00E': '//s.weituibao.com/release/crius/emo/160.png',
  '\\uE421': '//s.weituibao.com/release/crius/emo/161.png',
  '\\uE00D': '//s.weituibao.com/release/crius/emo/162.png',
  '\\uE011': '//s.weituibao.com/release/crius/emo/163.png',
  '\\uE22E': '//s.weituibao.com/release/crius/emo/164.png',
  '\\uE22F': '//s.weituibao.com/release/crius/emo/165.png',
  '\\uE231': '//s.weituibao.com/release/crius/emo/166.png',
  '\\uE230': '//s.weituibao.com/release/crius/emo/167.png',
  '\\uE00F': '//s.weituibao.com/release/crius/emo/168.png',
  '\\uE14C': '//s.weituibao.com/release/crius/emo/169.png',
  '\\uE111': '//s.weituibao.com/release/crius/emo/170.png',
  '\\uE425': '//s.weituibao.com/release/crius/emo/171.png',
  '\\uE001': '//s.weituibao.com/release/crius/emo/172.png',
  '\\uE002': '//s.weituibao.com/release/crius/emo/173.png',
  '\\uE005': '//s.weituibao.com/release/crius/emo/174.png',
  '\\uE004': '//s.weituibao.com/release/crius/emo/175.png',
  '\\uE04E': '//s.weituibao.com/release/crius/emo/176.png',
  '\\uE11C': '//s.weituibao.com/release/crius/emo/177.png',
  '\\uE003': '//s.weituibao.com/release/crius/emo/178.png',
  '\\uE04A': '//s.weituibao.com/release/crius/emo/179.png',
  '\\uE04B': '//s.weituibao.com/release/crius/emo/180.png',
  '\\uE049': '//s.weituibao.com/release/crius/emo/181.png',
  '\\uE048': '//s.weituibao.com/release/crius/emo/182.png',
  '\\uE04C': '//s.weituibao.com/release/crius/emo/183.png',
  '\\uE13D': '//s.weituibao.com/release/crius/emo/184.png',
  '\\uE43E': '//s.weituibao.com/release/crius/emo/185.png',
  '\\uE04F': '//s.weituibao.com/release/crius/emo/186.png',
  '\\uE052': '//s.weituibao.com/release/crius/emo/187.png',
  '\\uE053': '//s.weituibao.com/release/crius/emo/188.png',
  '\\uE524': '//s.weituibao.com/release/crius/emo/189.png',
  '\\uE52C': '//s.weituibao.com/release/crius/emo/190.png',
  '\\uE52A': '//s.weituibao.com/release/crius/emo/191.png',
  '\\uE531': '//s.weituibao.com/release/crius/emo/192.png',
  '\\uE050': '//s.weituibao.com/release/crius/emo/193.png',
  '\\uE527': '//s.weituibao.com/release/crius/emo/194.png',
  '\\uE051': '//s.weituibao.com/release/crius/emo/195.png',
  '\\uE10B': '//s.weituibao.com/release/crius/emo/196.png',
  '\\uE52B': '//s.weituibao.com/release/crius/emo/197.png',
  '\\uE52F': '//s.weituibao.com/release/crius/emo/198.png',
  '\\uE109': '//s.weituibao.com/release/crius/emo/199.png',
  '\\uE01A': '//s.weituibao.com/release/crius/emo/200.png',
  '\\uE52D': '//s.weituibao.com/release/crius/emo/201.png',
  '\\uE521': '//s.weituibao.com/release/crius/emo/202.png',
  '\\uE52E': '//s.weituibao.com/release/crius/emo/203.png',
  '\\uE055': '//s.weituibao.com/release/crius/emo/204.png',
  '\\uE525': '//s.weituibao.com/release/crius/emo/205.png',
  '\\uE10A': '//s.weituibao.com/release/crius/emo/206.png',
  '\\uE522': '//s.weituibao.com/release/crius/emo/207.png',
  '\\uE054': '//s.weituibao.com/release/crius/emo/208.png',
  '\\uE520': '//s.weituibao.com/release/crius/emo/209.png',
  '\\uE032': '//s.weituibao.com/release/crius/emo/210.png',
  '\\uE303': '//s.weituibao.com/release/crius/emo/211.png',
  '\\uE307': '//s.weituibao.com/release/crius/emo/212.png',
  '\\uE308': '//s.weituibao.com/release/crius/emo/213.png',
  '\\uE437': '//s.weituibao.com/release/crius/emo/214.png',
  '\\uE445': '//s.weituibao.com/release/crius/emo/215.png',
  '\\uE11B': '//s.weituibao.com/release/crius/emo/216.png',
  '\\uE448': '//s.weituibao.com/release/crius/emo/217.png',
  '\\uE033': '//s.weituibao.com/release/crius/emo/218.png',
  '\\uE112': '//s.weituibao.com/release/crius/emo/219.png',
  '\\uE325': '//s.weituibao.com/release/crius/emo/220.png',
  '\\uE312': '//s.weituibao.com/release/crius/emo/221.png',
  '\\uE310': '//s.weituibao.com/release/crius/emo/222.png',
  '\\uE126': '//s.weituibao.com/release/crius/emo/223.png',
  '\\uE008': '//s.weituibao.com/release/crius/emo/224.png',
  '\\uE03D': '//s.weituibao.com/release/crius/emo/225.png',
  '\\uE00C': '//s.weituibao.com/release/crius/emo/226.png',
  '\\uE12A': '//s.weituibao.com/release/crius/emo/227.png',
  '\\uE009': '//s.weituibao.com/release/crius/emo/228.png',
  '\\uE145': '//s.weituibao.com/release/crius/emo/229.png',
  '\\uE144': '//s.weituibao.com/release/crius/emo/230.png',
  '\\uE03F': '//s.weituibao.com/release/crius/emo/231.png',
  '\\uE116': '//s.weituibao.com/release/crius/emo/232.png',
  '\\uE10F': '//s.weituibao.com/release/crius/emo/233.png',
  '\\uE101': '//s.weituibao.com/release/crius/emo/234.png',
  '\\uE13F': '//s.weituibao.com/release/crius/emo/235.png',
  '\\uE12F': '//s.weituibao.com/release/crius/emo/236.png',
  '\\uE311': '//s.weituibao.com/release/crius/emo/237.png',
  '\\uE113': '//s.weituibao.com/release/crius/emo/238.png',
  '\\uE30F': '//s.weituibao.com/release/crius/emo/239.png',
  '\\uE42B': '//s.weituibao.com/release/crius/emo/240.png',
  '\\uE42A': '//s.weituibao.com/release/crius/emo/241.png',
  '\\uE018': '//s.weituibao.com/release/crius/emo/242.png',
  '\\uE016': '//s.weituibao.com/release/crius/emo/243.png',
  '\\uE014': '//s.weituibao.com/release/crius/emo/244.png',
  '\\uE131': '//s.weituibao.com/release/crius/emo/245.png',
  '\\uE12B': '//s.weituibao.com/release/crius/emo/246.png',
  '\\uE03C': '//s.weituibao.com/release/crius/emo/247.png',
  '\\uE041': '//s.weituibao.com/release/crius/emo/248.png',
  '\\uE322': '//s.weituibao.com/release/crius/emo/249.png',
  '\\uE10E': '//s.weituibao.com/release/crius/emo/250.png',
  '\\uE43C': '//s.weituibao.com/release/crius/emo/251.png',
  '\\uE323': '//s.weituibao.com/release/crius/emo/252.png',
  '\\uE31C': '//s.weituibao.com/release/crius/emo/253.png',
  '\\uE034': '//s.weituibao.com/release/crius/emo/254.png',
  '\\uE035': '//s.weituibao.com/release/crius/emo/255.png',
  '\\uE045': '//s.weituibao.com/release/crius/emo/256.png',
  '\\uE047': '//s.weituibao.com/release/crius/emo/257.png',
  '\\uE30C': '//s.weituibao.com/release/crius/emo/258.png',
  '\\uE044': '//s.weituibao.com/release/crius/emo/259.png',
  '\\uE120': '//s.weituibao.com/release/crius/emo/260.png',
  '\\uE33B': '//s.weituibao.com/release/crius/emo/261.png',
  '\\uE33F': '//s.weituibao.com/release/crius/emo/262.png',
  '\\uE344': '//s.weituibao.com/release/crius/emo/263.png',
  '\\uE340': '//s.weituibao.com/release/crius/emo/264.png',
  '\\uE147': '//s.weituibao.com/release/crius/emo/265.png',
  '\\uE33A': '//s.weituibao.com/release/crius/emo/266.png',
  '\\uE34B': '//s.weituibao.com/release/crius/emo/267.png',
  '\\uE345': '//s.weituibao.com/release/crius/emo/268.png',
  '\\uE01D': '//s.weituibao.com/release/crius/emo/269.png',
  '\\uE10D': '//s.weituibao.com/release/crius/emo/270.png',
  '\\uE136': '//s.weituibao.com/release/crius/emo/271.png',
  '\\uE435': '//s.weituibao.com/release/crius/emo/272.png',
  '\\uE252': '//s.weituibao.com/release/crius/emo/273.png',
  '\\uE132': '//s.weituibao.com/release/crius/emo/274.png',
  '\\uE138': '//s.weituibao.com/release/crius/emo/275.png',
  '\\uE139': '//s.weituibao.com/release/crius/emo/276.png',
  '\\uE332': '//s.weituibao.com/release/crius/emo/277.png',
  '\\uE333': '//s.weituibao.com/release/crius/emo/278.png',
  '\\uE24E': '//s.weituibao.com/release/crius/emo/279.png',
  '\\uE24F': '//s.weituibao.com/release/crius/emo/280.png',
  '\\uE537': '//s.weituibao.com/release/crius/emo/281.png'
}

export function encodeUnicode (str) {
  var res = []
  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4).toUpperCase()
  }
  return '\\u' + res.join('\\u')
}

export function decodeUnicode (str) {
  str = str.replace(/\\/g, '%')
  return unescape(str)
}

function emoImg(src) {
  return `<img src=${src} style="width:24px;height:24px"/>`
}

export function replaceEmo(str) {
  let s = str
  const l = s.split('').map(item => {
    const u = encodeUnicode(item)
    if (emos[u]) {
      return emoImg(emos[u])
    }
    return item
  })
  s = l.join('')
  const _emos = s.match(/\[.*?\]/g)
  if (_emos) {
    _emos.forEach(item => {
      if (emos[item]) {
        s = s.replace(item, emoImg(emos[item]))
      }
    })
  }
  return s
}

export function decodeEmo(s) {
  const _emos = s.match(/\\u.{4}/g)
  if (_emos) {
    _emos.forEach(item => {
      if (emos[item]) {
        s = s.replace(item, decodeUnicode(item))
      }
    })
  }
  return s
}

export default emos

export class EmoCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    const list = []
    Object.entries(emos).forEach((element, i) => {
      if (i == 0 || i % 50 ==0 ) {
        list.push([])
      }
      list[list.length - 1].push(element)
    })
    this.state.list = list
  }
  scroll = (e) => {
    clearTimeout(this.scrollTime)
    const detail = e.deltaY || e.detail || 0
    this.scrollTime = setTimeout(() => {
      if (this.refs.carousel) {
        if (detail < 0) {
          this.refs.carousel.prev()
        } else {
          this.refs.carousel.next()
        }
      }
    }, 30)
  }
  render () {
    const { list } = this.state
    return (<div className={styles.emo}>
      <div onWheel={this.scroll}>
        <Carousel ref='carousel'>
          {list.map((item, i) => <div key={i}>
            {item.map(subItem => <span className={styles.emoImg} onClick={() => this.props.onSelect(subItem)} key={subItem[0]}>
              <img src={subItem[1]} title={subItem[0]} />
            </span>)}
          </div>)}
        </Carousel>
      </div>
    </div>)
  }
}

EmoCarousel.propTypes = {
  onSelect: PropTypes.func.isRequired
}
