declare const ivcsCustomer: ivcsCustomerProps;

export interface IvcsCustomerWidgetOptions {
    debug?: boolean;
    backendUrl: string;
    org: string;
    visitorId?: string;
    account?: {
        name: string;
        password: string;
    };
    videoTag?: {
        othersControls: boolean;
        selfControls: boolean;
        otherObjectFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
        selfObjectFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    };
    bizName?: string;
    orgName?: string;
    formUrl?: string;
    pdfViewerUrl?: string;
    countlyAppKey?: string;
    countlyHost?: string;
    hideMineName?: boolean;
    hideServiceRating?: boolean;
    inviteProgressBgImg?: string;
    showAgentName?: string;
    whiteboardInfo?: {
        hostName: string;
        whiteboardPath: string;
    };
    awsFileUrl?: string;
    clcLog?: boolean;
}

export interface IvcsCustomerWidgetResponse {
    result: string;
    sessionId: string;
}

export interface IvcsCustomerWidgetError {
    code: string;
    message: string;
}

export interface ivcsCustomerProps {
    /**
         * 初始化实例对象
         * @param {IvcsCustomerWidgetOptions} options
         * eg:{
         *  option = {
                    debug: true, // 是否开启debug模式
                    backendUrl: '', // 服务地址
                    org: '', // 机构名
                    visitorId: '', // 访客id
                    // account弃用了
                    account: {
                         name: '', // 用户名
                         password: '', // 密码
                    },
                    // video标签设置
                    videoTag:{
                        othersControls:true, // 对方video 标签 显示controls
                        selfControls:true, // 自己video标签 显示controls
                        otherObjectFit:'cover', // 对方video 设置 object-fit;
                                selfObjectFit:'cover'// 自己video 设置 object-fit;
                    },
                    bizName: '', // 业务场景名
                    orgName: '', // 机构全称
                    formUrl: '', // 表单服务地址
                    pdfViewerUrl: ``, // pdf预览服务地址
                    countlyAppKey: 'f01408a26ecdc29a2899f5fddec84bf132435a82', // countly平台应用 Appkley
                    countlyHost: 'https://countly.cosee.cc', //countly平台应用Host地址
                    hideMineName: true, // 隐藏自己的角色名
                    hideServiceRating: true, // 不设置挂断后弹框会话评价
                    inviteProgressBgImg: '' // 呼叫排队中背景图url地址
                    showAgentName: '坐席' // 访客端对坐席人员的称谓，如'工程师','客服',
                    whiteboardInfo:{
                        hostName:'https://ivcs-test-k8s-azure.zealcomm.cn', // 白板服务地址
                        whiteboardPath:'/customer/static/whiteboard', // 白板服务地址path
                    },
                    awsFileUrl:'', // aws存储文件配置awsFileUrl
                    clcLog: true, // 是否开启写入clc日志
                };
         * }
         */
    getInstance(options: IvcsCustomerWidgetOptions): void;

