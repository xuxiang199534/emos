import React, { Component, useState } from 'react'
import { Popover, Icon, Upload, message, Tooltip } from 'antd'
import emos, { EmoCarousel } from 'emos'
import 'emos/dist/index.css'

export default () => {
  const list = []
  Object.entries(emos).forEach((element, i) => {
    if (i == 0 || i % 50 ==0 ) {
      list.push([])
    }
    list[list.length - 1].push(element)
  })
  return (<div>
    <div style={{ margin: 20, height: '200px', width: '400px', overflow: 'auto' }}>
      {list.map((item, i) => <div key={i}>
        {item.map((subItem, j) => <span style={{ margin: 10 }} key={`${i}-${j}`}>
          <img  src={subItem[1]} title={subItem[0]}/>
        </span>)}
      </div>)}
    </div>
    <Popover
      content={<EmoCarousel onSelect={e => console.log(e)} />}
      trigger="click"
    >
      <Tooltip title="表情">
        <span style={{ padding: '10px', marginLeft: 200 }}>选择表情</span>
      </Tooltip>
    </Popover>
  </div>)
}
