## 软件安装

- 依赖 `python`

```bash
pip install mujoco
```

## 开启 Mujoco 仿真器

```bash
python -m mujoco.viewer
```

- 将机器人的 xml 文件拖入 mujoco 中即可显示


## xml文件获取

```bash
git clone https://github.com/unitreerobotics/unitree_ros.git #unitree_ros/robots/g1_description/g1_29dof.xml
```

- `Physical Paremeters` > `Gravity` => `0 0 0`
- `Simulation` => `Reset`