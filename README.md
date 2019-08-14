# emos
微信聊天表情包

## Install

```bash
npm install --save http://npm.wxb.com/emos/-/emos-1.0.2.tgz
```

## Demo
[demo](http://git.wxb.com/pages/shipnew/emos/public/index.html)

## Usage

```jsx
import 'emos/dist/index.css'
import emos, { EmoCarousel, encodeUnicode, decodeUnicode, replaceEmo, decodeEmo } from 'emos'

<Popover
    content={<EmoCarousel onSelect={e => console.log(e)} />}
    trigger="click"
>
    <Tooltip title="表情">
        <span style={{ padding: '10px', marginLeft: 200 }}>选择表情</span>
    </Tooltip>
</Popover>

```


## Api
| 名称 | 类型 | 描述
| :-----|:-----|:----
| emos | Map | 表情数据
| encodeUnicode | Function | 
| decodeUnicode | Function | 
| replaceEmo | Function | 字符中的表情符号替换成img标签显示
| decodeEmo | Function | 
| EmoCarousel | Component | 滚动表情选择

## License

MIT © [](https://github.com/)
