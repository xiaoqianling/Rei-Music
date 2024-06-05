'use client'
import React, {useState} from 'react';
import {FormLabel, ModalFooter} from "@chakra-ui/react";
import Link from "next/link";
import {LinkWrapHover} from "@/app/ui/navi-item";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {createPlaylist, selectCreatePlaylist, selectCurrentTheme, selectUserId} from "@/lib/redux/slices";
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

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
      console.log("输入为空")
      return
    }
    dispatch(createPlaylist({userId, name}))
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
                     onChange={(e) => {
                       setName(e.target.value)
                     }}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreatePlaylist}>
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