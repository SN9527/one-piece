## 安装

```bash
git clone https://github.com/unitreerobotics/unitree_sdk2_python.git
cd unitree_sdk2_python
sudo apt install python3.10-venv
sudo python3 -m venv myenv
source myenv/bin/activate
pip3 install -e . 
```

## 测试

- 网线连接机器
- ros2环境

```bash
source /opt/ros/humble/setup.bash
python3 ./example/g1/audio/g1_audio_client_example.py eth1
```