import React from 'react';

function Article({title, date= "January 1, 1970", minutes, preview}) {
  return (
    <article>
    <h3>{title}</h3>
    <small>{`${date}.${minutes}`}</small>
    <p>{preview}</p>
    </article>
  )
}

export default Article;