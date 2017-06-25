import Mock from 'mockjs';
Mock.mock(
  'http://products', [{
    id:1
   /* "userName" : '@name',     //模拟名称
    "age|1-100": 100,          //模拟年龄(1-100)
    "color"    : "@color",    //模拟色值
    "date"     : "@date('yyyy-MM-dd')",  //模拟时间
    "url"      : "@url()",     //模拟url
    "content"  : "@cparagraph()" //模拟文本*/
  },
    {
      id:2
      /*"userName" : '@name',     //模拟名称
      "age|1-100": 100,          //模拟年龄(1-100)
      "color"    : "@color",    //模拟色值
      "date"     : "@date('yyyy-MM-dd')",  //模拟时间
      "url"      : "@url()",     //模拟url
      "content"  : "@cparagraph()" //模拟文本*/
    },
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},{id:9}
    ]
);

