import React from 'react'
import { ListGroup, Button } from "react-bootstrap"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./List.css"

function List({ items }) {
  return (
    <ListGroup>
      <TransitionGroup>
        {items.map(item => (
          <CSSTransition
            key={item.id}
            timeout={5000}
            classNames="item"
          >
            <ListGroup.Item>
              {item.name}
            </ListGroup.Item>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  )
}

export default List
