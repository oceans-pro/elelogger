## 一、基本环境

安装vim

```bash
# 最小化安装并不自带VIM，需要手动安装
yum install vim
vim anaconda-ks.cfg # 测试
```

## 二、宝塔面板

为何使用：

- 我们需要时时查看流量、CPU、硬盘的使用情况，这时宝塔面板就很方便，就不用输入命令行或者专门编写Shell脚本了。

- 不必每次都去找下载教程（各个软件的编译安装方式不尽相同，难以记忆）

- 不必为了修改配置文件而开着一堆软件（直接在网页上改即可）

  

注意事项：

- 宝塔面板的作者是PHP党，对Java不够友好，所以Java特有的环境还是要自己装。（如JDK、Tomcat等）。我们只安装nginx、MySQL、redis等数据库软件。



如何使用：

- 网址 https://www.bt.cn/
- 开启防火墙

```bash
firewall-cmd --add-port=8888/tcp --permanent # 开启一个端口，永久生效
firewall-cmd --reload # 重新加载配置
```

- 开启云服务器的安全策略（见宝塔面板官网）

- 进入面板
- 安装软件

## 三、JDK

下载

- 网址 https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

- 版本 jdk-8u251-linux-x64.tar.gz



解压Java到服务器软件目录

```sh
cd /www/server # 宝塔面板特有的软件目录
mkdir java
tar -zxvf jdk-8u251-linux-x64.tar.gz  –C /www/server/java
```



```sh
vim /etc/profile # 配置如下
source /etc/profile # 重新加载配置文件
```

增加配置内容如下

```.properties
# set java environment
JAVA_HOME=/www/server/java
CLASSPATH=.:$JAVA_HOME/lib.tools.jar
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME CLASSPATH PATH
```

检查是否安装成功

```bash
java -version
```

<p style="color:red;">下面讨论不考宝塔面板安装通用软件 MySQL、Redis、</p>

## 四、mysql

源码包安装方式和rpm安装方式性能差不了多少，考虑到我们的用途只是开发和学习，这里采用rpm方式安装。

- 下载地址为：https://downloads.mysql.com/archives/community/

- Operating System为：Red Hat Enterprise Linux 7 / Oracle Linux 7 

- 下载的版本为：`mysql-5.7.29-1.el7.x86_64.rpm-bundle.tar`（约500MB）

- 直接下载最大的那个：**RPM Bundle**

然后使用xftp将tar文件复制到虚拟机的 /root

#### 安装MySQL依赖

```bash
yum -y install libncurses*
yum -y install perl.x86_64
yum -y installlibaio.x86_64
yum -y install net-tools.x86_64
```

#### 安装MySQL（rpm方式）

- 先装 common， 再装 libs
- 确保 mariadb 已卸载（centos7 默认支持 mariadb，不支持 mysql，不卸载会出现冲突）
- 再装 client，最后装 server。

```
rpm –qa | grep mariadb # ==> mariadb-libs-5.5.65-1.el7.x86_64
yum remove mariadb-libs-5.5.65-1.el7.x86_64 # 如果有再卸载
rm -f /etc/my.cnf
rm -rf /var/lib/mysql/
```

```bash
cd /root
mkdir server
mv mysql-5.7.29-1.el7.x86_64.rpm-bundle.tar server
cd server
tar -xvf mysql-5.7.29-1.el7.x86_64.rpm-bundle.tar # 解压

rpm -ivh mysql-community-common-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.29-1.el7.x86_64.rpm 
rpm -ivh mysql-community-client-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.29-1.el7.x86_64.rpm
```

#### 查看是否安装成功

```bash
#  mysql 安装成功后，会自动建立 mysql 用户、用户组。
cat /etc/passwd | grep mysql
cat /etc/group | grep mysql
# or
mysql --version
# or
rpm -qa | grep mysql
```

#### 启动mysql服务

```bash
ps -ef | grep mysql # 查看是否已经启动
# service mysql start # 失败 报错 Failed to start mysqld.service: Unit not found，可能与Linux7有关
systemctl start mysqld.service 
ps -ef | grep mysql # 再检查一遍
systemctl status mysqld.service
```

```txt
result
systemctl status mysqld.service

● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: dis>
   Active: active (running) since Sun 2020-05-24 14:04:54 CST; 13s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 29269 ExecStart=/usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mys>
  Process: 29215 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCE>
 Main PID: 29271 (mysqld)
    Tasks: 27 (limit: 8226)
   Memory: 362.1M
   CGroup: /system.slice/mysqld.service
           └─29271 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid

5月 24 14:04:39 localhost.localdomain systemd[1]: Starting MySQL Server...
5月 24 14:04:54 localhost.localdomain systemd[1]: Started MySQL Server
```

#### 本地登录mysql

```bash
# 方式一（推荐）
cat /var/log/mysqld.log | grep password # 查看随机生成的密码
```

```txt
result
[Note] A temporary password is generated for root@localhost: dsg0Yds,qg#s
```

然后登录

```bash
mysql -u root -p
# Shift + Insert粘贴密码
```

修改密码

```bash
SHOW VARIABLES LIKE 'validate_password%';
# ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
set global validate_password_policy=LOW;
ALTER USER root@localhost IDENTIFIED  BY 'password'; 
mysql> exit
mysql -u root -ppassword
```

```bash
# 方式二 
# 编辑配置文件  /etc/my.cnf，找到 [mysqld] ,并添加 
skip-grant-tables  # 用于跳过密码登陆，然后要记住改回来
```

#### 远程连接mysql

```mysql
 # 从任何主机上使用用户root，密码root连接到mysql服务器
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
mysql> exit

firewall-cmd --add-port=3306/tcp --permanent;
firewall-cmd --reload;
```

```sql
# 查看远程连接权限
use mysql;
show tables;
select user,host from user;
# or select * from user\G;

# update user set host ='%' where user ='root';
# flush privileges; 
```

```txt
result
mysql> select user,host from user;

+---------------+-----------+
| user          | host      |
+---------------+-----------+
| root          | %         |
| mysql.session | localhost |
| mysql.sys     | localhost |
| root          | localhost |
+---------------+-----------+
```

```sql
select @@basedir;  /usr
select @@datadir; /var/lib/mysql
```
```bash
find / -name my.cnf; /etc/my.cnf
```



// 未完待续
