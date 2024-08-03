import { use, useEffect, useRef } from "react";
import { TiltCardProps } from "./interface";

const TiltCard: React.FC<TiltCardProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (newX: number, newY: number) {
      this.x = newX - this._x;
      this.y = (newY - this._y) * -1;
    },
    setOrigin: function (e: HTMLElement) {
      const elementRect = e.getBoundingClientRect();
      this._x = elementRect.x + Math.floor(elementRect.width / 2);
      this._y = elementRect.y + Math.floor(elementRect.height / 2);
      console.log(`origin : (${this._x},${this._y})`);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  useEffect(() => {
    const container = containerRef.current!;
    const inner = innerRef.current!;

    let counter = 0;
    const updateRate = 5;

    const isTimeToUpdate = () => {
      return counter++ % updateRate === 0;
    };

    const updateTransformStyle = (x: string, y: string) => {
      inner.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    };

    const update = (e: MouseEvent) => {
      mouse.updatePosition(e.clientX, e.clientY);
      updateTransformStyle(
        (mouse.y / (inner.offsetHeight / 2)).toFixed(2),
        (mouse.x / (inner.offsetWidth / 2)).toFixed(2)
      );
    };

    const reset = () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    };


    const onMouseEnterHandler = (e: MouseEvent) => {
      mouse.setOrigin(container);
      update(e);
    };
    const onMouseLeaveHandler = (e: MouseEvent) => {
      reset();
    };
    const onMouseMoveHandler = (e: MouseEvent) => {
      if (isTimeToUpdate()) {
        update(e);
      }
    };

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  }, [containerRef, innerRef]);

  return (
    <div ref={containerRef} className={`${props.className}`} style={{ perspective: "48px" }}>
      <div ref={innerRef} className="transition-transform duration-100">
        {props.children}
      </div>
    </div>
  );
};

export default TiltCard;
