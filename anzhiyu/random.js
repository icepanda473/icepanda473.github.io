var posts=["2025/04/05/资源整理/","2025/04/05/idm下载安装破解教程/","2025/04/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };