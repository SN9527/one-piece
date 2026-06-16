## 软件安装

```bash
cd ~
mkdir slam_example
cd slam_example
wget https://oss-global-cdn.unitree.com/static/dd442abf94ec44f599095cb15c3e298b.zip
unzip dd442abf94ec44f599095cb15c3e298b.zip
cd example
mkdir build
cd build
cmake ..
make
./keyDemo eth1
```

- slam_example目录结构

```bash
├── example
│   ├── build
│   ├── CMakeLists.txt
│   ├── include
│   ├── README.md
│   └── src
└── rviz2
    ├── mapping.rviz
    └── relocation.rviz
```


## 功能说明

- 按 `q` 开始建图，遥控机器人走遍厂里
- 按 `a` 进行定位
- 按 `s`增加位姿（导航拓扑点）
- 按 `w` 结束建图


- 按 `d` 自动导航
- 按 `z` 暂停导航
- 按 `x` 恢复导航

## Rviz2 可视化

- 新建建图可视化窗口

```bash
source /opt/ros/humble/setup.bash
rviz2 #配置文件 ~/slam_example/rviz2/mapping.rviz
```

- 新建定位可视化窗口

```bash
source /opt/ros/humble/setup.bash
rviz2 #配置文件 ~/slam_example/rviz2/relocation.rviz
```