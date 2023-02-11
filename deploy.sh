npm run build 
echo 打包结束
scp -r /Users/jiale/development/front/note/docs/.vuepress/dist/* root@114.116.110.47:/root/blog
echo 上传结束

## ./configure --prefix=/usr/local/nginx  --with-http_stub_status_module  --with-http_ssl_module  --with-http_v2_module --prefix=/root/nginx
