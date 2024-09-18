// Declare the Configure interface based on the methods in Agent.configure
interface IConfigure {
    /** 设置布局 */
    setLayout(layout: ILayout): void;
    /** 设置服务URL */
    setServiceUrl(url: string): void;
    /** 设置管理路径 */
    setManagementPath(path: string): void;
    /** 设置偏好设置 */
    setPreferenceSettings(preferenceSettings: IPreferenceSettings): void;
    /** 设置登录数据 */
    setLoginData(loginData: ILoginData): void;
    /** 设置POC设置 */
    setPocSetting(pocSetting: IPocSetting): void;
    /** 设置白板信息 */
    setWhiteBoardInfo(info: WhiteBoardInfo): void;
    /** 设置默认媒体选项 */
    setDefaultMediaOptions(mediaOptions: IDefaultMediaOptions): void;
    /** 设置当前标签 */
    setCurrentTab(tab: ICurrentTab): void;
    /** 设置其他工作 */
    setOtherWork(otherWork: IOtherWork): void;
    /** 设置用户设置 */
    setUserSettings(userSettings: object): void;
    /** 设置背景图片列表 */
    setBackgroundImageList(backgroundImageList: IBackgroundList[]): void;
    /** 设置水印图片列表 */
    setWatermarkImageList(watermarkImageList: IWatermarkImageList[]): void;
    /** 设置背景ID */
    setBackgroundID(backgroundID: number): void;
    /** 设置水印ID */
    setWatermarkID(watermarkID: number): void;
    /** 设置传输场景 */
    setTransferScene(status: boolean): void;
    /** 设置忽略变量链接键 */
    setIgnoreVariableLinkedKeys(keys: TIgnoreLinkedKey[]): void;
    /** 设置语言 */
    setLanguage(language: 'zh' | 'zh-TW' | 'en-US'): void;
    /** 获取语言 */
    getLanguage(): string;
    /** 设置AWS文件URL */
    setAwsFileUrl(url: string): void;
    /** 获取AWS文件URL */
    getAwsFileUrl(): string;
    /** 替换静态URL */
    replaceStaticUrl(url: string): string;
    /** 设置Countly参数 */
    setCountlyParam(param: { appkey: string; host: string }): void;
    /** 设置客户URL */
    setCustomerUrl(url: string): void;
    /** 设置公钥 */
    setPublicKey(key: string): void;
    /** 获取公钥 */
    getPublicKey(): string;
    /** 设置表单URL */
    setFormUrl(url: string): void;
    /** 设置资源原始URL域 */
    setResourceOriginUrlDomain(url: string): void;
    /** 设置资源替换URL域 */
    setResourceReplaceUrlDomain(url: string): void;
    /** 设置URL映射 */
    setUrlMapping(urlMapping: { [key: string]: string }): void;
    /** 设置最大上传文件大小 */
    setMaxUploadFileSize(size: number): void;
}

// Add TIgnoreLinkedKey type
type TIgnoreLinkedKey = string;

// Add ILayout interface
interface ILayout {
    /** 容器 */
    container: string;
    /** 是否作为小部件使用 */
    useAsWidget?: boolean;
    // Add other layout-related properties as needed
}

// Add IPreferenceSettings interface
interface IPreferenceSettings {
    // Add properties for preference settings
    // These are placeholder properties, adjust as needed
    /** 语言 */
    language?: 'zh' | 'zh-TW' | 'en-US';
    /** 主题 */
    theme?: string;
    /** 通知 */
    notifications?: boolean;
    // Add other preference-related properties
}

// Add ILoginData interface
interface ILoginData {
    // Add properties for login data
    // These are placeholder properties, adjust as needed
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 令牌 */
    token?: string;
    /** 过期时间 */
    expiresAt?: number;
    // Add other login-related properties
}

// Add IPocSetting interface
interface IPocSetting {
    // Add properties for POC (Proof of Concept) settings
    // These are placeholder properties, adjust as needed
    /** 是否启用 */
    enabled?: boolean;
    /** 功能 */
    features?: string[];
    /** 过期日期 */
    expirationDate?: string;
    // Add other POC-related properties
}

// Add WhiteBoardInfo interface
interface WhiteBoardInfo {
    // Add properties for whiteboard information
    // These are placeholder properties, adjust as needed
    /** ID */
    id?: string;
    /** 名称 */
    name?: string;
    /** URL */
    url?: string;
    /** 是否活动 */
    active?: boolean;
    // Add other whiteboard-related properties
}

// Add IDefaultMediaOptions interface
interface IDefaultMediaOptions {
    // Add properties for default media options
    // These are placeholder properties, adjust as needed
    /** 音频 */
    audio?: boolean;
    /** 视频 */
    video?: boolean;
    /** 屏幕共享 */
    screenShare?: boolean;
    /** 质量 */
    quality?: 'low' | 'medium' | 'high';
    // Add other media-related properties
}

// Add ICurrentTab interface
interface ICurrentTab {
    // Add properties for current tab
    // These are placeholder properties, adjust as needed
    /** ID */
    id?: string;
    /** 名称 */
    name?: string;
    /** URL */
    url?: string;
    /** 是否活动 */
    active?: boolean;
    // Add other current tab-related properties
}

