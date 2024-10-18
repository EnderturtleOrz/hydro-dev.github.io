"use strict";(self.webpackChunkhydro_dev_github_io=self.webpackChunkhydro_dev_github_io||[]).push([[5872],{636:(e,n,t)=>{t.r(n),t.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-fe9aee22","path":"/docs/install/","title":"部署 Hydro","lang":"en-US","frontmatter":{"description":"这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。 搭建过程中如果遇到问题欢迎 联系我们 (/#联系我们) 提问。 服务器选择 不同服务商提供的 CPU 主频不同，下方数据仅供参考。 最低服务器配置： CPU: 1核 内存: 2G。（约可允许 100 人使用） 请尽量不要使用突发性能实例或共享型实例，这可能会导致评测时间计量不准确 Ce...","head":[["meta",{"property":"og:url","content":"https://hydro.js.org/docs/install/"}],["meta",{"property":"og:site_name","content":"Hydro"}],["meta",{"property":"og:title","content":"部署 Hydro"}],["meta",{"property":"og:description","content":"这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。 搭建过程中如果遇到问题欢迎 联系我们 (/#联系我们) 提问。 服务器选择 不同服务商提供的 CPU 主频不同，下方数据仅供参考。 最低服务器配置： CPU: 1核 内存: 2G。（约可允许 100 人使用） 请尽量不要使用突发性能实例或共享型实例，这可能会导致评测时间计量不准确 Ce..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T04:40:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T04:40:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署 Hydro\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T04:40:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"服务器选择","slug":"服务器选择","link":"#服务器选择","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]}],"git":{"createdTime":1620493369000,"updatedTime":1724215200000,"contributors":[{"name":"undefined","email":"i@undefined.moe","commits":24},{"name":"Macesuted","email":"macesuted@qq.com","commits":8},{"name":"Taoning Ge","email":"gtn1024@foxmail.com","commits":1},{"name":"代建杉","email":"wood3s@foxmail.com","commits":1}]},"readingTime":{"minutes":3.32,"words":997},"filePathRelative":"docs/install/README.md","localizedDate":"May 8, 2021","autoDesc":true,"excerpt":""}')},2869:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var l=t(6252);const o=(0,l._)("h1",{id:"部署-hydro",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#部署-hydro"},[(0,l._)("span",null,"部署 Hydro")])],-1),a=(0,l._)("br",null,null,-1),s=(0,l._)("h2",{id:"服务器选择",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#服务器选择"},[(0,l._)("span",null,"服务器选择")])],-1),i=(0,l._)("p",null,[(0,l.Uk)("不同服务商提供的 CPU 主频不同，下方数据仅供参考。"),(0,l._)("br"),(0,l.Uk)(" 最低服务器配置： CPU: 1核 内存: 2G。（约可允许 100 人使用）"),(0,l._)("br"),(0,l._)("strong",null,"请尽量不要使用突发性能实例或共享型实例，这可能会导致评测时间计量不准确")],-1),r={href:"https://www.centos.org/centos-linux-eol/",target:"_blank",rel:"noopener noreferrer"},p=(0,l.uE)('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>兼容大部分 Linux 发行版，推荐使用 Debian 12 / Debian 11 / Ubuntu 22.04 （教程多，成功率高，上手简单），<strong>不支持</strong> CentOS 及其各种变种：</p><ul><li>CentOS</li><li>Alibaba Cloud Linux</li><li>TencentOS</li><li>OpenCloudOS</li></ul><p>如果你的机器内存较小（&lt;=2GiB），请避免使用 Ubuntu 22.04，它会消耗较多的内存。建议使用 Debian 12 / Debian 11。<br> 如果你有 Linux 运维经验，Hydro 同样支持在 Alpine Linux 上运行，Alpine Linux 系统启动后仅占用 ~100M 内存，是在低配置服务器上运行的更优方案。</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>虚拟机用户请注意：</p><ul><li>Hydro 使用的数据库依赖于 CPU 的 avx 指令集以提高运行性能，大部分虚拟机软件默认没有启用 avx 指令集，请参照您使用的虚拟机软件说明。</li><li>虚拟机由于非独占 CPU，会导致评测时间计量精度降低。</li><li>由于虚拟机本身的数据保存机制，突然断电很容易导致数据库损坏无法读取，请务必定期备份数据库，有条件请购买 UPS 保证供电稳定。</li></ul><p>Docker 用户请注意：</p><ul><li>使用安装脚本需要设置 <code>USER</code> 环境变量为 <code>root</code>。</li><li>需要使用 <code>--privileged</code> 参数启动容器，否则评测机无法运行。</li><li>开发组不对 docker 部署提供技术支持。</li></ul><p>第三方面板（如宝塔）用户请注意：</p><ul><li>部分面板出现多次高危漏洞，为防止数据丢失，请不要在生产环境中使用！</li><li>开发组不对第三方面板部署提供技术支持。</li></ul></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Hydro 需要使用以下端口： 80, 443, 2019, 8888, 5050, 27017，请确保这些端口空闲。<br><strong>安装和安装后的所有操作均需要在 root 权限下进行！（<code>sudo su</code> 输入用户的密码, 或 <code>su -</code> 输入 root 账户的密码）</strong>。</p></div><p>运行下面的脚本，等待几分钟即可（建议复制防止敲错）：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#D8DEE9;">LANG</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">zh</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">.</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&lt;(</span><span style="color:#88C0D0;">curl</span><span style="color:#A3BE8C;"> https://hydro.ac/setup.sh</span><span style="color:#ECEFF4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>如果有特殊需求，安装脚本支持一些可选的高级选项，以此方式调用： <code>. &lt;(curl https://hydro.ac/setup.sh) --foo --bar</code></p><ul><li>--no-caddy 不配置安装反向代理，只监听8888端口</li><li>--judge 仅作为独立评测机安装</li></ul></div><p>阿里云/腾讯云/华为云等等用户安装后如果不能访问 请百度搜索 <code>xx云 放行80端口</code><br> 脚本默认使用的为清华大学镜像。<br> 安装完成后，从 <code>http://服务器ip/</code> 访问网页端，注册一个账号，之后在终端中使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setSuperAdmin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将首个注册用户设置为超级管理员。之后刷新页面，您应当能在上方导航栏看到控制面板入口。<br> 进入控制面板，右侧系统设置，验证管理员密码后按需修改配置，注意 Server BaseURL 一项需要填写访问网站用的完整的 URL，以 <code>/</code> 结尾。（重要，务必正确填写，样例：<code>https://hydro.ac/</code>）</p><p>系统安装后需要题库，可前往 https://hydro.ac/d/tk/p 免费专区进行下载，支持批量导入。 至此，基础功能安装已全部完成，另，如果你的服务部署在内网，且希望外网的用户可以访问，可以百度搜索 “端口映射” 相关教程。</p>',11),c={},d=(0,t(3744).Z)(c,[["render",function(e,n){const t=(0,l.up)("RouterLink"),c=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[o,(0,l._)("p",null,[(0,l.Uk)("这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。"),a,(0,l.Uk)(" 搭建过程中如果遇到问题欢迎 "),(0,l.Wm)(t,{to:"/#%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC"},{default:(0,l.w5)((()=>[(0,l.Uk)("联系我们")])),_:1}),(0,l.Uk)(" 提问。")]),s,i,(0,l._)("p",null,[(0,l.Uk)("CentOS 8 "),(0,l._)("a",r,[(0,l.Uk)("已于 2021-12-31 停止支持"),(0,l.Wm)(c)]),(0,l.Uk)("，后续不会为安全漏洞发布补丁，建议重装为其他操作系统。")]),p])}]])},3744:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,l]of n)t[e]=l;return t}}}]);