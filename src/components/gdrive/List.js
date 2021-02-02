import React from 'react'
import { ListGroup } from "react-bootstrap"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import "./List.css"

function List({ items, isFile }) {
  console.log(items);
  return (
    <ListGroup style={isFile && { marginTop: '-1px' }}>
      <TransitionGroup>
        {items.map(item => (
          <CSSTransition
            key={item.id}
            timeout={5000}
            classNames="item"
          >
            {!isFile ? (
              <ListGroup.Item as={Link} to={`/folder/${item.id}`} action
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faFolder} />{'  '}
                  {item.name}
                </div>
                {item.createdAt && (
                  <div>{new Date(item.createdAt.seconds * 1000).toDateString()}</div>
                )}
              </ListGroup.Item>
            ) : (
                <ListGroup.Item action href={item.url} target="_blank"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <FontAwesomeIcon icon={faFile} />{'  '}
                    {item.name}
                  </div>
                  {item.createdAt && (
                    <div>{new Date(item.createdAt.seconds * 1000).toDateString()}</div>
                  )}
                </ListGroup.Item>
              )}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  )
}

export default List
