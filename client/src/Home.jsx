import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1 className="display-4">Welcome to My Website</h1>
      </header>
      <main>
        <section className="my-4">
          <h2 className="mb-3">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className="my-4">
          <h2 className="mb-3">Services</h2>
          <ul className="list-group">
            <li className="list-group-item">Web Development</li>
            <li className="list-group-item">Graphic Design</li>
            <li className="list-group-item">Marketing</li>
          </ul>
        </section>
      </main>
      <footer className="text-center mt-5">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
