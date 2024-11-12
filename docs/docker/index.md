## 环境搭建

### centos

```bash
yum update -y
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum install -y yum-utils device-mapper-persistent-data lvm2
yum install docker-ce docker-ce-cli containerd.io docker-compose
```

## 仓库

### 直接拉取

```bash
docker pull nxhitkcq.mirror.aliyuncs.com/jekyll
```

### 设置配置文件

- /etc/docker/daemon.json

```json
{
    "registry-mirrors":
    [
        "https://nxhitkcq.mirror.aliyuncs.com"
    ]
}
```


## 网段

### 查看所有网段

```bash
docker network ls
```

### 创建网段

```bash
docker network create --driver bridge --subnet 172.60.0.0/16 yt
```

### 删除网段

```bash
docker network rm yt
```





## 容器

### 单个容器详情

```bash
docker inspect nginx
```


### 查看所有容器

```bash
docker ps -a --format "{{.Names}}\t{{.Status}}"
```

### 拷贝容器文件

```bash
docker cp wulin-grafana:/etc/grafana/grafana.ini .
```





## 镜像操作


### save导出导入镜像

```bash
docker save -o nginx.tar nginx
```

```bash
docker load -i nginx.tar
```

### export导出导入镜像

```bash
docker export containerId > image.tar
```

```bash
docker import image.tar image:tag
```

### 删除镜像

```bash
docker rmi nginx
```



## 打包发布

```bash
docker login
docker commit -m "commit info" containerId imageName:tag
docker push imageName:tag
```