// Add IOtherWork interface
interface IOtherWork {
    // Add properties for other work
    // These are placeholder properties, adjust as needed
    /** ID */
    id?: string;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: 'pending' | 'in-progress' | 'completed';
    /** 截止日期 */
    dueDate?: string;
    // Add other work-related properties
}

// Add IBackgroundList interface
interface IBackgroundList {
    // Add properties for background list item
    // These are placeholder properties, adjust as needed
    /** ID */
    id: number;
    /** URL */
    url: string;
    /** 名称 */
    name?: string;
    /** 缩略图URL */
    thumbnailUrl?: string;
    /** 是否默认 */
    isDefault?: boolean;
    // Add other background-related properties
}

// Add IWatermarkImageList interface
interface IWatermarkImageList {
    /** ID */
    id: number;
    /** URL */
    url: string;
    /** 缩写URL */
    abbreviatedUrl?: string;
    /** 文件名 */
    fileName?: string;
    /** 是否默认 */
    isDefault?: boolean;
    // Add other watermark-related properties if needed
}

// Declare the Agent interface based on the methods and properties in Agent.ts
declare interface IAgent {
    /** 初始化 */
    init(serviceUrl: string, params: object): void;
    /** 初始化创建容器 */
    createView(container: string, useAsWidget?: boolean): void;
    /** 添加事件监听器 */
    addEventListener(ack: (info: object) => void): void;
    /** 移除事件监听器 */
    removeEventListener(): void;
    /** 移除设备事件监听器 */
    removeDeviceEventListener(): void;
    /** 添加设备事件监听器 */
    addDeviceEventLinstener(ack: (info: object) => void): void;
    /** 移除邀请事件监听器 */
    removeInviteEventListener(): void;
    /** 添加邀请事件监听器 */
    addInviteEventLinstener(ack: (info: object) => void): void;
    /** 登录系统 */
    loginSystem(): Promise<void>;
    /** SSO登录系统 */
    ssologinSystem(logindata: object): Promise<void>;
    /** 签入系统 */
    checkinSystem(groups: { id: number; name: string }[]): Promise<object>;
    /** 签出系统 */
    checkoutSystem(): Promise<object>;
    /** 坐席就绪 */
    agentReady(): Promise<object>;
    /** 坐席未就绪 */
    agentUnReady(): Promise<object>;
    /** 关闭后续工作 */
    closeAfterWork(): Promise<object>;
    /** 加入主管会话 */
    joinSessionWithChief(): Promise<void>;
    /** 应答 */
    answer(): Promise<void>;
    /** 渲染流 */
    renderStream(streamLabel: string, videoId: string): Promise<object>;
    /** 拒绝会话 */
    rejectSession(): Promise<void>;
    /** 挂断 */
    hangup(reason: { code?: number; reason?: string, type?: string }): Promise<void>;
    /** 上传背景 */
    uploadBackground(file: File): Promise<object>;
    /** 获取背景列表 */
    getBackgroundList(): Promise<void>;
    /** 应用背景 */
    applyBackground(): Promise<void>;
    /** 删除背景 */
    deleteBackground(id: number): Promise<void>;
    /** 上传水印 */
    uploadWaterMark(file: File): Promise<object>;
    /** 初始化水印 */
    initWaterMark(): Promise<void>;
    /** 创建水印 */
    createWaterMark(watermark: { url: string; abbreviatedUrl: string; fileName: string; isDefault: boolean }): Promise<void>;
    /** 删除水印 */
    delWaterMark(id: number): Promise<void>;
    /** 应用水印 */
    applyWaterMark(id: number): Promise<void>;
    /** 检查其他工作 */
    checkedOtherWork(): Promise<void>;
    /** 保存其他工作 */
    saveOtherWork(): Promise<void>;
    /** 登出 */
    logout(): Promise<void>;
    /** 开始视频 */
    startVideo(): Promise<void>;
    /** 应答IM呼叫 */
    answerImCall(): Promise<void>;
    /** 请求升级 */
    requestUpgrade(media: string, toWhom: string): Promise<object>;
    /** 接受升级 */
    acceptUpgrade(media: string): Promise<boolean>;
    /** 拒绝升级 */
    rejectUpgrade(media: string, reason: object): Promise<object>;
    /** 取消升级 */
    cancelUpgrade(reason?: string, media?: string): Promise<object>;
    /** 获取会话成员 */
    getSessionMembers(): Promise<void>;
    /** 获取语言 */
    getLanguage(): string;
    /** 设置语言 */
    setLanguage(language: 'zh' | 'zh-TW' | 'en-US'): void;
    /** 设置日志级别 */
    setLogLevel(level: number): void;
    /** 添加监听器 */
    addListener(event: string, ack: (info: object) => void): void;
    /** 移除监听器 */
    removeListener(event: string, listener: (info: object) => void): void;
    /** 同步会话摘要 */
    syncSessionSummary(data: object, toWhom: string): Promise<void>;
    /** 获取未完成的摘要 */
    getUnfinishedSummary(): Promise<void>;
    /** 显示修改密码模态框 */
    showChangePasswordModal(): void;
    /** 需要更新密码 */
    needUpdatePassword(needUpdatePassword: string): void;

    // Add configure property
    configure: IConfigure;

    // Add other methods and properties as needed
}

export interface AgentServerProps {
    Agent: IAgent;
    render: () => void;
    destroy: () => void;
}

declare const AgentServer: AgentServerProps;

