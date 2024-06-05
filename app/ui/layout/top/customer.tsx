'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {ThemeSelector} from "@/app/ui/layout/top/theme-selector";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {
  selectIsLogin,
  selectLoginStatus,
  selectSignupStatus,
  selectUser,
  selectUserDisplayName
} from "@/lib/redux/slices/userSlice/selectors";
import {
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import {
  LoginStatus,
  logoutUser,
  selectCurrentTheme,
  setStatus,
  SignupStatus,
} from "@/lib/redux/slices";
import More from "@/app/ui/layout/top/more";
import Button from "@/app/ui/components/button";
import {loginUser, signupUser} from "@/lib/redux/slices/userSlice/chunk";

function TopBarCustomer() {
  return (
    <div className="flex w-80 justify-around items-center">
      <ThemeSelector/>
      <UserLogin/>
      {/*<Donate/>*/}
      <More/>
    </div>
  )
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const usernamePattern = /^[a-zA-Z0-9]+$/

function UserLogin() {
  // Redux模块
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const displayName = useSelector(selectUserDisplayName)
  const isLogin = useSelector(selectIsLogin)
  const loginStatus = useSelector(selectLoginStatus)
  const signupStatus = useSelector(selectSignupStatus)

  const toast = useToast()
  const toastId = "qianling"
  const currentTheme = useSelector(selectCurrentTheme)

  const [invalid, setInvalid] = useState<boolean>(false)
  const [loginPage, setLoginPage] = useState<boolean>(true)
  const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false)

  // 登录模块
  const {isOpen, onOpen, onClose} = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [nickname, setNickname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // 注册方式 默认用户名注册
  const [signupWay, setSignupWay] = useState(true)
  const [rememberState, setRememberState] = useState<boolean>(true)

  const login = () => {
    if (invalid) {
      toast({
        position: 'bottom-left',
        status: "error",
        title: '请修改格式!'
      })
      return
    }
    dispatch(loginUser({username: username, password: password}))
  }

  const signup = () => {
    if (invalid) {
      toast({
        position: 'bottom-left',
        status: "error",
        title: '请修改格式!'
      })
      return
    }
    dispatch(signupUser({username: username, password: password, displayName: nickname}))
  }

  // 当组件加载时检查本地存储中是否有用户信息
  useEffect(() => {
    const storedUserInfoString = localStorage.getItem('userInfo');
    if (storedUserInfoString) {
      const storedUserInfo = JSON.parse(storedUserInfoString);
      dispatch(loginUser({username: storedUserInfo["username"], password: storedUserInfo["password"]}))
    }
  }, [dispatch]);

  // 检验登录、注册正则
  useEffect(() => {
    if (loginPage)
      if (username !== '' && !emailPattern.test(username) && !usernamePattern.test(username))
        setInvalid(true)
      else setInvalid(false)
    else {
      if (signupWay)
        if (username !== '' && !usernamePattern.test(username))
          setInvalid(true)
        else setInvalid(false)
      else if (username !== '' && !emailPattern.test(username))
        setInvalid(true)
      else setInvalid(false)
    }
  }, [loginPage, signupWay, username]);

  // 获取登录反馈
  useEffect(() => {
    if (loginStatus === LoginStatus.Success) {
      if (!toast.isActive(toastId))
        toast({
          id: toastId,
          position: 'bottom-left',
          status: "success",
          title: `登录成功 \n欢迎 ${displayName}`
        })
      if (rememberState)
        localStorage.setItem('userInfo', JSON.stringify(user))
      onClose()
    } else if (loginStatus === LoginStatus.Fail) {
      setPasswordInvalid(true)
      if (!toast.isActive(toastId))
        toast({
          id: toastId,
          position: 'bottom-left',
          status: "error",
          title: '登陆失败'
        })
      // 复位状态 下次登录还能获取到登录结果
      dispatch(setStatus(LoginStatus.Null))
    }
  }, [dispatch, displayName, loginStatus, onClose, rememberState, toast, user])

  // 获取注册反馈
  useEffect(() => {
    if (signupStatus === SignupStatus.OK) {
      toast({
        position: 'bottom-left',
        status: "success",
        title: `注册成功 \n欢迎 ${displayName}`
      })
      if (rememberState)
        localStorage.setItem('userInfo', JSON.stringify(user))
      onClose()
    } else if (signupStatus === SignupStatus.UsernameExits) {
      setPasswordInvalid(true)
      toast({
        position: 'bottom-left',
        status: "error",
        title: '注册失败 用户名已存在'
      })
    } else if (signupStatus === SignupStatus.EmailExist) {
      setPasswordInvalid(true)
      toast({
        position: 'bottom-left',
        status: "error",
        title: '注册失败 邮箱已存在'
      })

    }
    // 复位状态 下次登录还能获取到登录结果
    dispatch(setStatus(LoginStatus.Null))
  }, [dispatch, displayName, onClose, rememberState, signupStatus, toast, user]);

  return <div className="flex items-center cursor-pointer" onClick={isLogin ? () => {
  } : () => {
    setLoginPage(true)
    setSignupWay(true)
    setRememberState(true)
    setPasswordInvalid(false)
    onOpen()
  }}>
    {!isLogin ? <><Button>登录</Button></> :
      <UserLogout/>
    }

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader sx={{alignSelf: "center"}}>{loginPage ? "登录" : "注册"}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody pb={6}>
          {!loginPage && <FormControl mt={4}>
            <div className="font-bold mb-3">昵称</div>
            <Input placeholder='请输入昵称' type={"text"} className="mb-3" value={nickname}
                   focusBorderColor={currentTheme.config.primary}
                   onChange={(e) => {
                     setNickname(e.target.value)
                   }}/>
          </FormControl>}
          <FormControl className="h-30">
            {loginPage ? <div className="mb-3 font-bold">用户名或邮箱</div> :
              <div className="flex justify-between items-center mb-3 font-bold">
                {signupWay ? "用户名" : "邮箱"}
                <div className="flex items-center">
                  <Switch defaultChecked checked={signupWay}
                          onChange={(event) => {
                            setSignupWay(event.target.checked)
                          }}/>
                  <span className="w-20 font-medium">
                  {signupWay ? "用户名注册" : "邮箱注册"}
                  </span>
                </div>
              </div>}
            <Input ref={initialRef} placeholder='请输入用户名或邮箱' value={username} type={"text"} isInvalid={invalid}
                   focusBorderColor={currentTheme.config.primary}
                   onChange={e => {
                     setUsername(e.target.value)
                     setPasswordInvalid(false)
                   }}/>
            <div
              className='text-red-500 h-2 text-sm'>{invalid ? !loginPage && signupWay ? "用户名只能包含数字和字母" : '请检查邮箱格式' : ''}</div>
          </FormControl>

          <FormControl mt={4}>
            <div className="flex justify-between items-center mb-3 font-bold">
              密码
              <div className="flex items-center">
                <Switch defaultChecked checked={rememberState}
                        onChange={(event) => {
                          setRememberState(event.target.checked)
                        }}/>
                <span className="w-20 font-medium">
                  记住我
                  </span>
              </div>
            </div>
            <Input placeholder='请输入密码' value={password} type={"password"} isInvalid={passwordInvalid}
                   focusBorderColor={currentTheme.config.primary}
                   onChange={e => {
                     setPassword(e.target.value)
                     setPasswordInvalid(false)
                   }}/>
          </FormControl>
        </ModalBody>

        <div className="flex justify-between items-center mx-2 mb-3 px-4 py-2">
          <Button primary
            onClick={() => {
            if (loginPage) {
              setSignupWay(true)
              setRememberState(true)
              setNickname('')
            }
            setLoginPage(state => !state)
          }} className="">{loginPage ? "注册" : "登录"}</Button>

          <div className='flex flex-row'>
            <Button onClick={loginPage ? login : signup} primary className="mr-5"
                    isDisabled={username === '' || password === '' || invalid || !loginPage && nickname === ''}>
              {loginPage ? "登录" : "注册"}
            </Button>
            <Button onClick={onClose}>取消</Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  </div>
}

function UserLogout() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const displayName = useSelector(selectUserDisplayName)
  const dispatch = useDispatch()
  const isLogin = useSelector(selectIsLogin)

  const logout = () => {
    if (isLogin) {
      onClose()
      dispatch(logoutUser())
      localStorage.removeItem('userInfo')
    }
  }
  return <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
    <PopoverTrigger>
      <div className="flex flex-row">
        <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
        <span>{displayName}</span>
      </div>
    </PopoverTrigger>
    <PopoverContent width={"fit-content"}>
      <Button onClick={logout}>退出登录</Button>
    </PopoverContent>
  </Popover>
}

export default TopBarCustomer;


