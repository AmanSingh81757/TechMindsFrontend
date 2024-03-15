
import React, { useState, useRef, useEffect } from 'react';
import BoardNavbar from './BoardNavbar';

function Board() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
const [colour , setcolour]=useState("black")
const [pensize , setpensize]=useState("5")
const [bgcolour , setbgcolour]=useState("while")
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(1,1);
    context.lineCap = 'round';
    context.strokeStyle = colour;
    context.lineWidth = pensize;
    contextRef.current = context;
  }, []);

  const onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const onMouseUp = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  return (
    <div>
   <BoardNavbar/>
      <canvas
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default Board;