import * as React from 'react';
import {Select} from "@chakra-ui/react";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {changeTheme, selectCurrentTheme} from "@/lib/redux/slices";

export function ThemeSwitch() {
  const dispatch = useDispatch()
  const currentTheme = useSelector(selectCurrentTheme)

  const handleThemeChange = (event : any) => {
    dispatch(changeTheme(event.target.value))
  }
  return (
    <>
      <Select width={100} onChange={handleThemeChange} value={currentTheme.value} name={"主题"}
              borderColor={currentTheme.config.primary} focusBorderColor={currentTheme.config.primary}>
        <option value='white'>白</option>
        <option value='green'>绿</option>
        <option value='purple'>紫</option>
        <option value='dark'>暗</option>
      </Select>
    </>
  );
}