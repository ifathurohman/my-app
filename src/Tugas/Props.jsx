import React from 'react';

function User(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Home() {
  return (
    <div>
      <User name="ilham" />
    </div>
  );
}
