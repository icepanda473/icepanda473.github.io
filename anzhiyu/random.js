var posts=["2025/04/05/idm下载安装破解教程/","2025/05/17/MCP配置/","2025/02/05/一些地理的东西/","2025/04/04/关于博客/","2025/05/18/极域机房管理助手破解教程/","2025/04/05/资源整理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };