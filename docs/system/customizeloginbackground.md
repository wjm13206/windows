# 设置 Windows 登录背景

## 功能描述
通过修改注册表来自定义 Windows 登录界面的背景图片。

## 注册表路径
`HKEY_USERS\.DEFAULT\Control Panel\Desktop`

## 键值说明
| 键值名称   | 数据类型 | 默认值 | 功能描述           |
|------------|----------|--------|--------------------|
| WallPaper  | REG_SZ   | 空     | 设置登录背景图片路径 |

## 详细说明

### 修改方法
1. 准备一张背景图片（使用 `.bmp` 或 `.jpg？` 格式）
2. 按 `Win + R` 输入 `regedit` 打开注册表编辑器
3. 导航至上述路径
4. 双击 `WallPaper` 键值（如不存在则新建一个 REG_SZ 值）
5. 输入背景图片的完整路径（例如：`C:\Windows\System32\oobe\info\backgrounds\login.bmp`）
6. 修改完成后立即生效，下次登录时可见

### 示例路径
C:\Custom\login-background.bmp
D:\Wallpapers\login.jpg
C:\Windows\Web\Wallpaper\Windows\img0.jpg


### 恢复默认
要恢复默认的登录背景，只需：
- 将 `WallPaper` 的值清空
- 或直接删除 `WallPaper` 键值

### 注意事项
- ⚠️ **修改注册表有风险，操作前请备份**
- 此设置影响所有用户的登录界面背景
- 需要以**管理员权限**运行注册表编辑器
- 建议图片分辨率与显示器分辨率一致以获得最佳效果
- 某些 Windows 版本可能有额外的安全策略限制
- 推荐将图片放在系统目录或不易被移动的位置

### 兼容性
- Windows 7、8、10、11 均支持
- 不同版本 Windows 可能有一些差异