---
title: Git 
# sidebar: false
page: true
footer: false
---
## Git 强制覆盖
``` git fetch --all && git reset --hard origin/master && git pull ```

## Git 账户相关
- 查看
```
git config user.name
git config user.email
```
- 修改
```
git config --global user.name "Your_username"
git config --global user.email "Your_email"
```

## Git 修改远程仓库链接
> git remote set-url origin 仓库地址

## Git 远程仓库相关操作
- 远程仓库的重命名与移除
```
git remote rename [旧] [新]
git remote remove [源名称]
```

## Git 拉取远程分支方法
1. 直接获取
```
git clone -b dev 代码仓库地址 （dev是分支名称）
git clone --b [tags标签] [git地址] (拉取tag代码)
```

2. 现有仓库建立关联
打开Git Bash
在Git Bash 中输入 git init 进行初始化
与远程代码仓库建立连接：git remote add origin 代码仓库地址
将远程分支拉到本地：git fetch origin dev（dev即分支名）
创建本地分支：git checkout -b LocalDev origin/dev (LocalDev 为本地分支名，dev为远程分支名)
根据分支的变化，感觉这条指令可能是创建并切换到该分支
最后一步将远程分支拉取到本地：git pull origin dev（dev为远程分支名）



## Git 查看日志
```
git log [-p] // 查看提交历史 【-p 查看最近一次变动详情】
git show [log_id] // 查看上次提交变动记录或指定历史的变动
```

## Git 分支操作
```
git checkout -b xxx // 新建并切换分支
git push origin login	// 将本地分支推送到远程
git branch -d xxx // 删除本地分支
git push origin -d[--delete] xxx // 删除远程分支
```

## Git 迁移仓库
1. 随便找个文件夹，从原地址克隆一份裸版本库
```
git clone --bare 旧的git地址 
```

会在当前目录下产生一个 xxx.git 的文件夹
这个步骤，就是克隆git每一次的提交信息
和本地的代码没有关系，只要线上的代码是最新的，这个git版本就是完整的

2. 推送裸版本库到新的地址
```
cd xxx.git
git push --mirror 新的git地址
```

3. 删掉xxx.git文件夹
删不删无所谓，只是说明它没有用了而已。

4. 代码迁移就成功了，接下来就可以使用新的地址了
```
git clone 新的git地址
```

## Git 撤销操作

- 写完代码后，我们一般这样
```
git add . //添加所有文件
git commit -m "本功能全部完成"
```

- 执行完commit后，想撤回commit，怎么办？
```
git reset --soft HEAD^
```
这样就成功的撤销了你的commit
注意，仅仅是撤回commit操作，您写的代码仍然保留。

- 说明：
HEAD^的意思是上一个版本，也可以写成HEAD~1
如果你进行了2次commit，想都撤回，可以使用HEAD~2
至于这几个参数：
--mixed
意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
--soft
不删除工作空间改动代码，撤销commit，不撤销git add . 
--hard
删除工作空间改动代码，撤销commit，撤销git add . 
注意完成这个操作后，就恢复到了上一次的commit状态。
顺便说一下，如果commit注释写错了，只是想改一下注释，只需要：
```
git commit --amend
```
此时会进入默认vim编辑器，修改注释完毕后保存就好了。

## Git 识别大小写配置(Windows)
默认情况下windows上的Git客户端，在文件名仅发生大小写改变时不会识别，提交后发现，gitlab上的文件名不会发生变化。
解决方法：
编辑 .git 中的config文件， 将 ignorecase 改为 false 即可。

## Git 版本回退
- 第一种（不推荐）：通过reset的方式，把head指针指向之前的某次提交，reset之后，后面的版本就找不到了
操作步骤如下：
1、在gitlab上找到要恢复的版本号，如：
139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96 
2、在客户端执行如下命令（执行前，先将本地代码切换到对应分支）：
git reset --hard 139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96 
3、强制push到对应的远程分支（如提交到develop分支）
git push -f -u origin develop

- 第二种（推荐） 这种方式不会把版本往前回退，而是生成一个新的版本。所以，你只需要让别人更新一下代码就可以了，你之前操作的提交记录也会被保留下来
操作步骤如下：
1、找到你误提交之前的版本号
2、git revert -n 版本号
3、git commit -m xxxx 提交
4、git push 推送到远程

## Git 远程已删除分支，本地依然显示
```
git remote prune origin
```
## Git 文件大小写处理
1. 用git执行下列命令，设置本地git环境识别大小写。
> git config core.ignorecase false

2. 修改文件夹名称；

3. 运行下面命令删除原来缓存的文件夹；
> git rm --cached 文件夹路径 -r
