import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as t,c as r,a as e,d as n,e as s,b as l}from"./app-xpxJ6GiS.js";const c={},o=e("h2",{id:"_0-安装docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0-安装docker","aria-hidden":"true"},"#"),n(" 0.安装Docker")],-1),v={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="_0-1-卸载旧版" tabindex="-1"><a class="header-anchor" href="#_0-1-卸载旧版" aria-hidden="true">#</a> 0.1.卸载旧版</h3><p>首先如果系统中已经存在旧的Docker，则先卸载：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>yum remove docker \\
    docker-client \\
    docker-client-latest \\
    docker-common \\
    docker-latest \\
    docker-latest-logrotate \\
    docker-logrotate \\
    docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-2-配置docker的yum库" tabindex="-1"><a class="header-anchor" href="#_0-2-配置docker的yum库" aria-hidden="true">#</a> 0.2.配置Docker的yum库</h3><p>首先要安装一个yum工具</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，执行命令，配置Docker的yum源：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_0-3-安装docker" tabindex="-1"><a class="header-anchor" href="#_0-3-安装docker" aria-hidden="true">#</a> 0.3.安装Docker</h3><p>最后，执行命令，安装Docker</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_0-4-启动和校验" tabindex="-1"><a class="header-anchor" href="#_0-4-启动和校验" aria-hidden="true">#</a> 0.4.启动和校验</h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-5-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_0-5-配置镜像加速" aria-hidden="true">#</a> 0.5.配置镜像加速</h3><p>这里以阿里云镜像加速为例。</p><h4 id="_0-5-1-注册阿里云账号" tabindex="-1"><a class="header-anchor" href="#_0-5-1-注册阿里云账号" aria-hidden="true">#</a> 0.5.1.注册阿里云账号</h4><p>首先访问阿里云网站:</p><p>https://www.aliyun.com/</p><p>注册一个账号。</p><h4 id="_0-5-2-开通镜像服务" tabindex="-1"><a class="header-anchor" href="#_0-5-2-开通镜像服务" aria-hidden="true">#</a> 0.5.2.开通镜像服务</h4><p>在首页的产品中，找到阿里云的<strong>容器镜像服务</strong>：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/QQ图片20231210130937.png" alt="QQ图片20231210130937" loading="lazy"></p><p>点击后进入控制台：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/asynccode" alt="img" loading="lazy"></p><p>然后进入控制台。</p><h4 id="_0-5-3-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_0-5-3-配置镜像加速" aria-hidden="true">#</a> 0.5.3.配置镜像加速</h4><p>找到<strong>镜像工具</strong>下的<strong>镜像****加速器</strong>：</p><p>页面向下滚动，即可找到配置的文档说明：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210131436995.png" alt="image-20231210131436995" loading="lazy"></p><p>具体命令如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 创建目录
mkdir -p /etc/docker

# 复制内容，注意把其中的镜像加速地址改成你自己的
tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://xxxx.mirror.aliyuncs.com&quot;]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-快速入门" tabindex="-1"><a class="header-anchor" href="#_1-快速入门" aria-hidden="true">#</a> 1.快速入门</h2><h3 id="_1-1-部署mysql" tabindex="-1"><a class="header-anchor" href="#_1-1-部署mysql" aria-hidden="true">#</a> 1.1.部署MySQL</h3><p>首先，我们利用Docker来安装一个MySQL软件，可以对比一下之前传统的安装方式，看看哪个效率更高一些。</p><p>如果是利用传统方式部署MySQL，大概的步骤有：</p><ul><li>搜索并下载MySQL安装包</li><li>上传至Linux环境</li><li>编译和配置环境</li><li>安装</li></ul><p>而使用Docker安装，仅仅需要一步即可，在命令行输入下面的命令：</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>docker run -d \\
  --name mysql \\
  -p 3306:3306 \\
  -e TZ=Asia/Shanghai \\
  -e MYSQL_ROOT_PASSWORD=123 \\
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如图：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210104631712.png" alt="image-20231210104631712" loading="lazy"></p><p>MySQL安装完毕！通过任意客户端工具即可连接到MySQL.</p><p>大家可以发现，当我们执行命令后，Docker做的第一件事情，是去自动搜索并下载了MySQL，然后会自动运行MySQL，我们完全不用插手，是不是非常方便。</p><p>而且，这种安装方式你完全不用考虑运行的操作系统环境，它不仅仅在CentOS系统是这样，在Ubuntu系统、macOS系统、甚至是装了WSL的Windows下，都可以使用这条命令来安装MySQL。</p><p>要知道，<strong>不同操作系统下其安装包、运行环境是都不相同的</strong>！如果是<strong>手动安装，必须手动解决安装包不同、环境不同的、配置不同的问题</strong>！</p><p>而使用Docker，这些完全不用考虑。就是因为Docker会自动搜索并下载MySQL。注意：这里下载的不是安装包，而是<strong>镜像。</strong><u>镜像中不仅包含了MySQL本身，还包含了其运行所需要的环境、配置、系统级函数库</u>。因此它在运行时就有自己独立的环境，就可以跨系统运行，也不需要手动再次配置环境了。这套独立运行的隔离环境我们称为<strong>容器</strong>。</p><p>说明：</p><ul><li>镜像：英文是image</li><li>容器：英文是container</li></ul><blockquote><p>因此，Docker安装软件的过程，就是自动搜索下载镜像，然后创建并运行容器的过程。</p></blockquote><p>Docker会根据命令中的镜像名称自动搜索并下载镜像，那么问题来了，它是去哪里搜索和下载镜像的呢？这些镜像又是谁制作的呢？</p><p>Docker官方提供了一个专门管理、存储镜像的网站，并对外开放了镜像上传、下载的权利。Docker官方提供了一些基础镜像，然后各大软件公司又在基础镜像基础上，制作了自家软件的镜像，全部都存放在这个网站。这个网站就成了Docker镜像交流的社区：</p><p>https://hub.docker.com/</p><p>基本上我们常用的各种软件都能在这个网站上找到，我们甚至可以自己制作镜像上传上去。</p><p>像这种提供存储、管理Docker镜像的服务器，被称为DockerRegistry，可以翻译为镜像仓库。DockerHub网站是官方仓库，阿里云、华为云会提供一些第三方仓库，我们也可以自己搭建私有的镜像仓库。</p><p>官方仓库在国外，下载速度较慢，一般我们都会使用第三方仓库提供的镜像加速功能，提高下载速度。而企业内部的机密项目，往往会采用私有镜像仓库。</p><p>总之，镜像的来源有两种：</p><ul><li>基于官方基础镜像自己制作</li><li>直接去DockerRegistry下载</li></ul><div class="hint-container info"><p class="hint-container-title">**总结一下**</p><p>Docker本身包含一个后台服务，我们可以利用Docker命令告诉Docker服务，帮助我们快速部署指定的应用。Docker服务部署应用时，首先要去搜索并下载应用对应的镜像，然后根据镜像创建并允许容器，应用就部署完成了。</p></div><p>用一幅图标示如下：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210104711929.png" alt="image-20231210104711929" loading="lazy"></p><h3 id="_1-2-命令解读" tabindex="-1"><a class="header-anchor" href="#_1-2-命令解读" aria-hidden="true">#</a> 1.2.命令解读</h3><p>利用Docker快速的安装了MySQL，非常的方便，不过我们执行的命令到底是什么意思呢？</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>docker run -d \\
  --name mysql \\
  -p 3306:3306 \\
  -e TZ=Asia/Shanghai \\
  -e MYSQL_ROOT_PASSWORD=123 \\
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解读：</p><ul><li><code>docker run -d</code> ：创建并运行一个容器，<code>-d</code>则是让容器以后台进程运行</li><li><code>--name mysql </code> : 给容器起个名字叫<code>mysql</code>，你可以叫别的</li><li><code>-p 3306:3306</code> : 设置端口映射。 <ul><li><strong>容器是隔离环境</strong>，外界不可访问。但是可以将<strong>宿主机端口映射容器内到端口</strong>，当访问宿主机指定端口时，就是在访问容器内的端口了。</li><li>容器内端口往往是由容器内的进程决定，例如MySQL进程默认端口是3306，因此容器内端口一定是3306；而宿主机端口则可以任意指定，一般与容器内保持一致。</li><li>格式： <code>-p 宿主机端口:容器内端口</code>，示例中就是将宿主机的3306映射到容器内的3306端口</li></ul></li><li><code>-e TZ=Asia/Shanghai</code> : 配置容器内进程运行时的一些参数 <ul><li>格式：<code>-e KEY=VALUE</code>，KEY和VALUE都由容器内进程决定</li><li>案例中，<code>TZ=Asia/Shanghai</code>是设置时区；<code>MYSQL_ROOT_PASSWORD=123</code>是设置MySQL默认密码</li></ul></li><li><code>mysql</code> : 设置<strong>镜像</strong>名称，Docker会根据这个名字搜索并下载镜像 <ul><li>格式：<code>REPOSITORY:TAG</code>，例如<code>mysql:8.0</code>，其中<code>REPOSITORY</code>可以理解为镜像名，<code>TAG</code>是版本号</li><li>在未指定<code>TAG</code>的情况下，默认是最新版本，也就是<code>mysql:latest</code></li></ul></li></ul></blockquote><p>镜像的名称不是随意的，而是要到DockerRegistry中寻找，镜像运行时的配置也不是随意的，要参考镜像的帮助文档，这些在DockerHub网站或者软件的官方网站中都能找到。</p><p>如果我们要安装其它软件，也可以到DockerRegistry中寻找对应的镜像名称和版本，阅读相关配置即可。</p><h2 id="_2-docker基础" tabindex="-1"><a class="header-anchor" href="#_2-docker基础" aria-hidden="true">#</a> 2.Docker基础</h2><p>接下来，我们一起来学习Docker使用的一些基础知识，为将来部署项目打下基础。具体用法可以参考Docker官方文档：</p><p>https://docs.docker.com/</p><h3 id="_2-1-常见命令" tabindex="-1"><a class="header-anchor" href="#_2-1-常见命令" aria-hidden="true">#</a> 2.1.常见命令</h3><p>首先我们来学习Docker中的常见命令，可以参考官方文档：</p><h4 id="_2-1-1-命令介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-1-命令介绍" aria-hidden="true">#</a> 2.1.1.命令介绍</h4><p>其中，比较常见的命令有：</p>`,72),u=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("strong",null,"命令")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"说明")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"文档地址")])])],-1),b=e("td",{style:{"text-align":"left"}},"docker pull",-1),h=e("td",{style:{"text-align":"left"}},"拉取镜像",-1),p={style:{"text-align":"left"}},g={href:"https://docs.docker.com/engine/reference/commandline/pull/",target:"_blank",rel:"noopener noreferrer"},_=e("td",{style:{"text-align":"left"}},"docker push",-1),k=e("td",{style:{"text-align":"left"}},"推送镜像到DockerRegistry",-1),f={style:{"text-align":"left"}},y={href:"https://docs.docker.com/engine/reference/commandline/push/",target:"_blank",rel:"noopener noreferrer"},x=e("td",{style:{"text-align":"left"}},"docker images",-1),q=e("td",{style:{"text-align":"left"}},"查看本地镜像",-1),S={style:{"text-align":"left"}},D={href:"https://docs.docker.com/engine/reference/commandline/images/",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"left"}},"docker rmi",-1),N=e("td",{style:{"text-align":"left"}},"删除本地镜像",-1),w={style:{"text-align":"left"}},P={href:"https://docs.docker.com/engine/reference/commandline/rmi/",target:"_blank",rel:"noopener noreferrer"},O=e("td",{style:{"text-align":"left"}},"docker run",-1),L=e("td",{style:{"text-align":"left"}},"创建并运行容器（不能重复创建）",-1),M={style:{"text-align":"left"}},E={href:"https://docs.docker.com/engine/reference/commandline/run/",target:"_blank",rel:"noopener noreferrer"},R=e("td",{style:{"text-align":"left"}},"docker stop",-1),B=e("td",{style:{"text-align":"left"}},"停止指定容器",-1),T={style:{"text-align":"left"}},I={href:"https://docs.docker.com/engine/reference/commandline/stop/",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"left"}},"docker start",-1),Q=e("td",{style:{"text-align":"left"}},"启动指定容器",-1),V={style:{"text-align":"left"}},z={href:"https://docs.docker.com/engine/reference/commandline/start/",target:"_blank",rel:"noopener noreferrer"},J=e("td",{style:{"text-align":"left"}},"docker restart",-1),U=e("td",{style:{"text-align":"left"}},"重新启动容器",-1),Y={style:{"text-align":"left"}},C={href:"https://docs.docker.com/engine/reference/commandline/restart/",target:"_blank",rel:"noopener noreferrer"},Z=e("td",{style:{"text-align":"left"}},"docker rm",-1),K=e("td",{style:{"text-align":"left"}},"删除指定容器",-1),$={style:{"text-align":"left"}},G={href:"https://docs.docker.com/engine/reference/commandline/rm/",target:"_blank",rel:"noopener noreferrer"},H=e("td",{style:{"text-align":"left"}},"docker ps",-1),F=e("td",{style:{"text-align":"left"}},"查看容器",-1),W={style:{"text-align":"left"}},X={href:"https://docs.docker.com/engine/reference/commandline/ps/",target:"_blank",rel:"noopener noreferrer"},ee=e("td",{style:{"text-align":"left"}},"docker logs",-1),ne=e("td",{style:{"text-align":"left"}},"查看容器运行日志",-1),ie={style:{"text-align":"left"}},se={href:"https://docs.docker.com/engine/reference/commandline/logs/",target:"_blank",rel:"noopener noreferrer"},le=e("td",{style:{"text-align":"left"}},"docker exec",-1),de=e("td",{style:{"text-align":"left"}},"进入容器",-1),ae={style:{"text-align":"left"}},te={href:"https://docs.docker.com/engine/reference/commandline/exec/",target:"_blank",rel:"noopener noreferrer"},re=e("td",{style:{"text-align":"left"}},"docker save",-1),ce=e("td",{style:{"text-align":"left"}},"保存镜像到本地压缩文件",-1),oe={style:{"text-align":"left"}},ve={href:"https://docs.docker.com/engine/reference/commandline/save/",target:"_blank",rel:"noopener noreferrer"},me=e("td",{style:{"text-align":"left"}},"docker load",-1),ue=e("td",{style:{"text-align":"left"}},"加载本地压缩文件到镜像",-1),be={style:{"text-align":"left"}},he={href:"https://docs.docker.com/engine/reference/commandline/load/",target:"_blank",rel:"noopener noreferrer"},pe=e("td",{style:{"text-align":"left"}},"docker inspect",-1),ge=e("td",{style:{"text-align":"left"}},"查看容器详细信息",-1),_e={style:{"text-align":"left"}},ke={href:"https://docs.docker.com/engine/reference/commandline/inspect/",target:"_blank",rel:"noopener noreferrer"},fe=l(`<p>用一副图来表示这些命令的关系：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181348370.png" alt="image-20231210181348370" loading="lazy"></p><p>补充：</p><p>默认情况下，每次重启虚拟机我们都需要手动启动Docker和Docker中的容器。通过命令可以实现开机自启：</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># Docker开机自启
systemctl enable docker

# Docker容器开机自启
docker update --restart=always [容器名/容器id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-演示" tabindex="-1"><a class="header-anchor" href="#_2-1-2-演示" aria-hidden="true">#</a> 2.1.2.演示</h4><p>教学环节说明：我们以Nginx为例给大家演示上述命令。</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 第1步，去DockerHub查看nginx镜像仓库及相关信息

# 第2步，拉取Nginx镜像
docker pull nginx

# 第3步，查看镜像
docker images
# 结果如下：
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
nginx        latest    605c77e624dd   16 months ago   141MB
mysql        latest    3218b38490ce   17 months ago   516MB

# 第4步，创建并允许Nginx容器
docker run -d --name nginx -p 80:80 nginx

# 第5步，查看运行中容器
docker ps
# 也可以加格式化方式访问，格式会更加清爽
docker ps --format &quot;table {{.ID}}\\t{{.Image}}\\t{{.Ports}}\\t{{.Status}}\\t{{.Names}}&quot;

# 第6步，访问网页，地址：http://虚拟机地址

# 第7步，停止容器
docker stop nginx

# 第8步，查看所有容器
docker ps -a --format &quot;table {{.ID}}\\t{{.Image}}\\t{{.Ports}}\\t{{.Status}}\\t{{.Names}}&quot;

# 第9步，再次启动nginx容器
docker start nginx

# 第10步，再次查看容器
docker ps --format &quot;table {{.ID}}\\t{{.Image}}\\t{{.Ports}}\\t{{.Status}}\\t{{.Names}}&quot;

# 第11步，查看容器详细信息
docker inspect nginx

# 第12步，进入容器,查看容器内目录
docker exec -it nginx bash
# 或者，可以进入MySQL
docker exec -it mysql mysql -uroot -p

# 第13步，删除容器
docker rm nginx
# 发现无法删除，因为容器运行中，强制删除容器
docker rm -f nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-命令别名" tabindex="-1"><a class="header-anchor" href="#_2-1-3-命令别名" aria-hidden="true">#</a> 2.1.3.命令别名</h4><p>给常用Docker命令起别名，方便我们访问：</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 修改/root/.bashrc文件
vi /root/.bashrc
内容如下：
# .bashrc

# User specific aliases and functions

alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;
alias dps=&#39;docker ps --format &quot;table {{.ID}}\\t{{.Image}}\\t{{.Ports}}\\t{{.Status}}\\t{{.Names}}&quot;&#39;
alias dis=&#39;docker images&#39;

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，执行命令使别名生效</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>source /root/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，试试看新的命令吧。</p><h3 id="_2-2-数据卷" tabindex="-1"><a class="header-anchor" href="#_2-2-数据卷" aria-hidden="true">#</a> 2.2.数据卷</h3><p>容器是隔离环境，<strong>容器内程序的文件、配置、运行时产生的容器都在容器内部</strong>，我们要读写容器内的文件非常不方便。大家思考几个问题：</p><ul><li>如果要升级MySQL版本，需要销毁旧容器，那么数据岂不是跟着被销毁了？</li><li>MySQL、Nginx容器运行后，如果我要修改其中的某些配置该怎么办？</li><li>我想要让Nginx代理我的静态资源怎么办？</li></ul><p>因此，容器提供程序的运行环境，但是<strong>程序运行产生的数据、程序运行依赖的配置都应该与容器解耦</strong>。</p><h4 id="_2-2-1-什么是数据卷" tabindex="-1"><a class="header-anchor" href="#_2-2-1-什么是数据卷" aria-hidden="true">#</a> 2.2.1.什么是数据卷</h4><p><strong>数据卷（volume）<strong>是一个虚拟目录，是</strong>容器内目录</strong>与<strong>宿主机目录</strong>之间映射的桥梁。</p><p>以Nginx为例，我们知道Nginx中有两个关键的目录：</p><ul><li><code>html</code>：放置一些静态资源</li><li><code>conf</code>：放置配置文件</li></ul><p>如果我们要让Nginx代理我们的静态资源，最好是放到<code>html</code>目录；如果我们要修改Nginx的配置，最好是找到<code>conf</code>下的<code>nginx.conf</code>文件。</p><p>但遗憾的是，容器运行的Nginx所有的文件都在容器内部。我们在官网查得nginx容器内部的html文件夹在/usr/share/nginx/html，于是我们依次执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx <span class="token function">bash</span>
<span class="token builtin class-name">cd</span> /usr/share/nginx/html
<span class="token function">vi</span> index.html 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：发现vi指令不存在！原因是容器内部只会有一些基本的依赖，能让容器正常运行即可，不会添加其余的依赖，所以我们无法直接在容器内部修改文件。</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210193457495.png" alt="image-20231210193457495" loading="lazy"></p><p>所以我们必须利用数据卷将两个目录与宿主机目录关联，方便我们操作。如图：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181501745.png" alt="image-20231210181501745" loading="lazy"></p><p>在上图中：</p><ul><li>我们创建了两个数据卷：<code>conf</code>、<code>html</code></li><li>Nginx容器内部的<code>conf</code>目录和<code>html</code>目录分别与两个数据卷关联。</li><li>而数据卷conf和html分别指向了宿主机的<code>/var/lib/docker/volumes/conf/_data</code>目录和<code>/var/lib/docker/volumes/html/_data</code>目录</li></ul><p>这样以来，容器内的<code>conf</code>和<code>html</code>目录就 与宿主机的<code>conf</code>和<code>html</code>目录关联起来，我们称为<strong>挂载</strong>。此时，我们操作宿主机的<code>/var/lib/docker/volumes/html/_data</code>就是在操作容器内的<code>/usr/share/nginx/html/_data</code>目录。只要我们将静态资源放入宿主机对应目录，就可以被Nginx代理了。</p><p><strong>小提示</strong>：</p><p><code>/var/lib/docker/volumes</code>这个目录就是默认的存放所有容器数据卷的目录，其下再根据数据卷名称创建新目录，格式为<code>/数据卷名/_data</code>。</p><p><strong>为什么不让容器目录直接指向<strong><strong>宿主机</strong></strong>目录呢</strong>？</p><ul><li>因为直接指向宿主机目录就与宿主机强耦合了，如果切换了环境，宿主机目录就可能发生改变了。由于容器一旦创建，目录挂载就无法修改，这样容器就无法正常工作了。</li><li>但是容器指向数据卷，一个逻辑名称，而数据卷再指向宿主机目录，就不存在强耦合。如果宿主机目录发生改变，只要改变数据卷与宿主机目录之间的映射关系即可。</li></ul><p>不过，我们通过由于数据卷目录比较深，不好寻找，通常我们也<strong>允许让容器直接与宿主机目录挂载而不使用数据卷</strong>，具体参考2.2.3小节。</p><h4 id="_2-2-2-数据卷命令" tabindex="-1"><a class="header-anchor" href="#_2-2-2-数据卷命令" aria-hidden="true">#</a> 2.2.2.数据卷命令</h4><p>数据卷的相关命令有：</p>`,39),ye=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("strong",null,"命令")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"说明")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"文档地址")])])],-1),xe=e("td",{style:{"text-align":"left"}},"docker volume create",-1),qe=e("td",{style:{"text-align":"left"}},"创建数据卷",-1),Se={style:{"text-align":"left"}},De={href:"https://docs.docker.com/engine/reference/commandline/volume_create/",target:"_blank",rel:"noopener noreferrer"},je=e("td",{style:{"text-align":"left"}},"docker volume ls",-1),Ne=e("td",{style:{"text-align":"left"}},"查看所有数据卷",-1),we={style:{"text-align":"left"}},Pe={href:"https://docs.docker.com/engine/reference/commandline/volume_ls/",target:"_blank",rel:"noopener noreferrer"},Oe=e("td",{style:{"text-align":"left"}},"docker volume rm",-1),Le=e("td",{style:{"text-align":"left"}},"删除指定数据卷",-1),Me={style:{"text-align":"left"}},Ee={href:"https://docs.docker.com/engine/reference/commandline/volume_prune/",target:"_blank",rel:"noopener noreferrer"},Re=e("td",{style:{"text-align":"left"}},"docker volume inspect",-1),Be=e("td",{style:{"text-align":"left"}},"查看某个数据卷的详情",-1),Te={style:{"text-align":"left"}},Ie={href:"https://docs.docker.com/engine/reference/commandline/volume_inspect/",target:"_blank",rel:"noopener noreferrer"},Ae=e("td",{style:{"text-align":"left"}},"docker volume prune",-1),Qe=e("td",{style:{"text-align":"left"}},"清除数据卷",-1),Ve={style:{"text-align":"left"}},ze={href:"https://docs.docker.com/engine/reference/commandline/volume_prune/",target:"_blank",rel:"noopener noreferrer"},Je=l(`<p>注意：容器与数据卷的挂载要在创建容器时配置，对于创建好的容器，是不能设置数据卷的。而且<strong>创建容器的过程中，数据卷会自动创建</strong>。</p><p><strong>演示环节</strong>：演示一下nginx的html目录挂载</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 1.首先创建容器并指定数据卷，注意通过 -v 参数来指定数据卷
docker run -d --name nginx -p 80:80 -v html:/usr/share/nginx/html nginx

# 2.然后查看数据卷
docker volume ls
# 结果
DRIVER    VOLUME NAME
local     29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f
local     html

# 3.查看数据卷详情
docker volume inspect html
# 结果
[
    {
        &quot;CreatedAt&quot;: &quot;2024-05-17T19:57:08+08:00&quot;,
        &quot;Driver&quot;: &quot;local&quot;,
        &quot;Labels&quot;: null,
        &quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/html/_data&quot;,
        &quot;Name&quot;: &quot;html&quot;,
        &quot;Options&quot;: null,
        &quot;Scope&quot;: &quot;local&quot;
    }
]

# 4.查看/var/lib/docker/volumes/html/_data目录
ll /var/lib/docker/volumes/html/_data
# 可以看到与nginx的html目录内容一样，结果如下：
总用量 28
-rw-r--r-- 1 root root 18110 12月 10 15:51 1.jpg
-rw-r--r-- 1 root root   497 12月 28 2021 50x.html
-rw-r--r-- 1 root root   616 12月 10 15:56 index.html

# 5.进入该目录，并随意修改index.html内容
cd /var/lib/docker/volumes/html/_data
vi index.html

# 6.打开页面，查看效果

# 7.进入容器内部，查看/usr/share/nginx/html目录内的文件是否变化
docker exec -it nginx bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>教学<strong>演示环节</strong>：演示一下MySQL的匿名数据卷</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 1.查看MySQL容器详细信息
docker inspect mysql
# 关注其中.Config.Volumes部分和.Mounts部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们关注两部分内容，第一是<code>.Config.Volumes</code>部分：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;Config&quot;: {
    // ... 略
    &quot;Volumes&quot;: {
      &quot;/var/lib/mysql&quot;: {}
    }
    // ... 略
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现这个容器声明了一个本地目录，需要挂载数据卷，但是<strong>数据卷未定义</strong>。这就是匿名卷。</p><p>然后，我们再看结果中的<code>.Mounts</code>部分：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;Mounts&quot;: [
    {
      &quot;Type&quot;: &quot;volume&quot;,
      &quot;Name&quot;: &quot;29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f&quot;,
      &quot;Source&quot;: &quot;/var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data&quot;,
      &quot;Destination&quot;: &quot;/var/lib/mysql&quot;,
      &quot;Driver&quot;: &quot;local&quot;,
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，其中有几个关键属性：</p><ul><li>Name：数据卷名称。由于定义容器未设置容器名，这里的就是匿名卷自动生成的名字，一串hash值。</li><li>Source：宿主机目录</li><li>Destination : 容器内的目录</li></ul><p>上述配置是将容器内的<code>/var/lib/mysql</code>这个目录，与数据卷<code>29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f</code>挂载。于是在宿主机中就有了<code>/var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data</code>这个目录。这就是匿名数据卷对应的目录，其使用方式与普通数据卷没有差别。</p><p>接下来，可以查看该目录下的MySQL的data文件：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>ls -l /var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210194145387.png" alt="image-20231210194145387" loading="lazy"></p><p>注意：每一个不同的镜像，将来创建容器后内部有哪些目录可以挂载，可以参考DockerHub对应的页面</p><h4 id="_2-2-3-挂载本地目录或文件" tabindex="-1"><a class="header-anchor" href="#_2-2-3-挂载本地目录或文件" aria-hidden="true">#</a> 2.2.3.挂载本地目录或文件</h4><p>可以发现，数据卷的目录结构较深，如果我们去操作数据卷目录会不太方便。在很多情况下，我们会直接将容器目录与宿主机指定目录挂载。挂载语法与数据卷类似：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 挂载本地目录
-v 本地目录:容器内目录
# 挂载本地文件
-v 本地文件:容器内文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：本地目录或文件必须以 <code>/</code> 或 <code>./</code>开头，如果直接以名字开头，会被识别为数据卷名而非本地目录名。</p><p>例如：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>-v mysql:/var/lib/mysql # 会被识别为一个数据卷叫mysql，运行时会自动创建这个数据卷
-v ./mysql:/var/lib/mysql # 会被识别为当前目录下的mysql目录，运行时如果不存在会创建目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>教学演示</strong>，删除并重新创建mysql容器，并完成本地目录挂载：</p><ul><li>挂载<code>/root/mysql/data</code>到容器内的<code>/var/lib/mysql</code>目录</li><li>挂载<code>/root/mysql/init</code>到容器内的<code>/docker-entrypoint-initdb.d</code>目录（初始化的SQL脚本目录）</li><li>挂载<code>/root/mysql/conf</code>到容器内的<code>/etc/mysql/conf.d</code>目录（这个是MySQL配置文件目录）</li></ul><p>在课前资料中已经准备好了mysql的<code>init</code>目录和<code>conf</code>目录：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181636012.png" alt="image-20231210181636012" loading="lazy"></p><p>以及对应的初始化SQL脚本和配置文件：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181651196.png" alt="image-20231210181651196" loading="lazy"></p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181701153.png" alt="image-20231210181701153" loading="lazy"></p><p>其中，hm.cnf主要是配置了MySQL的默认编码，改为utf8mb4；而hmall.sql则是后面我们要用到的黑马商城项目的初始化SQL脚本。</p><p>我们直接将整个mysql目录上传至虚拟机的<code>/root</code>目录下：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181738303.png" alt="image-20231210181738303" loading="lazy"></p><p>接下来，我们演示本地目录挂载：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 1.删除原来的MySQL容器
docker rm -f mysql

# 2.进入root目录
cd ~

# 3.创建并运行新mysql容器，挂载本地目录
docker run -d \\
  --name mysql \\
  -p 3306:3306 \\
  -e TZ=Asia/Shanghai \\
  -e MYSQL_ROOT_PASSWORD=123 \\
  -v ./mysql/data:/var/lib/mysql \\
  -v ./mysql/conf:/etc/mysql/conf.d \\
  -v ./mysql/init:/docker-entrypoint-initdb.d \\
  mysql

# 4.查看root目录，可以发现~/mysql/data目录已经自动创建好了
ls -l mysql
# 结果：
总用量 12
drwxr-xr-x 2 root             root 4096 12月 10 16:44 conf
drwxr-xr-x 7 systemd-coredump root 4096 12月 10 19:43 data
drwxr-xr-x 2 root             root 4096 12月 10 16:44 init

# 查看data目录，会发现里面有大量数据库数据，说明数据库完成了初始化
ls -l data

# 5.查看MySQL容器内数据
# 5.1.进入MySQL
docker exec -it mysql mysql -uroot -p123
# 5.2.查看编码表
show variables like &quot;%char%&quot;;
# 5.3.结果，发现编码是utf8mb4没有问题
+--------------------------+--------------------------------+
| Variable_name            | Value                          |
+--------------------------+--------------------------------+
| character_set_client     | utf8mb4                        |
| character_set_connection | utf8mb4                        |
| character_set_database   | utf8mb4                        |
| character_set_filesystem | binary                         |
| character_set_results    | utf8mb4                        |
| character_set_server     | utf8mb4                        |
| character_set_system     | utf8mb3                        |
| character_sets_dir       | /usr/share/mysql-8.0/charsets/ |
+--------------------------+--------------------------------+

# 6.查看数据
# 6.1.查看数据库
show databases;
# 结果，hmall是黑马商城数据库
+--------------------+
| Database           |
+--------------------+
| hmall              |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
# 6.2.切换到hmall数据库
use hmall;
# 6.3.查看表
show tables;
# 结果：
+-----------------+
| Tables_in_hmall |
+-----------------+
| address         |
| cart            |
| item            |
| order           |
| order_detail    |
| order_logistics |
| pay_order       |
| user            |
+-----------------+
# 6.4.查看address表数据
+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+
| id | user_id | province | city   | town     | mobile      | street        | contact   | is_default | notes |
+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+
| 59 |       1 | 北京     | 北京   | 朝阳区    | 13900112222 | 金燕龙办公楼   | 李佳诚    | 0          | NULL  |
| 60 |       1 | 北京     | 北京   | 朝阳区    | 13700221122 | 修正大厦       | 李佳红    | 0          | NULL  |
| 61 |       1 | 上海     | 上海   | 浦东新区  | 13301212233 | 航头镇航头路   | 李佳星    | 1          | NULL  |
| 63 |       1 | 广东     | 佛山   | 永春      | 13301212233 | 永春武馆       | 李晓龙    | 0          | NULL  |
+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-镜像" aria-hidden="true">#</a> 2.3.镜像</h3><p>前面我们一直在使用别人准备好的镜像，那如果我要部署一个Java项目，把它打包为一个镜像该怎么做呢？</p><h4 id="_2-3-1-镜像结构" tabindex="-1"><a class="header-anchor" href="#_2-3-1-镜像结构" aria-hidden="true">#</a> 2.3.1.镜像结构</h4><p>要想自己构建镜像，必须先了解镜像的结构。</p><p>之前我们说过，镜像之所以能让我们快速跨操作系统部署应用而忽略其运行环境、配置，就是因为镜像中包含了程序运行需要的系统函数库、环境、配置、依赖。</p><p>因此，自定义镜像本质就是依次准备好程序运行的基础环境、依赖、应用本身、运行配置等文件，并且打包而成。</p><p>举个例子，我们要从0部署一个Java应用，大概流程是这样：</p><ul><li>准备一个linux服务（CentOS或者Ubuntu均可）</li><li>安装并配置JDK</li><li>上传Jar包</li><li>运行jar包</li></ul><p>那因此，我们打包镜像也是分成这么几步：</p><ul><li>准备Linux运行环境（java项目并不需要完整的操作系统，仅仅是基础运行环境即可）</li><li>安装并配置JDK</li><li>拷贝jar包</li><li>配置启动脚本</li></ul><p>上述步骤中的每一次操作其实都是在生产一些文件（系统运行环境、函数库、配置最终都是磁盘文件），所以<strong>镜像就是一堆文件的集合</strong>。</p><p>但需要注意的是，镜像文件不是随意堆放的，而是按照操作的步骤分层叠加而成，每一层形成的文件都会单独打包并标记一个唯一id，称为<strong>Layer</strong>（<strong>层</strong>）。这样，如果我们构建时用到的某些层其他人已经制作过，就可以直接拷贝使用这些层，而不用重复制作。</p><p>例如，第一步中需要的Linux运行环境，通用性就很强，所以Docker官方就制作了这样的只包含Linux运行环境的镜像。我们在制作java镜像时，就无需重复制作，直接使用Docker官方提供的CentOS或Ubuntu镜像作为基础镜像。然后再搭建其它层即可，这样逐层搭建，最终整个Java项目的镜像结构如图所示：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181832346.png" alt="image-20231210181832346" loading="lazy"></p><h4 id="_2-3-2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-3-2-dockerfile" aria-hidden="true">#</a> 2.3.2.Dockerfile</h4><p>由于制作镜像的过程中，需要逐层处理和打包，比较复杂，所以Docker就提供了自动打包镜像的功能。我们只需要将打包的过程，每一层要做的事情用固定的语法写下来，交给Docker去执行即可。</p><p>而这种记录镜像结构的文件就称为<strong>Dockerfile</strong>，其对应的语法可以参考官方文档：</p><p>https://docs.docker.com/engine/reference/builder/</p><p>其中的语法比较多，比较常用的有：</p><table><thead><tr><th style="text-align:left;"><strong>指令</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>示例</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>FROM</strong></td><td style="text-align:left;">指定基础镜像</td><td style="text-align:left;"><code>FROM centos:6</code></td></tr><tr><td style="text-align:left;"><strong>ENV</strong></td><td style="text-align:left;">设置环境变量，可在后面指令使用</td><td style="text-align:left;"><code>ENV key value</code></td></tr><tr><td style="text-align:left;"><strong>COPY</strong></td><td style="text-align:left;">拷贝本地文件到镜像的指定目录</td><td style="text-align:left;"><code>COPY ./xx.jar /tmp/app.jar</code></td></tr><tr><td style="text-align:left;"><strong>RUN</strong></td><td style="text-align:left;">执行Linux的shell命令，一般是安装过程的命令</td><td style="text-align:left;"><code>RUN yum install gcc</code></td></tr><tr><td style="text-align:left;"><strong>EXPOSE</strong></td><td style="text-align:left;">指定容器运行时监听的端口，是给镜像使用者看的</td><td style="text-align:left;"><code>EXPOSE 8080</code></td></tr><tr><td style="text-align:left;"><strong>ENTRYPOINT</strong></td><td style="text-align:left;">镜像中应用的启动命令，容器运行时调用</td><td style="text-align:left;"><code>ENTRYPOINT java -jar xx.jar</code></td></tr></tbody></table><p>例如，要基于Ubuntu镜像来构建一个Java应用，其Dockerfile内容如下：</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code># 指定基础镜像
FROM ubuntu:16.04
# 配置环境变量，JDK的安装目录、容器内时区
ENV JAVA_DIR=/usr/local
ENV TZ=Asia/Shanghai
# 拷贝jdk和java项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar
# 设定时区
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone
# 安装JDK
RUN cd $JAVA_DIR \\
 &amp;&amp; tar -xf ./jdk8.tar.gz \\
 &amp;&amp; mv ./jdk1.8.0_144 ./java8
# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin
# 指定项目监听的端口
EXPOSE 8080
# 入口，java项目的启动命令
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考一下：以后我们会有很多很多java项目需要打包为镜像，他们都需要Linux系统环境、JDK环境这两层，只有上面的3层不同（因为jar包不同）。如果每次制作java镜像都重复制作前两层镜像，是不是很麻烦。</p><p>所以，就有人提供了基础的系统加JDK环境，我们在此基础上制作java镜像，就可以省去JDK的配置了：</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code># 基础镜像
FROM openjdk:11.0-jre-buster
# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone
# 拷贝jar包
COPY docker-demo.jar /app.jar
# 入口
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是简单多了。</p><h4 id="_2-3-3-构建镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-3-构建镜像" aria-hidden="true">#</a> 2.3.3.构建镜像</h4><p>当Dockerfile文件写好以后，就可以利用命令来构建镜像了。</p><p>注：先把jdk.tar文件load一下，加载到本地镜像中（当然也可以直接从仓库pull，不过我们直接用已经下载并save后的压缩文件就可以了）,效果如下：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210195025379.png" alt="image-20231210195025379" loading="lazy"></p><p>在课前资料中，我们准备好了一个demo项目及对应的Dockerfile：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210181941938.png" alt="image-20231210181941938" loading="lazy"></p><p>首先，我们将课前资料提供的<code>docker-demo.jar</code>包以及<code>Dockerfile</code>拷贝到虚拟机的<code>/root/demo</code>目录：</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210182129032.png" alt="image-20231210182129032" loading="lazy"></p><p>其中Dockfile的内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基础镜像</span>
FROM openjdk:11.0-jre-buster
<span class="token comment"># 设定时区</span>
ENV <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai
RUN <span class="token function">ln</span> <span class="token parameter variable">-snf</span> /usr/share/zoneinfo/<span class="token variable">$TZ</span> /etc/localtime <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$TZ</span> <span class="token operator">&gt;</span> /etc/timezone
<span class="token comment"># 拷贝jar包</span>
COPY docker-demo.jar /app.jar
<span class="token comment"># 入口</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;/app.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，执行命令，构建镜像：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 进入镜像目录
cd /root/demo
# 开始构建
docker build -t docker-demo:1.0 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p><ul><li><code>docker build </code>: 就是构建一个docker镜像</li><li><code>-t docker-demo:1.0</code> ：<code>-t</code>参数是指定镜像的名称（<code>repository</code>和<code>tag</code>）</li><li><code>.</code> : 最后的点是指构建时Dockerfile所在路径，由于我们进入了demo目录，所以指定的是<code>.</code>代表当前目录，也可以直接指定Dockerfile目录： <ul><li><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 直接指定Dockerfile目录
docker build -t docker-demo:1.0 /root/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>结果：在build之后，dockerfile就变成了一个镜像。</p><p><img src="https://yijina.oss-cn-chengdu.aliyuncs.com/img_hyj/image-20231210182208885.png" alt="image-20231210182208885" loading="lazy"></p><p>然后尝试运行该镜像：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 1.创建并运行容器
docker run -d --name dd -p 8080:8080 docker-demo:1.0
# 2.查看容器
dps
# 结果
CONTAINER ID   IMAGE             PORTS                                                  STATUS         NAMES
78a000447b49   docker-demo:1.0   0.0.0.0:8080-&gt;8080/tcp, :::8090-&gt;8090/tcp              Up 2 seconds   dd
f63cfead8502   mysql             0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   Up 2 hours     mysql

# 3.访问
curl localhost:8080/hello/count
# 结果：
&lt;h5&gt;欢迎访问黑马商城, 这是您第1次访问&lt;h5&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-网络" tabindex="-1"><a class="header-anchor" href="#_2-4-网络" aria-hidden="true">#</a> 2.4.网络</h3><p>上节课我们创建了一个Java项目的容器，而Java项目往往需要访问其它各种中间件，例如MySQL、Redis等。现在，我们的容器之间能否互相访问呢？我们来测试一下</p><p>首先，我们查看下MySQL容器的详细信息，重点关注其中的网络IP地址：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 1.用基本命令，寻找Networks.bridge.IPAddress属性
docker inspect mysql
# 也可以使用format过滤结果
docker inspect --format=&#39;{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}&#39; mysql
# 得到IP地址如下：
172.17.0.2

# 2.然后通过命令进入dd容器
docker exec -it dd bash

# 3.在容器内，通过ping命令测试网络
ping 172.17.0.2
# 结果
PING 172.17.0.2 (172.17.0.2) 56(84) bytes of data.
64 bytes from 172.17.0.2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from 172.17.0.2: icmp_seq=2 ttl=64 time=0.059 ms
64 bytes from 172.17.0.2: icmp_seq=3 ttl=64 time=0.058 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现可以互联，没有问题。</p><p>但是，容器的网络IP其实是一个虚拟的IP，其值并不固定与某一个容器绑定，如果我们在开发时写死某个IP，而在部署时很可能MySQL容器的IP会发生变化，连接会失败。</p><p>所以，我们必须借助于docker的网络功能来解决这个问题，官方文档：</p><p>https://docs.docker.com/engine/reference/commandline/network/</p><p>常见命令有：</p>`,88),Ue=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("strong",null,"命令")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"说明")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"文档地址")])])],-1),Ye=e("td",{style:{"text-align":"left"}},"docker network create",-1),Ce=e("td",{style:{"text-align":"left"}},"创建一个网络",-1),Ze={style:{"text-align":"left"}},Ke={href:"https://docs.docker.com/engine/reference/commandline/network_create/",target:"_blank",rel:"noopener noreferrer"},$e=e("td",{style:{"text-align":"left"}},"docker network ls",-1),Ge=e("td",{style:{"text-align":"left"}},"查看所有网络",-1),He={style:{"text-align":"left"}},Fe={href:"https://docs.docker.com/engine/reference/commandline/network_ls/",target:"_blank",rel:"noopener noreferrer"},We=e("td",{style:{"text-align":"left"}},"docker network rm",-1),Xe=e("td",{style:{"text-align":"left"}},"删除指定网络",-1),en={style:{"text-align":"left"}},nn={href:"https://docs.docker.com/engine/reference/commandline/network_rm/",target:"_blank",rel:"noopener noreferrer"},sn=e("td",{style:{"text-align":"left"}},"docker network prune",-1),ln=e("td",{style:{"text-align":"left"}},"清除未使用的网络",-1),dn={style:{"text-align":"left"}},an={href:"https://docs.docker.com/engine/reference/commandline/network_prune/",target:"_blank",rel:"noopener noreferrer"},tn=e("td",{style:{"text-align":"left"}},"docker network connect",-1),rn=e("td",{style:{"text-align":"left"}},"使指定容器连接加入某网络",-1),cn={style:{"text-align":"left"}},on={href:"https://docs.docker.com/engine/reference/commandline/network_connect/",target:"_blank",rel:"noopener noreferrer"},vn=e("td",{style:{"text-align":"left"}},"docker network disconnect",-1),mn=e("td",{style:{"text-align":"left"}},"使指定容器连接离开某网络",-1),un={style:{"text-align":"left"}},bn={href:"https://docs.docker.com/engine/reference/commandline/network_disconnect/",target:"_blank",rel:"noopener noreferrer"},hn=e("td",{style:{"text-align":"left"}},"docker network inspect",-1),pn=e("td",{style:{"text-align":"left"}},"查看网络详细信息",-1),gn={style:{"text-align":"left"}},_n={href:"https://docs.docker.com/engine/reference/commandline/network_inspect/",target:"_blank",rel:"noopener noreferrer"},kn=l(`<p>教学演示：自定义网络</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 1.首先通过命令创建一个网络
docker network create hmall

# 2.然后查看网络
docker network ls
# 结果：
NETWORK ID     NAME      DRIVER    SCOPE
639bc44d0a87   bridge    bridge    local
403f16ec62a2   hmall     bridge    local
0dc0f72a0fbb   host      host      local
cd8d3e8df47b   none      null      local
# 其中，除了hmall以外，其它都是默认的网络

# 3.让dd和mysql都加入该网络，注意，在加入网络时可以通过--alias给容器起别名
# 这样该网络内的其它容器可以用别名互相访问！
# 3.1.mysql容器，指定别名为db，另外每一个容器都有一个别名是容器名
docker network connect hmall mysql --alias db
# 3.2.db容器，也就是我们的java项目
docker network connect hmall dd

# 4.进入dd容器，尝试利用别名访问db
# 4.1.进入容器
docker exec -it dd bash
# 4.2.用db别名访问
ping db
# 结果
PING db (172.18.0.2) 56(84) bytes of data.
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=1 ttl=64 time=0.070 ms
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=2 ttl=64 time=0.056 ms
# 4.3.用容器名访问
ping mysql
# 结果：
PING mysql (172.18.0.2) 56(84) bytes of data.
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=1 ttl=64 time=0.044 ms
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=2 ttl=64 time=0.054 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，现在无需记住IP地址也可以实现容器互联了。</p><p><strong>总结</strong>：</p><ul><li>在自定义网络中，可以给容器起多个别名，默认的别名是容器名本身</li><li>在同一个自定义网络中的容器，可以通过别名互相访问</li></ul>`,5);function fn(yn,xn){const i=a("ExternalLinkIcon");return t(),r("div",null,[o,e("p",null,[n("官方教程："),e("a",v,[n("Install Docker Engine on CentOS | Docker Docs"),s(i)])]),m,e("table",null,[u,e("tbody",null,[e("tr",null,[b,h,e("td",p,[e("a",g,[n("docker pull"),s(i)])])]),e("tr",null,[_,k,e("td",f,[e("a",y,[n("docker push"),s(i)])])]),e("tr",null,[x,q,e("td",S,[e("a",D,[n("docker images"),s(i)])])]),e("tr",null,[j,N,e("td",w,[e("a",P,[n("docker rmi"),s(i)])])]),e("tr",null,[O,L,e("td",M,[e("a",E,[n("docker run"),s(i)])])]),e("tr",null,[R,B,e("td",T,[e("a",I,[n("docker stop"),s(i)])])]),e("tr",null,[A,Q,e("td",V,[e("a",z,[n("docker start"),s(i)])])]),e("tr",null,[J,U,e("td",Y,[e("a",C,[n("docker restart"),s(i)])])]),e("tr",null,[Z,K,e("td",$,[e("a",G,[n("docs.docker.com"),s(i)])])]),e("tr",null,[H,F,e("td",W,[e("a",X,[n("docker ps"),s(i)])])]),e("tr",null,[ee,ne,e("td",ie,[e("a",se,[n("docker logs"),s(i)])])]),e("tr",null,[le,de,e("td",ae,[e("a",te,[n("docker exec"),s(i)])])]),e("tr",null,[re,ce,e("td",oe,[e("a",ve,[n("docker save"),s(i)])])]),e("tr",null,[me,ue,e("td",be,[e("a",he,[n("docker load"),s(i)])])]),e("tr",null,[pe,ge,e("td",_e,[e("a",ke,[n("docker inspect"),s(i)])])])])]),fe,e("table",null,[ye,e("tbody",null,[e("tr",null,[xe,qe,e("td",Se,[e("a",De,[n("docker volume create"),s(i)])])]),e("tr",null,[je,Ne,e("td",we,[e("a",Pe,[n("docs.docker.com"),s(i)])])]),e("tr",null,[Oe,Le,e("td",Me,[e("a",Ee,[n("docs.docker.com"),s(i)])])]),e("tr",null,[Re,Be,e("td",Te,[e("a",Ie,[n("docs.docker.com"),s(i)])])]),e("tr",null,[Ae,Qe,e("td",Ve,[e("a",ze,[n("docker volume prune"),s(i)])])])])]),Je,e("table",null,[Ue,e("tbody",null,[e("tr",null,[Ye,Ce,e("td",Ze,[e("a",Ke,[n("docker network create"),s(i)])])]),e("tr",null,[$e,Ge,e("td",He,[e("a",Fe,[n("docs.docker.com"),s(i)])])]),e("tr",null,[We,Xe,e("td",en,[e("a",nn,[n("docs.docker.com"),s(i)])])]),e("tr",null,[sn,ln,e("td",dn,[e("a",an,[n("docs.docker.com"),s(i)])])]),e("tr",null,[tn,rn,e("td",cn,[e("a",on,[n("docs.docker.com"),s(i)])])]),e("tr",null,[vn,mn,e("td",un,[e("a",bn,[n("docker network disconnect"),s(i)])])]),e("tr",null,[hn,pn,e("td",gn,[e("a",_n,[n("docker network inspect"),s(i)])])])])]),kn])}const Dn=d(c,[["render",fn],["__file","docker.html.vue"]]);export{Dn as default};
