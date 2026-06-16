## 依赖安装

```bash
sudo apt update
sudo apt install -y cmake g++ build-essential libyaml-cpp-dev libeigen3-dev libboost-all-dev libspdlog-dev libfmt-dev
```

## 下载安装

```bash
cd ~
git clone https://github.com/unitreerobotics/unitree_sdk2.git
```

```bash
cd unitree_sdk2
mkdir build
cd build 
cmake ..
sudo make install
```
