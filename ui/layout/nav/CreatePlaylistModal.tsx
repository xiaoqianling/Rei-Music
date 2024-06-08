'use client'
import React, {useState} from 'react';
import {
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import {LinkWrapHover} from "@/ui/navi-item";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {selectCurrentTheme, selectUserId} from "@/lib/redux/slices";
import {createPlaylist} from "@/lib/redux/slices/userSlice/chunk";
import Button from "@/ui/components/button";

function CreatePlaylistModal() {
  const currentTheme = useSelector(selectCurrentTheme)
  const userId = useSelector(selectUserId)
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()


  // 模态
  const {isOpen, onOpen, onClose} = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const handleCreatePlaylist = () => {
    if (name == '') {
      return
    }
    dispatch(createPlaylist({userId, name}))
    onClose()
  }

  return (
    <div>
      <LinkWrapHover color={currentTheme.config.hover} onClick={onOpen}>
        <Link className="flex items-center "
              href={'#'}>
          <span>+</span>
          <span>创建歌单</span>
        </Link>
      </LinkWrapHover>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>创建自己的歌单吧！</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <FormControl>
              <div className="font-bold mb-3">歌单名称</div>
              <Input placeholder='请输入歌单名' type={"text"} className="mb-3" ref={initialRef} value={name}
                     focusBorderColor={currentTheme.config.primary}
                     onChange={(e) => {
                       setName(e.target.value)
                     }}/>
            </FormControl>
          </ModalBody>

          <ModalFooter >
            <Button onClick={handleCreatePlaylist} primary className="mr-5">
              创建
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>

  );
}

export default CreatePlaylistModal;