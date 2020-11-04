import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./Play.css";

const Play = () => {
  const items = [
    { id: "1", link: "https://i.imgur.com/NjfhUI5.png" }
  ];

  // This can be used to check which bucket the item has been dragged into
  const onDragEnd = (result) => {
    return;
  };

  return (
    <div className="play-container">
      <div className="play-spam-bucket">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrtRP_zT97YxmobCjmSmyA6VUOQi6z9XsXLQ&usqp=CAU" width="200" />
      </div>

      <div className="play-email-stack">
        <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
          <Droppable droppableId="droppable">
            {(droppableProvided, droppableSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        className="play-email-stack"
                      >
                        <img src={item.link} width="100%" />
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="play-legit-bucket">
        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/ammunition_box_open.png" width="200" />
      </div>
    </div>
  );
};

export default Play;
