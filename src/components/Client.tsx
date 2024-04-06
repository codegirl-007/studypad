'use client';

export default function Client() {
    return (
      <main>
        <div>
          <h1>Hello World</h1>
          <button className="something" onClick={() => console.log("Hello World")}>Click Me</button>
        </div>
      </main>
    );
  }
  