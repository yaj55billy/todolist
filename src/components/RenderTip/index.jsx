import { useRef, useEffect, useCallback } from "react";
import style from './RenderTip.module.sass';

const RenderTip = () => {
  const refCount = useRef(1);
  const refDOM = useRef(null);
  
  useEffect(() => {
    // 測元件 render 的狀況
    refCount.current += 1;
    
    // 關於動態部分
    refDOM.current.classList.remove(style.styleAnimate);
    refDOM.current.classList.add(style.styleAnimate);
  });

  const atAnimationEnd = useCallback(() => {
    refDOM.current.classList.remove(style.styleAnimate);
  }, []);


  return (
    <strong className={ style.root } ref={ refDOM }onAnimationEnd={ atAnimationEnd }>
      { refCount.current }
    </strong>
  )
}

export default RenderTip;