    /**
     * 设置页面功能按钮显示或者隐藏,默认都是显示。
     * @param {boolean} show_screenSync_stop 同屏是否显示结束同屏按钮 默认true
     * @param {boolean} show_screenSync_hangup 同屏是否显示挂断按钮 默认true
     * @param {boolean} show_layout_change 切换布局按钮 默认true
     * @param {boolean} show_switch_camera 切换摄像头按钮 默认true
     * @param {boolean} show_mute_voice 闭麦按钮 默认true
     * @param {boolean} show_media_controls 语音升降级按钮 默认true
     * @param {boolean} show_session_hangup 会话中挂断按钮 默认true
     * @param {boolean} show_im 是否显示im功能按钮 默认true
     * @param {boolean} show_inviteOthers 是否显示邀请其他访客按钮 默认true
     * @param {boolean} show_contentView 是否显示通话页面历史推送内容视图 默认true
     */
    initToolBar(show_screenSync_stop: boolean, show_screenSync_hangup: boolean, show_layout_change: boolean, show_switch_camera: boolean, show_mute_voice: boolean, show_media_controls: boolean, show_session_hangup: boolean, show_im: boolean, show_inviteOthers?: boolean, show_contentView?: boolean): void;
    /**
     * 发起呼叫前，建立连接
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    initConnect(onSuccess: (info: object) => void, onFailure: (info: object) => void): Promise<void>;
    /**
     * 根据业务场景id呼叫坐席
     * @param {string} bizscenarioId  业务场景id
     * @param {string} callType 通话模式  enum['im'='双方都是im聊天','audio'='双方都是语音通话','video'='双方都是视频通话','audio-video'='自己语音，对方视频通话','video-audio'='自己视频，对方语音通话']
     * @param {string} callAgentProperty 呼叫的坐席类型 enum['all'="人工或AI",'human'="人工",'robot'="AI坐席"]
     * @param {object} userData 随路数据
     * @param {boolean} showInviteProgressView 是否显示呼叫等待的页面
     * @param {boolean} showSessionVideoView 是否显示通话中页面
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    callScenario(bizscenarioId: string, callType: string, callAgentProperty: string, userData: object, showInviteProgressView: boolean, showSessionVideoView: boolean, onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 呼叫指定坐席
     * @param {string} bizscenarioId 业务场景id
     * @param {string} callType 通话模式  enum['im'='双方都是im聊天','audio'='双方都是语音通话','video'='双方都是视频通话','audio-video'='自己语音，对方视频通话','video-audio'='自己视频，对方语音通话']
     * @param {string} agentId  坐席id
     * @param {object} userData 随路数据
     * @param {boolean} showInviteProgressView 是否显示呼叫等待的页面
     * @param {boolean} showSessionVideoView 是否显示通话中页面
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    callAgent(bizscenarioId: string, callType: string, agentId: string, userData: object, showInviteProgressView: boolean, showSessionVideoView: boolean, onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 监听呼叫和邀请坐席的进度
     * @ignore
     */
    onInviteProgress(cb: (message: string, reason: object) => void): void;
    /**
     * 监听当前访客发起呼叫后的进度情况，如排队数，是否非工作日等
     * @param {function} cb 返回呼叫进度数据 {code:string(),progressTitle:string(),invitationId:string(),status:string(),type:string(),waitingNumber:(排队数),currentPosition:(当前位置)}
     * code:{'401':'呼叫超时，断开','402':'呼叫等待中','403':'振铃中','404':'未找到坐席','405':'坐席接听','406':'呼叫非工作日','407':'呼叫非工作时间',
     * '408':'呼叫业务场景不可用','409':'呼叫超过上限','410':'呼叫坐席拒绝','411':'呼叫被其他访客接听（流水号呼叫）','412':'呼叫不允许，多访客下存在AI坐席','413':'呼叫指定坐席，对方拒绝接听','414':'呼叫的坐席，振铃超时',}
     */
    listenInviteProgress(cb: (resp: object) => void): void;
    /**
     * 开启同屏
     * @param {string} screenSyncurl 访客同屏页面的url，不传则默认使用访客原始页面同屏。
     */
    startScreenSync(screenSyncurl: string): void;
    /**
     * 停止同屏,<结束同屏页面,显示通话页面>
     */
    stopScreenSync(): void;
    /**
     * 语音升级成视频
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    upgradeCall(onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 视频降级成语音
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    downgradeCall(onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 邀请其他坐席加入会话
     * @param {string} bizscenarioId 业务场景id
     * @param {string} callType 通话模式  enum['im'='双方都是im',audio'='双方都是语音通话','video'='双方都是视频通话','audio-video'='自己语音，对方视频通话','video-audio'='自己视频，对方语音通话']
     * @param {string} callAgentProperty 呼叫的坐席类型 enum['all'="人工或AI",'human'="人工",'robot'="AI坐席"]
     * @param {string} agentId 邀请指定坐席id,不指定坐席传null即可
     * @param {object} userData 随路数据
     * @param {boolean} showInviteProgressView 是否显示呼叫等待的页面
     * @param {boolean} showSessionVideoView 是否显示通话中页面
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    inviteOthers(bizscenarioId: string, callType: string, callAgentProperty: string, agentId: string, userData: object, showInviteProgressView: boolean, showSessionVideoView: boolean, onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 收到访客主动挂断会话的通知,访客点击组件内部的挂断按钮.
     * @param {function} ack 返回挂断原因,默认为空
     */
    onCustomerAutoHangup(ack: (resp: object) => void): void;
    /**
     * 收到"结束同屏"消息
     * @param {function} ack {from:enum['inside','outside','others']} inside=组件内部点击结束同屏，outside=调用方执行stopScreenSync,others=正在同屏协助的对方停止同屏协助
     */
    onScreenSyncEnd(ack: (resp: object) => void): void;
    /**
     * 机器人离开会话(双录结束)
     * @param {function} ack 返回离开的机器人信息
     */
    onRobotQuitSession(ack: (resp: object) => void): void;
    /**
     * 收到点击组件内部邀请成员的事件，应用层去渲染邀请访客的视图。
     * @param {function} ack 返回离开的机器人信息
     */
    onInviteCustomer(ack: (resp: object) => void): void;
    /**
     * 收到指令
     * @param {function} ack {cmdData}
     */
    onCmd(ack: (resp: object) => void): void;
    /**
     * 访客主动挂断会话,(应用层业务执行完毕后调用，结束这一笔会话;发起呼叫失败,也需要调用去结束当前会话)
     * @param {string} reason 挂断原因，默认为空
     */
    hangup(reason: string): void;
    /**
     * 根据邀请码加入会话
     * @param {string} joinMediaType 加入会话的模式，['audio','video']
     * @param {string} inviteCode 邀请码，由访客或者坐席调用后端接口生成，支持一次性加入或者多次有效加入
     * @param {object} userData 访客的随路数据，格式如{userName:'',customerRole:''}
     * @param {function} onSuccess 加入成功，会直接进入会话页面
     * @param {function} onFailure  加入失败 {code,message} {501:邀请码不存在；502:邀请码已经被使用；503:邀请码还未到开始时间；504:邀请码已过期；505:无效的会话；506:会话已结束；507:通话中存在AI坐席}
     */
    joinSessionWithInviteCode(joinMediaType: string, inviteCode: string, userData: object, onSuccess: (resp: object) => void, onFailure: (error: object) => void): Promise<void>;
    /**
     * 收到选项判断
     * @param {function} ack {cmdId,clientId,fromUser,optionData:Array()}
     */
    onMakeChoice(ack: (resp: object) => void): void;
    /**
     * 收到取消选项判断
     * @param {function} ack {cmdId,clientId,fromUser}
     */
    onCancelMakeChoice(ack: (resp: object) => void): void;
    /**
     * 响应选项判断的过程/结果
     * @param {string} cmdId 对方发送的业务指令id
     * @param {string} status enum(['accepted','rejected','in-progress','failed','done','canceled'])
     * @param {object} data  成功(done):{answer:''}  失败(failed):{reason:string(),code:string()} 其他情况传{}即可
     * @param {string} clientId  发送给谁 string(clientId) = 会话中指定的用户 'customers' = 访客;'agents' = 坐席;'others' = 除了自己的所有人; 'all' = 所有人
     * @return Promise <>
     */
    responseMakeChoice(cmdId: string, status: string, data: object, clientId: string): Promise<void>;
    /**
     * 设置widget的z-index值
     * @param {number} zindex 取值与css中的z-index一样
     */
    setWidgetZindex(zindex: number): void;
    /**
     * 销毁widget，删除dom节点
     */
    destroy(): void;
    /**
     * 获取当前通话自己的音视频状态(语音，视频，未在通话中)
     * @returns 'audio' || 'video' || 'noSession'
     */
    getMediaStatus(): string;
    /**
     * 发送自定义消息
     * @param {string|object} data 自定义的消息内容
     * @param {string} toRoles 发送消息的用户，'customers'= 访客;'agents'= 坐席;'all'= 除了自己的所有人，默认是'agents';
     * @param {function} onSuccess 成功
     * @param {function} onFailure 失败
     */
    sendCustomMessage(data: string | object, toRoles: string, onSuccess: (resp: object) => void, onFailure: (error: object) => void): void;
    /**
     * 设置turn server地址
     * @param {string} turnserverUrl  turn server地址
     * @param {string} turnserverCredential turn server的密码
     * @param {string} turnserverUsername turn server的用户名
     */
    setTurnServer(turnserverUrl: string, turnserverCredential: string, turnserverUsername: string): void;
}
